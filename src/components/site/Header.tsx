'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { navLinks, phoneHref, phoneNumber } from '@/lib/navigation';

export function Header() {
  const [open, setOpen] = useState(false);

  const services = useMemo(() => {
    const found = navLinks.find((l) => 'children' in l);
    return found && 'children' in found ? found.children : [];
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taxi-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <Image
            src="/inc/img/logo_taxi70.png"
            alt="Taxi 70"
            width={120}
            height={44}
            priority
          />
          <span className="sr-only">Taxi 70</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link className="text-sm font-semibold hover:opacity-80" href="/">
            Start
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-80"
            >
              Services
              <span className="text-xs opacity-70">▾</span>
            </button>
            <div className="pointer-events-none absolute left-0 top-full mt-2 w-64 translate-y-1 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-lg transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-black/5"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            className="text-sm font-semibold hover:opacity-80"
            href="/taxi70-in-muenster"
          >
            Taxi in Münster
          </Link>
          <Link
            className="text-sm font-semibold hover:opacity-80"
            href="/kontakt"
          >
            Kontakt
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={phoneHref}
            className="text-sm font-semibold text-black/70 hover:text-black"
          >
            {phoneNumber}
          </a>
          <ButtonLink href="/#bestellen" size="sm">
            Taxi bestellen
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-base font-semibold shadow-sm hover:bg-black/5 md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </Container>

      <div
        className={cn(
          'md:hidden',
          open ? 'block border-t border-black/10 bg-white' : 'hidden'
        )}
      >
        <Container className="py-4">
          <div className="grid gap-2">
            <Link
              className="rounded-xl px-3 py-2 font-semibold hover:bg-black/5"
              href="/"
              onClick={() => setOpen(false)}
            >
              Start
            </Link>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-black/50">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                className="rounded-xl px-3 py-2 font-semibold hover:bg-black/5"
                href={s.href}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <Link
              className="mt-2 rounded-xl px-3 py-2 font-semibold hover:bg-black/5"
              href="/taxi70-in-muenster"
              onClick={() => setOpen(false)}
            >
              Taxi in Münster
            </Link>
            <Link
              className="rounded-xl px-3 py-2 font-semibold hover:bg-black/5"
              href="/kontakt"
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Link>

            <div className="mt-3 grid gap-2">
              <a
                href={phoneHref}
                className="rounded-xl border border-black/10 px-3 py-2 text-center font-semibold"
              >
                Anrufen: {phoneNumber}
              </a>
              <ButtonLink href="/#bestellen" onClick={() => setOpen(false)}>
                Taxi bestellen
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

