import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Star, ChevronDown, MapPin, Home, TrendingUp, Users, Building2, Search, Calendar, ShieldCheck } from 'lucide-react';

const BASE = '/work/meridian-properties';
const BG = '#FAF8F5';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';
const MUTED = 'rgba(31,36,46,0.6)';

const LISTINGS = [
  {
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop',
    price: '$1,400,000',
    address: '4812 Chickering Lane',
    neighborhood: 'Belle Meade',
    beds: 4, baths: 4, sqft: '4,820',
    tag: 'Just Listed',
  },
  {
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop',
    price: '$875,000',
    address: '2219 Greybar Lane',
    neighborhood: 'Green Hills',
    beds: 3, baths: 3, sqft: '2,940',
    tag: 'Active',
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    price: '$2,100,000',
    address: '1105 Governors Ridge',
    neighborhood: 'Brentwood',
    beds: 5, baths: 5, sqft: '6,100',
    tag: 'Coming Soon',
  },
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    price: '$3,450,000',
    address: '812 Jackson Boulevard',
    neighborhood: 'Belle Meade',
    beds: 6, baths: 7, sqft: '7,800',
    tag: 'Premium Estate',
  }
];

const SERVICES = [
  {
    icon: Home,
    title: 'Buyer Representation',
    desc: 'Bespoke market analysis, off-market sourcing, and expert negotiation to secure your next Nashville estate.',
    items: ['Pre-market tour planning', 'Comparative valuation analyses', 'Structured offer strategies'],
  },
  {
    icon: TrendingUp,
    title: 'Seller Marketing',
    desc: 'Luxury media distribution and targeted multi-channel promotion designed to command absolute peak value.',
    items: ['Cinematic listing videos', 'Global buyer syndicate access', 'Omnichannel digital targeting'],
  },
  {
    icon: Building2,
    title: 'Investment Advisory',
    desc: 'From high-yield acquisitions to portfolio restructures, backed by deep cash flow and tax modeling.',
    items: ['Cap rate returns forecasting', '1031 exchange blueprints', 'Property management audits'],
  },
];

const AGENTS = [
  { img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop', name: 'Catherine Harlow', title: 'Principal Broker', sales: '$420M+ Sales' },
  { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', name: 'Isabelle Monroe', title: 'Luxury Specialist', sales: '$210M+ Sales' },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop', name: 'James Aldridge', title: 'Investment Advisor', sales: '$180M+ Sales' },
];

const TESTIMONIALS = [
  { quote: "Catherine Harlow secured $140,000 above our listing valuation with multiple offers in hand. Absolute elite-tier brokerage.", name: 'Robert & Claire S.', note: 'Sold in Green Hills' },
  { quote: "Meridian Properties sourced an off-market Belle Meade estate that never hit the MLS. Their network is unmatched in Nashville.", name: 'Thomas W.', note: 'Bought in Belle Meade' },
];

const FAQS = [
  { q: "How does Meridian Properties differ from other Nashville brokerages?", a: "We are a boutique firm by design. Every client partners directly with a senior advisor. We cap our client roster so your transaction receives maximum priority." },
  { q: "What neighborhoods do you specialize in?", a: "We specialize in Belle Meade, Green Hills, Brentwood, Franklin, 12South, East Nashville, and luxury suburban estates in Williamson County." },
  { q: "How do you calculate property valuations?", a: "We run custom comparative analyses factoring in room-by-room finishes, micro-market absorption rates, and off-market variables. It is a true broker estimate, not an automated system algorithm." },
];

export default function MeridianProperties() {
  return (
    <div style={{ backgroundColor: BG, color: SLATE }} className="overflow-x-hidden pb-12">

      {/* HERO BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Hero Text & Call to Action (Spans 2 columns, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 p-10 md:p-16 border border-white/85 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(31,36,46,0.06)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.12)] hover:border-[#B8A27A]/35 transition-all duration-500 flex flex-col justify-between min-h-[460px] text-left">
            <div>
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#B8A27A] block mb-6">
                ESTABLISHED 2008 &nbsp;·&nbsp; NASHVILLE, TN
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight text-[#1F242E] mb-6">
                Discover your<br />extraordinary<br /><span className="text-[#B8A27A] italic font-light">home.</span>
              </h1>
              <div className="w-16 h-0.5 mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-sm max-w-md text-gray-500 leading-relaxed font-light mb-8">
                Boutique luxury real estate brokerage. $1.4B in transactions negotiated across Nashville's most coveted communities.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-white shadow-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: GOLD }}>
                Browse Units <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest border border-black/10 text-[#1F242E] hover:bg-black/5 transition-colors">
                Book Valuation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Box 2: Hero Visual Feature Image (Spans 1 column, 2 rows) */}
          <div className="relative overflow-hidden md:row-span-2 rounded-[32px] border border-white/85 shadow-[0_25px_60px_-15px_rgba(31,36,46,0.08)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.1)] transition-all duration-500 min-h-[380px] group">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Nashville House"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/75 backdrop-blur-md border border-white/50 rounded-2xl">
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block">Featured Unit</span>
              <span className="text-sm font-bold text-[#1F242E] mt-1 block">Governors Ridge Estate</span>
              <span className="text-[10px] text-gray-500 font-mono mt-0.5 block">Brentwood · $2,100,000</span>
            </div>
          </div>

          {/* Box 3: Horizontal Search Filter Bar (Spans 3 columns) */}
          <div className="md:col-span-3 p-6 border border-[#B8A27A]/25 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_20px_50px_-12px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/50 hover:shadow-[0_25px_55px_-10px_rgba(31,36,46,0.08)] transition-all duration-500 flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 w-full text-left">
              <div className="flex items-center gap-2 text-[#B8A27A] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider">Neighborhood</span>
              </div>
              <input readOnly defaultValue="Belle Meade, Green Hills, Brentwood..." className="w-full bg-transparent text-xs text-gray-500 border-0 outline-none p-0" />
            </div>
            <div className="w-full lg:w-px h-px lg:h-8 bg-black/5" />
            
            <div className="flex-1 w-full text-left">
              <div className="flex items-center gap-2 text-[#B8A27A] mb-1">
                <Home className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider">Property Type</span>
              </div>
              <input readOnly defaultValue="Single Family, Condos, Estates..." className="w-full bg-transparent text-xs text-gray-500 border-0 outline-none p-0" />
            </div>
            <div className="w-full lg:w-px h-px lg:h-8 bg-black/5" />

            <div className="flex-1 w-full text-left">
              <div className="flex items-center gap-2 text-[#B8A27A] mb-1">
                <Search className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider">Budget Range</span>
              </div>
              <input readOnly defaultValue="$800,000 – $4,000,000+" className="w-full bg-transparent text-xs text-gray-500 border-0 outline-none p-0" />
            </div>
            
            <Link href={`${BASE}/contact`} className="w-full lg:w-auto px-8 py-3 text-xs font-mono font-black uppercase tracking-widest text-white shrink-0 shadow-sm hover:opacity-95" style={{ backgroundColor: GOLD }}>
              Launch Search
            </Link>
          </div>

        </div>
      </section>

      {/* STATS BENTO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['$1.4B', 'Negotiated Sales'],
            ['820+', 'Units Transacted'],
            ['18 Years', 'Boutique Service'],
            ['4.9★', 'Google Review Avg'],
          ].map(([val, label], i) => (
            <div key={i} className="p-6 border border-[#B8A27A]/15 bg-gradient-to-br from-white/90 to-[#B8A27A]/5 backdrop-blur-xl rounded-2xl shadow-[0_15px_35px_-10px_rgba(31,36,46,0.04)] hover:border-[#B8A27A]/35 hover:shadow-[0_20px_45px_-5px_rgba(31,36,46,0.06)] transition-all duration-300 text-center">
              <div className="text-3xl font-serif font-black text-[#1F242E] mb-1">{val}</div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-bold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOUSE GALLERY / AVAILABLE UNITS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <span className="text-[#B8A27A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-3">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] tracking-tight">Available Units</h2>
          </div>
          <Link href={`${BASE}/contact`} className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest pb-0.5 border-b border-[#B8A27A] text-[#B8A27A] hover:text-black hover:border-black transition-all">
            View All Properties <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LISTINGS.map((p, i) => (
            <Link href={`${BASE}/contact?property=${encodeURIComponent(p.address)}`} key={i} className="group block overflow-hidden rounded-[24px] border border-white/85 bg-white/85 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(31,36,46,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(31,36,46,0.1)] hover:border-[#B8A27A]/30 transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <Image src={p.img} alt={p.address} fill className="object-cover group-hover:scale-103 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1.5 bg-white/90 backdrop-blur-sm text-[#1F242E] rounded-md shadow-sm">{p.tag}</span>
              </div>
              <div className="p-6 text-left">
                <div className="text-xl font-serif font-black text-[#1F242E] mb-1">{p.price}</div>
                <div className="text-xs text-gray-800 font-bold mb-1">{p.address}</div>
                <div className="text-[10px] text-gray-400 font-mono tracking-wide">{p.neighborhood} · {p.beds} Beds · {p.baths} Baths</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES - Bento Columns */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-16">
          <span className="text-[#B8A27A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-3">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] tracking-tight">Luxury Representation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, items }, i) => (
            <div key={i} className="p-8 border border-white/80 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-xl rounded-[28px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] text-left flex flex-col justify-between min-h-[320px] group hover:border-[#B8A27A]/40 transition-all duration-500">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#B8A27A]/10 flex items-center justify-center mb-6">
                  <Icon className="w-4.5 h-4.5 text-[#B8A27A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-serif font-black text-[#1F242E] mb-3 uppercase tracking-wide">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-light">{desc}</p>
              </div>
              <ul className="space-y-2.5 border-t border-black/5 pt-4">
                {items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-[10px] text-gray-600 font-mono">
                    <Check className="w-3.5 h-3.5 text-[#B8A27A] shrink-0" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTS BENTO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-16">
          <span className="text-[#B8A27A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-3">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] tracking-tight">Luxury Advisors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENTS.map((agent, i) => (
            <div key={i} className="p-6 border border-[#B8A27A]/15 bg-gradient-to-br from-white/90 to-[#B8A27A]/5 backdrop-blur-xl rounded-[28px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 text-center">
              <div className="relative w-44 h-44 rounded-full overflow-hidden mx-auto mb-6 shadow-md border-2 border-white">
                <Image src={agent.img} alt={agent.name} fill className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-serif font-black text-[#1F242E] mb-1">{agent.name}</h3>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8A27A] mb-2">{agent.title}</div>
              <div className="text-[10px] text-gray-400 font-mono tracking-wider">{agent.sales}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS & FAQ - Combined Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Testimonials (Spans 1 Column, 2 Rows) */}
          <div className="md:col-span-1 md:row-span-2 p-8 border border-white/80 bg-white/80 backdrop-blur-xl rounded-[28px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="text-[#B8A27A] font-mono font-bold text-[9px] tracking-widest uppercase block mb-6">Client Experience</span>
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current text-[#B8A27A]" />)}
              </div>
              <div className="space-y-6">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="border-b border-black/5 pb-6 last:border-0 last:pb-0">
                    <p className="text-xs italic text-gray-600 leading-relaxed font-light">"{t.quote}"</p>
                    <div className="text-[10px] font-bold text-[#1F242E] mt-3">{t.name}</div>
                    <div className="text-[9px] text-[#B8A27A] font-mono mt-0.5 uppercase tracking-wide">{t.note}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <Link href={`${BASE}/reviews`} className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#B8A27A] hover:text-black transition-colors pt-4 border-t border-black/5">
              Read Testimonials <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* FAQs (Spans 2 Columns) */}
          <div className="md:col-span-2 p-8 border border-white/80 bg-white/80 backdrop-blur-xl rounded-[28px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <span className="text-[#B8A27A] font-mono font-bold text-[9px] tracking-widest uppercase block mb-6">Common Inquiries</span>
              <h3 className="text-xl font-serif text-[#1F242E] mb-6 tracking-tight">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {FAQS.map(({ q, a }, i) => (
                  <details key={i} className="group border-b border-black/5 pb-4 last:border-0 last:pb-0">
                    <summary className="flex items-center justify-between cursor-pointer py-3 list-none">
                      <span className="font-bold text-xs text-[#1F242E] uppercase tracking-wide">{q}</span>
                      <ChevronDown className="w-4 h-4 text-[#B8A27A] transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="text-xs leading-relaxed text-gray-500 font-light pt-2">
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Factors - Bento card (Spans 2 columns) */}
          <div className="md:col-span-2 p-8 border border-[#B8A27A]/20 bg-gradient-to-br from-white/90 to-[#B8A27A]/5 backdrop-blur-xl rounded-[28px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-left md:col-span-2">
              <div className="text-[#B8A27A] font-mono text-[9px] uppercase tracking-wider mb-2">Accreditation</div>
              <h4 className="text-md font-serif font-black text-[#1F242E]">Certified Luxury Home Marketing Specialists</h4>
              <p className="text-[10px] text-gray-500 font-light mt-2 leading-relaxed">
                Our advisors hold CRS and ABR accreditations, delivering institutional analysis and luxury marketing standards to every deal.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-[#B8A27A]/10 border border-[#B8A27A]/20 flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-10 h-10 text-[#B8A27A]" strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL GLASS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-gradient-to-tr from-[#B8A27A] to-[#E5D5BC] rounded-[48px] py-20 px-8 text-center shadow-lg relative overflow-hidden border border-white/50">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600')" }} />
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] mb-6 tracking-tight relative z-10">Your next chapter starts here.</h2>
          <p className="text-gray-800 text-xs font-mono font-bold tracking-wider mb-8 max-w-sm mx-auto uppercase relative z-10">Boutique service. Multi-channel marketing strategies.</p>
          <div className="pt-2 relative z-10 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#1F242E] hover:bg-white hover:text-black text-white font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all shadow-sm">
              Schedule Consultation <Calendar className="w-4 h-4" />
            </Link>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md hover:bg-white text-[#1F242E] font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all shadow-sm border border-white/50">
              Browse Available Units
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
