import Image from 'next/image';
import Link from 'next/link';
import { Scissors, ArrowRight, Star, Leaf, Sparkles, Check, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';
const WARM_WHITE = '#FAF7F4';
const PLUM = '#3D1F2C';

const SVCS = [
  { title: 'Balayage & Highlights', price: 'From $180', desc: 'Hand-painted balayage, foil highlights, babylights, and toning. Each blend is uniquely created for your skin tone and features.' },
  { title: 'Full Color', price: 'From $120', desc: 'Root touch-ups, full single-process color, and fashion-forward vivid tones. Formulated with Schwarzkopf and Olaplex.' },
  { title: 'Precision Cuts', price: 'From $85', desc: 'Dry or wet cutting technique chosen for your texture. Every cut includes a consultation, shampoo, condition, and blowout.' },
  { title: 'Keratin Treatment', price: 'From $250', desc: 'Smoothing treatments that eliminate frizz for 3–5 months. Safe for color-treated and chemically processed hair.' },
  { title: 'Bridal Hair', price: 'Custom Quote', desc: 'Trial appointments, day-of bridal styling, and bridesmaid packages. Inquire 6+ months in advance for peak season dates.' },
  { title: 'Treatments & Gloss', price: 'From $65', desc: 'Bond-building Olaplex treatments, deep conditioning masks, and glossing services to restore shine and strength.' },
];

const STEPS = [
  { icon: Sparkles, n: '01', title: 'Book a Consultation', desc: 'New clients start with a complimentary 15-minute consultation — in-person or via DM. We review your hair history and goals.' },
  { icon: Scissors, n: '02', title: 'Your Custom Formulation', desc: 'Your stylist creates a personalized formula and service plan. No cookie-cutter approaches.' },
  { icon: Leaf, n: '03', title: 'The Service', desc: 'Relax in a quiet, boutique environment. Enjoy a scalp massage, quality products, and time devoted entirely to you.' },
  { icon: Star, n: '04', title: 'Maintain & Return', desc: 'Leave with a personalized aftercare kit recommendation and maintenance schedule. We are your long-term hair partner.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2080&auto=format&fit=crop',
];

const REVIEWS = [
  { text: "Maria is an absolute artist. My balayage looks so natural and the color is exactly what I dreamed of. I will never go anywhere else.", author: "Chloe T.", service: "Balayage" },
  { text: "I have been to at least a dozen salons. Atelier is in a completely different league. The attention to detail and quality of care is unmatched.", author: "Priya N.", service: "Color + Cut" },
  { text: "My wedding hair was absolutely perfect. Jamie executed my vision flawlessly and I felt beautiful all day.", author: "Emma W.", service: "Bridal Hair" },
];

const FAQS = [
  { q: "Do I need a consultation before booking a color service?", a: "New color clients are required to book a complimentary consultation first, especially for vivid colors, major transformations, or if you have had box dye. This ensures we have enough time and the right formula. Returning clients can book directly." },
  { q: "How far in advance should I book?", a: "Maria and Priya book 4–6 weeks out for color services. Jamie has more availability for cuts and bridal. For bridal styling, we recommend contacting us at least 6 months before your date — 12 months for peak season (May–October)." },
  { q: "What is your cancellation policy?", a: "We require 48 hours notice to cancel or reschedule. Cancellations with less than 24 hours notice may be charged 50% of the service. No-shows are charged the full service amount." },
  { q: "Do you use sustainable or natural products?", a: "Yes. We use Schwarzkopf Professional and Olaplex, both of which are free from ammonia and PPD. We also carry a selection of Davines styling products, which are certified carbon-neutral and sustainably packaged." },
  { q: "Can I bring inspiration photos?", a: "Absolutely — we encourage it. Screenshots, Pinterest boards, and Instagram saves are all helpful. Please also include photos of hair that did not work so we can understand your preferences. A great consultation uses both." },
  { q: "Do you accommodate textured, curly, or natural hair?", a: "Yes. Priya specializes in curly and textured hair and uses a curl-specific cutting technique (dry cutting for curls). We will never straighten your texture to cut it. Please book with Priya and mention your texture when scheduling." },
  { q: "Is parking available nearby?", a: "Street parking is available on South Congress Ave and surrounding streets. There is also a small lot behind our building with two-hour free parking. We are easily accessible via the #1 CapMetro bus line." },
];

const MARQUEE_TEXT = '· Balayage · Precision Cuts · Color · Keratin · Bridal Hair · Olaplex Certified · Extensions · Scalp Treatments · Vivid Color · Dry Cuts ·';

export default function AtelierHome() {
  return (
    <>
      {/* EDITORIAL SPLIT HERO */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        {/* Left — full photo panel */}
        <div className="relative overflow-hidden" style={{ minHeight: '50vh' }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
            alt="Atelier Hair Studio"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          {/* Subtle dark edge vignette on right side to blend into text panel */}
          <div className="absolute inset-y-0 right-0 w-16 hidden md:block" style={{ background: 'linear-gradient(to right, transparent, rgba(250,247,244,0.15))' }} />
        </div>

        {/* Right — editorial text panel */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-20 md:py-0" style={{ backgroundColor: WARM_WHITE }}>
          {/* Eyebrow */}
          <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-8" style={{ color: ROSE }}>
            Austin, TX · South Congress
          </p>

          {/* Giant headline */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, color: CHARCOAL, letterSpacing: '-0.02em' }}
          >
            Where hair<br />becomes art.
          </h1>

          {/* Thin rule */}
          <div className="w-12 h-px mb-6" style={{ backgroundColor: ROSE }} />

          {/* Subtitle */}
          <p className="text-sm leading-relaxed mb-10 max-w-xs" style={{ color: CHARCOAL, opacity: 0.55, fontWeight: 300 }}>
            A boutique hair studio dedicated to artisan color, precision cuts, and sustainable luxury — crafted entirely for you.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center justify-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-7 py-4"
              style={{ backgroundColor: ROSE }}
            >
              Book a Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[10px] px-7 py-4 border"
              style={{ borderColor: CHARCOAL + '30', color: CHARCOAL }}
            >
              Services & Pricing
            </Link>
          </div>

          {/* Trust badge row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['4.9 Stars · 200+ Reviews', 'Olaplex Certified', 'New Clients Welcome'].map((badge, i) => (
              <span key={i} className="text-[9px] font-bold uppercase tracking-[0.25em]" style={{ color: i === 0 ? ROSE : CHARCOAL, opacity: i === 0 ? 1 : 0.35 }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE ELEMENT — AUTO-SCROLLING MARQUEE STRIP */}
      <div style={{ backgroundColor: CHARCOAL }} className="overflow-hidden py-5">
        <div className="mercury-marquee">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-bold uppercase tracking-widest text-[11px] whitespace-nowrap px-4"
              style={{ color: ROSE, fontFamily: 'var(--font-body)' }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES — alternating two-column list */}
      <section style={{ backgroundColor: WARM_WHITE }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: ROSE }}>Services & Pricing</p>
              <h2
                className="text-5xl md:text-6xl leading-none"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: CHARCOAL }}
              >
                Our Craft
              </h2>
            </div>
            <Link
              href={`${BASE}/services`}
              className="hidden md:inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] border-b pb-0.5"
              style={{ color: CHARCOAL, borderColor: CHARCOAL + '30' }}
            >
              Full Menu <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Alternating list */}
          <div className="divide-y" style={{ borderColor: CHARCOAL + '12' }}>
            {SVCS.map(({ title, price, desc }, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4 md:gap-12 py-8 items-start">
                <div>
                  <h3
                    className="text-2xl md:text-3xl leading-snug mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}
                  >
                    {title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 inline-block" style={{ backgroundColor: ROSE + '18', color: ROSE }}>
                    {price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed self-center" style={{ color: CHARCOAL, opacity: 0.5 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ backgroundColor: CHARCOAL }}
            >
              Full Menu & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY — asymmetric grid (one image spans 2 rows) */}
      <section className="grid grid-cols-2 md:grid-cols-3" style={{ gridTemplateRows: 'auto' }}>
        {/* Image 1 — spans 2 rows on md */}
        <div className="relative overflow-hidden md:row-span-2" style={{ minHeight: '280px' }}>
          <Image src={GALLERY[0]} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        {/* Images 2, 3, 4 */}
        {GALLERY.slice(1).map((src, i) => (
          <div key={i} className="relative overflow-hidden" style={{ minHeight: '280px' }}>
            <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        ))}
      </section>

      {/* PROCESS STEPS — horizontal dark PLUM background */}
      <section style={{ backgroundColor: PLUM }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: ROSE }}>Your Experience</p>
            <h2
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}
            >
              The Atelier Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {STEPS.map(({ icon: Icon, n, title, desc }, i) => (
              <div key={i} className="px-8 py-8 lg:py-0 first:pl-0 last:pr-0">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-5xl leading-none opacity-20"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: ROSE }}
                  >
                    {n}
                  </span>
                  <Icon className="w-4 h-4 shrink-0" style={{ color: ROSE }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ATELIER — split section */}
      <section className="grid lg:grid-cols-2 min-h-[60vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: CHARCOAL }}>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-5" style={{ color: ROSE }}>Why Atelier</p>
            <h2
              className="text-4xl md:text-5xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}
            >
              Hair transformed.<br />Confidence restored.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Every stylist at Atelier completes ongoing education — we do not sit still while the industry evolves. We use only Olaplex-compatible formulas, zero PPD, and sustainable tools.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Complimentary 15-min new client consultation",
                "Olaplex bond protection included on all color",
                "Eco-conscious products — vegan & cruelty-free",
                "Private suite available for sensitive clients",
                "Bridal team specializing in textured hair",
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: ROSE }} />{p}
                </div>
              ))}
            </div>
            <Link
              href={`${BASE}/about`}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
              style={{ color: ROSE, borderColor: ROSE }}
            >
              Meet Our Stylists <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS — BLUSH background with large Cormorant quote marks */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: ROSE }}>Client Love</p>
            <h2
              className="text-4xl md:text-5xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}
            >
              What Clients Say
            </h2>
            <p className="text-sm" style={{ color: CHARCOAL, opacity: 0.4 }}>4.9 Stars · 200+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-8 relative">
                {/* Large opening quote in Cormorant italic */}
                <div
                  className="text-8xl leading-none absolute top-4 left-6 select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: ROSE, opacity: 0.18 }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                <div className="flex justify-center mb-4 relative z-10">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ROSE }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-5 text-center italic relative z-10" style={{ color: CHARCOAL, opacity: 0.65 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="text-center font-bold text-xs relative z-10" style={{ color: CHARCOAL }}>
                  — {r.author} <span style={{ color: CHARCOAL, opacity: 0.4, fontWeight: 400 }}>· {r.service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/reviews`}
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: CHARCOAL }}
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
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: ROSE }}>FAQ</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}
            >
              Questions Answered
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: BLUSH }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: CHARCOAL }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: ROSE }} />
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: CHARCOAL, opacity: 0.5 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>Find Us</div>
            <div className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ROSE }} />
              <span>1120 South Congress Ave, Suite 8<br />Austin, TX 78704</span>
            </div>
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>Hours</div>
            <div className="text-sm space-y-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <div>Tue – Fri: 9:00am – 7:00pm</div>
              <div>Saturday: 9:00am – 6:00pm</div>
              <div style={{ color: 'rgba(255,255,255,0.3)' }}>Sun & Mon: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:5125550293" className="inline-flex items-center gap-2 text-white font-bold text-base">
              <Phone className="w-4 h-4" style={{ color: ROSE }} /> (512) 555-0293
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-7 py-3"
              style={{ backgroundColor: ROSE }}
            >
              Book a Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 text-center">
        <Scissors className="w-7 h-7 mx-auto mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
        <h2
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}
        >
          Book your transformation today.
        </h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: CHARCOAL, opacity: 0.5 }}>
          New clients receive a complimentary deep conditioning treatment with any color service. Olaplex bond protection included.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
            style={{ backgroundColor: CHARCOAL }}
          >
            Book Online <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5125550293"
            className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-[10px] px-10 py-4"
            style={{ borderColor: CHARCOAL, color: CHARCOAL }}
          >
            <Clock className="w-4 h-4" /> Call for Same-Week Availability
          </a>
        </div>
      </section>
    </>
  );
}
