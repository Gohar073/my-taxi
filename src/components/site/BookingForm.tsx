'use client';

import { useId, useMemo, useState } from 'react';

import { Button } from '@/components/ui/Button';
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
    date: todayDE(),
    time: nowHHMM(),
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
      className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id={`${formId}-title`} className="text-xl font-black tracking-tight">
            Taxi bestellen / Preisanfrage
          </h2>
          <p className="mt-1 text-sm text-black/70">
            Schnell anfragen – wir melden uns zeitnah zurück.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <fieldset className="col-span-full rounded-2xl border border-black/10 p-4">
          <legend className="px-2 text-sm font-semibold text-black/70">
            Anfrage-Art
          </legend>
          <div className="mt-2 flex flex-wrap gap-4">
            {(['Taxi Bestellung', 'Preisanfrage'] as const).map((mode) => (
              <label key={mode} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="mode"
                  value={mode}
                  checked={state.mode === mode}
                  onChange={() => setState((s) => ({ ...s, mode }))}
                />
                <span className="text-sm font-semibold">{mode}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label className="text-sm font-semibold">
            Datum <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.date ? 'border-red-400' : 'border-black/15'
            )}
            value={state.date}
            onChange={(e) => setState((s) => ({ ...s, date: e.target.value }))}
            placeholder={todayDE()}
            inputMode="numeric"
          />
          {errors.date ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.date}
            </div>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold">
            Uhrzeit <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.time ? 'border-red-400' : 'border-black/15'
            )}
            value={state.time}
            onChange={(e) => setState((s) => ({ ...s, time: e.target.value }))}
            placeholder={nowHHMM()}
            inputMode="numeric"
          />
          {errors.time ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.time}
            </div>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold">
            Anzahl <span className="text-red-600">*</span>
          </label>
          <select
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.passengers ? 'border-red-400' : 'border-black/15'
            )}
            value={state.passengers}
            onChange={(e) =>
              setState((s) => ({ ...s, passengers: e.target.value }))
            }
          >
            {passengerOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-black/60">
            Mehr? Bitte in „Nachricht“ angeben.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold">
            Von <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.from ? 'border-red-400' : 'border-black/15'
            )}
            value={state.from}
            onChange={(e) => setState((s) => ({ ...s, from: e.target.value }))}
            placeholder="Abholort"
          />
          {errors.from ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.from}
            </div>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold">
            Nach <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.to ? 'border-red-400' : 'border-black/15'
            )}
            value={state.to}
            onChange={(e) => setState((s) => ({ ...s, to: e.target.value }))}
            placeholder="Zielort"
          />
          {errors.to ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.to}
            </div>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.name ? 'border-red-400' : 'border-black/15'
            )}
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Ihr Name"
          />
          {errors.name ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.name}
            </div>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold">
            E-Mail <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.email ? 'border-red-400' : 'border-black/15'
            )}
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            placeholder="name@example.com"
            type="email"
            autoComplete="email"
          />
          {errors.email ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.email}
            </div>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold">
            Telefon <span className="text-red-600">*</span>
          </label>
          <input
            className={cn(
              'mt-1 h-11 w-full rounded-xl border px-3 text-sm',
              errors.phone ? 'border-red-400' : 'border-black/15'
            )}
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            placeholder="+49 …"
            type="tel"
            autoComplete="tel"
          />
          {errors.phone ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.phone}
            </div>
          ) : null}
        </div>

        <fieldset className="sm:col-span-2 rounded-2xl border border-black/10 p-4">
          <legend className="px-2 text-sm font-semibold text-black/70">
            Optionen
          </legend>
          <div className="mt-2 flex flex-wrap gap-4">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={state.wheelchair}
                onChange={(e) =>
                  setState((s) => ({ ...s, wheelchair: e.target.checked }))
                }
              />
              <span className="text-sm font-semibold">Rollstuhltransport</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={state.childSeat}
                onChange={(e) =>
                  setState((s) => ({ ...s, childSeat: e.target.checked }))
                }
              />
              <span className="text-sm font-semibold">Kindersitz benötigt</span>
            </label>
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold">Nachricht</label>
          <textarea
            className="mt-1 min-h-28 w-full rounded-xl border border-black/15 px-3 py-2 text-sm"
            value={state.message}
            onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
            placeholder="Optional: Details (z.B. Flugnummer, Gepäck, Abholpunkt …)"
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
          <label className="inline-flex items-start gap-3">
            <input
              className="mt-1"
              type="checkbox"
              checked={state.dsgvo}
              onChange={(e) => setState((s) => ({ ...s, dsgvo: e.target.checked }))}
            />
            <span className="text-sm text-black/80">
              Ich habe die{' '}
              <a className="font-semibold underline" href="/datenschutz">
                Datenschutzerklärung
              </a>{' '}
              gelesen und akzeptiere die Verarbeitung meiner Angaben.
            </span>
          </label>
          {errors.dsgvo ? (
            <div className="mt-1 text-xs font-semibold text-red-600">
              {errors.dsgvo}
            </div>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" disabled={!canSubmit}>
            {submitting ? 'Senden…' : 'Anfrage senden'}
          </Button>

          {result.status === 'success' ? (
            <div className="mt-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-900">
              Danke! Ihre Anfrage wurde gesendet.
            </div>
          ) : null}

          {result.status === 'error' ? (
            <div className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-900">
              {result.message}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}

