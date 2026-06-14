import Image from 'next/image';
import Link from 'next/link';
import { Home, ArrowRight, Check, Star, MapPin, TrendingUp, Key, Phone, Mail, ChevronDown, Users } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';
const SAND = '#E8E0D0';

const SVCS = [
  { icon: Home, title: 'Buyer Representation', tag: 'Most Popular', desc: 'Expert guidance from first showing to closing day. We negotiate on your behalf and protect your interests at every step.', items: ['Pre-approval coordination', 'Neighborhood & market analysis', 'Offer strategy & negotiation', 'Inspection & contingency guidance', 'Closing cost analysis'] },
  { icon: TrendingUp, title: 'Listing & Selling', tag: 'Top Results', desc: 'Strategic pricing, professional photography, and targeted marketing to sell your home fast and for the most money.', items: ['Comparative market analysis', 'Professional photography & staging consult', 'MLS + digital marketing', 'Open house coordination', 'Offer review & negotiation'] },
  { icon: Key, title: 'Property Management', tag: 'Passive Income', desc: 'Full-service property management for investors and accidental landlords. We handle everything so you do not have to.', items: ['Tenant screening & placement', 'Rent collection & accounting', 'Maintenance coordination', 'Annual lease renewals', 'Monthly owner reports'] },
  { icon: Users, title: 'Relocation Services', tag: 'Corporate', desc: 'Relocating to Portland? We specialize in helping remote workers, families, and corporate transfers navigate the move.', items: ['Virtual tours available', 'Neighborhood comparisons', 'School district guidance', 'First-time buyer programs', 'Remote offer process'] },
];

const LISTINGS = [
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    address: '2847 NW Thurman St',
    beds: '3', baths: '2', sqft: '1,840',
    price: '$685,000',
    status: 'Active',
  },
  {
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    address: '5234 SE Hawthorne Blvd',
    beds: '4', baths: '3', sqft: '2,280',
    price: '$524,000',
    status: 'Active',
  },
  {
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    address: '1902 N Mississippi Ave',
    beds: '2', baths: '1', sqft: '1,120',
    price: '$445,000',
    status: 'Sold',
  },
];

const STEPS = [
  { n: '01', title: 'Free Strategy Call', desc: 'We discuss your timeline, goals, and budget — buyers, sellers, and investors all start here.' },
  { n: '02', title: 'Market Analysis', desc: 'We deliver a detailed report on pricing trends, comparable homes, and your best move in today\'s market.' },
  { n: '03', title: 'Execute the Plan', desc: 'Whether buying, selling, or both — we handle negotiations, paperwork, and every detail in between.' },
  { n: '04', title: 'Close With Confidence', desc: 'Clear communication to closing day. No surprises, no last-minute chaos. Just results.' },
  { n: '05', title: 'Stay Connected', desc: 'Post-close, we remain your resource for referrals, market updates, and future transactions.' },
];

const AGENTS = [
  { name: 'Sarah Nguyen', title: 'Senior Buyer\'s Agent', years: '9 years', sales: '320+ transactions', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop' },
  { name: 'Tom Erikson', title: 'Listing Specialist', years: '11 years', sales: '$140M+ sold', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop' },
  { name: 'Aisha Patel', title: 'Property Manager', years: '7 years', sales: '85+ managed units', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop' },
];

const REVIEWS = [
  { text: "Sarah guided us through our first home purchase without any pressure. She knew the market and fought hard on our offer. We closed under asking.", author: "Chris & Amy P.", type: "Buyer" },
  { text: "Sold our home in 6 days at $22,000 over asking. Tom had a strategy from day one — photos, marketing, perfect timing.", author: "Robert L.", type: "Seller" },
  { text: "Aisha has managed our rental duplex for two years. Zero vacancy, rent on time every month. I never have to worry.", author: "Pat H.", type: "Property Mgmt" },
];

const FAQS = [
  { q: "How is Meridian Properties different from other Portland agents?", a: "We are a boutique team, not a big box brokerage. Every client works directly with a senior agent — no hand-offs to assistants. We cap our client load so every transaction gets full attention. Our average list-to-close time is 21 days faster than the Portland metro average." },
  { q: "What are your agent fees for buyers?", a: "Buyer representation is at no cost to you in most transactions — the seller typically pays both agents' commissions. Oregon's new buyer agreement rules require us to discuss and sign a representation agreement before we can show homes, which we handle in our first call." },
  { q: "How do you determine the right listing price for my home?", a: "We run a Comparative Market Analysis using recent sales within a half-mile, your property condition, upgrades, and current buyer demand. We do not guess — we price based on data. Overpricing kills listings, and we never do it." },
  { q: "Do you work with first-time buyers?", a: "Absolutely — first-time buyers are a priority for us. We walk you through every step: pre-approval, offer strategy, inspections, and closing. We also connect clients with Oregon Bond and OHCS down payment assistance programs when eligible." },
  { q: "Can you help if I need to buy and sell at the same time?", a: "Yes. Coordinating a simultaneous buy/sell is a specialty of ours. We can often negotiate contingencies that protect you from owning two homes at once, and we sequence the process so it runs smoothly." },
  { q: "Do you work outside of Portland proper?", a: "Yes — we serve the full Portland metro including Beaverton, Hillsboro, Lake Oswego, Tigard, Tualatin, and into Clark County, WA. If you are unsure whether your area is covered, just ask." },
];

const displayFont = { fontFamily: 'var(--font-display)', fontWeight: 800 } as const;
const bodyFont = { fontFamily: 'var(--font-display)', fontWeight: 400 } as const;
const semiBold = { fontFamily: 'var(--font-display)', fontWeight: 600 } as const;
const bold = { fontFamily: 'var(--font-display)', fontWeight: 700 } as const;

export default function MeridianHome() {
  return (
    <>
      {/* ── HERO: SIDEBAR ANCHORED ── */}
      <section className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] min-h-screen">

        {/* LEFT SIDEBAR */}
        <aside
          className="flex flex-col px-8 py-10 lg:py-14 lg:sticky lg:top-0 lg:h-screen overflow-y-auto"
          style={{ backgroundColor: SLATE }}
        >
          {/* Wordmark */}
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4 shrink-0" style={{ color: FOREST }} />
            <span className="text-white text-lg tracking-widest uppercase leading-tight" style={displayFont}>
              Meridian<br />Properties
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-1 mt-2" style={semiBold}>Portland Metro Real Estate</p>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-widest mb-8 self-start mt-1"
            style={{ backgroundColor: FOREST + '30', color: '#6EBF9A', ...semiBold }}
          >
            Est. 2011
          </div>

          {/* Contact */}
          <div className="space-y-2 mb-8">
            <a href="tel:5035550182" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs" style={bodyFont}>
              <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} />
              (503) 555-0182
            </a>
            <a href="mailto:hello@meridianproperties.co" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs" style={bodyFont}>
              <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} />
              hello@meridianproperties.co
            </a>
            <div className="flex items-start gap-2 text-white/60 text-xs" style={bodyFont}>
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: FOREST }} />
              1420 NW Lovejoy St, Ste 210<br />Portland, OR 97209
            </div>
          </div>

          {/* Stats vertical */}
          <div className="space-y-5 mb-10 border-t border-white/10 pt-8">
            {[
              ['$290M+', 'Total Volume Sold'],
              ['850+', 'Transactions Closed'],
              ['4.9 ★', '240+ Reviews'],
            ].map(([v, l]) => (
              <div key={v}>
                <div className="text-2xl text-white leading-none mb-0.5" style={displayFont}>{v}</div>
                <div className="text-[9px] uppercase tracking-widest" style={{ color: '#6EBF9A', ...semiBold }}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`${BASE}/contact`}
            className="mt-auto inline-flex items-center justify-center gap-2 text-white text-[11px] uppercase tracking-widest py-3.5 px-6 transition-opacity hover:opacity-90"
            style={{ backgroundColor: FOREST, ...semiBold }}
          >
            Schedule a Consultation <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </aside>

        {/* RIGHT: Photo + Headline */}
        <div className="flex flex-col">
          {/* Full-bleed photo — 60vh on desktop */}
          <div className="relative w-full" style={{ height: '60vh', minHeight: 320 }}>
            <Image
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2066&auto=format&fit=crop"
              alt="Portland aerial neighborhood"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(247,245,240,0.15) 100%)' }} />
          </div>

          {/* Headline section */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-16" style={{ backgroundColor: CREAM }}>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px" style={{ backgroundColor: FOREST }} />
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400" style={semiBold}>13 Years · Portland Metro</span>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight mb-6" style={{ ...displayFont, color: SLATE }}>
                Portland's most trusted<br />real estate partners.
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed" style={bodyFont}>
                Buyer's agents, listing specialists, and property managers serving Portland and the surrounding metro since 2011. Boutique service, big results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-8 py-4"
                  style={{ backgroundColor: FOREST, ...semiBold }}
                >
                  Free Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center gap-2 border text-[11px] uppercase tracking-widest px-8 py-4"
                  style={{ borderColor: SLATE, color: SLATE, ...semiBold }}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED LISTINGS with hover price reveal ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.5em] mb-3" style={{ color: FOREST, ...semiBold }}>Portfolio</div>
              <h2 className="text-4xl" style={{ ...displayFont, color: SLATE }}>Featured Listings</h2>
            </div>
            <Link href={`${BASE}/services`} className="hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest border-b pb-0.5" style={{ color: FOREST, borderColor: FOREST, ...semiBold }}>
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {LISTINGS.map((p, i) => (
              <div key={i} className="group overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                {/* Photo with hover overlay */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={p.img}
                    alt={p.address}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Status badge */}
                  <div
                    className="absolute top-3 left-3 text-[9px] uppercase tracking-widest px-2.5 py-1 text-white z-10"
                    style={{ backgroundColor: p.status === 'Sold' ? SLATE : FOREST, ...semiBold }}
                  >
                    {p.status}
                  </div>
                  {/* Price overlay — slides up from bottom on hover */}
                  <div
                    className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-5 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-10"
                    style={{ backgroundColor: FOREST }}
                  >
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{p.price}</div>
                    <div className="text-white/70 text-xs uppercase tracking-widest" style={semiBold}>{p.address}</div>
                  </div>
                </div>
                {/* Card info */}
                <div className="p-5" style={{ backgroundColor: CREAM }}>
                  <div className="font-bold text-base mb-1" style={{ ...bold, color: SLATE }}>{p.address}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-500" style={bodyFont}>
                    <span>{p.beds} bd</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    <span>{p.baths} ba</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    <span>{p.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: FOREST, ...semiBold }}>What We Do</div>
            <h2 className="text-4xl mb-3" style={{ ...displayFont, color: SLATE }}>Full-Service Real Estate</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto" style={bodyFont}>Whether buying, selling, or investing — we have the expertise and local knowledge to deliver exceptional results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SVCS.map(({ icon: Icon, title, tag, desc, items }, i) => (
              <div
                key={i}
                className="group bg-white p-6 border-t-2 hover:border-t-4 transition-all duration-200 cursor-pointer"
                style={{ borderTopColor: FOREST }}
              >
                <Icon className="w-5 h-5 mb-4 transition-colors" style={{ color: FOREST }} strokeWidth={1.5} />
                <div className="text-[9px] uppercase tracking-widest mb-2" style={{ color: FOREST, ...semiBold }}>{tag}</div>
                <h3 className="text-sm mb-2 leading-snug" style={{ ...bold, color: SLATE }}>{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed" style={bodyFont}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest px-8 py-3 border" style={{ borderColor: FOREST, color: FOREST, ...semiBold }}>
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AGENT TEAM ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: FOREST, ...semiBold }}>Our Team</div>
            <h2 className="text-4xl" style={{ ...displayFont, color: SLATE }}>Meet Your Agents</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {AGENTS.map((a, i) => (
              <div key={i} className="text-center">
                <div className="relative w-28 h-28 mx-auto mb-5 overflow-hidden rounded-full border-4" style={{ borderColor: SAND }}>
                  <Image src={a.img} alt={a.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-lg mb-1" style={{ ...bold, color: SLATE }}>{a.name}</div>
                <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: FOREST, ...semiBold }}>{a.title}</div>
                <div className="text-xs text-gray-400 space-y-0.5" style={bodyFont}>
                  <div>{a.years} experience</div>
                  <div>{a.sales}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — horizontal timeline ── */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: FOREST, ...semiBold }}>Our Process</div>
            <h2 className="text-4xl" style={{ ...displayFont, color: SLATE }}>From First Call to Closing Day</h2>
          </div>
          {/* Timeline row */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px" style={{ backgroundColor: SAND }} />
            <div className="grid md:grid-cols-5 gap-8 relative">
              {STEPS.map(({ n, title, desc }, i) => (
                <div key={i} className="text-center relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-5 text-sm relative z-10"
                    style={{ backgroundColor: FOREST, color: 'white', ...bold }}
                  >
                    {n}
                  </div>
                  <h3 className="text-sm mb-2 leading-snug" style={{ ...bold, color: SLATE }}>{title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed" style={bodyFont}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-10 py-4" style={{ backgroundColor: FOREST, ...semiBold }}>
              Schedule a Free Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS on SLATE ── */}
      <section style={{ backgroundColor: SLATE }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4 text-white/40" style={semiBold}>Client Stories</div>
            <h2 className="text-4xl text-white" style={displayFont}>What Our Clients Say</h2>
            <p className="text-white/40 text-sm mt-2" style={bodyFont}>4.9 Stars · 240+ Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 border-l-4 bg-white/5" style={{ borderLeftColor: FOREST }}>
                <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: FOREST }} />)}</div>
                <p className="text-white/65 italic text-sm leading-relaxed mb-4" style={bodyFont}>"{r.text}"</p>
                <div className="text-white text-xs" style={bold}>— {r.author} <span className="text-white/35 font-normal" style={bodyFont}>· {r.type}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest" style={{ color: '#6EBF9A', ...semiBold }}>
              Read All Reviews <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: FOREST, ...semiBold }}>FAQ</div>
            <h2 className="text-4xl" style={{ ...displayFont, color: SLATE }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="text-sm leading-snug" style={{ ...bold, color: SLATE }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: FOREST }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed" style={bodyFont}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / MAP ── */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: FOREST, ...semiBold }}>Our Office</div>
            <div className="flex items-start gap-2 text-gray-500 text-sm" style={bodyFont}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} />
              <span>1420 NW Lovejoy St, Suite 210<br />Portland, OR 97209</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: FOREST, ...semiBold }}>Hours</div>
            <div className="text-gray-500 text-sm space-y-1" style={bodyFont}>
              <div>Mon – Fri: 8:30am – 6:00pm</div>
              <div>Sat – Sun: By appointment</div>
              <div className="text-sm mt-2" style={{ color: FOREST, ...semiBold }}>Evening showings available</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: FOREST, ...semiBold }}>Talk to Us</div>
            <a href="tel:5035550182" className="inline-flex items-center gap-2 text-gray-800 text-base" style={bold}>
              <Phone className="w-4 h-4" style={{ color: FOREST }} /> (503) 555-0182
            </a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest px-7 py-3 text-white" style={{ backgroundColor: FOREST, ...semiBold }}>
              Free Strategy Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 text-center">
        <h2 className="text-3xl text-white mb-4" style={displayFont}>Ready to find your next home?</h2>
        <p className="text-white/65 mb-8 max-w-lg mx-auto" style={bodyFont}>Free market analysis for sellers. Free buyer consultation. No obligation. Let us guide you from first step to closing day.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white text-[11px] uppercase tracking-widest px-10 py-4" style={{ color: FOREST, ...semiBold }}>
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white text-[11px] uppercase tracking-widest px-10 py-4" style={semiBold}>
            View Listings
          </Link>
        </div>
      </section>
    </>
  );
}
