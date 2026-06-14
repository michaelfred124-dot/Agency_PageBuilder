'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Wrench, ArrowRight, Check, Star, Zap, Droplets, Wind, Phone, MapPin, ChevronDown, Shield, Clock, AlertCircle, Hammer } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';
const WHITE = '#FFFFFF';
const DARK = '#111111';

type ServiceKey = 'Plumbing' | 'Electrical' | 'HVAC' | 'General Repairs';

const SERVICES: Record<ServiceKey, { from: string; icon: React.ElementType; items: string[]; detail: string }> = {
  Plumbing: {
    from: '$89',
    icon: Droplets,
    items: ['Leak repair', 'Drain clearing', 'Water heater', 'Fixture install'],
    detail: 'From emergency leak repair to full repiping — our licensed plumbers handle it all. Flat-rate pricing, no surprise charges. Same-day emergency service available 24/7.',
  },
  Electrical: {
    from: '$125',
    icon: Zap,
    items: ['Outlet repair', 'Panel upgrade', 'Lighting install', 'GFCI install'],
    detail: 'Licensed journeyman and master electricians. Panel upgrades, outlet repairs, EV charger installation, and whole-home electrical safety inspections.',
  },
  HVAC: {
    from: '$95',
    icon: Wind,
    items: ['AC tune-up', 'Furnace repair', 'Duct cleaning', 'Filter change'],
    detail: 'Stay cool in Phoenix summers. EPA-certified technicians service all major brands. New system installation, seasonal maintenance, and emergency breakdowns.',
  },
  'General Repairs': {
    from: '$75',
    icon: Hammer,
    items: ['Drywall patch', 'Door/window fix', 'Caulking & sealing', 'Paint touch-up'],
    detail: 'One call for all the little jobs around the house. Drywall, doors, fixtures, tile — our handyman team handles it right the first time with a 2-year warranty.',
  },
};

const SERVICE_KEYS = Object.keys(SERVICES) as ServiceKey[];

const STEPS = [
  { n: '1', title: 'Call or Book Online', desc: 'Same-day service for emergencies. Schedule for non-urgent work in 2–4 business days.' },
  { n: '2', title: 'Free In-Home Estimate', desc: 'A licensed technician arrives on time, assesses the job, and gives you an upfront flat-rate quote.' },
  { n: '3', title: 'You Approve, We Work', desc: 'No work starts without your sign-off. We complete the job right, clean up completely, and test everything.' },
  { n: '4', title: '2-Year Warranty', desc: 'Every job is backed by our 2-year workmanship warranty. We stand behind our work, always.' },
];

const REVIEWS = [
  { text: "Pipe burst at 11pm. Called Valley ProHome and Hector was there within 45 minutes. Fixed it, checked the whole system, and cleaned up completely.", author: "Mike S.", service: "Emergency Plumbing" },
  { text: "Needed a panel upgrade for my home office. Dave explained every step, the work passed inspection first time. Respectful of my home and left it spotless.", author: "Rob T.", service: "Electrical" },
  { text: "AC died in July. ProHome had a tech out same afternoon and a new unit installed the next morning. Life savers in the Phoenix heat.", author: "Maria G.", service: "HVAC" },
];

const FAQS = [
  { q: "Do you really offer 24/7 emergency service?", a: "Yes. Our emergency line is staffed around the clock, 365 days a year including holidays. Emergency calls for active water leaks, no heat in winter, and electrical hazards are dispatched within 1–2 hours. Emergency rates apply after hours, and we tell you upfront before dispatching." },
  { q: "How does your flat-rate pricing work?", a: "We quote the full job price upfront — parts and labor combined — before any work starts. You know exactly what you will pay. No per-hour billing. No surprise material markups. If the job takes longer than expected, that is our problem, not yours." },
  { q: "Are your technicians licensed and insured?", a: "Yes. All of our plumbers hold Arizona State plumbing licenses. Our electricians are licensed journeymen or masters. HVAC technicians are EPA 608 certified. We carry $2 million in liability insurance and workers comp on every job." },
  { q: "What areas of the Phoenix metro do you serve?", a: "We serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, and surrounding communities. If your city is not listed, call us — we likely cover it." },
  { q: "What does the 2-year workmanship warranty cover?", a: "Our warranty covers all labor and parts we supply for 2 years from the job completion date. If anything we installed or repaired fails due to workmanship or a defective part we sourced, we come back and fix it at no charge. This is in addition to any manufacturer warranty on equipment." },
  { q: "Can I get a quote without a technician visiting?", a: "For simple jobs (outlet replacement, faucet install, minor drywall patch), we can often give a firm estimate over the phone. For plumbing, HVAC, and electrical work, we prefer to see the situation first to give you an accurate quote — the in-home estimate is always free." },
  { q: "Do you offer maintenance plans?", a: "Yes. Our ProHome Care Plan covers an annual HVAC tune-up, plumbing inspection, and electrical safety check. Members also receive priority scheduling, 10% off all service calls, and free emergency dispatch fees. Plans start at $199/year." },
];

const SERVICE_AREAS = ['Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Avondale', 'Goodyear', 'Queen Creek'];

export default function ValleyProHomeHome() {
  const [selected, setSelected] = useState<ServiceKey>('Plumbing');
  const selectedService = SERVICES[selected];
  const SelectedIcon = selectedService.icon;

  return (
    <>
      {/* EMERGENCY STRIP */}
      <div style={{ backgroundColor: GREEN }} className="py-2.5 px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
          <AlertCircle className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
          <span
            className="text-white/80 text-xs uppercase tracking-widest font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            24/7 Emergency Line: (602) 555-0492 — Same-Day Service Available
          </span>
          <a
            href="tel:6025550492"
            className="font-black text-sm inline-flex items-center gap-1.5"
            style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
          >
            <Phone className="w-3.5 h-3.5" /> (602) 555-0492
          </a>
        </div>
      </div>

      {/* HERO — asymmetric split */}
      <section
        className="min-h-screen flex flex-col md:grid"
        style={{ gridTemplateColumns: '50% 50%' }}
      >
        {/* Left: WHITE text panel */}
        <div
          className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-20 md:py-0 order-2 md:order-1"
          style={{ backgroundColor: WHITE }}
        >
          <div
            className="text-xs font-bold uppercase tracking-[0.35em] mb-4"
            style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
          >
            Valley ProHome
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6"
            style={{ color: DARK, fontFamily: 'var(--font-display)' }}
          >
            Phoenix's trusted home repair team.
          </h1>
          <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: GREEN }} />
          <p
            className="text-base leading-relaxed mb-8 max-w-md"
            style={{ color: '#555', fontFamily: 'var(--font-body)' }}
          >
            Plumbing, electrical, HVAC, and general repairs. Licensed, insured, and available when you need us.
          </p>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['Lic & Insured', '18+ Years', 'Flat-Rate Pricing'].map(badge => (
              <span
                key={badge}
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: GREEN + '12',
                  color: GREEN,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white text-sm font-black uppercase tracking-widest px-8 py-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN, fontFamily: 'var(--font-display)' }}
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:6025550492"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest"
              style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
            >
              <Phone className="w-4 h-4" /> Call Now: (602) 555-0492
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative order-1 md:order-2" style={{ minHeight: '45vh' }}>
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
            alt="Valley ProHome technician at work"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
      </section>

      {/* TRUST STATS */}
      <section style={{ backgroundColor: GREEN }} className="py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['18+ Years', 'in Business'], ['Licensed', 'All Trades'], ['Same-Day', 'Service Avail.'], ['100%', 'Guarantee']].map(([v, l], i) => (
            <div key={i}>
              <div
                className="text-3xl font-black text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {v}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE ELEMENT — Service Estimate Selector */}
      <section style={{ backgroundColor: LIGHT }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
            >
              Services
            </div>
            <h2
              className="text-4xl font-black mb-3"
              style={{ color: DARK, fontFamily: 'var(--font-display)' }}
            >
              What's Your Project?
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Select a service category to see common work, starting prices, and get a quote.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {SERVICE_KEYS.map(key => {
              const svc = SERVICES[key];
              const Icon = svc.icon;
              const isActive = selected === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className="p-6 text-left rounded-2xl transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: isActive ? GREEN : WHITE,
                    outline: isActive ? `2px solid ${GREEN}` : `1px solid rgba(0,0,0,0.08)`,
                    color: isActive ? WHITE : DARK,
                  }}
                >
                  <Icon
                    className="w-7 h-7 mb-4"
                    style={{ color: isActive ? GOLD : GREEN }}
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                  <div
                    className="font-black text-sm mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: isActive ? WHITE : DARK }}
                  >
                    {key}
                  </div>
                  <div
                    className="text-base font-black"
                    style={{ color: isActive ? GOLD : GOLD }}
                  >
                    From {svc.from}
                  </div>
                  <ul className="mt-3 space-y-1">
                    {svc.items.map(item => (
                      <li
                        key={item}
                        className="text-[11px] flex items-center gap-1.5"
                        style={{ color: isActive ? 'rgba(255,255,255,0.75)' : '#888', fontFamily: 'var(--font-body)' }}
                      >
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: isActive ? GOLD : '#888' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Expanded panel for selected service */}
          <div
            className="rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start transition-all duration-300"
            style={{ backgroundColor: GREEN }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <SelectedIcon className="w-6 h-6" style={{ color: GOLD }} />
                <h3
                  className="font-black text-white text-xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {selected}
                </h3>
                <span
                  className="ml-auto font-black text-2xl"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                >
                  From {selectedService.from}
                </span>
              </div>
              <p
                className="text-white/70 text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {selectedService.detail}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedService.items.map(item => (
                  <span
                    key={item}
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.75)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-48 shrink-0">
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:6025550492"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold border border-white/25 text-white/75 px-6 py-3.5 rounded-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
            >
              Our Process
            </div>
            <h2
              className="text-4xl font-black"
              style={{ color: DARK, fontFamily: 'var(--font-display)' }}
            >
              Simple. Honest. Guaranteed.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg text-white"
                  style={{ backgroundColor: GREEN, fontFamily: 'var(--font-display)' }}
                >
                  {n}
                </div>
                <h3
                  className="font-black text-sm mb-2"
                  style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Customer Reviews
            </div>
            <h2
              className="text-4xl font-black text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              4.9 Stars · 600+ Google Reviews
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-7 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="text-white/75 italic text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  "{r.text}"
                </p>
                <div
                  className="font-black text-xs"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                >
                  — {r.author} <span className="text-white/35 font-normal">· {r.service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/reviews`}
              className="text-xs font-black uppercase tracking-widest"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCARE PLAN BAND */}
      <section
        className="py-16 px-6 md:px-12"
        style={{ backgroundColor: GOLD }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-[0.4em] mb-3"
              style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
            >
              Annual Maintenance
            </div>
            <h2
              className="text-3xl md:text-4xl font-black mb-3"
              style={{ color: DARK, fontFamily: 'var(--font-display)' }}
            >
              ProHome Care Plan — $199/year
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ color: 'rgba(17,17,17,0.7)', fontFamily: 'var(--font-body)' }}
            >
              Annual HVAC tune-up, plumbing inspection, and electrical safety check — plus priority scheduling, 10% off all service calls, and free emergency dispatch fees.
            </p>
          </div>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-lg whitespace-nowrap shrink-0"
            style={{ backgroundColor: GREEN, fontFamily: 'var(--font-display)' }}
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
            >
              FAQ
            </div>
            <h2
              className="text-4xl font-black"
              style={{ color: DARK, fontFamily: 'var(--font-display)' }}
            >
              Homeowner Questions
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4 list-none">
                  <span
                    className="font-black text-sm leading-snug"
                    style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: GOLD }}
                  />
                </summary>
                <p
                  className="mt-4 text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: GREEN, fontFamily: 'var(--font-display)' }}
            >
              Coverage
            </div>
            <h2
              className="text-3xl font-black"
              style={{ color: DARK, fontFamily: 'var(--font-display)' }}
            >
              Phoenix Metro Service Area
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map(area => (
              <span
                key={area}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border"
                style={{
                  borderColor: GREEN + '30',
                  color: GREEN,
                  backgroundColor: WHITE,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: GREEN }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-widest mb-3"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Service Area
            </div>
            <div className="flex items-start gap-2 text-white/65 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span>Phoenix Metro Area<br />Scottsdale · Tempe · Mesa<br />Chandler · Gilbert · Glendale</span>
            </div>
          </div>
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-widest mb-3"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Office Hours
            </div>
            <div className="text-white/65 text-sm space-y-1" style={{ fontFamily: 'var(--font-body)' }}>
              <div>Mon – Fri: 7:00am – 7:00pm</div>
              <div>Saturday: 8:00am – 5:00pm</div>
              <div className="font-bold mt-2" style={{ color: GOLD }}>Emergency line 24/7/365</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="text-[10px] font-black uppercase tracking-widest mb-1"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Contact Us
            </div>
            <a
              href="tel:6025550492"
              className="inline-flex items-center gap-2 text-white font-black text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Phone className="w-4 h-4" style={{ color: GOLD }} /> (602) 555-0492
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs px-7 py-3 text-white rounded-lg"
              style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
            >
              Get Free Estimate <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: GREEN }} className="py-20 px-6 text-center border-t border-white/10">
        <Shield className="w-8 h-8 mx-auto mb-6" style={{ color: GOLD }} strokeWidth={1.5} />
        <h2
          className="text-3xl md:text-4xl font-black text-white mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Free estimate. Same-week scheduling. 2-year warranty.
        </h2>
        <p
          className="mb-10 text-sm max-w-lg mx-auto"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
        >
          Phoenix metro. Emergency service 24/7/365. Licensed on every trade. Senior & veteran discounts available.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs px-10 py-4 rounded-lg"
            style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
          >
            Get Free Estimate <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:6025550492"
            className="inline-flex items-center gap-2 border-2 border-white/25 text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <Phone className="w-4 h-4" /> Call 24/7 Emergency
          </a>
        </div>
      </section>
    </>
  );
}
