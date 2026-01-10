import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Impressum',
};

export default function ImprintPage() {
  return (
    <>
      <PageHero 
        title="Impressum" 
        subtitle="Angaben gemäß § 5 TMG" 
        icon="📋"
        image="/inc/img/hero/maik-winnecke-Epm5HX_Iwzs-unsplash.jpg"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-light to-surface-cream">
        <Container size="narrow">
          <div className="space-y-8">
            {/* Company Info */}
            <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-black text-night-900">Unternehmen</h2>
              <div className="mt-4 space-y-3 text-night-700">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-bold text-night-500">Firma</div>
                    <div className="mt-1 font-bold text-night-900">Taxibetrieb Sajid Mehmood</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-night-500">Inhaber</div>
                    <div className="mt-1 font-bold text-night-900">Sajid Mehmood</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-night-500">Anschrift</div>
                  <div className="mt-1 text-night-800">
                    Fuggerstraße 15<br />
                    48165 Münster, Deutschland
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-bold text-night-500">Telefon</div>
                    <div className="mt-1 font-bold text-taxi-600">0172 / 58 02 35 7</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-night-500">Steuernummer</div>
                    <div className="mt-1 text-night-800">333/5087/2866</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl border-2 border-night-200 bg-night-900 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-taxi-500 text-night-900">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-black text-taxi-400">Hinweis</h2>
                  <p className="mt-2 text-sm text-night-300">
                    Dieses Projekt ist eine Next.js-Neuumsetzung der öffentlich
                    einsehbaren Inhalte/Struktur von taxi70.de.
                    Rechtstexte sollten vor produktivem Einsatz juristisch geprüft
                    werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
