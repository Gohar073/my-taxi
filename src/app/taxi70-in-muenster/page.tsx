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

export default function MuensterPage() {
  return (
    <>
      <PageHero
        title="Ihr Taxi in Münster"
        subtitle="Taxi 70 ist in Münster/Hiltrup und Umgebung für Sie unterwegs – zuverlässig, freundlich und flexibel."
      />

      <section className="py-12 bg-gradient-surface">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-xl font-black tracking-tight text-taxi-surface-bright">City Transfer</h2>
            <p className="mt-3 text-taxi-gray-light">
              Ob Innenstadt, Hiltrup, Bahnhof oder Umgebung: Wir bringen Sie ohne
              Umwege an Ihren Wunsch-Zielort. Für Termine, Events oder einfach
              bequem von A nach B.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-5 shadow-medium hover:shadow-medium transition-shadow">
                <div className="text-sm font-black text-taxi-surface-bright">Münster & Umgebung</div>
                <div className="mt-1 text-sm text-taxi-gray-light">
                  Schnell verfügbar – auch in Randbezirken.
                </div>
              </div>
              <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-5 shadow-medium hover:shadow-medium transition-shadow">
                <div className="text-sm font-black text-taxi-surface-bright">24/7 erreichbar</div>
                <div className="mt-1 text-sm text-taxi-gray-light">
                  Anrufen oder online anfragen.
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-taxi-secondary/30 bg-gradient-to-br from-taxi-secondary/15 to-taxi-secondary/5 p-6 shadow-medium">
              <div className="text-sm font-black text-taxi-surface-bright">Online bestellen</div>
              <p className="mt-2 text-sm text-taxi-gray-light">
                Nutzen Sie das Anfrageformular mit Abholzeit, Route und
                Personenanzahl.
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

