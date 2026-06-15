import Image from 'next/image';
import Link from 'next/link';
import { Wrench, Check, Star, Phone, MapPin, ChevronDown, Zap, Settings, Gauge, Layers } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const RED = '#E5242A';
const CARD = '#161616';
const MUTED = 'rgba(255,255,255,0.45)';

const SERVICES = [
  {
    n: '01',
    title: 'Engine & Performance',
    price: 'From $299',
    icon: Gauge,
    items: ['Full engine diagnostics & rebuild', 'Cold air intake & exhaust systems', 'Supercharger & turbo installation', 'ECU tuning & dyno calibration'],
  },
  {
    n: '02',
    title: 'Brake Systems',
    price: 'From $249',
    icon: Layers,
    items: ['High-performance brake pads & rotors', 'Brake line upgrades (stainless)', 'Big brake kit installation', 'Brake fluid flush & bleed'],
  },
  {
    n: '03',
    title: 'Suspension Tuning',
    price: 'From $399',
    icon: Settings,
    items: ['Coilover & lowering spring install', '4-wheel alignment (performance)', 'Sway bar & strut brace upgrades', 'Lift kit & leveling systems'],
  },
  {
    n: '04',
    title: 'Auto Detailing',
    price: 'From $199',
    icon: Wrench,
    items: ['Paint correction & ceramic coating', 'Interior deep clean & conditioning', 'Engine bay detail', 'Headlight restoration'],
  },
  {
    n: '05',
    title: 'Diagnostic & Electrical',
    price: 'From $125',
    icon: Zap,
    items: ['OBD-II scan & code clearing', 'Wiring harness repair', 'Audio & remote start install', 'Battery, alternator & starter'],
  },
  {
    n: '06',
    title: 'Transmission Service',
    price: 'From $349',
    icon: Settings,
    items: ['Manual & automatic fluid service', 'Clutch replacement & adjustment', 'Differential service', 'Transfer case service'],
  },
];

const ACHIEVEMENTS = [
  { label: '4-Year ASE Certified', desc: 'Every technician holds current ASE Master certification.' },
  { label: '2x Best of Nashville Award', desc: 'Voted Nashville\'s top performance shop 2022 & 2023.' },
  { label: '22 Years Family Owned', desc: 'Founded by Rick Holloway in 2002. Still family-run today.' },
  { label: '100% Satisfaction Guarantee', desc: 'We stand behind every repair or we make it right. Period.' },
];

const TESTIMONIALS = [
  {
    text: "Brought my Challenger in for a full suspension build and tune. Ridge Line transformed it. Handles like it was factory-designed for the track. These guys are the real deal.",
    author: 'Marcus D.',
    vehicle: '2021 Dodge Challenger R/T',
  },
  {
    text: "I have taken my truck to three shops for a persistent engine knock. Ridge Line diagnosed it in under an hour and fixed it properly. Night and day difference.",
    author: 'Tyler B.',
    vehicle: '2019 Ford F-150 Raptor',
  },
  {
    text: "The ceramic coating on my Mustang is flawless. 6 months later and it still looks like it just rolled off the lot. Worth every dollar.",
    author: 'Sarah K.',
    vehicle: '2022 Ford Mustang GT500',
  },
];

const FAQS = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: "Walk-ins are always welcome, though scheduling guarantees your time slot and lets us pre-order any specialty parts. For performance builds and major installs, we recommend booking at least a week out. Oil changes and diagnostics are typically same-day.",
  },
  {
    q: 'What vehicles do you work on?',
    a: "We specialize in American muscle, trucks, and import performance vehicles — but we service everything. Domestic, foreign, diesel, and hybrid. If it has wheels and an engine, we work on it.",
  },
  {
    q: 'Can you source aftermarket and OEM parts?',
    a: "Yes. We have direct accounts with major aftermarket suppliers (Borla, Roush, Bilstein, Brembo, Holley, and more) and all major OEM part distributors. We will match you with the right part for your build and budget.",
  },
  {
    q: 'Do you offer a warranty on your work?',
    a: "All labor carries a 12-month / 12,000-mile warranty. Parts warranties vary by manufacturer — OEM parts typically carry 24 months. Performance parts carry manufacturer warranties. We will walk you through coverage before any work begins.",
  },
  {
    q: 'How long does a performance build take?',
    a: "It depends entirely on scope. A basic intake and exhaust install can be done in a day. A full engine build, tune, and alignment can run 3-7 business days. We give you a firm timeline before we start and keep you updated daily on progress.",
  },
  {
    q: 'Do you offer financing?',
    a: "Yes. We offer 6-month same-as-cash financing through our lending partner on jobs over $500. Apply at the front desk — most approvals are instant. We accept all major credit cards, cash, and digital payment.",
  },
  {
    q: "Is Ridge Line a dealership or independent shop?",
    a: "Independent — and proud of it. We are family owned and operated since 2002. No upsell quotas, no corporate protocols. Just honest technicians who love cars doing excellent work at fair prices.",
  },
];

export default function RidgeLineHome() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff' }}>

      {/* STICKY NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-14 py-4"
        style={{ backgroundColor: BG, borderBottom: '1px solid rgba(229,36,42,0.3)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-base font-black uppercase tracking-[0.15em] text-white">RIDGE LINE</span>
          <span className="text-base font-black uppercase tracking-[0.15em]" style={{ color: RED }}>AUTO</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <Link key={item} href={`${BASE}/contact`} className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>
              {item}
            </Link>
          ))}
        </div>
        <Link
          href={`${BASE}/contact`}
          className="text-xs font-black uppercase tracking-widest px-5 py-2.5 text-white"
          style={{ backgroundColor: RED }}
        >
          Book Service
        </Link>
      </nav>

      {/* HERO — full-bleed image */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop"
            alt="Ridge Line Auto Performance Shop Nashville"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.92) 45%, rgba(13,13,13,0.3) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14 py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-8" style={{ color: RED }}>
            Nashville's Performance Shop
          </p>
          <h1 className="text-8xl md:text-9xl font-black uppercase leading-none tracking-tighter text-white mb-8">
            BUILT<br />TO<br />PERFORM.
          </h1>
          <div className="w-20 mb-8" style={{ borderTop: `3px solid ${RED}` }} />
          <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: MUTED }}>
            Nashville's most trusted performance and auto service shop. 22 years of expertise. Zero compromises.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-black uppercase tracking-widest text-white"
              style={{ backgroundColor: RED }}
            >
              Book Service
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-black uppercase tracking-widest border"
              style={{ borderColor: 'rgba(229,36,42,0.5)', color: RED }}
            >
              View Services
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" style={{ color: RED }} />
            <a href="tel:6155550174" className="text-base font-black text-white tracking-wide">(615) 555-0174</a>
          </div>
        </div>
      </section>

      {/* RED TRUST BAR */}
      <section className="py-5" style={{ backgroundColor: RED }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            '4,200+ Vehicles Served',
            '22 Years Nashville',
            '4.9★ Google',
            'Same-Day Available',
          ].map((item, i) => (
            <div key={i} className="py-2 text-white font-black text-sm uppercase tracking-widest">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — 2-col grid of 6 cards */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Services</p>
            <h2 className="text-5xl font-black uppercase text-white leading-none">
              What we do<br />best.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(229,36,42,0.1)' }}>
            {SERVICES.map(({ n, title, price, icon: Icon, items }) => (
              <div
                key={n}
                className="p-8 flex flex-col"
                style={{ backgroundColor: CARD }}
              >
                <div className="text-5xl font-black mb-4" style={{ color: `${RED}30` }}>{n}</div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-black text-white text-lg leading-tight">{title}</h3>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 shrink-0 ml-3 text-white" style={{ backgroundColor: RED }}>
                    {price}
                  </span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: MUTED }}>
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: RED }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/services`}
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ color: RED }}
                >
                  Schedule &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP SHOWCASE — split */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="relative overflow-hidden min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
            alt="Ridge Line Auto shop interior"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex items-center px-10 md:px-16 py-20" style={{ backgroundColor: BG }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-5" style={{ color: RED }}>Our Shop</p>
            <h2 className="text-4xl font-black uppercase text-white leading-tight mb-12">
              Nashville's most trusted performance shop.
            </h2>
            <div className="space-y-5">
              {ACHIEVEMENTS.map(({ label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 border-l-4 pl-5 py-1"
                  style={{ borderLeftColor: RED }}
                >
                  <div>
                    <div className="font-black text-white text-sm">{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: MUTED }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — 4-step horizontal */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>How It Works</p>
            <h2 className="text-4xl font-black uppercase text-white">Simple. Honest. Fast.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Schedule Online', desc: 'Book your service in 60 seconds. Pick your date, describe your needs, we do the rest.' },
              { n: '2', title: 'Drop Your Vehicle', desc: 'Pull in any time during business hours. We perform a complimentary multi-point inspection.' },
              { n: '3', title: 'Expert Service', desc: 'ASE-certified technicians execute every job with precision. No corners cut. Ever.' },
              { n: '4', title: 'Pick Up and Drive', desc: "Your vehicle returns better than it arrived. We call you first — then it's yours to claim." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-black text-lg text-white"
                  style={{ backgroundColor: RED }}
                >
                  {n}
                </div>
                <h3 className="font-black text-white text-sm mb-2">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Reviews</p>
            <h2 className="text-4xl font-black uppercase text-white">4.9 Stars. 600+ Reviews.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, author, vehicle }) => (
              <div
                key={author}
                className="p-8 border-t-4"
                style={{ backgroundColor: CARD, borderTopColor: RED }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed mb-6" style={{ color: MUTED }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div className="font-black text-white text-sm">{author}</div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: `${RED}90` }}>{vehicle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: CARD }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>FAQ</p>
            <h2 className="text-4xl font-black uppercase text-white">Common Questions</h2>
          </div>
          <div>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group border-b py-6"
                style={{ borderColor: 'rgba(229,36,42,0.2)' }}
              >
                <summary className="flex justify-between cursor-pointer gap-4 list-none">
                  <span className="font-black text-sm text-white leading-snug">{q}</span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: RED }}
                  />
                </summary>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: RED }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-5 text-white">Ready to transform your vehicle?</h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Same-day service available. Performance builds scheduled same week. Call or book online.
          </p>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-black uppercase tracking-widest"
            style={{ backgroundColor: '#0D0D0D', color: '#fff' }}
          >
            Book Service Now
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-8 md:px-14 pt-20 pb-10"
        style={{ backgroundColor: BG, borderTop: `3px solid ${RED}` }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base font-black uppercase tracking-[0.15em] text-white">RIDGE LINE</span>
              <span className="text-base font-black uppercase tracking-[0.15em]" style={{ color: RED }}>AUTO</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
              Nashville's premier performance and auto service shop since 2002. Family owned. ASE certified. Zero compromises.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-5" style={{ color: RED }}>Services</div>
            <div className="space-y-2.5">
              {['Engine & Performance', 'Brake Systems', 'Suspension Tuning', 'Auto Detailing', 'Diagnostic & Electrical', 'Transmission Service'].map((item) => (
                <div key={item}>
                  <Link href={`${BASE}/services`} className="text-xs" style={{ color: MUTED }}>{item}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-5" style={{ color: RED }}>Contact & Hours</div>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: RED }} />
              <address className="text-xs not-italic leading-relaxed" style={{ color: MUTED }}>
                4820 Nolensville Pike<br />
                Nashville, TN 37211
              </address>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: RED }} />
              <a href="tel:6155550174" className="text-xs" style={{ color: MUTED }}>(615) 555-0174</a>
            </div>
            <div className="text-xs space-y-1" style={{ color: MUTED }}>
              <div>Mon &ndash; Fri: 7:00am &ndash; 6:00pm</div>
              <div>Saturday: 8:00am &ndash; 4:00pm</div>
              <div style={{ color: 'rgba(255,255,255,0.2)' }}>Sunday: Closed</div>
            </div>
          </div>
        </div>
        <div
          className="border-t flex flex-col md:flex-row items-center justify-between gap-3 pt-8 text-[10px]"
          style={{ borderColor: 'rgba(229,36,42,0.2)', color: MUTED }}
        >
          <span>&copy; 2025 Ridge Line Auto &nbsp;&middot;&nbsp; Nashville, TN</span>
          <div className="flex items-center gap-5">
            <Link href={`${BASE}/privacy`} style={{ color: MUTED }}>Privacy Policy</Link>
            <Link href={`${BASE}/terms`} style={{ color: MUTED }}>Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
