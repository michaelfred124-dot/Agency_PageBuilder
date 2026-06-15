import Image from 'next/image';
import Link from 'next/link';
import { Wrench, Check, Star, Phone, MapPin, ChevronDown, Zap, Settings, Gauge, Layers, ArrowRight } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const RED = '#E5242A';
const CARD = '#161616';
const MUTED = 'rgba(255,255,255,0.5)';

const SERVICES = [
  {
    n: '01',
    title: 'Engine & Performance',
    price: 'From $299',
    icon: Gauge,
    items: ['Full engine diagnostics & rebuilds', 'Cold air intake & exhaust systems', 'Supercharger & turbo installations', 'ECU tuning & dyno calibration'],
  },
  {
    n: '02',
    title: 'Brake Systems',
    price: 'From $249',
    icon: Layers,
    items: ['High-performance brake pads & rotors', 'Brake line upgrades (stainless)', 'Big brake kit installations', 'Brake fluid flush & bleeds'],
  },
  {
    n: '03',
    title: 'Suspension Tuning',
    price: 'From $399',
    icon: Settings,
    items: ['Coilover & lowering spring installs', '4-wheel alignment (performance)', 'Sway bar & strut brace upgrades', 'Lift kit & leveling setups'],
  },
  {
    n: '04',
    title: 'Auto Detailing',
    price: 'From $199',
    icon: Wrench,
    items: ['Paint correction & ceramic coatings', 'Interior deep clean & conditioning', 'Engine bay detailing', 'Headlight restorations'],
  },
  {
    n: '05',
    title: 'Diagnostic & Electrical',
    price: 'From $125',
    icon: Zap,
    items: ['OBD-II scans & code troubleshooting', 'Wiring harness repair & re-pinning', 'Custom gauges & logging systems', 'Battery, alternator & starter updates'],
  },
  {
    n: '06',
    title: 'Transmission Service',
    price: 'From $349',
    icon: Settings,
    items: ['Manual & automatic fluid service', 'Clutch replacement & adjustments', 'High-perf differentials & gears', 'Transfer case servicing'],
  },
];

const ACHIEVEMENTS = [
  { label: 'ASE Certified Technicians', desc: 'Every tech on our floor holds current ASE certifications, specializing in performance setups.' },
  { label: 'Best Tuning Shop Nashville', desc: 'Proudly voted Nashville\'s top performance and service shop in 2024 & 2025.' },
  { label: '24 Years Family Owned', desc: 'Founded by Rick Holloway in 2002. Built on honest handshakes and flawless builds.' },
  { label: '100% Satisfaction Promise', desc: 'We stand behind our builds. If it isn\'t track-ready or dialled in, we fix it. Period.' },
];

const TESTIMONIALS = [
  {
    text: "Brought my Challenger in for a full suspension build and custom tune. Ridge Line completely transformed it. Handles like a track-built beast now. These guys are the real deal.",
    author: 'Marcus D.',
    vehicle: '2021 Dodge Challenger R/T',
  },
  {
    text: "I went to three different shops for a persistent engine tick. Ridge Line diagnosed it in under an hour and resolved it properly. The difference is night and day.",
    author: 'Tyler B.',
    vehicle: '2019 Ford F-150 Raptor',
  },
  {
    text: "The ceramic coating on my Mustang is flawless. Six months of highway driving later and it still looks like a showroom model. Incredible craftsmanship.",
    author: 'Sarah K.',
    vehicle: '2022 Ford Mustang GT500',
  },
];

const FAQS = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: "Walk-ins are welcome for basic diagnostics or fluid service, though scheduling guarantees your lift time. For performance upgrades and dyno tuning, we recommend booking at least a week in advance.",
  },
  {
    q: 'What vehicles do you specialize in?',
    a: "We specialize in American muscle, high-performance trucks, and import sport vehicles — but we service everything. From daily imports to custom builds, we apply the exact same precision.",
  },
  {
    q: 'Can you source aftermarket and OEM parts?',
    a: "Yes. We have direct dealer accounts with major aftermarket brands (including Borla, Roush, Bilstein, Brembo, Holley, and H&R) alongside all major OEM parts distributors.",
  },
  {
    q: 'Do you offer a warranty on your work?',
    a: "Absolutely. All general labor carries a 24-month / 24,000-mile warranty. Performance parts and custom builds carry manufacturer warranties, which we walk you through in detail.",
  },
];

export default function RidgeLineHome() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: BG, color: '#fff' }}>

      {/* HERO — split layout with asymmetrical rounded media container */}
      <section className="min-h-[85vh] grid lg:grid-cols-[55fr_45fr] items-center max-w-7xl mx-auto px-6 md:px-12 py-12 gap-12">
        <div className="flex flex-col justify-center text-left py-10">
          <p className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-6" style={{ color: RED }}>
            EST. 2002 &nbsp;·&nbsp; NASHVILLE, TN
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.95] text-white mb-8 tracking-tighter">
            BUILT<br />TO<br /><span className="text-[#E5242A] italic">PERFORM.</span>
          </h1>
          <div className="w-16 h-1 mb-8" style={{ backgroundColor: RED }} />
          <p className="text-sm leading-relaxed mb-10 max-w-md font-light text-white/70">
            Nashville's most trusted performance tuning and auto service headquarters. 24 years of custom engine builds, suspension tuning, and precision dyno calibration.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-black uppercase tracking-widest transition-all rounded-none border border-[#E5242A]/50 hover:border-[#E5242A]"
              style={{ backgroundColor: RED, color: '#FFFFFF' }}
            >
              Book Service <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-black uppercase tracking-widest border text-white hover:bg-white/5"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              View Services <ArrowRight className="w-4 h-4 text-[#E5242A]" />
            </Link>
          </div>
          
          <div className="flex items-center gap-12 flex-wrap">
            {[['4,200+', 'Vehicles Served'], ['24 Years', 'Nashville Excellence'], ['4.9★', 'Google Reviews']].map(([val, lbl]) => (
              <div key={lbl} className="border-l border-[#E5242A]/30 pl-4">
                <div className="text-2xl font-bold text-white tracking-tight">{val}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest mt-1 text-white/50">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Asymmetrical rounded media box with overlay */}
        <div className="relative overflow-hidden aspect-[4/5] lg:h-[620px] w-full rounded-tr-[80px] rounded-bl-[80px] border border-[#E5242A]/20 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop"
            alt="Ridge Line Auto Performance Shop Nashville"
            fill
            className="object-cover scale-102 hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 bg-[#121212]/80 backdrop-blur-md p-6 border border-white/10 rounded-tr-3xl rounded-bl-3xl">
            <div className="text-xs font-mono text-[#E5242A] uppercase tracking-widest font-black">Featured Build</div>
            <div className="text-md font-bold text-white mt-1">Twin-Turbo Ford Mustang Dark Horse</div>
            <div className="text-[10px] text-white/50 mt-1 uppercase tracking-wider font-mono">Stage 3 Suspension & Custom Dyno Tune</div>
          </div>
        </div>
      </section>

      {/* STATS STRIP - floating asymmetric dark panel */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#121212] border border-[#E5242A]/15 rounded-tl-[48px] rounded-br-[48px] p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-xl relative overflow-hidden">
          {/* Subtle background image texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600')" }} />
          {[
            ['4,200+', 'Performance Builds'],
            ['24 Years', 'Nashville Roots'],
            ['4.9★ Stars', 'Over 600 Reviews'],
            ['100%', 'ASE Certified Staff'],
          ].map(([val, lbl]) => (
            <div key={lbl} className="space-y-1 relative z-10">
              <div className="text-4xl font-black tracking-tight" style={{ color: RED }}>{val}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Precision Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
            High Performance.<br />Daily Reliability.
          </h2>
        </div>
        
        {/* Dynamic alternating roundings for cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ n, title, price, icon: Icon, items }, i) => (
            <div
              key={title}
              className={`p-8 border border-white/5 hover:border-[#E5242A]/40 flex flex-col justify-between min-h-[460px] shadow-lg transition-all duration-500 group ${
                i % 2 === 0 ? 'rounded-tl-[32px] rounded-br-[32px]' : 'rounded-tr-[32px] rounded-bl-[32px]'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#E5242A]/30 flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#E5242A]/10">
                    <Icon className="w-5 h-5" style={{ color: RED }} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 bg-[#E5242A] text-white">
                    {price}
                  </span>
                </div>
                
                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wide">{title}</h3>
                <ul className="space-y-3 mb-8">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-white/60 font-light leading-relaxed">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={`${BASE}/services`}
                className="text-xs font-mono uppercase tracking-widest text-[#E5242A] hover:text-white transition-colors flex items-center gap-1.5 pt-4 border-t border-white/5"
              >
                Explore Packages <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY RIDGE LINE — split with offset rounded image and dark texture background */}
      <section className="py-24 bg-[#121212] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070')" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative overflow-hidden aspect-video md:h-[500px] rounded-tl-[64px] rounded-br-[64px] border border-[#E5242A]/20 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
              alt="Ridge Line Auto Shop Workshop"
              fill
              className="object-cover scale-102"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left space-y-8">
            <div>
              <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">The Standard</span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
                Why performance<br />enthusiasts choose us.
              </h2>
            </div>
            
            <div className="space-y-6">
              {ACHIEVEMENTS.map(({ label, desc }, i) => (
                <div key={label} className="flex gap-4 border-l-4 pl-5 py-1" style={{ borderLeftColor: RED }}>
                  <div>
                    <div className="font-black text-white text-sm uppercase tracking-wide">{label}</div>
                    <div className="text-xs text-white/50 leading-relaxed mt-1 font-light">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — step nodes with customized rounded panels */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Workflow</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">The Ridge Line Process</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: '01', title: 'Schedule Consultation', desc: 'Secure your build or service slot online. We analyze your vehicle requirements and goals.' },
            { n: '02', title: 'Complimentary Diagnostics', desc: 'Drop off your vehicle for a comprehensive digital scan and mechanical multi-point inspection.' },
            { n: '03', title: 'Precision Servicing', desc: 'ASE-certified technicians execute work utilizing high-performance diagnostic machinery and OEM/top parts.' },
            { n: '04', title: 'Final Tuning & Road Test', desc: 'We execute dyno testing and validation. Your car returns to you dialled in and ready.' },
          ].map(({ n, title, desc }, i) => (
            <div 
              key={n} 
              className={`p-8 border border-white/5 flex flex-col justify-between min-h-[220px] text-left hover:border-[#E5242A]/30 transition-all ${
                i % 2 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 'rounded-tr-3xl rounded-bl-3xl'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div>
                <div className="text-2xl font-mono font-black mb-4 text-[#E5242A]/30">{n}</div>
                <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2">{title}</h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#121212] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Reviews</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Vouched by the Street</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={t.author} 
                className={`p-8 border border-white/5 flex flex-col justify-between min-h-[280px] text-left shadow-lg ${
                  i % 2 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 'rounded-tr-3xl rounded-bl-3xl'
                }`}
                style={{ backgroundColor: BG }}
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />
                    ))}
                  </div>
                  <p className="text-white/70 italic text-xs leading-relaxed font-light">"{t.text}"</p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-6">
                  <div className="font-black text-white text-sm">{t.author}</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest mt-1 text-[#E5242A] font-bold">{t.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Got Questions?</h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map(({ q, a }, i) => (
            <details 
              key={i} 
              className="group border border-white/5 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:border-[#E5242A]/25"
              style={{ backgroundColor: CARD }}
            >
              <summary className="flex justify-between items-center cursor-pointer text-left list-none">
                <span className="font-black text-white text-sm uppercase tracking-wide">{q}</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-4 h-4" style={{ color: RED }} />
                </span>
              </summary>
              <p className="mt-4 text-xs leading-relaxed text-white/60 font-light border-t border-white/5 pt-4">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA - Custom modern glow block */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#E5242A] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl border border-[#E5242A] relative overflow-hidden">
          {/* Background overlay workshop image */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600')" }} />
          <h2 className="text-4xl font-black text-white uppercase mb-4 relative z-10">Ready to transform your build?</h2>
          <p className="text-white/85 text-xs font-light mb-8 max-w-sm mx-auto relative z-10 uppercase tracking-wider">
            Same-week dyno slots available. ASE-certified engineering.
          </p>
          <div className="pt-2 relative z-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] text-white font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all rounded-none border border-transparent">
              Book Appointment Now <ArrowRight className="w-4 h-4 text-white hover:text-black" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

