'use client';

import { track } from '@vercel/analytics/react';

export default function RSLWaitlist() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-cm flex items-center justify-center px-6 py-16">
      <main className="w-full max-w-2xl text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
          Radical Sensitive Leadership
        </h1>

        {/* Subline */}
        <p className="text-xl sm:text-2xl leading-snug mb-3">
          Selbstführung und Resonanz<br className="hidden sm:block" />
          als Zukunftskompetenzen im&nbsp;KI-Zeitalter
        </p>

        {/* Meta */}
        <p className="text-sm sm:text-base text-white/70 mb-12">
          Ein Forschungs- und Buchprojekt von Dr.&nbsp;Miriam&nbsp;von&nbsp;Felbert · Erscheinung: April&nbsp;2026
        </p>

        {/* Mailcoach Formular */}
        <form
          action="https://radicalsensitiveleadership.mailcoach.app/subscribe/87d4338a-7de7-451d-b74d-70fcad793d37"
          method="post"
          onSubmit={() => track('waitlist_submit')}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-5"
          noValidate
        >
          {/* simple Honeypot */}
          <div aria-hidden="true" className="hidden">
            <label>
              Nicht ausfüllen
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
            className="w-full sm:flex-1 rounded-full border border-white/30 bg-transparent px-6 py-4 text-base
                       placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/80"
          />

          <input type="hidden" name="tags" value="waitlist-rsl" />

          <button
            type="submit"
            onClick={() => track('click_waitlist')}
            className="rounded-full bg-white text-black px-8 py-4 text-base font-medium
                       transition-colors hover:bg-neutral-200 active:scale-[.99] focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            Auf die Warteliste setzen
          </button>
        </form>

        <p className="text-xs text-white/60 leading-snug max-w-md mx-auto">
          DSGVO-Hinweis: Double-Opt-In via Mailcoach. Keine Werbung, kein Spam. Abmeldung jederzeit möglich.
        </p>

        {/* Footer minimal */}
        <footer className="mt-20 flex flex-wrap justify-center gap-8 text-xs text-white/60">
          <a href="/legal" className="hover:text-white">Impressum</a>
          <a href="/privacy" className="hover:text-white">Datenschutz</a>
          <a
            href="https://www.linkedin.com/in/miriamvonfelbert/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </footer>
      </main>
    </div>
  );
}
