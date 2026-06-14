import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check, Star, Shield, Clock, Leaf, Phone, MapPin, ChevronDown, Home } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const PRICING = [
  { title: 'Standard Cleaning', price: 'From $130', freq: 'Weekly / Bi-Weekly / Monthly', desc: 'Regular maintenance cleaning for consistently clean, fresh homes.', includes: ['All living areas dusted & vacuumed', 'Bathrooms cleaned & sanitized', 'Kitchen surfaces & appliances', 'Floors mopped', 'Beds made (linens not changed)', 'Trash emptied'] },
  { title: 'Deep Cleaning', price: 'From $250', freq: 'One-Time or Quarterly', desc: 'Top-to-bottom scrub hitting everything standard cleaning does not reach.', includes: ['Everything in Standard', 'Inside oven & fridge cleaned', 'Baseboards & windowsills', 'Cabinet fronts & light fixtures', 'Interior windows', 'Behind & under furniture'] },
  { title: 'Move In / Move Out', price: 'From $300', freq: 'One-Time', desc: 'Landlord-approved checklist to ensure full deposit return and a fresh start.', includes: ['Full deep clean throughout', 'Inside all cabinets & drawers', 'Appliances inside & out', 'Blinds & window tracks', 'Grout & tile scrubbing', 'Garage sweep (on request)'] },
  { title: 'Airbnb Turnover', price: 'From $100', freq: 'Per Turnover', desc: 'Fast, reliable turnover between guests. Your Superhost rating starts with us.', includes: ['Full cleaning & reset', 'Linen changes (linens provided by host)', 'Restocking amenities checklist', 'Photo documentation on request', 'Priority scheduling', 'Same-day availability options'] },
];

const STEPS = [
  { n: '1', title: 'Get an Instant Quote', desc: 'Tell us your home size and cleaning type. We give you an exact price in 60 seconds.' },
  { n: '2', title: 'Book Online in Minutes', desc: 'Choose your date, time, and frequency. No deposit required. Easy to modify anytime.' },
  { n: '3', title: 'We Show Up, You Relax', desc: 'Your assigned team arrives on time, cleans thoroughly, and locks up securely.' },
  { n: '4', title: 'Come Home to Clean', desc: 'If anything does not meet your standard, we return and fix it within 24 hours. Guaranteed.' },
];

const REVIEWS = [
  { text: "Maria and David run an incredible operation. My house has never been cleaner. The same team comes every time and I have never had to ask for something twice.", author: "Jennifer M.", freq: "Bi-Weekly" },
  { text: "We moved out of our rental and needed it spotless for inspection. Spotless Home did a deep clean and we got our full deposit back — the landlord was amazed.", author: "Brian T.", freq: "Move-Out" },
  { text: "I have three short-term rentals and Spotless handles all of them. My review scores have gone up since I started with them.", author: "Sandra K.", freq: "Airbnb Turnover" },
];

const FAQS = [
  { q: "Are your cleaners background-checked and insured?", a: "Yes. Every member of our cleaning team goes through a comprehensive background check before their first day. We are fully bonded and carry general liability insurance up to $1 million per occurrence. You can request a copy of our certificate of insurance anytime." },
  { q: "Do you provide the cleaning products and supplies?", a: "Yes. We bring all products, equipment, and supplies. If you prefer eco-friendly or specific products (e.g., no fragrance for allergies), just let us know and we will accommodate. You can also leave your own products and we will use those instead." },
  { q: "Will I get the same team every visit?", a: "Yes, for recurring clients. We assign a dedicated 2-person team to your home and do our best to keep that team consistent. If a team member is unavailable, we notify you in advance and introduce the replacement." },
  { q: "What if I am not satisfied with the clean?", a: "We have a 24-hour re-clean guarantee. If any area does not meet our standard, contact us within 24 hours and we return to fix it at no charge. We have a 97% first-time satisfaction rate, but we stand behind every visit." },
  { q: "How do I let your team into my home?", a: "We offer several options: you can be home, leave a key with us (stored securely), provide a key code, or use a lockbox. Many of our recurring clients set up a lockbox for convenience. We never share access information." },
  { q: "What areas do you serve?", a: "We serve the full Denver metro area including Lakewood, Arvada, Westminster, Aurora, Littleton, Englewood, Centennial, and Parker. If your zip code is not listed, contact us — we may still be able to accommodate." },
  { q: "How much advance notice do I need to book?", a: "Standard bookings can often be scheduled within 2–4 days. Move-in/out and deep cleanings may need 5–7 days notice, especially on weekends. For Airbnb turnovers, we offer priority next-day scheduling for recurring clients." },
];

export default function SpotlessHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(19,78,74,0.97) 0%, rgba(19,78,74,0.65) 50%, rgba(19,78,74,0.15) 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px" style={{ backgroundColor: '#5EEAD4' }} /><span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/45">Metro Denver · Fully Insured · Family-Owned</span></div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">A spotless home.<br /><span style={{ color: '#5EEAD4' }}>Guaranteed.</span></h1>
          <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">Professional, fully insured home cleaning for the Denver metro. Background-checked, eco-friendly options, and a 100% satisfaction guarantee on every single visit.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: TEAL }}>Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:7205551847" className="inline-flex items-center gap-2 border border-white/30 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4"><Phone className="w-4 h-4" /> (720) 555-1847</a>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/15 text-white/55 font-black uppercase tracking-widest text-[11px] px-8 py-4">Pricing Menu</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: TEAL }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['2,800+ Homes Cleaned', '100% Satisfaction Guarantee', 'Fully Insured & Bonded', 'Background Checked'].map((s, i) => (
            <div key={i} className="text-white font-black text-sm uppercase tracking-widest">{s}</div>
          ))}
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{ backgroundColor: LIGHT }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Services & Pricing</div>
            <h2 className="text-4xl font-black mb-3" style={{ color: DARK }}>Transparent Pricing. No Surprises.</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Flat-rate pricing based on home size. Every quote is instant and exact. No fees added after the service.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {PRICING.map(({ title, price, freq, desc, includes }, i) => (
              <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: TEAL }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-black text-base mb-1" style={{ color: DARK }}>{title}</h3>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{freq}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black" style={{ color: TEAL }}>{price}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">{desc}</p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {includes.map((item, j) => <li key={j} className="flex items-center gap-1.5 text-xs text-gray-400"><Check className="w-3 h-3 shrink-0" style={{ color: TEAL }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: DARK }}>Full Pricing & Add-Ons <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>How It Works</div>
            <h2 className="text-4xl font-black" style={{ color: DARK }}>Clean in 4 Simple Steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg text-white" style={{ backgroundColor: TEAL }}>{n}</div>
                <h3 className="font-black text-sm mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1527515637462-cff94aca55f7?q=80&w=2074&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: DARK }}>
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-5 text-teal-400">Our Promise</div>
            <h2 className="text-4xl font-black text-white mb-6">Clean you can count on.</h2>
            <p className="text-white/45 leading-relaxed mb-8">Family-owned since 2017, Spotless Home Co was built on a simple promise: if you are not satisfied, we come back and make it right. No questions asked, no haggling.</p>
            <div className="space-y-3 mb-8">
              {["Same dedicated team every visit", "Flat-rate pricing — never a surprise", "Online booking in under 60 seconds", "Key safe storage & lockbox compatible", "Eco-friendly products on request", "First-time clients save 15% — use code SPOTLESS15"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/45"><Check className="w-4 h-4 shrink-0 text-teal-400" />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b pb-0.5 text-teal-400" style={{ borderColor: '#5EEAD4' }}>Meet Maria & David <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Customer Reviews</div>
            <h2 className="text-4xl font-black mb-2" style={{ color: DARK }}>4.9 Stars · 480+ Reviews</h2>
            <div className="flex justify-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: TEAL }} />)}</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: TEAL }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-black text-xs" style={{ color: DARK }}>— {r.author} <span className="text-gray-400 font-normal">· {r.freq}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-black uppercase tracking-widest" style={{ color: TEAL }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>FAQ</div>
            <h2 className="text-4xl font-black" style={{ color: DARK }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-teal-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-black text-sm leading-snug" style={{ color: DARK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: TEAL }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-3 text-teal-400">Service Area</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-teal-400" />
              <span>Denver Metro Area<br />Including Lakewood, Aurora,<br />Westminster, Centennial & more</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-3 text-teal-400">Hours</div>
            <div className="text-white/65 text-sm space-y-1">
              <div>Mon – Fri: 7:30am – 6:00pm</div>
              <div>Saturday: 8:00am – 4:00pm</div>
              <div className="text-white/30">Sunday: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-black uppercase tracking-widest mb-1 text-teal-400">Get a Quote</div>
            <a href="tel:7205551847" className="inline-flex items-center gap-2 text-white font-black text-base"><Phone className="w-4 h-4 text-teal-400" /> (720) 555-1847</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-7 py-3" style={{ backgroundColor: TEAL }}>Instant Free Quote <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <Home className="w-8 h-8 text-white/50 mx-auto mb-5" strokeWidth={1.5} />
        <h2 className="text-3xl font-black text-white mb-4">Get a free instant quote in 60 seconds.</h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">No contracts. Easy online booking. 100% satisfaction guarantee. First-time clients save 15% with code SPOTLESS15.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: DARK }}>Get My Free Quote <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:7205551847" className="inline-flex items-center gap-2 border-2 border-white text-white font-black uppercase tracking-widest text-[11px] px-10 py-4"><Phone className="w-4 h-4" /> Call Us Today</a>
        </div>
      </section>
    </>
  );
}
