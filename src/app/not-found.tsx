import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-16 bg-gradient-surface">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-taxi-gray/30 bg-gradient-card p-8 text-center shadow-large">
          <div className="text-xs font-black uppercase tracking-widest text-taxi-secondary">
            404
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-taxi-surface-bright md:text-4xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-3 text-sm text-taxi-gray-light">
            Die Seite existiert nicht (oder wurde verschoben). Nutzen Sie die
            Navigation oder gehen Sie zurück zur Startseite.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Zur Startseite</ButtonLink>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-taxi-gray/30 bg-taxi-surface-light px-4 py-2 text-sm font-semibold text-taxi-gray-light shadow-medium hover:bg-taxi-surface-elevated hover:border-taxi-secondary/50 hover:text-taxi-secondary transition-all"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

