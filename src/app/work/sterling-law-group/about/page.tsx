import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Award, Scale } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const TEAM = [{"name":"James Sterling Sr.","role":"Founding Partner","certs":"","img":"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop","bio":"James founded Sterling Law Group in 1996 after years leading corporate defense trials. His jury-trial record includes over $40M recovered in high-stakes partnership and contract disputes.","specialties":[]},{"name":"Catherine Abrams","role":"Senior Partner","certs":"","img":"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop","bio":"Catherine is a certified specialist in trust structures and wealth preservation. She designs bespoke estate tax minimization systems trusted by Nashville's most prominent families.","specialties":[]},{"name":"David Park","role":"Partner","certs":"","img":"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop","bio":"David advises corporations on complex mergers, private equity, and venture financing. He has guided acquisitions totaling over $800M across tech, logistics, and real estate sectors.","specialties":[]}];
const VALUES = [{"title":"Absolute Candor","desc":"We tell you the hard truth, not what you want to hear. Realistic risk assessments are the foundation of effective strategy."},{"title":" courtroom Tenacity","desc":"We do not settle for less than your business or estate deserves. We build every case with the preparation required for trial."},{"title":"Partner Commitment","desc":"Every matter is led directly by a senior partner. You receive direct phone numbers and continuous, focused counsel."}];

const CREDENTIALS = [];
const PROMISES = [{"title":"Absolute Candor","desc":"We tell you the hard truth, not what you want to hear. Realistic risk assessments are the foundation of effective strategy."},{"title":" courtroom Tenacity","desc":"We do not settle for less than your business or estate deserves. We build every case with the preparation required for trial."},{"title":"Partner Commitment","desc":"Every matter is led directly by a senior partner. You receive direct phone numbers and continuous, focused counsel."},{"title":"Generational Stewardship","desc":"We protect legacies. We advise with long-term capital protection and business continuity in mind."}];

export default function SterlingLawGroupAbout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
            Our Story & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none"
              dangerouslySetInnerHTML={{ __html: `A Legacy of Courtroom Excellence` }} />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Sterling Law Group was founded on a simple conviction: that complex business litigation and wealth preservation deserve focused, senior-partner advocacy.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl rotate-2 opacity-10 blur-xl pointer-events-none" />
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
                  dangerouslySetInnerHTML={{ __html: `Built on resolution. Argued with precision.` }} />
            </div>
            
            <div className="prose prose-slate max-w-none text-left">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">Sterling Law Group was founded on a simple conviction: that complex business litigation and wealth preservation deserve focused, senior-partner advocacy.</p>
<p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">James Sterling spending a decade at a large regional firm noticed that massive firms frequently passed complex partnership disputes and estate structures to junior associates, sacrificing client outcomes. In 1996, he launched Sterling Law Group in Nashville to deliver highly personalized legal solutions.</p>
<p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-4">Today, we restrict our engagements to high-value commercial trials, mergers, compliance transactions, and wealth preservation—allocating extensive resources to ensure our client’s interests are protected.</p>
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
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-yellow-400 shrink-0">
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
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-yellow-400 text-[9px] font-mono tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-sm">
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
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-yellow-400 mb-6 shadow-md">
                  <Award className="w-6 h-6 text-yellow-400" />
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
          className="bg-yellow-400 text-slate-950 hover:bg-yellow-500 inline-flex items-center gap-2 px-8 py-4 font-sans font-black uppercase text-xs tracking-widest rounded-xl shadow-lg"
        >
          Book An Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}