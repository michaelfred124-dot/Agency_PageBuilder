import Link from 'next/link';
import { ArrowRight, Wrench, Shield, Car, Zap, Check, Gauge } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';
const SILVER = '#8C8C8C';
const CONCRETE = '#F5F5F5';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Oil Changes & Fluid Service',
    items: [
      'Conventional oil change — $29',
      'Synthetic blend oil change — $49',
      'Full synthetic oil change — $69',
      'Transmission fluid flush & fill',
      'Coolant system flush',
      'Brake fluid exchange',
      'Power steering fluid service',
    ],
    included: [
      'Multi-point inspection at no extra charge',
      'Digital inspection report to your phone',
      'Tire pressure check and top-off',
    ],
    note: 'Same-day service available on most oil changes. No appointment necessary Mon–Fri.',
  },
  {
    icon: Shield,
    title: 'Brakes & Suspension',
    items: [
      'Brake pad replacement — from $149/axle',
      'Brake rotor resurfacing or replacement',
      'Brake caliper service & rebuild',
      'ABS system diagnosis & repair',
      'Strut & shock absorber replacement',
      'Ball joint & tie rod replacement',
      'Wheel bearing replacement',
    ],
    included: [
      'Road test before and after every brake job',
      'Written warranty on all brake work',
      'Free brake inspection with any other service',
    ],
    note: 'All brake work includes a 24-month/24,000-mile parts and labor warranty.',
  },
  {
    icon: Car,
    title: 'Engine & Transmission',
    items: [
      'Engine diagnostics (OBD-II & advanced scan)',
      'Timing belt & timing chain replacement',
      'Head gasket repair & cylinder head service',
      'Valve cover gaskets & oil seals',
      'Transmission fluid service',
      'Transmission rebuild & replacement',
      'Clutch replacement (manual transmissions)',
    ],
    included: [
      'Free loaner vehicle on jobs over $500',
      'Photo documentation of all findings',
      'Written estimate before any work begins',
    ],
    note: 'Loaner vehicles available for jobs over $500. Call ahead to reserve.',
  },
  {
    icon: Zap,
    title: 'Electrical & Diagnostics',
    items: [
      'Battery load test & replacement',
      'Alternator & voltage regulator repair',
      'Starter motor replacement',
      'Check engine light diagnosis',
      'AC system diagnosis & refrigerant recharge',
      'Power window, lock & mirror repair',
      'ECM / module programming & reprogramming',
    ],
    included: [
      'Advanced scan tool diagnosis included',
      'Digital inspection report sent via text or email',
      'Clear explanation of findings before repair',
    ],
    note: 'We use factory-level scan tools for accurate diagnostics — not just code readers.',
  },
  {
    icon: Gauge,
    title: 'Tires & Wheels',
    items: [
      'Tire rotation — $19',
      'Wheel alignment (2-wheel) — from $79',
      'Wheel alignment (4-wheel) — from $99',
      'Tire balancing — from $59 per set',
      'New tire sales & installation (all brands)',
      'TPMS sensor service & replacement',
      'Flat repair & seasonal tire changeover',
    ],
    included: [
      'Free rotation with every oil change',
      'Alignment printout showing before & after',
      'Tire wear analysis at every visit',
    ],
    note: 'We stock Cooper, Michelin, BFGoodrich, Firestone, and more. Price match guaranteed.',
  },
  {
    icon: Wrench,
    title: 'Preventive Maintenance',
    items: [
      '30,000-mile service package',
      '60,000-mile service package',
      '90,000-mile service package',
      'Air filter & cabin air filter replacement',
      'Spark plug replacement (standard & iridium)',
      'Fuel injector cleaning & fuel system service',
      'Serpentine belt & accessory belt replacement',
    ],
    included: [
      'Manufacturer-recommended service intervals followed',
      'Pre-purchase inspection for used car buyers ($89)',
      'Service reminder system — we track your mileage',
    ],
    note: 'Pre-purchase inspections are the best $89 you will spend before buying a used car.',
  },
];

export default function RidgeLineServices() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
            style={{ color: RED, fontFamily: 'var(--font-display)' }}
          >
            Services &amp; Pricing
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-5 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            What We Do
          </h1>
          <div style={{ width: 60, height: 3, backgroundColor: RED }} className="mb-6" />
          <p
            className="text-white/50 max-w-xl text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ASE-certified mechanics. Same-day service on most repairs. 24-month/24,000-mile
            warranty. No repairs without your written approval.
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <div style={{ backgroundColor: RED }} className="py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {['No Repair Without Written Approval', 'Digital Inspection Reports Included', 'Price Match Guarantee', '24-Mo / 24k-Mile Warranty'].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Check className="w-3 h-3" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <section style={{ backgroundColor: CONCRETE }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, items, included, note }, i) => (
            <div
              key={i}
              className="p-8"
              style={{ backgroundColor: CHARCOAL, borderTop: `4px solid ${RED}` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon className="w-5 h-5 shrink-0" style={{ color: RED }} strokeWidth={1.5} />
                <h2
                  className="text-sm"
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  {title}
                </h2>
              </div>

              {/* Service list */}
              <div className="space-y-2 mb-5">
                {items.map((item, j) => {
                  const parts = item.split(' — ');
                  return (
                    <div
                      key={j}
                      className="flex items-start justify-between gap-3 text-xs"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <div className="flex items-start gap-2 text-white/70">
                        <Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: RED }} />
                        {parts[0]}
                      </div>
                      {parts[1] && (
                        <span
                          className="text-white font-black text-[10px] uppercase tracking-wide shrink-0 px-2 py-0.5"
                          style={{ backgroundColor: RED, fontFamily: 'var(--font-display)' }}
                        >
                          {parts[1]}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* What's included */}
              <div
                className="border-t pt-4 mb-4 space-y-1"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div
                  className="text-[9px] font-black uppercase tracking-widest mb-2"
                  style={{ color: SILVER, fontFamily: 'var(--font-display)' }}
                >
                  What&apos;s Included
                </div>
                {included.map((inc, k) => (
                  <div
                    key={k}
                    className="flex items-start gap-2 text-[11px] text-white/50"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <div
                      className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: RED }}
                    />
                    {inc}
                  </div>
                ))}
              </div>

              <div
                className="text-[10px] pt-3 border-t"
                style={{
                  color: SILVER,
                  borderColor: 'rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Disclaimer + CTA */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 text-center">
        <p
          className="text-white/30 text-xs uppercase tracking-widest mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          All prices are estimates. Final quote provided after vehicle inspection at no charge.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ backgroundColor: RED, fontFamily: 'var(--font-display)' }}
        >
          Book Service Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
