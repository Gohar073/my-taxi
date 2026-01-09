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

export default function MedicalTransportPage() {
  return (
    <>
      <PageHero
        title="Krankentransport"
        subtitle="Sie müssen zum Arzt oder ins Krankenhaus? Unsere freundlichen Fahrer bringen Sie ans Ziel."
      />

      <section className="py-12 bg-gradient-surface">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-xl font-black tracking-tight text-taxi-surface-bright">Krankenfahrten</h2>
            <p className="mt-3 text-taxi-gray-light">
              Ob Arzttermin, Klinik, Reha oder Therapie: Wir holen Sie pünktlich ab
              und fahren Sie sicher zu Ihrem Termin. Auf Wunsch können Hin- und
              Rückfahrt direkt mitgeplant werden.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-5 shadow-medium hover:shadow-medium transition-shadow">
                <div className="text-sm font-black text-taxi-surface-bright">Pünktlich</div>
                <div className="mt-1 text-sm text-taxi-gray-light">
                  Terminzeiten im Blick – zuverlässige Abholung.
                </div>
              </div>
              <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-5 shadow-medium hover:shadow-medium transition-shadow">
                <div className="text-sm font-black text-taxi-surface-bright">Diskret & freundlich</div>
                <div className="mt-1 text-sm text-taxi-gray-light">
                  Professioneller Service mit Rücksicht auf Ihre Situation.
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-taxi-secondary/30 bg-gradient-to-br from-taxi-secondary/15 to-taxi-secondary/5 p-6 shadow-medium">
              <div className="text-sm font-black text-taxi-surface-bright">Tipp</div>
              <p className="mt-2 text-sm text-taxi-gray-light">
                Falls ein Rollstuhltransport nötig ist, wählen Sie im Formular auf
                der Startseite die Option „Rollstuhltransport".
              </p>
              <div className="mt-5">
                <ButtonLink href="/#bestellen">Taxi bestellen</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid className="border-t border-taxi-gray/30" />
    </>
  );
}

