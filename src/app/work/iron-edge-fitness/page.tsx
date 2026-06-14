import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell, ArrowRight, Check, Star, Zap, Users, Trophy, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

const PROGRAMS = [
  { icon: Dumbbell, title: 'Personal Training', tag: '1-on-1', price: 'From $85/session', desc: 'Custom programming built around your body, goals, and schedule. Accountability and expertise in every session.', items: ['Initial body composition assessment', 'Fully custom periodized program', 'Daily check-ins via app', 'Nutrition fundamentals included', 'Monthly progress photos & measurements'] },
  { icon: Users, title: 'Group Classes', tag: 'All Levels', price: 'From $25/class', desc: '20+ classes per week including HIIT, powerlifting, kettlebell, and cardio. All levels — beginners welcome.', items: ['Unlimited classes with membership', 'Coached form correction every class', 'Modifications always available', 'Competitive & community atmosphere', 'Morning, midday, evening options'] },
  { icon: Zap, title: 'Nutrition Coaching', tag: 'Add-On or Standalone', price: 'From $149/month', desc: 'Real food, real habits. Macros and meal plans built around your lifestyle — not a cookie-cutter diet.', items: ['7-day food journal analysis', 'Macro targets & meal timing', 'Weekly accountability check-ins', 'Restaurant & travel strategies', 'Supplement guidance'] },
  { icon: Trophy, title: 'Competition Prep', tag: 'Advanced', price: 'Custom Quote', desc: 'Elite prep for powerlifting, bodybuilding, CrossFit, and functional fitness competitions.', items: ['Meet/show selection guidance', 'Peak week programming', 'Weight class strategy', 'Posing & platform coaching', 'Coach present at competitions'] },
];

const MEMBERSHIP = [
  { name: 'Drop-In', price: '$25', per: '/day', features: ['Full gym access', 'All group classes', 'Locker & towel', 'No commitment'] },
  { name: 'Monthly', price: '$89', per: '/month', features: ['Unlimited gym access', 'Unlimited group classes', 'Recovery room access', 'Guest pass (1/month)', '10% retail discount'], highlight: true },
  { name: 'Annual', price: '$69', per: '/month', features: ['Everything in Monthly', 'Sauna & cold plunge', '2 guest passes/month', '15% retail discount', 'Free fitness assessment'] },
];

const REVIEWS = [
  { text: "Marcus completely changed how I train. In 6 months I lost 34 pounds and put on real muscle for the first time. Iron Edge is the real deal.", author: "Damien R.", type: "Personal Training" },
  { text: "I was intimidated walking in. I should not have been. Everyone here is supportive and the coaches push you without making you feel like an outsider.", author: "Alexis P.", type: "Group Classes" },
  { text: "Daniel prepped me for my first powerlifting meet. Peak week was dialed in perfectly and I hit all three PRs on the platform.", author: "Carlos V.", type: "Competition Prep" },
];

const FAQS = [
  { q: "Is Iron Edge for beginners or experienced athletes only?", a: "Both. Our group classes have beginner modifications built in and coaches watch form closely. We run a Foundations course every month specifically for people who have never lifted before. Personal training starts from zero — we never assume prior experience." },
  { q: "Can I try before committing to a membership?", a: "Yes. We offer a 7-day free trial that includes unlimited classes and full gym access. No credit card required. Just show up and meet us." },
  { q: "What are your hours?", a: "We are open Monday through Friday 5:00am–11:00pm, Saturday 7:00am–8:00pm, and Sunday 8:00am–6:00pm. Classes start as early as 5:30am on weekdays." },
  { q: "Do I need to bring my own equipment or gear?", a: "No. We supply barbells, dumbbells, kettlebells, resistance bands, mats, foam rollers, and all group class equipment. We have lockers, showers, and fresh towels for members. Bring your own lock or rent one at the front desk." },
  { q: "What is your cancellation policy for memberships?", a: "Month-to-month memberships require 30 days written notice to cancel. Annual memberships can be paused for up to 3 months per year for travel or medical reasons. There is no cancellation fee for month-to-month plans." },
  { q: "Do you offer nutrition coaching without personal training?", a: "Yes. Nutrition coaching is available as a standalone service starting at $149/month. You meet with Coach Tanya for an initial 60-minute strategy session and then check in weekly via video or messaging." },
  { q: "Is there parking available?", a: "Yes. We have a dedicated 40-space lot directly behind the building, plus overflow street parking on Alberta St. We also have secure bike storage and are on the TriMet #72 bus line." },
];

export default function IronEdgeHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,10,10,0.85)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-3xl">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 text-white/25">Portland, OR · Since 2014 · 2,400+ Members</div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 uppercase">Forge<br /><span style={{ color: ORANGE }}>Your</span><br />Edge.</h1>
          <p className="text-white/55 text-lg mb-10 max-w-xl leading-relaxed">Portland's premier strength and conditioning gym. Personal training, group classes, and nutrition coaching. No excuses. No gimmicks. Just results.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: ORANGE }}>Start Free 7-Day Trial <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/20 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4">View Programs</Link>
            <a href="tel:5035550841" className="inline-flex items-center gap-2 border border-white/10 text-white/50 font-black uppercase tracking-widest text-[11px] px-8 py-4"><Phone className="w-4 h-4" /> (503) 555-0841</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: ORANGE }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['2,400+ Members', '22 Certified Coaches', 'Open 5am–11pm Daily', '7-Day Free Trial'].map((s, i) => (
            <div key={i} className="text-black font-black text-sm uppercase tracking-widest">{s}</div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ backgroundColor: BLACK }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>Training Programs</div>
            <h2 className="text-4xl font-black text-white uppercase">What We Offer</h2>
            <p className="text-white/30 mt-3 text-sm uppercase tracking-widest font-black">Every program is personalized. Every result is earned.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROGRAMS.map(({ icon: Icon, title, tag, price, desc, items }, i) => (
              <div key={i} className="p-8 border border-white/8 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start justify-between mb-5">
                  <Icon className="w-6 h-6" style={{ color: ORANGE }} strokeWidth={1.5} />
                  <div className="text-right">
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/30">{tag}</div>
                    <div className="text-xs font-black" style={{ color: ORANGE }}>{price}</div>
                  </div>
                </div>
                <h3 className="font-black text-white text-base mb-2 uppercase tracking-wide">{title}</h3>
                <p className="text-white/35 text-xs leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-2 text-xs text-white/30"><Check className="w-3 h-3 shrink-0" style={{ color: ORANGE }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: ORANGE, color: BLACK }}>Full Programs & Pricing <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#111' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>Membership</div>
            <h2 className="text-4xl font-black text-white uppercase">Choose Your Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {MEMBERSHIP.map(({ name, price, per, features, highlight }, i) => (
              <div key={i} className={`p-8 ${highlight ? 'border-2' : 'border border-white/8'}`} style={{ borderColor: highlight ? ORANGE : undefined }}>
                {highlight && <div className="text-[9px] font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Most Popular</div>}
                <div className="mb-5">
                  <div className="font-black text-white text-base mb-1 uppercase tracking-wide">{name}</div>
                  <div className="text-4xl font-black text-white">{price}<span className="text-sm font-normal text-white/35">{per}</span></div>
                </div>
                <ul className="space-y-2 mb-8">
                  {features.map((f, j) => <li key={j} className="flex items-center gap-2 text-xs text-white/45"><Check className="w-3 h-3 shrink-0" style={{ color: ORANGE }} />{f}</li>)}
                </ul>
                <Link href={`${BASE}/contact`} className={`w-full block text-center text-[10px] font-black uppercase tracking-widest py-3 ${highlight ? 'text-black' : 'border border-white/15 text-white/60'}`} style={{ backgroundColor: highlight ? ORANGE : undefined }}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IRON EDGE */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16 bg-gray-950">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-5" style={{ color: ORANGE }}>Why Iron Edge</div>
            <h2 className="text-4xl font-black text-white mb-7 uppercase leading-tight">Built Different. Built for You.</h2>
            <div className="space-y-3 mb-8">
              {["15,000 sq ft training floor", "State-of-the-art Eleiko barbells & racks", "Recovery room, sauna & cold plunge", "Online programming app included", "Childcare available weekday mornings", "In-house physical therapist on staff"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/45"><Check className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b pb-0.5" style={{ color: ORANGE, borderColor: ORANGE }}>Meet Our Coaches <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: BLACK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase mb-2">Member Results</h2>
            <p className="text-white/25 text-xs uppercase tracking-widest font-black">4.9 Stars · 300+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-7 border-l-4" style={{ backgroundColor: '#111', borderLeftColor: ORANGE }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ORANGE }} />)}</div>
                <p className="text-white/45 text-sm italic leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-black text-xs uppercase tracking-widest text-white/25">— {r.author} · {r.type}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-black uppercase tracking-widest" style={{ color: ORANGE }}>Read More Stories <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: '#111' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>FAQ</div>
            <h2 className="text-4xl font-black text-white uppercase">Got Questions</h2>
          </div>
          <div className="divide-y divide-white/8">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-black text-sm leading-snug text-white">{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: ORANGE }} />
                </summary>
                <p className="mt-4 text-white/40 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: BLACK }} className="py-14 px-6 md:px-12 border-t border-white/8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Location</div>
            <div className="flex items-start gap-2 text-white/55 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
              <span>4201 NE Alberta St<br />Portland, OR 97218</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Hours</div>
            <div className="text-white/55 text-sm space-y-0.5">
              <div>Mon – Fri: 5:00am – 11:00pm</div>
              <div>Saturday: 7:00am – 8:00pm</div>
              <div>Sunday: 8:00am – 6:00pm</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:5035550841" className="inline-flex items-center gap-2 text-white font-black text-base"><Phone className="w-4 h-4" style={{ color: ORANGE }} /> (503) 555-0841</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-[11px] px-7 py-3" style={{ backgroundColor: ORANGE }}>Claim Free Trial <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: ORANGE }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-black uppercase mb-4">7 Days Free. No Credit Card. No Commitment.</h2>
        <p className="text-black/60 mb-8 text-sm font-bold uppercase tracking-widest">Try any class, meet your coach, experience the facility. Then decide.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[11px] px-10 py-4 bg-black text-white">Claim Your Free Trial <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:5035550841" className="inline-flex items-center gap-2 border-2 border-black text-black font-black uppercase tracking-widest text-[11px] px-10 py-4"><Clock className="w-4 h-4" /> Call to Talk to a Coach</a>
        </div>
      </section>
    </>
  );
}
