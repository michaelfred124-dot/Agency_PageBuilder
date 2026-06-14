import Image from 'next/image';
import Link from 'next/link';
import { Flower2, ArrowRight, Check, Star, Heart, Calendar, Camera, Phone, MapPin, ChevronDown, Mail } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';

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
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.3) 60%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-px" style={{ backgroundColor: SAGE }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">Charleston, SC · Est. 2015 · 350+ Weddings</span></div>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-5">Your love story,<br />beautifully told.</h1>
          <p className="text-white/65 text-lg mb-10 max-w-md leading-relaxed">Bespoke wedding planning and floral design for couples who believe every detail matters. Charleston, Lowcountry, and beyond.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: SAGE }}>Begin Your Journey <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4">Our Packages</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: SAGE }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['350+ Weddings', '10 Years of Experience', 'Charleston & Destinations', 'Only 20 Weddings/Year'].map((s, i) => (
            <div key={i} className="text-white font-bold text-sm">{s}</div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ backgroundColor: BLUSH }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Services</div>
            <h2 className="text-4xl font-serif italic mb-3" style={{ color: DARK }}>Planning Packages</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">All packages begin with a complimentary inquiry call. Every quote is custom-built to reflect your wedding scope and guest count.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {PACKAGES.map(({ icon: Icon, title, tag, price, desc, includes }, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-6 h-6" style={{ color: SAGE }} strokeWidth={1.5} />
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 text-white" style={{ backgroundColor: SAGE }}>{tag}</span>
                </div>
                <h3 className="font-bold text-lg mb-1" style={{ color: DARK }}>{title}</h3>
                <div className="text-xs font-bold mb-3" style={{ color: SAGE }}>{price}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {includes.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: SAGE }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: DARK }}>Inquire About Your Date <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Portfolio</div>
            <h2 className="text-4xl font-serif italic" style={{ color: DARK }}>Recent Celebrations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative overflow-hidden" style={{ paddingBottom: '130%' }}>
                <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING TIMELINE */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>The Process</div>
            <h2 className="text-4xl font-serif italic text-white">Your Wedding Planning Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ backgroundColor: SAGE + '40' }} />
            <div className="space-y-10">
              {TIMELINE.map(({ phase, title, desc }, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-16 shrink-0 text-right">
                    <div className="w-3 h-3 rounded-full mt-1.5 ml-auto relative z-10" style={{ backgroundColor: SAGE }} />
                  </div>
                  <div className="pb-2">
                    <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: SAGE }}>{phase}</div>
                    <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Client Stories</div>
            <h2 className="text-4xl font-serif italic mb-2" style={{ color: DARK }}>Moments We Treasure Together</h2>
            <p className="text-gray-400 text-sm">5.0 Stars · 160+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-8 border-l-4" style={{ borderLeftColor: SAGE }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SAGE }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: DARK }}>— {r.author} <span className="text-gray-400 font-normal">· {r.type}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: SAGE }}>Read All Reviews <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>FAQ</div>
            <h2 className="text-4xl font-serif italic" style={{ color: DARK }}>Questions From Couples</h2>
          </div>
          <div className="divide-y divide-rose-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: DARK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: SAGE }} />
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
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Studio</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
              <span>12 Prioleau St, Studio 3<br />Charleston, SC 29401</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Reach Us</div>
            <div className="space-y-2">
              <a href="tel:8435550629" className="flex items-center gap-2 text-white/65 text-sm"><Phone className="w-4 h-4 shrink-0" style={{ color: SAGE }} /> (843) 555-0629</a>
              <a href="mailto:hello@goldenthreadevents.com" className="flex items-center gap-2 text-white/65 text-sm"><Mail className="w-4 h-4 shrink-0" style={{ color: SAGE }} /> hello@goldenthreadevents.com</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: SAGE }}>Check Availability</div>
            <p className="text-white/40 text-xs">We take only 20 weddings per year. Early inquiries are strongly encouraged.</p>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-7 py-3" style={{ backgroundColor: SAGE, color: 'white' }}>Inquire About Your Date <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 text-center">
        <Flower2 className="w-8 h-8 mx-auto mb-5" style={{ color: SAGE }} strokeWidth={1.5} />
        <h2 className="text-3xl font-serif italic mb-4" style={{ color: DARK }}>We take only 20 weddings per year.</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Boutique means your day gets our full attention. Dates fill 12–18 months out. Inquire early to secure your date.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: DARK }}>Begin Your Journey <ArrowRight className="w-4 h-4" /></Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ borderColor: DARK, color: DARK }}>View All Packages</Link>
        </div>
      </section>
    </>
  );
}
