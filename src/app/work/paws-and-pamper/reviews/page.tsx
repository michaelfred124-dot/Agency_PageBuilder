import Link from 'next/link';
import { ArrowRight, Star, Heart } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WARM = '#FEF3C7';
const WHITE = '#FFFFFF';

const REVIEWS = [
  {
    title: "Biscuit loved it!",
    author: 'Jen M.',
    dog: 'Biscuit',
    rating: 5,
    service: 'Full Groom',
    date: 'April 2024',
    badge: 'Anxious Dog',
    text: 'Biscuit has anxiety and used to tremble at the groomer. Casey is so patient and gentle with him. He came home calm, fluffy, and smelling amazing. This is the only place we will ever go.',
  },
  {
    title: "Noodle's best bath ever",
    author: 'Kyle T.',
    dog: 'Noodle',
    rating: 5,
    service: 'Bath & Brush',
    date: 'March 2024',
    badge: 'Large Dog',
    text: 'Noodle is a giant, squirmy golden retriever who is not an easy dog to groom. The team at Paws & Pamper handled her beautifully. No mats, no stress, and she looked incredible.',
  },
  {
    title: "Pepper's coat has never been softer",
    author: 'Lisa H.',
    dog: 'Pepper',
    rating: 5,
    service: 'Spa Add-Ons',
    date: 'February 2024',
    badge: 'Spa Treatment',
    text: 'Got the blueberry facial and conditioning mask for my poodle. I was skeptical but her coat has never been softer. Casey truly knows what she is doing and treats every dog like a VIP.',
  },
  {
    title: "Duke's first groom — a total success",
    author: 'Sam W.',
    dog: 'Duke',
    rating: 5,
    service: 'Full Groom',
    date: 'January 2024',
    badge: 'Reactive Dog',
    text: 'Duke is a 90-pound German Shepherd mix who can be reactive. I was upfront about it and they accommodated him without any judgment. The private suite setup made all the difference. Amazing service.',
  },
  {
    title: "Coco came out looking show-ring ready!",
    author: 'Tina B.',
    dog: 'Coco',
    rating: 5,
    service: 'Express Groom',
    date: 'December 2023',
    badge: 'Last-Minute Booking',
    text: 'Needed Coco groomed before the holidays on short notice. They fit us in the next morning. Fast, professional, and my maltipoo looked like she walked out of a show ring.',
  },
  {
    title: "Ziggy is a monthly regular now!",
    author: 'Rob A.',
    dog: 'Ziggy',
    rating: 5,
    service: 'Bath & Brush',
    date: 'October 2023',
    badge: 'Monthly Client',
    text: 'Monthly customer for over a year. Consistent, thorough, and they always remember Ziggy\'s preferences. The text updates and photos while he is there are a lovely touch.',
  },
];

const SUMMARY = [
  { value: '5.0★', label: 'Average Rating' },
  { value: '190+', label: 'Google Reviews' },
  { value: '100%', label: 'Would Return' },
  { value: '6 yrs', label: 'Serving Seattle' },
];

export default function PawsReviews() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${FOREST} 0%, ${TEAL} 100%)` }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Star className="w-3.5 h-3.5 text-white fill-white" />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Client Reviews
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Happy Pups,<br />Happy Families
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
            <span className="text-white/60 text-sm">5.0 Stars · 190+ Google Reviews</span>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section style={{ backgroundColor: TEAL }} className="py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {SUMMARY.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                {s.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              style={{ backgroundColor: WHITE }}
              className="p-8 rounded-2xl relative overflow-hidden"
            >
              {/* Teal left border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ backgroundColor: TEAL }}
              />

              {/* Badge */}
              <div
                className="inline-block text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: WARM, color: FOREST, fontFamily: 'var(--font-display)' }}
              >
                {r.badge}
              </div>

              {/* Review title */}
              <h3
                className="text-base mb-3 leading-snug"
                style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                {r.title}
              </h3>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                "{r.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    {r.author}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    <span style={{ color: TEAL }}>{r.dog}</span>'s parent · {r.service}
                  </div>
                </div>
                <div className="text-[10px] text-gray-300">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google review nudge */}
        <div className="max-w-5xl mx-auto mt-8">
          <div
            className="p-8 rounded-2xl text-center"
            style={{ backgroundColor: WARM }}
          >
            <Heart className="w-6 h-6 mx-auto mb-3" style={{ color: TEAL }} strokeWidth={1.5} />
            <p
              className="text-sm font-bold mb-1"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Had a great experience?
            </p>
            <p className="text-xs text-gray-500">
              We would love to hear about it! Leave us a review on Google — it means the world to our small business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Give your pup the pampering they deserve.
        </h2>
        <p className="text-white/60 mb-10 max-w-md mx-auto">
          Join hundreds of Seattle families who trust Paws & Pamper with their most beloved family members.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full"
          style={{ backgroundColor: TEAL, fontFamily: 'var(--font-display)' }}
        >
          Book a Groom <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
