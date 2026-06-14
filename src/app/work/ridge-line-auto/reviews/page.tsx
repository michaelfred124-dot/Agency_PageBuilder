import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

const REVIEWS = [
  { author: 'Tony B.', rating: 5, service: 'Transmission', date: 'April 2024', text: "Rick and his team are the only people I trust with my truck. Honest, fast, never push unnecessary repairs. Been coming here for 7 years and they have never let me down once." },
  { author: 'Sarah M.', rating: 5, service: 'Diagnostics', date: 'March 2024', text: "Brought in my car for a mystery noise that two other shops could not diagnose. Ridge Line found it in 30 minutes, fixed same day. Fair price, no surprises. Wish I had found them years ago." },
  { author: 'James H.', rating: 5, service: 'Brakes', date: 'February 2024', text: "After getting ripped off at the dealer a friend referred me here. Night and day difference. These guys are the real deal — honest estimate, quick turnaround, and the repair held up perfectly." },
  { author: 'Kim L.', rating: 5, service: 'Oil Change', date: 'January 2024', text: "Best place in Denver for an oil change. They check everything, show you what they find, and never pressure you into something you do not need. Angela at the front desk is fantastic." },
  { author: 'Doug P.', rating: 5, service: 'AC Repair', date: 'December 2023', text: "AC went out in July. Called at 7am, in by 8, fixed by noon. The price was about half what the dealer quoted. This is my shop for life." },
  { author: 'Maria G.', rating: 5, service: 'Engine', date: 'October 2023', text: "Head gasket job on my Subaru. They kept me informed throughout, finished a day early, and charged exactly what they quoted. The car runs better than it has in years." },
  { author: 'Carl S.', rating: 4, service: 'Alignment', date: 'August 2023', text: "Good honest shop. Alignment was quick and they pointed out my front tires needed replacement soon without being pushy about it. I appreciated the heads up." },
  { author: 'Pam T.', rating: 5, service: 'Tires', date: 'June 2023', text: "Bought four tires and got an alignment. Price was competitive and they had me in and out in two hours. Great communication throughout." },
];

export default function RidgeLineReviews() {
  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Customer Reviews</div>
        <h1 className="text-4xl font-black text-white uppercase mb-5">4.8 Stars · 350+ Reviews</h1>
        <div className="flex justify-center gap-2 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" style={{ color: RED }} />)}</div>
        <p className="text-white/35 text-sm">Google · Yelp · Facebook</p>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: RED }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-black text-sm" style={{ color: CHARCOAL }}>{r.author}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{r.service}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: RED }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white uppercase mb-4">Join 14,000+ satisfied customers.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: CHARCOAL }}>Book Service <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
