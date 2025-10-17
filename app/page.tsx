'use client';

import { track } from '@vercel/analytics/react';

export default function RSLWaitlist() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between px-8 sm:px-20 py-16 font-cm text-black bg-white">
      {/* --- Main Content --- */}
      <main className="flex flex-col items-center text-center flex-1 w-full max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Radical Sensitive Leadership
        </h1>

        <p className="text-base sm:text-lg mb-2 leading-relaxed">
          Selbstführung und Resonanz<br />als Zukunftskompetenzen im&nbsp;KI-Zeitalter
        </p>

        <p className="text-sm text-neutral-500 mb-10">
          Ein Forschungs- und Buchprojekt von Dr.&nbsp;Miriam&nbsp;von&nbsp;Felbert<br />
          Erscheinung: April&nbsp;2026
        </p>

        {/* --- Mailcoach Formular --- */}
        <form
          action="https://radicalsensitiveleadership.mailcoach.app/subscribe/c54f3522-6f9e-433d-8620-f32739c49177"
          method="post"
          onSubmit={() => track('waitlist_submit')}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="E-Mail-Adresse"
            className="flex-1 w-full sm:w-auto rounded-full border border-black/20 px-5 py-3 text-center sm:text-left text-sm outline-none focus:ring-1 focus:ring-black"
          />

          <input type="hidden" name="tags" value="waitlist-rsl" />

          <button
            type="submit"
            className="rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-neutral-800 transition-colors"
            onClick={() => track('click_waitlist')}
          >
            Auf die Warteliste setzen
          </button>
        </form>

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
