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

/**
 * Format the booking data into a readable WhatsApp message
 */
function formatWhatsAppMessage(payload: BookingPayload): string {
  const options: string[] = [];
  if (payload.wheelchair) options.push('🦽 Rollstuhltransport');
  if (payload.childSeat) options.push('👶 Kindersitz');

  const lines = [
    `🚕 *Neue ${payload.mode}*`,
    '',
    `📅 *Datum:* ${payload.date}`,
    `🕐 *Uhrzeit:* ${payload.time}`,
    `👥 *Personen:* ${payload.passengers}`,
    '',
    `📍 *Von:* ${payload.from}`,
    `🎯 *Nach:* ${payload.to}`,
    '',
    `👤 *Name:* ${payload.name}`,
    `📧 *E-Mail:* ${payload.email}`,
    `📞 *Telefon:* ${payload.phone}`,
  ];

  if (options.length > 0) {
    lines.push('', `⚙️ *Optionen:* ${options.join(', ')}`);
  }

  if (payload.message?.trim()) {
    lines.push('', `💬 *Nachricht:*`, payload.message);
  }

  lines.push('', `⏰ *Empfangen:* ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}`);

  return lines.join('\n');
}

/**
 * Send a WhatsApp message using the WhatsApp Business Cloud API
 */
async function sendWhatsAppMessage(message: string): Promise<{ success: boolean; error?: string }> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const ownerWhatsApp = process.env.OWNER_WHATSAPP;

  // If WhatsApp credentials are not configured, skip silently
  if (!phoneNumberId || !accessToken || !ownerWhatsApp) {
    console.log('[WhatsApp] Credentials not configured, skipping WhatsApp notification');
    return { success: true }; // Return success to not block the booking
  }

  // Clean the phone number (remove spaces, dashes, etc.)
  const cleanPhone = ownerWhatsApp.replace(/[\s\-\(\)]/g, '');

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: cleanPhone,
          type: 'text',
          text: {
            preview_url: false,
            body: message,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[WhatsApp] API Error:', errorData);
      return { 
        success: false, 
        error: errorData?.error?.message || 'WhatsApp API error' 
      };
    }

    const data = await response.json();
    console.log('[WhatsApp] Message sent successfully:', data?.messages?.[0]?.id);
    return { success: true };
  } catch (error) {
    console.error('[WhatsApp] Error sending message:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
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

  // Log the booking
  console.log('[booking]', payload);

  // Send WhatsApp notification to owner
  const whatsappMessage = formatWhatsAppMessage(payload);
  const whatsappResult = await sendWhatsAppMessage(whatsappMessage);
  
  if (!whatsappResult.success) {
    console.error('[booking] WhatsApp notification failed:', whatsappResult.error);
    // We don't fail the booking if WhatsApp fails - just log it
  }

  // Optional: forward to external webhook (e.g. Make/Zapier/Slack).
  const bookingWebhookUrl = process.env.BOOKING_WEBHOOK_URL;
  if (bookingWebhookUrl) {
    const res = await fetch(bookingWebhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        source: 'taxi70-replica',
        receivedAt: new Date().toISOString(),
        booking: payload,
        whatsappSent: whatsappResult.success,
      }),
    }).catch(() => null);

    if (!res || !res.ok) {
      console.error('[booking] Webhook forwarding failed');
    }
  }

  return NextResponse.json({ ok: true });
}
