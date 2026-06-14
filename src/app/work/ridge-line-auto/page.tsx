'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Wrench, ArrowRight, Check, Star, Phone, Shield, Car, Zap, Clock, MapPin, ChevronDown, Battery } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';
const SILVER = '#8C8C8C';
const CONCRETE = '#F5F5F5';

const displayFont = { fontFamily: 'var(--font-display)', fontWeight: 700 } as const;
const displayMed = { fontFamily: 'var(--font-display)', fontWeight: 600 } as const;
const displayNorm = { fontFamily: 'var(--font-display)', fontWeight: 400 } as const;
const bodyFont = { fontFamily: 'var(--font-body)', fontWeight: 400 } as const;
const bodyBold = { fontFamily: 'var(--font-body)', fontWeight: 700 } as const;

// ── Service checklist data ──
type ServiceEntry = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  price: string;
  includes: string[];
};

const SERVICE_LIST: ServiceEntry[] = [
  { icon: Wrench, title: 'Oil Change', price: 'From $29', includes: ['Synthetic oil', 'Filter replacement', '27-point inspection', 'Tire pressure check'] },
  { icon: Shield, title: 'Brake Service', price: 'From $149', includes: ['Pad replacement', 'Rotor inspection', 'Caliper check', 'Brake fluid top-off'] },
  { icon: Zap, title: 'Engine Diagnostics', price: 'From $89', includes: ['OBD-II scan', 'Check engine analysis', 'Written report', 'Estimate provided'] },
  { icon: Battery, title: 'Tire Services', price: 'From $25', includes: ['Rotation', 'Balance', 'Alignment check', 'Tread depth report'] },
  { icon: Car, title: 'Transmission', price: 'From $175', includes: ['Fluid flush', 'Filter change', 'Shift quality test', 'Leak inspection'] },
  { icon: Clock, title: 'AC & Heating', price: 'From $95', includes: ['Refrigerant check', 'Compressor test', 'Cabin filter', 'Performance test'] },
];

function ServiceChecklist() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {SERVICE_LIST.map(({ icon: Icon, title, price, includes }, i) => (
        <div
          key={i}
          className="border border-gray-200 overflow-hidden"
        >
          {/* Header row */}
          <button
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center gap-4">
              <Icon className="w-5 h-5 text-gray-300 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-base" style={{ ...displayMed, color: CHARCOAL }}>{title}</div>
                <div className="text-sm" style={{ color: RED, ...displayNorm }}>{price}</div>
              </div>
            </div>
            <div
              className="text-[10px] uppercase tracking-widest flex items-center gap-1 shrink-0"
              style={{ color: open === i ? RED : SILVER, ...displayNorm }}
            >
              Details <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Expandable includes */}
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '200px' : '0px' }}
          >
            <ul className="px-5 pb-5 pt-1 space-y-2 border-t border-gray-100">
              {includes.map((item, j) => (
                <li key={j} className="flex items-center gap-2.5 text-sm text-gray-500" style={bodyFont}>
                  <Check className="w-3.5 h-3.5 shrink-0" style={{ color: RED }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Static content ──
const STATS = [
  { v: '18 Years', l: 'Serving Denver' },
  { v: '14,000+', l: 'Vehicles Serviced' },
  { v: 'ASE', l: 'Certified Technicians' },
  { v: '24-Mo', l: 'Warranty on Repairs' },
];

const TRUST_POINTS = [
  { icon: Shield, title: 'Flat-Rate Pricing', desc: 'You get a firm price before any work starts. No line items added after the fact. No surprises.' },
  { icon: Zap, title: 'Digital Inspection', desc: 'We send a 50-point inspection report to your phone with photos before touching anything.' },
  { icon: Check, title: 'No Upsells', desc: 'We only recommend what your car actually needs. If it can wait, we say so — and put it in writing.' },
  { icon: Wrench, title: '24-Month Warranty', desc: 'All major repairs backed by our 24-month / 24,000-mile parts and labor warranty.' },
];

const REVIEWS = [
  { text: "Rick and his team are the only people I trust with my truck. Honest, fast, never push unnecessary repairs. 7 years and counting.", author: "Tony B.", service: "Transmission" },
  { text: "Brought in my car for a mystery noise two other shops could not diagnose. Ridge Line found it in 30 minutes. Fixed same day.", author: "Sarah M.", service: "Diagnostics" },
  { text: "Night and day difference from the dealer. Real deal — honest estimate, quick turnaround, and the repair held up perfectly.", author: "James H.", service: "Brakes" },
];

const FAQS = [
  { q: "Do I need an appointment or can I walk in?", a: "Both work. Walk-ins are welcome and we service most same-day. Scheduling online guarantees your preferred time and reduces wait. Oil changes often have no wait even for walk-ins." },
  { q: "How long does a typical repair take?", a: "Oil changes take 30–45 minutes. Brake jobs usually 1.5–2 hours. Most diagnostics are resolved same-day. Complex engine or transmission jobs may take 1–3 business days, and we provide loaner vehicles for those." },
  { q: "Do you work on all makes and models?", a: "Yes. We service all domestic and foreign vehicles — cars, trucks, SUVs, and vans. We carry parts for most common makes in stock and can source anything else quickly." },
  { q: "What is included in the digital inspection?", a: "Every vehicle gets a 50-point inspection at no extra charge. You receive a digital report via text or email with photos of any items needing attention, color-coded by urgency (good / monitor / needs attention)." },
  { q: "What warranty do repairs come with?", a: "Most repairs are covered by our 24-month / 24,000-mile warranty on both parts and labor. Oil changes are excluded, but tires, brakes, and major mechanical work are all covered." },
  { q: "Do you offer financing or payment plans?", a: "Yes. We partner with Synchrony Car Care for 0% financing on repairs over $199. Apply in minutes at the counter. We also accept all major credit cards and contactless payment." },
  { q: "Can I get an estimate before bringing my car in?", a: "Absolutely. Call us with your year, make, model, and symptoms and we can give you a ballpark over the phone. For a firm quote, we offer free in-shop estimates with no obligation." },
];

export default function RidgeLineHome() {
  return (
    <>
      {/* ── HERO — split panel ── */}
      <section className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
        {/* LEFT: Charcoal text panel */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-16 order-2 lg:order-1"
          style={{ backgroundColor: CHARCOAL }}
        >
          {/* Small info line */}
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 mb-8" style={displayNorm}>
            Denver, CO · Est. 2006 · ASE Certified
          </p>

          {/* Big stacked headline */}
          <h1 className="text-6xl md:text-8xl text-white leading-none mb-6 uppercase" style={displayFont}>
            YOUR<br />CAR<br />DESERVES<br /><span style={{ color: RED }}>HONEST<br />WORK.</span>
          </h1>

          {/* Red rule */}
          <div className="mb-6" style={{ width: 60, height: 3, backgroundColor: RED }} />

          {/* Phone */}
          <p className="text-2xl text-white mb-3" style={displayFont}>(720) 555-0184</p>

          {/* Tagline */}
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-10" style={displayNorm}>
            No Hidden Fees · No Upsells · No BS
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-8 py-4"
              style={{ backgroundColor: RED, ...displayNorm }}
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border border-white text-white text-[11px] uppercase tracking-widest px-8 py-4"
              style={displayNorm}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="relative order-1 lg:order-2" style={{ minHeight: '40vh' }}>
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
            alt="Ridge Line Auto garage"
            fill
            className="object-cover"
            style={{ objectPosition: 'right center' }}
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,28,28,0.3) 0%, transparent 40%)' }} />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ v, l }, i) => (
            <div key={i}>
              <div className="text-3xl text-white leading-none mb-1" style={displayFont}>{v}</div>
              <div className="text-[10px] uppercase tracking-widest" style={{ color: RED, ...displayNorm }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE CHECKLIST ── */}
      <section style={{ backgroundColor: CONCRETE }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: RED, ...displayNorm }}>Services & Pricing</div>
            <h2 className="text-5xl uppercase mb-3" style={{ ...displayFont, color: CHARCOAL }}>What We Work On</h2>
            <p className="text-gray-400 text-sm" style={bodyFont}>Flat-rate pricing · No hidden fees · No work without your approval</p>
          </div>
          <ServiceChecklist />
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-10 py-4" style={{ backgroundColor: CHARCOAL, ...displayNorm }}>
              Full Pricing & Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY RIDGE LINE ── */}
      <section style={{ backgroundColor: CONCRETE }} className="py-20 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: RED, ...displayNorm }}>Why Ridge Line</div>
            <h2 className="text-4xl uppercase" style={{ ...displayFont, color: CHARCOAL }}>Honest Auto Repair. Our Guarantee.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_POINTS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-6">
                <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ backgroundColor: CHARCOAL }}>
                  <Icon className="w-5 h-5" style={{ color: RED }} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm uppercase mb-2" style={{ ...displayMed, color: CHARCOAL }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed" style={bodyFont}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS on CHARCOAL ── */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white uppercase mb-2" style={displayFont}>4.8 Stars · 350+ Google Reviews</h2>
            <div className="flex justify-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: RED }} />)}</div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white/5 p-7 border-l-4" style={{ borderLeftColor: RED }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />)}</div>
                <p className="text-white/65 text-sm italic leading-relaxed mb-4" style={bodyFont}>"{r.text}"</p>
                <div className="text-white text-xs uppercase tracking-widest" style={displayNorm}>— {r.author} · {r.service}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] uppercase tracking-widest" style={{ color: RED, ...displayNorm }}>
              Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ on WHITE ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: RED, ...displayNorm }}>FAQ</div>
            <h2 className="text-4xl uppercase" style={{ ...displayFont, color: CHARCOAL }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="text-sm leading-snug" style={{ ...bodyBold, color: CHARCOAL }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: RED }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed" style={bodyFont}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP — RED ── */}
      <section style={{ backgroundColor: RED }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Big phone number */}
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-3" style={displayNorm}>Call Us Directly</p>
            <a href="tel:7205550184" className="text-5xl md:text-6xl text-white" style={displayFont}>(720) 555-0184</a>
          </div>

          {/* Hours grid + address + CTA */}
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/20 pt-10">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 mb-3" style={displayNorm}>Location</div>
              <div className="flex items-start gap-2 text-white/80 text-sm" style={bodyFont}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white" />
                <span>2214 Industrial Blvd<br />Denver, CO 80211</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 mb-3" style={displayNorm}>Hours</div>
              <div className="grid grid-cols-2 gap-y-1 text-sm text-white/80" style={bodyFont}>
                <span>Mon – Fri</span><span>7am – 6pm</span>
                <span>Saturday</span><span>8am – 4pm</span>
                <span>Sunday</span><span className="text-white/40">Closed</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 bg-white text-[11px] uppercase tracking-widest px-8 py-4" style={{ color: CHARCOAL, ...displayNorm }}>
                Book Service Online <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`${BASE}/services`} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white text-[11px] uppercase tracking-widest px-8 py-4" style={displayNorm}>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
