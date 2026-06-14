import Image from 'next/image';
import Link from 'next/link';
import { Sun, ArrowRight, Check, Star, Heart, Leaf, Wind, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const WARM = '#FDF8F3';

const CLASSES = [
  { icon: Sun, title: 'Hatha Yoga', level: 'All Levels', times: 'Mon / Wed / Fri · 7am & 6pm', desc: 'Foundational postures linking breath, strength, and stillness. The perfect introduction to yoga practice.' },
  { icon: Wind, title: 'Vinyasa Flow', level: 'Beginner–Intermediate', times: 'Tue / Thu · 6am, 12pm & 7pm', desc: 'Dynamic sequences where breath leads movement. Builds heat, strength, and fluidity over time.' },
  { icon: Leaf, title: 'Yin & Restorative', level: 'All Levels', times: 'Wed / Sun · 7:30pm & 10am', desc: 'Long-held passive poses that target connective tissue. The nervous system reset your body has been asking for.' },
  { icon: Heart, title: 'Meditation & Sound', level: 'All Levels', times: 'Sat · 8am', desc: 'Guided meditation, pranayama breathwork, and Himalayan singing bowl sound healing.' },
];

const PRICING = [
  { name: 'Drop-In Class', price: '$22', per: '/class', desc: 'Try any single class. Mats, props, and water provided.', features: ['Access to any single class', 'All props included', 'No commitment'] },
  { name: 'Intro Month', price: '$49', per: '/first month', desc: 'Unlimited classes for your first 30 days. New students only.', features: ['Unlimited classes × 30 days', 'Free mat rental', 'New student orientation', 'One private session discount'], highlight: true },
  { name: 'Monthly Unlimited', price: '$119', per: '/month', desc: 'Unlimited access to all classes and workshops.', features: ['Unlimited all classes', 'Workshop discounts (20%)', 'Guest pass × 1/month', 'Online class library access'] },
];

const SCHEDULE = [
  { day: 'Monday', classes: ['7:00am Hatha All Levels', '12:00pm Vinyasa Slow', '6:00pm Hatha Mixed'] },
  { day: 'Tuesday', classes: ['6:00am Vinyasa Power', '12:00pm Lunch Flow', '7:00pm Beginner Hatha'] },
  { day: 'Wednesday', classes: ['7:00am Hatha All Levels', '6:00pm Vinyasa Mixed', '7:30pm Yin Deep Stretch'] },
  { day: 'Thursday', classes: ['6:00am Power Vinyasa', '12:00pm Gentle Hatha', '7:00pm Yin & Restore'] },
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

export default function SolsticeYogaHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,32,24,0.95) 0%, rgba(44,32,24,0.45) 55%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-px" style={{ backgroundColor: SAGE }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/45">Denver, CO · All Levels Welcome · Est. 2016</span></div>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-5">Find<br />your<br />flow.</h1>
          <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">An all-levels yoga and wellness studio in Denver. Hatha, vinyasa, yin, meditation, and sound healing — in one warm, welcoming space. No experience required.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full" style={{ backgroundColor: SAGE }}>Try Intro Month — $49 <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full">View Schedule</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: SAGE }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['30+ Classes/Week', '10 Expert Instructors', 'Drop-In Always Welcome', 'Intro Month · $49'].map((s, i) => (
            <div key={i} className="text-white font-bold text-sm">{s}</div>
          ))}
        </div>
      </section>

      {/* CLASSES */}
      <section style={{ backgroundColor: WARM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Classes & Offerings</div>
            <h2 className="text-4xl font-serif italic mb-3" style={{ color: DARK }}>What We Offer</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">30+ classes per week across styles and levels. Every class taught by a 200- or 300-hour certified instructor.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {CLASSES.map(({ icon: Icon, title, level, times, desc }, i) => (
              <div key={i} className="bg-white p-7 flex gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: WARM }}>
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: DARK }}>{title}</h3>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: SAGE }}>{level}</div>
                  <div className="text-[10px] text-gray-400 mb-3">{times}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: DARK }}>Full Schedule & Pricing <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>This Week</div>
            <h2 className="text-4xl font-serif italic" style={{ color: DARK }}>Class Schedule Preview</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCHEDULE.map(({ day, classes }, i) => (
              <div key={i} className="border-t-4 pt-5" style={{ borderTopColor: i % 2 === 0 ? SAGE : ROSE }}>
                <div className="font-bold text-sm mb-3" style={{ color: DARK }}>{day}</div>
                <ul className="space-y-2">
                  {classes.map((c, j) => <li key={j} className="text-xs text-gray-400 leading-relaxed border-b border-gray-50 pb-2">{c}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: SAGE }}>View Full Weekly Schedule <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section style={{ backgroundColor: WARM }} className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Pricing</div>
            <h2 className="text-4xl font-serif italic" style={{ color: DARK }}>Find Your Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map(({ name, price, per, desc, features, highlight }, i) => (
              <div key={i} className={`p-8 text-center ${highlight ? 'border-2' : 'bg-white'}`} style={{ borderColor: highlight ? SAGE : undefined, backgroundColor: highlight ? 'white' : undefined }}>
                {highlight && <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Best for New Students</div>}
                <div className="font-bold text-base mb-3" style={{ color: DARK }}>{name}</div>
                <div className="text-4xl font-serif font-bold mb-1" style={{ color: SAGE }}>{price}</div>
                <div className="text-xs text-gray-400 mb-5">{per}</div>
                <p className="text-xs text-gray-400 mb-6">{desc}</p>
                <ul className="space-y-2 text-left mb-8">
                  {features.map((f, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3 h-3 shrink-0" style={{ color: SAGE }} />{f}</li>)}
                </ul>
                <Link href={`${BASE}/contact`} className={`block text-center text-[10px] font-bold uppercase tracking-widest py-3 rounded-full ${highlight ? 'text-white' : 'border text-gray-500'}`} style={{ backgroundColor: highlight ? SAGE : undefined, borderColor: highlight ? undefined : '#ccc' }}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO SPLIT */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: DARK }}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: ROSE }}>Our Studio</div>
            <h2 className="text-4xl font-serif italic text-white mb-6">A space to breathe,<br />move, and belong.</h2>
            <p className="text-white/45 leading-relaxed mb-8">Solstice was built on the belief that yoga is for every body — every age, shape, fitness level, and background. Our 3,200 sq ft studio is warm, inclusive, and judgment-free.</p>
            <div className="space-y-3 mb-8">
              {["Two studios — heated & non-heated", "Props and mats provided free", "Beginner series starts every month", "Online class library for members", "Workshops and retreats throughout the year", "200-hour teacher training offered annually"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/45"><Check className="w-4 h-4 shrink-0" style={{ color: SAGE }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: ROSE, borderColor: ROSE }}>Meet Our Teachers <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
          <Image src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: WARM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Community</div>
            <h2 className="text-4xl font-serif italic mb-2" style={{ color: DARK }}>What Students Say</h2>
            <p className="text-gray-400 text-sm">5.0 Stars · 210+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <div className="flex justify-center mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ROSE }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: SAGE }}>— {r.author} <span className="text-gray-400 font-normal">· {r.class}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: SAGE }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>FAQ</div>
            <h2 className="text-4xl font-serif italic" style={{ color: DARK }}>New to Yoga?</h2>
          </div>
          <div className="divide-y divide-amber-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: DARK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: SAGE }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Studio Location</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
              <span>1847 W 38th Ave<br />Denver, CO 80211<br /><span className="text-white/30 text-xs">Near Sunnyside neighborhood</span></span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>Studio Hours</div>
            <div className="text-white/65 text-sm space-y-1">
              <div>Mon – Fri: 5:30am – 9:30pm</div>
              <div>Saturday: 7:00am – 7:00pm</div>
              <div>Sunday: 8:00am – 6:00pm</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: SAGE }}>Contact Us</div>
            <a href="tel:7205550823" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: SAGE }} /> (720) 555-0823</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-7 py-3 rounded-full" style={{ backgroundColor: SAGE }}>Reserve Your Mat <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center border-t border-white/8">
        <Sun className="w-8 h-8 mx-auto mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
        <h2 className="text-3xl font-serif italic text-white mb-4">First month unlimited — just $49.</h2>
        <p className="text-white/45 mb-8 max-w-md mx-auto">New students only. Try any class, any time, any instructor. No commitment. Experience every style before choosing a membership.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: SAGE }}>Claim Intro Offer <ArrowRight className="w-4 h-4" /></Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/20 text-white/60 font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full"><Clock className="w-4 h-4" /> View Class Schedule</Link>
        </div>
      </section>
    </>
  );
}
