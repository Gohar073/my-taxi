'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/lib/cn';

const services = [
  {
    title: 'City Transfer',
    description: 'Wir bringen Sie ohne Umwege an Ihren Wunsch-Zielort!',
    href: '/taxi70-in-muenster',
    icon: '/inc/img/services/services-1.png',
    color: 'bg-brand-100',
    accent: 'text-brand-600',
  },
  {
    title: 'Krankenfahrten',
    description:
      'Sie müssen zum Arzt oder ins Krankenhaus? Unsere freundlichen Fahrer bringen Sie ans Ziel.',
    href: '/krankentransport',
    icon: '/inc/img/services/services-2.png',
    color: 'bg-sage-100',
    accent: 'text-sage-600',
  },
  {
    title: 'Flughafen Transfer',
    description: 'Kein Flughafen ist uns zu weit. Mit uns verpassen Sie nie mehr Ihren Flug.',
    href: '/flughafentransfer',
    icon: '/inc/img/services/services-3.png',
    color: 'bg-brand-100',
    accent: 'text-brand-600',
  },
  {
    title: 'Gepäck Transport',
    description:
      'Taxi70 kümmert sich darum, dass Ihr Gepäck dort landet wo es hin gehört.',
    href: '/transport',
    icon: '/inc/img/services/services-4.png',
    color: 'bg-sage-100',
    accent: 'text-sage-600',
  },
] as const;

export function ServicesGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className={cn('relative overflow-hidden py-20 lg:py-28', className)}
      aria-labelledby="services-title"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-section" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-brand-100/40 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-sage-100/40 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Unsere Leistungen
            </div>
            <h2
              id="services-title"
              className="mt-4 text-3xl font-bold tracking-tight text-espresso-900 sm:text-4xl lg:text-5xl"
            >
              Unsere Services
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-espresso-600">
              Von City Transfer bis Flughafentransfer – wir sind für Sie da.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Kontakt aufnehmen
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <m.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={s.href}
                className="group relative flex h-full flex-col rounded-3xl border border-espresso-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-card-hover lg:p-8"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[150%]" />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={cn('inline-flex rounded-2xl p-4', s.color)}>
                    <Image
                      src={s.icon}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className={cn(
                    'absolute -inset-2 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40',
                    s.color
                  )} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-espresso-900 transition-colors group-hover:text-brand-600">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-espresso-600 leading-relaxed">
                  {s.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all group-hover:gap-3">
                  Mehr erfahren
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
