import Link from 'next/link';
import { ArrowRight, Wrench, Shield, Car, Zap, Check, Flame } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const CARD = '#161616';
const RED = '#E5242A';

const SERVICES = [
  {
    icon: Flame,
    title: 'Engine Tuning & Performance',
    items: ['Custom dyno mapping & ECU calibration', 'Cold air intake & exhaust upgrades', 'Supercharger & turbo installations', 'Engine building & cylinder head porting', 'Performance camshaft installation'],
    note: 'Includes baseline dyno run and full safety parameters data logging.',
  },
  {
    icon: Shield,
    title: 'Brake Systems & Upgrades',
    items: ['Brake pad replacement (performance & OEM) — from $149/axle', 'High-performance slotted/drilled rotors', 'Big brake kit (BBK) installation & fitting', 'Stainless steel braided brake line upgrades', 'Brake system fluid exchange & bleed'],
    note: 'All braking services carry written 24-month warranties.',
  },
  {
    icon: Car,
    title: 'Suspension Tuning & Setup',
    items: ['Coilover & lowering spring installations', 'Strut & shock replacement & tuning', 'Performance sway bars & strut brace setups', 'Track alignment & corner balancing', 'Lift kit & leveling setups for offroad/trucks'],
    note: 'Includes a complimentary 4-wheel road track alignment scan.',
  },
  {
    icon: Zap,
    title: 'Advanced Diagnostics & Logging',
    items: ['OBD-II computer scans & error resolution', 'Custom wiring harness repair & re-routing', 'Solenoid, battery & alternator updates', 'A/C charging & climate diagnostics', 'Telemetry & gauge custom integration'],
    note: 'Full digital diagnostic reports sent directly to your phone.',
  },
  {
    icon: Wrench,
    title: 'Tires & Track Setup',
    items: ['Tire rotation & high-speed balance — from $59', 'Track tire sales, mounting & balancing', 'TPMS sensor installation & programming', 'Custom wheel offsets & spacers configuration', 'Performance road-force alignment balancing'],
    note: 'Direct suppliers of Michelin, Toyo, Nitto, and Pirelli.',
  },
  {
    icon: Shield,
    title: 'Preventive Maintenance',
    items: ['30/60/90k mile scheduled maintenance plans', 'Synthetic fluid flushes (coolant, power steering)', 'Iridium spark plug & coil pack replacement', 'Multi-point safety inspection & diagnostics', 'Pre-purchase vehicle inspections'],
    note: 'Required for warranty preservation on modified vehicles.',
  },
];

export default function RidgeLineServices() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: BG, color: '#fff' }}>
      
      {/* Title Banner */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#E5242A] font-mono font-black text-xs tracking-[0.25em] uppercase block mb-4">Services & Pricing</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none uppercase">Precision Engineering</h1>
        <p className="text-white/50 max-w-xl mx-auto text-sm font-light leading-relaxed">
          ASE-certified mechanics. Dyno-tested upgrades. 24-month/24,000-mile warranty on all diagnostic and general mechanical work.
        </p>
      </section>

      {/* Services Grid with unique alternating roundings */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map(({ icon: Icon, title, items, note }, i) => (
            <div 
              key={i} 
              className={`p-8 border border-white/5 hover:border-[#E5242A]/40 transition-all duration-500 flex flex-col justify-between min-h-[380px] shadow-lg ${
                i % 2 === 0 ? 'rounded-tl-[40px] rounded-br-[40px]' : 'rounded-tr-[40px] rounded-bl-[40px]'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#E5242A]/30 flex items-center justify-center bg-white/5">
                    <Icon className="w-4.5 h-4.5" style={{ color: RED }} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-black text-base text-white uppercase tracking-wide">{title}</h2>
                </div>
                <div className="space-y-2.5">
                  {items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-white/70 font-light leading-relaxed">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] font-mono text-white/40 border-t border-white/5 pt-4 mt-6 uppercase tracking-wider">
                {note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="bg-[#E5242A] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl text-white border border-[#E5242A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600')" }} />
          <h2 className="text-3xl font-black text-white mb-4 uppercase">Schedule a professional service slot.</h2>
          <p className="text-white/85 text-xs font-light mb-8 max-w-sm mx-auto uppercase tracking-wider">ASE Master certified mechanics. Digital health estimates sent directly to you.</p>
          <div className="pt-2">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] text-white font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all">
              Request Service Slot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

