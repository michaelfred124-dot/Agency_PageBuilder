import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';
const GUNMETAL = '#1C1C1E';
const WHITE = '#FFFFFF';

const REVIEWS = [
  {
    author: 'Damien R.',
    rating: 5,
    type: 'Personal Training',
    date: 'April 2024',
    metric: 'Lost 34 lbs in 6 months',
    text: "Marcus completely changed how I train. In 6 months I lost 34 pounds and put on real muscle for the first time in my life. No fads, no gimmicks — just smart programming and consistency. Iron Edge is the real deal.",
  },
  {
    author: 'Alexis P.',
    rating: 5,
    type: 'Group Classes',
    date: 'March 2024',
    metric: 'PR\'d every major lift',
    text: "I was intimidated walking in. I should not have been. Everyone here is supportive and the coaches push you without ever making you feel like an outsider. The strength class has made me stronger than I have ever been.",
  },
  {
    author: 'Carlos V.',
    rating: 5,
    type: 'Competition Prep',
    date: 'February 2024',
    metric: 'Hit all 3 PRs at first meet',
    text: "Daniel prepped me for my first powerlifting meet. Peak week was dialed in perfectly, and I hit all three PRs on the platform. Could not have done it with any other coach.",
  },
  {
    author: 'Jess T.',
    rating: 5,
    type: 'Nutrition Coaching',
    date: 'January 2024',
    metric: 'Down 22 lbs in 4 months',
    text: "Tanya built a nutrition plan around my actual lifestyle and food preferences. It did not feel like a diet. I am down 22 pounds in four months and I am eating more than I was before.",
  },
  {
    author: 'Raj K.',
    rating: 5,
    type: 'Personal Training',
    date: 'November 2023',
    metric: 'Back pain eliminated in 8 weeks',
    text: "I have been training here for two years. Marcus adjusts the programming every few months so I never plateau. The results are consistent and my back pain from sitting all day is completely gone.",
  },
  {
    author: 'Brittany H.',
    rating: 5,
    type: 'Group Classes',
    date: 'September 2023',
    metric: 'Went from 0 to 3 pull-ups',
    text: "The morning crew at Iron Edge is the highlight of my day. The programming is excellent, the coaches care, and the results are real. Best gym I have ever been a member of.",
  },
  {
    author: 'Devon L.',
    rating: 5,
    type: 'Personal Training',
    date: 'July 2023',
    metric: 'Benching more post double shoulder surgery',
    text: "After two shoulder surgeries I was nervous to get back to lifting. Marcus worked around my limitations, helped me rehab properly, and now I am pressing more than before the injuries. Unbelievable coaching.",
  },
  {
    author: 'Kelsey N.',
    rating: 5,
    type: 'Nutrition Coaching',
    date: 'May 2023',
    metric: 'Off the scale — learned to eat for life',
    text: "Tanya is the first nutrition coach I have had who actually teaches you rather than just handing you a meal plan. I feel confident making my own food choices now. No more yo-yo dieting.",
  },
];

const STATS = [
  { number: '4.9', label: 'Average Rating' },
  { number: '300+', label: 'Total Reviews' },
  { number: '2,400+', label: 'Active Members' },
  { number: '10', label: 'Years in Portland' },
];

export default function IronEdgeReviews() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center" style={{ backgroundColor: BLACK }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em]"
              style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
            >
              Member Reviews
            </div>
            <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
          </div>
          <h1
            className="text-6xl md:text-8xl text-white uppercase leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Real Results<span style={{ color: ORANGE }}>.</span>
          </h1>
          <div className="flex justify-center gap-2 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" style={{ color: ORANGE }} />
            ))}
          </div>
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
          >
            4.9 Stars · 300+ Reviews · Google & Yelp
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: ORANGE }} className="py-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl md:text-5xl font-black text-black leading-none mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
              >
                {stat.number}
              </div>
              <div
                className="text-[10px] font-black uppercase tracking-widest"
                style={{ color: `${BLACK}70`, fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="p-7 relative overflow-hidden"
              style={{ backgroundColor: BLACK }}
            >
              {/* Large decorative quotation mark */}
              <div
                className="absolute top-4 right-6 text-8xl leading-none font-black select-none pointer-events-none"
                style={{ color: ORANGE, opacity: 0.12, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Transformation metric — bold callout */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-5"
                style={{ backgroundColor: ORANGE }}
              >
                <span
                  className="text-[10px] font-black uppercase tracking-widest text-black"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {r.metric}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{ color: `${WHITE}55`, fontFamily: 'var(--font-body)' }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ORANGE }} />
                ))}
              </div>

              {/* Author row */}
              <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: `${WHITE}8` }}>
                <div>
                  <div
                    className="font-black text-white uppercase tracking-wide"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.01em' }}
                  >
                    {r.author}
                  </div>
                  <div
                    className="text-[9px] font-black uppercase tracking-widest mt-0.5"
                    style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
                  >
                    {r.type}
                  </div>
                </div>
                <div
                  className="text-[10px]"
                  style={{ color: `${WHITE}20`, fontFamily: 'var(--font-body)' }}
                >
                  {r.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ORANGE }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl uppercase mb-6 leading-none"
          style={{ color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
        >
          Your transformation starts today<span style={{ color: BLACK }}>.</span>
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[11px] px-12 py-4"
          style={{ backgroundColor: BLACK, color: WHITE, fontFamily: 'var(--font-body)' }}
        >
          Get Free Consult <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
