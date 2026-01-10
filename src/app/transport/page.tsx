import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Transport',
  description:
    'Schnelle, zuverlässige Transporte in und um Münster – Taxi 70 übernimmt Dokumente, Gepäck und mehr (kein Umzug).',
};

const features = [
  {
    title: 'Schnell',
    description: 'Manchmal muss es eben schnell gehen – wir sind zur Stelle.',
    icon: '⚡',
  },
  {
    title: 'Zuverlässig',
    description: 'Professionelle Abwicklung mit optionaler Empfangsbestätigung.',
    icon: '✓',
  },
  {
    title: 'Flexibel',
    description: 'Alles was in unsere Fahrzeuge passt, transportieren wir.',
    icon: '📦',
  },
];

export default function TransportPage() {
  return (
    <>
      <PageHero
        title="Transport"
        subtitle="Wir über­nehm­­en Ihre Trans­porte – schnell, zuverlässig und professionell."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                <span>📦</span>
                Transport Service
              </div>

              <h2 className="mt-6 text-2xl font-bold text-espresso-900 sm:text-3xl">
                Wir übernehmen Ihre Transporte
              </h2>

              <div className="mt-6 space-y-4 text-lg text-espresso-600 leading-relaxed">
                <p>
                  Manchmal muss es eben schnell gehen und wir sind zur Stelle. Wir
                  fahren „fast" alles was in unsere Fahrzeuge passt. Ob Dokumente die
                  schnell an einen Geschäftspartner überbracht werden sollen bis hin
                  zur Tasche für Ihre Großmutter die ins Krankenhaus gebracht werden
                  soll.
                </p>
                <p>
                  Wir dürfen behaupten, dass die Transporte mit Taxi70 schnell,
                  zuverlässig und professionell ablaufen. Unser freundliches Team ist
                  in und um Münster flexibel einsetzbar.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-espresso-100 bg-white p-5 shadow-soft transition-all hover:border-brand-200 hover:shadow-medium"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-2xl transition-colors group-hover:bg-brand-500">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 font-bold text-espresso-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-espresso-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <ButtonLink href="/#bestellen" size="lg">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Transport anfragen
                </ButtonLink>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                {/* Service Details */}
                <div className="rounded-2xl border border-brand-200 bg-gradient-amber-soft p-6">
                  <h3 className="text-lg font-bold text-espresso-900">Unser Service</h3>
                  <ul className="mt-4 space-y-3 text-sm text-espresso-700">
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Komplette Abwicklung zu 100%
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Optional mit Empfänger-Unterschrift
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Benachrichtigung nach Zustellung
                    </li>
                  </ul>
                </div>

                {/* Note */}
                <div className="rounded-2xl border border-espresso-200 bg-espresso-50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-espresso-200 text-espresso-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-espresso-800">Hinweis</h4>
                      <p className="mt-1 text-sm text-espresso-600">
                        Wir bitten um Verständnis, dass wir keine Umzüge durchführen
                        können. Für größere Umzüge wenden Sie sich bitte an spezialisierte
                        Unternehmen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid className="border-t border-espresso-100" />
    </>
  );
}
