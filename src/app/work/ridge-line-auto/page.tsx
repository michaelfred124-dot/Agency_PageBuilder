import Image from 'next/image';
import Link from 'next/link';
import { Wrench, ArrowRight, Check, Star, Phone, Shield, Car, Zap, Clock, MapPin, ChevronDown, Battery } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

const SVCS = [
  { icon: Wrench, title: 'Oil & Fluids', price: 'From $29', desc: 'Conventional, synthetic, and high-mileage options. Full fluid check included.', items: ['Conventional oil change', 'Synthetic oil change', 'Transmission fluid', 'Coolant flush'] },
  { icon: Shield, title: 'Brake Service', price: 'From $149', desc: 'Brake pad replacement, rotor resurfacing, caliper service, and brake fluid.', items: ['Brake pad replacement', 'Rotor resurfacing', 'Brake fluid flush', 'Caliper replacement'] },
  { icon: Car, title: 'Engine & Transmission', price: 'Free Estimate', desc: 'Full engine diagnostics, repair, and transmission service.', items: ['Check engine light', 'Timing belt/chain', 'Transmission service', 'Head gasket'] },
  { icon: Zap, title: 'Electrical Systems', price: 'From $75', desc: 'Battery, alternator, starter, and full electrical diagnostics.', items: ['Battery replacement', 'Alternator repair', 'Starter replacement', 'Fuse diagnosis'] },
  { icon: Battery, title: 'Tires & Alignment', price: 'From $79', desc: 'Tire mounting, balancing, rotation, and 4-wheel alignment.', items: ['Tire mounting & balance', 'Tire rotation', '4-wheel alignment', 'TPMS reset'] },
  { icon: Clock, title: 'Preventive Maintenance', price: 'From $49', desc: 'Scheduled maintenance to keep your vehicle running trouble-free.', items: ['30/60/90k service', 'Cabin air filter', 'Spark plug replacement', 'Fuel system cleaning'] },
];

const STEPS = [
  { n: '1', title: 'Drop Off or Schedule', desc: 'Book online, call, or just drive in. Most services can be done same day.' },
  { n: '2', title: 'Digital Inspection Report', desc: 'We send you a detailed inspection to your phone with photos — no surprises.' },
  { n: '3', title: 'You Approve, We Repair', desc: 'No work starts without your sign-off. Flat-rate pricing, nothing added later.' },
  { n: '4', title: 'Pickup & Drive Confident', desc: 'Most repairs come with our 24-month / 24,000-mile warranty.' },
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
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28,28,28,0.88)' }} />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: RED }} />
        <div className="relative z-10 px-12 md:px-20 max-w-2xl">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-5 text-white/35">ASE Certified · Denver, CO · Est. 2006</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 uppercase">Your Car.<br /><span style={{ color: RED }}>Our</span> Expertise.<br />Zero Runaround.</h1>
          <p className="text-white/55 text-base mb-10 leading-relaxed max-w-lg">Honest diagnostics. Fair pricing. Same-day service on most repairs. No upsells, no unnecessary work — just quality done right the first time.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: RED }}>Book Service Online <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:3035550247" className="inline-flex items-center gap-2 border border-white/25 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4"><Phone className="w-4 h-4" /> (303) 555-0247</a>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-black uppercase tracking-widest text-[11px] px-8 py-4">View All Services</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: RED }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['14,000+ Vehicles Serviced', 'ASE Certified Technicians', 'Same-Day Service Available', '24-Mo / 24K-Mi Warranty'].map((s, i) => (
            <div key={i} className="text-white font-black text-sm uppercase tracking-widest">{s}</div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Services & Pricing</div>
            <h2 className="text-4xl font-black uppercase" style={{ color: CHARCOAL }}>Everything Your Vehicle Needs</h2>
            <p className="text-gray-400 mt-3 text-sm">Flat-rate pricing · No hidden fees · No work without your approval</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SVCS.map(({ icon: Icon, title, price, desc, items }, i) => (
              <div key={i} className="bg-white p-7 border-b-4 hover:shadow-md transition-shadow" style={{ borderBottomColor: RED }}>
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-6 h-6 text-gray-300" strokeWidth={1.5} />
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 text-white" style={{ backgroundColor: RED }}>{price}</span>
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: CHARCOAL }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-400"><Check className="w-3 h-3 shrink-0" style={{ color: RED }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: CHARCOAL }}>Full Pricing & Services <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>The Process</div>
            <h2 className="text-4xl font-black text-white uppercase">Simple. Honest. Fast.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg text-white" style={{ backgroundColor: RED }}>{n}</div>
                <h3 className="font-black text-white text-sm mb-2">{title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RIDGE LINE */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: CHARCOAL }}>
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-5" style={{ color: RED }}>Why Ridge Line</div>
            <h2 className="text-4xl font-black text-white mb-7 uppercase leading-tight">Honest Auto Repair. Our Guarantee.</h2>
            <div className="space-y-3 mb-8">
              {["Digital inspection reports texted to your phone", "No repair starts without your written approval", "ASE-certified technician on every job", "24-month / 24,000-mile parts & labor warranty", "Loaner vehicles for repairs over 1 day", "Veteran & senior discount — ask us"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/55"><Check className="w-4 h-4 shrink-0" style={{ color: RED }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b pb-0.5" style={{ color: RED, borderColor: RED }}>Meet the Team <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1504222490345-c075b626eba5?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase mb-2" style={{ color: CHARCOAL }}>4.8 Stars · 350+ Google Reviews</h2>
            <div className="flex justify-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: RED }} />)}</div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: RED }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: RED }} />)}</div>
                <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-black text-xs uppercase tracking-widest text-gray-400">— {r.author} · {r.service}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-black uppercase tracking-widest" style={{ color: RED }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>FAQ</div>
            <h2 className="text-4xl font-black uppercase" style={{ color: CHARCOAL }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-black text-sm leading-snug" style={{ color: CHARCOAL }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: RED }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: RED }}>Location</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
              <span>4820 Tennyson St<br />Denver, CO 80212</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: RED }}>Hours</div>
            <div className="text-white/65 text-sm space-y-0.5">
              <div>Mon – Fri: 7:00am – 6:00pm</div>
              <div>Saturday: 8:00am – 4:00pm</div>
              <div className="text-white/30">Sunday: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:3035550247" className="inline-flex items-center gap-2 text-white font-black text-base"><Phone className="w-4 h-4" style={{ color: RED }} /> (303) 555-0247</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-7 py-3" style={{ backgroundColor: RED }}>Book Service Now <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: RED }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white uppercase mb-4">Get Back on the Road Today.</h2>
        <p className="text-white/75 mb-8 text-sm font-bold uppercase tracking-widest">Same-day service available Monday through Friday. No appointment needed.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: CHARCOAL }}>Book Service <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:3035550247" className="inline-flex items-center gap-2 border-2 border-white text-white font-black uppercase tracking-widest text-[11px] px-10 py-4"><Phone className="w-4 h-4" /> Call Now</a>
        </div>
      </section>
    </>
  );
}
