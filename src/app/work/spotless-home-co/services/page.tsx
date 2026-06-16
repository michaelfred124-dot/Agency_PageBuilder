import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Clock, Leaf, Home, Check } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WHITE = '#FFFFFF';

const SERVICES = [
  {
    icon: Home,
    tier: 'Standard',
    title: 'Standard Cleaning',
    subtitle: 'Recurring maintenance service',
    startingAt: '$130+',
    items: [
      { name: '1 Bedroom / 1 Bath', price: '$130' },
      { name: '2 Bedroom / 1–2 Bath', price: '$160' },
      { name: '3 Bedroom / 2 Bath', price: '$190' },
      { name: '4 Bedroom / 2–3 Bath', price: '$220' },
      { name: '5+ Bedroom (custom quote)', price: 'Call us' },
    ],
    includes: [
      'Kitchen surfaces & sink',
      'All bathrooms sanitized',
      'Dusting & vacuuming throughout',
      'Mopping all hard floors',
      'Trash removal',
      'Making beds (linens provided)',
    ],
    note: 'Weekly clients save 15%. Bi-weekly save 10%.',
    highlight: false,
  },
  {
    icon: Shield,
    tier: 'Deep',
    title: 'Deep Cleaning',
    subtitle: 'Thorough top-to-bottom service',
    startingAt: '$250+',
    items: [
      { name: '1 Bedroom / 1 Bath', price: '$250' },
      { name: '2 Bedroom / 1–2 Bath', price: '$300' },
      { name: '3 Bedroom / 2 Bath', price: '$350' },
      { name: '4 Bedroom / 2–3 Bath', price: '$400' },
    ],
    includes: [
      'Everything in Standard Cleaning',
      'Inside oven & refrigerator',
      'Baseboards & window sills',
      'Light fixtures & ceiling fans',
      'Cabinet fronts & door frames',
      'Grout scrubbing in bathrooms',
    ],
    note: 'First-time clients receive deep cleaning before switching to standard recurring.',
    highlight: true,
  },
  {
    icon: Clock,
    tier: 'Move',
    title: 'Move-In / Move-Out Cleaning',
    subtitle: 'Landlord-approved checklist',
    startingAt: '$300+',
    items: [
      { name: '1 Bed / 1 Bath', price: '$300' },
      { name: '2 Bed / 1–2 Bath', price: '$360' },
      { name: '3 Bed / 2 Bath', price: '$420' },
      { name: '4+ Bed / 3 Bath', price: '$480+' },
    ],
    includes: [
      'Inside all appliances',
      'Inside all cabinets & drawers',
      'Full bathroom sanitization',
      'Window tracks cleaned',
      'All walls spot-cleaned',
      'Garage sweep (if requested)',
    ],
    note: 'Same-week availability for most move-out jobs.',
    highlight: false,
  },
  {
    icon: Sparkles,
    tier: 'Airbnb',
    title: 'Airbnb & Short-Term Rental',
    subtitle: 'Fast turnovers between guests',
    startingAt: '$100+',
    items: [
      { name: 'Studio / 1 Bed', price: '$100' },
      { name: '2 Bedroom', price: '$140' },
      { name: '3 Bedroom', price: '$175' },
      { name: 'Add-on: linen change', price: '$20' },
    ],
    includes: [
      'Guest-ready standards',
      'Restocking checklist (you supply)',
      'Same-day availability',
      'Photo confirmation on request',
      'Dedicated account manager',
    ],
    note: 'Volume discounts for hosts with 2+ properties.',
    highlight: false,
  },
];

const TRUST_BADGES = [
  { icon: Shield, label: 'Background Checked', sub: 'Every cleaner, every time' },
  { icon: Check, label: 'Fully Insured', sub: 'General liability + workers comp' },
  { icon: Sparkles, label: 'Satisfaction Guaranteed', sub: 'We return within 24 hours' },
  { icon: Leaf, label: 'Eco Options Available', sub: 'Non-toxic, plant-based products' },
];

export default function SpotlessServices() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: FOREST }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >Services &amp; Pricing</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >What We Clean</h1>
        <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: TEAL }} />
        <p
          className="text-white/60 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          Transparent flat-rate pricing. No hidden fees. Satisfaction guaranteed on every job. Use code <span className="font-black text-white">SPOTLESS15</span> for 15% off your first clean.
        </p>
      </section>

      {/* Trust Badges */}
      <section style={{ backgroundColor: TEAL }} className="py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST_BADGES.map(({ icon: Icon, label, sub }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              <div
                className="text-white text-xs"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >{label}</div>
              <div
                className="text-white/65 text-[10px]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ backgroundColor: SKY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {SERVICES.map(({ icon: Icon, tier, title, subtitle, startingAt, items, includes, note, highlight }, i) => (
            <div
              key={i}
              className="bg-white p-8 md:p-10 grid md:grid-cols-[1fr_1.3fr] gap-10"
              style={highlight ? { outline: `2px solid ${TEAL}` } : {}}
            >
              {highlight && (
                <div
                  className="md:col-span-2 text-[10px] uppercase tracking-widest mb-0 -mt-4 -mx-0 pb-4 border-b"
                  style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800, borderColor: SKY }}
                >
                  ★ Most popular for first-time clients
                </div>
              )}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ backgroundColor: SKY }}>
                    <Icon className="w-4 h-4" style={{ color: TEAL }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      className="text-[9px] uppercase tracking-widest"
                      style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >{tier} Tier</div>
                    <h2
                      className="text-lg leading-tight"
                      style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >{title}</h2>
                  </div>
                </div>
                <div
                  className="text-[10px] uppercase tracking-widest text-gray-400 mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >{subtitle}</div>
                <div className="mb-1">
                  <span className="text-2xl" style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}>{startingAt}</span>
                </div>
                <div className="space-y-2 mt-4">
                  {items.map((item, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                      style={{ borderColor: SKY }}
                    >
                      <span
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                      >{item.name}</span>
                      <span
                        className="text-sm"
                        style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                      >{item.price}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 text-xs text-gray-400 border-t pt-3"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >{note}</div>
              </div>
              <div>
                <div
                  className="text-[9px] uppercase tracking-widest text-gray-300 mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >What&apos;s Included</div>
                <div className="space-y-3">
                  {includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: SKY }}>
                        <Check className="w-3 h-3" style={{ color: TEAL }} strokeWidth={3} />
                      </div>
                      <span
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                      >{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eco Add-on */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="bg-white p-8 border-l-4" style={{ borderLeftColor: TEAL }}>
            <div className="flex items-start gap-4">
              <Leaf className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} strokeWidth={1.5} />
              <div>
                <h3
                  className="text-lg mb-2"
                  style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >Eco-Friendly Upgrade — Just +$15</h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  Add non-toxic, plant-based cleaning products to any service. Fragrance-free options available. Safe for children, pets, and those with chemical sensitivities. Microfiber cloths only, no paper waste.
                </p>
                <div
                  className="text-xs"
                  style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >Ask about our Green Clean subscription and save even more.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >Get a free instant quote in 60 seconds.</h2>
        <p
          className="text-white/75 mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >No obligation. First-time clients use code SPOTLESS15 for 15% off.</p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white uppercase tracking-widest text-[11px] px-10 py-4 hover:bg-gray-50 transition-colors"
          style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Get My Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
