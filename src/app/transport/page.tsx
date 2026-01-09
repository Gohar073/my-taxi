import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { ServicesGrid } from '@/components/site/ServicesGrid';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Transport',
  description:
    'Schnelle, zuverlässige Transporte in und um Münster – Taxi 70 übernimmt Dokumente, Gepäck und mehr (kein Umzug).',
};

export default function TransportPage() {
  return (
    <>
      <PageHero
        title="Transport"
        subtitle="Wir über­nehm­­en Ihre Trans­porte – schnell, zuverlässig und professionell."
      />

      <section className="py-12 bg-gradient-surface">
        <Container className="prose prose-neutral max-w-none">
          <h2 className="text-taxi-surface-bright">Wir über­nehm­­en Ihre Trans­porte</h2>
          <p className="text-taxi-gray-light">
            Manchmal muss es eben schnell gehen und wir sind zur Stelle. Wir
            fahren „fast“ alles was in unsere Fahrzeuge passt. Ob Dokumente die
            schnell an einen Geschäftspartner überbracht werden sollen bis hin
            zur Tasche für Ihre Großmutter die ins Krankenhaus gebracht werden
            soll.
          </p>
          <p>
            Wir bitten um Ihr Verständnis, dass wir keine Umzüge mit Ihnen
            durchführen können. Für diese Zwecke wenden Sie sich bitte an die
            entsprechenden Unternehmen die sich auf dieses Gebiet spezialisiert
            haben.
          </p>
          <p>
            Wir dürfen behaupten, dass die Transporte mit Taxi70 schnell,
            zuverlässig und professionell ablaufen. Unser freundliches Team ist
            in und um Münster flexibel einsetzbar. Wir sind keine Paket-Boten,
            denn wir wickeln Ihren Transport komplett und zu 100% ab – auf Wunsch
            auch mit Unterschrift des Empfängers und anschließender
            Benachrichtigung.
          </p>
        </Container>
      </section>

      <ServicesGrid className="border-t border-taxi-gray/30" />
    </>
  );
}

