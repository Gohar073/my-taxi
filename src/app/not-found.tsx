import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-16">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            <span>Fehler 404</span>
          </div>

          {/* Icon */}
          <div className="mt-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-100">
              <svg className="h-12 w-12 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-espresso-900 sm:text-4xl">
            Seite nicht gefunden
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-lg text-espresso-600">
            Die Seite existiert nicht (oder wurde verschoben). Nutzen Sie die
            Navigation oder gehen Sie zurück zur Startseite.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/" size="lg">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Zur Startseite
            </ButtonLink>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-espresso-200 bg-white px-6 py-4 text-base font-semibold text-espresso-700 shadow-soft transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kontakt
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
