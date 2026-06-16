import Link from 'next/link';
import { ArrowRight, Dumbbell, Users, Zap, Trophy, Check } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';
const GUNMETAL = '#1C1C1E';
const WHITE = '#FFFFFF';

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    tagline: '1-on-1 with a certified strength coach.',
    items: [
      { name: '1 Session', price: '$85' },
      { name: '5-Session Pack', price: '$395' },
      { name: '10-Session Pack', price: '$750' },
      { name: 'Monthly (3x/week)', price: '$899/mo' },
      { name: 'Online Coaching', price: '$149/mo' },
    ],
    desc: '1-on-1 sessions with a certified strength & conditioning coach. Custom programming, form coaching, and weekly progress tracking. Zero guesswork — every session has a purpose.',
    includes: [
      'Fitness assessment & goal setting',
      'Custom workout program',
      'Weekly check-ins',
      'Nutrition guidance',
      'Access to the full facility',
    ],
  },
  {
    icon: Users,
    title: 'Group Classes',
    tagline: '20+ classes per week. All levels welcome.',
    items: [
      { name: 'Drop-In Class', price: '$22' },
      { name: '10-Class Pack', price: '$180' },
      { name: 'Monthly Unlimited', price: '$129/mo' },
      { name: 'Class + Full Membership', price: '$159/mo' },
    ],
    desc: '20+ classes per week across HIIT, strength circuits, cardio burn, core, and mobility. Led by certified coaches who push you further than you would push yourself. All fitness levels welcome.',
    includes: [
      'HIIT & Strength Circuits',
      'Cardio Burn',
      'Core & Mobility',
      'Morning, noon & evening options',
      'Waitlist notifications via app',
    ],
  },
  {
    icon: Zap,
    title: 'Nutrition Coaching',
    tagline: 'Eat smarter. Perform better. Look different.',
    items: [
      { name: 'Single Consult', price: '$120' },
      { name: 'Monthly Package', price: '$199/mo' },
      { name: 'Add-On to Training', price: '$79/mo' },
    ],
    desc: 'Personalized macro targets, meal planning templates, supplement guidance, and weekly accountability check-ins with Tanya Reeves, Precision Nutrition certified coach. No meal plans you will quit in a week.',
    includes: [
      'Macro & calorie targets',
      'Sample meal plans',
      'Supplement recommendations',
      'Weekly accountability check-in',
      'Progress photo review',
    ],
  },
  {
    icon: Trophy,
    title: 'Competition Prep',
    tagline: 'Peak at the right time. Every time.',
    items: [
      { name: 'Powerlifting Prep (12-week)', price: '$699' },
      { name: 'Bodybuilding Prep (16-week)', price: '$899' },
      { name: 'Functional Fitness Prep', price: '$549' },
    ],
    desc: 'Structured periodization programs designed to peak at your competition date. Marcus has coached 200+ athletes to competition. Meet-day coaching available for all Iron Edge athletes.',
    includes: [
      'Periodized training blocks',
      'Practice meet simulation',
      'Weight class strategy',
      'Day-of coaching',
      'Deload & taper planning',
    ],
  },
];

const MEMBERSHIPS = [
  {
    name: 'Basic',
    price: '$49',
    period: '/mo',
    perks: [
      'Gym access 5am–11pm',
      'Locker room access',
      'Fitness assessment',
    ],
    highlight: false,
  },
  {
    name: 'Elite',
    price: '$89',
    period: '/mo',
    perks: [
      'Gym access 24/7',
      '2 guest passes/month',
      'Recovery room & sauna',
      'Group classes included',
    ],
    highlight: true,
  },
  {
    name: 'Performance',
    price: '$159',
    period: '/mo',
    perks: [
      'Everything in Elite',
      'Unlimited group classes',
      '1 PT session/month',
      'Nutrition check-in monthly',
      'Priority booking',
    ],
    highlight: false,
  },
];

export default function IronEdgeServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center" style={{ backgroundColor: BLACK }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em]"
              style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
            >
              Programs & Pricing
            </div>
            <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
          </div>
          <h1
            className="text-6xl md:text-8xl text-white uppercase leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            What We Offer<span style={{ color: ORANGE }}>.</span>
          </h1>
          <p
            className="max-w-xl mx-auto text-sm leading-relaxed"
            style={{ color: `${WHITE}45`, fontFamily: 'var(--font-body)' }}
          >
            Personal training, group classes, nutrition coaching, and competition prep. Your first 7 days are on us.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {PROGRAMS.map(({ icon: Icon, title, tagline, items, desc, includes }, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_1.5fr] overflow-hidden border-t-2"
              style={{ backgroundColor: BLACK, borderTopColor: ORANGE }}
            >
              {/* Left: title + pricing */}
              <div className="p-8 border-r border-white/5">
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="w-5 h-5 shrink-0" style={{ color: ORANGE }} strokeWidth={1.5} />
                  <h2
                    className="text-white uppercase"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.01em', fontSize: '1.5rem' }}
                  >
                    {title}
                  </h2>
                </div>
                <div
                  className="text-[10px] font-black uppercase tracking-widest mb-4"
                  style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
                >
                  {tagline}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: `${WHITE}45`, fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
                <div className="space-y-0">
                  {items.map((item, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0"
                    >
                      <span
                        className="text-sm"
                        style={{ color: `${WHITE}55`, fontFamily: 'var(--font-body)' }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="font-black text-sm"
                        style={{ color: ORANGE, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: includes */}
              <div className="p-8 flex flex-col justify-center">
                <div
                  className="text-[9px] font-black uppercase tracking-widest mb-5"
                  style={{ color: `${WHITE}25`, fontFamily: 'var(--font-body)' }}
                >
                  What's Included
                </div>
                <div className="space-y-3">
                  {includes.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: `${WHITE}55`, fontFamily: 'var(--font-body)' }}
                    >
                      <Check className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={`${BASE}/contact`}
                    className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px] px-6 py-3"
                    style={{ backgroundColor: ORANGE, color: BLACK, fontFamily: 'var(--font-body)' }}
                  >
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Memberships */}
      <section style={{ backgroundColor: BLACK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
              <div
                className="text-[10px] font-black uppercase tracking-[0.5em]"
                style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
              >
                Memberships
              </div>
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
            </div>
            <h2
              className="text-4xl md:text-5xl text-white uppercase leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Pick Your Plan<span style={{ color: ORANGE }}>.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {MEMBERSHIPS.map(({ name, price, period, perks, highlight }, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{
                  backgroundColor: GUNMETAL,
                  border: highlight ? `2px solid ${ORANGE}` : `1px solid ${WHITE}10`,
                }}
              >
                {highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[9px] font-black uppercase tracking-widest"
                    style={{ backgroundColor: ORANGE, color: BLACK, fontFamily: 'var(--font-body)' }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="font-black text-white uppercase text-xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.01em' }}
                >
                  {name}
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className="text-4xl font-black"
                    style={{ color: ORANGE, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >
                    {price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: `${WHITE}40`, fontFamily: 'var(--font-body)' }}
                  >
                    {period}
                  </span>
                </div>
                <div className="space-y-3 mb-8">
                  {perks.map((p, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: `${WHITE}55`, fontFamily: 'var(--font-body)' }}
                    >
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
                      {p}
                    </div>
                  ))}
                </div>
                <Link
                  href={`${BASE}/contact`}
                  className="block text-center py-3 font-black uppercase tracking-widest text-[10px] transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: highlight ? ORANGE : 'transparent',
                    color: highlight ? BLACK : ORANGE,
                    border: highlight ? 'none' : `1px solid ${ORANGE}`,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Choose {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ORANGE }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl uppercase mb-6 leading-none"
          style={{ color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
        >
          First 7 days free. No credit card.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[11px] px-12 py-4"
          style={{ backgroundColor: BLACK, color: WHITE, fontFamily: 'var(--font-body)' }}
        >
          Claim Free Trial <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
