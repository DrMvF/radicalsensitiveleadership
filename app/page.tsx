'use client';

import { track } from '@vercel/analytics';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 sm:p-20 font-cm">
      {/* Headline */}
      <main className="flex flex-col items-center text-center max-w-xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Radical Sensitive Leadership
        </h1>

        <p className="text-lg sm:text-xl text-neutral-700 leading-snug max-w-md mx-auto">
          Selbstführung und Resonanz<br />
          als Zukunftskompetenzen im&nbsp;KI-Zeitalter
        </p>

        <p className="mt-3 text-sm text-neutral-500 max-w-md">
          Ein Forschungs- und Buchprojekt von&nbsp;Dr.&nbsp;Miriam&nbsp;von&nbsp;Felbert<br />
          Erscheinung: April&nbsp;2026
        </p>

        <div className="h-10 sm:h-12" />

        {/* Warteliste – Mailcoach */}
        <form
          action="https://radicalsensitiveleadership.mailcoach.app/subscribe/c54f3522-6f9e-433d-8620-f32739c49177"
          method="post"
          className="w-full flex flex-col sm:flex-row gap-3 justify-center"
          onSubmit={() => track('waitlist_submit')}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="E-Mail-Adresse"
            aria-label="E-Mail-Adresse"
            className="flex-1 rounded-full border border-black/20 px-5 py-3 outline-none focus:ring-2 focus:ring-black text-center sm:text-left"
          />
          <input type="hidden" name="tags" value="waitlist-rsl" />
          <button
            type="submit"
            onClick={() => track('click_waitlist')}
            className="rounded-full bg-black text-white px-6 py-3 text-base sm:text-lg hover:bg-[#383838] transition-colors"
          >
            Auf die Warteliste setzen
          </button>
        </form>

        <p className="mt-3 text-xs text-neutral-500 max-w-md">
          DSGVO-Hinweis: Double-Opt-In via Mailcoach. Kein Spam. Abmeldung jederzeit möglich.
        </p>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center gap-4 mt-20 text-sm text-center">
        <a href="/legal" className="hover:underline">● Impressum</a>
        <a href="/privacy" className="hover:underline">● Datenschutz</a>
        <a
          href="https://www.linkedin.com/in/miriamvonfelbert/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          ● LinkedIn
        </a>
      </footer>
    </div>
  );
}
