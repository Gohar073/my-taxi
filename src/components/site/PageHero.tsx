'use client';

import Image from 'next/image';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';

export function PageHero({
  title,
  subtitle,
  icon,
  image,
}: {
  title: string;
  subtitle?: string;
  icon?: string;
  image?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-taxi-500 min-h-[50vh] flex items-center"
    >
      {/* Hero Background Image with Overlay */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            quality={85}
          />
          {/* Yellow overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-taxi-500/92 via-taxi-500/88 to-taxi-400/85" />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-night-900/35" />
        </div>
      )}

      <Container className="relative z-10 py-16 sm:py-20 md:py-24">
        <m.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Premium Badge - White text and border when image is present */}
          <div className={`mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 shadow-2xl border-2 ${
            image 
              ? 'bg-white/20 backdrop-blur-md border-white/80' 
              : 'bg-night-900 border-taxi-500'
          }`}>
            <span className="relative flex h-3 w-3">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                image ? 'bg-white' : 'bg-taxi-400'
              }`} />
              <span className={`relative inline-flex h-3 w-3 rounded-full ${
                image ? 'bg-white' : 'bg-taxi-500'
              }`} />
            </span>
            <span className={`text-sm font-black tracking-wide uppercase drop-shadow-md ${
              image ? 'text-white' : 'text-taxi-400'
            }`}>
              Taxi 70 {icon && `• ${icon}`}
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            {title}
          </h1>

          {subtitle && (
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mt-6 max-w-3xl text-lg text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-xl leading-relaxed bg-night-900/50 backdrop-blur-sm px-4 py-3 rounded-xl">
                {subtitle}
              </p>
              <div className="mt-6 h-1 w-20 bg-taxi-400 rounded-full shadow-lg" />
            </m.div>
          )}
        </m.div>
      </Container>
    </section>
  );
}
