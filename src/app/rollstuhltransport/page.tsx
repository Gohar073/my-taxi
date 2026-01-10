import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Rollstuhltransport',
  description:
    'Rollstuhltransport in Münster: barrierearme, zuverlässige Fahrten – Taxi 70 hilft Ihnen sicher ans Ziel.',
};

const services = [
  'Terminfahrten (Arzt, Therapie, Klinik)',
  'Abholung zuhause oder an Einrichtungen',
  'Begleitpersonen möglich',
  'Hinweisfeld für Details (z.B. Stockwerk, Eingang, Rampe)',
];

export default function WheelchairTransportPage() {
  return (
    <>
      <PageHero
        title="Rollstuhltransport"
        subtitle="Barrierearm unterwegs – wir unterstützen Sie bei der Fahrt in Münster und Umgebung."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                <span>♿</span>
                Barrierearmer Transport
              </div>

              <h2 className="mt-6 text-2xl font-bold text-espresso-900 sm:text-3xl">
                Rollstuhltransport in Münster
              </h2>
              <p className="mt-4 text-lg text-espresso-600 leading-relaxed">
                Wenn Sie Unterstützung benötigen, planen wir die Fahrt mit Ihnen
                gemeinsam: Abholort, Ziel, Begleitperson und besondere Hinweise.
                Bitte geben Sie im Formular an, dass ein Rollstuhltransport nötig ist.
              </p>

              {/* Services List */}
              <div className="mt-8 rounded-2xl border border-espresso-100 bg-white p-6 shadow-soft">
                <h3 className="font-bold text-espresso-900">Unser Angebot umfasst:</h3>
                <ul className="mt-4 space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-espresso-700">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <ButtonLink href="/#bestellen" size="lg">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Jetzt anfragen
                </ButtonLink>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                {/* Booking Card */}
                <div className="rounded-2xl border border-brand-200 bg-gradient-amber-soft p-6">
                  <h3 className="text-lg font-bold text-espresso-900">Einfach buchen</h3>
                  <p className="mt-2 text-sm text-espresso-600">
                    Nutzen Sie die Online-Anfrage oder rufen Sie uns an.
                    Wählen Sie im Formular die Option „Rollstuhltransport".
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/#bestellen" className="w-full">
                      Zum Formular
                    </ButtonLink>
                  </div>
                </div>

                {/* Info Card */}
                <div className="rounded-2xl border border-sage-200 bg-sage-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-200 text-sage-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-espresso-900">Mit Fürsorge</h4>
                  </div>
                  <p className="mt-4 text-sm text-espresso-700">
                    Unsere Fahrer sind erfahren im Umgang mit besonderen Bedürfnissen
                    und sorgen für eine sichere, komfortable Fahrt.
                  </p>
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
