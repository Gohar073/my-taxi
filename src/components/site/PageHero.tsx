'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-espresso-100 bg-gradient-warm"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-brand-200/50 blur-[100px]" />
        <div className="absolute -right-32 top-0 h-[300px] w-[300px] rounded-full bg-sage-200/40 blur-[80px]" />
        <div className="absolute bottom-0 left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-brand-100/40 blur-[80px]" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23252019' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="py-16 sm:py-20 md:py-28">
        <m.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Breadcrumb-like decoration */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Taxi 70
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-espresso-900 sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <m.p
              className="mt-6 max-w-3xl text-base text-espresso-600 sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {subtitle}
            </m.p>
          )}
        </m.div>
      </Container>
    </section>
  );
}
