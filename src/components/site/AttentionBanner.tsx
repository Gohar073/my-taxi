import Link from 'next/link';

export function AttentionBanner() {
  return (
    <div className="border-b border-black/10 bg-taxi-yellow/50">
      <div className="mx-auto max-w-6xl px-4 py-3 text-sm font-semibold text-black/80 sm:px-6">
        <span className="font-black">!!! Achtung !!!</span> Einige Funktionen (z.B.
        das Anfrageformular) benötigen JavaScript.{' '}
        <Link className="underline" href="/no_js">
          Seite ohne JavaScript
        </Link>
      </div>
    </div>
  );
}

