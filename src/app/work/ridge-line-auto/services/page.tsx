import Link from 'next/link';
import { ArrowRight, Wrench, Shield, Car, Zap, Check } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Oil Changes & Fluid Service',
    items: ['Conventional oil change — $29', 'Synthetic blend — $49', 'Full synthetic — $69', 'Transmission fluid flush', 'Coolant flush', 'Brake fluid exchange', 'Power steering service'],
    note: 'Includes multi-point inspection at no extra charge.',
  },
  {
    icon: Shield,
    title: 'Brakes & Suspension',
    items: ['Brake pad replacement — from $149/axle', 'Brake rotor resurfacing or replacement', 'Brake caliper service', 'ABS diagnosis & repair', 'Strut & shock replacement', 'Ball joint & tie rod replacement', 'Wheel bearing replacement'],
    note: 'All brake work includes road test and written warranty.',
  },
  {
    icon: Car,
    title: 'Engine & Transmission',
    items: ['Engine diagnostics (OBD-II & advanced)', 'Timing belt & chain replacement', 'Head gasket repair', 'Valve cover gaskets & seals', 'Transmission service & fluid', 'Transmission rebuild & replacement', 'Clutch replacement (manual)'],
    note: 'Free loaner vehicle on jobs over $500.',
  },
  {
    icon: Zap,
    title: 'Electrical & Diagnostics',
    items: ['Battery test & replacement', 'Alternator & starter repair', 'Check engine light diagnosis', 'AC diagnosis & recharge', 'Window, lock & door repairs', 'Headlight & lighting repair', 'Module programming'],
    note: 'Digital inspection report sent to your phone or email.',
  },
  {
    icon: Wrench,
    title: 'Tires & Wheels',
    items: ['Tire rotation — $19', 'Wheel alignment — from $79', 'Tire balancing — from $59', 'New tire sales & installation', 'TPMS service & sensor replacement', 'Flat repair', 'Seasonal tire changeover'],
    note: 'We carry major brands — Cooper, Michelin, BFGoodrich, and more.',
  },
  {
    icon: Shield,
    title: 'Preventive Maintenance',
    items: ['30/60/90k mile service packages', 'Air & cabin filter replacement', 'Spark plug replacement', 'Fuel injector cleaning', 'Serpentine belt replacement', 'Coolant system inspection', 'Pre-purchase inspection'],
    note: 'Pre-purchase inspections available for used car buyers.',
  },
];

export default function RidgeLineServices() {
  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Services & Pricing</div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-5">What We Do</h1>
        <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">ASE-certified mechanics. Same-day service on most repairs. 24-month/24,000-mile warranty. No repairs without your approval.</p>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, items, note }, i) => (
            <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: RED }}>
              <div className="flex items-center gap-3 mb-5">
                <Icon className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
                <h2 className="font-black text-base uppercase tracking-wide" style={{ color: CHARCOAL }}>{title}</h2>
              </div>
              <div className="space-y-2 mb-4">
                {items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: RED }} />{item}</div>
                ))}
              </div>
              <div className="text-xs text-gray-400 border-t pt-3 mt-3">{note}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: CHARCOAL }} className="py-12 px-6 text-center">
        <p className="text-white/35 text-xs uppercase tracking-widest mb-5">All prices are estimates. Final quote provided after inspection.</p>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: RED }}>Book Service Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
