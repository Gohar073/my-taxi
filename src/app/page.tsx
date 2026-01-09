import Image from 'next/image';

import { AttentionBanner } from '@/components/site/AttentionBanner';
import { BookingForm } from '@/components/site/BookingForm';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { phoneHref, phoneNumber } from '@/lib/navigation';

export default function HomePage() {
  return (
    <>
      <AttentionBanner />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-taxi-yellow/60 blur-3xl" />
          <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
        </div>

        <Container className="grid gap-10 py-14 md:grid-cols-12 md:items-center md:gap-8 md:py-20">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              24/7 erreichbar in Münster / Hiltrup
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Ihr Taxi in Münster
            </h1>
            <p className="mt-4 max-w-xl text-base text-black/70 md:text-lg">
              City Transfer, Krankenfahrten, Flughafentransfer und Transport – mit
              Taxi 70 kommen Sie zuverlässig ans Ziel.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#bestellen" size="lg">
                Taxi bestellen
              </ButtonLink>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-black/5"
              >
                Anrufen: {phoneNumber}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm md:max-w-md">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="text-xs font-black uppercase tracking-widest text-black/50">
                  Schnell
                </div>
                <div className="mt-1 font-semibold text-black/80">
                  Flexible Abholung
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="text-xs font-black uppercase tracking-widest text-black/50">
                  Sicher
                </div>
                <div className="mt-1 font-semibold text-black/80">
                  Professionelle Fahrer
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-black/10 bg-gradient-to-br from-taxi-yellow/25 to-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-black/70">
                  Taxi 70 bestellen
                </div>
                <Image
                  src="/inc/img/logo_taxi70.png"
                  alt=""
                  width={90}
                  height={34}
                />
              </div>
              <div className="mt-5">
                <BookingForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid />

      <section className="bg-taxi-black py-14 text-white">
        <Container className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Sofort ein Taxi brauchen?
            </h2>
            <p className="mt-2 text-white/80">
              Rufen Sie uns an – wir sind 24 Stunden erreichbar.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center rounded-xl bg-taxi-yellow px-5 py-3 font-black text-taxi-black hover:brightness-95"
            >
              {phoneNumber}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

