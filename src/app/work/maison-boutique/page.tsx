import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Star, Leaf, Sparkles, Heart, Check, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';

const COLLECTIONS = [
  { title: 'New Arrivals', tag: 'Every Thursday', desc: 'Fresh pieces added weekly — curated from sustainable makers, small labels, and ethical brands. First access for styling clients.', items: ['Linen & natural fiber pieces', 'Seasonal color palettes', 'Limited quantities', 'Online available same day'] },
  { title: 'Wardrobe Classics', tag: 'Investment Dressing', desc: 'Timeless silhouettes that anchor your wardrobe. Blazers, trousers, dresses, and knitwear selected to outlast every trend.', items: ['Year-round wearability', 'Versatile color palette', 'Quality construction', 'Ethically sourced fabrics'] },
  { title: 'Sustainable Picks', tag: 'Conscious Fashion', desc: 'Every piece certified or verified — organic, Fair Trade, or women-owned production. Fashion you can feel good about.', items: ['GOTS organic certified', 'Fair Trade manufacturing', 'Women-owned brands', 'Carbon-neutral shipping available'] },
  { title: 'Accessories', tag: 'Complete the Look', desc: 'Curated bags, jewelry, scarves, and shoes to finish any outfit. Small-batch makers and local Nashville artists featured.', items: ['Small-batch jewelry', 'Locally made pieces', 'Leather goods & totes', 'Seasonal scarf collection'] },
];

const FEATURED = [
  { img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop', label: 'New Arrival', name: 'Linen Wrap Dress', price: '$148' },
  { img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1886&auto=format&fit=crop', label: 'Best Seller', name: 'Camel Blazer', price: '$224' },
  { img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1887&auto=format&fit=crop', label: 'Back in Stock', name: 'Silk Midi Skirt', price: '$176' },
];

const STYLING = [
  { icon: Sparkles, title: 'Styling Appointment', price: 'Complimentary', desc: '45-minute one-on-one session. We pull pieces for your body, lifestyle, and goals. No purchase necessary.' },
  { icon: Heart, title: 'Wardrobe Audit', price: '$150 · 90 min', desc: 'We visit your closet, help you identify gaps, remove what is not working, and build a shopping list.' },
  { icon: ShoppingBag, title: 'Gift Styling', price: 'Complimentary', desc: 'Tell us about her. We pull a curated selection with a gift note and beautiful packaging.' },
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
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop" alt="" fill className="object-cover object-top" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.92) 0%, rgba(44,26,14,0.3) 55%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-xl">
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-px" style={{ backgroundColor: SAGE }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/45">Nashville, TN · Est. 2018 · Sustainably Curated</span></div>
          <h1 className="text-5xl md:text-6xl font-serif italic text-white leading-tight mb-5">Dressed<br />for your<br />story.</h1>
          <p className="text-white/60 text-lg mb-10 max-w-sm leading-relaxed">Curated women's fashion. Sustainably sourced, thoughtfully selected, personally styled. New arrivals every Thursday.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: ESPRESSO, color: SAND }}>Shop New Arrivals <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4">Book Free Styling Appt</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['New Arrivals Every Thursday', 'Free Styling Appointments', 'Sustainable Fashion', 'Free Shipping $75+'].map((s, i) => (
            <div key={i} className="font-bold text-sm" style={{ color: i % 2 === 0 ? SAND : SAGE }}>{s}</div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ backgroundColor: SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: MOCHA }}>This Week</div>
            <h2 className="text-4xl font-serif italic" style={{ color: ESPRESSO }}>New Arrivals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED.map((p, i) => (
              <div key={i} className="overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="relative h-80">
                  <Image src={p.img} alt={p.name} fill className="object-cover object-top hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 text-white" style={{ backgroundColor: SAGE }}>{p.label}</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: ESPRESSO }}>{p.name}</div>
                    <div className="text-xs text-gray-400">Nashville, TN · In Store & Online</div>
                  </div>
                  <div className="font-bold text-sm" style={{ color: MOCHA }}>{p.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: ESPRESSO }}>Shop the Full Collection <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: ESPRESSO }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Collections</div>
            <h2 className="text-4xl font-serif italic mb-3" style={{ color: SAND }}>Shop by Category</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {COLLECTIONS.map(({ title, tag, desc, items }, i) => (
              <div key={i} className="border border-white/10 p-7 hover:border-sage-500/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-base" style={{ color: SAND }}>{title}</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 ml-3 shrink-0" style={{ backgroundColor: SAGE, color: 'white' }}>{tag}</span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(242,234,217,0.45)' }}>{desc}</p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(242,234,217,0.35)' }}><Check className="w-3 h-3 shrink-0" style={{ color: SAGE }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLING SERVICES */}
      <section style={{ backgroundColor: SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: MOCHA }}>Personal Styling</div>
            <h2 className="text-4xl font-serif italic mb-3" style={{ color: ESPRESSO }}>More Than a Boutique</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Our stylists are trained to help you find what works — not just sell you something. Come with a challenge, leave with a solution.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STYLING.map(({ icon: Icon, title, price, desc }, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: SAND }}>
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: ESPRESSO }}>{title}</h3>
                <div className="text-[10px] font-bold mb-3" style={{ color: SAGE }}>{price}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: ESPRESSO }}>Book a Free Styling Session <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* BRAND STORY SPLIT */}
      <section className="grid lg:grid-cols-2 min-h-[60vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
          <Image src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: ESPRESSO }}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: SAGE }}>Our Story</div>
            <h2 className="text-4xl font-serif italic text-white mb-6">Fashion rooted in intention.</h2>
            <p className="leading-relaxed mb-8" style={{ color: 'rgba(242,234,217,0.45)' }}>Maison was founded in 2018 with one idea: a boutique where every piece is chosen with purpose. We work with sustainable brands, small designers, and ethical manufacturers to bring Nashville women a wardrobe they can feel proud of.</p>
            <div className="space-y-3 mb-8">
              {["Sustainably sourced — every brand vetted", "Small-batch and limited quantities", "Size XS–3X across key wardrobe pieces", "Free personal styling — no purchase required", "Online shop updated with in-store arrivals", "Local delivery same-day in Nashville"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(242,234,217,0.45)' }}><Check className="w-4 h-4 shrink-0" style={{ color: SAGE }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: SAGE, borderColor: SAGE }}>Meet Clara & Simone <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: MOCHA }}>What Clients Say</div>
            <h2 className="text-4xl font-serif italic mb-2" style={{ color: ESPRESSO }}>Style That Speaks</h2>
            <p className="text-gray-500 text-sm">5.0 Stars · 140+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <div className="flex justify-center mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: MOCHA }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: ESPRESSO }}>— {r.author} <span className="text-gray-400 font-normal">· {r.service}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ESPRESSO }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>FAQ</div>
            <h2 className="text-4xl font-serif italic" style={{ color: ESPRESSO }}>Questions Answered</h2>
          </div>
          <div className="divide-y divide-amber-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: ESPRESSO }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: SAGE }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Visit Us</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
              <span>512 12th Ave South<br />Nashville, TN 37203<br /><span className="text-white/30 text-xs">The 12 South neighborhood</span></span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Store Hours</div>
            <div className="text-white/65 text-sm space-y-1">
              <div>Mon – Sat: 10:00am – 7:00pm</div>
              <div>Sunday: 11:00am – 5:00pm</div>
              <div className="font-bold mt-2" style={{ color: SAGE }}>Free styling appts available daily</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: SAGE }}>Connect</div>
            <a href="tel:6155550284" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: SAGE }} /> (615) 555-0284</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-7 py-3 text-white" style={{ backgroundColor: SAGE }}>Book a Styling Session <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-14 px-6 text-center border-t border-white/8">
        <h2 className="text-3xl font-serif italic mb-4" style={{ color: SAND }}>Book a personal styling appointment.</h2>
        <p className="mb-8 text-sm max-w-md mx-auto" style={{ color: 'rgba(242,234,217,0.45)' }}>Complimentary. 45 minutes. Your wardrobe, your story. No purchase pressure — just thoughtful guidance from a trained stylist who genuinely cares.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4 text-white" style={{ backgroundColor: SAGE }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/15 font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: SAND }}><Clock className="w-4 h-4" /> Shop New Arrivals</Link>
        </div>
      </section>
    </>
  );
}
