import { NextResponse } from 'next/server';

type BookingMode = 'Taxi Bestellung' | 'Preisanfrage';

type BookingPayload = {
  mode: BookingMode;
  date: string;
  time: string;
  passengers: string;
  from: string;
  to: string;
  name: string;
  email: string;
  phone: string;
  wheelchair: boolean;
  childSeat: boolean;
  message: string;
  dsgvo: boolean;
  website?: string; // honeypot
};

function isEmail(s: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}

export async function POST(req: Request) {
  const payload = (await req.json().catch(() => null)) as BookingPayload | null;
  if (!payload) {
    return NextResponse.json({ ok: false, message: 'Invalid JSON.' }, { status: 400 });
  }

  // Honeypot: accept but do nothing.
  if (payload.website && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const required: Array<keyof BookingPayload> = [
    'mode',
    'date',
    'time',
    'passengers',
    'from',
    'to',
    'name',
    'email',
    'phone',
  ];
  for (const k of required) {
    const v = payload[k];
    if (typeof v !== 'string' || !v.trim()) {
      return NextResponse.json(
        { ok: false, message: `Missing field: ${k}` },
        { status: 400 }
      );
    }
  }
  if (!isEmail(payload.email)) {
    return NextResponse.json({ ok: false, message: 'Invalid email.' }, { status: 400 });
  }
  if (!payload.dsgvo) {
    return NextResponse.json(
      { ok: false, message: 'DSGVO consent required.' },
      { status: 400 }
    );
  }

  const bookingWebhookUrl = process.env.BOOKING_WEBHOOK_URL;

  // Optional: forward to external webhook (e.g. Make/Zapier/Slack).
  if (bookingWebhookUrl) {
    const res = await fetch(bookingWebhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        source: 'taxi70-replica',
        receivedAt: new Date().toISOString(),
        booking: payload,
      }),
    }).catch(() => null);

    if (!res || !res.ok) {
      return NextResponse.json(
        { ok: false, message: 'Webhook forwarding failed.' },
        { status: 502 }
      );
    }
  } else {
    // Fallback: log server-side (useful in Vercel logs).
    console.log('[booking]', payload);
  }

  return NextResponse.json({ ok: true });
}

