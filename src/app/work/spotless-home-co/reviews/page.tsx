import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WHITE = '#FFFFFF';

const REVIEWS = [
  {
    author: 'Jennifer M.',
    rating: 5,
    service: 'Recurring Clean',
    frequency: 'Bi-weekly',
    date: 'April 2024',
    text: 'Maria and David run an incredible operation. My house has never been cleaner. The same team comes every time, they remember how I like things done, and I have never had to ask for something twice. Used SPOTLESS15 on my first clean and the savings were real. Absolutely worth it.',
  },
  {
    author: 'Brian T.',
    rating: 5,
    service: 'Deep Clean',
    frequency: 'Move-Out',
    date: 'March 2024',
    text: 'We moved out of our rental and needed it spotless for inspection. Spotless Home did a deep clean and we got our full deposit back. The landlord said it was one of the cleanest move-outs she had seen. The team was punctual, professional, and thorough — the house smelled amazing.',
  },
  {
    author: 'Sandra K.',
    rating: 5,
    service: 'Airbnb Turnover',
    frequency: 'Weekly',
    date: 'February 2024',
    text: 'I have three short-term rentals and Spotless handles all of them. They arrive between checkouts without me having to coordinate anything, the photos always look great, and my review scores have gone up since I started with them. Highly professional operation.',
  },
  {
    author: 'Paul H.',
    rating: 5,
    service: 'Move-In Clean',
    frequency: 'One-time',
    date: 'January 2024',
    text: 'Bought a house that needed a deep clean before we moved in. Spotless did baseboards, inside cabinets, windows — everything. It felt like a brand new house when they were done. Punctual, professional, and thorough. The house smelled incredible.',
  },
  {
    author: 'Diana W.',
    rating: 5,
    service: 'Recurring Clean',
    frequency: 'Monthly',
    date: 'November 2023',
    text: 'I was nervous about having cleaners in my home. David made the process comfortable from the first consultation. They are bonded, reliable, and I feel completely at ease. My home has never looked this good. The eco-friendly option is a great touch too.',
  },
  {
    author: 'Carlos R.',
    rating: 5,
    service: 'Eco Clean',
    frequency: 'Bi-weekly',
    date: 'September 2023',
    text: 'Switched to the eco option because of my kids and pets. No drop in quality and everything smells clean without harsh chemical smells. They are consistent every time and the team is always friendly and on time. Would recommend to any family.',
  },
  {
    author: 'Rachel B.',
    rating: 5,
    service: 'Standard Cleaning',
    frequency: 'Weekly',
    date: 'August 2023',
    text: "Used the SPOTLESS15 promo on my first clean and it was an easy decision. The team was punctual — showed up exactly when promised — and worked through the whole house systematically. Every surface was spotless. I signed up for weekly service on the spot.",
  },
  {
    author: 'Tom A.',
    rating: 5,
    service: 'Deep Clean',
    frequency: 'One-time',
    date: 'July 2023',
    text: 'Hired Spotless for a deep clean before listing our home for sale. Our realtor actually commented on how clean and fresh the house smelled. Three offers the first weekend. I am crediting the deep clean for at least part of that result.',
  },
];

const STATS = [
  { value: '4.9★', label: 'Google Rating' },
  { value: '480+', label: 'Reviews' },
  { value: '2,800+', label: 'Homes Cleaned' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

export default function SpotlessReviews() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: FOREST }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >Customer Reviews</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >What Our Customers Say</h1>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" style={{ color: TEAL }} />
          ))}
        </div>
        <p
          className="text-white/50 text-sm"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >4.9 Stars · 480+ Google Reviews</p>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: TEAL }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }, i) => (
            <div key={i}>
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >{value}</div>
              <div
                className="text-[10px] uppercase tracking-widest text-white/70"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: SKY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 border-l-4"
              style={{ borderLeftColor: TEAL }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="text-sm mb-0.5"
                    style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >{r.author}</div>
                  <div
                    className="text-[10px] uppercase tracking-widest text-gray-400"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >{r.service} · {r.frequency}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />
                    ))}
                  </div>
                  <div
                    className="text-[10px] text-gray-300"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >{r.date}</div>
                </div>
              </div>
              <p
                className="text-gray-600 italic text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >Join 2,800+ happy homes in Denver.</h2>
        <p
          className="text-white/75 mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >Use code SPOTLESS15 for 15% off your first clean.</p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white uppercase tracking-widest text-[11px] px-10 py-4 hover:bg-gray-50 transition-colors"
          style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
