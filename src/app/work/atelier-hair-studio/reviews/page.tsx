import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';
const WARM_WHITE = '#FAF7F4';
const PLUM = '#3D1F2C';

const REVIEWS = [
  {
    author: 'Chloe T.',
    rating: 5,
    service: 'Balayage',
    stylist: 'Maria',
    date: 'April 2024',
    text: 'Maria is an absolute artist. My balayage looks so natural and the color is exactly what I dreamed of. The salon is gorgeous and everyone there makes you feel so welcome. I will never go anywhere else.',
  },
  {
    author: 'Priya N.',
    rating: 5,
    service: 'Color + Cut',
    stylist: 'Priya S.',
    date: 'March 2024',
    text: 'I have been to at least a dozen salons in Austin and Atelier is in a completely different league. The attention to detail, the quality of products, and the level of care they put into every appointment is unmatched.',
  },
  {
    author: 'Emma W.',
    rating: 5,
    service: 'Bridal Hair',
    stylist: 'Jamie',
    date: 'February 2024',
    text: 'My wedding hair was absolutely perfect. Jamie did a trial the month before and nailed my vision, then executed it flawlessly on the day. The entire team was calm, professional, and I felt beautiful all day.',
  },
  {
    author: 'Rachel L.',
    rating: 5,
    service: 'Keratin Treatment',
    stylist: 'Maria',
    date: 'January 2024',
    text: 'The keratin treatment Maria did lasted four months. My hair has never been so smooth or easy to manage. Worth every penny and I plan to make this a seasonal thing.',
  },
  {
    author: 'Sofia M.',
    rating: 5,
    service: 'Highlights',
    stylist: 'Priya S.',
    date: 'November 2023',
    text: 'Priya understood my curly hair in a way no one else ever has. My highlights look incredible and my curl pattern is even better than before. Finally a salon that gets it.',
  },
  {
    author: 'Megan B.',
    rating: 5,
    service: 'Cut + Blowout',
    stylist: 'Maria',
    date: 'September 2023',
    text: 'I have been going to Atelier for two years. Every single visit is consistent and excellent. Maria remembers details about my hair from my last appointment. That level of care is rare.',
  },
];

export default function AtelierReviews() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: BLUSH }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12"
          style={{ backgroundColor: ROSE, opacity: 0.4 }}
        />
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6 px-5 py-2"
          style={{
            fontFamily: 'var(--font-body)',
            color: ROSE,
            border: `1px solid ${ROSE}`,
            opacity: 0.9,
          }}
        >
          Client Reviews
        </div>
        <h1
          className="text-5xl md:text-7xl mb-6 leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: CHARCOAL,
          }}
        >
          What Clients Are Saying
        </h1>
        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" style={{ color: ROSE }} />
          ))}
        </div>
        <p
          className="text-sm"
          style={{ fontFamily: 'var(--font-body)', color: PLUM, opacity: 0.55 }}
        >
          4.9 Stars · 200+ Google Reviews
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12"
          style={{ backgroundColor: ROSE, opacity: 0.4 }}
        />
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: WARM_WHITE }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Staggered masonry-style grid */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {[REVIEWS[0], REVIEWS[3]].map((r, i) => (
                <ReviewCard key={i} r={r} />
              ))}
            </div>

            {/* Column 2 — offset down */}
            <div className="flex flex-col gap-6 md:mt-12">
              {[REVIEWS[1], REVIEWS[4]].map((r, i) => (
                <ReviewCard key={i} r={r} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {[REVIEWS[2], REVIEWS[5]].map((r, i) => (
                <ReviewCard key={i} r={r} />
              ))}
            </div>

          </div>

          {/* Aggregate stat bar */}
          <div
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-8"
            style={{ backgroundColor: BLUSH }}
          >
            <div className="text-center">
              <div
                className="text-5xl mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: CHARCOAL,
                }}
              >
                4.9
              </div>
              <div
                className="text-[10px] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: ROSE }}
              >
                Average Rating
              </div>
            </div>
            <div className="w-px h-12 hidden md:block" style={{ backgroundColor: ROSE, opacity: 0.3 }} />
            <div className="text-center">
              <div
                className="text-5xl mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: CHARCOAL,
                }}
              >
                200+
              </div>
              <div
                className="text-[10px] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: ROSE }}
              >
                Google Reviews
              </div>
            </div>
            <div className="w-px h-12 hidden md:block" style={{ backgroundColor: ROSE, opacity: 0.3 }} />
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-current" style={{ color: ROSE }} />
                ))}
              </div>
              <div
                className="text-[10px] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: ROSE }}
              >
                5-Star Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: CHARCOAL }}
        className="relative py-20 px-6 text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]"
          aria-hidden
        >
          <span
            className="text-[12rem] leading-none text-white"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Atelier
          </span>
        </div>
        <div className="relative z-10">
          <h2
            className="text-3xl md:text-4xl text-white mb-8"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Ready to experience the Atelier difference?
          </h2>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[11px] px-12 py-5 transition-opacity hover:opacity-80"
            style={{ fontFamily: 'var(--font-body)', backgroundColor: ROSE }}
          >
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ReviewCard({ r }: { r: (typeof REVIEWS)[0] }) {
  return (
    <div className="bg-white p-8 relative group">
      {/* Giant decorative quote mark */}
      <div
        className="absolute top-4 right-6 text-8xl leading-none pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          color: BLUSH,
          lineHeight: 1,
        }}
        aria-hidden
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(r.rating)].map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ROSE }} />
        ))}
      </div>

      {/* Quote text */}
      <p
        className="text-sm leading-relaxed mb-6 relative z-10"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          color: PLUM,
          opacity: 0.85,
        }}
      >
        &ldquo;{r.text}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-8 h-px mb-4" style={{ backgroundColor: ROSE }} />

      {/* Author + meta */}
      <div className="flex items-end justify-between">
        <div>
          <div
            className="font-bold text-sm"
            style={{ fontFamily: 'var(--font-body)', color: CHARCOAL }}
          >
            {r.author}
          </div>
          <div
            className="text-[10px] uppercase tracking-widest mt-0.5"
            style={{ fontFamily: 'var(--font-body)', color: ROSE }}
          >
            {r.service} · {r.stylist}
          </div>
        </div>
        <div
          className="text-[10px]"
          style={{ fontFamily: 'var(--font-body)', color: CHARCOAL, opacity: 0.3 }}
        >
          {r.date}
        </div>
      </div>
    </div>
  );
}
