import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { Container } from '@/components/ui/Container';
import { address, phoneHref, phoneNumber } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Kontaktmöglichkeiten',
  description: 'Kontakt zu Taxi 70: telefonisch 24/7 erreichbar und Standort in Münster.',
};

export default function ContactPage() {
  // Coordinates from the original site's geo meta tags.
  const lat = 51.904241;
  const lon = 7.636477;
  const bbox = [
    lon - 0.02,
    lat - 0.01,
    lon + 0.02,
    lat + 0.01,
  ]
    .map((n) => n.toFixed(6))
    .join('%2C');
  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <>
      <PageHero
        title="Kontaktmöglichkeiten"
        subtitle="Wir sind 24 Stunden erreichbar und freuen uns auf Ihre Anfrage."
        icon="📞"
        image="/inc/img/hero/jahanzeb-ahsan-SE3C_4AF_jU-unsplash.jpg"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-light to-surface-cream">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="space-y-6">
                {/* Phone Card */}
                <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card transition-all hover:shadow-card-hover hover:border-taxi-400">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-taxi-500 text-night-900">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-night-900">Telefon</h3>
                      <a
                        href={phoneHref}
                        className="mt-1 block text-2xl font-black text-taxi-600 transition-colors hover:text-taxi-700"
                      >
                        {phoneNumber}
                      </a>
                      <p className="mt-1 text-sm text-night-600">
                        24 Stunden, 7 Tage die Woche
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card transition-all hover:shadow-card-hover hover:border-taxi-400">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-night-900 text-taxi-400">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-night-900">Adresse</h3>
                      <p className="mt-1 text-night-700 font-medium">{address.street}</p>
                      <p className="text-night-700 font-medium">{address.zip} {address.city}</p>
                    </div>
                  </div>
                </div>

                {/* Tip Card */}
                <div className="rounded-2xl border-2 border-taxi-300 bg-taxi-100 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-taxi-500 text-night-900">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-night-900">Tipp</h4>
                      <p className="mt-1 text-sm text-night-700">
                        Für Fahrten nutzen Sie bitte die Startseite und das Formular
                        „Taxi bestellen / Preisanfrage" für eine schnelle Bearbeitung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border-2 border-night-100 bg-white shadow-large">
                <iframe
                  title="OpenStreetMap"
                  src={osmEmbed}
                  className="h-[450px] w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center text-sm text-night-600 font-medium">
                📍 Münster / Hiltrup - Taxi 70 Standort
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
