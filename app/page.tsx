'use client';

import { track } from '@vercel/analytics';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 sm:p-20 font-cm">
      <main className="flex flex-col items-center text-center max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Radical Sensitive Leadership
        </h1>
        <p className="text-lg sm:text-xl text-neutral-700">
          Selbstführung und Resonanz als Zukunftskompetenzen im KI-Zeitalter
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          Ein Forschungs- und Buchprojekt von Dr. Miriam von Felbert · Erscheinung: April 2026
        </p>

        <div className="h-10 sm:h-12" />

        <form
          action="https://radicalsensitiveleadership.mailcoach.app/subscribe/c54f3522-6f9e-433d-8620-f32739c49177"
          method="post"
          className="w-full grid gap-3"
          onSubmit={() => track('waitlist_submit')}
        >
          <input
            type="text"
            name="first_name"
            placeholder="Vorname"
            className="rounded-full border border-black/20 px-5 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="E-Mail-Adresse"
            className="rounded-full border border-black/20 px-5 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            name="note"
            rows={3}
            placeholder="Optional: Was erhoffst du dir vom Buch?"
            className="rounded-2xl border border-black/20 px-5 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="hidden"
            name="tags"
            value="waitlist-rsl"
          />
          <button
            type="submit"
            onClick={() => track('click_waitlist')}
            className="rounded-full bg-black text-white px-6 py-3 text-base sm:text-lg hover:bg-[#383838] transition-colors"
          >
            Auf die Warteliste setzen
          </button>
        </form>

        <p className="mt-3 text-xs text-neutral-500">
          DSGVO-Hinweis: Double-Opt-In via Mailcoach. Kein Spam. Abmeldung jederzeit möglich.
        </p>
      </main>

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
