import Link from 'next/link';
import { ArrowRight, Star, Flower2 } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';
const GOLD = '#C9A96E';
const IVORY = '#FAF7F2';

const REVIEWS = [
  {
    author: 'Emily & James W.',
    rating: 5,
    type: 'Full Planning',
    date: 'October 2023',
    location: 'The William Aiken House, Charleston',
    text: "We handed Sophia the reins on our wedding and it was the best decision we ever made. Every detail was considered, every vendor was perfectly chosen, and the day itself was completely stress-free. We got to be present for every moment. Absolutely perfect.",
  },
  {
    author: 'Natalie R.',
    rating: 5,
    type: 'Partial Planning',
    date: 'August 2023',
    location: 'Middleton Place Plantation',
    text: "I had a vision but needed help executing it. Sophia stepped in and immediately understood my aesthetic. The coordination on the day was seamless and she thought of details I never would have. Worth every penny.",
  },
  {
    author: 'Claire & Dan M.',
    rating: 5,
    type: 'Floral Design',
    date: 'June 2023',
    location: 'The Cedar Room, Charleston',
    text: "The florals Sophia created for our wedding were beyond anything we could have imagined. The ceremony arch was breathtaking. She listened to every request and then elevated it into something truly extraordinary.",
  },
  {
    author: 'Priya & Raj S.',
    rating: 5,
    type: 'Full Planning',
    date: 'April 2023',
    location: 'Hibernian Hall, Charleston',
    text: "We wanted a blend of South Asian and Western traditions. Sophia embraced it completely, researched both, and created something authentic and beautiful. Our families were in tears — the good kind. Flawless execution.",
  },
  {
    author: 'Laura H.',
    rating: 5,
    type: 'Day-Of Coordination',
    date: 'March 2023',
    location: 'Lowndes Grove Plantation',
    text: "I planned my own wedding but needed someone to execute the day. Sophia took my binder, ran a seamless rehearsal, and managed the entire day without one hiccup. She intercepted two problems I never even knew about.",
  },
  {
    author: 'Megan & Tom B.',
    rating: 5,
    type: 'Full Planning',
    date: 'November 2022',
    location: 'The Inn at Palmetto Bluff',
    text: "Over 18 months Sophia became more than a planner — she was a trusted advisor and creative collaborator. She pushed back when something was not quite right and championed our vision always. The result was the most beautiful day of our lives.",
  },
];

const STATS = [
  { number: '350+', label: 'Weddings Planned' },
  { number: '5.0', label: 'Average Star Rating' },
  { number: '160+', label: 'Google Reviews' },
  { number: '9', label: 'Years in Charleston' },
];

export default function GoldenThreadReviews() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center" style={{ backgroundColor: DARK }}>
        <div className="max-w-3xl mx-auto">
          <Flower2 className="w-8 h-8 mx-auto mb-6" style={{ color: GOLD }} strokeWidth={1} />
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
          >
            Client Reviews
          </div>
          <h1
            className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Stories From Our Couples
          </h1>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: SAGE }} />
            ))}
          </div>
          <div className="w-16 h-px mx-auto mb-4" style={{ backgroundColor: GOLD }} />
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            5.0 Stars · 160+ Google Reviews
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ backgroundColor: IVORY }} className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl md:text-5xl mb-2"
                style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                {stat.number}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Masonry Grid */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto columns-1 md:columns-2 gap-6 space-y-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 break-inside-avoid shadow-sm"
              style={{ marginBottom: '1.5rem' }}
            >
              {/* Large decorative quotation mark */}
              <div
                className="text-7xl leading-none mb-2 -mt-2"
                style={{ color: GOLD, fontFamily: 'var(--font-display)', fontStyle: 'italic', opacity: 0.5 }}
              >
                &ldquo;
              </div>

              <p
                className="text-gray-600 leading-relaxed mb-6 text-[15px]"
                style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >
                {r.text}
              </p>

              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SAGE }} />
                ))}
              </div>

              {/* Divider */}
              <div className="w-8 h-px mb-4" style={{ backgroundColor: GOLD }} />

              {/* Author info */}
              <div className="flex items-end justify-between">
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem' }}
                  >
                    {r.author}
                  </div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.35em] mt-0.5"
                    style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                  >
                    {r.type}
                  </div>
                  <div
                    className="text-[10px] text-gray-400 mt-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {r.location}
                  </div>
                </div>
                <div
                  className="text-[10px] text-gray-300 shrink-0"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {r.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Mentions */}
      <section style={{ backgroundColor: IVORY }} className="py-16 px-6 text-center">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
          style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
        >
          As Featured In
        </div>
        <div className="flex flex-wrap justify-center gap-10 max-w-2xl mx-auto">
          {['Southern Weddings', 'The Knot', 'Brides Magazine', "Charleston's Choice 2023"].map((pub, i) => (
            <div
              key={i}
              className="text-gray-300 font-bold uppercase tracking-widest text-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {pub}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl text-white mb-4 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          Let us craft your perfect day.
        </h2>
        <div className="w-16 h-px mx-auto my-6" style={{ backgroundColor: GOLD }} />
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] px-12 py-4"
          style={{ backgroundColor: SAGE, color: 'white', fontFamily: 'var(--font-body)' }}
        >
          Begin Your Journey <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
