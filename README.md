# Taxi70 Website Replica (Next.js)

Next.js (App Router) implementation rebuilt with a modern UI using Tailwind CSS.

## Pages

- `/` (Start) + **Taxi bestellen / Preisanfrage** form
- `/transport`
- `/flughafentransfer`
- `/krankentransport`
- `/rollstuhltransport`
- `/taxi70-in-muenster`
- `/kontakt`
- `/impressum`
- `/datenschutz`

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Booking form delivery (optional)

The form posts to `POST /api/booking`.

By default it logs the payload server-side. If you want the form to forward to a webhook, set:

```bash
BOOKING_WEBHOOK_URL="https://your-webhook.example.com"
```

## Deploy to Vercel

If you have the Vercel GitHub integration enabled, you can deploy via dashboard automatically.

Or via CLI:

```bash
npx vercel
npx vercel --prod
```

