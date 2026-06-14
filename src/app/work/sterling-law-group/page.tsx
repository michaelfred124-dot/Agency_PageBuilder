import Image from 'next/image';
import Link from 'next/link';
import { Scale, ArrowRight, Check, Star, Shield, Users, Briefcase, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';
const DARK = '#0F1A33';
const WHITE = '#FFFFFF';

const PRACTICE_AREAS = [
  {
    icon: Shield,
    title: 'Personal Injury',
    desc: 'Auto accidents, slips & falls, wrongful death. No fees unless we win.',
    stat: '$50M+ Recovered',
    items: ['Car & truck accidents', 'Slip & fall injuries', 'Wrongful death claims', 'Workplace injuries'],
  },
  {
    icon: Users,
    title: 'Family Law',
    desc: 'Divorce, child custody, adoption, and domestic relations handled with care.',
    stat: '500+ Families Served',
    items: ['Divorce & separation', 'Child custody & support', 'Adoptions', 'Protective orders'],
  },
  {
    icon: Briefcase,
    title: 'Business Law',
    desc: 'Contract disputes, business formation, and commercial litigation.',
    stat: '98% Win Rate',
    items: ['Contract review & disputes', 'Business formation', 'Employment matters', 'Commercial litigation'],
  },
];

const DIFFERENTIATORS = [
  { stat: '25', unit: 'Years', label: 'Of Colorado Legal Practice' },
  { stat: '$0', unit: 'Upfront', label: 'On Personal Injury Cases' },
  { stat: 'Direct', unit: 'Attorney', label: 'Access — No Gatekeepers' },
  { stat: '24/7', unit: 'Line', label: 'Emergency Legal Help' },
];

const ATTORNEYS = [
  {
    name: 'James Sterling',
    title: 'Founding Partner',
    practice: 'Personal Injury & Business Law',
    bio: 'James founded Sterling Law Group in 1999 after 8 years at top Denver firms. He has recovered over $30 million for injury clients and is known as a tenacious trial advocate.',
    bar: 'Colorado Bar, 1994',
  },
  {
    name: 'Maria Lawson',
    title: 'Partner',
    practice: 'Family Law & Estate Planning',
    bio: 'Maria joined Sterling in 2004 and leads our family law practice. Clients describe her as compassionate yet fierce — exactly what families in crisis need at their side.',
    bar: 'Colorado Bar, 2001',
  },
];

const STEPS = [
  { n: '01', title: 'Free Consultation', desc: 'Call or submit your case online. An attorney reviews your situation at no cost.' },
  { n: '02', title: 'Case Strategy', desc: 'We analyze the facts, identify your options, and build a winning approach.' },
  { n: '03', title: 'We Fight For You', desc: 'Our attorneys negotiate aggressively, litigate if needed, and keep you informed.' },
  { n: '04', title: 'Resolution', desc: 'Settlement or verdict. We do not stop until you receive the outcome you deserve.' },
  { n: '05', title: 'No Fee Unless We Win', desc: 'On injury cases, you pay nothing unless we recover money for you. Zero financial risk.' },
];

const REVIEWS = [
  { text: "Sterling Law Group fought tirelessly for my family after our accident. We received a settlement that truly changed our lives.", author: "Rachel M.", type: "Personal Injury", rating: 5 },
  { text: "During my divorce, Maria Lawson provided not just legal expertise but genuine compassion. I always felt someone was in my corner.", author: "David K.", type: "Family Law", rating: 5 },
  { text: "Derek built a case that reduced my felony charges significantly. He returned every call and always told me the truth.", author: "Tom B.", type: "Criminal Defense", rating: 5 },
];

const FAQS = [
  { q: "How much does it cost to hire Sterling Law Group?", a: "Personal injury cases are handled on a contingency fee basis — you pay nothing unless we win. For family law and business matters, we offer flat-rate packages and hourly options depending on the scope. All clients receive a free initial consultation." },
  { q: "How long will my case take?", a: "It depends on the type of case. Many personal injury settlements resolve in 3–12 months. Contested divorces typically take 6–18 months. Criminal cases vary widely. We give you a realistic timeline at your first consultation and update you throughout." },
  { q: "Will I work directly with an attorney?", a: "Yes. You will have a dedicated attorney assigned to your case from day one. We do not pass clients off to paralegals. You can reach your attorney directly by phone or email throughout your case." },
  { q: "Do you handle emergency or after-hours situations?", a: "Absolutely. We offer a 24/7 emergency line for criminal matters, DUI arrests, and urgent family law situations. Call our main number after hours and follow the prompts to reach the on-call attorney." },
  { q: "What should I bring to my first consultation?", a: "Any documents related to your case — police reports, medical records, correspondence, contracts, or court papers. Do not worry if you do not have everything. We will help you identify what is needed." },
  { q: "Can you handle cases outside of Colorado Springs?", a: "Yes. We handle cases throughout Colorado, including Denver, Pueblo, and the Front Range corridor. We also take select federal matters regardless of location." },
];

export default function SterlingHome() {
  return (
    <>
      {/* HERO — full-bleed dark with centered content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background photo with heavy dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Courtroom"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${DARK}F5 0%, ${NAVY}E8 60%, ${DARK}CC 100%)` }}
          />
          {/* Subtle grid texture overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(196,154,60,0.3) 40px, rgba(196,154,60,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(196,154,60,0.3) 40px, rgba(196,154,60,0.3) 41px)',
            }}
          />
        </div>

        {/* Centered content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          {/* Seal icon */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2"
            style={{ borderColor: GOLD + '60', backgroundColor: GOLD + '15' }}
          >
            <Scale className="w-9 h-9" style={{ color: GOLD }} strokeWidth={1.5} />
          </div>

          {/* Thin gold rule */}
          <div className="w-20 h-px mx-auto mb-5" style={{ backgroundColor: GOLD }} />

          {/* Firm name */}
          <div
            className="text-xs font-bold uppercase tracking-[0.5em] mb-6"
            style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
          >
            Sterling Law Group
          </div>

          {/* Main headline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Experienced Advocates.<br />Real Results.
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg italic mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(250,248,242,0.75)', fontFamily: 'var(--font-body)' }}
          >
            Trusted Colorado legal representation for personal injury, family law, and business disputes — since 1999.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs px-9 py-4"
              style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-xs px-9 py-4 text-white"
              style={{ borderColor: 'rgba(250,248,242,0.4)', fontFamily: 'var(--font-display)' }}
            >
              Our Practice Areas
            </Link>
          </div>

          {/* Credential strip */}
          <div
            className="text-[10px] font-bold uppercase tracking-[0.35em]"
            style={{ color: 'rgba(250,248,242,0.35)', fontFamily: 'var(--font-display)' }}
          >
            Colorado Springs · Est. 1999 · 1,200+ Cases Won
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section style={{ backgroundColor: NAVY }} className="py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['1,200+', 'Cases Won'], ['25+', 'Years Experience'], ['98%', 'Client Satisfaction'], ['$0', 'Upfront on Injury Cases']].map(([v, l], i) => (
            <div key={i}>
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {v}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE ELEMENT — Practice Area Cards with Outcome Stats */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Practice Areas
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Our Practice Areas
            </h2>
            <p
              className="text-gray-500 max-w-xl mx-auto text-base italic"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From first call to final resolution, we handle the complexity so you can focus on recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map(({ icon: Icon, title, desc, stat, items }, i) => (
              <div
                key={i}
                className="p-8 rounded-sm group transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: NAVY,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(30,45,90,0.35)`;
                  (e.currentTarget as HTMLElement).style.borderBottom = `3px solid ${GOLD}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderBottom = '3px solid transparent';
                }}
              >
                {/* Gold border bottom (always reserve space) */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: GOLD }}
                />
                <Icon
                  className="w-7 h-7 mb-6"
                  style={{ color: GOLD }}
                  strokeWidth={1.5}
                />
                <h3
                  className="font-bold text-xl mb-3 text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm italic leading-relaxed mb-6"
                  style={{ color: 'rgba(250,248,242,0.65)', fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
                <ul className="space-y-1.5 mb-8">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: 'rgba(250,248,242,0.6)', fontFamily: 'var(--font-body)' }}
                    >
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Outcome stat */}
                <div
                  className="text-3xl font-bold text-white mb-4 border-t pt-6"
                  style={{ fontFamily: 'var(--font-display)', borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  {stat}
                </div>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-xs px-8 py-3"
              style={{ borderColor: NAVY, color: NAVY, fontFamily: 'var(--font-display)' }}
            >
              View All Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY STERLING — 4 differentiators */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12 border-t border-amber-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Why Sterling
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Why Clients Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {DIFFERENTIATORS.map(({ stat, unit, label }, i) => (
              <div key={i} className="p-6">
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ color: NAVY, fontFamily: 'var(--font-display)' }}
                >
                  {stat}
                </div>
                <div
                  className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                >
                  {unit}
                </div>
                <div
                  className="text-xs italic"
                  style={{ color: NAVY + '80', fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTORNEY PROFILES */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Our Team
            </div>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Meet Your Attorneys
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ATTORNEYS.map((atty, i) => (
              <div key={i} className="p-8 rounded-sm" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center mb-6 font-bold text-xl text-white"
                  style={{ backgroundColor: GOLD + '25', fontFamily: 'var(--font-display)' }}
                >
                  <span style={{ color: GOLD }}>
                    {atty.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3
                  className="font-bold text-xl text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {atty.name}
                </h3>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                >
                  {atty.title}
                </div>
                <div
                  className="text-xs italic mb-5"
                  style={{ color: 'rgba(250,248,242,0.4)', fontFamily: 'var(--font-body)' }}
                >
                  {atty.practice}
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'rgba(250,248,242,0.65)', fontFamily: 'var(--font-body)' }}
                >
                  {atty.bio}
                </p>
                <div
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: 'rgba(250,248,242,0.3)', fontFamily: 'var(--font-display)' }}
                >
                  {atty.bar}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/about`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest border-b pb-0.5"
              style={{ color: GOLD, borderColor: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Full Attorney Profiles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: DARK }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Client Stories
            </div>
            <h2
              className="text-4xl font-bold mb-2 text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Real Results for Real People
            </h2>
            <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              4.9 Stars · 180+ Google Reviews
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 rounded-sm" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                <div className="flex mb-5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p
                  className="italic leading-relaxed mb-5 text-sm"
                  style={{ color: 'rgba(250,248,242,0.8)', fontFamily: 'var(--font-body)' }}
                >
                  "{r.text}"
                </p>
                <div
                  className="font-bold text-sm"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                >
                  — {r.author}{' '}
                  <span
                    className="font-normal text-xs uppercase tracking-widest"
                    style={{ color: 'rgba(250,248,242,0.35)' }}
                  >
                    · {r.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/reviews`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Read All 180+ Reviews <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS — 5 steps */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Our Process
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              From Call to Resolution
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-0">
            {STEPS.map(({ n, title, desc }, i) => (
              <div
                key={i}
                className="relative p-6 border-l"
                style={{ borderLeftColor: i === 0 ? GOLD : 'rgba(30,45,90,0.15)' }}
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: NAVY + '25', fontFamily: 'var(--font-display)' }}
                >
                  {n}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: NAVY, fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-xs italic leading-relaxed"
                  style={{ color: NAVY + '80', fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs px-10 py-4"
              style={{ backgroundColor: NAVY, fontFamily: 'var(--font-display)' }}
            >
              Start Your Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              FAQ
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Common Questions
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4 list-none">
                  <span
                    className="font-bold text-sm leading-snug"
                    style={{ color: NAVY, fontFamily: 'var(--font-body)' }}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180 text-gray-400"
                  />
                </summary>
                <p
                  className="mt-4 text-sm leading-relaxed italic"
                  style={{ color: '#666', fontFamily: 'var(--font-body)' }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Address
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-white/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span>218 N Cascade Ave, Suite 400<br />Colorado Springs, CO 80903</span>
            </div>
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Hours
            </div>
            <div className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'var(--font-body)' }}>
              <div>Mon – Fri: 8:00am – 6:00pm</div>
              <div>Saturday: 9:00am – 2:00pm</div>
              <div className="font-bold" style={{ color: GOLD }}>24/7 emergency line available</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-1"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Get in Touch
            </div>
            <a
              href="tel:7195550381"
              className="inline-flex items-center gap-2 text-white font-bold text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Phone className="w-4 h-4" style={{ color: GOLD }} /> (719) 555-0381
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs px-7 py-3 text-white"
              style={{ backgroundColor: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Schedule Free Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 text-center border-t border-white/10">
        <Scale
          className="w-10 h-10 mx-auto mb-6"
          style={{ color: GOLD }}
          strokeWidth={1.5}
        />
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          No fee unless we win.
        </h2>
        <p
          className="italic mb-10 max-w-xl mx-auto text-base leading-relaxed"
          style={{ color: 'rgba(250,248,242,0.65)', fontFamily: 'var(--font-body)' }}
        >
          Your first consultation is free. No fees unless we win on personal injury cases. Evening and weekend appointments available. Bilingual staff. Talk to an attorney today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs px-10 py-4"
            style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
          >
            Schedule Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:7195550381"
            className="inline-flex items-center gap-2 border-2 border-white/25 text-white font-bold uppercase tracking-widest text-xs px-10 py-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
