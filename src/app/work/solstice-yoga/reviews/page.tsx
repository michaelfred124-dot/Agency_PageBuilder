import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const CREAM = '#FDF8F3';
const MIST = '#E8F0E9';

const REVIEWS = [
  {
    author: 'Lena R.',
    rating: 5,
    class: 'Yin & Restorative',
    instructor: 'Elena',
    date: 'April 2024',
    text: "I came to Solstice during the hardest year of my life. Elena's Yin class became my anchor every week. She creates a space that is genuinely healing — not performative wellness, just real, grounded care. I am so grateful for this studio.",
  },
  {
    author: 'Marcus T.',
    rating: 5,
    class: 'Vinyasa Flow',
    instructor: 'Rahul',
    date: 'March 2024',
    text: "I was skeptical that yoga could challenge me athletically. Rahul's Vinyasa Flow changed my mind in one class. Technically deep, physically demanding, and he never makes it about ego. My mobility and recovery have improved dramatically.",
  },
  {
    author: 'Sophie H.',
    rating: 5,
    class: 'Beginners Series',
    instructor: 'Cora',
    date: 'February 2024',
    text: "Absolute beginner here. Cora made me feel completely welcome from day one. The Beginners Series gave me a real foundation and I now take three classes a week across different styles. This studio changed my relationship with my body.",
  },
  {
    author: 'David K.',
    rating: 5,
    class: 'Hatha Yoga',
    instructor: 'Solstice Team',
    date: 'January 2024',
    text: "Started with the intro month just to try something new. Eight months later I am here four times a week. The Hatha classes with Elena have given me strength and stillness I have never had before. Worth every penny.",
  },
  {
    author: 'Amara J.',
    rating: 5,
    class: 'Intro Month',
    instructor: 'Multiple',
    date: 'November 2023',
    text: "Tried the intro month on a whim and I have not left. The community here is unlike any gym or studio I have experienced. Inclusive, warm, knowledgeable teachers and classes that genuinely meet you where you are.",
  },
  {
    author: 'Claire B.',
    rating: 5,
    class: 'Meditation & Breathwork',
    instructor: 'Elena',
    date: 'September 2023',
    text: "Elena leads the meditation series with such gentleness and skill. I have tried apps, I have tried other classes — nothing compared. I sleep better, I am calmer at work, and I actually look forward to Monday mornings now.",
  },
  {
    author: 'James F.',
    rating: 5,
    class: 'Yin Yoga',
    instructor: 'Cora',
    date: 'August 2023',
    text: "Cora's Yin class is the only hour of the week where my brain actually goes quiet. She holds the room beautifully — no rushing, no performance, just deep, honest practice. I recommend Solstice to everyone I care about.",
  },
  {
    author: 'Nina W.',
    rating: 5,
    class: 'Vinyasa Flow',
    instructor: 'Rahul',
    date: 'July 2023',
    text: "I drive 25 minutes each way for Rahul's 6am Vinyasa class. The sequences are intelligent and creative, the music is perfect, and he adjusts for every body in the room. No other studio has come close.",
  },
];

const STATS = [
  { value: '5.0', label: 'Google Rating' },
  { value: '210+', label: 'Reviews' },
  { value: '4 Instructors', label: 'Expert Teachers' },
  { value: '8 Years', label: 'Denver Community' },
];

export default function SolsticeReviews() {
  return (
    <>
      {/* Page Header — CREAM, meditative */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
            style={{ color: SAGE, fontFamily: 'var(--font-display)' }}
          >
            Student Reviews
          </div>
          <h1
            className="text-5xl md:text-6xl mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: DARK,
            }}
          >
            Stories From
            <br />
            Our Community
          </h1>
          <div style={{ width: 60, height: 2, backgroundColor: SAGE }} className="mb-6" />
          <div className="flex gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: SAGE }} />
            ))}
          </div>
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            5.0 Stars · 210+ Google Reviews
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ backgroundColor: SAGE }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={i}
              className="py-5 px-8 text-center border-r border-white/20 last:border-r-0"
            >
              <div
                className="text-xl text-white mb-0.5"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                {value}
              </div>
              <div
                className="text-[9px] text-white/70 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <section style={{ backgroundColor: MIST }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="p-7"
              style={{
                backgroundColor: CREAM,
                borderLeft: `3px solid ${i % 2 === 0 ? SAGE : ROSE}`,
              }}
            >
              <Quote
                className="w-5 h-5 mb-3 opacity-20"
                style={{ color: DARK }}
              />

              {/* Review text — Philosopher italic */}
              <p
                className="text-gray-600 text-sm leading-relaxed mb-5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-end justify-between">
                <div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: DARK, fontFamily: 'var(--font-body)' }}
                  >
                    {r.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="text-[9px] uppercase tracking-widest font-bold"
                      style={{ color: SAGE, fontFamily: 'var(--font-display)' }}
                    >
                      {r.class}
                    </div>
                    <span style={{ color: ROSE, fontSize: 8 }}>·</span>
                    <div
                      className="text-[9px] uppercase tracking-widest"
                      style={{ color: ROSE, fontFamily: 'var(--font-display)' }}
                    >
                      with {r.instructor}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <div className="flex">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 fill-current"
                        style={{ color: SAGE }}
                      />
                    ))}
                  </div>
                  <div
                    className="text-[10px]"
                    style={{ color: '#9CA3AF', fontFamily: 'var(--font-body)' }}
                  >
                    {r.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community note */}
        <div className="max-w-5xl mx-auto mt-8">
          <div
            className="p-8 text-center"
            style={{ backgroundColor: CREAM }}
          >
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: ROSE, fontFamily: 'var(--font-display)' }}
            >
              A Note on Community
            </div>
            <p
              className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
              }}
            >
              &ldquo;We measure success not by the number of students we have, but by the depth of
              practice each person builds. Every instructor at Solstice is here because they
              genuinely believe yoga can change lives.&rdquo;
            </p>
            <p
              className="text-[11px] mt-3"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              — The Solstice Yoga Teaching Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2
          className="text-2xl text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          Your practice starts here.
        </h2>
        <p
          className="text-white/40 text-sm mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Intro month — unlimited classes for $49. No experience needed.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)', borderRadius: 100 }}
        >
          Start Intro Month <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
