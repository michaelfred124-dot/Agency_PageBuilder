import Image from 'next/image';
import Link from 'next/link';
import { Home, ArrowRight, Check, Star, MapPin, TrendingUp, Key, Phone, ChevronDown, Users } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';

const SVCS = [
  { icon: Home, title: 'Buyer Representation', tag: 'Most Popular', desc: 'Expert guidance from first showing to closing day. We negotiate on your behalf and protect your interests at every step.', items: ['Pre-approval coordination', 'Neighborhood & market analysis', 'Offer strategy & negotiation', 'Inspection & contingency guidance', 'Closing cost analysis'] },
  { icon: TrendingUp, title: 'Listing & Selling', tag: 'Top Results', desc: 'Strategic pricing, professional photography, and targeted marketing to sell your home fast and for the most money.', items: ['Comparative market analysis', 'Professional photography & staging consult', 'MLS + digital marketing', 'Open house coordination', 'Offer review & negotiation'] },
  { icon: Key, title: 'Property Management', tag: 'Passive Income', desc: 'Full-service property management for investors and accidental landlords. We handle everything so you do not have to.', items: ['Tenant screening & placement', 'Rent collection & accounting', 'Maintenance coordination', 'Annual lease renewals', 'Monthly owner reports'] },
  { icon: Users, title: 'Relocation Services', tag: 'Corporate', desc: 'Relocating to Portland? We specialize in helping remote workers, families, and corporate transfers navigate the move.', items: ['Virtual tours available', 'Neighborhood comparisons', 'School district guidance', 'First-time buyer programs', 'Remote offer process'] },
];

const FEATURED = [
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop', label: 'Just Sold', price: '$685,000', beds: '4 bd', baths: '3 ba', city: 'Portland Heights' },
  { img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', label: 'Active', price: '$520,000', beds: '3 bd', baths: '2 ba', city: 'Beaverton' },
  { img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop', label: 'Active', price: '$1,100,000', beds: '5 bd', baths: '4 ba', city: 'Lake Oswego' },
];

const STEPS = [
  { n: '01', title: 'Free Strategy Call', desc: 'We discuss your timeline, goals, and budget — buyers, sellers, and investors all start here.' },
  { n: '02', title: 'Market Analysis', desc: 'We deliver a detailed report on pricing trends, comparable homes, and your best move in today\'s market.' },
  { n: '03', title: 'Execute the Plan', desc: 'Whether buying, selling, or both — we handle negotiations, paperwork, and every detail in between.' },
  { n: '04', title: 'Close With Confidence', desc: 'Clear communication to closing day. No surprises, no last-minute chaos. Just results.' },
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

export default function MeridianHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2066&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(46,58,71,0.97) 0%, rgba(46,58,71,0.5) 55%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-3xl">
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-px" style={{ backgroundColor: FOREST }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">Portland Metro · Est. 2011 · $290M+ Sold</span></div>
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-5">Portland real estate,<br />done with <em>integrity</em>.</h1>
          <p className="text-white/65 text-lg mb-10 max-w-xl leading-relaxed">Buyer's agents, listing specialists, and property managers serving Portland and the surrounding metro since 2011. Boutique service, big results.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: FOREST }}>Free Strategy Call <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4">Our Services</Link>
            <a href="tel:5035550182" className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-bold uppercase tracking-widest text-[11px] px-8 py-4"><Phone className="w-4 h-4" /> (503) 555-0182</a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: SLATE }} className="py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['$290M+', 'Total Volume Sold'], ['850+', 'Transactions Closed'], ['13 Years', 'Serving Portland'], ['4.9 ★', '240+ Reviews']].map(([v, l], i) => (
            <div key={i}>
              <div className="text-3xl font-serif font-bold text-white mb-1">{v}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: FOREST }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>What We Do</div>
            <h2 className="text-4xl font-serif mb-3" style={{ color: SLATE }}>Full-Service Real Estate</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Whether buying, selling, or investing — we have the expertise and local knowledge to deliver exceptional results.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SVCS.map(({ icon: Icon, title, tag, desc, items }, i) => (
              <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: FOREST }}>
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-5 h-5" style={{ color: FOREST }} strokeWidth={1.5} />
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 text-white" style={{ backgroundColor: FOREST }}>{tag}</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: SLATE }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-8 py-3 border" style={{ borderColor: FOREST, color: FOREST }}>All Services & FAQs <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Portfolio</div>
            <h2 className="text-4xl font-serif" style={{ color: SLATE }}>Recent Properties</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED.map((p, i) => (
              <div key={i} className="overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-56">
                  <Image src={p.img} alt="" fill className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 text-white" style={{ backgroundColor: FOREST }}>{p.label}</div>
                </div>
                <div className="p-5">
                  <div className="font-bold text-xl mb-1" style={{ color: SLATE }}>{p.price}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2"><MapPin className="w-3 h-3" />{p.beds} · {p.baths} · {p.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: FOREST }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 text-white/50">Our Process</div>
            <h2 className="text-4xl font-serif text-white">From First Call to Closing Day</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="border border-white/20 p-7">
                <div className="text-4xl font-serif font-bold mb-4 text-white/20">{n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: FOREST }}>Schedule a Free Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Client Stories</div>
            <h2 className="text-4xl font-serif" style={{ color: SLATE }}>What Our Clients Say</h2>
            <p className="text-gray-500 text-sm mt-2">4.9 Stars · 240+ Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-8 border-l-4" style={{ borderLeftColor: FOREST }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: FOREST }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: SLATE }}>— {r.author} <span className="text-gray-400 font-normal">· {r.type}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest justify-center" style={{ color: FOREST }}>Read All Reviews <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>FAQ</div>
            <h2 className="text-4xl font-serif" style={{ color: SLATE }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: SLATE }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: FOREST }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: SLATE }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: FOREST }}>Our Office</div>
            <div className="flex items-start gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} />
              <span>1420 NW Lovejoy St, Suite 210<br />Portland, OR 97209</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: FOREST }}>Hours</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>Mon – Fri: 8:30am – 6:00pm</div>
              <div>Sat – Sun: By appointment</div>
              <div className="font-bold text-sm mt-2" style={{ color: FOREST }}>Evening showings available</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: FOREST }}>Talk to Us</div>
            <a href="tel:5035550182" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: FOREST }} /> (503) 555-0182</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-7 py-3 text-white" style={{ backgroundColor: FOREST }}>Free Strategy Consultation <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">Ready to find your next home?</h2>
        <p className="text-white/65 mb-8 max-w-lg mx-auto">Free market analysis for sellers. Free buyer consultation. No obligation. Let us guide you from first step to closing day.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: FOREST }}>Schedule a Consultation <ArrowRight className="w-4 h-4" /></Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4">View Listings</Link>
        </div>
      </section>
    </>
  );
}
