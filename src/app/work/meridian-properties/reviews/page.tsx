import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';

const REVIEWS = [
  { author: 'Chris & Amy P.', rating: 5, type: 'Buyer', agent: 'Sarah Chen', date: 'March 2024', text: "Sarah guided us through our first home purchase without any pressure. She knew the market inside and out, helped us understand every step, and fought hard on our offer. We closed under asking in a competitive neighborhood. Could not have done it without her." },
  { author: 'Robert L.', rating: 5, type: 'Seller', agent: 'Tom Reeves', date: 'January 2024', text: "Sold our home in 6 days at $22,000 over asking. Tom had a strategy from day one — professional photos, targeted marketing, and a well-timed open house. The results speak for themselves." },
  { author: 'Diane M.', rating: 5, type: 'Investment', agent: 'Sarah Chen', date: 'November 2023', text: "Sarah helped me acquire my third investment property. Her knowledge of rental yield and neighborhood trends saved me from one deal and found me a better one. Exceptional expertise." },
  { author: 'Kevin T.', rating: 5, type: 'Buyer', agent: 'Tom Reeves', date: 'September 2023', text: "Moved from San Francisco to Portland and Tom made the remote buying process seamless. Video tours, detailed neighborhood breakdowns, and he always answered within the hour. Found our perfect home in three weeks." },
  { author: 'Sandra & Mike R.', rating: 5, type: 'Seller', agent: 'Sarah Chen', date: 'July 2023', text: "We had a tricky property with some deferred maintenance. Sarah priced it right, marketed the strengths, and managed the negotiations with multiple offers beautifully. We walked away thrilled." },
  { author: 'Pat H.', rating: 5, type: 'Property Mgmt', agent: 'Aisha Johnson', date: 'May 2023', text: "Aisha has managed our rental duplex for two years. Zero vacancy, responsive tenants, and I never have to worry. The rent arrives on time every month and maintenance issues are handled before I even know about them." },
];

export default function MeridianReviews() {
  return (
    <>
      <section style={{ backgroundColor: SLATE }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Client Reviews</div>
        <h1 className="text-4xl font-serif text-white mb-5">Client Testimonials</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: FOREST }} />)}</div>
        <p className="text-white/35 text-sm">4.9 Stars · 240+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: FOREST }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: SLATE }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.type} · {r.agent}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: FOREST }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: FOREST }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Ready to work with Portland's trusted team?</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: FOREST }}>Schedule Consultation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
