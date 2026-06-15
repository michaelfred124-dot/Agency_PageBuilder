import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChevronDown, Phone, MapPin, Check, ShoppingBag } from 'lucide-react';

const BASE = '/work/maison-boutique';
const BG = '#0C0B09';
const GOLD = '#C5A052';
const CREAM = '#F5EFE3';
const CARD = '#161410';
const MUTED = 'rgba(245,239,227,0.4)';

const PRODUCTS = [
  { img: 'photo-1515372039744-b8f02a3ae446', name: 'Linen Wrap Dress', price: '$148', tag: 'New' },
  { img: 'photo-1581044777550-4cfa60707c03', name: 'Tailored Blazer', price: '$224', tag: 'Back in Stock' },
  { img: 'photo-1554568218-0f1715e72254', name: 'Silk Midi Skirt', price: '$176', tag: 'Best Seller' },
  { img: 'photo-1490481651871-ab68de25d43d', name: 'Cotton Knit Top', price: '$96', tag: 'New' },
];

const FAQS = [
  { q: "Do I need an appointment to shop, or can I walk in?", a: "Walk-ins are always welcome. If you want a dedicated personal styling session or gift consultation, booking in advance ensures a stylist is yours for the full time. Walk-in styling is offered based on staff availability — earlier in the week is better." },
  { q: "What size range do you carry?", a: "We carry XS through 3X across our brands, with an emphasis on inclusive sizing in key wardrobe pieces. Not every style arrives in every size, but we are intentional about stocking a wide range. For anything not in store, we can often place a special order." },
  { q: "Do you ship?", a: "Yes. UPS Ground (3–5 days) and Priority Mail (1–2 days). Free standard shipping on orders over $75. Same-day local delivery in Nashville for orders placed before noon." },
  { q: "What is your return policy?", a: "Returns are accepted within 21 days with tags and receipt. Sale items, swimwear, and jewelry are final sale. Exchanges can be done in store or by mail. Online orders include a prepaid return label." },
  { q: "Are styling appointments really free?", a: "Yes. 45-minute one-on-one sessions are completely complimentary. No purchase necessary, no pressure. Many clients use their first session as a discovery visit and return to shop when they're ready." },
  { q: "Do you carry sustainable brands?", a: "Sustainability is central to how we buy. Every brand we carry is vetted for production practices, fabric quality, and ethical manufacturing. We prioritize GOTS-certified organic, Fair Trade, and women-owned brands." },
  { q: "What neighborhoods do you deliver to?", a: "Same-day delivery covers Nashville, 12 South, Germantown, East Nashville, Green Hills, Belle Meade, and Brentwood. For areas outside this zone, standard shipping applies." },
];

export default function MaisonBoutique() {
  return (
    <>
      {/* NAV — ultra-minimal dark, centered wordmark */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: BG, borderBottom: '1px solid rgba(197,160,82,0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          <div className="hidden md:flex items-center gap-8">
            <Link href={`${BASE}/services`} className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: MUTED }}>New Arrivals</Link>
            <Link href={`${BASE}/services`} className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: MUTED }}>Collections</Link>
          </div>
          <Link href={BASE} className="text-center font-serif italic text-2xl" style={{ color: CREAM }}>Maison</Link>
          <div className="flex items-center justify-end gap-6">
            <Link href={`${BASE}/about`} className="hidden md:block text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: MUTED }}>Styling</Link>
            <Link href={`${BASE}/contact`} className="text-[10px] font-bold uppercase tracking-[0.25em] border px-4 py-2" style={{ borderColor: GOLD, color: GOLD }}>Book</Link>
          </div>
        </div>
      </nav>

      {/* HERO — near-full viewport fashion photo, bottom-left text */}
      <section className="relative flex items-end overflow-hidden" style={{ height: '92vh', minHeight: 600 }}>
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
          alt="Maison editorial fashion"
          fill className="object-cover object-top" referrerPolicy="no-referrer" priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,11,9,0.9) 0%, rgba(12,11,9,0.1) 50%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-8 md:px-14 pb-20">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: GOLD }}>Nashville · Est. 2018</span>
            </div>
            <h1 className="font-serif italic leading-tight mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: CREAM }}>
              Dressed<br />with intention.
            </h1>
            <p className="mb-10 leading-relaxed" style={{ color: MUTED, fontSize: '1.0625rem' }}>
              Sustainably curated women's fashion. Personal styling, included. New arrivals every Thursday.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-8 py-4" style={{ backgroundColor: GOLD, color: BG, boxShadow: '0 6px 28px rgba(197,160,82,0.30)' }}>
                Shop New Arrivals <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-8 py-4 border" style={{ borderColor: 'rgba(245,239,227,0.25)', color: CREAM }}>
                Book Free Styling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS — tight 4-col product grid */}
      <section style={{ backgroundColor: BG }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-1" style={{ color: GOLD }}>This Thursday</div>
              <h2 className="font-serif italic text-3xl" style={{ color: CREAM }}>New Arrivals</h2>
            </div>
            <Link href={`${BASE}/services`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>View All <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PRODUCTS.map(({ img, name, price, tag }, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden mb-3" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={`https://images.unsplash.com/${img}?q=80&w=800&auto=format&fit=crop`}
                    alt={name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2 py-1" style={{ backgroundColor: GOLD, color: BG }}>{tag}</div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold mb-0.5" style={{ color: CREAM }}>{name}</div>
                    <div className="text-xs" style={{ color: MUTED }}>In store & online</div>
                  </div>
                  <div className="text-xs font-bold" style={{ color: GOLD }}>{price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE EDIT — full-width 2-col editorial spread */}
      <section className="grid lg:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
            alt="Boutique interior" fill className="object-cover" referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center px-10 md:px-16 py-20" style={{ backgroundColor: CARD }}>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6" style={{ color: GOLD }}>The Edit</div>
          <h2 className="font-serif italic text-4xl md:text-5xl mb-8 leading-tight" style={{ color: CREAM }}>
            More than a<br />boutique.
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: MUTED }}>
            Every piece at Maison is chosen with purpose. We work with sustainable brands, small designers, and ethical manufacturers — not because it is fashionable, but because we believe fashion should not come at someone else's cost.
          </p>
          <div className="space-y-3 mb-10">
            {[
              'Every brand vetted for ethical production',
              'Sizes XS – 3X across key pieces',
              'Free personal styling for every client',
              'New arrivals weekly — limited quantities',
              'Same-day Nashville delivery available',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: MUTED }}>
                <Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /> {item}
              </div>
            ))}
          </div>
          <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b w-fit pb-0.5" style={{ color: GOLD, borderColor: GOLD }}>
            Our Story <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* STYLING — full-bleed dark with gold text */}
      <section style={{ backgroundColor: BG }} className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6" style={{ color: GOLD }}>Personal Styling</div>
            <h2 className="font-serif italic text-5xl md:text-6xl leading-tight mb-8" style={{ color: CREAM }}>Your style,<br />understood.</h2>
            <p className="leading-relaxed mb-10" style={{ color: MUTED }}>
              Our stylists are trained to help you discover your style language — not sell you what is on the rack. Every appointment is personal, unhurried, and completely free.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {[
                { service: 'In-Store Styling', note: 'Complimentary · 45 min' },
                { service: 'Wardrobe Audit', note: '$150 · 90 min' },
                { service: 'Gift Styling', note: 'Complimentary' },
                { service: 'Capsule Wardrobe', note: 'From $400' },
              ].map(({ service, note }, i) => (
                <div key={i} className="border-l-2 pl-4" style={{ borderColor: GOLD }}>
                  <div className="text-sm font-bold mb-0.5" style={{ color: CREAM }}>{service}</div>
                  <div className="text-xs" style={{ color: MUTED }}>{note}</div>
                </div>
              ))}
            </div>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-8 py-4" style={{ backgroundColor: GOLD, color: BG, boxShadow: '0 6px 28px rgba(197,160,82,0.30)' }}>
              Book Styling Session <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="relative" style={{ height: 600 }}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop"
              alt="Personal styling" fill className="object-cover" referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* BRAND PILLARS — 3 centered on near-black */}
      <section style={{ backgroundColor: CARD }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif italic text-4xl mb-16" style={{ color: CREAM }}>What we believe.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: 'Intentional', d: 'Every piece has a reason to be here. We do not buy trends — we buy timelessness.' },
              { n: 'Inclusive', d: 'Fashion is for every body. We carry sizes XS–3X and style every client who walks in.' },
              { n: 'Sustainable', d: 'We vet every brand we carry. Ethics, production, materials — it all matters to us.' },
            ].map(({ n, d }, i) => (
              <div key={i}>
                <div className="font-serif italic text-2xl mb-4" style={{ color: GOLD }}>{n}</div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: BG }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>Client Reviews</p>
            <h2 className="font-serif italic text-4xl" style={{ color: CREAM }}>What our clients say.</h2>
            <p className="text-sm mt-2" style={{ color: MUTED }}>5.0 Stars · 140+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Clara completely changed how I think about getting dressed. I came in overwhelmed and left with a clear vision and three pieces I wear constantly.", a: 'Isabelle T.', s: 'Styling Session' },
              { t: "The best boutique in Nashville. The curation is extraordinary — every piece feels chosen, not curated. Staff is warm and knows fashion deeply.", a: 'Grace M.', s: 'In-Store Visit' },
              { t: "I love that I can shop here knowing every brand is ethical. The quality is real and the styling service makes it feel like a personal experience every time.", a: 'Rachel H.', s: 'Sustainable Collection' },
            ].map((r, i) => (
              <div key={i} className="p-7" style={{ backgroundColor: CARD, boxShadow: '0 16px 48px rgba(0,0,0,0.45)' }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />)}
                </div>
                <p className="text-sm italic leading-relaxed mb-5" style={{ color: MUTED }}>"{r.t}"</p>
                <div className="text-xs font-bold" style={{ color: CREAM }}>— {r.a} <span className="font-normal" style={{ color: MUTED }}>· {r.s}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: CARD }} className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>Questions</p>
            <h2 className="font-serif italic text-4xl" style={{ color: CREAM }}>Before you visit.</h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(197,160,82,0.12)' }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm" style={{ color: CREAM }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: GOLD }} />
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: BG, borderTop: '1px solid rgba(197,160,82,0.12)' }} className="py-24 px-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD }}>Visit Us</p>
        <h2 className="font-serif italic text-5xl mb-5" style={{ color: CREAM }}>Come find your style.</h2>
        <p className="mb-10 max-w-sm mx-auto text-sm leading-relaxed" style={{ color: MUTED }}>
          Personal styling is complimentary. Walk-ins welcome. 512 12th Ave South, Nashville.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-10 py-4" style={{ backgroundColor: GOLD, color: BG }}>
            Book Styling <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border font-bold text-xs uppercase tracking-widest px-10 py-4" style={{ borderColor: 'rgba(245,239,227,0.2)', color: CREAM }}>
            <ShoppingBag className="w-3.5 h-3.5" /> Shop Online
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#080706' }} className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-serif italic text-xl mb-3" style={{ color: CREAM }}>Maison</div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(245,239,227,0.3)' }}>Sustainable women's fashion. Personal styling. Nashville's most intentional boutique.</p>
            <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(245,239,227,0.3)' }}>
              <MapPin className="w-3 h-3 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span>512 12th Ave South, Nashville TN 37203<br />The 12 South Neighborhood</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Shop</div>
            <ul className="space-y-2">
              {['New Arrivals', 'Collections', 'Sustainable Picks', 'Accessories', 'Sale'].map(s => (
                <li key={s}><Link href={`${BASE}/services`} className="text-xs" style={{ color: 'rgba(245,239,227,0.3)' }}>{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Hours</div>
            <div className="text-xs space-y-1.5" style={{ color: 'rgba(245,239,227,0.3)' }}>
              <div>Mon – Sat: 10:00am – 7:00pm</div>
              <div>Sunday: 11:00am – 5:00pm</div>
              <div className="mt-3">
                <Phone className="w-3 h-3 inline mr-2" style={{ color: GOLD }} />
                (615) 555-0284
              </div>
              <div className="mt-1 font-bold" style={{ color: GOLD }}>New arrivals every Thursday</div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t pt-6 flex justify-between items-center" style={{ borderColor: 'rgba(197,160,82,0.1)' }}>
          <span className="text-[10px]" style={{ color: 'rgba(245,239,227,0.2)' }}>© 2025 Maison Boutique · Privacy Policy</span>
          <span className="text-[10px]" style={{ color: 'rgba(245,239,227,0.2)' }}>@maisonboutique</span>
        </div>
      </footer>
    </>
  );
}
