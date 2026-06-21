import { Star, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const BASE = '/work/solene-boutique';

const reviews = [
  {
    name: 'Meredith L.',
    location: 'Portland, OR',
    product: 'Handthrown Ceramic Mug',
    rating: 5,
    text: "Finally a shop where everything has a story. Bought three gifts here and every recipient asked where I found them. The packaging alone felt like a gift.",
    date: 'March 2026',
  },
  {
    name: 'James P.',
    location: 'Seattle, WA',
    product: 'Walnut Serving Board',
    rating: 5,
    text: "The ceramics I ordered arrived better than pictured. Beautifully packaged, clearly made with care. This is what online shopping should feel like.",
    date: 'February 2026',
  },
  {
    name: 'Claire T.',
    location: 'San Francisco, CA',
    product: 'Linen Throw Blanket',
    rating: 5,
    text: "Refreshing to shop somewhere that isn't just curated aesthetics — these products genuinely last. My linen throw is better after a year of use.",
    date: 'January 2026',
  },
  {
    name: 'Ruth A.',
    location: 'Eugene, OR',
    product: 'Beeswax Taper Candles',
    rating: 5,
    text: "I've ordered four times now. The candles are unlike anything I've found elsewhere — long burn time, no drip, and they actually smell like beeswax.",
    date: 'March 2026',
  },
  {
    name: 'Daniel M.',
    location: 'Bend, OR',
    product: 'Cotton Market Bag',
    rating: 5,
    text: "Bought this as a gift for my partner. She uses it every single week. Well-made, holds a lot, and has only gotten better-looking with use.",
    date: 'February 2026',
  },
  {
    name: 'Priya K.',
    location: 'Vancouver, WA',
    product: 'Pressed Wildflower Print',
    rating: 5,
    text: "The print arrived in perfect condition with a handwritten note. It's been on my wall for six months and I get compliments constantly.",
    date: 'December 2025',
  },
  {
    name: 'Thomas B.',
    location: 'Ashland, OR',
    product: 'Letterpress Journal',
    rating: 5,
    text: "Thick, beautiful paper. The letterpress cover is subtle but stunning. I've filled two already and keep coming back.",
    date: 'January 2026',
  },
  {
    name: 'Alicia W.',
    location: 'Tacoma, WA',
    product: 'Seagrass Storage Basket',
    rating: 4,
    text: "Exactly as described. Sturdy, good-looking, and the weave is tight. Shipping was fast. Would love to see more size options.",
    date: 'March 2026',
  },
  {
    name: 'Noah G.',
    location: 'Portland, OR',
    product: 'Hand-poured Soy Candle',
    rating: 5,
    text: "I've tried a lot of candles. These are on a different level. Clean burn, true scent, and the jar is reusable. Subscribed to auto-ship.",
    date: 'February 2026',
  },
  {
    name: 'Camille F.',
    location: 'Salem, OR',
    product: 'Organic Cotton Napkins',
    rating: 5,
    text: "Replaced all our paper napkins with these. Softer than I expected, wash beautifully, and look great on the table. Zero regrets.",
    date: 'November 2025',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#9B9189] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Customer Reviews
          </p>
          <h1
            className="text-5xl md:text-7xl italic text-[#18181B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What our customers say
          </h1>
        </div>
      </section>

      {/* Aggregate stats */}
      <section className="py-16 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <p
                className="text-6xl italic text-[#18181B] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                4.9
              </p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#C9A84C" className="text-[#C9A84C]" />
                ))}
              </div>
              <p className="text-sm text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                Average Rating
              </p>
            </div>
            <div>
              <p
                className="text-6xl italic text-[#18181B] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                890
              </p>
              <p className="text-sm text-[#9B9189] mt-4" style={{ fontFamily: 'var(--font-body)' }}>
                Verified Reviews
              </p>
            </div>
            <div>
              <p
                className="text-6xl italic text-[#18181B] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                98%
              </p>
              <div className="flex justify-center mb-2">
                <ThumbsUp size={18} className="text-[#C9A84C]" />
              </div>
              <p className="text-sm text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                Would Recommend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-[#FDFAF6] p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-[#18181B]" style={{ fontFamily: 'var(--font-body)' }}>
                      {review.name}
                    </p>
                    <p className="text-xs text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                      {review.location}
                    </p>
                  </div>
                  <p className="text-xs text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                    {review.date}
                  </p>
                </div>
                <div className="flex gap-1 mb-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} fill="#C9A84C" className="text-[#C9A84C]" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#9B9189]" />
                  ))}
                </div>
                <p className="text-[10px] tracking-[0.1em] uppercase text-[#C9A84C] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  {review.product}
                </p>
                <p className="text-sm text-[#18181B] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-24 bg-[#18181B] text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Share Your Experience
          </p>
          <h2
            className="text-3xl md:text-4xl italic text-[#FDFAF6] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Shopped with us?
          </h2>
          <p className="text-sm text-[#9B9189] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            We&apos;d love to hear about your experience. Your review helps other customers find what they&apos;re looking for.
          </p>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#18181B] text-sm tracking-wide hover:bg-[#FDFAF6] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Leave a Review
          </Link>
        </div>
      </section>
    </>
  );
}
