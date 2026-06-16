import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';
const CREAM = '#FDF9F3';

const REVIEWS = [
  {
    author: 'Isabelle T.',
    rating: 5,
    service: 'Styling Session',
    date: 'April 2024',
    piece: 'The linen wrap midi from Apiece Apart',
    text: "Clara completely transformed how I think about my wardrobe. She helped me identify my style language, pulled pieces I never would have tried — including that linen wrap midi I now wear constantly — and everything fit beautifully. I left with a clear direction and zero overwhelm. Maison is unlike any boutique I have ever visited.",
  },
  {
    author: 'Grace M.',
    rating: 5,
    service: 'New Arrivals Shopping',
    date: 'March 2024',
    piece: 'The cashmere crewneck & silk slip dress',
    text: "I just moved to Nashville and wanted to find my go-to boutique. Found it. The curation is impeccable — every piece feels considered and intentional. I came in for something casual and walked out with a cashmere crewneck and a silk slip dress that I've been wearing together on repeat. The staff is warm, not pushy, and the whole experience felt like shopping with a knowledgeable friend.",
  },
  {
    author: 'Simone W.',
    rating: 5,
    service: 'Wardrobe Audit',
    date: 'February 2024',
    piece: 'French tuck tops & tailored trousers',
    text: "Did the wardrobe audit and it was one of the best things I have done for myself. Simone helped me clear out pieces that were not serving me and showed me how to French tuck tops I'd never bothered with. She built a clear picture of what I actually needed. My closet is smaller and better than it has ever been.",
  },
  {
    author: 'Cara B.',
    rating: 5,
    service: 'Gift Styling',
    date: 'January 2024',
    piece: 'Artisan earrings & a printed silk scarf',
    text: "Needed a birthday gift for my fashion-forward best friend with zero idea where to start. The team at Maison listened carefully and put together a perfect selection — artisan earrings and a printed silk scarf that felt completely her. She loved everything. The handwritten note and packaging were a beautiful touch. I will absolutely come back for every special occasion.",
  },
  {
    author: 'Danielle K.',
    rating: 5,
    service: 'Styling Session',
    date: 'November 2023',
    piece: 'The burgundy blazer I thought was "too much"',
    text: "I wore the same safe style for years out of uncertainty. Clara helped me step out of it. She put me in a burgundy blazer I immediately told her was too much, and then I looked in the mirror. She was perceptive, encouraging, and honest. Six months later I still reach for the pieces she picked — including that blazer — and feel like my best self every time.",
  },
  {
    author: 'Rachel H.',
    rating: 5,
    service: 'Sustainable Collection',
    date: 'September 2023',
    piece: 'Organic cotton button-down & tencel trousers',
    text: "The sustainable and locally made pieces here are genuinely beautiful. Not the stereotypical beige linen aesthetic — these are real clothes with real personality. I bought an organic cotton button-down and tencel trousers that I've styled a dozen different ways. I feel good about what I am buying and I look great in it. Monthly shopper now.",
  },
  {
    author: 'Natalie P.',
    rating: 5,
    service: 'Closet Edit',
    date: 'August 2023',
    piece: 'A complete capsule wardrobe in 3 hours',
    text: "I did the full closet edit with Simone and came out with an actual capsule wardrobe plan for the first time in my life. She identified a color palette I hadn't consciously noticed I gravitated toward, and built around it completely. Three hours felt like thirty minutes. My only regret is not doing it sooner.",
  },
  {
    author: 'Maya L.',
    rating: 5,
    service: 'Shopping',
    date: 'July 2023',
    piece: 'A floral midi dress for a garden wedding',
    text: "I came in completely lost trying to find something for a garden wedding — mid-July, outdoor, cocktail. Simone pulled five options and every single one was perfect in its own way. I chose a floral midi dress and received more compliments than I have at any event in recent memory. This is the only boutique that has ever felt truly personal.",
  },
];

export default function MaisonReviews() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: SAGE }}
          >
            Client Reviews
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
          >
            What Our Clients Are Saying
          </h1>
          <div className="flex items-center gap-3 mt-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: SAGE }} />
              ))}
            </div>
            <span
              className="text-sm"
              style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}60` }}
            >
              5.0 Stars · 140+ Google Reviews
            </span>
          </div>
        </div>
      </section>

      {/* Pull quote hero */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="text-[120px] leading-none mb-0 -mb-8"
            style={{ fontFamily: 'var(--font-display)', color: SAGE, opacity: 0.4, lineHeight: '1' }}
          >
            "
          </div>
          <blockquote
            className="text-3xl md:text-4xl leading-snug"
            style={{ fontFamily: 'var(--font-display)', color: SAND }}
          >
            Not the stereotypical beige linen aesthetic — these are real clothes with real personality.
          </blockquote>
          <cite
            className="block mt-8 text-[10px] font-bold uppercase tracking-[0.4em] not-italic"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,234,217,0.4)' }}
          >
            — Rachel H., Monthly Client
          </cite>
        </div>
      </section>

      {/* Review Grid */}
      <section style={{ backgroundColor: SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`p-8 flex flex-col ${i === 0 ? 'lg:col-span-2' : ''}`}
                style={{ backgroundColor: CREAM }}
              >
                {/* Large quotation mark */}
                <div
                  className="text-7xl leading-none -mb-3 -mt-2"
                  style={{ fontFamily: 'var(--font-display)', color: SAGE, opacity: 0.5 }}
                >
                  "
                </div>

                <p
                  className="text-sm leading-relaxed mb-6 flex-grow"
                  style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}85` }}
                >
                  {r.text}
                </p>

                {/* Piece highlight */}
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-5 px-3 py-2 self-start"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: SAGE,
                    border: `1px solid ${SAGE}40`,
                  }}
                >
                  Loved: {r.piece}
                </div>

                <div className="flex items-end justify-between border-t pt-5" style={{ borderColor: `${ESPRESSO}12` }}>
                  <div>
                    <div
                      className="font-bold text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: ESPRESSO }}
                    >
                      {r.author}
                    </div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}50` }}
                    >
                      {r.service}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SAGE }} />
                      ))}
                    </div>
                    <div
                      className="text-[10px]"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}35` }}
                    >
                      {r.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12 border-y border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { stat: '140+', label: 'Google Reviews' },
            { stat: '5.0', label: 'Average Rating' },
            { stat: '6+', label: 'Years of Service' },
            { stat: '98%', label: 'Would Recommend' },
          ].map(({ stat, label }, i) => (
            <div key={i}>
              <div
                className="text-5xl mb-2"
                style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
              >
                {stat}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}50` }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-20 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-display)', color: SAND }}
        >
          Experience the Maison difference.
        </h2>
        <p
          className="text-sm mb-10"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,234,217,0.5)' }}
        >
          Join hundreds of Nashville women who've found their style home.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4 hover:opacity-85 transition-opacity"
          style={{ fontFamily: 'var(--font-body)', backgroundColor: SAGE, color: '#fff' }}
        >
          Book a Styling Session <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
