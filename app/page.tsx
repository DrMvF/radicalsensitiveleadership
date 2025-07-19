'use client';

import { track } from '@vercel/analytics';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 sm:p-20 font-cm">
      <main className="flex flex-col items-center text-center">
        <p className="text-base sm:text-lg text-gray-600 mb-2">
          Dr. Miriam von Felbert
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Healthcare Executive. Leadership Psychologist. Lecturer.
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Radical Sensitive Leadership
        </h1>
        <p className="text-lg sm:text-xl">
          Mental clarity. Inner alignment. Ethical growth.
        </p>

        <div className="h-12 sm:h-16" />

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="/deepflow"
            onClick={() => track('click_deep_flow')}
            className="rounded-full bg-black text-white px-6 py-3 text-base sm:text-lg text-center hover:bg-[#383838] transition-colors"
          >
            Deep Flow
          </a>

          <a
            href="/radicalweekly"
            onClick={() => track('click_radical_weekly')}
            className="rounded-full bg-[#4b4b4b] text-white px-6 py-3 text-base sm:text-lg text-center hover:bg-[#5e5e5e] transition-colors"
          >
            Radical Weekly
          </a>

          <a
            href="/foundingcircle"
            onClick={() => track('click_founding_circle')}
            className="rounded-full bg-[#e5e5e5] text-black px-6 py-3 text-base sm:text-lg text-center hover:bg-[#ccc] transition-colors"
          >
            Founding Circle
          </a>

          <a
            href="/offer"
            onClick={() => track('click_white_space')}
            className="rounded-full border border-black px-6 py-3 text-base sm:text-lg text-center hover:bg-black hover:text-white transition-colors"
          >
            White Space
          </a>
        </div>
      </main>

      <footer className="flex flex-wrap justify-center gap-4 mt-20 text-sm text-center">
        <a href="/legal" className="hover:underline">● Legal Notice</a>
        <a href="/privacy" className="hover:underline">● Privacy Policy</a>
        <a href="/terms" className="hover:underline">● Terms & Conditions</a>
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
