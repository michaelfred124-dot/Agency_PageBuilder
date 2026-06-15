import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Star, ChevronDown, Phone, MapPin, Home, TrendingUp, Key, Users, Building2, Award } from 'lucide-react';

const BASE = '/work/meridian-properties';
const BG = '#0D1117';
const GOLD = '#B8A27A';
const CARD = '#141C25';
const BORDER = 'rgba(184,162,122,0.2)';
const MUTED = 'rgba(255,255,255,0.4)';

const LISTINGS = [
  {
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    price: '$1,400,000',
    address: '4812 Chickering Lane',
    neighborhood: 'Belle Meade',
    beds: 4, baths: 4, sqft: '4,820',
    tag: 'Just Listed',
  },
  {
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    price: '$875,000',
    address: '2219 Greybar Lane',
    neighborhood: 'Green Hills',
    beds: 3, baths: 3, sqft: '2,940',
    tag: 'Active',
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    price: '$2,100,000',
    address: '1105 Governors Ridge',
    neighborhood: 'Brentwood',
    beds: 5, baths: 5, sqft: '6,100',
    tag: 'Coming Soon',
  },
];

const SERVICES = [
  {
    icon: Home,
    title: 'Buyer Representation',
    desc: 'We advocate exclusively for you from your first showing to the closing table. Expert negotiation, market analysis, and total transparency.',
    items: ['Pre-approval coordination', 'Comparative market analysis', 'Offer strategy & negotiation', 'Inspection guidance', 'Closing cost review'],
  },
  {
    icon: TrendingUp,
    title: 'Seller Marketing',
    desc: 'Precision pricing, professional staging consultation, and omnichannel marketing designed to command maximum value for your home.',
    items: ['Luxury photography & video', 'MLS + digital targeting', 'International buyer reach', 'Open house coordination', 'Offer management'],
  },
  {
    icon: Building2,
    title: 'Investment Properties',
    desc: 'From single-family rentals to multi-unit acquisitions, we identify high-yield opportunities and model returns with institutional rigor.',
    items: ['Cap rate & cash flow analysis', 'Off-market deal sourcing', '1031 exchange guidance', 'Portfolio diversification', 'Property management referrals'],
  },
  {
    icon: Users,
    title: 'Relocation Services',
    desc: 'Moving to Nashville? We specialize in seamless transitions for executives, families, and corporate relocations.',
    items: ['Virtual tour consultations', 'School district guidance', 'Neighborhood comparisons', 'Corporate timeline management', 'Remote offer process'],
  },
];

const STEPS = [
  { n: '01', title: 'Free Valuation', desc: 'We deliver a detailed market analysis and strategic roadmap for your property — at no cost or obligation.' },
  { n: '02', title: 'Property Search', desc: 'Curated listings matched to your exact criteria. We surface on-market and off-market opportunities.' },
  { n: '03', title: 'Offer & Negotiation', desc: 'Battle-tested negotiation strategy that has secured $1.4B in transactions for our clients.' },
  { n: '04', title: 'Closing Day', desc: 'White-glove coordination through every step. Clear communication, zero surprises.' },
];

const AGENTS = [
  { img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop', name: 'Catherine Harlow', title: 'Principal Broker', sales: '$420M+ in career sales' },
  { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop', name: 'Isabelle Monroe', title: 'Luxury Specialist', sales: '$210M+ in career sales' },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop', name: 'James Aldridge', title: 'Investment Advisor', sales: '$180M+ in career sales' },
];

const TESTIMONIALS = [
  { quote: "Catherine negotiated $140,000 above our asking price with multiple offers in hand. The process was flawless — from listing to closing in 18 days.", name: 'Robert & Claire S.', note: 'Sold in Green Hills' },
  { quote: "Meridian found us an off-market Belle Meade property that never hit the MLS. Their network is simply unmatched in Nashville.", name: 'Thomas W.', note: 'Purchased in Belle Meade' },
  { quote: "The investment analysis James prepared was the most thorough I have seen. We closed on two rental properties and cash flow is already exceeding projections.", name: 'Priya K.', note: 'Investor Portfolio' },
];

const FAQS = [
  { q: "How does Meridian differ from other Nashville real estate firms?", a: "We are a boutique firm, not a volume shop. Every client works directly with a senior agent — never handed off to a junior assistant. We cap our client roster so every transaction receives full strategic attention. Our average days-on-market is 40% below the Nashville metro average." },
  { q: "What neighborhoods does Meridian specialize in?", a: "We cover the full greater Nashville area with deep expertise in Belle Meade, Green Hills, Brentwood, Franklin, 12South, East Nashville, and the luxury lakefront communities. We also serve the Williamson County and Sumner County markets for clients relocating from out of state." },
  { q: "How do you determine my home's listing price?", a: "We run a Comparative Market Analysis drawing on recent closed sales within a half-mile radius, your home's condition, finishes, and lot attributes, plus current buyer demand signals. We never guess and never overprice — homes priced correctly from day one sell faster and for more money." },
  { q: "Do you work with first-time buyers?", a: "Absolutely. First-time buyers receive the same level of service as our highest-volume investors. We walk you through pre-approval, offer strategy, inspections, and closing — and we connect qualifying clients with THDA down payment assistance programs." },
  { q: "What does your property valuation include?", a: "Our complimentary valuation is a full Broker Price Opinion — not an automated Zestimate. It includes a room-by-room condition assessment, comparable sales analysis, neighborhood absorption rate, and a written net proceeds estimate. We present it in person or via video call." },
  { q: "Can you help with a simultaneous buy and sell?", a: "Yes — coordinating concurrent transactions is a core specialty. We sequence the listing and purchase timelines, negotiate contingencies that protect you from carrying two mortgages, and manage both closings with a single point of contact." },
];

export default function MeridianProperties() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff', fontFamily: 'Georgia, serif' }}>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 py-5" style={{ backgroundColor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <div className="flex items-center gap-2">
          <span className="text-lg tracking-[0.2em] font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>MERIDIAN</span>
          <span className="text-lg tracking-[0.15em] font-light text-white/70" style={{ fontFamily: 'Georgia, serif' }}>PROPERTIES</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Buy', 'Sell', 'Invest', 'About'].map((item) => (
            <Link key={item} href={`${BASE}/${item.toLowerCase()}`} className="text-xs tracking-widest uppercase font-light" style={{ color: MUTED }}>{item}</Link>
          ))}
        </div>
        <Link href={`${BASE}/contact`} className="text-xs font-bold uppercase tracking-widest px-6 py-3" style={{ backgroundColor: GOLD, color: '#0D1117' }}>
          Get a Valuation
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Nashville home"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.4) 60%, rgba(13,17,23,0.2) 100%)' }} />
        </div>
        <div className="relative z-10 flex items-end pb-24 px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: GOLD }}>
              NASHVILLE&apos;S PREMIER REAL ESTATE FIRM
            </p>
            <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-6 text-white">
              Discover your<br />extraordinary home.
            </h1>
            <p className="text-lg mb-10 max-w-lg leading-relaxed" style={{ color: MUTED }}>
              Eighteen years of precision real estate in Nashville&apos;s most coveted neighborhoods. Boutique service, extraordinary results.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href={`${BASE}/listings`} className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest" style={{ backgroundColor: GOLD, color: '#0D1117' }}>
                Browse Listings <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest border text-white" style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                Book a Valuation
              </Link>
            </div>
            {/* Floating search bar */}
            <div className="rounded-xl p-5 flex flex-col md:flex-row gap-4" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
              <div className="flex-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: GOLD }}>Neighborhood</label>
                <input readOnly defaultValue="Belle Meade, Green Hills, Brentwood..." className="w-full bg-transparent text-sm text-white/60 outline-none border-0" />
              </div>
              <div className="w-px hidden md:block" style={{ backgroundColor: BORDER }} />
              <div className="flex-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: GOLD }}>Property Type</label>
                <input readOnly defaultValue="Single Family, Condo, Land..." className="w-full bg-transparent text-sm text-white/60 outline-none border-0" />
              </div>
              <div className="w-px hidden md:block" style={{ backgroundColor: BORDER }} />
              <div className="flex-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: GOLD }}>Price Range</label>
                <input readOnly defaultValue="$500K – $5M+" className="w-full bg-transparent text-sm text-white/60 outline-none border-0" />
              </div>
              <Link href={`${BASE}/listings`} className="self-end px-6 py-2.5 text-xs font-bold uppercase tracking-widest shrink-0" style={{ backgroundColor: GOLD, color: '#0D1117' }}>
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4">
          {[['$1.4B', 'Sold'], ['820+', 'Transactions'], ['18 Years', 'Experience'], ['4.9★', 'Rating']].map(([val, label], i) => (
            <div key={i} className="text-center relative">
              {i > 0 && <div className="absolute left-0 top-1/4 h-1/2 w-px hidden md:block" style={{ backgroundColor: BORDER }} />}
              <div className="text-5xl font-bold mb-2" style={{ color: GOLD, fontFamily: 'Georgia, serif' }}>{val}</div>
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: MUTED }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>Portfolio</p>
              <h2 className="text-5xl font-serif text-white">Featured Listings</h2>
            </div>
            <Link href={`${BASE}/listings`} className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest pb-0.5 border-b" style={{ color: GOLD, borderColor: GOLD }}>
              View All Properties <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LISTINGS.map((p, i) => (
              <Link href={`${BASE}/listings`} key={i} className="group block overflow-hidden" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                <div className="relative h-64 overflow-hidden">
                  <Image src={p.img} alt={p.address} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,17,23,0.6) 0%, transparent 60%)' }} />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5" style={{ backgroundColor: GOLD, color: '#0D1117' }}>{p.tag}</span>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold mb-1" style={{ color: GOLD, fontFamily: 'Georgia, serif' }}>{p.price}</div>
                  <div className="text-white font-medium mb-1">{p.address}</div>
                  <div className="text-xs mb-4" style={{ color: MUTED }}>{p.neighborhood} &nbsp;·&nbsp; {p.beds} bed &nbsp;·&nbsp; {p.baths} bath &nbsp;·&nbsp; {p.sqft} sqft</div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
                    View Property <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: CARD }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>What We Do</p>
            <h2 className="text-5xl font-serif text-white mb-4">Comprehensive Real Estate Services</h2>
            <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: MUTED }}>From first consultation to closing and beyond, we offer a full suite of services backed by 18 years of Nashville market expertise.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, items }, i) => (
              <div key={i} className="p-8 relative" style={{ backgroundColor: BG, borderLeft: `3px solid ${GOLD}` }}>
                <Icon className="w-6 h-6 mb-5" style={{ color: GOLD }} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>{desc}</p>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs" style={{ color: MUTED }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>Our Process</p>
            <h2 className="text-5xl font-serif text-white">From first call to closing day.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px hidden md:block" style={{ borderTop: `1px dashed ${GOLD}`, opacity: 0.35 }} />
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold relative z-10" style={{ border: `1px solid ${GOLD}`, color: GOLD, backgroundColor: BG, fontFamily: 'Georgia, serif' }}>
                  {n}
                </div>
                <h3 className="text-base font-bold text-white mb-3">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-widest" style={{ backgroundColor: GOLD, color: '#0D1117' }}>
              Begin Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>Our Team</p>
            <h2 className="text-5xl font-serif text-white">Featured Agents</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {AGENTS.map((agent, i) => (
              <div key={i} className="text-center">
                <div className="relative w-52 h-52 rounded-full overflow-hidden mx-auto mb-6" style={{ border: `2px solid ${BORDER}` }}>
                  <Image src={agent.img} alt={agent.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{agent.name}</h3>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>{agent.title}</div>
                <div className="text-xs" style={{ color: MUTED }}>{agent.sales}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>Client Testimonials</p>
            <h2 className="text-5xl font-serif text-white">What our clients say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: CARD, borderTop: `2px solid ${GOLD}` }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: GOLD }} />)}
                </div>
                <p className="text-sm italic leading-relaxed mb-6" style={{ color: MUTED }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs mt-1" style={{ color: GOLD }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: CARD }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: GOLD }}>FAQ</p>
            <h2 className="text-5xl font-serif text-white">Common Questions</h2>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <summary className="flex items-center justify-between cursor-pointer gap-4 py-6">
                  <span className="font-bold text-sm text-white leading-snug">{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 group-open:rotate-180 transition-transform" style={{ color: GOLD }} />
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 text-center" style={{ backgroundColor: GOLD }}>
        <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: 'rgba(13,17,23,0.5)' }}>Get Started Today</p>
        <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ color: '#0D1117' }}>Your next chapter<br />starts here.</h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'rgba(13,17,23,0.65)' }}>Schedule a complimentary valuation or buyer consultation with one of our senior agents. No pressure, no obligation.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-widest" style={{ backgroundColor: '#0D1117', color: GOLD }}>
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={`${BASE}/listings`} className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-widest border" style={{ borderColor: 'rgba(13,17,23,0.3)', color: '#0D1117' }}>
            Browse Listings
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 md:px-16" style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base tracking-[0.2em] font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>MERIDIAN</span>
                <span className="text-base tracking-[0.15em] font-light text-white/50" style={{ fontFamily: 'Georgia, serif' }}>PROPERTIES</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>Nashville&apos;s trusted luxury real estate firm since 2006. Serving Belle Meade, Green Hills, Brentwood, and beyond.</p>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>Property Types</div>
              <ul className="space-y-2">
                {['Luxury Homes', 'Condos & Lofts', 'Investment Property', 'New Construction', 'Land & Lots'].map((item) => (
                  <li key={item}><Link href={`${BASE}/listings`} className="text-xs hover:text-white transition-colors" style={{ color: MUTED }}>{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>Contact</div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xs" style={{ color: MUTED }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  3210 West End Ave, Suite 500<br />Nashville, TN 37203
                </div>
                <a href="tel:6155550265" className="flex items-center gap-2 text-xs hover:text-white transition-colors" style={{ color: MUTED }}>
                  <Phone className="w-3.5 h-3.5" style={{ color: GOLD }} /> (615) 555-0265
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>Follow</div>
              <div className="flex gap-3">
                {['IG', 'FB', 'LI', 'YT'].map((s) => (
                  <Link key={s} href="#" className="w-9 h-9 flex items-center justify-center text-xs font-bold border" style={{ color: GOLD, borderColor: BORDER }}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 Meridian Properties LLC. All rights reserved. Licensed in Tennessee.</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>MLS information deemed reliable but not guaranteed. All listings subject to prior sale or withdrawal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
