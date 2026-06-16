import Link from 'next/link';
import { ArrowRight, ShowerHead, Scissors, Heart, Zap, Check, Star } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WARM = '#FEF3C7';
const WHITE = '#FFFFFF';

const SERVICES = [
  {
    icon: ShowerHead,
    title: 'Bath & Brush',
    emoji: '🛁',
    desc: 'Perfect for dogs who need freshening up between full grooms. We use gentle, all-natural shampoos and take the time to properly brush out every coat type.',
    items: [
      { name: 'XS — under 10 lbs', price: '$38' },
      { name: 'Small — 10–20 lbs', price: '$45' },
      { name: 'Medium — 20–50 lbs', price: '$65' },
      { name: 'Large — 50–80 lbs', price: '$85' },
      { name: 'XL — 80+ lbs', price: '$105+' },
    ],
    includes: [
      'Gentle all-natural shampoo & rinse',
      'Hand dry or low-heat air dry (no cage)',
      'Thorough brush out',
      'Ear cleaning',
      'Spritz of natural deodorant',
    ],
  },
  {
    icon: Scissors,
    title: 'Full Groom',
    emoji: '✂️',
    desc: 'A complete grooming experience from snout to tail with breed-appropriate styling. Our most popular service — your dog comes home looking and smelling incredible.',
    items: [
      { name: 'XS — under 10 lbs', price: '$58' },
      { name: 'Small — 10–20 lbs', price: '$70' },
      { name: 'Medium — 20–50 lbs', price: '$95' },
      { name: 'Large — 50–80 lbs', price: '$120' },
      { name: 'XL — 80+ lbs', price: '$145+' },
    ],
    includes: [
      'Everything in Bath & Brush',
      'Breed-specific haircut & styling',
      'Nail trim & filing (smooth edges)',
      'Bandana or bow of choice',
      'Teeth brushing add-on available',
      'Photo text when ready',
    ],
  },
  {
    icon: Heart,
    title: 'Spa Add-Ons',
    emoji: '💆',
    desc: 'Treat your dog to a little extra luxury. All add-ons use natural, non-toxic products and can be added to any bath or groom service.',
    items: [
      { name: 'Paw Balm Treatment', price: '$12' },
      { name: 'Blueberry Facial', price: '$15' },
      { name: 'Teeth Brushing', price: '$10' },
      { name: 'Nail Polish', price: '$10' },
      { name: 'De-Shed Treatment', price: '$20+' },
      { name: 'Aromatherapy Rinse', price: '$12' },
    ],
    includes: [
      'Combinable with any service',
      'Calming essential oil options available',
      'Natural, non-toxic products only',
      'Great for anxious dogs',
    ],
  },
  {
    icon: Zap,
    title: 'Express Services',
    emoji: '⚡',
    desc: 'Quick, focused services available while you wait. No full appointment needed — just call ahead so we can get your pup in and out comfortably.',
    items: [
      { name: 'Nail Trim', price: '$18' },
      { name: 'Nail Grind (Dremel)', price: '$22' },
      { name: 'Ear Cleaning', price: '$15' },
      { name: 'Anal Gland Expression', price: '$18' },
      { name: 'Quick Brush-Out', price: '$20+' },
    ],
    includes: [
      'No appointment for nail trims (call ahead)',
      'Anxiety-sensitive, gentle handling',
      'Takes 15–30 minutes',
      'Perfect between full grooms',
    ],
  },
];

const POLICIES = [
  'Pricing is a starting estimate; final cost may vary based on coat condition, matting, or temperament.',
  'All dogs must be current on rabies and DHPP vaccinations (proof required at first visit).',
  'We do not cage dry. All dogs are air dried or hand dried with low-heat dryers.',
  'Anxious or elderly dogs are always welcome — we go at their pace.',
  '24-hour cancellation required. Late cancellations may be charged 50% of service.',
];

const FEAR_FREE_POINTS = [
  'We never restrain excessively or use force',
  'High-value treats used throughout (bring your dog\'s favorites!)',
  'Calming music and aromatherapy in the studio',
  'We take breaks whenever your dog needs one',
  'Dogs who need it get "happy visits" before their first groom',
];

export default function PawsAndPamperServices() {
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
            <Scissors className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Services & Pricing
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Grooming Menu
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed text-base">
            Fear-free certified grooming for dogs of all breeds and sizes. All-natural products. No cage drying.
            Every dog treated like the VIP they are.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, emoji, desc, items, includes }, i) => (
            <div
              key={i}
              style={{ backgroundColor: WHITE }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: WHITE, border: `2px solid ${TEAL}22` }}
            >
              {/* Card Header */}
              <div
                className="px-8 pt-7 pb-5 flex items-center gap-3"
                style={{ backgroundColor: SKY }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: TEAL }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h2
                    className="text-lg leading-tight"
                    style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    {title}
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
              </div>

              <div className="px-8 py-6">
                {/* Pricing by size */}
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: TEAL, fontFamily: 'var(--font-display)' }}
                >
                  Pricing by Size
                </div>
                <div className="space-y-1 mb-6">
                  {items.map((item, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                      style={{ borderColor: `${TEAL}15` }}
                    >
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span
                        className="font-bold text-sm"
                        style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* What's included */}
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
                >
                  What's Included
                </div>
                <div className="space-y-2">
                  {includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: TEAL }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fear-Free Philosophy Sidebar Section */}
        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-[2fr_1fr] gap-6">
          {/* Policies */}
          <div style={{ backgroundColor: WHITE }} className="p-8 rounded-2xl">
            <h3
              className="text-base mb-5"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Policies & Notes
            </h3>
            <div className="space-y-3">
              {POLICIES.map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-500">
                  <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: TEAL }} />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Fear-Free Sidebar */}
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: WARM }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4" style={{ color: TEAL }} />
              <h3
                className="text-sm"
                style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Our Fear-Free Promise
              </h3>
            </div>
            <div className="space-y-3">
              {FEAR_FREE_POINTS.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                  <Heart className="w-3 h-3 shrink-0 mt-0.5" style={{ color: TEAL }} strokeWidth={2} />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Book your dog's next spa day.
        </h2>
        <p className="text-white/70 mb-10 max-w-md mx-auto">
          New clients welcome. Anxious dogs always accommodated. We love all breeds!
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full"
          style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
        >
          Book Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
