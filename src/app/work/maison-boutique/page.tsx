import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Leaf, Sparkles, Heart, Check, Phone, MapPin, ChevronDown } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';
const CREAM = '#FDF9F3';

const NEW_ARRIVALS = [
  { img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop', name: 'Linen Wrap Dress', price: '$148' },
  { img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1976&auto=format&fit=crop', name: 'Tailored Blazer', price: '$265' },
  { img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1887&auto=format&fit=crop', name: 'Silk Midi Skirt', price: '$195' },
  { img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1886&auto=format&fit=crop', name: 'Wide Leg Trouser', price: '$188' },
  { img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1910&auto=format&fit=crop', name: 'Cashmere Sweater', price: '$225' },
  { img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop', name: 'Cotton Tote', price: '$68' },
];

const STYLING = [
  { icon: Sparkles, title: 'Styling Appointment', price: 'Complimentary', desc: '45-minute one-on-one session. We pull pieces for your body, lifestyle, and goals. No purchase necessary.' },
  { icon: Heart, title: 'Wardrobe Audit', price: '$150 · 90 min', desc: 'We visit your closet, help you identify gaps, remove what is not working, and build a shopping list.' },
  { icon: Leaf, title: 'Capsule Wardrobe Build', price: 'From $400', desc: 'Complete capsule — 10–15 pieces chosen to maximize your wearable combinations and simplify every morning.' },
];

const REVIEWS = [
  { text: "Clara completely transformed how I think about my wardrobe. She helped me find my style language and everything fit beautifully. Maison is unlike any boutique I have visited.", author: "Isabelle T.", service: "Styling Session" },
  { text: "I just moved to Nashville and wanted to find my go-to boutique. Found it. The curation is impeccable — thoughtful and intentional. The staff is warm, not pushy.", author: "Grace M.", service: "In-Store Shopping" },
  { text: "The sustainable and locally made pieces here are genuinely beautiful. I feel good about what I am buying and I look great in it.", author: "Rachel H.", service: "Sustainable Collection" },
];

const FAQS = [
  { q: "Do I need an appointment to shop, or can I walk in?", a: "Walk-ins are always welcome during store hours. If you want a personal styling session or a gift consultation, booking ahead ensures a stylist is dedicated entirely to you. Walk-in styling is offered based on staff availability — the earlier in the week, the better." },
  { q: "What size range do you carry?", a: "We carry sizes XS through 3X across our brands, with an emphasis on inclusive sizing in our key wardrobe pieces. Not every style comes in every size, but we are intentional about stocking a wide range. If you do not see your size in store, we can often place a special order." },
  { q: "Do you ship online orders?", a: "Yes. We ship UPS Ground (3–5 business days) and Priority Mail (1–2 business days). Free standard shipping on orders over $75. Same-day local delivery is available in the Nashville area for orders placed before 12pm." },
  { q: "What is your return and exchange policy?", a: "Items may be returned within 21 days of purchase with tags attached and receipt present. Sale items, swimwear, and jewelry are final sale. Exchanges can be done in store or by mail. Online orders include a prepaid return label." },
  { q: "Are your styling appointments really free?", a: "Yes. Our 45-minute styling appointments are complimentary. We believe in earning your trust through the experience — there is zero pressure to purchase. Many clients use their first appointment as a discovery session and return to shop when they are ready." },
  { q: "What makes Maison different from other boutiques?", a: "Intentionality. We do not buy fast fashion or order the same pieces every boutique carries. We spend time with every brand we carry — understanding production practices, fabric quality, and sizing consistency. We are also a true styling boutique — our staff are trained stylists, not salespeople." },
  { q: "Do you carry wedding or special occasion dresses?", a: "We carry special occasion pieces — cocktail dresses, formal separates, and event-ready looks — but we are not a bridal boutique. For weddings, we are excellent for bridesmaids, guests, rehearsal dinner outfits, and bachelorette weekend looks." },
];

export default function MaisonHome() {
  return (
    <>
      {/* HERO — off-grid overlap */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        {/* Large fashion photo, right 60%, with padding so it doesn't touch edges */}
        <div
          className="absolute top-8 bottom-8 right-8 overflow-hidden hidden md:block"
          style={{ left: '38%' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
            alt="Maison Boutique curated fashion"
            fill
            className="object-cover object-top"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        {/* Mobile photo */}
        <div className="relative h-[50vh] md:hidden">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
            alt="Maison Boutique"
            fill
            className="object-cover object-top"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        {/* Text block — overlaps left edge of photo */}
        <div className="relative z-10 flex items-center min-h-screen md:min-h-0 md:h-screen px-8 md:px-16">
          <div className="max-w-[520px]">
            {/* Location tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: SAGE }} />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: MOCHA, fontFamily: 'var(--font-body)', fontWeight: 300 }}>Nashville, TN · Est. 2018</span>
            </div>

            {/* Headline */}
            <h1
              className="leading-none mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                color: ESPRESSO,
                lineHeight: 1.05,
              }}
            >
              Curated for<br />women who<br />know themselves.
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg mb-10 leading-relaxed max-w-sm"
              style={{ color: `${ESPRESSO}88`, fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Intentional fashion. Personal styling. Sustainably sourced. New arrivals every Thursday.
            </p>

            {/* CTA */}
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white"
              style={{ backgroundColor: ESPRESSO, fontFamily: 'var(--font-body)' }}
            >
              Shop the Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS — horizontal scrolling cards (signature element) */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="px-8 md:px-16 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-3" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>Shop</p>
              <h2
                className="leading-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: ESPRESSO }}
              >
                New Arrivals — Every Thursday
              </h2>
            </div>
            <Link
              href={`${BASE}/services`}
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest pb-1 border-b"
              style={{ color: ESPRESSO, borderColor: ESPRESSO, fontFamily: 'var(--font-body)' }}
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          className="flex overflow-x-auto gap-4 pb-6 px-8 md:px-16 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {NEW_ARRIVALS.map((product, i) => (
            <div
              key={i}
              className="snap-center shrink-0 group cursor-pointer"
              style={{ minWidth: '260px' }}
            >
              {/* Square photo */}
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pr-2">
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: MOCHA, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{product.price}</span>
                  <button
                    className="text-xs font-semibold uppercase tracking-widest border-b pb-0.5 transition-colors"
                    style={{ color: SAGE, borderColor: SAGE, fontFamily: 'var(--font-body)' }}
                  >
                    + Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT CLARA — sand background, editorial */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: SAND }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-8" style={{ color: MOCHA, fontFamily: 'var(--font-body)' }}>Our Story</p>
            {/* Large italic pull-quote */}
            <blockquote
              className="text-3xl md:text-4xl leading-snug mb-10 italic"
              style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
            >
              "Fashion rooted<br />in intention."
            </blockquote>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
            <p className="text-base leading-relaxed mb-5" style={{ color: `${ESPRESSO}88`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              Maison was founded in 2018 with one idea: a boutique where every piece is chosen with purpose. We work with sustainable brands, small designers, and ethical manufacturers to bring Nashville women a wardrobe they can feel proud of.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: `${ESPRESSO}88`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              Clara and Simone built this from scratch — two friends with a shared conviction that fashion should make you feel more like yourself, not less.
            </p>
            <Link
              href={`${BASE}/about`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest pb-1 border-b"
              style={{ color: ESPRESSO, borderColor: ESPRESSO, fontFamily: 'var(--font-body)' }}
            >
              Meet Clara & Simone <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              alt="Inside Maison Boutique"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* STYLING SERVICES */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>Personal Styling</p>
            <h2
              className="text-4xl md:text-5xl italic mb-4"
              style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
            >
              More Than a Boutique
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: `${ESPRESSO}66`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              Our stylists are trained to help you find what works — not just sell you something.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STYLING.map(({ icon: Icon, title, price, desc }, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: 'white' }}>
                <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ backgroundColor: SAND }}>
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg mb-1 italic" style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}>{title}</h3>
                <div className="text-xs font-semibold mb-4 uppercase tracking-widest" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>{price}</div>
                <p className="text-sm leading-relaxed" style={{ color: `${ESPRESSO}77`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-10 py-4 text-white"
              style={{ backgroundColor: ESPRESSO, fontFamily: 'var(--font-body)' }}
            >
              Book a Free Styling Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY — sage band */}
      <section className="py-16 px-8 md:px-16" style={{ backgroundColor: SAGE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl italic text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Fashion you can feel good about.
              </h2>
              <p className="text-white/70 text-sm max-w-md" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                Every brand we carry is vetted for production practices, fabric quality, and ethical sourcing.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 shrink-0">
              {[
                { stat: '100%', label: 'Vetted Brands' },
                { stat: 'XS–3X', label: 'Size Range' },
                { stat: '40+', label: 'Indie Makers' },
                { stat: 'Free', label: 'Styling Always' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-body)' }}>{s.stat}</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — dark espresso background */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: ESPRESSO }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>What Clients Say</p>
            <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'var(--font-display)', color: SAND }}>Style That Speaks</h2>
            <p className="text-sm mt-3" style={{ color: `${SAND}55`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>5.0 Stars · 140+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(242,234,217,0.08)' }}>
                <div className="flex mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: SAGE }} />)}</div>
                <p className="italic text-sm leading-relaxed mb-6" style={{ color: `${SAND}88`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>"{r.text}"</p>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: SAND, fontFamily: 'var(--font-body)' }}>
                  — {r.author} <span style={{ color: SAGE, fontWeight: 300 }}>· {r.service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/reviews`} className="text-xs font-semibold uppercase tracking-widest pb-1 border-b" style={{ color: SAND, borderColor: `${SAND}40`, fontFamily: 'var(--font-body)' }}>
              Read All Reviews <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>FAQ</p>
            <h2 className="text-4xl italic" style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}>Questions Answered</h2>
          </div>
          <div className="divide-y" style={{ borderColor: `${ESPRESSO}10` }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="text-sm font-semibold leading-snug" style={{ color: ESPRESSO, fontFamily: 'var(--font-body)' }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: SAGE }} />
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: `${ESPRESSO}77`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-16 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>Visit Us</div>
            <div className="flex items-start gap-2 text-sm" style={{ color: `${SAND}77`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
              <span>512 12th Ave South<br />Nashville, TN 37203<br /><span className="text-xs opacity-50">The 12 South neighborhood</span></span>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>Store Hours</div>
            <div className="text-sm space-y-1" style={{ color: `${SAND}77`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              <div>Mon – Sat: 10:00am – 7:00pm</div>
              <div>Sunday: 11:00am – 5:00pm</div>
              <div className="font-semibold mt-2" style={{ color: SAGE }}>Free styling appts available daily</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] mb-1" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>Connect</div>
            <a href="tel:6155550284" className="inline-flex items-center gap-2 text-base font-semibold" style={{ color: SAND, fontFamily: 'var(--font-body)' }}>
              <Phone className="w-4 h-4" style={{ color: SAGE }} /> (615) 555-0284
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-xs px-7 py-3 text-white"
              style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Book a Styling Session <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: SAND }}>
        <h2
          className="text-4xl md:text-6xl italic mb-5"
          style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
        >
          Book a personal<br />styling appointment.
        </h2>
        <p
          className="text-sm max-w-md mx-auto mb-10"
          style={{ color: `${ESPRESSO}66`, fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          Complimentary. 45 minutes. Your wardrobe, your story. No purchase pressure — just thoughtful guidance from a trained stylist who genuinely cares.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-sm px-10 py-4 text-white"
            style={{ backgroundColor: ESPRESSO, fontFamily: 'var(--font-body)' }}
          >
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`${BASE}/services`}
            className="inline-flex items-center gap-2 border font-semibold uppercase tracking-widest text-sm px-10 py-4"
            style={{ borderColor: ESPRESSO, color: ESPRESSO, fontFamily: 'var(--font-body)' }}
          >
            Shop New Arrivals
          </Link>
        </div>
      </section>
    </>
  );
}
