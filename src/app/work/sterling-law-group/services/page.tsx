import Link from 'next/link';
import { ArrowRight, Scale, Shield, Users, Building, FileText, Check, Award } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const BG = '#0A0A0A';
const GOLD = '#C9A84C';
const CARD = '#111111';
const BORDER = 'rgba(201,168,76,0.15)';
const MUTED = 'rgba(255,255,255,0.4)';

const PRACTICE_AREAS = [
  {
    icon: Scale,
    title: 'Business Litigation',
    tagline: 'High-stakes commercial disputes.',
    desc: 'Relentless advocacy in federal and state courts for contract disputes, business torts, partnership breakups, and trade secret challenges.',
    items: ['Contract disputes & breach of contract', 'Shareholder & partnership litigation', 'Trade secret & IP protection disputes', 'Fiduciary duty violations', 'Class action defense', 'Business tort claims'],
    note: 'Hourly, structured fixed-fee, or hybrid billing models.',
  },
  {
    icon: Shield,
    title: 'Corporate Law',
    tagline: 'Advisory for growth and compliance.',
    desc: 'Clear legal guidance for private and public companies navigating formation, corporate governance, venture capital, and board operations.',
    items: ['Venture capital & private equity', 'Corporate governance & bylaws', 'Regulatory compliance audits', 'Securities filings & advice', 'Employee stock option setups', 'Joint venture negotiations'],
    note: 'Ongoing general counsel retainer plans available.',
  },
  {
    icon: Building,
    title: 'Mergers & Acquisitions',
    tagline: 'Transactions executed with precision.',
    desc: 'Comprehensive buy-side and sell-side transaction advisory for mid-market business acquisitions, restructurings, and divestitures.',
    items: ['Deal structure & negotiation', 'Bespoke due diligence audits', 'Asset & stock purchase agreements', 'Post-merger integration counsel', 'Venture capital backing', 'Restructurings & spin-offs'],
    note: 'Success-aligned transaction models available.',
  },
  {
    icon: Award,
    title: 'Estate Planning & Trusts',
    tagline: 'Protect wealth for generations.',
    desc: 'Designing tax-efficient trust and estate structures to preserve private family wealth and manage corporate succession.',
    items: ['Revocable & irrevocable trusts', 'Estate tax minimization planning', 'Corporate succession blueprints', 'Family office legal structures', 'Asset protection vehicles', 'Probate representation'],
    note: 'Custom estate plans starting at $2,500.',
  },
  {
    icon: FileText,
    title: 'Real Estate & Fiduciary Disputes',
    tagline: 'Safeguarding commercial investments.',
    desc: 'Resolving complex commercial property conflicts, landlord/tenant disputes, boundary disagreements, and trustee challenges.',
    items: ['Commercial lease litigation', 'Partition actions & title claims', 'Easement & boundary disputes', 'Trustee & executor defense', 'Property development audits', 'Land use & zoning advocacy'],
    note: 'Strategic litigation and mediation advisory.',
  },
];

export default function SterlingServices() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff' }} className="overflow-x-hidden">
      
      {/* Title Banner */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Practices</span>
        <h1 className="text-4xl md:text-6xl font-sans font-black text-white mb-6 leading-none">Bespoke Legal Solutions</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm font-light leading-relaxed">
          Focused advocacy across high-stakes corporate trials, compliance transactions, and wealth preservation.
        </p>
      </section>

      {/* Services Grid with unique alternating roundings */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          {PRACTICE_AREAS.map(({ icon: Icon, title, tagline, desc, items, note }, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-12 border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 transition-all duration-500 grid md:grid-cols-[1.1fr_1fr] gap-12 text-left shadow-lg ${
                i % 2 === 0 ? 'rounded-tl-[40px] rounded-br-[40px]' : 'rounded-tr-[40px] rounded-bl-[40px]'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#C9A84C]/35 flex items-center justify-center bg-white/5">
                    <Icon className="w-4.5 h-4.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-sans font-black text-xl text-white uppercase tracking-wide">{title}</h2>
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: GOLD }}>{tagline}</div>
                <p className="text-white/70 text-xs leading-relaxed font-light">{desc}</p>
                <div className="text-xs font-mono p-4 border-l-2 text-white/95" style={{ borderColor: GOLD, backgroundColor: BG }}>{note}</div>
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-5 block">Core Matters Managed</span>
                <div className="grid grid-cols-1 gap-3.5">
                  {items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-white/60 font-light">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="bg-[#C9A84C] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl text-slate-900 border border-[#C9A84C]">
          <h2 className="text-3xl font-sans font-black text-[#0A0A0A] mb-4">Schedule a confidential consultation.</h2>
          <p className="text-[#0A0A0A]/75 text-xs font-light mb-8 max-w-sm mx-auto">Direct client-to-partner interaction. Candid assessments from day one.</p>
          <div className="pt-2">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#FAF8F2] hover:text-[#0A0A0A] text-white font-mono font-bold uppercase tracking-widest text-[10px] px-10 py-5 transition-all">
              Request Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
