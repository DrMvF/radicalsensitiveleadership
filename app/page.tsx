'use client';

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics/react';

export default function RSLWaitlist() {
  // Optional: Dark-Mode respektiert System-Einstellung, default = dark
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Falls Tailwind "media" nutzt, brauchst du das nicht. Bei "class" setzen wir explizit:
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-8 py-16 font-cm text-black bg-white sm:px-20 dark:bg-black dark:text-white">
      {/* --- Main Content --- */}
      <main className="flex w-full max-w-xl flex-1 flex-col items-center text-center">
        <h1 className="mb-3 text-4xl font-bold sm:text-5xl">
          Radical Sensitive Leadership
        </h1>

        <p className="mb-2 text-base leading-relaxed sm:text-lg">
          Selbstführung und Resonanz<br />
          als Zukunftskompetenzen im&nbsp;KI-Zeitalter
        </p>

        <p className="mb-10 text-sm text-neutral-600 dark:text-neutral-400">
          Ein Forschungs- und Buchprojekt von Dr.&nbsp;Miriam&nbsp;von&nbsp;Felbert<br />
          Erscheinung: April&nbsp;2026
        </p>

        {/* --- Mailcoach Formular --- */}
        <form
          action="https://radicalsensitiveleadership.mailcoach.app/subscribe/87d4338a-7de7-451d-b74d-70fcad793d37"
          method="post"
          onSubmit={() => track('waitlist_submit')}
          className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
          noValidate
        >
          {/* Honeypot gegen Bots (wird versteckt, aber von Screenreadern ignoriert) */}
          <div aria-hidden="true" className="hidden">
            <label>
              Bitte leer lassen
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <input
            type="email"
            name="email"
            required
            inputMode="email"
            autoComplete="email"
            placeholder="E-Mail-Adresse"
            aria-label="E-Mail-Adresse"
            className="w-full flex-1 rounded-full border px-5 py-3 text-center text-sm outline-none
                       sm:w-auto sm:text-left
                       border-black/20 placeholder-black/40 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white
                       dark:border-white/20 dark:placeholder-white/50 dark:focus:ring-white dark:focus:ring-offset-black"
          />

          {/* Tag für Segmentierung */}
          <input type="hidden" name="tags" value="waitlist-rsl" />

          <button
            type="submit"
            className="rounded-full px-6 py-3 text-sm transition-colors
                       bg-black text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white
                       dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black"
            onClick={() => track('click_waitlist')}
          >
            Auf die Warteliste setzen
          </button>
        </form>

        <p className="mt-4 max-w-sm text-xs leading-snug text-neutral-600 dark:text-neutral-400">
          DSGVO-Hinweis: Double-Opt-In via Mailcoach. Keine Werbung, kein Spam. Abmeldung jederzeit möglich.
        </p>

        {/* Optional: kleiner Theme-Toggle (falls du explizit schalten willst) */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            className="rounded-full border px-4 py-2 text-xs transition-colors
                       border-black/20 hover:bg-black/5
                       dark:border-white/20 dark:hover:bg-white/10"
            aria-pressed={isDark}
          >
            {isDark ? 'Hellmodus' : 'Dunkelmodus'} aktivieren
          </button>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="mb-4 mt-20 flex flex-wrap justify-center gap-6 text-xs text-neutral-600 dark:text-neutral-400">
        <a href="/legal" className="hover:underline">
          Impressum
        </a>
        <a href="/privacy" className="hover:underline">
          Datenschutz
        </a>
        <a
          href="https://www.linkedin.com/in/miriamvonfelbert/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
