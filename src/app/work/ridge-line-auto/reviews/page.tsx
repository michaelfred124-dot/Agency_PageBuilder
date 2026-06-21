import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const CARD = '#161616';
const RED = '#E5242A';

const REVIEWS = [
  { author: 'Tony B.', rating: 5, service: 'Dyno Tune & Bolt-ons', date: 'April 2026', text: "Rick and his team are the only people I trust with my Mustang. Honest, fast, never push unnecessary builds. Been coming here for 7 years and they have never let me down once. Highly recommend their tuning." },
  { author: 'Sarah M.', rating: 5, service: 'Diagnostics & Telemetry', date: 'March 2026', text: "Brought in my Raptor for a mystery engine knock that two other shops could not diagnose. Ridge Line found the issue in 30 minutes and resolved it the same day. Incredible troubleshooting." },
  { author: 'James H.', rating: 5, service: 'High-Perf Brakes', date: 'February 2026', text: "After getting run around at the dealer, a friend referred me here. Night and day difference. These guys are the real deal — honest pricing, quick turnaround, and the Brembos feel amazing." },
  { author: 'Kim L.', rating: 5, service: 'Performance Maintenance', date: 'January 2026', text: "Best place in Nashville for tuning or an oil change. They check everything, show you what they find, and never pressure you. Angela at the front desk is fantastic." },
  { author: 'Doug P.', rating: 5, service: 'Suspension Tuning', date: 'December 2025', text: "Coilovers went on last week. The corner-balancing is perfect. The car sits right and handles like it is glued to the road. This is my performance shop for life." },
  { author: 'Maria G.', rating: 5, service: 'Supercharger Install', date: 'October 2025', text: "Supercharger job on my Coyote. Rick kept me updated throughout, finished on time, and charged exactly what was quoted. The power delivery is absolutely mental." },
  { author: 'Carl S.', rating: 4, service: 'Custom Exhaust', date: 'August 2025', text: "Good honest shop. The cat-back install was quick and they pointed out my rear tires needed replacement soon without being pushy. Appreciated the heads up." },
  { author: 'Pam T.', rating: 5, service: 'Track Wheel Setup', date: 'June 2025', text: "Got track tires mounted and an alignment. Price was competitive and they had me in and out in two hours. Great communication throughout." },
];

const STATS = [
  { label: 'Google Rating', value: '4.9', sub: 'over 600 reviews' },
  { label: 'Technician Avg', value: '18 Yrs', sub: 'ASE Master Certified' },
  { label: 'Vehicles Served', value: '4,200+', sub: 'since 2002' },
  { label: 'Satisfaction', value: '100%', sub: 'Guaranteed' },
];

export default function RidgeLineReviews() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: BG, color: '#fff' }}>
      
      {/* Header Stat Board */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Reviews</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none uppercase">Vouched by the Street</h1>
        
        <div className="flex justify-center gap-10 flex-wrap mt-12 max-w-4xl mx-auto">
          {STATS.map(({ label, value, sub }, i) => (
            <div key={i} className="text-center border-l border-[#E5242A]/30 pl-6 min-w-[150px]">
              <div className="text-3xl font-black text-white mb-2">{value}</div>
              <div className="text-[9px] font-mono font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>{label}</div>
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
              className={`p-8 border border-white/5 hover:border-[#E5242A]/40 transition-all flex flex-col justify-between min-h-[240px] text-left shadow-lg ${
                i % 2 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 'rounded-tr-3xl rounded-bl-3xl'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-black text-md text-white uppercase tracking-wide">{r.author}</h3>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#E5242A] block mt-0.5">{r.service}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1 font-mono">
                    <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />)}</div>
                    <span className="text-[9px] text-white/30">{r.date}</span>
                  </div>
                </div>
                <p className="text-white/75 italic text-xs leading-relaxed font-light">"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="bg-[#E5242A] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl text-white border border-[#E5242A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600')" }} />
          <h2 className="text-3xl font-black text-white mb-4 uppercase">Experience Ridge Line diagnostics first-hand.</h2>
          <div className="pt-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] text-white font-mono font-black uppercase tracking-widest text-xs px-10 py-5 transition-all">
              Book Service Slot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

