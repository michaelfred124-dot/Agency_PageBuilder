import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';

const REVIEWS = [
  { author: 'Isabelle T.', rating: 5, service: 'Styling Session', date: 'April 2024', text: "Clara completely transformed how I think about my wardrobe. She helped me identify my style language, pulled pieces I never would have tried, and everything fit beautifully. I left with a clear direction and zero overwhelm. Maison is unlike any boutique I have ever visited." },
  { author: 'Grace M.', rating: 5, service: 'Shopping', date: 'March 2024', text: "I just moved to Nashville and wanted to find my go-to boutique. Found it. The curation is impeccable — every piece feels considered and intentional. The staff is warm, not pushy, and the whole experience felt like shopping with a knowledgeable friend." },
  { author: 'Simone W.', rating: 5, service: 'Wardrobe Audit', date: 'February 2024', text: "Did the wardrobe audit and it was one of the best things I have done for myself. Simone helped me clear out pieces that were not serving me and build a clear picture of what I actually needed. My closet is smaller and better than it has ever been." },
  { author: 'Cara B.', rating: 5, service: 'Gift Styling', date: 'January 2024', text: "Needed a birthday gift for my fashion-forward best friend with zero idea where to start. The team at Maison listened carefully and put together a perfect selection. She loved everything. I will absolutely come back for every special occasion." },
  { author: 'Danielle K.', rating: 5, service: 'Styling Session', date: 'November 2023', text: "I wore the same safe style for years out of uncertainty. Clara helped me step out of it. She was perceptive, encouraging, and honest. Six months later I still reach for the pieces she picked and feel like my best self every time." },
  { author: 'Rachel H.', rating: 5, service: 'Shopping', date: 'September 2023', text: "The sustainable and locally made pieces here are genuinely beautiful. Not the stereotypical beige linen aesthetic — these are real clothes with real personality. I feel good about what I am buying and I look great in it. Monthly shopper now." },
];

export default function MaisonReviews() {
  return (
    <>
      <section style={{ backgroundColor: ESPRESSO }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Client Reviews</div>
        <h1 className="text-4xl font-serif italic mb-5" style={{ color: SAND }}>What Our Clients Are Saying</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: SAGE }} />)}</div>
        <p className="text-sm" style={{ color: 'rgba(242,234,217,0.35)' }}>5.0 Stars · 140+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: SAND }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: ESPRESSO }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.service}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SAGE }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: ESPRESSO }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic mb-4" style={{ color: SAND }}>Experience the Maison difference.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: SAGE, color: 'white' }}>Book a Styling Session <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
