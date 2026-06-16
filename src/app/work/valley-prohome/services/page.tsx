import Link from 'next/link';
import { ArrowRight, Droplets, Zap, Wind, Wrench, Check, Shield } from 'lucide-react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';
const WHITE = '#FFFFFF';
const DARK = '#111111';

const TRADES = [
  {
    icon: Droplets,
    title: 'Plumbing',
    startingAt: '$89',
    tagline: 'Licensed plumbers. Flat-rate pricing.',
    items: [
      'Leak detection & pipe repair',
      'Water heater install & repair',
      'Drain cleaning & unclogging',
      'Toilet repair & replacement',
      'Faucet & fixture installation',
      'Water softener systems',
      'Full home repipe',
      'Sewer line inspection',
      'Emergency plumbing (24/7)',
    ],
    note: 'Emergency service available 24/7/365.',
  },
  {
    icon: Zap,
    title: 'Electrical',
    startingAt: '$125',
    tagline: 'Licensed electricians on every job.',
    items: [
      'Electrical panel upgrade',
      'Circuit breaker replacement',
      'Outlet & switch installation',
      'Ceiling fan & light fixtures',
      'GFCI & AFCI installation',
      'EV charger installation',
      'Home generator hookup',
      'Outdoor & landscape lighting',
      'Electrical inspection & permits',
    ],
    note: 'Licensed electrician on every job. Permits pulled where required.',
  },
  {
    icon: Wind,
    title: 'HVAC',
    startingAt: '$95',
    tagline: 'Keep your home comfortable year-round.',
    items: [
      'AC tune-up & seasonal maintenance',
      'AC repair & refrigerant recharge',
      'New AC installation',
      'Furnace repair & tune-up',
      'Ductwork cleaning & repair',
      'Thermostat installation (smart)',
      'Mini-split installation',
      'Indoor air quality systems',
      'Annual maintenance contracts',
    ],
    note: 'Annual HVAC maintenance plans available from $149/year.',
  },
  {
    icon: Wrench,
    title: 'General Home Repairs',
    startingAt: '$75',
    tagline: 'One call, every repair handled.',
    items: [
      'Drywall repair & patching',
      'Door & window installation',
      'Tile repair & replacement',
      'Deck repair & refinishing',
      'Garage door repair',
      'Fence repair & installation',
      'Caulking & weatherstripping',
      'Gutter cleaning & repair',
      'Pre-sale home punch lists',
    ],
    note: 'Handyman hour packages available for small jobs.',
  },
  {
    icon: Shield,
    title: 'Roofing',
    startingAt: 'Free Inspection',
    tagline: 'Storm damage experts. Insurance claim support.',
    items: [
      'Roof inspection (free)',
      'Shingle repair & replacement',
      'Flashing repair',
      'Flat roof repair',
      'Storm damage assessment',
      'Insurance claim support',
      'Full roof replacement',
      'Attic ventilation',
      'Gutter guard installation',
    ],
    note: 'Free roof inspections. Insurance documentation provided.',
  },
];

const TRUST = [
  { label: 'Licensed & Insured', sub: 'State-licensed in all trades' },
  { label: 'Background Checked', sub: 'Every technician, every visit' },
  { label: 'Flat-Rate Pricing', sub: 'No surprise charges' },
  { label: '2-Year Warranty', sub: 'On all workmanship' },
];

export default function ValleyProHomeServices() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: GREEN }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Our Services</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Home Services<br />Done Right</h1>
        {/* GOLD accent bar */}
        <div className="w-16 h-1.5 mx-auto mb-6" style={{ backgroundColor: GOLD }} />
        <p
          className="text-white/60 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Plumbing, electrical, HVAC, roofing, and general repairs. Licensed, bonded, and insured. Flat-rate pricing. Free estimates. 2-year workmanship warranty.
        </p>
      </section>

      {/* Trust Bar */}
      <section style={{ backgroundColor: GOLD }} className="py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST.map(({ label, sub }, i) => (
            <div key={i}>
              <div
                className="text-sm mb-0.5"
                style={{ color: DARK, fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >{label}</div>
              <div
                className="text-xs"
                style={{ color: 'rgba(0,0,0,0.55)', fontFamily: 'var(--font-body)' }}
              >{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {TRADES.map(({ icon: Icon, title, startingAt, tagline, items, note }, i) => (
            <div
              key={i}
              className={`bg-white p-8 ${i === 4 ? 'md:col-span-2' : ''}`}
              style={{ borderTop: `3px solid ${GOLD}` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: GREEN + '12' }}>
                    <Icon className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2
                      className="text-lg leading-tight"
                      style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                    >{title}</h2>
                    <div
                      className="text-[10px] text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >{tagline}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-xs text-gray-400 mb-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >From</div>
                  <div
                    className="text-lg"
                    style={{ color: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >{startingAt}</div>
                </div>
              </div>

              <div className={`grid gap-2 mb-5 ${i === 4 ? 'md:grid-cols-3 grid-cols-2' : 'grid-cols-2'}`}>
                {items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: GOLD }}
                      strokeWidth={2.5}
                    />
                    <span
                      className="text-xs text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="text-xs text-gray-400 border-t pt-3"
                style={{ fontFamily: 'var(--font-body)', borderColor: LIGHT }}
              >{note}</div>
            </div>
          ))}
        </div>

        {/* Warranty Banner */}
        <div className="max-w-5xl mx-auto mt-6 p-6 border-l-4" style={{ backgroundColor: WHITE, borderColor: GREEN }}>
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={1.5} />
            <div>
              <h3
                className="mb-1"
                style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >2-Year Workmanship Warranty on All Services</h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                All work comes with a full two-year workmanship warranty. Free estimates on all projects. We serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, and surrounding cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: GOLD }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl mb-3"
          style={{ color: DARK, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Free estimate. Same-week scheduling.</h2>
        <p
          className="mb-8"
          style={{ color: 'rgba(0,0,0,0.55)', fontFamily: 'var(--font-body)' }}
        >18+ years serving Phoenix and the East Valley.</p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white uppercase tracking-widest text-[11px] px-10 py-4 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          Request Free Estimate <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
