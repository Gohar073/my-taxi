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
      <section className="py-12">
        <Container className="space-y-6">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black tracking-tight">So erreichen Sie uns</h2>
            <p className="mt-2 text-sm text-black/70">
              Wenn Sie JavaScript deaktiviert haben, nutzen Sie bitte den direkten
              Telefonkontakt:
            </p>
            <a
              href={phoneHref}
              className="mt-4 inline-flex rounded-xl bg-taxi-yellow px-5 py-3 font-black text-taxi-black hover:brightness-95"
            >
              {phoneNumber}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

