import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, TrendingUp, Key, MapPin, Check, Building, FileSpreadsheet, ShieldCheck } from 'lucide-react';

const BASE = '/work/meridian-properties';
const BG = '#FAF8F5';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';

const SERVICES = [
  {
    icon: Home,
    title: 'Buyer Representation',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    desc: "Securing a premium property in Middle Tennessee's highly competitive market demands deep neighborhood intelligence, off-market channel sourcing, and seasoned negotiation expertise.",
    items: [
      'Access to exclusive off-market listings',
      'Micro-neighborhood price absorption analysis',
      'Structural offer terms strategy',
      'Comprehensive inspection review & negotiation',
      'Bespoke closing & title coordination'
    ],
    cta: 'Start Your Home Search',
  },
  {
    icon: TrendingUp,
    title: 'Seller Marketing Services',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop',
    desc: "We position our luxury listings to stand out globally. Through high-end editorial media, targeted digital campaigns, and elite brokerage networks, we drive maximum buyer interest.",
    items: [
      'Cinematic listing film production',
      'Custom editorial styling & staging consults',
      'International buyer syndicate syndication',
      'Targeted social & digital ad placement',
      'Comprehensive multi-offer management'
    ],
    cta: 'Get Your Valuation Report',
  },
  {
    icon: Building,
    title: 'Investment Advisory',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    desc: "From high-yield single-family portfolios to complex 1031 exchanges, our analytical approach ensures your capital is deployed with maximum efficiency and tax benefit.",
    items: [
      'Cash flow & cap rate return models',
      '1031 exchange planning & timelines',
      'Value-add renovation feasibility analyses',
      'Lease rate analysis & market auditing',
      'Exit strategy and asset evaluation'
    ],
    cta: 'Explore Portfolio Services',
  },
  {
    icon: Key,
    title: 'Relocation Services',
    subtitle: 'Moving to Nashville?',
    img: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop',
    desc: "Moving to Portland from another city is an entirely different challenge. We work with relocating buyers and sellers to ensure a seamless transition — from remote video tours to coordinated timelines.",
    items: [
      'Remote video tours & virtual consultations',
      'Neighborhood fit assessment & school info',
      'Coordinated buy & sell timelines',
      'Corporate relocation billing accepted',
      'Trusted moving & storage referrals',
      'One dedicated agent through entire move',
    ],
    stat: { value: '3 wks', label: 'average time to find a home for relocation clients' },
    cta: 'Plan Your Relocation',
  },
];

const NEIGHBORHOODS = [
  { name: 'Belle Meade', avgPrice: '$3.2M', tag: 'Historic Estates' },
  { name: 'Green Hills', avgPrice: '$1.8M', tag: 'Luxury Living' },
  { name: 'Brentwood', avgPrice: '$2.1M', tag: 'Williamson Co.' },
  { name: 'Franklin', avgPrice: '$1.4M', tag: 'Historic Charm' },
  { name: '12South', avgPrice: '$1.2M', tag: 'Urban Craft' },
  { name: 'East Nashville', avgPrice: '$850K', tag: 'Creative Core' },
  { name: 'The Gulch', avgPrice: '$950K', tag: 'High-Rise Luxury' },
];

export default function MeridianServices() {
  return (
    <div style={{ backgroundColor: BG, color: SLATE }} className="overflow-x-hidden pb-12">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 text-left">
        <div className="max-w-3xl">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#B8A27A] block mb-4">
            Boutique Services &nbsp;·&nbsp; Representation
          </span>
          <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight text-[#1F242E] mb-6">
            Bespoke advisory <br />for every real estate <span className="text-[#B8A27A] italic font-light">milestone.</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            Whether acquiring a private residential estate, marketing a landmark property, or structuring an investment portfolio, our senior advisors deliver institutional analysis combined with highly personalized execution.
          </p>
        </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-6 relative">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-cover bg-center mix-blend-overlay rounded-[48px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600')" }} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          
          {/* Card 1: Buyer Representation (Spans 2 columns) */}
          <div className="lg:col-span-2 p-10 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(31,36,46,0.06)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.12)] hover:border-[#B8A27A]/35 transition-all duration-500 grid md:grid-cols-2 gap-8 items-center min-h-[380px]">
            <div className="text-left flex flex-col justify-between h-full py-2">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#B8A27A]/10 flex items-center justify-center mb-6">
                  <Home className="w-4.5 h-4.5 text-[#B8A27A]" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-serif text-[#1F242E] mb-4">{SERVICES[0].title}</h2>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
                  {SERVICES[0].desc}
                </p>
                <ul className="space-y-2.5">
                  {SERVICES[0].items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] text-gray-600 font-mono">
                      <Check className="w-3.5 h-3.5 text-[#B8A27A] shrink-0" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest pb-0.5 border-b border-[#B8A27A] text-[#B8A27A] hover:text-black hover:border-black transition-all">
                  {SERVICES[0].cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-white/80 shadow-md">
              <Image src={SERVICES[0].img} alt={SERVICES[0].title} fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Card 2: Seller Marketing (Spans 1 column) */}
          <div className="p-8 border border-white/70 bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 text-left flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#B8A27A]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-4.5 h-4.5 text-[#B8A27A]" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-serif text-[#1F242E] mb-3">{SERVICES[1].title}</h2>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed mb-6">
                {SERVICES[1].desc}
              </p>
              <ul className="space-y-2.5">
                {SERVICES[1].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[9px] text-gray-600 font-mono">
                    <Check className="w-3 h-3 text-[#B8A27A] shrink-0" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest pb-0.5 border-b border-[#B8A27A] text-[#B8A27A] hover:text-black hover:border-black transition-all">
                {SERVICES[1].cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Investment Advisory (Spans 1 column) */}
          <div className="p-8 border border-white/70 bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 text-left flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#B8A27A]/10 flex items-center justify-center mb-6">
                <Building className="w-4.5 h-4.5 text-[#B8A27A]" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-serif text-[#1F242E] mb-3">{SERVICES[2].title}</h2>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed mb-6">
                {SERVICES[2].desc}
              </p>
              <ul className="space-y-2.5">
                {SERVICES[2].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[9px] text-gray-600 font-mono">
                    <Check className="w-3 h-3 text-[#B8A27A] shrink-0" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest pb-0.5 border-b border-[#B8A27A] text-[#B8A27A] hover:text-black hover:border-black transition-all">
                {SERVICES[2].cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Areas We Serve (Spans 2 columns) */}
          <div className="lg:col-span-2 p-10 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(31,36,46,0.06)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.12)] hover:border-[#B8A27A]/35 transition-all duration-500 text-left flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center gap-2 text-[#B8A27A] mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-[9px] font-mono uppercase tracking-widest font-black">Community Focus</span>
              </div>
              <h2 className="text-2xl font-serif text-[#1F242E] mb-6">Middle Tennessee Communities</h2>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-8">
                We specialize in Nashville's premier luxury corridors and historically significant neighborhoods. Our transaction data covers street-by-street pricing shifts, zoning changes, and off-market deal values.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {NEIGHBORHOODS.map((n, i) => (
                  <div key={i} className="p-4 bg-white/40 border border-white/60 rounded-2xl shadow-[0_4px_15px_rgba(31,36,46,0.02)] flex flex-col justify-between hover:border-[#B8A27A]/30 transition-all duration-300">
                    <div>
                      <div className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-wider font-bold mb-1">{n.tag}</div>
                      <div className="font-bold text-xs text-[#1F242E] uppercase">{n.name}</div>
                    </div>
                    <div className="text-[10px] font-mono text-gray-400 font-bold mt-4">Avg: {n.avgPrice}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL GLASS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-gradient-to-tr from-[#B8A27A] to-[#E5D5BC] rounded-[48px] py-20 px-8 text-center shadow-lg relative overflow-hidden border border-white/50">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600')" }} />
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] mb-6 tracking-tight relative z-10">Deploy your capital with precision.</h2>
          <p className="text-gray-800 text-xs font-mono font-bold tracking-wider mb-8 max-w-sm mx-auto uppercase relative z-10">Private listing syndication. Off-market asset acquisition.</p>
          <div className="pt-2 relative z-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#1F242E] hover:bg-white hover:text-black text-white font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all shadow-sm">
              Schedule Private Advisory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
