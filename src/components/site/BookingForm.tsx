'use client';

import { useId, useMemo, useState, useEffect } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Radio } from '@/components/ui/Radio';
import { cn } from '@/lib/cn';

type BookingMode = 'Taxi Bestellung' | 'Preisanfrage';

type BookingFormState = {
  mode: BookingMode;
  date: string;
  time: string;
  passengers: string;
  from: string;
  to: string;
  name: string;
  email: string;
  phone: string;
  wheelchair: boolean;
  childSeat: boolean;
  message: string;
  dsgvo: boolean;
  website: string; // honeypot
};

const passengerOptions = [
  { value: '1-4', label: 'Ein Taxi für 1 bis 4 Personen' },
  { value: '1-6', label: 'Ein Großraumtaxi für 1-6 Personen' },
  { value: '7-12', label: 'Taxis für 7 bis 12 Personen' },
  { value: '12-22', label: 'Taxis für 12 bis 22 Personen' },
  { value: '23-27', label: 'Taxis für 23-27 Personen' },
] as const;

function todayDE() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = String(d.getFullYear());
  return `${dd}.${mm}.${yyyy}`;
}

function nowHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

export function BookingForm() {
  const formId = useId();
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<
    | { status: 'idle' }
    | { status: 'success' }
    | { status: 'error'; message: string }
  >({ status: 'idle' });

  const [state, setState] = useState<BookingFormState>({
    mode: 'Taxi Bestellung',
    date: '',
    time: '',
    passengers: passengerOptions[0].value,
    from: '',
    to: '',
    name: '',
    email: '',
    phone: '',
    wheelchair: false,
    childSeat: false,
    message: '',
    dsgvo: false,
    website: '',
  });

  // Set default date/time only on client to avoid hydration mismatch
  useEffect(() => {
    if (!state.date && !state.time) {
      setState((prev) => ({
        ...prev,
        date: todayDE(),
        time: nowHHMM(),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof BookingFormState, string>> = {};
    if (!state.date.trim()) e.date = 'Bitte Datum angeben.';
    if (!state.time.trim()) e.time = 'Bitte Uhrzeit angeben.';
    if (!state.passengers.trim()) e.passengers = 'Bitte Personenanzahl auswählen.';
    if (!state.from.trim()) e.from = 'Bitte Abholort angeben.';
    if (!state.to.trim()) e.to = 'Bitte Zielort angeben.';
    if (!state.name.trim()) e.name = 'Bitte Name angeben.';
    if (!state.email.trim()) e.email = 'Bitte E-Mail angeben.';
    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(state.email.trim()))
      e.email = 'Bitte gültige E-Mail angeben.';
    if (!state.phone.trim()) e.phone = 'Bitte Telefonnummer angeben.';
    if (!state.dsgvo) e.dsgvo = 'Bitte Datenschutz akzeptieren.';
    return e;
  }, [state]);

  const canSubmit = Object.keys(errors).length === 0 && !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult({ status: 'idle' });

    // Honeypot: bots fill this, humans shouldn't.
    if (state.website.trim()) {
      setResult({ status: 'success' });
      return;
    }

    if (!canSubmit) {
      setResult({
        status: 'error',
        message: 'Bitte prüfen Sie die Pflichtfelder.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(state),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || data.ok === false) {
        throw new Error(data.message || 'Senden fehlgeschlagen.');
      }
      setResult({ status: 'success' });
      setState((s) => ({
        ...s,
        from: '',
        to: '',
        name: '',
        email: '',
        phone: '',
        wheelchair: false,
        childSeat: false,
        message: '',
        dsgvo: false,
        website: '',
      }));
    } catch (err) {
      setResult({
        status: 'error',
        message: err instanceof Error ? err.message : 'Senden fehlgeschlagen.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      id="bestellen"
      aria-labelledby={`${formId}-title`}
      className="rounded-3xl border border-taxi-gray/30 bg-gradient-card p-8 shadow-glass backdrop-blur-xl md:p-10"
      onSubmit={onSubmit}
    >
      <div className="mb-8 border-b border-taxi-gray/20 pb-6">
        <h2 id={`${formId}-title`} className="text-2xl font-black tracking-tight text-taxi-surface-bright md:text-3xl">
          Taxi bestellen / Preisanfrage
        </h2>
        <p className="mt-2 text-sm text-taxi-gray-light leading-relaxed">
          Schnell anfragen – wir melden uns zeitnah zurück.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <fieldset className="col-span-full rounded-2xl border border-taxi-gray/30 bg-gradient-glass p-5 backdrop-blur-md">
          <legend className="px-3 text-sm font-bold uppercase tracking-wider text-taxi-gray-light">
            Anfrage-Art
          </legend>
          <div className="mt-4 flex flex-wrap gap-6">
            {(['Taxi Bestellung', 'Preisanfrage'] as const).map((mode) => (
              <Radio
                key={mode}
                name="mode"
                value={mode}
                checked={state.mode === mode}
                onChange={() => setState((s) => ({ ...s, mode }))}
                label={mode}
                className="flex-1 min-w-[140px]"
              />
            ))}
          </div>
        </fieldset>

        <Input
          label="Datum"
          type="text"
          value={state.date}
          onChange={(e) => setState((s) => ({ ...s, date: e.target.value }))}
          placeholder={todayDE()}
          inputMode="numeric"
          required
          error={errors.date}
        />

        <Input
          label="Uhrzeit"
          type="text"
          value={state.time}
          onChange={(e) => setState((s) => ({ ...s, time: e.target.value }))}
          placeholder={nowHHMM()}
          inputMode="numeric"
          required
          error={errors.time}
        />

        <div className="sm:col-span-2">
          <Select
            label="Anzahl"
            value={state.passengers}
            onChange={(e) =>
              setState((s) => ({ ...s, passengers: e.target.value }))
            }
            required
            error={errors.passengers}
            hint='Mehr? Bitte in "Nachricht" angeben.'
          >
            {passengerOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-taxi-surface-light">
                {o.label}
              </option>
            ))}
          </Select>
        </div>

        <Input
          label="Von"
          value={state.from}
          onChange={(e) => setState((s) => ({ ...s, from: e.target.value }))}
          placeholder="Abholort"
          required
          error={errors.from}
          className="sm:col-span-2"
        />

        <Input
          label="Nach"
          value={state.to}
          onChange={(e) => setState((s) => ({ ...s, to: e.target.value }))}
          placeholder="Zielort"
          required
          error={errors.to}
          className="sm:col-span-2"
        />

        <Input
          label="Name"
          value={state.name}
          onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
          placeholder="Ihr Name"
          required
          error={errors.name}
        />

        <Input
          label="E-Mail"
          type="email"
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          placeholder="name@example.com"
          autoComplete="email"
          required
          error={errors.email}
        />

        <Input
          label="Telefon"
          type="tel"
          value={state.phone}
          onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
          placeholder="+49 …"
          autoComplete="tel"
          required
          error={errors.phone}
          className="sm:col-span-2"
        />

        <fieldset className="sm:col-span-2 rounded-2xl border border-taxi-gray/30 bg-gradient-glass p-5 backdrop-blur-md">
          <legend className="px-3 text-sm font-bold uppercase tracking-wider text-taxi-gray-light">
            Optionen
          </legend>
          <div className="mt-4 flex flex-wrap gap-6">
            <Checkbox
              checked={state.wheelchair}
              onChange={(e) =>
                setState((s) => ({ ...s, wheelchair: e.target.checked }))
              }
              label="Rollstuhltransport"
            />
            <Checkbox
              checked={state.childSeat}
              onChange={(e) =>
                setState((s) => ({ ...s, childSeat: e.target.checked }))
              }
              label="Kindersitz benötigt"
            />
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <Textarea
            label="Nachricht"
            value={state.message}
            onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
            placeholder="Optional: Details (z.B. Flugnummer, Gepäck, Abholpunkt …)"
            rows={5}
          />
        </div>

        <input
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={state.website}
          onChange={(e) => setState((s) => ({ ...s, website: e.target.value }))}
        />

        <div className="sm:col-span-2">
          <Checkbox
            checked={state.dsgvo}
            onChange={(e) => setState((s) => ({ ...s, dsgvo: e.target.checked }))}
            required
            error={errors.dsgvo}
            label={
              <span>
                Ich habe die{' '}
                <a className="font-bold text-taxi-secondary underline hover:text-taxi-accent transition-colors" href="/datenschutz">
                  Datenschutzerklärung
                </a>{' '}
                gelesen und akzeptiere die Verarbeitung meiner Angaben.
              </span>
            }
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" disabled={!canSubmit}>
            {submitting ? 'Senden…' : 'Anfrage senden'}
          </Button>

          {result.status === 'success' ? (
            <div className="mt-4 rounded-2xl border border-taxi-success/60 bg-taxi-success/25 backdrop-blur-md px-5 py-4 text-sm font-bold text-taxi-success shadow-medium animate-fade-in">
              ✓ Danke! Ihre Anfrage wurde erfolgreich gesendet.
            </div>
          ) : null}

          {result.status === 'error' ? (
            <div className="mt-4 rounded-2xl border border-taxi-error/60 bg-taxi-error/25 backdrop-blur-md px-5 py-4 text-sm font-bold text-taxi-error shadow-medium animate-fade-in">
              ✗ {result.message}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}

