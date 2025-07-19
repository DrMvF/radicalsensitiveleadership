import SubscribeButton from '@/components/SubscribeButton';

export const metadata = {
  title: 'Offer White Space – Radical Sensitive Leadership',
  description:
    'Executive Coaching with depth and presence. For those navigating transitions who seek clarity and resonance beyond the system.',
  openGraph: {
    title: 'Offer White Space',
    description:
      'Not a product – a perceptive field. Executive Coaching for deep leaders ready for inner clarity.',
    url: 'https://www.radicalsensitiveleadership.com/offer',
    siteName: 'Radical Sensitive Leadership',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Offer White Space',
    description:
      'Strategic coaching for inner leadership. This is your White Space.',
  },
};

export default function OfferPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm">
      <h1 className="text-3xl sm:text-4xl mb-8">Offer White Space</h1>

      <p className="text-lg leading-relaxed mb-6">
        Radical Sensitive Leadership is not a product. It’s a space.
        A field of perception for those who lead from within.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        I work 1:1, in reflective formats and with minimal interference. 
        Not for everyone. Not forever. But when I do, it’s with full presence and radical clarity.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        This White Space is not an offer to convince – it’s an invitation to resonate.  
        If you feel it, you’ll know.
      </p>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">What I offer</h2>

      <p className="text-lg leading-relaxed mb-8">
        Psychologically grounded coaching and reflection for those in transitions – personal, professional, or both. 
        The work focuses on self-leadership, mental clarity and strategic alignment.
      </p>

      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Executive Clarity Session – 90 Min
          </h3>
          <ul className="list-disc ml-6 text-base mb-2">
            <li>One deep 1:1 session</li>
            <li>Ideal for acute challenges or orientation</li>
            <li>Optional written summary</li>
          </ul>
          <SubscribeButton
            href="mailto:hello@radicalsensitiveleadership.com"
            label="→ Request via Email"
            eventName="Request_Clarity_Session"
            className="underline text-base hover:opacity-70"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Strategic Reset Package – 3×60 Min
          </h3>
          <ul className="list-disc ml-6 text-base mb-2">
            <li>Three coaching sessions</li>
            <li>Written reflection & leadership feedback</li>
            <li>For transitions, inner shifts or personal realignment</li>
          </ul>
          <SubscribeButton
            href="mailto:hello@radicalsensitiveleadership.com"
            label="→ Request via Email"
            eventName="Request_Reset_Package"
            className="underline text-base hover:opacity-70"
          />
        </div>
      </div>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">Why it matters</h2>
      <ul className="list-disc ml-6 text-base mb-8">
        <li>Clarity in complex transitions</li>
        <li>Relief in emotional overload</li>
        <li>Strategic calm in decision-making</li>
        <li>Authentic presence in times of change</li>
        <li>Integration of inner truth and outer role</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Why me</h2>
      <ul className="list-disc ml-6 text-base mb-12">
        <li>17+ years leadership experience</li>
        <li>Executive Coach & Positive Psychologist</li>
        <li>Scientific foundation & intuitive clarity</li>
        <li>Digital product developer (Ikigai Strategist, Ikigami)</li>
        <li>Sessions in German or English, remote or in person</li>
      </ul>

      <div className="mt-10">
        <h3 className="text-xl mb-2">Free initial call</h3>
        <p className="mb-2">Let’s speak first, feel the resonance, then decide:</p>
        <SubscribeButton
          href="https://cal.com/radicalsensitiveleadership/intro-call"
          label="→ Book a 15-min conversation"
          eventName="Book_Intro_Call"
          className="underline text-base hover:opacity-70"
        />
      </div>

      <div className="mt-12">
        <SubscribeButton
          href="mailto:hello@radicalsensitiveleadership.com"
          label="Or write me directly → hello@radicalsensitiveleadership.com"
          eventName="Write_Miriam_Directly"
          className="underline text-base hover:opacity-70"
        />
      </div>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
