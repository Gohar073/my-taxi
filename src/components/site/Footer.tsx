import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { address, legalLinks, phoneHref, phoneNumber } from '@/lib/navigation';

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/inc/img/logo_taxi70.png"
              alt="Taxi 70"
              width={130}
              height={48}
            />
            <p className="max-w-sm text-sm text-black/70">
              Zuverlässig. Schnell. Freundlich. Taxi 70 ist Ihr Partner für
              Fahrten in Münster/Hiltrup – 24/7 erreichbar.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Kontakt</div>
            <div className="text-sm text-black/70">
              <div>{address.street}</div>
              <div>
                {address.zip} {address.city}
              </div>
            </div>
            <a
              href={phoneHref}
              className="inline-flex text-sm font-semibold hover:opacity-80"
            >
              {phoneNumber}
            </a>
            <div className="text-sm text-black/70">24 Stunden erreichbar</div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Rechtliches</div>
            <div className="grid gap-2">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-black/70 hover:text-black"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 text-xs text-black/50">
              © {new Date().getFullYear()} Taxi 70. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

