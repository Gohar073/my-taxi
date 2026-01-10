import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Taxi 70 in Münster',
  description:
    'Taxi 70 in Münster/Hiltrup: City Transfer, Krankenfahrten, Flughafentransfer und Transport – 24/7 erreichbar.',
};

const features = [
  {
    title: 'Münster & Umgebung',
    description: 'Schnell verfügbar – auch in Randbezirken.',
    icon: '📍',
  },
  {
    title: '24/7 erreichbar',
    description: 'Anrufen oder online anfragen – wir sind immer für Sie da.',
    icon: '🕐',
  },
  {
    title: 'Faire Preise',
    description: 'Transparente Preisgestaltung ohne versteckte Kosten.',
    icon: '💰',
  },
  {
    title: 'Professionell',
    description: 'Erfahrene Fahrer mit lokaler Expertise.',
    icon: '⭐',
  },
];

export default function MuensterPage() {
  return (
    <>
      <PageHero
        title="Ihr Taxi in Münster"
        subtitle="Taxi 70 ist in Münster/Hiltrup und Umgebung für Sie unterwegs – zuverlässig, freundlich und flexibel."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                <span>🚕</span>
                City Transfer
              </div>

              <h2 className="mt-6 text-2xl font-bold text-espresso-900 sm:text-3xl">
                Ihr zuverlässiger Partner in Münster
              </h2>
              <p className="mt-4 text-lg text-espresso-600 leading-relaxed">
                Ob Innenstadt, Hiltrup, Bahnhof oder Umgebung: Wir bringen Sie ohne
                Umwege an Ihren Wunsch-Zielort. Für Termine, Events oder einfach
                bequem von A nach B.
              </p>

              {/* Feature Cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
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

              {/* CTA */}
              <div className="mt-10">
                <ButtonLink href="/#bestellen" size="lg">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Jetzt Taxi bestellen
                </ButtonLink>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                {/* Booking Card */}
                <div className="rounded-2xl border border-brand-200 bg-gradient-amber-soft p-6">
                  <h3 className="text-lg font-bold text-espresso-900">Online bestellen</h3>
                  <p className="mt-2 text-sm text-espresso-600">
                    Nutzen Sie das Anfrageformular mit Abholzeit, Route und
                    Personenanzahl für eine schnelle Bearbeitung.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/#bestellen" className="w-full">
                      Taxi bestellen
                    </ButtonLink>
                  </div>
                </div>

                {/* Areas Card */}
                <div className="rounded-2xl border border-sage-200 bg-sage-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-200 text-sage-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-espresso-900">Unser Einzugsgebiet</h4>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-espresso-700">
                    {['Münster Innenstadt', 'Hiltrup', 'Amelsbüren', 'Wolbeck', 'und Umgebung'].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <svg className="h-4 w-4 flex-shrink-0 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {area}
                      </li>
                    ))}
                  </ul>
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
