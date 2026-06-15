import Image from 'next/image';
import Link from 'next/link';
import { Scale, Check, Star, Phone, MapPin, ChevronDown, Award, Shield } from 'lucide-react';

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
    <div style={{ backgroundColor: BG, color: '#fff' }}>

      {/* STICKY NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-14 py-4"
        style={{ backgroundColor: BG, borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-white">STERLING</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span className="text-sm font-light uppercase tracking-[0.2em]" style={{ color: MUTED }}>LAW GROUP</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Practice Areas', 'Attorneys', 'Results', 'Contact'].map((item) => (
            <Link key={item} href={`${BASE}/contact`} className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>
              {item}
            </Link>
          ))}
        </div>
        <Link
          href={`${BASE}/contact`}
          className="text-xs font-bold uppercase tracking-widest px-5 py-2.5"
          style={{ backgroundColor: GOLD, color: '#0A0A0A' }}
        >
          Free Consultation
        </Link>
      </nav>

      {/* HERO — split layout */}
      <section className="min-h-screen grid md:grid-cols-[55fr_45fr]">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-24" style={{ backgroundColor: BG }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10" style={{ color: GOLD }}>
            EST. 1996 &nbsp;&middot;&nbsp; NASHVILLE, TENNESSEE
          </p>
          <h1 className="text-7xl md:text-8xl font-bold leading-none text-white mb-8">
            Justice,<br />argued<br />brilliantly.
          </h1>
          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: GOLD }} />
          <p className="text-lg leading-relaxed mb-12 max-w-md" style={{ color: MUTED }}>
            We represent corporations, executives, and families in matters that define their futures.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: GOLD, color: '#0A0A0A' }}
            >
              Schedule Consultation
            </Link>
            <Link
              href={`${BASE}/results`}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest border text-white"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              View Case Results
            </Link>
          </div>
          <div className="flex items-center gap-10 flex-wrap">
            {[['94.7%', 'Win Rate'], ['2,400+', 'Cases'], ['$2.1B', 'Recovered']].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="text-xl font-bold text-white">{val}</div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: MUTED }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — full-height image with gradient bleed */}
        <div className="relative overflow-hidden min-h-[60vh] md:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Sterling Law Group Nashville"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0A0A0A 0%, transparent 30%)' }}
          />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-16 px-6" style={{ backgroundColor: CARD }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['94.7%', 'Win Rate'],
            ['2,400+', 'Cases Handled'],
            ['$2.1B', 'Recovered for Clients'],
            ['28 Years', 'Nashville Excellence'],
          ].map(([val, lbl]) => (
            <div key={lbl}>
              <div className="text-5xl font-bold mb-2" style={{ color: GOLD }}>{val}</div>
              <div className="text-[10px] uppercase tracking-widest mt-2" style={{ color: MUTED }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Practice Areas</p>
            <h2 className="text-5xl font-bold text-white leading-tight max-w-lg">
              Counsel for the matters that matter most.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AREAS.map(({ icon: Icon, title, desc, items }) => (
              <div
                key={title}
                className="p-8 border-t-2 flex flex-col"
                style={{ backgroundColor: CARD, borderTopColor: GOLD }}
              >
                <Icon className="w-7 h-7 mb-6" style={{ color: GOLD }} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>{desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: MUTED }}>
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/practice-areas`}
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: GOLD }}
                >
                  Explore &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STERLING — split */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="relative overflow-hidden min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
            alt="Sterling Law Group attorney office"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex items-center px-10 md:px-16 py-20" style={{ backgroundColor: CARD }}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: GOLD }}>Why Sterling</p>
            <h2 className="text-4xl font-bold text-white mb-12 leading-tight">
              Why 2,400 clients<br />chose us.
            </h2>
            <div className="space-y-8">
              {[
                { n: '01', title: 'Proven Trial Record', desc: '94.7% success rate across litigation and negotiated resolutions over 28 years of Tennessee practice.' },
                { n: '02', title: 'Full Firm Commitment', desc: 'Partners personally lead every matter. No file is passed to a junior associate.' },
                { n: '03', title: 'Transparent Billing', desc: 'Clear, predictable fees established before work begins. No invoice surprises — ever.' },
                { n: '04', title: "Nashville's Most Experienced", desc: 'Our attorneys average 22 years of Tennessee practice and federal court experience.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex items-start gap-5">
                  <span className="text-4xl font-bold leading-none shrink-0" style={{ color: `${GOLD}40` }}>{n}</span>
                  <div>
                    <div className="font-bold text-white text-sm mb-1">{title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Process</p>
            <h2 className="text-4xl font-bold text-white">From first call to final verdict.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 relative">
            <div
              className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ borderTop: `1px dashed ${GOLD}40` }}
            />
            {[
              { n: '01', title: 'Initial Consultation', desc: 'A senior partner reviews your matter. We assess the facts, risks, and strategy with complete candor.' },
              { n: '02', title: 'Case Evaluation', desc: 'Full analysis of legal exposure, precedent, and our recommended approach — presented within 5 business days.' },
              { n: '03', title: 'Legal Strategy', desc: 'We build a documented strategy with milestones, resource allocation, and outcome probability modeling.' },
              { n: '04', title: 'Resolution', desc: 'We pursue the optimal outcome with maximum force — negotiated settlement or courtroom verdict.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative text-center px-6 pt-4">
                <div className="text-6xl font-bold mb-4" style={{ color: `${GOLD}20` }}>{n}</div>
                <div className="font-bold text-white text-sm mb-2">{title}</div>
                <div className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Attorneys</p>
            <h2 className="text-4xl font-bold text-white">The minds behind the record.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ATTORNEYS.map(({ name, title, photo, tags }) => (
              <div key={name}>
                <div className="relative aspect-square mb-5 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${photo}?q=80&w=800&auto=format&fit=crop`}
                    alt={name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)' }}
                  />
                </div>
                <div className="font-bold text-white text-lg mb-1">{name}</div>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>{title}</div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 border"
                      style={{ borderColor: BORDER, color: GOLD }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Client Testimonials</p>
            <h2 className="text-4xl font-bold text-white">Trusted by those with the most at stake.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, author, company }) => (
              <div
                key={author}
                className="p-8 border-l-[3px]"
                style={{ backgroundColor: CARD, borderLeftColor: GOLD }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-6" style={{ color: MUTED }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div className="font-bold text-white text-sm">{author}</div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: `${GOLD}80` }}>{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>FAQ</p>
            <h2 className="text-4xl font-bold text-white">Questions answered directly.</h2>
          </div>
          <div>
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group border-b py-6" style={{ borderColor: BORDER }}>
                <summary className="flex justify-between cursor-pointer gap-4 list-none">
                  <span className="font-bold text-sm text-white leading-snug">{q}</span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: GOLD }}
                  />
                </summary>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: GOLD }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-5" style={{ color: '#0A0A0A' }}>Begin your case today.</h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: 'rgba(10,10,10,0.6)' }}>
            A senior partner is available for an initial consultation. Confidential. Candid. No obligation.
          </p>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: '#0A0A0A', color: '#fff' }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-8 md:px-14 pt-20 pb-10"
        style={{ backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.25em] text-white mb-1">STERLING</div>
            <div className="text-xs font-light uppercase tracking-[0.2em] mb-5" style={{ color: MUTED }}>LAW GROUP</div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: MUTED }}>
              Precision legal counsel for high-stakes matters since 1996.
            </p>
            <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Admitted to the Tennessee State Bar. Licensed in TN, KY, and Federal Courts.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>Practice Areas</div>
            <div className="space-y-2.5">
              {['Business Litigation', 'Corporate Law', 'Estate Planning', 'Trust Administration', 'Mergers & Acquisitions'].map((item) => (
                <div key={item}>
                  <Link href={`${BASE}/practice-areas`} className="text-xs" style={{ color: GOLD }}>{item}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>Our Office</div>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <address className="text-xs not-italic leading-relaxed" style={{ color: MUTED }}>
                150 Fourth Ave North<br />
                Suite 1500<br />
                Nashville, TN 37219
              </address>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
              <a href="tel:6155550190" className="text-xs" style={{ color: MUTED }}>(615) 555-0190</a>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>Legal Notice</div>
            <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)' }}>
              The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by viewing this site. Past results do not guarantee future outcomes. Attorney advertising.
            </p>
          </div>
        </div>
        <div
          className="border-t flex flex-col md:flex-row items-center justify-between gap-3 pt-8 text-[10px]"
          style={{ borderColor: BORDER, color: MUTED }}
        >
          <span>&copy; 2025 Sterling Law Group &nbsp;&middot;&nbsp; All Rights Reserved</span>
          <div className="flex items-center gap-5">
            <Link href={`${BASE}/privacy`} style={{ color: MUTED }}>Privacy Policy</Link>
            <Link href={`${BASE}/terms`} style={{ color: MUTED }}>Terms of Use</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
