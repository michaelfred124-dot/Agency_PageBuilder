import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';

const REVIEWS = [
  { author: 'Rachel M.', rating: 5, type: 'Personal Injury', date: 'March 2024', text: "Sterling Law Group fought tirelessly for my family after our auto accident. James Sterling was accessible, compassionate, and fierce in negotiations. We received a settlement that truly changed our lives. I can not thank them enough." },
  { author: 'David K.', rating: 5, type: 'Family Law', date: 'January 2024', text: "During my divorce, Maria Lawson provided not just legal expertise but genuine compassion. She helped me navigate a painful process with clarity and dignity. I always felt like I had someone truly in my corner." },
  { author: 'Tina R.', rating: 5, type: 'Criminal Defense', date: 'November 2023', text: "Derek Chun took on my DUI case when I felt hopeless. He identified a procedural issue that changed everything. Professional, strategic, and he actually cared about the outcome. My record is clean thanks to him." },
  { author: 'Marcus A.', rating: 5, type: 'Business Law', date: 'September 2023', text: "Sterling helped us negotiate a business acquisition contract that saved us from a bad deal. Their business attorneys are sharp, practical, and genuinely understand what we were trying to accomplish." },
  { author: 'Linda T.', rating: 5, type: 'Estate Planning', date: 'August 2023', text: "After putting off estate planning for years, I finally called Sterling. They made the process simple, clear, and thorough. My family now has real peace of mind about the future." },
  { author: 'Jason H.', rating: 5, type: 'Personal Injury', date: 'June 2023', text: "Slipped and fell at a commercial property. Sterling took my case on contingency and won a settlement 3x what the insurance company offered. They earn their fee." },
  { author: 'Carla N.', rating: 4, type: 'Family Law', date: 'April 2023', text: "The custody arrangement Maria negotiated was fair and focused entirely on my children. Process was stressful but she kept me grounded through all of it." },
  { author: 'Tom B.', rating: 5, type: 'Criminal Defense', date: 'February 2023', text: "Facing felony charges was the scariest moment of my life. Derek built a case that got the charges reduced significantly. He returned every call and always told me the truth." },
];

const STATS = [
  { label: 'Average Rating', value: '4.9', sub: 'across 180+ reviews' },
  { label: 'Google Reviews', value: '4.9★', sub: '112 reviews' },
  { label: 'Avvo Rating', value: '10.0', sub: 'Superb' },
  { label: 'Cases Won', value: '1,200+', sub: 'since 1999' },
];

export default function SterlingReviews() {
  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Client Reviews</div>
        <h1 className="text-4xl font-serif text-white mb-5">What Our Clients Say</h1>
        <div className="flex justify-center gap-8 flex-wrap mt-6">
          {STATS.map(({ label, value, sub }, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-serif font-bold text-white mb-1">{value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>{label}</div>
              <div className="text-white/35 text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-l-4" style={{ borderLeftColor: GOLD }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: NAVY }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.type}</div>
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
        <h2 className="text-2xl font-serif text-white mb-4">Ready to add your success story?</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: NAVY }}>Schedule Free Consultation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
