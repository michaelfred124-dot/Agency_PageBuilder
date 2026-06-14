import Image from 'next/image';
import Link from 'next/link';
import { Flower2, ArrowRight, Check, Star, Heart, Calendar, Camera, Phone, MapPin, ChevronDown, Mail } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';
const GOLD = '#C9A96E';
const IVORY = '#FAF7F2';

const PACKAGES = [
  { icon: Heart, title: 'Full Planning', tag: 'Most Comprehensive', price: 'Starting at $7,500', desc: 'From engagement to exit. We handle every detail, every vendor, every moment — leaving you fully present on your wedding day.', includes: ['Unlimited planning meetings', 'Complete vendor team curation', 'Budget tracking & management', 'Full design & styling direction', 'Day-of timeline creation', '14-hour wedding day coverage'] },
  { icon: Calendar, title: 'Partial Planning', tag: 'Already Started?', price: 'Starting at $4,000', desc: 'You have done some groundwork. We step in, assess what is in place, and fill the gaps with expertise and care.', includes: ['8 planning sessions', 'Vendor review & gap analysis', 'Budget audit & optimization', 'Design direction & refinement', 'Rehearsal dinner coordination', '12-hour wedding day coverage'] },
  { icon: Camera, title: 'Day-Of Coordination', tag: 'Already Planned?', price: 'Starting at $2,200', desc: 'Your planning is done. We execute your vision flawlessly so you can be fully present without a single worry.', includes: ['3 pre-event planning meetings', 'Complete vendor contact handoff', 'Venue & rehearsal walkthrough', 'Wedding day timeline creation', 'Ceremony & reception coordination', 'Emergency kit & problem solving'] },
  { icon: Flower2, title: 'Floral Design', tag: 'Standalone Service', price: 'Starting at $1,800', desc: 'Bespoke floral design that tells your story — from ceremony arches to cocktail hour installations.', includes: ['Design consultation & mood board', 'Budget allocation guidance', 'Personal & ceremony florals', 'Reception centerpieces', 'Cocktail installations', 'Setup, breakdown & sourcing'] },
];

const TIMELINE = [
  { phase: '12+ Months', title: 'Vision & Foundation', desc: 'Initial consultation, venue search, budget creation, and securing your vendor team.' },
  { phase: '8–12 Months', title: 'Design & Details', desc: 'Design direction, florals, catering, entertainment, and stationery decisions locked in.' },
  { phase: '3–6 Months', title: 'Coordination', desc: 'Final vendor confirmations, floor plans, timeline drafts, and ceremony rehearsal planning.' },
  { phase: 'The Day', title: 'Complete Execution', desc: 'We handle everything. You focus on marrying your person. We take care of the rest.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
];

const REVIEWS = [
  { text: "Hiring Golden Thread was the single best decision we made for our wedding. Sophia anticipated every detail before we even thought to ask. Absolutely perfect.", author: "Isabella & Ryan M.", type: "Full Planning" },
  { text: "From our first meeting I knew Sophia understood our vision. She brought ideas we never would have thought of and kept us at ease throughout the entire process.", author: "Chloe T.", type: "Partial Planning" },
  { text: "The floral arrangements were breathtaking. Our ceremony arch made every guest gasp. Truly gifted artists.", author: "Natalie W.", type: "Floral Design" },
];

const FAQS = [
  { q: "How many weddings do you take per year?", a: "We take no more than 20 weddings per year. This is intentional — it ensures that every couple gets our complete focus and energy. We are a boutique studio, not a volume operation. This limit fills up quickly, especially for spring and fall dates." },
  { q: "How far in advance should we book?", a: "For full planning, we recommend reaching out 12–18 months before your date. Partial planning 8–12 months. Day-of coordination can sometimes be booked 4–6 months out. Floral design bookings depend on season — fall and spring book very quickly." },
  { q: "Do you travel for destination weddings?", a: "Yes. We have planned weddings in the Lowcountry, Asheville mountains, Nashville, New Orleans, and several Caribbean destinations. Travel fees apply outside the Charleston metro area. We love destination work and bring the same level of care wherever we go." },
  { q: "Do you work with a specific set of vendors, or can we bring our own?", a: "We have a curated preferred vendor list of photographers, caterers, bands, and florists we trust completely. We can work with vendors you have already secured, though we ask to review contracts and meet with them to ensure alignment. We never require you to use our vendors." },
  { q: "What is your design philosophy?", a: "We believe in intentional, layered design — details that feel personal, not trendy. We do not replicate weddings. Your design is built from scratch based on your story, your tastes, and what feels authentic to you as a couple." },
  { q: "What happens if something goes wrong on the wedding day?", a: "This is our specialty. We keep a comprehensive emergency kit covering everything from needle and thread to steamer, stain remover, floral wire, and vendor backups. In 10 years, we have never had a wedding day emergency that the couple even knew about. We handle it." },
  { q: "How does the pricing structure work?", a: "All packages are custom quoted based on guest count, venue, complexity, and services required. The listed prices are starting minimums. We provide a transparent itemized proposal after your complimentary inquiry call. There are no hidden fees." },
];

export default function GoldenThreadHome() {
  return (
    <>
      {/* HERO — centered, full-height, overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          {/* Gradient overlay — radial vignette + gradient from bottom */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.35) 0%, rgba(26,26,26,0.55) 50%, rgba(26,26,26,0.80) 100%)' }}
          />
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Decorative gold HR */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 max-w-[60px] h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
              Charleston, SC · Est. 2015 · 350+ Weddings
            </span>
            <div className="flex-1 max-w-[60px] h-px" style={{ backgroundColor: GOLD }} />
          </div>

          {/* Giant headline */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              textShadow: '0 2px 40px rgba(0,0,0,0.3)',
            }}
          >
            Your love story,<br />beautifully told.
          </h1>

          {/* Thin gold separator */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px" style={{ backgroundColor: GOLD, opacity: 0.6 }} />
          </div>

          {/* Subtitle */}
          <p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontWeight: 300 }}
          >
            Bespoke wedding planning and floral design for couples who believe every detail matters. Charleston, Lowcountry, and beyond.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] px-8 py-4"
              style={{ backgroundColor: GOLD, color: DARK }}
            >
              Begin Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[10px] px-8 py-4"
            >
              Our Packages
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-8" style={{ backgroundColor: GOLD }} />
          <span className="text-white text-[8px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* SIGNATURE ELEMENT — horizontal planning timeline scroll */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: GOLD }}>The Process</p>
            <h2
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}
            >
              Your Wedding Planning Journey
            </h2>
          </div>

          {/* Desktop: horizontal scroll container; Mobile: vertical */}
          <div className="md:overflow-x-auto md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:min-w-max">
              {TIMELINE.map(({ phase, title, desc }, i) => (
                <div
                  key={i}
                  className="relative md:min-w-[300px] px-0 md:px-10 pb-10 md:pb-0 border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0"
                  style={{ borderColor: 'rgba(201,169,110,0.2)' }}
                >
                  {/* Large phase number — background decoration */}
                  <div
                    className="text-[96px] leading-none mb-2 select-none pointer-events-none"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      color: GOLD,
                      opacity: 0.12,
                      lineHeight: 0.9,
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.4em] mb-3"
                    style={{ color: GOLD }}
                  >
                    {phase}
                  </div>
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES — 2x2 grid on IVORY */}
      <section style={{ backgroundColor: IVORY }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SAGE }}>Services</p>
            <h2
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Planning Packages
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              All packages begin with a complimentary inquiry call. Every quote is custom-built to reflect your wedding scope and guest count.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {PACKAGES.map(({ icon: Icon, title, tag, price, desc, includes }, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100">
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-6 h-6" style={{ color: GOLD }} strokeWidth={1.5} />
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1"
                    style={{ backgroundColor: SAGE + '18', color: SAGE }}
                  >
                    {tag}
                  </span>
                </div>
                <h3
                  className="text-2xl mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
                >
                  {title}
                </h3>
                <div className="text-xs font-bold mb-3" style={{ color: GOLD }}>{price}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ backgroundColor: DARK }}
            >
              Inquire About Your Date <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO — [1fr 2fr 1fr] asymmetric grid, middle image taller */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SAGE }}>Portfolio</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Recent Celebrations
            </h2>
          </div>
          {/* Asymmetric 3-col grid: left and right are 1fr, center is 2fr and taller */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 items-start">
            <div className="relative overflow-hidden" style={{ height: '320px' }}>
              <Image src={GALLERY[0]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="relative overflow-hidden" style={{ height: '480px' }}>
              <Image src={GALLERY[1]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative overflow-hidden" style={{ height: '228px' }}>
                <Image src={GALLERY[2]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="relative overflow-hidden" style={{ height: '228px' }}>
                <Image src={GALLERY[3]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — BLUSH background, left GOLD border, Cormorant italic quote marks */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SAGE }}>Client Stories</p>
            <h2
              className="text-4xl md:text-5xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Moments We Treasure Together
            </h2>
            <p className="text-gray-400 text-sm">5.0 Stars · 160+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white p-8 border-l-4 relative"
                style={{ borderLeftColor: GOLD }}
              >
                {/* Cormorant italic large quote mark */}
                <div
                  className="text-7xl leading-none absolute top-4 left-6 select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: GOLD, opacity: 0.2 }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                <div className="flex mb-3 relative z-10">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />)}
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4 relative z-10">"{r.text}"</p>
                <div className="font-bold text-xs relative z-10" style={{ color: DARK }}>
                  — {r.author} <span className="text-gray-400 font-normal">· {r.type}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/reviews`}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
              style={{ color: DARK }}
            >
              Read All Reviews <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SAGE }}>FAQ</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Questions From Couples
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: BLUSH }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: DARK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: GOLD }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP — DARK background */}
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Studio</div>
            <div className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span>12 Prioleau St, Studio 3<br />Charleston, SC 29401</span>
            </div>
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Reach Us</div>
            <div className="space-y-2">
              <a href="tel:8435550629" className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} /> (843) 555-0629
              </a>
              <a href="mailto:hello@goldenthreadevents.com" className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: GOLD }} /> hello@goldenthreadevents.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>Check Availability</div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>We take only 20 weddings per year. Early inquiries are strongly encouraged.</p>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] px-7 py-3"
              style={{ backgroundColor: GOLD, color: DARK }}
            >
              Inquire About Your Date <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA — BLUSH background, centered, scarcity copy */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          {/* Gold accent line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 max-w-[40px] h-px" style={{ backgroundColor: GOLD }} />
            <Flower2 className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
            <div className="flex-1 max-w-[40px] h-px" style={{ backgroundColor: GOLD }} />
          </div>
          <h2
            className="text-4xl md:text-5xl mb-3"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
          >
            We take only 20 weddings per year.
          </h2>
          <p className="text-sm mb-2 font-bold uppercase tracking-widest" style={{ color: GOLD }}>Your date may still be available.</p>
          <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto">
            Boutique means your day gets our full attention. Dates fill 12–18 months out. Inquire early to secure your date.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ backgroundColor: DARK }}
            >
              Begin Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ borderColor: DARK, color: DARK }}
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
