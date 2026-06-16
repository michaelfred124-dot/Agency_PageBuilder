import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';
const SILVER = '#8C8C8C';
const CONCRETE = '#F5F5F5';

const REVIEWS = [
  {
    author: 'Tony B.',
    rating: 5,
    service: 'Transmission Rebuild',
    date: 'April 2024',
    text: "Rick and his team are the only people I trust with my truck. Honest, fast, never push unnecessary repairs. They sent me a digital inspection report with photos before touching anything. Been coming here for 7 years and they have never let me down once.",
  },
  {
    author: 'Sarah M.',
    rating: 5,
    service: 'Engine Diagnostics',
    date: 'March 2024',
    text: "Brought in my car for a mystery noise that two other shops could not diagnose. Ridge Line found it in 30 minutes, fixed same day. Fair price, no hidden fees, no surprises on the invoice. Wish I had found them years ago.",
  },
  {
    author: 'James H.',
    rating: 5,
    service: 'Brake Replacement',
    date: 'February 2024',
    text: "After getting ripped off at the dealer a friend referred me here. Night and day difference. These guys gave me an honest diagnosis, a written estimate before starting, and the repair held up perfectly. I will never go anywhere else.",
  },
  {
    author: 'Kim L.',
    rating: 5,
    service: 'Oil Change',
    date: 'January 2024',
    text: "Best place in Denver for an oil change. They check everything, send you a digital inspection report, and never pressure you into something you do not need. Angela at the front desk explains everything in plain English.",
  },
  {
    author: 'Doug P.',
    rating: 5,
    service: 'AC Repair',
    date: 'December 2023',
    text: "AC went out in July. Called at 7am, in by 8, fixed by noon. The price was about half what the dealer quoted. They showed me exactly what was wrong before fixing it. This is my shop for life.",
  },
  {
    author: 'Maria G.',
    rating: 5,
    service: 'Head Gasket Repair',
    date: 'October 2023',
    text: "Head gasket job on my Subaru. They kept me informed every step of the way, sent photo updates, finished a day early, and charged exactly what they quoted. No hidden fees. The car runs better than it has in years.",
  },
  {
    author: 'Carl S.',
    rating: 4,
    service: 'Wheel Alignment',
    date: 'August 2023',
    text: "Good honest shop. Alignment was quick and they pointed out my front tires needed replacement soon without being pushy about it. They gave me the printout showing before and after — loved the transparency.",
  },
  {
    author: 'Pam T.',
    rating: 5,
    service: 'New Tires & Alignment',
    date: 'June 2023',
    text: "Bought four tires and got an alignment. Competitive price, in and out in two hours. Marcus walked me through the alignment results. Great communication throughout — no surprises on the final bill.",
  },
];

const HIGHLIGHTS = [
  { label: '4.8 Stars', sub: 'Average Rating' },
  { label: '350+', sub: 'Google Reviews' },
  { label: '14,000+', sub: 'Vehicles Served' },
  { label: '18 Years', sub: 'Denver Trusted' },
];

export default function RidgeLineReviews() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
            style={{ color: RED, fontFamily: 'var(--font-display)' }}
          >
            Customer Reviews
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-5 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            4.8 Stars
            <br />
            350+ Reviews
          </h1>
          <div style={{ width: 60, height: 3, backgroundColor: RED }} className="mb-6" />
          <div className="flex gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" style={{ color: RED }} />
            ))}
          </div>
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Google · Yelp · Facebook
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ backgroundColor: RED }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {HIGHLIGHTS.map(({ label, sub }, i) => (
            <div
              key={i}
              className="py-5 px-8 text-center border-r border-white/20 last:border-r-0"
            >
              <div
                className="text-2xl text-white mb-0.5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
              <div
                className="text-[9px] text-white/70 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <section style={{ backgroundColor: CONCRETE }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-white p-7"
              style={{ borderLeft: `4px solid ${RED}` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="mb-0.5"
                    style={{
                      color: CHARCOAL,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      fontSize: '0.85rem',
                    }}
                  >
                    {r.author}
                  </div>
                  <div
                    className="text-[9px] font-black uppercase tracking-widest"
                    style={{ color: RED, fontFamily: 'var(--font-display)' }}
                  >
                    {r.service}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <div className="flex">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />
                    ))}
                  </div>
                  <div
                    className="text-[10px]"
                    style={{ color: SILVER, fontFamily: 'var(--font-body)' }}
                  >
                    {r.date}
                  </div>
                </div>
              </div>

              <Quote
                className="w-4 h-4 mb-2 opacity-20"
                style={{ color: CHARCOAL }}
              />
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>

        {/* Digital Inspection callout */}
        <div className="max-w-5xl mx-auto mt-8">
          <div
            className="p-7 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ backgroundColor: CHARCOAL }}
          >
            <div>
              <div
                className="text-[10px] font-black uppercase tracking-widest mb-2"
                style={{ color: RED, fontFamily: 'var(--font-display)' }}
              >
                Digital Inspection Reports
              </div>
              <p
                className="text-white/60 text-sm max-w-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Every vehicle gets a digital multi-point inspection with photos sent directly to your phone.
                No surprises. No hidden fees. You approve every repair before we start.
              </p>
            </div>
            <Link
              href={`${BASE}/services`}
              className="shrink-0 inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] px-7 py-3 border border-white/20 whitespace-nowrap hover:border-white/60 transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              See All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ backgroundColor: RED }} className="py-14 px-6 text-center">
        <h2
          className="text-2xl text-white mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          Join 14,000+ Satisfied Customers.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ color: CHARCOAL, fontFamily: 'var(--font-display)' }}
        >
          Book Service <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
