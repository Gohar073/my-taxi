import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Flughafentransfer',
  description:
    'Flughafentransfer Münster: schnell und unkompliziert zu FMO und weiteren Flughäfen. Taxi 70 bringt Sie zuverlässig ans Gate.',
};

const prices = [
  { route: 'Münster Nord → FMO', price: '50,00 €' },
  { route: 'Münster Mitte → FMO', price: '55,00 €' },
  { route: 'Münster Süd → FMO', price: '65,00 €' },
];

const tips = [
  'Frühzeitig buchen – besonders bei frühen Abflügen.',
  'Adresse + Terminal/Flugnummer im Hinweisfeld ergänzen.',
  'Bei viel Gepäck oder Gruppe: Personenanzahl angeben.',
];

export default function AirportTransferPage() {
  return (
    <>
      <PageHero
        title="Flughafentransfer"
        subtitle="Egal ob Urlaub oder Geschäftsreise – wir bringen Sie entspannt zum Flughafen."
        icon="✈️"
        image="/inc/img/hero/jahanzeb-ahsan-SE3C_4AF_jU-unsplash.jpg"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-light to-surface-cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-taxi-400 bg-taxi-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-night-900">
                <span>✈️</span>
                Flughafen Service
              </div>

              <h2 className="mt-6 text-2xl font-black text-night-900 sm:text-3xl">
                Unsere Flughafen-Tarife
              </h2>
              <p className="mt-4 text-lg text-night-700 leading-relaxed font-medium">
                Wir befördern Sie schnell und unkompliziert zu jedem beliebigen
                Flughafen. Da unser Haupteinzugsgebiet das Münsterland ist,
                bieten wir den Transfer natürlich auch zum Flughafen
                Münster-Osnabrück (FMO) an.
              </p>

              {/* Price Cards */}
              <div className="mt-8 space-y-4">
                {prices.map((item) => (
                  <div
                    key={item.route}
                    className="group flex items-center justify-between rounded-2xl border-2 border-night-100 bg-white p-5 shadow-card transition-all hover:border-taxi-400 hover:shadow-card-hover"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-taxi-100 text-night-900 transition-colors group-hover:bg-taxi-500">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <span className="font-bold text-night-800">{item.route}</span>
                    </div>
                    <span className="text-lg font-black text-taxi-600">Ab {item.price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-night-600">
                <strong>Hinweis:</strong> Preise können je nach Abholort, Verkehr und
                Sonderwünschen variieren. Für genaue Preise nutzen Sie die Preisanfrage.
              </p>

              <div className="mt-8">
                <ButtonLink href="/#bestellen" size="lg">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Jetzt Transfer buchen
                </ButtonLink>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                {/* Tips Card */}
                <div className="rounded-2xl border-2 border-night-200 bg-night-900 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-taxi-500 text-night-900">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-taxi-400">
                      Tipps für stressfreies Reisen
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3 text-sm text-night-300">
                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-taxi-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="rounded-2xl border-2 border-taxi-300 bg-taxi-100 p-6">
                  <h4 className="font-black text-night-900">24/7 erreichbar</h4>
                  <p className="mt-2 text-sm text-night-700">
                    Früher Flug? Später Ankunft? Kein Problem – wir sind rund um
                    die Uhr für Sie da.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid className="border-t-2 border-night-100" />
    </>
  );
}
