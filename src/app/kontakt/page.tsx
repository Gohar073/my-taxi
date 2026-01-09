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
      <PageHero title="Kontaktmöglichkeiten" subtitle="Wir sind 24 Stunden erreichbar." />

      <section className="py-12 bg-gradient-surface">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-6 shadow-medium">
              <div className="text-sm font-black text-taxi-surface-bright">Telefon</div>
              <a
                href={phoneHref}
                className="mt-2 inline-flex text-2xl font-black tracking-tight text-taxi-secondary hover:text-taxi-surface-bright transition-colors"
              >
                {phoneNumber}
              </a>
              <div className="mt-1 text-sm text-taxi-gray-light">24 Stunden erreichbar</div>

              <div className="mt-6 text-sm font-black text-taxi-surface-bright">Adresse</div>
              <div className="mt-2 text-sm text-taxi-gray-light">
                <div>{address.street}</div>
                <div>
                  {address.zip} {address.city}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-taxi-secondary/30 bg-gradient-to-br from-taxi-secondary/15 to-taxi-secondary/5 px-4 py-3 text-sm text-taxi-gray-light">
                Tipp: Für Fahrten bitte die Startseite nutzen und das Formular
                „Taxi bestellen / Preisanfrage" ausfüllen.
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-taxi-gray/30 bg-taxi-surface shadow-medium">
              <iframe
                title="OpenStreetMap"
                src={osmEmbed}
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

