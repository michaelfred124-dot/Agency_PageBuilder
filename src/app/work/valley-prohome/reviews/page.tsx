import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';

const REVIEWS = [
  { author: 'Mike S.', rating: 5, service: 'Plumbing', date: 'April 2024', text: "Pipe burst at 11pm. Called Valley ProHome and Hector was there within 45 minutes. Fixed the issue, checked the whole system, and cleaned up completely. This is the only home services company I will ever call." },
  { author: 'Linda C.', rating: 5, service: 'HVAC', date: 'March 2024', text: "AC stopped working during a heat wave. ProHome had a tech out same afternoon. He diagnosed the problem, had the part on his truck, and had us cooling again in two hours. Honest pricing and excellent work." },
  { author: 'Rob T.', rating: 5, service: 'Electrical', date: 'February 2024', text: "Needed a panel upgrade for a home office addition. Dave was thorough, explained every step, and the work passed inspection first time. They were respectful of my home and cleaned up like they were never there." },
  { author: 'Karen M.', rating: 5, service: 'General Repairs', date: 'January 2024', text: "Had a list of small repairs piling up — leaky faucet, cracked tile, sticky door, broken outlet. They sent one person who knocked out everything in three hours. Exactly what they quoted, not a penny more." },
  { author: 'Tom A.', rating: 5, service: 'Roofing', date: 'November 2023', text: "Roof inspection after a storm. They found two damaged sections, showed me photos, gave me a clear estimate, and completed the repair in one day. No pressure, no upselling, just honest work. Highly recommend." },
  { author: 'Sandra B.', rating: 5, service: 'HVAC + Plumbing', date: 'August 2023', text: "Used ProHome for both HVAC maintenance and a bathroom plumbing issue. Seamless coordination, both techs were on time and professional. The 2-year warranty on all work gives me real peace of mind." },
];

export default function ValleyProHomeReviews() {
  return (
    <>
      <section style={{ backgroundColor: GREEN }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Customer Reviews</div>
        <h1 className="text-4xl font-serif text-white mb-5">What Homeowners Are Saying</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: GOLD }} />)}</div>
        <p className="text-white/35 text-sm">4.9 Stars · 420+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-l-4" style={{ borderLeftColor: GOLD }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: GREEN }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.service}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: GOLD }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Ready to work with a team you can trust?</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: GREEN }}>Get a Free Estimate <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
