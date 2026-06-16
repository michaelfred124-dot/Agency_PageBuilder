import Link from 'next/link';
import { ArrowRight, Sun, Wind, Leaf, Heart, Sparkles, Users, Check } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const CREAM = '#FDF8F3';
const MIST = '#E8F0E9';

const CLASSES = [
  {
    icon: Sun,
    title: 'Hatha Yoga',
    level: 'All Levels',
    color: SAGE,
    desc: 'The foundation of all yoga. We explore classical postures with emphasis on breath, alignment, and stillness. Perfect for all levels including complete beginners — a grounded, unhurried practice.',
    schedule: ['Mon 8am & 6pm', 'Wed 9am & 7pm', 'Fri 8am', 'Sun 9am'],
    benefit: 'Builds strength, flexibility, and body awareness.',
  },
  {
    icon: Wind,
    title: 'Vinyasa Flow',
    level: 'Beginner Friendly',
    color: ROSE,
    desc: 'Dynamic sequences linking breath and movement. Classes build heat, strength, and flexibility while maintaining an accessible, welcoming pace. Every instructor offers modifications throughout.',
    schedule: ['Tue 6am, 12pm & 7pm', 'Thu 7pm', 'Sat 8am & 10am'],
    benefit: 'Improves cardiovascular health and mental clarity.',
  },
  {
    icon: Leaf,
    title: 'Yin & Restorative',
    level: 'All Levels',
    color: SAGE,
    desc: 'Deep, passive stretching targeting connective tissue and fascia. Poses are held 3–5 minutes for a profound physical and nervous system reset. Bolsters, blankets, and blocks provided.',
    schedule: ['Mon 7:30pm', 'Wed 7:30pm', 'Fri 6:30pm', 'Sun 4–5pm'],
    benefit: 'Deep tissue release and nervous system healing.',
  },
  {
    icon: Heart,
    title: 'Meditation & Breathwork',
    level: 'All Levels',
    color: ROSE,
    desc: 'Guided meditation, pranayama, and seated mindfulness practices. Begin, deepen, or refresh your meditation journey in a warm, supportive group setting. No prior experience required.',
    schedule: ['Mon & Wed 7am (20 min)', 'Sat 7am (45 min)', 'Monthly Sound Healing events'],
    benefit: 'Reduces stress, improves sleep, sharpens focus.',
  },
];

const PRICING = [
  {
    name: 'Intro Month',
    price: '$49',
    period: 'first month',
    note: 'New students only — unlimited classes',
    highlight: true,
    badge: 'Best for New Students',
  },
  {
    name: 'Monthly Unlimited',
    price: '$119',
    period: 'per month',
    note: 'All classes, all instructors. Pause anytime.',
    highlight: false,
  },
  {
    name: '3x/Week Membership',
    price: '$149',
    period: 'per month',
    note: 'Up to 3 classes per week — perfect for building a regular practice.',
    highlight: false,
  },
  {
    name: '10-Class Pack',
    price: '$175',
    period: 'no expiration',
    note: 'Use at your own pace — great for irregular schedules.',
    highlight: false,
  },
  {
    name: '5-Class Pack',
    price: '$95',
    period: 'no expiration',
    note: 'Try different classes and instructors.',
    highlight: false,
  },
  {
    name: 'Annual Membership',
    price: '$899',
    period: 'per year',
    note: 'Unlimited classes — save $529 vs monthly.',
    highlight: false,
  },
  {
    name: 'Single Drop-In',
    price: '$22',
    period: 'per class',
    note: 'Any class, any instructor.',
    highlight: false,
  },
  {
    name: 'Student & Senior',
    price: '$15',
    period: 'per drop-in',
    note: 'Valid ID required. Memberships discounted 15%.',
    highlight: false,
  },
];

const BEGINNERS = [
  'Saturdays 11am – 12:30pm',
  '4-week commitment (new series every month)',
  'Limited to 12 students',
  'Includes foundational postures, alignment, and yoga philosophy',
  '$89 for the full series — best way to start',
];

export default function SolsticeServices() {
  return (
    <>
      {/* Page Header — CREAM, calm, spacious */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
            style={{ color: SAGE, fontFamily: 'var(--font-display)' }}
          >
            Schedule &amp; Pricing
          </div>
          <h1
            className="text-5xl md:text-6xl mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: DARK,
            }}
          >
            Classes &amp; Offerings
          </h1>
          <div style={{ width: 60, height: 2, backgroundColor: SAGE }} className="mb-6" />
          <p
            className="text-gray-500 max-w-xl text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            30+ classes per week across four modalities. Drop-in friendly. All levels welcome.
            Every class offers modifications so you can practice exactly where you are today.
          </p>
        </div>
      </section>

      {/* Class Cards */}
      <section style={{ backgroundColor: MIST }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Class Types
            </h2>
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Each style offers something distinct — explore them all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CLASSES.map(({ icon: Icon, title, level, color, desc, schedule, benefit }, i) => (
              <div
                key={i}
                className="p-8"
                style={{ backgroundColor: CREAM, borderTop: `3px solid ${color}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 shrink-0" style={{ color }} strokeWidth={1.5} />
                    <h3
                      className="text-base"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        color: DARK,
                      }}
                    >
                      {title}
                    </h3>
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest border px-2 py-1 shrink-0"
                    style={{ color, borderColor: color, fontFamily: 'var(--font-body)' }}
                  >
                    {level}
                  </span>
                </div>

                <p
                  className="text-sm text-gray-500 leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>

                {/* Benefit pill */}
                <div
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 mb-5 rounded-full"
                  style={{ backgroundColor: MIST, color: DARK, fontFamily: 'var(--font-body)' }}
                >
                  <Sparkles className="w-3 h-3" style={{ color }} />
                  {benefit}
                </div>

                {/* Schedule */}
                <div
                  className="border-t pt-4 space-y-1.5"
                  style={{ borderColor: 'rgba(44,32,24,0.1)' }}
                >
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: SAGE, fontFamily: 'var(--font-display)' }}
                  >
                    Weekly Schedule
                  </div>
                  {schedule.map((s, j) => (
                    <div
                      key={j}
                      className="text-xs text-gray-500 flex items-center gap-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: ROSE }}
                      />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginners Series */}
      <section style={{ backgroundColor: CREAM }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: ROSE, fontFamily: 'var(--font-display)' }}
            >
              New to Yoga?
            </div>
            <h2
              className="text-3xl mb-5"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Beginners Series
            </h2>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our 4-week Beginners Series is the ideal starting point. In small, intimate groups
              of 12 students, you will learn foundational postures, alignment cues, and basic
              yoga philosophy in a completely judgement-free environment.
            </p>
            <div className="space-y-2.5">
              {BEGINNERS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            className="p-10 text-center"
            style={{ backgroundColor: MIST, borderRadius: 2 }}
          >
            <Users className="w-8 h-8 mx-auto mb-4" style={{ color: SAGE }} strokeWidth={1.5} />
            <div
              className="text-5xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              $89
            </div>
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{ color: SAGE, fontFamily: 'var(--font-display)' }}
            >
              4-Week Series
            </div>
            <p
              className="text-xs text-gray-500 mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              New series starts the first week of every month. Spots fill quickly — reserve early.
            </p>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-6 py-3"
              style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)', borderRadius: 100 }}
            >
              Reserve a Spot <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ backgroundColor: MIST }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Membership &amp; Pricing
            </h2>
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Flexible options for every schedule and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PRICING.map(({ name, price, period, note, highlight, badge }, i) => (
              <div
                key={i}
                className="p-6 text-center"
                style={{
                  backgroundColor: highlight ? DARK : CREAM,
                  border: highlight ? `2px solid ${ROSE}` : '2px solid transparent',
                }}
              >
                {badge && (
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-3"
                    style={{ color: ROSE, fontFamily: 'var(--font-display)' }}
                  >
                    {badge}
                  </div>
                )}
                <div
                  className="text-sm mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: highlight ? '#FFFFFF' : DARK,
                  }}
                >
                  {name}
                </div>
                <div
                  className="text-3xl mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: highlight ? ROSE : SAGE,
                  }}
                >
                  {price}
                </div>
                <div
                  className="text-[9px] uppercase tracking-widest mb-3"
                  style={{
                    color: highlight ? 'rgba(255,255,255,0.5)' : '#9CA3AF',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {period}
                </div>
                <div
                  className="text-[11px] leading-relaxed"
                  style={{
                    color: highlight ? 'rgba(255,255,255,0.6)' : '#6B7280',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2
          className="text-2xl text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          First month unlimited — just $49 for new students.
        </h2>
        <p
          className="text-white/40 text-sm mb-7"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          No experience needed. Every class meets you where you are.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)', borderRadius: 100 }}
        >
          Claim Intro Offer <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
