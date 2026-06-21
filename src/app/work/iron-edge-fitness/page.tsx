'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Star, ChevronDown, Phone, MapPin, Zap, Dumbbell, Shield, Timer } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BG = '#050505';
const ORANGE = '#FF6B00';
const CARD = '#0F0F0F';
const MUTED = 'rgba(255,255,255,0.4)';

const PROGRAMS = [
  {
    n: '01',
    icon: Zap,
    name: 'HIIT & Conditioning',
    duration: '45 min',
    level: 'All Levels',
    desc: 'High-intensity interval training built around functional movement, metabolic conditioning, and real-world strength.',
    items: ['Heart rate zone training', 'Battle ropes, sleds & kettlebells', 'Mobility & cooldown integrated', 'Scaled options every session'],
  },
  {
    n: '02',
    icon: Dumbbell,
    name: 'Powerlifting',
    duration: '60 min',
    level: 'Beginner – Advanced',
    desc: 'Squat, bench, deadlift. Periodized programming and expert coaching that builds raw, competition-ready strength.',
    items: ['Eleiko competition barbells', 'Periodized mesocycles', 'Technique video review', 'Meet prep available'],
  },
  {
    n: '03',
    icon: Shield,
    name: 'Boxing & Combat',
    duration: '60 min',
    level: 'All Levels',
    desc: 'Technical boxing skill meets elite conditioning. Bags, mitts, and sparring in a controlled, coached environment.',
    items: ['Head movement & footwork', 'Heavy bag & pad work', 'Optional light sparring', 'Full body cardio burn'],
  },
  {
    n: '04',
    icon: Timer,
    name: 'Endurance Training',
    duration: '75 min',
    level: 'Intermediate – Advanced',
    desc: 'Rowing, cycling, and running combined with strength work. Built for athletes who want to go longer and harder.',
    items: ['VO2 max development', 'Lactate threshold training', 'Race & event prep', 'Heart rate data tracking'],
  },
];

const TIERS = [
  {
    name: 'Starter',
    price: '$49',
    per: '/mo',
    features: ['Gym floor access', '8 classes/month', 'Locker room access', 'App access'],
    featured: false,
  },
  {
    name: 'Core',
    price: '$89',
    per: '/mo',
    features: ['Unlimited gym access', 'Unlimited classes', 'Recovery room', '1 guest pass/month', 'Nutrition resources'],
    featured: true,
  },
  {
    name: 'Elite',
    price: '$149',
    per: '/mo',
    features: ['Everything in Core', '2 PT sessions/month', 'Cold plunge & sauna', '2 guest passes/month', 'Free fitness assessment', 'Priority class booking'],
    featured: false,
  },
];

const STEPS = [
  { n: '01', title: 'Free Trial Week', desc: 'Seven full days of unlimited classes, gym access, and a facility tour. No credit card, no commitment.' },
  { n: '02', title: 'Choose Your Plan', desc: 'Pick the membership tier that matches your goals and training frequency. Cancel anytime.' },
  { n: '03', title: 'Orientation Session', desc: 'Every new member gets a 30-minute orientation with a certified coach to establish your baseline.' },
  { n: '04', title: 'Train Daily', desc: 'Show up. Put in the work. We handle the programming, coaching, and accountability.' },
];

const TRAINERS = [
  { img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop', name: 'Marcus Reid', specialty: 'Strength & Powerlifting', cert: 'CSCS, USAW Level 2' },
  { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop', name: 'Devon Sawyer', specialty: 'HIIT & Conditioning', cert: 'NASM-CPT, NASM-CES' },
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', name: 'Alana Cruz', specialty: 'Boxing & Combat Sports', cert: 'USA Boxing Coach, CPT' },
];

const TESTIMONIALS = [
  {
    quote: "I dropped 45 lbs in 6 months and hit a 405 lb deadlift. Iron Edge didn't just change my body — it changed everything.",
    name: 'Damien R.',
    result: 'Lost 45 lbs in 6 months',
  },
  {
    quote: "I was terrified walking in on day one. Now I coach the Thursday morning HIIT class as a volunteer. The community here is different.",
    name: 'Alexis P.',
    result: 'Down 3 dress sizes',
  },
  {
    quote: "Marcus prepped me for my first powerlifting meet. I went 9 for 9 on attempts and set three PRs. The coaching here is elite.",
    name: 'Carlos V.',
    result: '3 competition PRs set',
  },
];

const FAQS = [
  { q: "Is Iron Edge right for beginners?", a: "Absolutely. Our HIIT and conditioning classes have scaled modifications built into every session, and coaches watch form closely. We run a Foundations program every month specifically for people who have never lifted before. Personal training also starts from zero — no prior experience assumed." },
  { q: "Can I try before buying a membership?", a: "Yes. We offer a 7-day free trial that includes unlimited class access and full gym floor use. No credit card required. Just show up, introduce yourself at the front desk, and we will take it from there." },
  { q: "What are the gym hours?", a: "Monday through Friday: 5:00am to 11:00pm. Saturday: 7:00am to 8:00pm. Sunday: 8:00am to 6:00pm. Classes start as early as 5:30am on weekdays. The gym floor is accessible any time we are open." },
  { q: "What equipment does Iron Edge have?", a: "15,000 square feet of training space with Eleiko competition barbells and racks, dumbbells up to 150 lbs, a full cardio deck, turf lane with sleds, battle ropes, cable systems, kettlebell stations, boxing bags, and a dedicated stretching and mobility area." },
  { q: "What is your membership cancellation policy?", a: "Month-to-month memberships can be cancelled with 30 days written notice — no cancellation fee. Annual memberships can be paused up to 3 months per year for travel or medical reasons. We never lock you in with punishing exit clauses." },
  { q: "Do you offer nutrition coaching?", a: "Yes. Nutrition coaching is available as a standalone service starting at $149/month or as an add-on to any membership. You get an initial 60-minute strategy session and weekly check-ins with our certified nutrition coach." },
  { q: "Is there parking at the gym?", a: "We have a dedicated 40-space parking lot behind the building plus overflow street parking on Brick Church Park Drive. There is also secure bike storage and we are accessible via bus route." },
];

export default function IronEdgeFitness() {
  return (
    <div style={{ backgroundColor: BG, color: '#fff' }}>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 py-5" style={{ backgroundColor: BG, borderBottom: `1px solid rgba(255,107,0,0.3)` }}>
        <div>
          <span className="text-xl font-black uppercase tracking-wider text-white">IRON EDGE</span>
          <div className="h-0.5 mt-0.5 w-full" style={{ backgroundColor: ORANGE }} />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Programs', 'Membership', 'Schedule', 'Contact'].map((item) => (
            <Link key={item} href={`${BASE}/${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>{item}</Link>
          ))}
        </div>
        <Link href={`${BASE}/contact`} className="text-xs font-black uppercase tracking-widest px-6 py-3" style={{ backgroundColor: ORANGE, color: '#000' }}>
          Start Free Week
        </Link>
      </nav>

      {/* HERO — SPLIT LAYOUT */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left copy panel */}
        <div className="flex-[55] flex items-center px-8 md:px-16 py-24 min-h-[60vh]" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,107,0,0.08) 0%, transparent 60%), #050505' }}>
          <div className="max-w-xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-8" style={{ color: ORANGE }}>
              Nashville Elite Performance Gym
            </p>
            <h1 className="text-7xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8 text-white">
              TRAIN<br />LIKE YOUR<br /><span style={{ color: ORANGE }}>LIFE</span><br />DEPENDS<br />ON IT.
            </h1>
            <p className="text-base leading-relaxed mb-10" style={{ color: MUTED }}>
              Nashville&apos;s most results-driven gym. 3,200+ members, 48 classes per week, and 12 elite personal trainers pushing you past every limit you thought you had.
            </p>
            <div className="flex flex-wrap gap-4 mb-5">
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-widest" style={{ backgroundColor: ORANGE, color: '#000' }}>
                Start Your Free Week <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`${BASE}/programs`} className="inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-widest border border-white/20 text-white">
                View Programs
              </Link>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>No contracts. Cancel anytime.</p>
          </div>
        </div>
        {/* Right image panel */}
        <div className="flex-[45] relative overflow-hidden min-h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Iron Edge athlete training"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,107,0,0.15) 0%, rgba(5,5,5,0.3) 100%)' }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['3,200+', 'Members'], ['48', 'Classes/Week'], ['12', 'Personal Trainers'], ['4.9★', 'Google Rating']].map(([val, label], i) => (
            <div key={i}>
              <div className="text-5xl font-black mb-1.5" style={{ color: ORANGE }}>{val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: ORANGE }}>What We Offer</p>
            <h2 className="text-5xl font-black uppercase text-white">Programs Built for Results</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROGRAMS.map(({ n, icon: Icon, name, duration, level, desc, items }, i) => (
              <div key={i} className="p-8 relative overflow-hidden" style={{ backgroundColor: CARD, borderLeft: `3px solid ${ORANGE}`, background: `linear-gradient(135deg, rgba(255,107,0,0.05) 0%, transparent 100%), ${CARD}` }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black opacity-10 text-white leading-none">{n}</span>
                  <Icon className="w-7 h-7" style={{ color: ORANGE }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black uppercase text-white mb-2">{name}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>{duration}</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>·</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>{level}</span>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>{desc}</p>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs" style={{ color: MUTED }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTENSITY BARS — signature element */}
      <IntensityBars />

      {/* MEMBERSHIP TIERS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: CARD }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: ORANGE }}>Pricing</p>
            <h2 className="text-5xl font-black uppercase text-white">Choose Your Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map(({ name, price, per, features, featured }, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{
                  backgroundColor: featured ? ORANGE : BG,
                  color: featured ? '#000' : '#fff',
                  boxShadow: featured ? `0 0 60px rgba(255,107,0,0.3)` : 'none',
                }}
              >
                {featured && (
                  <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-70">Most Popular</div>
                )}
                <div className="mb-6">
                  <div className={`text-xs font-black uppercase tracking-widest mb-2 ${featured ? 'text-black/60' : 'text-white/40'}`}>{name}</div>
                  <div className={`text-5xl font-black ${featured ? 'text-black' : 'text-white'}`}>
                    {price}<span className={`text-base font-normal ${featured ? 'text-black/50' : 'text-white/35'}`}>{per}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2.5 text-xs font-bold ${featured ? 'text-black/80' : 'text-white/45'}`}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: featured ? '#000' : ORANGE }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="block w-full text-center text-xs font-black uppercase tracking-widest py-3"
                  style={{ backgroundColor: featured ? '#000' : ORANGE, color: featured ? '#fff' : '#000' }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8 font-bold uppercase tracking-widest" style={{ color: MUTED }}>All memberships include app access & class booking. No long-term contracts required.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: ORANGE }}>How It Works</p>
            <h2 className="text-5xl font-black uppercase text-white">Getting Started is Simple</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-black" style={{ backgroundColor: ORANGE, color: '#000' }}>
                  {n}
                </div>
                <h3 className="text-base font-black uppercase text-white mb-3">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-10 py-4 text-sm font-black uppercase tracking-widest" style={{ backgroundColor: ORANGE, color: '#000' }}>
              Claim Your Free Week <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: ORANGE }}>The Team</p>
            <h2 className="text-5xl font-black uppercase text-white">Our Coaches</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TRAINERS.map((t, i) => (
              <div key={i} className="group overflow-hidden" style={{ backgroundColor: BG }}>
                <div className="relative h-72 overflow-hidden">
                  <Image src={t.img} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 50%)' }} />
                </div>
                <div className="p-6">
                  <div className="text-lg font-black uppercase text-white mb-1">{t.name}</div>
                  <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: ORANGE }}>{t.specialty}</div>
                  <div className="text-xs" style={{ color: MUTED }}>{t.cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: ORANGE }}>Member Results</p>
            <h2 className="text-5xl font-black uppercase text-white">Real People. Real Results.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: CARD, borderLeft: `4px solid ${ORANGE}` }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: ORANGE }} />)}
                </div>
                <p className="text-lg font-black italic text-white leading-snug mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-bold text-white/60">{t.name}</div>
                <div className="text-xs font-black uppercase tracking-widest mt-1" style={{ color: ORANGE }}>{t.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: CARD }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: ORANGE }}>FAQ</p>
            <h2 className="text-5xl font-black uppercase text-white">Got Questions?</h2>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <summary className="flex items-center justify-between cursor-pointer gap-4 py-6">
                  <span className="font-black text-sm text-white leading-snug">{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 group-open:rotate-180 transition-transform" style={{ color: ORANGE }} />
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 text-center" style={{ backgroundColor: ORANGE }}>
        <h2 className="text-5xl md:text-6xl font-black uppercase text-black mb-6 leading-tight">
          Your transformation<br />starts Monday.
        </h2>
        <p className="text-base font-bold text-black/60 mb-10 max-w-lg mx-auto">
          7 days completely free. No credit card. No commitment. Just show up and see what this gym can do for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-10 py-4 text-sm font-black uppercase tracking-widest bg-black text-white">
            Claim Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:6155550418" className="inline-flex items-center gap-2 px-10 py-4 text-sm font-black uppercase tracking-widest border-2 border-black text-black">
            <Phone className="w-4 h-4" /> Call a Coach
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 md:px-16" style={{ backgroundColor: BG, borderTop: `2px solid ${ORANGE}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-1">
                <span className="text-xl font-black uppercase tracking-wider text-white">IRON EDGE</span>
              </div>
              <div className="h-0.5 w-20 mb-4" style={{ backgroundColor: ORANGE }} />
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                Nashville&apos;s elite performance gym. Strength, conditioning, and community since 2014.
              </p>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: ORANGE }}>Classes & Schedule</div>
              <ul className="space-y-2">
                {['HIIT & Conditioning', 'Powerlifting', 'Boxing & Combat', 'Endurance Training', 'Personal Training', 'Full Schedule'].map((item) => (
                  <li key={item}><Link href={`${BASE}/programs`} className="text-xs hover:text-white transition-colors" style={{ color: MUTED }}>{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: ORANGE }}>Find Us</div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xs" style={{ color: MUTED }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                  425 Brick Church Park Dr<br />Nashville, TN 37207
                </div>
                <a href="tel:6155550418" className="flex items-center gap-2 text-xs" style={{ color: MUTED }}>
                  <Phone className="w-3.5 h-3.5" style={{ color: ORANGE }} /> (615) 555-0418
                </a>
                <div className="text-xs" style={{ color: MUTED }}>
                  Mon–Fri: 5:00am – 11:00pm<br />
                  Sat: 7:00am – 8:00pm<br />
                  Sun: 8:00am – 6:00pm
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 Iron Edge Fitness LLC. All rights reserved. Nashville, TN.</p>
            <div className="flex gap-4">
              {['Privacy', 'Terms', 'Waiver'].map((item) => (
                <Link key={item} href="#" className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>{item}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
