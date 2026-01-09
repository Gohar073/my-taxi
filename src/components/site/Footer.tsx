import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { address, legalLinks, phoneHref, phoneNumber } from '@/lib/navigation';

export function Footer() {
  return (
    <footer className="border-t border-taxi-gray/30 bg-gradient-primary text-taxi-gray-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <Container className="py-16 relative">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/inc/img/logo_taxi70.png"
              alt="Taxi 70"
              width={130}
              height={48}
            />
            <p className="max-w-sm text-sm text-taxi-gray-light leading-relaxed">
              Zuverlässig. Schnell. Freundlich. Taxi 70 ist Ihr Partner für
              Fahrten in Münster/Hiltrup – 24/7 erreichbar.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-black text-taxi-surface-bright uppercase tracking-wider">Kontakt</div>
            <div className="text-sm text-taxi-gray-light space-y-1">
              <div>{address.street}</div>
              <div>
                {address.zip} {address.city}
              </div>
            </div>
            <a
              href={phoneHref}
              className="inline-flex text-base font-black text-taxi-secondary hover:text-taxi-accent transition-colors"
            >
              {phoneNumber}
            </a>
            <div className="text-sm text-taxi-gray">24 Stunden erreichbar</div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-black text-taxi-surface-bright uppercase tracking-wider">Rechtliches</div>
            <div className="grid gap-2">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-taxi-gray-light hover:text-taxi-secondary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 text-xs text-taxi-gray">
              © {new Date().getFullYear()} Taxi 70. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

