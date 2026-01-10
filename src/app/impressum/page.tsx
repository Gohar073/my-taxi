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

      <section className="py-16 lg:py-24">
        <Container size="narrow">
          <div className="space-y-8">
            {/* Company Info */}
            <div className="rounded-2xl border border-espresso-100 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-lg font-bold text-espresso-900">Unternehmen</h2>
              <div className="mt-4 space-y-3 text-espresso-600">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-espresso-500">Firma</div>
                    <div className="mt-1 font-semibold text-espresso-800">Taxibetrieb Sajid Mehmood</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-espresso-500">Inhaber</div>
                    <div className="mt-1 font-semibold text-espresso-800">Sajid Mehmood</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-espresso-500">Anschrift</div>
                  <div className="mt-1 text-espresso-800">
                    Fuggerstraße 15<br />
                    48165 Münster, Deutschland
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-espresso-500">Telefon</div>
                    <div className="mt-1 font-semibold text-espresso-800">0172 / 58 02 35 7</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-espresso-500">Steuernummer</div>
                    <div className="mt-1 text-espresso-800">333/5087/2866</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl border border-sage-200 bg-sage-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sage-200 text-sage-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-espresso-900">Hinweis</h2>
                  <p className="mt-2 text-sm text-espresso-600">
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
