import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

const REVIEWS = [
  { author: 'Damien R.', rating: 5, type: 'Personal Training', date: 'April 2024', text: "Marcus completely changed how I train. In 6 months I lost 34 pounds and put on real muscle for the first time in my life. No fads, no gimmicks — just smart programming and consistency. Iron Edge is the real deal." },
  { author: 'Alexis P.', rating: 5, type: 'Group Classes', date: 'March 2024', text: "I was intimidated walking in. I should not have been. Everyone here is supportive and the coaches push you without ever making you feel like an outsider. The strength class has made me stronger than I have ever been." },
  { author: 'Carlos V.', rating: 5, type: 'Competition Prep', date: 'February 2024', text: "Daniel prepped me for my first powerlifting meet. Peak week was dialed in perfectly, and I hit all three PRs on the platform. Could not have done it with any other coach." },
  { author: 'Jess T.', rating: 5, type: 'Nutrition Coaching', date: 'January 2024', text: "Tanya built a nutrition plan around my actual lifestyle and food preferences. It did not feel like a diet. I am down 22 pounds in four months and I am eating more than I was before." },
  { author: 'Raj K.', rating: 5, type: 'Personal Training', date: 'November 2023', text: "I have been training here for two years. Marcus adjusts the programming every few months so I never plateau. The results are consistent and my back pain from sitting all day is gone." },
  { author: 'Brittany H.', rating: 5, type: 'Group Classes', date: 'September 2023', text: "The morning crew at Iron Edge is the highlight of my day. The programming is excellent, the coaches care, and the results are real. Best gym I have ever been a member of." },
  { author: 'Devon L.', rating: 5, type: 'Personal Training', date: 'July 2023', text: "After two shoulder surgeries I was nervous to get back to lifting. Marcus worked around my limitations, helped me rehab properly, and now I am pressing more than before the injuries. Unbelievable coaching." },
  { author: 'Kelsey N.', rating: 5, type: 'Nutrition Coaching', date: 'May 2023', text: "Tanya is the first nutrition coach I have had who actually teaches you rather than just handing you a meal plan. I feel confident making my own food choices now." },
];

export default function IronEdgeReviews() {
  return (
    <>
      <section style={{ backgroundColor: BLACK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>Member Reviews</div>
        <h1 className="text-4xl font-black text-white uppercase mb-2">4.9 Stars · 300+ Reviews</h1>
        <div className="flex justify-center gap-2 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" style={{ color: ORANGE }} />)}</div>
        <p className="text-white/35 text-sm uppercase tracking-widest text-xs">Google · Yelp</p>
      </section>

      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: '#111' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="p-7 border-l-4" style={{ backgroundColor: '#1a1a1a', borderLeftColor: ORANGE }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-black text-sm text-white">{r.author}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: ORANGE }}>{r.type}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ORANGE }} />)}</div>
                  <div className="text-[10px] text-white/20">{r.date}</div>
                </div>
              </div>
              <p className="text-white/50 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: ORANGE }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white uppercase mb-4">Your transformation starts today.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: BLACK }}>Get Free Consult <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
