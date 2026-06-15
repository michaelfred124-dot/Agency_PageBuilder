import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Users, Building, FileCheck, Landmark, Sparkles } from 'lucide-react';

const BASE = '/work/meridian-properties';
const BG = '#FAF8F5';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';

const TEAM = [
  {
    name: 'Catherine Harlow',
    role: 'Founder & Principal Broker',
    specialty: 'Belle Meade · Luxury Listings',
    sales: '$420M+ Lifetime Sales',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    bio: "Catherine founded Meridian Properties in 2008 to bring a true private-wealth service level to Nashville real estate. Her client roster includes business executives, artists, and multi-generational families who demand absolute discretion and analytical execution."
  },
  {
    name: 'Isabelle Monroe',
    role: 'Luxury Specialist',
    specialty: 'Green Hills · Brentwood',
    sales: '$210M+ Lifetime Sales',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    bio: "With a background in interior architecture, Isabelle helps buyers visualize structural possibilities and sellers stage their properties to command absolute peak market value."
  },
  {
    name: 'James Aldridge',
    role: 'Investment Advisor',
    specialty: '1031 Exchange · Commercial Syndicates',
    sales: '$180M+ Lifetime Sales',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    bio: "James designs investment portfolios for commercial developments, residential multi-family syndicates, and complex land tracts across Middle Tennessee, leveraging data-driven cash flow projections."
  }
];

const CREDENTIALS = [
  "Nashville Business Journal Top Agent 2024 & 2025",
  "Certified Luxury Home Marketing Specialist (CLHMS)",
  "Certified Residential Specialist (CRS)",
  "Accredited Buyer's Representative (ABR)",
  "Greater Nashville Realtors Association Member",
];

export default function MeridianAbout() {
  return (
    <div style={{ backgroundColor: BG, color: SLATE }} className="overflow-x-hidden pb-12">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 text-left">
        <div className="max-w-3xl">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#B8A27A] block mb-4">
            Established 2008 &nbsp;·&nbsp; Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight text-[#1F242E] mb-6">
            Real estate advisory <br />defined by <span className="text-[#B8A27A] italic font-light">integrity.</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            Meridian Properties was founded on a simple premise: luxury is not a price point, it is a level of service. For nearly two decades, we have guided Nashville families with data-backed advice, direct broker access, and tailored marketing.
          </p>
        </div>
      </section>

      {/* BENTO GRID: STORY & CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-6 relative">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-cover bg-center mix-blend-overlay rounded-[48px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600')" }} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          
          {/* Card 1: Our Story (Spans 2 columns) */}
          <div className="lg:col-span-2 p-10 border border-white/70 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(31,36,46,0.06)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.12)] hover:border-[#B8A27A]/35 transition-all duration-500 text-left flex flex-col justify-between min-h-[380px]">
            <div>
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block mb-4">The Boutique Model</span>
              <h2 className="text-3xl font-serif text-[#1F242E] mb-6">Uncompromising service, by design.</h2>
              <div className="space-y-4 text-xs text-gray-500 font-light leading-relaxed">
                <p>
                  At many regional brokerages, clients are passed down to junior assistants or transaction coordinators the moment a contract is signed. We believe complex transactions require constant, expert oversight. 
                </p>
                <p>
                  By intentionally capping our client list and agent roster, we ensure every transaction benefits directly from the principal broker's negotiation strategy and legal expertise.
                </p>
                <p>
                  Eighteen years and over $1.4B in negotiated sales later, we remain a boutique firm. We don't strive to be the largest brokerage in Middle Tennessee — only the most reliable.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 pt-6 border-t border-black/5 mt-6">
              <div>
                <div className="text-2xl font-serif font-black text-[#1F242E]">$1.4B+</div>
                <div className="text-[8px] font-mono uppercase tracking-wider text-gray-400 font-bold">Total Sales</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-black text-[#1F242E]">18 Years</div>
                <div className="text-[8px] font-mono uppercase tracking-wider text-gray-400 font-bold">In Nashville</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-black text-[#1F242E]">100%</div>
                <div className="text-[8px] font-mono uppercase tracking-wider text-gray-400 font-bold">Broker Access</div>
              </div>
            </div>
          </div>

          {/* Card 2: Aesthetic Property Visual (Spans 1 column) */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/85 shadow-[0_25px_60px_-15px_rgba(31,36,46,0.08)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.1)] transition-all duration-500 min-h-[380px] group lg:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/75 backdrop-blur-md border border-white/50 rounded-2xl">
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block">Belle Meade Residence</span>
              <span className="text-xs text-gray-500 font-mono mt-0.5 block">Custom millwork and luxury finishing.</span>
            </div>
          </div>

          {/* Card 3: Image Feature (Spans 1 column) */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/85 shadow-[0_25px_60px_-15px_rgba(31,36,46,0.08)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.1)] transition-all duration-500 min-h-[300px] group lg:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Living Area"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/75 backdrop-blur-md border border-white/50 rounded-2xl">
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block"> Brentwood Living</span>
              <span className="text-xs text-gray-500 font-mono mt-0.5 block">Light-flooded architectural spaces.</span>
            </div>
          </div>

          {/* Card 4: Credentials (Spans 2 columns) */}
          <div className="lg:col-span-2 p-10 border border-[#B8A27A]/20 bg-gradient-to-br from-white/70 to-[#B8A27A]/5 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 text-left flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block mb-4">Accreditation</span>
              <h2 className="text-2xl font-serif text-[#1F242E] mb-6">Industry Certification & Credentials</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {CREDENTIALS.map((cred, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/40 border border-white/60 rounded-xl">
                    <div className="w-7 h-7 rounded-full bg-[#B8A27A]/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#B8A27A]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-600 font-bold">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-cover bg-center mix-blend-overlay rounded-[48px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600')" }} />
        <div className="text-center mb-12 relative z-10">
          <span className="text-[#B8A27A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-3">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] tracking-tight">The Advisors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {TEAM.map((agent, i) => (
            <div key={i} className="p-8 border border-[#B8A27A]/15 bg-gradient-to-br from-white/70 to-[#B8A27A]/5 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 text-left flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                  <Image
                    src={agent.img}
                    alt={agent.name}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif font-black text-[#1F242E] mb-1">{agent.name}</h3>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8A27A] mb-4">{agent.role}</div>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">{agent.bio}</p>
              </div>

              <div className="pt-4 border-t border-black/5 flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-400 font-bold uppercase tracking-wider">{agent.specialty}</span>
                <span className="text-[#B8A27A] font-black uppercase tracking-wider">{agent.sales}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL GLASS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-gradient-to-tr from-[#B8A27A] to-[#E5D5BC] rounded-[48px] py-20 px-8 text-center shadow-lg relative overflow-hidden border border-white/50">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600')" }} />
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F242E] mb-6 tracking-tight relative z-10">Experience the boutique difference.</h2>
          <p className="text-gray-800 text-xs font-mono font-bold tracking-wider mb-8 max-w-sm mx-auto uppercase relative z-10">Direct principal brokerage guidance. No middle men.</p>
          <div className="pt-2 relative z-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#1F242E] hover:bg-white hover:text-black text-white font-mono font-black uppercase tracking-widest text-[10px] px-10 py-5 transition-all shadow-sm">
              Connect with Catherine <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
