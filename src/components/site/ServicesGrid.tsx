import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';

const services = [
  {
    title: 'City Transfer',
    description: 'Wir bringen Sie ohne Umwege an Ihren Wunsch-Zielort!',
    href: '/taxi70-in-muenster',
    icon: '/inc/img/services/services-1.png',
  },
  {
    title: 'Krankenfahrten',
    description:
      'Sie müssen zum Arzt oder ins Krankenhaus? Unsere freundlichen Fahrer bringen Sie ans Ziel.',
    href: '/krankentransport',
    icon: '/inc/img/services/services-2.png',
  },
  {
    title: 'Flughafen Transfer',
    description: 'Kein Flughafen ist uns zu weit. Mit uns verpassen Sie nie mehr Ihren Flug.',
    href: '/flughafentransfer',
    icon: '/inc/img/services/services-3.png',
  },
  {
    title: 'Gepäck Transport',
    description:
      'Taxi70 kümmert sich darum, dass Ihr Gepäck dort landet wo es hin gehört.',
    href: '/transport',
    icon: '/inc/img/services/services-4.png',
  },
] as const;

export function ServicesGrid({ className }: { className?: string }) {
  return (
    <section className={cn('py-20 bg-gradient-surface relative overflow-hidden', className)} aria-labelledby="services-title">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-taxi-secondary/5 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-taxi-secondary">
              Taxi70
            </div>
            <h2
              id="services-title"
              className="mt-3 text-3xl font-black tracking-tight text-taxi-surface-bright md:text-4xl lg:text-5xl"
            >
              Unsere Services
            </h2>
          </div>
          <Link
            href="/kontakt"
            className="hidden text-sm font-semibold text-taxi-gray-light underline hover:text-taxi-secondary transition-colors md:inline"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-3xl border border-taxi-gray/40 bg-gradient-card p-8 shadow-glass transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-accent hover:border-taxi-secondary/60 hover:bg-gradient-card-hover backdrop-blur-sm"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <Image
                  src={s.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="relative h-20 w-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl"
                />
              </div>
              <div className="mt-8 text-xl font-black tracking-tight text-taxi-surface-bright group-hover:text-taxi-secondary transition-colors duration-300">
                {s.title}
              </div>
              <p className="mt-4 text-sm text-taxi-gray-light leading-relaxed">{s.description}</p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-taxi-secondary group-hover:text-taxi-accent transition-all duration-300 group-hover:gap-3">
                Mehr erfahren
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

