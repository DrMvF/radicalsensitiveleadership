'use client';

import { track } from '@vercel/analytics';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between px-8 py-16 sm:px-20 font-cm text-center text-black">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg">
        {/* --- Headline --- */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Radical Sensitive Leadership
        </h1>

        {/* --- Subtext --- */}
        <p className="text-base sm:text-lg leading-relaxed mb-2">
          Selbstführung und Resonanz <br /> als Zukunftskompetenzen im&nbsp;KI-Zeitalter
        </p>

        <p className="text-sm text-neutral-500 mb-10">
          Ein Forschungs- und Buchprojekt von Dr.&nbsp;Miriam&nbsp;von&nbsp;Felbert<br />
          Erscheinung: April&nbsp;2026
        </p>

        {/* --- Mailcoach Formular (minimal, robust) --- */}
        <form
          action="https://radicalsensitiveleadership.mailcoach.app/subscribe/ed7af73e-6251-434c-816f-28012afe6452"
          method="POST"
          acceptCharset="UTF-8"
          className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full"
          onSubmit={() => track('waitlist_submit')}
        >
          {/* E-Mail Input */}
          <input
            type="email"
            name="email"
            required
            placeholder="E-Mail-Adresse"
            className="flex-1 w-full sm:w-auto rounded-full border border-black/20 px-5 py-3 text-center sm:text-left text-sm outline-none focus:ring-1 focus:ring-black"
          />

          {/* Hidden Felder laut Mailcoach Spezifikation */}
          <input type="hidden" name="tags" value="waitlist-rsl" />
          <input type="hidden" name="honeypot" value="" />

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => track('click_waitlist')}
            className="rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-neutral-800 transition-colors"
          >
            Auf die Warteliste setzen
          </button>
        </form>

        {/* Hinweistext */}
        <p className="mt-4 text-xs text-neutral-500 max-w-sm leading-snug">
          DSGVO-Hinweis: Double-Opt-In via Mailcoach. Keine Werbung, kein Spam.
          Abmeldung jederzeit möglich.
        </p>
      </main>

      {/* --- Footer --- */}
      <footer className="mt-20 mb-4 flex flex-wrap justify-center gap-6 text-xs text-neutral-600">
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
