import Image from 'next/image';

import { FadeIn } from '@/components/motion/FadeIn';
import { BookingForm } from '@/components/site/BookingForm';
import { FloatingCallButton } from '@/components/site/FloatingCallButton';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { phoneHref, phoneNumber } from '@/lib/navigation';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient orbs */}
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-200/60 blur-[100px]" />
          <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-sage-200/40 blur-[80px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-brand-100/50 blur-[80px]" />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23252019' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container className="py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left column - Content */}
            <FadeIn className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 shadow-soft backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <span className="text-sm font-semibold text-espresso-700">
                  24/7 erreichbar in Münster / Hiltrup
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-espresso-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Ihr{' '}
                <span className="relative">
                  <span className="relative z-10 text-gradient">Taxi</span>
                  <svg className="absolute -bottom-2 left-0 h-3 w-full text-brand-300" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 8 Q 50 0, 100 8 T 200 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}in Münster
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg text-espresso-600 sm:text-xl md:text-2xl leading-relaxed">
                City Transfer, Krankenfahrten, Flughafentransfer und Transport – mit
                Taxi 70 kommen Sie zuverlässig ans Ziel.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href="/#bestellen" size="lg">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Taxi bestellen
                </ButtonLink>
                <a
                  href={phoneHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-espresso-200 bg-white/60 px-6 py-4 text-base font-semibold text-espresso-800 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-brand-300 hover:bg-white hover:shadow-medium"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm text-espresso-500">Anrufen</span>
                    <span className="block font-bold">{phoneNumber}</span>
                  </span>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: 'Schnell', value: 'Flexible Abholung', icon: '⚡' },
                  { label: 'Sicher', value: 'Professionelle Fahrer', icon: '🛡️' },
                  { label: 'Zuverlässig', value: 'Seit 2007', icon: '✓' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-espresso-100 bg-white/60 p-4 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-brand-200 hover:bg-white hover:shadow-medium"
                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-lg transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-espresso-700">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right column - Booking Form */}
            <FadeIn delay={0.1}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-200/50 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-sage-200/40 blur-2xl" />
                
                {/* Form card */}
                <div className="relative rounded-3xl border border-espresso-100 bg-white/80 p-6 shadow-large backdrop-blur-xl sm:p-8">
                  {/* Card header */}
                  <div className="mb-6 flex items-center justify-between border-b border-espresso-100 pb-6">
                    <div>
                      <h2 className="text-xl font-bold text-espresso-900">
                        Taxi bestellen
                      </h2>
                      <p className="mt-1 text-sm text-espresso-500">
                        Schnell anfragen – wir melden uns
                      </p>
                    </div>
                    <Image
                      src="/inc/img/logo_taxi70.png"
                      alt=""
                      width={80}
                      height={30}
                      className="opacity-80"
                    />
                  </div>
                  <BookingForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-dark py-20 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand-500/20 blur-[100px]" />
          <div className="absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-sage-500/20 blur-[80px]" />
        </div>
        
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Sofort ein Taxi brauchen?
                </h2>
                <p className="mt-4 text-lg text-espresso-300">
                  Rufen Sie uns an – wir sind 24 Stunden, 7 Tage die Woche erreichbar.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <FadeIn delay={0.1}>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-amber px-8 py-5 text-lg font-bold text-espresso-900 shadow-glow-amber transition-all duration-300 hover:scale-105 hover:shadow-glow-amber-strong"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phoneNumber}
                </a>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <FloatingCallButton />
    </>
  );
}
