import Image from 'next/image';
import Link from 'next/link';
import { Scale, Check, Star, Phone, MapPin, ChevronDown, Award, Shield, ArrowRight } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const BG = '#0A0A0A';
const GOLD = '#C9A84C';
const CARD = '#111111';
const BORDER = 'rgba(201,168,76,0.15)';
const MUTED = 'rgba(255,255,255,0.4)';

const AREAS = [
  {
    icon: Scale,
    title: 'Business Litigation',
    desc: 'High-stakes commercial disputes resolved with precision and relentless resolve. We protect your enterprise when everything is on the line.',
    items: ['Contract disputes & breach of fiduciary duty', 'Shareholder & partnership disputes', 'Trade secret & IP litigation', 'Class action defense'],
  },
  {
    icon: Shield,
    title: 'Corporate Law',
    desc: 'Strategic legal counsel for corporations navigating complex transactions, compliance, and governance challenges.',
    items: ['Mergers & acquisitions', 'Corporate governance', 'Regulatory compliance', 'Securities law & private equity'],
  },
  {
    icon: Award,
    title: 'Estate Planning & Trusts',
    desc: "Preserving wealth across generations with precision-engineered estate structures trusted by Nashville's most prominent families.",
    items: ['Trust formation & administration', 'Estate tax strategy', 'Business succession planning', 'Probate litigation'],
  },
];

const ATTORNEYS = [
  {
    name: 'James Sterling Sr.',
    title: 'Founding Partner',
    photo: 'photo-1559839734-2b71ea197ec2',
    tags: ['Business Litigation', 'Corporate Law', 'Trial Advocacy'],
  },
  {
    name: 'Catherine Abrams',
    title: 'Senior Partner',
    photo: 'photo-1573496359142-b8d87734a5a2',
    tags: ['Estate Planning', 'Tax Strategy', 'Trust Administration'],
  },
  {
    name: 'David Park',
    title: 'Partner',
    photo: 'photo-1472099645785-5658abf4ff4e',
    tags: ['M&A', 'Securities Law', 'Private Equity'],
  },
];

const TESTIMONIALS = [
  {
    text: "When our $340 million acquisition faced a last-minute legal challenge, Sterling had a counter-motion filed within 48 hours. Brilliant, methodical, and utterly relentless.",
    author: 'Robert H.',
    company: 'CEO, Hartwell Capital Group',
  },
  {
    text: "James Sterling personally argued our case before the Tennessee Court of Appeals. The depth of preparation was unlike anything I had seen in 30 years of business. We prevailed.",
    author: 'Patricia M.',
    company: 'Founder, Meridian Holdings',
  },
  {
    text: "The estate plan Catherine designed for my family will protect our assets for generations. Her command of tax law and trust structures is extraordinary.",
    author: 'William T.',
    company: 'Managing Director, Pinnacle Ventures',
  },
];

const FAQS = [
  {
    q: 'What types of matters does Sterling Law Group handle?',
    a: "We focus exclusively on high-value commercial, corporate, and estate matters. Our clients include public and private corporations, family offices, executives, and high-net-worth individuals. We do not practice personal injury, criminal defense, or general family law.",
  },
  {
    q: 'How does your billing structure work?',
    a: "We offer hourly billing, fixed-fee arrangements for defined-scope engagements, and hybrid structures for complex litigation. All billing terms are established transparently in your engagement letter. You should never be surprised by your invoice.",
  },
  {
    q: 'Do you handle cases outside of Tennessee?',
    a: "Yes. While we are headquartered in Nashville and primarily practice in Tennessee federal and state courts, we regularly handle matters in multiple jurisdictions and work with co-counsel across the country on complex multi-state disputes.",
  },
  {
    q: 'How quickly can you respond to an urgent legal matter?',
    a: "We maintain 24-hour availability for existing clients on active matters. New urgent matters are reviewed by a senior partner within two business hours on weekdays, and same-day on weekends for true emergencies. Our size allows responsiveness large firms cannot match.",
  },
  {
    q: 'What should I bring to our initial consultation?',
    a: "Relevant agreements, correspondence, corporate documents, and any prior legal filings. A clear written timeline of events is extremely helpful. We review everything before our meeting so our time together focuses entirely on strategy.",
  },
  {
    q: 'How do you staff client matters?',
    a: "Every matter has a named partner who is personally accountable for strategy and quality. We do not pass client relationships to associates. You will have direct access to your partner at all times. We believe the relationship is the firm.",
  },
];

export default function SterlingHome() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff' }} className="overflow-x-hidden">

      {/* HERO — split layout with custom roundings */}
      <section className="min-h-[90vh] grid md:grid-cols-[55fr_45fr] items-center max-w-7xl mx-auto px-6 md:px-12 py-12 gap-12">
        {/* Left — text */}
        <div className="flex flex-col justify-center text-left py-12">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-8" style={{ color: GOLD }}>
            EST. 1996 &nbsp;·&nbsp; NASHVILLE, TENNESSEE
          </p>
          <h1 className="text-5xl md:text-7xl font-sans font-black leading-[1.05] text-white mb-8 tracking-tight">
            Justice,<br />argued<br /><span className="text-[#C9A84C] italic font-light font-serif">brilliantly.</span>
          </h1>
          <div className="w-16 h-0.5 mb-8" style={{ backgroundColor: GOLD }} />
          <p className="text-md leading-relaxed mb-10 max-w-md font-light text-gray-300">
            We represent corporations, executives, and families in matters that define their futures.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all rounded-none border border-[#C9A84C]/50 hover:border-[#C9A84C]"
              style={{ backgroundColor: GOLD, color: '#0A0A0A' }}
            >
              Schedule Consultation <ArrowRight className="w-4 h-4 text-[#0A0A0A]" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest border text-white hover:bg-white/5"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              Our Practices <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
          
          <div className="flex items-center gap-12 flex-wrap">
            {[['94.7%', 'Win Rate'], ['2,400+', 'Cases Handled'], ['$2.1B', 'Recovered']].map(([val, lbl]) => (
              <div key={lbl} className="border-l border-[#C9A84C]/30 pl-4">
                <div className="text-2xl font-sans font-bold text-white">{val}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest mt-1 text-white/50">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — asymmetrical rounded image container */}
        <div className="relative overflow-hidden aspect-[4/5] md:h-[650px] w-full rounded-tl-[64px] rounded-br-[64px] border border-[#C9A84C]/25 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Sterling Law Group Nashville"
            fill
            className="object-cover scale-102"
            referrerPolicy="no-referrer"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent"
          />
        </div>
      </section>

      {/* STATS STRIP - floating asymmetric panel */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-tr-[48px] rounded-bl-[48px] p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-xl">
          {[
            ['94.7%', 'Win Rate'],
            ['2,400+', 'Cases Handled'],
            ['$2.1B', 'Recovered for Clients'],
            ['28 Years', 'Nashville Excellence'],
          ].map(([val, lbl]) => (
            <div key={lbl} className="space-y-1">
              <div className="text-4xl font-sans font-black" style={{ color: GOLD }}>{val}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Practice Areas</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white leading-tight max-w-xl">
            Counsel for the matters that matter most.
          </h2>
        </div>
        
        {/* Dynamic alternating roundings for cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {AREAS.map(({ icon: Icon, title, desc, items }, i) => (
            <div
              key={title}
              className={`p-8 border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 flex flex-col justify-between min-h-[480px] shadow-lg transition-all duration-500 group ${
                i % 2 === 0 ? 'rounded-tl-[32px] rounded-br-[32px]' : 'rounded-tr-[32px] rounded-bl-[32px]'
              }`}
              style={{ backgroundColor: CARD }}
            >
              <div>
                <div className="w-12 h-12 rounded-full border border-[#C9A84C]/35 flex items-center justify-center mb-6 bg-white/5 transition-colors group-hover:bg-[#C9A84C]/10">
                  <Icon className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4 uppercase tracking-wide">{title}</h3>
                <p className="text-xs leading-relaxed mb-6 font-light text-white/70">{desc}</p>
                <ul className="space-y-3 mb-8">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-white/60 font-light">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={`${BASE}/services`}
                className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] hover:text-white transition-colors flex items-center gap-1.5 pt-4 border-t border-white/5"
              >
                Explore Practices <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY STERLING — split with offset rounded image */}
      <section className="py-24 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden aspect-video md:h-[500px] rounded-tr-[64px] rounded-bl-[64px] border border-[#C9A84C]/20 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
              alt="Sterling Law Group attorney office"
              fill
              className="object-cover scale-102"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left space-y-8">
            <div>
              <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Why Sterling</span>
              <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight">
                Why 2,400 clients<br />chose us.
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                { n: '01', title: 'Proven Trial Record', desc: '94.7% success rate across litigation and negotiated resolutions over 28 years of Tennessee practice.' },
                { n: '02', title: 'Full Firm Commitment', desc: 'Partners personally lead every matter. No file is passed to a junior associate.' },
                { n: '03', title: 'Transparent Billing', desc: 'Clear, predictable fees established before work begins. No invoice surprises — ever.' },
                { n: '04', title: "Nashville's Most Experienced", desc: 'Our attorneys average 22 years of Tennessee practice and federal court experience.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex items-start gap-4">
                  <span className="text-3xl font-mono leading-none shrink-0" style={{ color: `${GOLD}40` }}>{n}</span>
                  <div>
                    <div className="font-bold text-white text-sm mb-1">{title}</div>
                    <div className="text-xs leading-relaxed text-white/50 font-light">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white">From First Call to Final Verdict</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div
            className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px]"
            style={{ borderTop: `1px dashed ${GOLD}30` }}
          />
          {[
            { n: '01', title: 'Initial Consultation', desc: 'A senior partner reviews your matter. We assess the facts, risks, and strategy with complete candor.' },
            { n: '02', title: 'Case Evaluation', desc: 'Full analysis of legal exposure, precedent, and our recommended approach — presented within 5 business days.' },
            { n: '03', title: 'Legal Strategy', desc: 'We build a documented strategy with milestones, resource allocation, and outcome probability modeling.' },
            { n: '04', title: 'Resolution', desc: 'We pursue the optimal outcome with maximum force — negotiated settlement or courtroom verdict.' },
          ].map(({ n, title, desc }) => (
            <div key={n} className="relative text-center p-6 bg-[#111111]/40 border border-[#C9A84C]/10 rounded-xl hover:border-[#C9A84C]/30 transition-all shadow-sm">
              <div className="text-5xl font-mono font-light mb-4" style={{ color: `${GOLD}30` }}>{n}</div>
              <div className="font-bold text-white text-sm mb-2 uppercase tracking-wide">{title}</div>
              <p className="text-xs leading-relaxed text-white/50 font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Partners</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white">The minds behind the record.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ATTORNEYS.map(({ name, title, photo, tags }, idx) => (
            <div key={name} className="space-y-4">
              {/* Asymmetrical profile images */}
              <div className={`relative aspect-[4/5] overflow-hidden border border-[#C9A84C]/15 group cursor-pointer ${
                idx % 2 === 0 ? 'rounded-tl-[48px] rounded-br-[48px]' : 'rounded-tr-[48px] rounded-bl-[48px]'
              }`}>
                <Image
                  src={`https://images.unsplash.com/${photo}?q=80&w=800&auto=format&fit=crop`}
                  alt={name}
                  fill
                  className="object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left pl-2">
                <div className="font-sans font-bold text-white text-lg">{name}</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>{title}</div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 border rounded-full"
                      style={{ borderColor: BORDER, color: GOLD }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-20">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Client Experience</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white">Trusted by those with the most at stake.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(({ text, author, company }) => (
            <div
              key={author}
              className="p-8 border border-[#C9A84C]/15 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl flex flex-col justify-between min-h-[260px] text-left hover:border-[#C9A84C]/40 transition-colors shadow-md"
              style={{ backgroundColor: CARD }}
            >
              <div>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="text-xs leading-relaxed italic mb-6 text-white/70 font-light">
                  &ldquo;{text}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="font-bold text-white text-sm">{author}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest mt-1 text-[#C9A84C]">{company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white">Questions answered directly.</h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group border border-[#C9A84C]/15 rounded-xl p-6 text-left" style={{ backgroundColor: CARD }}>
              <summary className="flex justify-between cursor-pointer gap-4 list-none">
                <span className="font-bold text-sm text-white leading-snug">{q}</span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                  style={{ color: GOLD }}
                />
              </summary>
              <p className="mt-4 text-xs leading-relaxed text-white/60 font-light border-t border-white/5 pt-4">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA SECTION - wrapped in a gorgeous floating asymmetric container */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#C9A84C] rounded-tl-[64px] rounded-br-[64px] py-20 px-8 text-center shadow-2xl relative overflow-hidden text-slate-900 border border-[#C9A84C]">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#0A0A0A]">Begin your case today.</h2>
            <p className="text-sm leading-relaxed max-w-md mx-auto text-[#0A0A0A]/75 font-light">
              A senior partner is available for an initial consultation. Confidential. Candid. No obligation.
            </p>
            <div className="pt-6">
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center gap-3 px-10 py-5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#FAF8F2] hover:text-[#0A0A0A] transition-all bg-[#0A0A0A] text-white shadow-xl"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
