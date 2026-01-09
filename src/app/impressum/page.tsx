import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Impressum',
};

export default function ImprintPage() {
  return (
    <>
      <PageHero title="Impressum" subtitle="Angaben gemäß § 5 TMG" />

      <section className="py-12 bg-gradient-surface">
        <Container className="space-y-8">
          <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-6 shadow-medium">
            <h2 className="text-lg font-black tracking-tight text-taxi-surface-bright">Unternehmen</h2>
            <div className="mt-3 space-y-1 text-sm text-taxi-gray-light">
              <div>Taxibetrieb Sajid Mehmood</div>
              <div>Inhaber: Sajid Mehmood</div>
              <div>Anschrift: Fuggerstraße 15, 48165 Münster, Deutschland</div>
              <div>Telefon: 0172 / 58 02 35 7</div>
              <div className="text-taxi-gray">
                E-Mail: (auf der Originalseite ggf. JavaScript-geschützt)
              </div>
              <div>Steuernummer: 333/5087/2866</div>
            </div>
          </div>

          <div className="rounded-3xl border border-taxi-secondary/30 bg-gradient-to-br from-taxi-secondary/15 to-taxi-secondary/5 p-6 shadow-medium">
            <h2 className="text-lg font-black tracking-tight text-taxi-surface-bright">Hinweis</h2>
            <p className="mt-2 text-sm text-taxi-gray-light">
              Dieses Projekt ist eine Next.js-Neuumsetzung der öffentlich
              einsehbaren Inhalte/Struktur von taxi70.de (Design modernisiert).
              Rechtstexte sollten vor produktivem Einsatz juristisch geprüft
              werden.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

