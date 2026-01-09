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
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-taxi-secondary/30 blur-3xl" />
          <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-taxi-accent/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-taxi-secondary/15 blur-3xl" />
        </div>

        <Container className="grid gap-10 py-14 md:grid-cols-12 md:items-center md:gap-8 md:py-20">
          <FadeIn className="md:col-span-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-taxi-secondary/50 bg-taxi-secondary/20 backdrop-blur-xl px-5 py-2 text-xs font-bold uppercase tracking-wider text-taxi-primary shadow-glow-gold animate-fade-in">
              <span className="h-2.5 w-2.5 rounded-full bg-taxi-success animate-pulse shadow-lg shadow-taxi-success/50" />
              24/7 erreichbar in Münster / Hiltrup
            </div>
            <h1 className="mt-8 text-5xl font-black tracking-tight text-taxi-surface-bright md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] animate-slide-up">
              Ihr Taxi in Münster
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-taxi-gray-light md:text-xl lg:text-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              City Transfer, Krankenfahrten, Flughafentransfer und Transport – mit
              Taxi 70 kommen Sie zuverlässig ans Ziel.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#bestellen" size="lg">
                Taxi bestellen
              </ButtonLink>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-xl border border-taxi-gray/40 bg-taxi-surface-light px-5 py-3 text-sm font-semibold text-taxi-gray-light shadow-medium transition-all hover:bg-taxi-surface-elevated hover:border-taxi-secondary/50 hover:text-taxi-secondary hover:shadow-large"
              >
                Anrufen: {phoneNumber}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 text-sm md:max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-2xl border border-taxi-gray/40 bg-gradient-card p-6 shadow-glass hover:shadow-xl hover:border-taxi-secondary/50 transition-all duration-300 group backdrop-blur-sm hover:-translate-y-1">
                <div className="text-xs font-black uppercase tracking-widest text-taxi-secondary mb-3">
                  Schnell
                </div>
                <div className="text-sm font-bold text-taxi-gray-lightest group-hover:text-taxi-surface-bright transition-colors">
                  Flexible Abholung
                </div>
              </div>
              <div className="rounded-2xl border border-taxi-gray/40 bg-gradient-card p-6 shadow-glass hover:shadow-xl hover:border-taxi-secondary/50 transition-all duration-300 group backdrop-blur-sm hover:-translate-y-1">
                <div className="text-xs font-black uppercase tracking-widest text-taxi-secondary mb-3">
                  Sicher
                </div>
                <div className="text-sm font-bold text-taxi-gray-lightest group-hover:text-taxi-surface-bright transition-colors">
                  Professionelle Fahrer
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="md:col-span-6" delay={0.08}>
            <div className="relative rounded-3xl border border-taxi-gray/40 bg-gradient-card p-8 shadow-glass backdrop-blur-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-taxi-secondary/10 via-transparent to-taxi-accent/10 opacity-60" />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.1)_0%,_transparent_50%)]" />
              <div className="relative flex items-center justify-between mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-taxi-gray-light">
                  Taxi 70 bestellen
                </div>
                <Image
                  src="/inc/img/logo_taxi70.png"
                  alt=""
                  width={100}
                  height={37}
                  className="opacity-95 drop-shadow-2xl"
                />
              </div>
              <div className="relative">
                <BookingForm />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <ServicesGrid />

      <section className="relative bg-gradient-primary py-20 text-taxi-surface-bright overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-taxi-secondary/10 via-transparent to-taxi-accent/10" />
        <Container className="relative grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="text-3xl font-black tracking-tight text-taxi-surface-bright md:text-4xl lg:text-5xl">
              Sofort ein Taxi brauchen?
            </h2>
            <p className="mt-3 text-lg text-taxi-gray-light">
              Rufen Sie uns an – wir sind 24 Stunden erreichbar.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-gold px-6 py-4 font-black text-taxi-primary shadow-glow-gold hover:shadow-glow-gold hover:scale-[1.03] active:scale-[0.97] transition-all text-base"
            >
              {phoneNumber}
            </a>
          </div>
        </Container>
      </section>

      <FloatingCallButton />
    </>
  );
}

