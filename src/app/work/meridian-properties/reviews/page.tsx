import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';
const WHITE = '#FFFFFF';

const REVIEWS = [
  {
    author: 'Chris & Amy P.',
    rating: 5,
    type: 'Buyer',
    neighborhood: 'Sellwood-Moreland',
    agent: 'Sarah Chen',
    date: 'March 2024',
    outcome: 'Closed under asking in competitive market',
    text: 'Sarah guided us through our first home purchase without any pressure. She knew the market inside and out, helped us understand every step, and fought hard on our offer. We closed under asking in a competitive neighborhood. Could not have done it without her.',
  },
  {
    author: 'Robert L.',
    rating: 5,
    type: 'Seller',
    neighborhood: 'NW Portland',
    agent: 'Tom Reeves',
    date: 'January 2024',
    outcome: 'Sold in 6 days · $22k over asking',
    text: 'Sold our home in 6 days at $22,000 over asking. Tom had a strategy from day one — professional photos, targeted marketing, and a well-timed open house. The results speak for themselves.',
  },
  {
    author: 'Diane M.',
    rating: 5,
    type: 'Investment',
    neighborhood: 'Alberta Arts District',
    agent: 'Sarah Chen',
    date: 'November 2023',
    outcome: 'Acquired 3rd investment property below market',
    text: 'Sarah helped me acquire my third investment property. Her knowledge of rental yield and neighborhood trends saved me from one deal and found me a better one. Exceptional expertise.',
  },
  {
    author: 'Kevin T.',
    rating: 5,
    type: 'Buyer',
    neighborhood: 'Lake Oswego',
    agent: 'Tom Reeves',
    date: 'September 2023',
    outcome: 'Found perfect home in 3 weeks — remotely',
    text: 'Moved from San Francisco to Portland and Tom made the remote buying process seamless. Video tours, detailed neighborhood breakdowns, and he always answered within the hour. Found our perfect home in three weeks.',
  },
  {
    author: 'Sandra & Mike R.',
    rating: 5,
    type: 'Seller',
    neighborhood: 'Beaverton',
    agent: 'Sarah Chen',
    date: 'July 2023',
    outcome: 'Multiple offers · accepted above asking',
    text: 'We had a tricky property with some deferred maintenance. Sarah priced it right, marketed the strengths, and managed the negotiations with multiple offers beautifully. We walked away thrilled.',
  },
  {
    author: 'Pat H.',
    rating: 5,
    type: 'Property Mgmt',
    neighborhood: 'Pearl District',
    agent: 'Aisha Johnson',
    date: 'May 2023',
    outcome: 'Zero vacancy over 2 years',
    text: "Aisha has managed our rental duplex for two years. Zero vacancy, responsive tenants, and I never have to worry. The rent arrives on time every month and maintenance issues are handled before I even know about them.",
  },
];

const SUMMARY = [
  { value: '4.9★', label: 'Average Rating' },
  { value: '240+', label: 'Google Reviews' },
  { value: '98%', label: 'Would Recommend' },
  { value: '13 yrs', label: 'Serving Portland' },
];

export default function MeridianReviews() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: SLATE }} className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: FOREST }} />
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
          >
            Client Reviews
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Client<br />Testimonials
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: FOREST }} />
              ))}
            </div>
            <span className="text-white/40 text-sm">4.9 Stars · 240+ Google Reviews</span>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section style={{ backgroundColor: FOREST }} className="py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {SUMMARY.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                {s.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              style={{ backgroundColor: WHITE, borderLeft: `4px solid ${FOREST}` }}
              className="p-8"
            >
              {/* Outcome badge */}
              <div
                className="inline-block text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 mb-5"
                style={{ backgroundColor: FOREST, color: WHITE, fontFamily: 'var(--font-display)' }}
              >
                {r.outcome}
              </div>

              {/* Quote */}
              <Quote className="w-5 h-5 mb-3 opacity-20" style={{ color: SLATE }} />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{r.text}"
              </p>

              {/* Footer */}
              <div className="flex items-start justify-between pt-5 border-t border-gray-100">
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    {r.author}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    <span
                      className="font-bold uppercase tracking-wider"
                      style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
                    >
                      {r.type}
                    </span>
                    {' · '}{r.neighborhood}
                  </div>
                  <div className="text-[10px] text-gray-300 mt-0.5">
                    via {r.agent} · {r.date}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: FOREST }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Ready to work with Portland's trusted team?
        </h2>
        <p className="text-white/60 mb-10 max-w-md mx-auto">
          Join hundreds of Portland families who have trusted Meridian with their most important financial decision.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
        >
          Schedule Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
