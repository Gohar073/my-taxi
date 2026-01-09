'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { m } from 'framer-motion';

import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { navLinks, phoneHref, phoneNumber } from '@/lib/navigation';

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

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
          <Link
            className={cn(
              'text-sm font-semibold transition hover:opacity-80',
              pathname === '/' ? 'text-black' : 'text-black/80'
            )}
            href="/"
          >
            Start
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                'flex items-center gap-2 text-sm font-semibold transition hover:opacity-80',
                pathname?.startsWith('/transport') ||
                  pathname?.startsWith('/flughafentransfer') ||
                  pathname?.startsWith('/krankentransport') ||
                  pathname?.startsWith('/rollstuhltransport')
                  ? 'text-black'
                  : 'text-black/80'
              )}
            >
              Services
              <span className="text-xs opacity-70">▾</span>
            </button>
            <m.div
              className={cn(
                'absolute left-0 top-full mt-2 w-72 rounded-2xl border border-black/10 bg-white p-2 shadow-lg',
                servicesOpen ? 'pointer-events-auto' : 'pointer-events-none'
              )}
              initial={false}
              animate={
                servicesOpen
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 10, scale: 0.98 }
              }
              transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {services.map((s) => (
                <m.div
                  key={s.href}
                  initial={false}
                  animate={servicesOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <Link
                    href={s.href}
                    className={cn(
                      'block rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-black/5',
                      pathname === s.href
                        ? 'bg-black/5 text-black'
                        : 'text-black/80'
                    )}
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                </m.div>
              ))}
            </m.div>
          </div>

          <Link
            className={cn(
              'text-sm font-semibold transition hover:opacity-80',
              pathname === '/taxi70-in-muenster' ? 'text-black' : 'text-black/80'
            )}
            href="/taxi70-in-muenster"
          >
            Taxi in Münster
          </Link>
          <Link
            className={cn(
              'text-sm font-semibold transition hover:opacity-80',
              pathname === '/kontakt' ? 'text-black' : 'text-black/80'
            )}
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

