import Link from 'next/link';
import { ArrowRight, Star, Quote, ShieldCheck } from 'lucide-react';

const BASE = '/work/meridian-properties';
const BG = '#FAF8F5';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';

const REVIEWS = [
  {
    author: 'Robert & Claire S.',
    type: 'Seller Representative',
    agent: 'Catherine Harlow',
    neighborhood: 'Green Hills',
    date: 'April 2026',
    text: "Catherine Harlow secured $140,000 above our listing valuation with multiple offers in hand. Her contract negotiation and absolute focus on details saved us from a complex contingency dispute. Elite-tier representation.",
    stars: 5,
    size: 'lg',
  },
  {
    author: 'Thomas W.',
    type: 'Buyer Representative',
    agent: 'Catherine Harlow',
    neighborhood: 'Belle Meade',
    date: 'February 2026',
    text: "Meridian Properties sourced an off-market Belle Meade estate that never hit the MLS. Their network in Middle Tennessee is completely unmatched.",
    stars: 5,
    size: 'sm',
  },
  {
    author: 'Marcus & Evelyn K.',
    type: 'Seller Representative',
    agent: 'Isabelle Monroe',
    neighborhood: 'Brentwood',
    date: 'January 2026',
    text: "Isabelle's architectural staging recommendations transformed our property. We received 4 cash offers in the first weekend of listing, closing with zero repair contingencies. Her process is phenomenal.",
    stars: 5,
    size: 'sm',
  },
  {
    author: 'Dr. Julian H.',
    type: 'Investment Advisory',
    agent: 'James Aldridge',
    neighborhood: 'Franklin / The Gulch',
    date: 'November 2025',
    text: "James helped us structure a complex 1031 Exchange into three luxury multi-family properties. His cash flow projections and market absorption models were precise down to the dollar.",
    stars: 5,
    size: 'lg',
  },
  {
    author: 'Cynthia & David R.',
    type: 'Relocation Buyer',
    agent: 'Isabelle Monroe',
    neighborhood: 'Green Hills',
    date: 'October 2025',
    text: "Moving from Chicago to Nashville, Isabelle made the remote relocation process effortless. Video walk-throughs, neighborhood analyses, and zoning investigations were all organized in digital reports. Outstanding communication.",
    stars: 5,
    size: 'lg',
  },
  {
    author: 'Alden Developments',
    type: 'Asset Portfolio Advisory',
    agent: 'James Aldridge',
    neighborhood: 'Davidson County Portfolio',
    date: 'August 2025',
    text: "James's investment modeling and underwriting analysis have been pristine. He operates like an institutional partner, not just a broker.",
    stars: 5,
    size: 'sm',
  }
];

export default function MeridianReviews() {
  return (
    <div style={{ backgroundColor: BG, color: SLATE }} className="overflow-x-hidden pb-12">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 text-left">
        <div className="max-w-3xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#B8A27A] block mb-4">
              Client Experiences &nbsp;·&nbsp; Testimonials
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight text-[#1F242E] mb-6">
              A reputation built on <span className="text-[#B8A27A] italic font-light">results.</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              We measure our success by the satisfaction of our clients and the strength of their investment outcomes. Here is how we represent buyers, sellers, and portfolio builders across Middle Tennessee.
            </p>
          </div>
          
          <div className="p-6 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] min-w-[240px] shrink-0 text-left">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current text-[#B8A27A]" />)}
            </div>
            <div className="text-2xl font-serif font-black text-[#1F242E]">4.9 / 5.0</div>
            <div className="text-[8px] font-mono uppercase tracking-widest text-gray-400 font-bold">240+ Certified Google Reviews</div>
          </div>
        </div>
      </section>

      {/* REVIEWS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-6 relative">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-cover bg-center mix-blend-overlay rounded-[48px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600')" }} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {REVIEWS.map((r, i) => {
            const isLarge = r.size === 'lg';
            return (
              <div
                key={i}
                className={`p-8 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(31,36,46,0.06)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.12)] hover:border-[#B8A27A]/35 transition-all duration-500 flex flex-col justify-between text-left ${
                  isLarge ? 'md:col-span-2 min-h-[320px]' : 'md:col-span-1 min-h-[320px]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#B8A27A]/10 flex items-center justify-center">
                      <Quote className="w-3.5 h-3.5 text-[#B8A27A]" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(r.stars)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-current text-[#B8A27A]" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600 leading-relaxed font-light italic mb-8">
                    "{r.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold text-[#1F242E] uppercase tracking-wide">{r.author}</div>
                    <div className="text-[9px] text-[#B8A27A] font-mono uppercase tracking-widest font-black mt-0.5">
                      {r.neighborhood}
                    </div>
                  </div>
                  <div className="text-[8px] text-gray-400 font-mono font-bold uppercase tracking-wider text-right">
                    <div>{r.type}</div>
                    <div className="text-gray-300 font-light mt-0.5">{r.agent}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL GLASS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-gradient-to-tr from-[#B8A27A] to-[#E5D5BC] rounded-[48px] py-20 px-8 text-center shadow-lg relative overflow-hidden border border-white/50">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600')" }} />
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] mb-6 tracking-tight relative z-10">Write your own success story.</h2>
          <p className="text-gray-800 text-xs font-mono font-bold tracking-wider mb-8 max-w-sm mx-auto uppercase relative z-10">Honest advice. Dedicated focus. Outstanding results.</p>
          <div className="pt-2 relative z-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#1F242E] hover:bg-white hover:text-black text-white font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all shadow-sm">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
