import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, TrendingUp, Key, MapPin, Check, Users } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';
const SAND = '#E8E0D0';
const WHITE = '#FFFFFF';

const SERVICES = [
  {
    icon: Home,
    title: 'Buyer Representation',
    subtitle: 'Find your perfect Portland home',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    desc: "Buying a home in the Portland metro is competitive. Our buyer's agents know every neighborhood, every micro-market, and every negotiation tactic that wins offers without overpaying.",
    items: [
      'Neighborhood tours & micro-market analysis',
      'Pre-offer strategic guidance & comp review',
      'Offer writing & escalation strategy',
      'Inspection coordination & repair negotiation',
      'Title & closing support',
      'Post-close concierge referrals',
    ],
    stat: { value: '97%', label: 'of buyers we represent close successfully' },
    cta: 'Start Your Home Search',
  },
  {
    icon: TrendingUp,
    title: 'Listing & Selling',
    subtitle: 'Maximize your sale price',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    desc: 'We price strategically, market aggressively, and negotiate skillfully. Our listings consistently sell faster and for more than neighborhood averages — because preparation and execution matter.',
    items: [
      'Free comparative market analysis',
      'Professional photography & staging consult',
      'Targeted online & social marketing',
      'Offer review & multi-offer strategy',
      'Transaction coordination to close',
      'Post-sale tax & moving resources',
    ],
    stat: { value: '101.4%', label: 'average list-to-sale price ratio' },
    cta: 'Get Your Home Valued',
  },
  {
    icon: Key,
    title: 'Property Management',
    subtitle: 'Protect your investment',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    desc: 'Let us handle your investment property from day one. Tenant placement, rent collection, maintenance, and annual reporting — all managed by our experienced team so you never have to worry.',
    items: [
      'Tenant screening & placement',
      'Online rent collection & disbursement',
      'Maintenance coordination & vendor network',
      'Annual property reporting & tax docs',
      'Lease renewals & market-rate rent reviews',
      'Eviction management (if needed)',
    ],
    stat: { value: '85+', label: 'units currently under management' },
    cta: 'Learn About Property Management',
  },
  {
    icon: Users,
    title: 'Relocation Services',
    subtitle: 'Moving to or from Portland?',
    img: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop',
    desc: "Moving to Portland from another city is an entirely different challenge. We work with relocating buyers and sellers to ensure a seamless transition — from remote video tours to coordinated timelines.",
    items: [
      'Remote video tours & virtual consultations',
      'Neighborhood fit assessment & school info',
      'Coordinated buy & sell timelines',
      'Corporate relocation billing accepted',
      'Trusted moving & storage referrals',
      'One dedicated agent through entire move',
    ],
    stat: { value: '3 wks', label: 'average time to find a home for relocation clients' },
    cta: 'Plan Your Relocation',
  },
];

const NEIGHBORHOODS = [
  'NW Portland',
  'Pearl District',
  'Lake Oswego',
  'Beaverton',
  'Hillsboro',
  'West Linn',
  'Tigard',
  'Tualatin',
];

export default function MeridianServices() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: SLATE }} className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: FOREST }} />
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
          >
            Our Services
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Full-Service<br />Real Estate
          </h1>
          <p className="text-white/55 max-w-2xl leading-relaxed text-base">
            Whether you are buying, selling, investing, or relocating in Portland, Meridian Properties is your
            trusted partner from first conversation to final signature.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {SERVICES.map(({ icon: Icon, title, subtitle, img, desc, items, stat, cta }, i) => (
            <div
              key={i}
              style={{ backgroundColor: SLATE }}
              className="grid md:grid-cols-[2fr_3fr] overflow-hidden"
            >
              {/* Image Panel */}
              <div className="relative min-h-[280px] md:min-h-0">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to right, ${SLATE}88, transparent)` }}
                />
                {/* Stat overlay */}
                <div className="absolute bottom-6 left-6">
                  <div
                    className="text-3xl text-white"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider max-w-[120px] leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: FOREST }}
                  >
                    <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      className="text-white text-lg leading-tight"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      {title}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-widest font-bold"
                      style={{ color: FOREST }}
                    >
                      {subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mt-5 mb-6">{desc}</p>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                  {items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: FOREST }} />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
                  style={{
                    color: FOREST,
                    borderColor: FOREST,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas We Serve */}
      <section style={{ backgroundColor: SAND }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4" style={{ color: SLATE }} />
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em]"
              style={{ color: SLATE, fontFamily: 'var(--font-display)' }}
            >
              Areas We Serve
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {NEIGHBORHOODS.map((n, i) => (
              <span
                key={i}
                className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5"
                style={{
                  border: `1px solid ${SLATE}33`,
                  color: SLATE,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: WHITE }} className="py-16 px-6 text-center">
        <h2
          className="text-4xl mb-4"
          style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Ready to make your move?
        </h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          Free consultation. No obligation. Just honest real estate advice from Portland's most trusted boutique team.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ backgroundColor: FOREST, fontFamily: 'var(--font-display)' }}
        >
          Schedule a Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
