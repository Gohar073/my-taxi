'use client';

import { m } from 'framer-motion';

import { phoneHref, phoneNumber } from '@/lib/navigation';

export function FloatingCallButton() {
  return (
    <m.a
      href={phoneHref}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-amber px-5 py-3.5 text-sm font-bold text-espresso-900 shadow-glow-amber ring-2 ring-brand-200 transition-all hover:scale-105 hover:shadow-glow-amber-strong md:hidden"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
      </span>
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="font-bold">{phoneNumber}</span>
    </m.a>
  );
}
