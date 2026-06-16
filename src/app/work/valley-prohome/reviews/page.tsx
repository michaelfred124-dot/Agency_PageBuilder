import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';
const WHITE = '#FFFFFF';
const DARK = '#111111';

const REVIEWS = [
  {
    author: 'Mike S.',
    rating: 5,
    service: 'Plumbing — Emergency',
    date: 'April 2024',
    text: 'Pipe burst at 11pm on a Sunday. Called Valley ProHome and Hector was there within 45 minutes. Fixed the burst pipe, pressure-tested the whole system, and cleaned up completely. This is the only home services company I will ever call. Absolutely incredible response time.',
  },
  {
    author: 'Linda C.',
    rating: 5,
    service: 'HVAC — Same-Day',
    date: 'March 2024',
    text: 'AC stopped working during a 108-degree heat wave. ProHome had a tech out the same afternoon. He diagnosed a failed capacitor, had the part on his truck, and had us cooling again in under two hours. Honest flat-rate pricing and excellent work. Highly recommend.',
  },
  {
    author: 'Rob T.',
    rating: 5,
    service: 'Electrical',
    date: 'February 2024',
    text: 'Needed a full panel upgrade for a home office addition. Dave was thorough, walked me through every step, and the work passed city inspection first time — no callbacks, no corrections. They were respectful of my home and cleaned up completely when done.',
  },
  {
    author: 'Karen M.',
    rating: 5,
    service: 'General Repairs',
    date: 'January 2024',
    text: 'Had a list of small repairs piling up for months — leaky faucet, cracked tile, sticky door, broken outlet. They sent one technician who knocked out everything in three hours. Exactly what they quoted me on the phone, not a penny more. Honest and efficient.',
  },
  {
    author: 'Tom A.',
    rating: 5,
    service: 'Roofing',
    date: 'November 2023',
    text: 'Free roof inspection after a monsoon storm. They found two damaged sections, showed me clear photos of the damage, gave me a straightforward estimate, and completed the repair in one day. Zero pressure, zero upselling. Just honest work at a fair price. Highly recommend.',
  },
  {
    author: 'Sandra B.',
    rating: 5,
    service: 'HVAC + Plumbing',
    date: 'August 2023',
    text: 'Used ProHome for both our annual HVAC maintenance and a bathroom plumbing issue in the same week. Seamless coordination between the two teams, both techs were punctual and professional. The 2-year warranty on all workmanship gives me real peace of mind as a homeowner.',
  },
  {
    author: 'James R.',
    rating: 5,
    service: 'Plumbing',
    date: 'July 2023',
    text: 'Water heater finally gave out. Called at 8am and had a new one installed by 1pm the same day. The technician explained the options clearly, stuck to the quoted price, and hauled away the old unit. Fast, professional, and fair. Exactly what you want from a home service company.',
  },
  {
    author: 'Amy W.',
    rating: 5,
    service: 'Electrical',
    date: 'June 2023',
    text: 'Had them install an EV charger in my garage. The electrician arrived on time, got the permit pulled quickly, and did clean, code-compliant work. Car charges faster than expected on the new circuit. Already recommended ProHome to three neighbors.',
  },
];

const STATS = [
  { value: '4.9★', label: 'Google Rating' },
  { value: '420+', label: 'Reviews' },
  { value: '18+', label: 'Years Serving Phoenix' },
  { value: '2-Year', label: 'Workmanship Warranty' },
];

export default function ValleyProHomeReviews() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: GREEN }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Customer Reviews</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >What Homeowners<br />Are Saying</h1>
        <div className="w-16 h-1.5 mx-auto mb-5" style={{ backgroundColor: GOLD }} />
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" style={{ color: GOLD }} />
          ))}
        </div>
        <p
          className="text-white/50 text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >4.9 Stars · 420+ Google Reviews</p>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: GOLD }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }, i) => (
            <div key={i}>
              <div
                className="text-2xl mb-0.5"
                style={{ color: DARK, fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >{value}</div>
              <div
                className="text-[10px] uppercase tracking-widest"
                style={{ color: 'rgba(0,0,0,0.55)', fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 border-l-4"
              style={{ borderLeftColor: GREEN }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="text-sm mb-0.5"
                    style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >{r.author}</div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >{r.service}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />
                    ))}
                  </div>
                  <div
                    className="text-[10px] text-gray-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >{r.date}</div>
                </div>
              </div>
              <p
                className="text-gray-600 italic text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: GOLD }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl mb-3"
          style={{ color: DARK, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Ready to work with a team you can trust?</h2>
        <p
          className="mb-8"
          style={{ color: 'rgba(0,0,0,0.55)', fontFamily: 'var(--font-body)' }}
        >18+ years serving Phoenix and the East Valley. Free estimates. Same-week scheduling.</p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white uppercase tracking-widest text-[11px] px-10 py-4 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          Get a Free Estimate <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
