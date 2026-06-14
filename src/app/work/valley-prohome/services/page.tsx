import Link from 'next/link';
import { ArrowRight, Droplets, Zap, Wind, Wrench, Check } from 'lucide-react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';

const TRADES = [
  {
    icon: Droplets,
    title: 'Plumbing',
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
    icon: Zap,
    title: 'Roofing',
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

export default function ValleyProHomeServices() {
  return (
    <>
      <section style={{ backgroundColor: GREEN }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Services</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Home Services</h1>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">Plumbing, electrical, HVAC, roofing, and general repairs. Licensed, bonded, insured. Free estimates. 2-year workmanship warranty.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {TRADES.map(({ icon: Icon, title, items, note }, i) => (
            <div key={i} className={`bg-white p-8 border-t-4 ${i === 4 ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''}`} style={{ borderTopColor: GOLD }}>
              <div className="flex items-center gap-3 mb-5">
                <Icon className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.5} />
                <h2 className="font-bold text-base" style={{ color: GREEN }}>{title}</h2>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-5">
                {items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />{item}</div>
                ))}
              </div>
              <div className="text-xs text-gray-400 border-t pt-3">{note}</div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 bg-white p-6 border-l-4 text-sm text-gray-500" style={{ borderLeftColor: GREEN }}>
          All work comes with a <strong>2-year workmanship warranty</strong>. Free estimates on all projects. We serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, and surrounding cities.
        </div>
      </section>

      <section style={{ backgroundColor: GOLD }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A0F00' }}>Free estimate. Same-week scheduling.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: GREEN }}>Request Free Estimate <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
