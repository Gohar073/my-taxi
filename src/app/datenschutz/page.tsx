import type { Metadata } from 'next';

import { PageHero } from '@/components/site/PageHero';
import { Container } from '@/components/ui/Container';
import { address, phoneNumber } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung für diese Website.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Datenschutz­erklärung"
        subtitle="Letzte Änderung: 14.07.2024"
        icon="🔒"
        image="/inc/img/hero/maik-winnecke-Epm5HX_Iwzs-unsplash.jpg"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-light to-surface-cream">
        <Container size="narrow">
          <div className="space-y-8">
            {/* Vorwort */}
            <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-black text-night-900">Vorwort</h2>
              <p className="mt-4 text-night-700 leading-relaxed">
                Datenschutz hat einen besonders hohen Stellenwert. Die Nutzung
                dieser Website ist grundsätzlich ohne Angabe personenbezogener
                Daten möglich. Wenn Sie über das Anfrageformular Kontakt aufnehmen,
                werden die von Ihnen übermittelten Daten zur Bearbeitung der Anfrage
                verarbeitet.
              </p>
            </div>

            {/* Allgemeine Hinweise */}
            <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-black text-night-900">Allgemeine Hinweise</h2>
              <p className="mt-4 text-night-700 leading-relaxed">
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                identifiziert werden können. Diese Erklärung informiert darüber,
                welche Daten wir erheben, wofür wir sie nutzen und wie das geschieht.
              </p>
            </div>

            {/* Datenerfassung */}
            <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-black text-night-900">
                Datenerfassung auf unserer Website
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-bold text-night-800">Wer ist verantwortlich?</h3>
                  <p className="mt-2 text-night-700">
                    Verantwortliche Stelle:{' '}
                    <br />
                    Taxibetrieb Sajid Mehmood
                    <br />
                    {address.street}, {address.zip} {address.city}
                    <br />
                    Telefon: <span className="font-bold text-taxi-600">{phoneNumber}</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-night-800">Wie erfassen wir Daten?</h3>
                  <p className="mt-2 text-night-700">
                    Daten werden zum einen dadurch erhoben, dass Sie sie uns mitteilen
                    (z.B. über das Anfrageformular). Andere Daten können automatisch beim
                    Besuch der Website durch IT-Systeme erfasst werden (z.B. Server-Log-Dateien).
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-black text-night-900">
                Cookies & Analyse-Tools
              </h2>
              <p className="mt-4 text-night-700 leading-relaxed">
                Diese Website setzt standardmäßig keine Tracking-Tools ein. Je nach
                Hosting/Integration können zusätzliche Dienste aktiviert werden.
              </p>
            </div>

            {/* Kontaktformular */}
            <div className="rounded-2xl border-2 border-night-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-black text-night-900">Kontaktformular</h2>
              <p className="mt-4 text-night-700 leading-relaxed">
                Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei
                uns verarbeitet.
              </p>
            </div>

            {/* Ihre Rechte */}
            <div className="rounded-2xl border-2 border-taxi-300 bg-taxi-100 p-6 sm:p-8">
              <h2 className="text-lg font-black text-night-900">Ihre Rechte</h2>
              <p className="mt-4 text-night-700">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="mt-4 grid gap-2 text-night-800">
                {[
                  'Auskunft über gespeicherte Daten',
                  'Berichtigung oder Löschung',
                  'Einschränkung der Verarbeitung',
                  'Widerspruch gegen die Verarbeitung',
                  'Datenübertragbarkeit',
                ].map((right) => (
                  <li key={right} className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-taxi-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {right}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
