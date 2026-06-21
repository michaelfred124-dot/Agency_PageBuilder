import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scale, Check, Heart, Shield, Award } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const BG = '#0A0A0A';
const GOLD = '#C9A84C';
const CARD = '#111111';
const BORDER = 'rgba(201,168,76,0.15)';
const MUTED = 'rgba(255,255,255,0.4)';

const TEAM = [
  { 
    name: 'James Sterling Sr.', 
    role: 'Founding Partner', 
    focus: 'Business Litigation & Trial Advocacy', 
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop', 
    bio: "James founded Sterling Law Group in 1996 after years leading corporate defense trials. His jury-trial record includes over $40M recovered in high-stakes partnership and contract disputes." 
  },
  { 
    name: 'Catherine Abrams', 
    role: 'Senior Partner', 
    focus: 'Estate Planning & Tax Strategy', 
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', 
    bio: "Catherine is a certified specialist in trust structures and wealth preservation. She designs bespoke estate tax minimization systems trusted by Nashville's most prominent families." 
  },
  { 
    name: 'David Park', 
    role: 'Partner', 
    focus: 'M&A & Securities Law', 
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop', 
    bio: "David advises corporations on complex mergers, private equity, and venture financing. He has guided acquisitions totaling over $800M across tech, logistics, and real estate sectors." 
  },
];

const VALUES = [
  { title: 'Absolute Candor', desc: 'We tell you the hard truth, not what you want to hear. Realistic risk assessments are the foundation of effective strategy.' },
  { title: ' courtroom Tenacity', desc: 'We do not settle for less than your business or estate deserves. We build every case with the preparation required for trial.' },
  { title: 'Partner Commitment', desc: 'Every matter is led directly by a senior partner. You receive direct phone numbers and continuous, focused counsel.' },
  { title: 'Generational Stewardship', desc: 'We protect legacies. We advise with long-term capital protection and business continuity in mind.' },
];

export default function SterlingAbout() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff' }} className="overflow-x-hidden">
      
      {/* Title Header */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
        <Scale className="w-10 h-10 mx-auto mb-6 text-[#C9A84C]/30" strokeWidth={1.2} />
        <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Lineage</span>
        <h1 className="text-4xl md:text-6xl font-sans font-black text-white mb-6 leading-none">A Legacy of Courtroom Excellence</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm font-light leading-relaxed">
          Sterling Law Group was founded on a simple conviction: that complex business litigation and wealth preservation deserve focused, senior-partner advocacy.
        </p>
      </section>

      {/* Story Grid Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-6">
            <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block">Our Genesis</span>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight">Built on resolution. Argued with precision.</h2>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              James Sterling spending a decade at a large regional firm noticed that massive firms frequently passed complex partnership disputes and estate structures to junior associates, sacrificing client outcomes. In 1996, he launched Sterling Law Group in Nashville to deliver highly personalized legal solutions.
            </p>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Today, we restrict our engagements to high-value commercial trials, mergers, compliance transactions, and wealth preservation—allocating extensive resources to ensure our client’s interests are protected.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              {[
                "28+ Years of Tennessee Practice",
                "Partners Lead Every Matter",
                "$2.1B+ Recovered/Protected",
                "Bespoke Wealth Preservation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/60 font-light">
                  <Check className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/3] md:h-[450px] w-full rounded-tr-[64px] rounded-bl-[64px] border border-[#C9A84C]/20 overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
              alt="Attorneys working" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      {/* Team / Partners Section */}
      <section className="py-32 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">The Advisors</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-24">The Minds Behind the Firm</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div 
                key={i} 
                className="border border-[#C9A84C]/15 flex flex-col justify-between overflow-hidden shadow-xl"
                style={{ backgroundColor: BG }}
              >
                <div className={`relative h-72 border-b border-[#C9A84C]/15 overflow-hidden ${
                  i % 2 === 0 ? 'rounded-tl-[32px] rounded-br-[32px]' : 'rounded-tr-[32px] rounded-bl-[32px]'
                }`}>
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 text-left space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: GOLD }}>{m.focus}</span>
                    <h3 className="font-sans font-bold text-white text-lg mt-2">{m.name}</h3>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">{m.role}</p>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed font-light pt-4 border-t border-white/5">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Values</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white">Pragmatic Principles</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {VALUES.map((v, i) => (
            <div 
              key={i} 
              className={`p-8 border border-[#C9A84C]/15 flex flex-col justify-between min-h-[160px] text-left hover:border-[#C9A84C]/50 transition-colors shadow-lg ${
                i % 2 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 'rounded-tr-3xl rounded-bl-3xl'
              }`} 
              style={{ backgroundColor: CARD }}
            >
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-3" style={{ color: GOLD }}>{v.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#C9A84C] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl text-slate-900 border border-[#C9A84C]">
          <h2 className="text-3xl font-sans font-black text-[#0A0A0A] mb-4">Talk to an attorney today. The consultation is confidential.</h2>
          <div className="pt-6">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#FAF8F2] hover:text-[#0A0A0A] text-white font-mono font-bold uppercase tracking-widest text-xs px-10 py-5 transition-all">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
