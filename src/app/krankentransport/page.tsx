import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Krankentransport',
  description:
    'Krankenfahrten in Münster: zum Arzt, Krankenhaus oder zur Therapie – Taxi 70 bringt Sie zuverlässig ans Ziel.',
};

const features = [
  {
    title: 'Pünktlich',
    description: 'Terminzeiten im Blick – zuverlässige Abholung.',
    icon: '⏰',
  },
  {
    title: 'Diskret & freundlich',
    description: 'Professioneller Service mit Rücksicht auf Ihre Situation.',
    icon: '🤝',
  },
  {
    title: 'Hin- & Rückfahrt',
    description: 'Beides kann direkt mitgeplant werden.',
    icon: '🔄',
  },
  {
    title: 'Rollstuhl-Option',
    description: 'Rollstuhltransport auf Anfrage möglich.',
    icon: '♿',
  },
];

export default function MedicalTransportPage() {
  return (
    <>
      <PageHero
        title="Krankentransport"
        subtitle="Sie müssen zum Arzt oder ins Krankenhaus? Unsere freundlichen Fahrer bringen Sie sicher und pünktlich ans Ziel."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                <span>🏥</span>
                Krankenfahrten
              </div>

              <h2 className="mt-6 text-2xl font-bold text-espresso-900 sm:text-3xl">
                Zuverlässige Krankenfahrten
              </h2>
              <p className="mt-4 text-lg text-espresso-600 leading-relaxed">
                Ob Arzttermin, Klinik, Reha oder Therapie: Wir holen Sie pünktlich ab
                und fahren Sie sicher zu Ihrem Termin. Auf Wunsch können Hin- und
                Rückfahrt direkt mitgeplant werden.
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                {/* Booking Card */}
                <div className="rounded-2xl border border-brand-200 bg-gradient-amber-soft p-6">
                  <h3 className="text-lg font-bold text-espresso-900">Jetzt buchen</h3>
                  <p className="mt-2 text-sm text-espresso-600">
                    Falls ein Rollstuhltransport nötig ist, wählen Sie im Formular
                    die Option „Rollstuhltransport".
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/#bestellen" className="w-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Taxi bestellen
                    </ButtonLink>
                  </div>
                </div>

                {/* Info Card */}
                <div className="rounded-2xl border border-sage-200 bg-sage-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-200 text-sage-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-espresso-900">Gut zu wissen</h4>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-espresso-700">
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 erreichbar
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Erfahrene, freundliche Fahrer
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Komfortable Fahrzeuge
                    </li>
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
