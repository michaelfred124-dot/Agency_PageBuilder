'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dumbbell, ArrowRight, Check, Star, Users, Trophy, Phone, MapPin, ChevronDown, Clock, Zap } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';
const GUNMETAL = '#1C1C1E';

const INTENSITY_PROGRAMS = [
  { name: '1-on-1 Personal Training', intensity: 95, price: 'From $85/session', desc: 'Custom programming, daily accountability, and expert coaching every rep of every set.' },
  { name: 'Group Classes', intensity: 75, price: 'From $25/class', desc: '20+ coached classes per week — HIIT, powerlifting, kettlebell, cardio. All levels welcome.' },
  { name: 'Online Coaching', intensity: 60, price: 'From $149/month', desc: 'App-based programming, weekly check-ins, and direct access to your coach. Train anywhere.' },
  { name: 'Nutrition Coaching', intensity: 70, price: 'From $149/month', desc: 'Real food, real habits. Macros and meal plans built around your lifestyle — not a cookie-cutter diet.' },
];

const MEMBERSHIP = [
  { name: 'Drop-In', price: '$25', per: '/day', features: ['Full gym access', 'All group classes', 'Locker & towel', 'No commitment'] },
  { name: 'Monthly', price: '$89', per: '/month', features: ['Unlimited gym access', 'Unlimited group classes', 'Recovery room access', 'Guest pass (1/month)', '10% retail discount'], highlight: true },
  { name: 'Annual', price: '$69', per: '/month', features: ['Everything in Monthly', 'Sauna & cold plunge', '2 guest passes/month', '15% retail discount', 'Free fitness assessment'] },
];

const TRAINERS = [
  { name: 'Marcus Reid', certs: ['NSCA-CPT', 'Precision Nutrition'], specialty: '"I build programs around your life — not around the gym."', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop' },
  { name: 'Daniel Torres', certs: ['CSCS', 'USA Powerlifting Coach'], specialty: '"Competition prep is about peaking at exactly the right moment."', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop' },
];

const REVIEWS = [
  { text: "Marcus completely changed how I train. In 6 months I lost 34 pounds and put on real muscle for the first time. Iron Edge is the real deal.", author: "Damien R.", type: "Personal Training", metric: "Lost 34 lbs" },
  { text: "I was intimidated walking in. I should not have been. Everyone here is supportive and the coaches push you without making you feel like an outsider.", author: "Alexis P.", type: "Group Classes", metric: "Down 3 sizes" },
  { text: "Daniel prepped me for my first powerlifting meet. Peak week was dialed in perfectly and I hit all three PRs on the platform.", author: "Carlos V.", type: "Competition Prep", metric: "Hit 3 PRs" },
];

const FAQS = [
  { q: "Is Iron Edge for beginners or experienced athletes only?", a: "Both. Our group classes have beginner modifications built in and coaches watch form closely. We run a Foundations course every month specifically for people who have never lifted before. Personal training starts from zero — we never assume prior experience." },
  { q: "Can I try before committing to a membership?", a: "Yes. We offer a 7-day free trial that includes unlimited classes and full gym access. No credit card required. Just show up and meet us." },
  { q: "What are your hours?", a: "We are open Monday through Friday 5:00am–11:00pm, Saturday 7:00am–8:00pm, and Sunday 8:00am–6:00pm. Classes start as early as 5:30am on weekdays." },
  { q: "Do I need to bring my own equipment or gear?", a: "No. We supply barbells, dumbbells, kettlebells, resistance bands, mats, foam rollers, and all group class equipment. We have lockers, showers, and fresh towels for members. Bring your own lock or rent one at the front desk." },
  { q: "What is your cancellation policy for memberships?", a: "Month-to-month memberships require 30 days written notice to cancel. Annual memberships can be paused for up to 3 months per year for travel or medical reasons. There is no cancellation fee for month-to-month plans." },
  { q: "Do you offer nutrition coaching without personal training?", a: "Yes. Nutrition coaching is available as a standalone service starting at $149/month. You meet with Coach Tanya for an initial 60-minute strategy session and then check in weekly via video or messaging." },
];

function IntensityBars() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ backgroundColor: BLACK }} className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Programs</div>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            CHOOSE YOUR<br /><span style={{ color: ORANGE }}>INTENSITY</span>
          </h2>
        </div>
        <div className="space-y-10">
          {INTENSITY_PROGRAMS.map((prog, i) => (
            <div key={i} className="group">
              <div className="flex flex-col md:flex-row md:items-end gap-3 mb-3">
                <h3 className="text-2xl font-black uppercase text-white tracking-wide flex-1" style={{ fontFamily: 'var(--font-display)' }}>{prog.name}</h3>
                <div className="flex items-center gap-6">
                  <span className="text-sm font-black" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>{prog.price}</span>
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>{prog.intensity}%</span>
                </div>
              </div>
              <div className="relative h-2 rounded-none mb-3" style={{ backgroundColor: GUNMETAL }}>
                <div
                  className="h-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${prog.intensity}%` : '0%',
                    backgroundColor: ORANGE,
                    transitionDelay: `${i * 150}ms`,
                  }}
                />
              </div>
              <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{prog.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm px-10 py-4" style={{ backgroundColor: ORANGE, color: BLACK, fontFamily: 'var(--font-display)' }}>
            View All Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function IronEdgeHome() {
  return (
    <>
      {/* BENTO HERO GRID */}
      <section className="w-full" style={{ minHeight: '100vh', backgroundColor: BLACK }}>
        {/* Desktop bento grid */}
        <div className="hidden md:grid h-screen" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
          {/* Block 1: Large gym photo, col 1-2, row 1 */}
          <div className="relative overflow-hidden" style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}>
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Iron Edge Fitness gym floor"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-xl font-black uppercase tracking-wide leading-tight" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>
                Portland's Only<br />Results-Guaranteed Gym
              </p>
            </div>
          </div>

          {/* Block 2: Headline, col 3, row 1 */}
          <div className="flex flex-col justify-center p-10" style={{ backgroundColor: GUNMETAL, gridColumn: '3 / 4', gridRow: '1 / 2' }}>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-white/30" style={{ fontFamily: 'var(--font-display)' }}>Portland, OR · Est. 2012</div>
            <h1 className="text-6xl xl:text-7xl font-black text-white leading-none uppercase mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              BUILT<br />DIFFER<span style={{ color: ORANGE }}>ENT.</span>
            </h1>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
              Elite strength and conditioning. No gimmicks, no shortcuts — just proven methods and coaches who give a damn.
            </p>
          </div>

          {/* Block 3: Free trial CTA, col 1, row 2 */}
          <div className="flex flex-col justify-center items-start p-10" style={{ backgroundColor: ORANGE, gridColumn: '1 / 2', gridRow: '2 / 3' }}>
            <div className="text-8xl xl:text-9xl font-black leading-none" style={{ color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 900 }}>7</div>
            <div className="text-xl font-black uppercase tracking-wide mb-6" style={{ color: BLACK, fontFamily: 'var(--font-display)' }}>Day Free Trial</div>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Claim Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Block 4: Stats, col 2, row 2 */}
          <div className="flex flex-col justify-center p-10 gap-6" style={{ backgroundColor: BLACK, gridColumn: '2 / 3', gridRow: '2 / 3', borderTop: `1px solid rgba(255,255,255,0.06)`, borderLeft: `1px solid rgba(255,255,255,0.06)` }}>
            {[
              { num: '14', label: 'Years' },
              { num: '500+', label: 'Members' },
              { num: 'ASE', label: 'Certified Coaches' },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>{stat.num}</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30" style={{ fontFamily: 'var(--font-display)' }}>· {stat.label}</span>
              </div>
            ))}
          </div>

          {/* Block 5: Action photo, col 3, row 2 */}
          <div className="relative overflow-hidden" style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}>
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
              alt="Iron Edge training"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col">
          <div className="relative h-[50vh]">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Iron Edge Fitness"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-lg font-black uppercase" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Portland's Only Results-Guaranteed Gym</p>
            </div>
          </div>
          <div className="p-8" style={{ backgroundColor: GUNMETAL }}>
            <h1 className="text-6xl font-black text-white leading-none uppercase mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>BUILT<br />DIFFER<span style={{ color: ORANGE }}>ENT.</span></h1>
            <p className="text-white/45 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>Elite strength and conditioning. No gimmicks, no shortcuts.</p>
          </div>
          <div className="p-8 flex flex-col items-start" style={{ backgroundColor: ORANGE }}>
            <div className="text-7xl font-black leading-none mb-2" style={{ color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 900 }}>7</div>
            <div className="text-lg font-black uppercase mb-4" style={{ color: BLACK, fontFamily: 'var(--font-display)' }}>Day Free Trial</div>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs px-6 py-3 border-2 border-black text-black" style={{ fontFamily: 'var(--font-display)' }}>
              Claim Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-8 flex flex-col gap-5" style={{ backgroundColor: BLACK }}>
            {[{ num: '14', label: 'Years' }, { num: '500+', label: 'Members' }, { num: 'ASE', label: 'Certified Coaches' }].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>{stat.num}</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30" style={{ fontFamily: 'var(--font-display)' }}>· {stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTENSITY BARS — signature element */}
      <IntensityBars />

      {/* MEMBERSHIP TIERS */}
      <section style={{ backgroundColor: BLACK }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Membership</div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              PICK YOUR<br />PLAN
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {MEMBERSHIP.map(({ name, price, per, features, highlight }, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{ backgroundColor: highlight ? GUNMETAL : BLACK }}
              >
                {highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: ORANGE }} />
                )}
                {highlight && (
                  <div className="text-[9px] font-black uppercase tracking-widest mb-4" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Most Popular</div>
                )}
                <div className="mb-6">
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>{price}</span>
                    <span className="text-sm text-white/30" style={{ fontFamily: 'var(--font-body)' }}>{per}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-white/50" style={{ fontFamily: 'var(--font-body)' }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />{f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="block text-center text-xs font-black uppercase tracking-widest py-3.5"
                  style={{
                    backgroundColor: highlight ? ORANGE : 'transparent',
                    color: highlight ? BLACK : 'rgba(255,255,255,0.4)',
                    border: highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER PROFILES */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>The Team</div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              YOUR<br />COACHES
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TRAINERS.map((t, i) => (
              <div key={i} className="relative overflow-hidden group" style={{ backgroundColor: BLACK }}>
                <div className="relative h-64 overflow-hidden">
                  <Image src={t.img} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)' }} />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-white uppercase mb-3" style={{ fontFamily: 'var(--font-display)' }}>{t.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {t.certs.map((c, j) => (
                      <span key={j} className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1" style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: ORANGE, fontFamily: 'var(--font-display)' }}>{c}</span>
                    ))}
                  </div>
                  <p className="text-white/45 text-sm italic leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{t.specialty}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Member Results</div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              REAL<br />PEOPLE.
            </h2>
            <p className="text-white/30 text-sm mt-3" style={{ fontFamily: 'var(--font-body)' }}>4.9 Stars · 300+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-7 relative" style={{ backgroundColor: BLACK }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: ORANGE }} />
                <div className="text-4xl font-black mb-3" style={{ color: ORANGE, fontFamily: 'var(--font-display)', fontWeight: 900 }}>{r.metric}</div>
                <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: ORANGE }} />)}</div>
                <p className="text-white/45 text-sm italic leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)' }}>"{r.text}"</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/25" style={{ fontFamily: 'var(--font-display)' }}>— {r.author} · {r.type}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href={`${BASE}/reviews`} className="text-xs font-black uppercase tracking-widest" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>
              Read More Stories <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BLACK }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>FAQ</div>
            <h2 className="text-5xl font-black text-white leading-none uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              GOT<br />QUESTIONS
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-black text-sm leading-snug text-white" style={{ fontFamily: 'var(--font-display)' }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: ORANGE }} />
                </summary>
                <p className="mt-4 text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Location</div>
            <div className="flex items-start gap-2 text-white/55 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
              <span>4201 NE Alberta St<br />Portland, OR 97218</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Hours</div>
            <div className="text-white/55 text-sm space-y-0.5" style={{ fontFamily: 'var(--font-body)' }}>
              <div>Mon – Fri: 5:00am – 11:00pm</div>
              <div>Saturday: 7:00am – 8:00pm</div>
              <div>Sunday: 8:00am – 6:00pm</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:5035550841" className="inline-flex items-center gap-2 text-white font-black text-base" style={{ fontFamily: 'var(--font-display)' }}>
              <Phone className="w-4 h-4" style={{ color: ORANGE }} /> (503) 555-0841
            </a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-xs px-7 py-3" style={{ backgroundColor: ORANGE, fontFamily: 'var(--font-display)' }}>
              Claim Free Trial <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: ORANGE }} className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-black uppercase leading-none mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>
          7 DAYS FREE.<br />NO CREDIT CARD.
        </h2>
        <p className="text-black/60 mb-10 text-sm font-black uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
          Try any class, meet your coach, experience the facility. Then decide.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs px-10 py-4 bg-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Claim Your Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:5035550841" className="inline-flex items-center gap-2 border-2 border-black text-black font-black uppercase tracking-widest text-xs px-10 py-4" style={{ fontFamily: 'var(--font-display)' }}>
            <Clock className="w-4 h-4" /> Call to Talk to a Coach
          </a>
        </div>
      </section>
    </>
  );
}
