import Link from 'next/link';
import { ArrowRight, Star, Scale } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const BG = '#0A0A0A';
const GOLD = '#C9A84C';
const CARD = '#111111';
const BORDER = 'rgba(201,168,76,0.15)';
const MUTED = 'rgba(255,255,255,0.4)';

const REVIEWS = [
  { 
    author: 'Rachel M.', 
    rating: 5, 
    type: 'Business Litigation', 
    date: 'March 2026', 
    text: "When our partnership dispute threatened to halt operations, James Sterling moved with incredible speed. They filed a counter-motion and resolved the issue, recovering full damages. Exceptional trial lawyers." 
  },
  { 
    author: 'David K.', 
    rating: 5, 
    type: 'Corporate Law', 
    date: 'January 2026', 
    text: "David Park guided us through a complex board restructuring. His corporate counsel was practical, strategic, and kept us fully compliant with state securities regulations." 
  },
  { 
    author: 'Tina R.', 
    rating: 5, 
    type: 'Mergers & Acquisitions', 
    date: 'November 2025', 
    text: "David Park and his M&A team advised us on our asset acquisition. They uncovered a hidden valuation issue during due diligence that saved us millions. We won't close another deal without them." 
  },
  { 
    author: 'Marcus A.', 
    rating: 5, 
    type: 'Business Litigation', 
    date: 'September 2025', 
    text: "Sterling helped us negotiate a partnership buyout that was heading to litigation. Their commercial attorneys are sharp, practical, and highly strategic." 
  },
  { 
    author: 'Linda T.', 
    rating: 5, 
    type: 'Estate Planning', 
    date: 'August 2025', 
    text: "After putting off estate planning for years, Catherine designed a comprehensive family trust. Her command of tax law and business succession is superb. Real peace of mind." 
  },
  { 
    author: 'Jason H.', 
    rating: 5, 
    type: 'Trust Administration', 
    date: 'June 2025', 
    text: "We faced a probate litigation challenge to our family trust. Catherine Abrams defended our interests aggressively in court. We prevailed on every count." 
  },
];

const STATS = [
  { label: 'Average Rating', value: '4.9', sub: 'across 180+ reviews' },
  { label: 'Firm Avvo Rating', value: '10.0', sub: 'Superb Rated' },
  { label: 'Jury Verdicts', value: '$40M+', sub: 'Recovered' },
  { label: 'Cases Resolved', value: '2,400+', sub: 'since 1996' },
];

export default function SterlingReviews() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff' }} className="overflow-x-hidden">
      
      {/* Header Stat Board */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Client Experience</span>
        <h1 className="text-4xl md:text-6xl font-sans font-black text-white mb-8 leading-none">Verified Client Success</h1>
        <div className="flex justify-center gap-10 flex-wrap mt-12 max-w-4xl mx-auto">
          {STATS.map(({ label, value, sub }, i) => (
            <div key={i} className="text-center border-l border-[#C9A84C]/30 pl-6 min-w-[150px]">
              <div className="text-3xl font-sans font-bold text-white mb-2">{value}</div>
              <div className="text-[9px] font-mono font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>{label}</div>
              <div className="text-white/40 text-[10px] font-light">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Review cards with custom asymmetrical roundings */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((r, i) => (
            <div 
              key={i} 
              className={`p-8 border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 transition-all flex flex-col justify-between min-h-[240px] text-left shadow-lg ${
                i % 2 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 'rounded-tr-3xl rounded-bl-3xl'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-md text-white">{r.author}</h3>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#C9A84C] block mt-0.5">{r.type}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1 font-mono">
                    <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />)}</div>
                    <span className="text-[9px] text-white/30">{r.date}</span>
                  </div>
                </div>
                <p className="text-white/70 italic text-xs leading-relaxed font-light">"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="bg-[#C9A84C] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl text-slate-900 border border-[#C9A84C]">
          <h2 className="text-3xl font-sans font-black text-[#0A0A0A] mb-4">Partner with award-winning advocates.</h2>
          <div className="pt-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#FAF8F2] hover:text-[#0A0A0A] text-white font-mono font-bold uppercase tracking-widest text-xs px-10 py-5 transition-all">
              Schedule Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
