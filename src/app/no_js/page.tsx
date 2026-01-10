import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { Container } from '@/components/ui/Container';
import { phoneHref, phoneNumber } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Seite ohne JavaScript',
  description:
    'Hinweise zur Nutzung ohne JavaScript. Für das Online-Formular ist JavaScript erforderlich.',
};

export default function NoJsPage() {
  return (
    <>
      <PageHero
        title="Seite ohne JavaScript"
        subtitle="Die meisten Inhalte funktionieren auch ohne JavaScript – das Anfrageformular benötigt jedoch JavaScript."
      />
      <section className="py-12 bg-gradient-surface">
        <Container className="space-y-6">
          <div className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-6 shadow-medium">
            <h2 className="text-lg font-black tracking-tight text-taxi-surface-bright">So erreichen Sie uns</h2>
            <p className="mt-2 text-sm text-taxi-gray-light">
              Wenn Sie JavaScript deaktiviert haben, nutzen Sie bitte den direkten
              Telefonkontakt:
            </p>
            <a
              href={phoneHref}
              className="mt-4 inline-flex rounded-xl bg-gradient-gold px-5 py-3 font-black text-taxi-surface-bright shadow-medium hover:shadow-large hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {phoneNumber}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

