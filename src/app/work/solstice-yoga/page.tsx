import Image from 'next/image';
import Link from 'next/link';
import { Sun, ArrowRight, Check, Star, Heart, Leaf, Wind, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const CREAM = '#FDF8F3';
const MIST = '#E8F0E9';

const SCHEDULE = {
  Mon: [
    { time: '7:00 AM', name: 'Hatha Flow', instructor: 'Maya', level: 'All Levels', duration: '60 min' },
    { time: '6:00 PM', name: 'Vinyasa', instructor: 'Chris', level: 'Intermediate', duration: '75 min' },
  ],
  Tue: [
    { time: '9:00 AM', name: 'Yin & Restore', instructor: 'Sarah', level: 'All Levels', duration: '90 min' },
    { time: '7:00 PM', name: 'Meditation', instructor: 'David', level: 'Beginner', duration: '45 min' },
  ],
  Wed: [
    { time: '7:00 AM', name: 'Hatha Flow', instructor: 'Maya', level: 'All Levels', duration: '60 min' },
    { time: '12:00 PM', name: 'Vinyasa', instructor: 'Chris', level: 'All Levels', duration: '60 min' },
    { time: '6:00 PM', name: 'Hatha Flow', instructor: 'Maya', level: 'All Levels', duration: '60 min' },
  ],
  Thu: [
    { time: '9:00 AM', name: 'Yin & Restore', instructor: 'Sarah', level: 'All Levels', duration: '90 min' },
    { time: '6:30 PM', name: 'Vinyasa', instructor: 'Chris', level: 'Advanced', duration: '75 min' },
  ],
  Fri: [
    { time: '7:00 AM', name: 'Hatha Flow', instructor: 'Maya', level: 'All Levels', duration: '60 min' },
    { time: '5:30 PM', name: 'Sound & Meditation', instructor: 'David', level: 'All Levels', duration: '60 min' },
  ],
};

const CLASSES = [
  { icon: Sun, title: 'Hatha Yoga', level: 'All Levels', desc: 'Foundational postures linking breath, strength, and stillness. The perfect introduction to yoga practice.' },
  { icon: Wind, title: 'Vinyasa Flow', level: 'Beginner–Intermediate', desc: 'Dynamic sequences where breath leads movement. Builds heat, strength, and fluidity over time.' },
  { icon: Leaf, title: 'Yin & Restorative', level: 'All Levels', desc: 'Long-held passive poses that target connective tissue. The nervous system reset your body has been asking for.' },
  { icon: Heart, title: 'Meditation & Sound', level: 'All Levels', desc: 'Guided meditation, pranayama breathwork, and Himalayan singing bowl sound healing.' },
];

const PRICING = [
  { name: 'Drop-In Class', price: '$22', per: '/class', desc: 'Try any single class. Mats, props, and water provided.', features: ['Access to any single class', 'All props included', 'No commitment'] },
  { name: 'Intro Month', price: '$49', per: '/first month', desc: 'Unlimited classes for your first 30 days. New students only.', features: ['Unlimited classes × 30 days', 'Free mat rental', 'New student orientation', 'One private session discount'], highlight: true },
  { name: 'Monthly Unlimited', price: '$119', per: '/month', desc: 'Unlimited access to all classes and workshops.', features: ['Unlimited all classes', 'Workshop discounts (20%)', 'Guest pass × 1/month', 'Online class library access'] },
];

const INSTRUCTORS = [
  { name: 'Maya Chen', specialty: 'Hatha & Vinyasa', years: '8 years teaching', bio: '300-hour certified. Trained in Mysore, India. Maya brings warmth and precision to every class.' },
  { name: 'Chris Hartwell', specialty: 'Vinyasa & Power Flow', years: '6 years teaching', bio: 'Former athlete turned yogi. Chris builds strength while keeping the practice accessible to all.' },
  { name: 'Sarah Okonkwo', specialty: 'Yin & Restorative', years: '10 years teaching', bio: 'Somatic therapist and yoga teacher. Sarah specializes in nervous system regulation through movement.' },
];

const REVIEWS = [
  { text: "Solstice is my sanctuary. The teachers are exceptional — knowledgeable, warm, and attuned to every student. I leave feeling genuinely transformed.", author: "Sarah L.", class: "Hatha Yoga" },
  { text: "I came as a complete beginner with a stiff back. Six months later I feel stronger and more at peace than I have in years.", author: "Daniel M.", class: "Fundamentals" },
  { text: "The community here is what makes it special. Everyone radiates kindness. It feels like home.", author: "Priya R.", class: "Vinyasa Flow" },
];

const FAQS = [
  { q: "I have never done yoga before. Is this studio right for me?", a: "Absolutely. We run a Foundations for New Yogis series every month specifically for people who have never set foot on a mat. Our regular classes also offer beginner modifications for every posture. Our teachers notice new faces and check in with them personally." },
  { q: "What should I bring to class?", a: "Just comfortable clothes you can move in. We provide mats, blocks, straps, blankets, and bolsters at no charge. Water bottles are welcome — we have a filtered water station. Yoga socks are optional but popular for heated classes." },
  { q: "Are your studios heated?", a: "We have two studios. Studio A is heated to 80–85°F for Power Vinyasa and select Hatha classes. Studio B is unheated for Yin, Restorative, Meditation, and Foundations classes. The class listing will always specify which studio is used." },
  { q: "Do I need to reserve a spot in advance?", a: "Yes. All classes require advance registration via our app or website — this ensures appropriate class sizes and teacher preparation. Drop-ins are accepted when space is available, but popular evening classes sell out by Wednesday. We recommend booking 3–4 days ahead." },
  { q: "What is the cancellation policy?", a: "Classes can be cancelled up to 2 hours before the start time for a full credit. Cancellations within 2 hours may result in a $10 late cancel fee for unlimited members. Drop-in purchases are non-refundable but transferable." },
  { q: "Do you offer online classes?", a: "Yes. Monthly Unlimited members get access to our full on-demand library of 200+ classes — Hatha, Vinyasa, Yin, and Meditation. New classes are added weekly. Live-streamed classes are available for select morning slots." },
  { q: "Do you offer teacher training?", a: "Yes. We run a 200-hour Yoga Teacher Training (YTT) program annually, typically starting in January. We also offer a 300-hour advanced training for certified teachers. Training is accredited by Yoga Alliance. Applications open in September." },
];

const LEVEL_COLORS: Record<string, string> = {
  'All Levels': SAGE,
  'Beginner': '#9BB89A',
  'Intermediate': ROSE,
  'Advanced': DARK,
};

export default function SolsticeYogaHome() {
  return (
    <>
      {/* HERO — centered spacious split */}
      <section
        className="min-h-screen flex flex-col md:grid md:items-center"
        style={{ backgroundColor: CREAM, gridTemplateColumns: '45% 55%' }}
      >
        {/* Left: text panel */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 md:py-0 order-2 md:order-1">
          <div className="text-xs font-light tracking-[0.35em] mb-8" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
            Denver, CO · Est. 2016
          </div>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold italic leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-display)', color: DARK }}
          >
            Find stillness.<br />Find strength.
          </h1>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
          <p className="text-lg font-light leading-relaxed mb-10 max-w-xs" style={{ color: DARK + 'CC', fontFamily: 'var(--font-body)' }}>
            30+ weekly classes. 10 expert instructors. All levels welcome.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
            >
              View Schedule
            </Link>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-amber-900/5"
              style={{ borderColor: DARK, color: DARK, fontFamily: 'var(--font-body)' }}
            >
              Start Free Week
            </Link>
          </div>
        </div>

        {/* Right: photo with rounded left corner */}
        <div className="relative order-1 md:order-2" style={{ minHeight: '45vh', height: '100%' }}>
          <div className="absolute inset-0 md:rounded-l-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
              alt="Yoga studio at Solstice Yoga Denver"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(253,248,243,0.1) 0%, transparent 30%)' }} />
          </div>
        </div>
      </section>

      {/* SIGNATURE ELEMENT — Weekly Schedule Grid */}
      <section style={{ backgroundColor: MIST }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
              Classes
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold italic mb-3"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              This Week's Schedule
            </h2>
            <p className="text-sm font-light max-w-sm mx-auto" style={{ color: DARK + '99', fontFamily: 'var(--font-body)' }}>
              Drop in anytime. All props provided. Reserve your spot online.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {(Object.entries(SCHEDULE) as [string, typeof SCHEDULE['Mon']][]).map(([day, slots]) => (
              <div key={day}>
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.3em] pb-3 mb-3 border-b"
                  style={{ color: SAGE, borderColor: SAGE + '40', fontFamily: 'var(--font-body)' }}
                >
                  {day}
                </div>
                <div className="flex flex-col gap-3">
                  {slots.map((slot, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: i === 0 ? SAGE + '18' : 'white' }}
                    >
                      <div
                        className="text-base font-bold mb-0.5"
                        style={{ fontFamily: 'var(--font-display)', color: DARK }}
                      >
                        {slot.time}
                      </div>
                      <div className="text-xs font-semibold mb-1" style={{ color: DARK, fontFamily: 'var(--font-body)' }}>
                        {slot.name}
                      </div>
                      <div className="text-[10px] font-light mb-1.5" style={{ color: DARK + '80', fontFamily: 'var(--font-body)' }}>
                        w/ {slot.instructor} · {slot.duration}
                      </div>
                      <span
                        className="inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: LEVEL_COLORS[slot.level] || SAGE, fontFamily: 'var(--font-body)' }}
                      >
                        {slot.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold border-b pb-0.5 transition-opacity hover:opacity-70"
              style={{ color: SAGE, borderColor: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Full Schedule <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLASS TYPES */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
              What We Offer
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold italic"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              Four paths to practice.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {CLASSES.map(({ icon: Icon, title, level, desc }, i) => (
              <div
                key={i}
                className="flex gap-6 p-8 rounded-2xl"
                style={{ backgroundColor: 'white' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: MIST }}
                >
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: DARK }}
                  >
                    {title}
                  </h3>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                    style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                  >
                    {level}
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: DARK + '99', fontFamily: 'var(--font-body)' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
              Pricing
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold italic"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              Find your plan.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map(({ name, price, per, desc, features, highlight }, i) => (
              <div
                key={i}
                className="p-8 text-center rounded-2xl relative"
                style={{
                  backgroundColor: highlight ? DARK : CREAM,
                  outline: highlight ? `2px solid ${SAGE}` : 'none',
                }}
              >
                {highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full text-white"
                    style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
                  >
                    Best for New Students
                  </div>
                )}
                <div
                  className="font-bold text-sm mb-3"
                  style={{ color: highlight ? 'white' : DARK, fontFamily: 'var(--font-display)' }}
                >
                  {name}
                </div>
                <div
                  className="text-5xl font-bold italic mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: SAGE }}
                >
                  {price}
                </div>
                <div
                  className="text-xs font-light mb-5"
                  style={{ color: highlight ? 'rgba(255,255,255,0.6)' : DARK + '80', fontFamily: 'var(--font-body)' }}
                >
                  {per}
                </div>
                <p
                  className="text-xs font-light mb-6 leading-relaxed"
                  style={{ color: highlight ? 'rgba(255,255,255,0.65)' : DARK + '80', fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
                <ul className="space-y-2 text-left mb-8">
                  {features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-xs font-light"
                      style={{ color: highlight ? 'rgba(255,255,255,0.8)' : DARK + '99', fontFamily: 'var(--font-body)' }}
                    >
                      <Check className="w-3 h-3 shrink-0" style={{ color: SAGE }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="block text-center text-xs font-semibold uppercase tracking-widest py-3 rounded-full transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: highlight ? SAGE : 'transparent',
                    color: highlight ? 'white' : DARK,
                    border: highlight ? 'none' : `1px solid ${DARK}40`,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section style={{ backgroundColor: MIST }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
              Your Teachers
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold italic"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              Expert. Warm. Certified.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {INSTRUCTORS.map((inst, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold italic text-white"
                  style={{ backgroundColor: i % 2 === 0 ? SAGE : ROSE, fontFamily: 'var(--font-display)' }}
                >
                  {inst.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3
                  className="font-bold text-base mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: DARK }}
                >
                  {inst.name}
                </h3>
                <div
                  className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                  style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                >
                  {inst.specialty}
                </div>
                <div
                  className="text-[10px] font-light mb-4"
                  style={{ color: DARK + '60', fontFamily: 'var(--font-body)' }}
                >
                  {inst.years}
                </div>
                <p className="text-xs font-light leading-relaxed" style={{ color: DARK + '80', fontFamily: 'var(--font-body)' }}>
                  {inst.bio}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/about`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold border-b pb-0.5"
              style={{ color: SAGE, borderColor: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Meet All Instructors <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: DARK }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: ROSE, fontFamily: 'var(--font-body)' }}>
              Community
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold italic text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What students say.
            </h2>
            <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>5.0 Stars · 210+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ROSE }} />
                  ))}
                </div>
                <p
                  className="text-white/80 italic text-base leading-relaxed mb-6 font-light"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  "{r.text}"
                </p>
                <div
                  className="text-xs font-semibold"
                  style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                >
                  — {r.author} <span className="text-white/35 font-light">· {r.class}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/reviews`}
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
              FAQ
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold italic"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              New to yoga?
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: SAGE + '30' }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4 list-none">
                  <span
                    className="font-semibold text-sm leading-snug"
                    style={{ color: DARK, fontFamily: 'var(--font-body)' }}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: SAGE }}
                  />
                </summary>
                <p
                  className="mt-4 text-sm font-light leading-relaxed"
                  style={{ color: DARK + '80', fontFamily: 'var(--font-body)' }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Studio Location
            </div>
            <div className="flex items-start gap-2 text-white/65 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
              <span>1847 W 38th Ave<br />Denver, CO 80211<br /><span className="text-white/30 text-xs">Near Sunnyside neighborhood</span></span>
            </div>
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Studio Hours
            </div>
            <div className="text-white/65 text-sm space-y-1" style={{ fontFamily: 'var(--font-body)' }}>
              <div>Mon – Fri: 5:30am – 9:30pm</div>
              <div>Saturday: 7:00am – 7:00pm</div>
              <div>Sunday: 8:00am – 6:00pm</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-1"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </div>
            <a
              href="tel:7205550823"
              className="inline-flex items-center gap-2 text-white font-bold text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Phone className="w-4 h-4" style={{ color: SAGE }} /> (720) 555-0823
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest px-7 py-3 rounded-full"
              style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Reserve Your Mat <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: SAGE }} className="py-20 px-6 text-center">
        <Sun className="w-8 h-8 mx-auto mb-6 text-white/60" strokeWidth={1.5} />
        <h2
          className="text-4xl md:text-5xl font-bold italic text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          First month unlimited — just $49.
        </h2>
        <p
          className="text-white/75 font-light mb-10 max-w-md mx-auto text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          New students only. Try any class, any time, any instructor. No commitment. Experience every style before choosing a membership.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 bg-white text-xs font-semibold uppercase tracking-widest px-10 py-4 rounded-full transition-opacity hover:opacity-90"
            style={{ color: DARK, fontFamily: 'var(--font-body)' }}
          >
            Claim Intro Offer <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`${BASE}/services`}
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white text-xs font-semibold uppercase tracking-widest px-10 py-4 rounded-full"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Clock className="w-4 h-4" /> View Class Schedule
          </Link>
        </div>
      </section>
    </>
  );
}
