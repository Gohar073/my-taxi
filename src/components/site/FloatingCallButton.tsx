'use client';

import { m } from 'framer-motion';

import { phoneHref, phoneNumber } from '@/lib/navigation';

export function FloatingCallButton() {
  return (
    <m.a
      href={phoneHref}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-black text-taxi-primary shadow-glow-gold hover:shadow-glow-gold ring-2 ring-taxi-secondary/30 md:hidden transition-all hover:scale-110 active:scale-95"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <span className="inline-flex h-2 w-2 rounded-full bg-taxi-success animate-pulse shadow-lg" />
      Anrufen
      <span className="font-black">{phoneNumber}</span>
    </m.a>
  );
}

