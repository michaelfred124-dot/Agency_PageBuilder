import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Award, Building2 } from 'lucide-react';

const BASE = '/work/meridian-properties';
const TEAM = [{"name":"Catherine Harlow","role":"Founder & Principal Broker","certs":"Belle Meade · Luxury Listings","img":"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop","bio":"Catherine founded Meridian Properties in 2008 to bring a true private-wealth service level to Nashville real estate. Her client roster includes business executives, artists, and multi-generational families who demand absolute discretion and analytical execution.","specialties":[]},{"name":"Isabelle Monroe","role":"Luxury Specialist","certs":"Green Hills · Brentwood","img":"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop","bio":"With a background in interior architecture, Isabelle helps buyers visualize structural possibilities and sellers stage their properties to command absolute peak market value.","specialties":[]},{"name":"James Aldridge","role":"Investment Advisor","certs":"1031 Exchange · Commercial Syndicates","img":"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop","bio":"James designs investment portfolios for commercial developments, residential multi-family syndicates, and complex land tracts across Middle Tennessee, leveraging data-driven cash flow projections.","specialties":[]}];
const VALUES = [{"title":"Customer First","desc":"Every service starts and ends with your complete satisfaction and safety."},{"title":"Premium Products Only","desc":"We never cut corners or use low-grade chemicals or components."},{"title":"Constant Training","desc":"Our team undergoes continuous safety certifications and education."}];

const CREDENTIALS = ["Nashville Business Journal Top Agent 2024 & 2025","Certified Luxury Home Marketing Specialist (CLHMS)","Certified Residential Specialist (CRS)","Accredited Buyer's Representative (ABR)","Greater Nashville Realtors Association Member"];
const PROMISES = [];

export default function MeridianPropertiesAbout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
            Our Story & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none"
              dangerouslySetInnerHTML={{ __html: `Real estate advisory <br />defined by <span class="text-[#B8A27A] italic font-light">integrity.</span>` }} />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Meridian Properties was founded on a simple premise: luxury is not a price point, it is a level of service. For nearly two decades, we have guided Nashville families with data-backed advice, direct broker access, and tailored marketing.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-amber-400 rounded-3xl rotate-2 opacity-10 blur-xl pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop"
                alt="Founder Spotlight"
                fill className="object-cover object-top" referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right bio */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                The Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight"
                  dangerouslySetInnerHTML={{ __html: `Uncompromising service, by design.` }} />
            </div>
            
            <div className="prose prose-slate max-w-none text-left">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">Meridian Properties was founded on a simple premise: luxury is not a price point, it is a level of service. For nearly two decades, we have guided Nashville families with data-backed advice, direct broker access, and tailored marketing.</p>
<p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">At many regional brokerages, clients are passed down to junior assistants or transaction coordinators the moment a contract is signed. We believe complex transactions require constant, expert oversight.</p>
<p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">By intentionally capping our client list and agent roster, we ensure every transaction benefits directly from the principal broker's negotiation strategy and legal expertise.</p>
<p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">Eighteen years and over $1.4B in negotiated sales later, we remain a boutique firm. We don't strive to be the largest brokerage in Middle Tennessee — only the most reliable.</p>
<p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">Direct principal brokerage guidance. No middle men.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              {[
                '100% Client Satisfaction',
                'Background-Checked Professionals',
                'Licensed & Certified Experts',
                'Transparent & Honest Estimates',
                'Written Workmanship Warranties',
                'Fully Insured & Bonded'
              ].map((text, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-black text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Meet the Specialists
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Our Professional Staff
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between min-h-[460px] text-left"
              >
                <div className="relative aspect-[4/3] w-full border-b border-slate-100">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    fill className="object-cover object-top" referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-amber-400 text-[9px] font-mono tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                    {member.certs.split('·')[0] || member.role}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-sans font-black text-xl text-slate-900 leading-none">{member.name}</h4>
                    <span className="text-xs font-bold text-slate-500 block mt-2">{member.role}</span>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-4">
                    {member.bio}
                  </p>
                  
                  {member.specialties && member.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 mt-auto">
                      {member.specialties.map((s, i) => (
                        <span key={i} className="text-[9px] font-black text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      {CREDENTIALS.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-200/85">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Credentials</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Our Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CREDENTIALS.map((item: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl text-left flex flex-col justify-between min-h-[160px]">
                  <h4 className="font-sans font-black text-lg text-slate-900 mb-2">{item.title || item.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc || item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              The Pillar of Our Craft
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Our Core Guarantees
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl text-left flex flex-col justify-between min-h-[220px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-400 mb-6 shadow-md">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-lg text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 px-6 text-center bg-slate-950 text-white">
        <h2 className="text-2xl md:text-3xl font-sans font-black text-white mb-3">
          Experience the professional difference.
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
          Contact us today to book an appointment with our master technicians and consultants.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="bg-amber-400 text-slate-950 hover:bg-amber-500 inline-flex items-center gap-2 px-8 py-4 font-sans font-black uppercase text-xs tracking-widest rounded-xl shadow-lg"
        >
          Book An Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}