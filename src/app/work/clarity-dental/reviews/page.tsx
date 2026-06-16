import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const SKY = '#0284C7';
const ICE = '#F0F9FF';
const WHITE = '#FFFFFF';

const REVIEWS = [
  {
    author: 'Karen S.',
    rating: 5,
    service: 'Invisalign',
    date: 'April 2024',
    text: "I was terrified of the dentist for 15 years. Dr. Patel is the first dentist who actually listened to my anxiety and adjusted everything accordingly. Invisalign went perfectly and I finally have the smile I always wanted.",
  },
  {
    author: 'Mike L.',
    rating: 5,
    service: 'Dental Implants',
    date: 'March 2024',
    text: "Two implants placed by Dr. Kim. The process was explained thoroughly at every stage, recovery was easy, and the results are indistinguishable from my natural teeth. Outstanding care throughout.",
  },
  {
    author: 'Rachel G.',
    rating: 5,
    service: 'Teeth Whitening',
    date: 'February 2024',
    text: "Professional whitening results in one visit. Sarah the hygienist is gentle and thorough, and Dr. Patel took the time to make sure I was comfortable. Everyone at Clarity is warm and professional.",
  },
  {
    author: 'Thomas H.',
    rating: 5,
    service: 'General Checkup',
    date: 'January 2024',
    text: "Been coming to Clarity for three years as a family. All four of us feel comfortable here. The kids actually look forward to their appointments. Scheduling is easy and they always run on time.",
  },
  {
    author: 'Priya M.',
    rating: 5,
    service: 'Crown',
    date: 'November 2023',
    text: "Needed a crown after a cracked molar. Dr. Kim got me in same-day, managed my pain immediately, and the permanent crown was ready in less time than expected. No surprise billing — exactly what they quoted.",
  },
  {
    author: 'Janet R.',
    rating: 5,
    service: 'Cleaning',
    date: 'September 2023',
    text: "Sarah RDH is the most thorough and gentlest hygienist I have ever had. She caught an early cavity that I did not even know about. My teeth feel incredible after every visit.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" style={{ color: SKY }} />
      ))}
    </div>
  );
}

export default function ClarityReviews() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: NAVY }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: SKY }} />
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6 px-5 py-2"
          style={{
            fontFamily: 'var(--font-body)',
            color: SKY,
            border: `1px solid ${SKY}`,
            opacity: 0.85,
          }}
        >
          Patient Reviews
        </div>
        <h1
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          What Our Patients Say
        </h1>
        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" style={{ color: SKY }} />
          ))}
        </div>
        <p
          className="text-sm"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
        >
          4.9 Stars · 480+ Google Reviews
        </p>
      </section>

      {/* Aggregate Stats */}
      <section style={{ backgroundColor: SKY }} className="py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center">
            <div
              className="text-5xl text-white mb-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              4.9
            </div>
            <div
              className="text-[10px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Average Rating
            </div>
          </div>
          <div className="w-px h-12 hidden md:block" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
          <div className="text-center">
            <div
              className="text-5xl text-white mb-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              480+
            </div>
            <div
              className="text-[10px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Google Reviews
            </div>
          </div>
          <div className="w-px h-12 hidden md:block" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
          <div className="text-center">
            <div
              className="text-5xl text-white mb-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              60%
            </div>
            <div
              className="text-[10px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Referral Rate
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ backgroundColor: ICE }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{
                backgroundColor: NAVY,
                borderTop: `4px solid ${SKY}`,
              }}
            >
              {/* Card top */}
              <div className="px-7 pt-8 pb-6 flex-1">
                {/* Stars */}
                <StarRating count={r.rating} />

                {/* Quote */}
                <p
                  className="mt-5 text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              {/* Card footer */}
              <div
                className="px-7 py-5 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div>
                  <div
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {r.author}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-widest mt-0.5"
                    style={{ fontFamily: 'var(--font-body)', color: SKY }}
                  >
                    {r.service}
                  </div>
                </div>
                <div
                  className="text-[10px]"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.25)' }}
                >
                  {r.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="max-w-6xl mx-auto mt-10 text-center">
          <p
            className="text-sm"
            style={{ fontFamily: 'var(--font-body)', color: '#6B7280' }}
          >
            Read all 480+ reviews on{' '}
            <span className="font-bold" style={{ color: SKY }}>
              Google
            </span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: NAVY }}
        className="py-20 px-6 text-center"
      >
        <h2
          className="text-3xl md:text-4xl text-white mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Ready to experience dental care you will actually enjoy?
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] px-12 py-5 text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-body)', backgroundColor: SKY }}
        >
          Book Appointment
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
