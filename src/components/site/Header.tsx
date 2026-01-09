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
    <header className="sticky top-0 z-50 border-b border-taxi-gray/30 bg-gradient-to-r from-taxi-surface/95 via-taxi-surface-light/95 to-taxi-surface/95 backdrop-blur-2xl shadow-glass">
      <div className="absolute inset-0 bg-gradient-glass opacity-50" />
      <Container className="relative flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taxi-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-taxi-surface"
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
              'text-sm font-semibold transition-colors',
              pathname === '/' 
                ? 'text-taxi-secondary' 
                : 'text-taxi-gray-light hover:text-taxi-secondary'
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
                'flex items-center gap-2 text-sm font-semibold transition-colors',
                pathname?.startsWith('/transport') ||
                  pathname?.startsWith('/flughafentransfer') ||
                  pathname?.startsWith('/krankentransport') ||
                  pathname?.startsWith('/rollstuhltransport')
                  ? 'text-taxi-secondary'
                  : 'text-taxi-gray-light hover:text-taxi-secondary'
              )}
            >
              Services
              <span className="text-xs text-taxi-gray">▾</span>
            </button>
            <m.div
              className={cn(
                'absolute left-0 top-full mt-2 w-72 rounded-2xl border border-taxi-gray/40 bg-gradient-card p-2 shadow-glass backdrop-blur-2xl',
                servicesOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
              )}
              style={{ 
                backgroundColor: 'rgba(26, 35, 50, 0.95)',
                backdropFilter: 'blur(20px) saturate(180%)',
              }}
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
                      'block rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200',
                      'hover:bg-taxi-secondary/20 hover:text-taxi-secondary hover:translate-x-1',
                      pathname === s.href
                        ? 'bg-taxi-secondary/30 text-taxi-secondary shadow-soft border-l-2 border-taxi-secondary'
                        : 'text-taxi-gray-light hover:border-l-2 hover:border-taxi-secondary/50'
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
              'text-sm font-semibold transition-colors',
              pathname === '/taxi70-in-muenster' 
                ? 'text-taxi-secondary' 
                : 'text-taxi-gray-light hover:text-taxi-secondary'
            )}
            href="/taxi70-in-muenster"
          >
            Taxi in Münster
          </Link>
          <Link
            className={cn(
              'text-sm font-semibold transition-colors',
              pathname === '/kontakt' 
                ? 'text-taxi-secondary' 
                : 'text-taxi-gray-light hover:text-taxi-secondary'
            )}
            href="/kontakt"
          >
            Kontakt
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={phoneHref}
            className="text-sm font-semibold text-taxi-gray-light hover:text-taxi-secondary transition-colors"
          >
            {phoneNumber}
          </a>
          <ButtonLink href="/#bestellen" size="sm">
            Taxi bestellen
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-taxi-gray/30 bg-taxi-surface-light text-base font-semibold text-taxi-gray-light shadow-medium hover:bg-taxi-surface-elevated hover:text-taxi-secondary transition-all md:hidden"
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
          open ? 'block border-t border-taxi-gray/30 bg-gradient-to-b from-taxi-surface to-taxi-surface-light' : 'hidden'
        )}
      >
        <Container className="py-4">
          <div className="grid gap-2">
            <Link
              className="rounded-xl px-3 py-2 font-semibold text-taxi-gray-light hover:bg-taxi-secondary/20 hover:text-taxi-secondary transition-all"
              href="/"
              onClick={() => setOpen(false)}
            >
              Start
            </Link>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-taxi-gray">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                className="rounded-xl px-3 py-2 font-semibold text-taxi-gray-light hover:bg-taxi-secondary/20 hover:text-taxi-secondary transition-all"
                href={s.href}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <Link
              className="mt-2 rounded-xl px-3 py-2 font-semibold text-taxi-gray-light hover:bg-taxi-secondary/20 hover:text-taxi-secondary transition-all"
              href="/taxi70-in-muenster"
              onClick={() => setOpen(false)}
            >
              Taxi in Münster
            </Link>
            <Link
              className="rounded-xl px-3 py-2 font-semibold text-taxi-gray-light hover:bg-taxi-secondary/20 hover:text-taxi-secondary transition-all"
              href="/kontakt"
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Link>

            <div className="mt-3 grid gap-2">
              <a
                href={phoneHref}
                className="rounded-xl border border-taxi-gray/30 bg-taxi-surface-light px-3 py-2 text-center font-semibold text-taxi-gray-light hover:bg-taxi-surface-elevated hover:text-taxi-secondary transition-all shadow-medium"
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

