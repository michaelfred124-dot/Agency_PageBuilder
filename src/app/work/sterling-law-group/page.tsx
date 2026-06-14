import Image from 'next/image';
import Link from 'next/link';
import { Scale, ArrowRight, Check, Star, Shield, Users, Clock, Phone, MapPin, ChevronDown } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';

const AREAS = [
  { icon: Shield, title: 'Personal Injury', price: 'Contingency Fee', desc: 'Auto accidents, slips & falls, wrongful death. No fees unless we win.', items: ['Car & truck accidents', 'Slip & fall injuries', 'Wrongful death claims', 'Workplace injuries'] },
  { icon: Users, title: 'Family Law', price: 'Free Consult', desc: 'Divorce, child custody, adoption, and domestic relations handled with care.', items: ['Divorce & separation', 'Child custody & support', 'Adoptions', 'Protective orders'] },
  { icon: Scale, title: 'Business Law', price: 'Flat-Rate Options', desc: 'Contract disputes, business formation, and commercial litigation.', items: ['Contract review & disputes', 'Business formation', 'Employment matters', 'Commercial litigation'] },
];

const STEPS = [
  { n: '01', title: 'Free Consultation', desc: 'Call or submit your case online. An attorney reviews your situation at no cost.' },
  { n: '02', title: 'Case Strategy', desc: 'We analyze the facts, identify your options, and build a winning approach.' },
  { n: '03', title: 'We Fight For You', desc: 'Our attorneys negotiate aggressively, litigate if needed, and keep you informed.' },
  { n: '04', title: 'Resolution', desc: 'Settlement or verdict. We do not stop until you receive the outcome you deserve.' },
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
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,23,36,0.96) 0%, rgba(30,45,90,0.7) 55%, rgba(30,45,90,0.15) 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px" style={{ backgroundColor: GOLD }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em]" style={{ color: GOLD }}>Colorado Springs · Est. 1999 · 1,200+ Cases Won</span></div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Justice.<br />Fought For.<br />Won.</h1>
          <p className="text-white/65 text-lg mb-10 leading-relaxed max-w-xl">Experienced legal representation for personal injury, family law, criminal defense, and business disputes. We do not get paid unless you win.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: GOLD }}>Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4">Practice Areas</Link>
            <a href="tel:7195550381" className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-bold uppercase tracking-widest text-[11px] px-8 py-4"><Phone className="w-4 h-4" /> (719) 555-0381</a>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section style={{ backgroundColor: NAVY }} className="py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['1,200+', 'Cases Won'], ['25+', 'Years Experience'], ['98%', 'Client Satisfaction'], ['$0', 'Upfront on Injury Cases']].map(([v, l], i) => (
            <div key={i}>
              <div className="text-3xl font-serif font-bold text-white mb-1">{v}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Practice Areas</div>
            <h2 className="text-4xl font-serif mb-3" style={{ color: NAVY }}>How We Can Help You</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">From first responder to final resolution, we handle the complexity so you can focus on recovery.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AREAS.map(({ icon: Icon, title, price, desc, items }, i) => (
              <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: GOLD }}>
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-6 h-6" style={{ color: NAVY }} strokeWidth={1.5} />
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 text-white" style={{ backgroundColor: GOLD }}>{price}</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />{item}</li>)}
                </ul>
                <Link href={`${BASE}/services`} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5" style={{ color: GOLD }}>Learn More <ArrowRight className="w-3 h-3" /></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-[11px] px-8 py-3" style={{ borderColor: NAVY, color: NAVY }}>View All Practice Areas <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Process</div>
            <h2 className="text-4xl font-serif text-white">From Call to Resolution</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="relative p-8 border-l border-white/10">
                <div className="text-5xl font-serif font-bold mb-4" style={{ color: GOLD + '30' }}>{n}</div>
                <h3 className="font-bold text-white text-sm mb-3">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: GOLD }}>Start Your Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: NAVY }}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: GOLD }}>Our Firm</div>
            <h2 className="text-4xl font-serif text-white mb-6">Colorado's trusted legal advocates since 1999.</h2>
            <p className="text-white/55 leading-relaxed mb-8">Founded by James Sterling and Maria Lawson, our firm has spent 25+ years fighting for Colorado families and businesses with integrity and tenacity. We are trial attorneys — insurers and opposing counsel know we are prepared to go the distance.</p>
            <div className="space-y-3 mb-8">
              {["No fees unless we win on injury cases", "Free initial consultation for all case types", "Direct attorney access — no gatekeepers", "Evening & weekend appointments available", "Bilingual staff — English & Spanish"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/65"><Check className="w-4 h-4 shrink-0" style={{ color: GOLD }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: GOLD, borderColor: GOLD }}>Meet the Team <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Client Stories</div>
            <h2 className="text-4xl font-serif mb-2" style={{ color: NAVY }}>Real Results for Real People</h2>
            <p className="text-gray-500 text-sm">4.9 Stars · 180+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-8 border-l-4" style={{ borderLeftColor: GOLD }}>
                <div className="flex mb-4">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD }} />)}</div>
                <p className="text-gray-600 italic leading-relaxed mb-5 text-sm">"{r.text}"</p>
                <div className="font-bold text-sm" style={{ color: NAVY }}>{r.author} <span className="text-gray-400 font-normal text-xs uppercase tracking-widest">· {r.type}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest justify-center" style={{ color: NAVY }}>Read All 180+ Reviews <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>FAQ</div>
            <h2 className="text-4xl font-serif" style={{ color: NAVY }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: NAVY }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180 text-gray-400" />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Address</div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span>218 N Cascade Ave, Suite 400<br />Colorado Springs, CO 80903</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Hours</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>Mon – Fri: 8:00am – 6:00pm</div>
              <div>Saturday: 9:00am – 2:00pm</div>
              <div className="font-bold" style={{ color: GOLD }}>24/7 emergency line available</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>Get in Touch</div>
            <a href="tel:7195550381" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: GOLD }} /> (719) 555-0381</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-7 py-3 text-white" style={{ backgroundColor: GOLD }}>Schedule Free Consultation <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: GOLD }} className="py-16 px-6 text-center">
        <Clock className="w-8 h-8 text-white/60 mx-auto mb-5" />
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Your first consultation is free.</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">No fees unless we win on personal injury cases. Evening and weekend appointments available. Bilingual staff. Talk to an attorney today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: NAVY }}>Schedule Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:7195550381" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4"><Phone className="w-4 h-4" /> Call Now</a>
        </div>
      </section>
    </>
  );
}
