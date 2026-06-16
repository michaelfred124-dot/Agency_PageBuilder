import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';
const DARK = '#0F1A33';
const WHITE = '#FFFFFF';

const REVIEWS = [
  {
    author: 'Rachel M.',
    rating: 5,
    type: 'Personal Injury',
    attorney: 'James Sterling',
    date: 'March 2024',
    text: 'Sterling Law Group fought tirelessly for my family after our auto accident. James Sterling was accessible, compassionate, and fierce in negotiations. We received a settlement that truly changed our lives. I cannot thank them enough for their commitment to our case.',
  },
  {
    author: 'David K.',
    rating: 5,
    type: 'Family Law',
    attorney: 'Maria Lawson',
    date: 'January 2024',
    text: 'During my divorce, Maria Lawson provided not just legal expertise but genuine compassion. She helped me navigate a painful process with clarity and dignity. My parenting plan was fair and completely focused on my children. I always felt like I had someone truly in my corner.',
  },
  {
    author: 'Tina R.',
    rating: 5,
    type: 'Criminal Defense',
    attorney: 'Derek Chun',
    date: 'November 2023',
    text: 'Derek Chun took on my DUI case when I felt hopeless. He identified a procedural issue that changed everything. Professional, strategic, and he actually cared about the outcome. My record is clean thanks to him. He returned every call and always told me the truth.',
  },
  {
    author: 'Marcus A.',
    rating: 5,
    type: 'Business Law',
    attorney: 'Sterling Law Group',
    date: 'September 2023',
    text: 'Sterling helped us negotiate a business acquisition contract that saved us from a bad deal. Their business attorneys are sharp, practical, and genuinely understand what we were trying to accomplish. The contract they drafted has protected us multiple times since.',
  },
  {
    author: 'Linda T.',
    rating: 5,
    type: 'Estate Planning',
    attorney: 'Sterling Law Group',
    date: 'August 2023',
    text: 'After putting off estate planning for years, I finally called Sterling. They made the process simple, clear, and thorough. My family now has real peace of mind about the future. The pricing was fair and there were no surprise fees. Highly recommend to anyone.',
  },
  {
    author: 'Jason H.',
    rating: 5,
    type: 'Personal Injury',
    attorney: 'James Sterling',
    date: 'June 2023',
    text: 'Slipped and fell at a commercial property. James Sterling took my case on contingency and won a settlement three times what the insurance company originally offered. He never once made me feel like a burden. They earn their fee many times over.',
  },
  {
    author: 'Carla N.',
    rating: 5,
    type: 'Family Law',
    attorney: 'Maria Lawson',
    date: 'April 2023',
    text: 'The custody arrangement Maria negotiated was fair, thoughtful, and focused entirely on my children. The process was stressful but she kept me grounded through all of it. I left every meeting feeling more confident than when I walked in.',
  },
  {
    author: 'Tom B.',
    rating: 5,
    type: 'Criminal Defense',
    attorney: 'Derek Chun',
    date: 'February 2023',
    text: 'Facing felony charges was the scariest moment of my life. Derek Chun built a defense that got the charges reduced significantly. He returned every call, always told me the truth, and never overpromised. The outcome changed my life. I am forever grateful.',
  },
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
      {/* Hero */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.3em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >Client Reviews</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >What Our Clients Say</h1>
        {/* Classical gold rule */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20" style={{ backgroundColor: GOLD }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: GOLD }} />
          <div className="h-px w-20" style={{ backgroundColor: GOLD }} />
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {STATS.map(({ label, value, sub }, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              >{value}</div>
              <div
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
              >{label}</div>
              <div
                className="text-white/35 text-xs"
                style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="p-8"
              style={{ backgroundColor: WHITE, borderLeft: `3px solid ${GOLD}` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="text-sm mb-0.5"
                    style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                  >{r.author}</div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
                  >{r.type}</div>
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

              {/* EB Garamond italic quote */}
              <p
                className="leading-relaxed mb-4 text-base"
                style={{ color: '#4B5563', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Gold attribution */}
              <div
                className="text-xs pt-3 border-t"
                style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', borderColor: '#F0EBE0' }}
              >
                — Represented by {r.attorney}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.3em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >Free Consultation</div>
        <h2
          className="text-4xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >Ready to Add Your Success Story?</h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16" style={{ backgroundColor: GOLD + '60' }} />
          <div className="w-1 h-1 rotate-45" style={{ backgroundColor: GOLD }} />
          <div className="h-px w-16" style={{ backgroundColor: GOLD + '60' }} />
        </div>
        <p
          className="text-white/50 mb-10 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
        >
          Schedule your free, confidential consultation. No fees unless we win.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 text-white uppercase tracking-widest text-[11px] px-12 py-5 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
        >
          Schedule Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
