import Image from 'next/image';
import Link from 'next/link';
import { Wrench, ArrowRight, Check, Star, Zap, Droplets, Wind, Phone, MapPin, ChevronDown, Shield, Clock, AlertCircle } from 'lucide-react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';

const SERVICES = [
  { icon: Droplets, title: 'Plumbing', items: ['Leak detection & repair', 'Water heater install & repair', 'Drain cleaning & hydro-jet', 'Full repipes & re-routing', 'Sewer line inspection', 'Outdoor irrigation'], price: 'From $89' },
  { icon: Zap, title: 'Electrical', items: ['Panel upgrades & replacements', 'Circuit installation', 'Outlet & switch replacement', 'Ceiling fan installation', 'EV charger installation', 'Whole-home generator hookup'], price: 'From $125' },
  { icon: Wind, title: 'HVAC', items: ['AC service & repair', 'Furnace repair & tune-up', 'New system installation', 'Duct cleaning & sealing', 'Thermostat upgrade', 'Seasonal maintenance plans'], price: 'From $95' },
  { icon: Wrench, title: 'General Repairs', items: ['Drywall patch & repair', 'Interior & exterior doors', 'Fixtures & faucet replacement', 'Tile & grout repair', 'Weatherstripping & caulking', 'Deck & fence repair'], price: 'From $75' },
];

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

export default function ValleyProHomeHome() {
  return (
    <>
      {/* EMERGENCY BANNER */}
      <div style={{ backgroundColor: GREEN }} className="py-3 px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
          <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
          <span className="text-white/80 text-xs uppercase tracking-widest font-bold">24/7 Emergency Service Available</span>
          <a href="tel:5553829100" className="font-black text-sm text-yellow-400 inline-flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> (555) 382-9100</a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(27,67,50,0.97) 0%, rgba(27,67,50,0.7) 50%, rgba(27,67,50,0.2) 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: GOLD }}>Phoenix Metro · Licensed · Bonded · Insured</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">Home repairs done<br />right. Every time.</h1>
          <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">Plumbing, electrical, HVAC, and general repairs for Phoenix area homeowners. Licensed contractors, upfront flat-rate pricing, and a 2-year workmanship warranty on every job.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-8 py-4 text-black" style={{ backgroundColor: GOLD }}>Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:5553829100" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4"><Phone className="w-4 h-4" /> 24/7 Emergency Line</a>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/15 text-white/55 font-bold uppercase tracking-widest text-[11px] px-8 py-4">All Services</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: GREEN }} className="py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['18+ Years', 'in Business'], ['Licensed', 'All Trades'], ['2-Year', 'Warranty'], ['24/7', 'Emergency']].map(([v, l], i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white mb-1">{v}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: LIGHT }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GREEN }}>Services</div>
            <h2 className="text-4xl font-bold mb-3" style={{ color: GREEN }}>What We Fix & Install</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">One call covers it all. Plumbing, electrical, HVAC, and general repairs — no need to coordinate multiple contractors.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, title, items, price }, i) => (
              <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: GOLD }}>
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.5} />
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 text-white" style={{ backgroundColor: GREEN }}>{price}</span>
                </div>
                <h3 className="font-bold text-sm mb-4" style={{ color: GREEN }}>{title}</h3>
                <ul className="space-y-1.5">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-400"><Check className="w-3 h-3 shrink-0" style={{ color: GOLD }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: GREEN }}>View All Services <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GREEN }}>Our Process</div>
            <h2 className="text-4xl font-bold" style={{ color: GREEN }}>Simple. Honest. Guaranteed.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-white" style={{ backgroundColor: GREEN }}>{n}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: GREEN }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: GREEN }}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: GOLD }}>Why Choose Us</div>
            <h2 className="text-4xl font-bold text-white mb-6">No surprises. No callbacks. Just quality.</h2>
            <p className="text-white/50 leading-relaxed mb-8">Founded in 2006 by master plumber Hector Morales, Valley ProHome has become Phoenix metro's most trusted multi-trade contractor. We grew by doing right by our neighbors — not by cutting corners.</p>
            <div className="space-y-3 mb-8">
              {["Free in-home estimates — no service call fee", "Flat-rate pricing before we start any work", "2-year workmanship warranty on all jobs", "Text updates when your tech is on the way", "Senior & veteran discounts available", "ProHome Care Plan — annual maintenance from $199"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50"><Check className="w-4 h-4 shrink-0" style={{ color: GOLD }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: GOLD, borderColor: GOLD }}>About Our Team <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GREEN }}>Customer Reviews</div>
            <h2 className="text-4xl font-bold mb-2" style={{ color: GREEN }}>4.9 Stars · 600+ Google Reviews</h2>
            <div className="flex justify-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />)}</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 border-l-4" style={{ borderLeftColor: GOLD }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: GREEN }}>— {r.author} <span className="text-gray-400 font-normal">· {r.service}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GREEN }}>FAQ</div>
            <h2 className="text-4xl font-bold" style={{ color: GREEN }}>Homeowner Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: GREEN }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: GOLD }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: GREEN }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Service Area</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span>Phoenix Metro Area<br />Scottsdale · Tempe · Mesa<br />Chandler · Gilbert · Glendale</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Office Hours</div>
            <div className="text-white/65 text-sm space-y-1">
              <div>Mon – Fri: 7:00am – 7:00pm</div>
              <div>Saturday: 8:00am – 5:00pm</div>
              <div className="font-bold mt-2" style={{ color: GOLD }}>Emergency line 24/7/365</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>Contact Us</div>
            <a href="tel:5553829100" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: GOLD }} /> (555) 382-9100</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-7 py-3 text-black" style={{ backgroundColor: GOLD }}>Get Free Estimate <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: GOLD }} className="py-16 px-6 text-center">
        <Shield className="w-8 h-8 mx-auto mb-5" style={{ color: GREEN }} strokeWidth={1.5} />
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A0F00' }}>Free estimate. Same-week scheduling. 2-year warranty.</h2>
        <p className="mb-8 text-sm font-medium max-w-lg mx-auto" style={{ color: 'rgba(26,15,0,0.65)' }}>Phoenix metro. Emergency service 24/7/365. Licensed on every trade. Senior & veteran discounts available.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4 text-white" style={{ backgroundColor: GREEN }}>Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:5553829100" className="inline-flex items-center gap-2 border-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ borderColor: GREEN, color: GREEN }}><Phone className="w-4 h-4" /> Call 24/7 Emergency</a>
        </div>
      </section>
    </>
  );
}
