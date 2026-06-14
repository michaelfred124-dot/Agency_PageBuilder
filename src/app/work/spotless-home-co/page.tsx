import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check, Star, Shield, Clock, Leaf, Phone, MapPin, ChevronDown, Home, Users } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WHITE = '#FFFFFF';
const DARK = '#0F2027';

const STEPS = [
  { n: '1', title: 'Get an Instant Quote', desc: 'Tell us your home size and cleaning type. We give you an exact price in 60 seconds.' },
  { n: '2', title: 'Book Online in Minutes', desc: 'Choose your date, time, and frequency. No deposit required. Easy to modify anytime.' },
  { n: '3', title: 'We Show Up, You Relax', desc: 'Your assigned team arrives on time, cleans thoroughly, and locks up securely.' },
  { n: '4', title: 'Come Home to Clean', desc: 'If anything does not meet your standard, we return and fix it within 24 hours. Guaranteed.' },
];

const REVIEWS = [
  { text: "Maria and David run an incredible operation. My house has never been cleaner. The same team comes every time and I have never had to ask for something twice.", author: "Jennifer M.", freq: "Bi-Weekly", code: "Used SPOTLESS15!" },
  { text: "We moved out of our rental and needed it spotless for inspection. Spotless Home did a deep clean and we got our full deposit back — the landlord was amazed.", author: "Brian T.", freq: "Move-Out", code: "Used SPOTLESS15!" },
  { text: "I have three short-term rentals and Spotless handles all of them. My review scores have gone up since I started with them.", author: "Sandra K.", freq: "Airbnb Turnover", code: "Used SPOTLESS15!" },
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

const SERVICE_AREAS = ['Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Englewood', 'Littleton', 'Centennial', 'Parker', 'Thornton', 'Broomfield', 'Castle Rock'];

// Comparison table data
type Tier = 'Standard' | 'Deep' | 'Move In-Out' | 'Airbnb';
const TIERS: Tier[] = ['Standard', 'Deep', 'Move In-Out', 'Airbnb'];
const TIER_PRICES: Record<Tier, string> = {
  'Standard': '$130+',
  'Deep': '$250+',
  'Move In-Out': '$300+',
  'Airbnb': '$100+',
};
const TASKS: { label: string; tiers: Record<Tier, boolean> }[] = [
  { label: 'Dusting surfaces',       tiers: { Standard: true,  Deep: true,  'Move In-Out': true,  Airbnb: true  } },
  { label: 'Vacuuming all rooms',    tiers: { Standard: true,  Deep: true,  'Move In-Out': true,  Airbnb: true  } },
  { label: 'Mopping floors',         tiers: { Standard: true,  Deep: true,  'Move In-Out': true,  Airbnb: true  } },
  { label: 'Bathroom sanitization',  tiers: { Standard: true,  Deep: true,  'Move In-Out': true,  Airbnb: true  } },
  { label: 'Kitchen deep clean',     tiers: { Standard: true,  Deep: true,  'Move In-Out': true,  Airbnb: true  } },
  { label: 'Inside oven / fridge',   tiers: { Standard: false, Deep: true,  'Move In-Out': true,  Airbnb: false } },
  { label: 'Baseboards & trim',      tiers: { Standard: false, Deep: true,  'Move In-Out': true,  Airbnb: false } },
  { label: 'Window sills',           tiers: { Standard: false, Deep: true,  'Move In-Out': true,  Airbnb: true  } },
  { label: 'Inside cabinets',        tiers: { Standard: false, Deep: false, 'Move In-Out': true,  Airbnb: false } },
  { label: 'Same-day availability',  tiers: { Standard: false, Deep: false, 'Move In-Out': false, Airbnb: true  } },
];

export default function SpotlessHome() {
  return (
    <>
      {/* HERO — Bento-block grid */}
      <section className="w-full px-4 pt-4 pb-0" style={{ backgroundColor: SKY }}>
        <div
          className="max-w-7xl mx-auto grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto' }}
        >
          {/* Block 1: Forest dark panel (rows 1-2) */}
          <div
            className="flex flex-col justify-between p-10 rounded-2xl row-span-2"
            style={{ backgroundColor: FOREST, minHeight: '580px' }}
          >
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-5 h-5 text-teal-300" />
                <span className="text-white/60 text-xs font-black uppercase tracking-widest">Spotless Home Co.</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                A cleaner home,<br />guaranteed.
              </h1>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Professional, fully insured home cleaning for the Denver metro. Background-checked teams. Eco-friendly options available.
              </p>
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center gap-2 text-white text-sm font-black uppercase tracking-widest px-7 py-3.5 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: TEAL }}
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 mt-10">
              {[
                { icon: Shield, label: 'Fully Insured & Bonded' },
                { icon: Users, label: 'Background-Checked' },
                { icon: Check, label: 'Satisfaction Guaranteed' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 2: Clean home photo (col 2, row 1) */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '280px' }}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
              alt="Clean modern home interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>

          {/* Block 3: TEAL stat block (col 3, row 1) */}
          <div
            className="flex flex-col justify-center items-center text-center p-8 rounded-2xl"
            style={{ backgroundColor: TEAL }}
          >
            <div className="text-6xl lg:text-7xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              2,800+
            </div>
            <div className="text-white/80 text-sm font-black uppercase tracking-widest mb-6">Homes Cleaned</div>
            <div className="w-10 h-px bg-white/30 mb-6" />
            <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>4.9★</div>
            <div className="text-white/70 text-xs font-bold uppercase tracking-wider">480+ Google Reviews</div>
          </div>

          {/* Block 4: Photo/CTA (col 2-3, row 2) */}
          <div
            className="relative rounded-2xl overflow-hidden col-span-2 flex items-end"
            style={{ minHeight: '280px', backgroundColor: DARK }}
          >
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94aca55f7?q=80&w=2074&auto=format&fit=crop"
              alt="Professional cleaning team"
              fill
              className="object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
              <div>
                <div className="text-white font-black text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  Same-week booking · Denver metro
                </div>
                <div className="text-white/55 text-sm">No deposit required. Easy to modify or cancel.</div>
              </div>
              <a
                href="tel:7205551847"
                className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest px-6 py-3 rounded-lg border-2 border-white/30 whitespace-nowrap hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4" /> (720) 555-1847
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: 'Fully Insured', sub: '$1M liability coverage' },
            { icon: Users, label: 'Background-Checked', sub: 'Every team member' },
            { icon: Leaf, label: 'Eco Products', sub: 'Available on request' },
            { icon: Home, label: 'Same Dedicated Team', sub: 'Every recurring visit' },
          ].map(({ icon: Icon, label, sub }, i) => (
            <div key={i} className="text-center p-6 rounded-2xl" style={{ backgroundColor: SKY }}>
              <Icon className="w-6 h-6 mx-auto mb-3" style={{ color: TEAL }} />
              <div className="font-black text-sm mb-1" style={{ color: FOREST }}>{label}</div>
              <div className="text-[11px] text-gray-400">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE ELEMENT — Service Comparison Table */}
      <section style={{ backgroundColor: SKY }} className="py-24 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: TEAL }}
            >
              Services & Pricing
            </div>
            <h2
              className="text-4xl font-black mb-3"
              style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
            >
              What Each Clean Includes
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Transparent pricing. No surprise fees. Every service backed by our 24-hour guarantee.
            </p>
          </div>

          {/* Scrollable wrapper on mobile */}
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full min-w-[600px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              {/* Sticky-style header */}
              <thead>
                <tr>
                  <th
                    className="text-left p-4 text-xs font-black uppercase tracking-widest bg-white border-b border-gray-100"
                    style={{ color: FOREST, width: '36%' }}
                  >
                    Task
                  </th>
                  {TIERS.map(tier => (
                    <th
                      key={tier}
                      className="p-4 text-center border-b border-gray-100 bg-white"
                      style={{ width: '16%' }}
                    >
                      <div className="text-xs font-black uppercase tracking-wider" style={{ color: FOREST }}>
                        {tier}
                      </div>
                      <div className="text-lg font-black mt-1" style={{ color: TEAL }}>
                        {TIER_PRICES[tier]}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TASKS.map((task, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? WHITE : SKY }}>
                    <td
                      className="p-4 text-sm font-semibold border-b border-gray-50"
                      style={{ color: FOREST }}
                    >
                      {task.label}
                    </td>
                    {TIERS.map(tier => (
                      <td key={tier} className="p-4 text-center border-b border-gray-50">
                        {task.tiers[tier] ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: TEAL + '20' }}>
                            <Check className="w-3.5 h-3.5" style={{ color: TEAL }} />
                          </span>
                        ) : (
                          <span className="text-gray-300 text-lg font-light">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Pricing row */}
                <tr style={{ backgroundColor: FOREST }}>
                  <td className="p-4 text-sm font-black text-white uppercase tracking-wider rounded-bl-2xl">
                    Starting Price
                  </td>
                  {TIERS.map((tier, i) => (
                    <td
                      key={tier}
                      className={`p-4 text-center font-black text-base text-white ${i === TIERS.length - 1 ? 'rounded-br-2xl' : ''}`}
                    >
                      {TIER_PRICES[tier]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-lg"
              style={{ backgroundColor: TEAL }}
            >
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS — 4 steps on FOREST dark */}
      <section style={{ backgroundColor: FOREST }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-teal-300">How It Works</div>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Clean in 4 Simple Steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {STEPS.map(({ n, title, desc }, i) => (
              <div
                key={i}
                className="relative p-8 border-t-2"
                style={{ borderTopColor: i === 0 ? TEAL : 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-5xl font-black mb-4" style={{ color: TEAL + '40', fontFamily: 'var(--font-display)' }}>
                  {n}
                </div>
                <h3 className="font-black text-white text-sm mb-3">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: SKY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>
              Customer Reviews
            </div>
            <h2 className="text-4xl font-black mb-2" style={{ color: FOREST, fontFamily: 'var(--font-display)' }}>
              4.9 Stars · 480+ Reviews
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: TEAL }} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl relative">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-black text-xs mb-3" style={{ color: DARK }}>
                  — {r.author} <span className="text-gray-400 font-normal">· {r.freq}</span>
                </div>
                <span
                  className="inline-block text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: TEAL }}
                >
                  {r.code}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/reviews`}
              className="text-xs font-black uppercase tracking-widest"
              style={{ color: TEAL }}
            >
              Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>
              FAQ
            </div>
            <h2 className="text-4xl font-black" style={{ color: FOREST, fontFamily: 'var(--font-display)' }}>
              Common Questions
            </h2>
          </div>
          <div className="divide-y divide-teal-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4 list-none">
                  <span className="font-black text-sm leading-snug" style={{ color: FOREST }}>{q}</span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: TEAL }}
                  />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY SAME-DAY BANNER */}
      <section style={{ backgroundColor: TEAL }} className="py-10 px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div>
            <span className="text-white font-black text-lg md:text-2xl">Need it today?</span>
            <span className="text-white/80 text-base ml-3">Same-day service available.</span>
          </div>
          <a
            href="tel:7205551847"
            className="inline-flex items-center gap-2 bg-white font-black text-sm uppercase tracking-widest px-8 py-3 rounded-lg"
            style={{ color: FOREST }}
          >
            <Phone className="w-4 h-4" /> Call Now: (720) 555-1847
          </a>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-teal-300">Service Area</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Serving Denver Metro
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map(area => (
              <span
                key={area}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
              >
                {area}
              </span>
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
            <a href="tel:7205551847" className="inline-flex items-center gap-2 text-white font-black text-base">
              <Phone className="w-4 h-4 text-teal-400" /> (720) 555-1847
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs px-7 py-3 rounded-lg"
              style={{ backgroundColor: TEAL }}
            >
              Instant Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <Home className="w-8 h-8 text-white/50 mx-auto mb-5" strokeWidth={1.5} />
        <h2
          className="text-3xl font-black text-white mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Get a free instant quote in 60 seconds.
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm">
          No contracts. Easy online booking. 100% satisfaction guarantee. First-time clients save 15% with code{' '}
          <span className="font-black text-white">SPOTLESS15</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-lg"
            style={{ color: FOREST }}
          >
            Get My Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:7205551847"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-lg"
          >
            <Phone className="w-4 h-4" /> Call Us Today
          </a>
        </div>
      </section>
    </>
  );
}
