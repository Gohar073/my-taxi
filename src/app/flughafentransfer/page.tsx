import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Flughafentransfer',
  description:
    'Flughafentransfer Münster: schnell und unkompliziert zu FMO und weiteren Flughäfen. Taxi 70 bringt Sie zuverlässig ans Gate.',
};

export default function AirportTransferPage() {
  return (
    <>
      <PageHero
        title="Flughafentransfer"
        subtitle="Egal ob Urlaub oder Geschäftsreise – wir bringen Sie entspannt zum Flughafen."
      />

      <section className="py-12 bg-gradient-surface">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-xl font-black tracking-tight text-taxi-surface-bright">Unsere Tarife</h2>
              <p className="mt-3 text-taxi-gray-light">
                Wir befördern Sie schnell und unkompliziert zu jedem beliebigen
                Flughafen. Da unser Haupteinzugsgebiet das Münsterland ist,
                bieten wir den Transfer natürlich auch zum Flughafen
                Münster-Osnabrück (FMO) an.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  'Ab 50,00 € für Münster Nord → FMO',
                  'Ab 55,00 € für Münster Mitte → FMO',
                  'Ab 65,00 € für Münster Süd → FMO',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-taxi-gray/30 bg-gradient-card px-4 py-3 font-semibold text-taxi-gray-light shadow-medium"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-taxi-gray">
                Hinweis: Preise können je nach Abholort, Verkehr und Sonderwünschen
                variieren. Für genaue Preise nutzen Sie die Preisanfrage auf der
                Startseite.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-taxi-secondary/30 bg-gradient-to-br from-taxi-secondary/15 to-taxi-secondary/5 p-6 shadow-medium">
                <h3 className="text-lg font-black tracking-tight text-taxi-surface-bright">
                  Tipps für stressfreies Reisen
                </h3>
                <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-taxi-gray-light">
                  <li>Frühzeitig buchen – besonders bei frühen Abflügen.</li>
                  <li>Adresse + Terminal/Flugnummer im Hinweisfeld ergänzen.</li>
                  <li>Bei viel Gepäck oder Gruppe: Personenanzahl angeben.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid className="border-t border-taxi-gray/30" />
    </>
  );
}

