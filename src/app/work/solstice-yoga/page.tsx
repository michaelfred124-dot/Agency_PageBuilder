import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChevronDown, Phone, MapPin, Check } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const CREAM = '#FBF8F3';
const DARK = '#2D2A24';
const SAGE = '#8FAF78';
const TERRA = '#D4855A';
const WHITE = '#FFFFFF';
const MUTED = 'rgba(45,42,36,0.5)';

const CLASSES = [
  { name: 'Hatha Flow', level: 'All Levels', duration: '75 min', desc: 'A grounded, breath-led practice. Slower pace, longer holds, deep awareness. The ideal starting point and a lifelong practice.' },
  { name: 'Power Vinyasa', level: 'Intermediate – Advanced', duration: '60 min', desc: 'Strength meets fluidity. Dynamic sequences, strong transitions, a physical challenge balanced with mindful intention.' },
  { name: 'Yin & Restorative', level: 'All Levels', duration: '90 min', desc: 'Long-held poses, props, silence. A practice for the nervous system — release, soften, and deeply restore.' },
  { name: 'Meditation & Breathwork', level: 'All Levels', duration: '45 min', desc: 'Pranayama, guided meditation, and stillness. A practice that asks nothing from the body and everything from the mind.' },
];

const TEACHERS = [
  { name: 'Clara Whitfield', role: 'Founder · Hatha & Vinyasa', img: 'photo-1508214751196-bcfd4ca60f91', quote: "The practice does not ask you to be better. It asks you to be present." },
  { name: 'James Osei', role: 'Power Vinyasa · Breathwork', img: 'photo-1472099645785-5658abf4ff4e', quote: "Strength is not force. It is consistency, surrender, and breath." },
  { name: 'Mei Lin Park', role: 'Yin & Restorative · Meditation', img: 'photo-1573496359142-b8d87734a5a2', quote: "We do not need more energy. We need to stop depleting the energy we have." },
];

const MEMBERSHIPS = [
  { name: 'Drop In', price: '$22', note: 'per class', features: ['Any single class', 'All experience levels', 'Mat available to rent'] },
  { name: 'Monthly Unlimited', price: '$89', note: 'per month', featured: true, features: ['Unlimited classes', 'Priority booking', 'Guest pass monthly', 'Free mat storage'] },
  { name: 'Annual', price: '$69', note: '/mo · billed annually', features: ['Unlimited classes', 'All monthly benefits', '2 guest passes/mo', 'Retreat discounts 20%'] },
];

const FAQS = [
  { q: "I have never done yoga before. Where do I start?", a: "Start with Hatha Flow or Yin & Restorative. Both are designed for all levels, and our teachers actively offer modifications. Your first class is free — come as you are." },
  { q: "What should I bring to my first class?", a: "Just yourself. We provide mats (rental: $2), blocks, straps, and blankets. Wear comfortable clothing you can move in. Arrive 10 minutes early to meet your teacher." },
  { q: "Do you offer private sessions or corporate yoga?", a: "Yes to both. Private sessions are scheduled directly with teachers — rates start at $85/hour. Corporate and group programs are available for teams of any size. Contact us to discuss." },
  { q: "Is there parking at the studio?", a: "Yes. Free parking is available in the lot behind the studio on 8th Ave South. Street parking is also available. We are a 5-minute walk from the WeGo bus stop on 8th." },
  { q: "Can I freeze or pause my membership?", a: "Yes. You can pause for up to 3 months per year with no penalty. Manage pauses through your account or email us and we will handle it within one business day." },
  { q: "Do you offer classes for pregnant students?", a: "Yes. We offer prenatal yoga on Thursday mornings. Students in their second and third trimester are encouraged to speak with their teacher before other classes so we can offer safe modifications." },
  { q: "What is your cancellation policy for booked classes?", a: "Cancel up to 4 hours before class at no charge. Late cancellations or no-shows for members use one credit. Drop-in fees are non-refundable but can be credited toward a future visit if you contact us." },
];

export default function SolsticeYoga() {
  return (
    <>
      {/* NAV — cream, centered wordmark */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: CREAM, borderColor: 'rgba(45,42,36,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          <div className="hidden md:flex items-center gap-7">
            {['Classes', 'Schedule'].map(l => (
              <Link key={l} href={`${BASE}/services`} className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>{l}</Link>
            ))}
          </div>
          <Link href={BASE} className="text-center font-serif italic text-xl" style={{ color: DARK }}>Solstice</Link>
          <div className="flex items-center justify-end gap-4">
            <Link href={`${BASE}/about`} className="hidden md:block text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>About</Link>
            <Link href={`${BASE}/contact`} className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white" style={{ backgroundColor: SAGE }}>Book a Class</Link>
          </div>
        </div>
      </nav>

      {/* HERO — full viewport image, minimal centered text */}
      <section className="relative" style={{ height: '95vh', minHeight: 600 }}>
        <Image
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop"
          alt="Yoga practice at golden hour"
          fill className="object-cover object-center" referrerPolicy="no-referrer" priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(45,42,36,0.15) 0%, rgba(45,42,36,0.55) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.5em] mb-6 text-white/60">Nashville Yoga Studio · Est. 2016</p>
          <h1 className="font-serif italic text-white leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            Find your stillness.
          </h1>
          <p className="text-white/65 max-w-md mb-10 text-lg">24 class styles, 8 expert teachers, one sanctuary in the heart of Nashville.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 text-white" style={{ backgroundColor: SAGE }}>
              Book Free First Class <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 border border-white/30 text-white">
              Explore Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES — 3-col on cream */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl" style={{ color: DARK }}>Why Solstice?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: 'All Experience Levels', desc: 'Every class is taught with modifications for beginners and depth for advanced practitioners. You belong here on day one.' },
              { n: 'Real Teachers', desc: 'Our teachers average 9 years of practice and study. They know your name, your body, and how to help you grow.' },
              { n: 'Open 7 Days', desc: 'Early mornings through evening classes. Drop in or build a routine — the studio is here whenever your day allows.' },
            ].map(({ n, desc }, i) => (
              <div key={i}>
                <div className="w-8 h-px mb-6" style={{ backgroundColor: SAGE }} />
                <h3 className="font-bold text-base mb-3" style={{ color: DARK }}>{n}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES — full-width horizontal rows */}
      <section className="py-24 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: TERRA }}>Classes</p>
            <h2 className="font-serif italic text-4xl md:text-5xl" style={{ color: DARK }}>Find your practice.</h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(45,42,36,0.08)' }}>
            {CLASSES.map(({ name, level, duration, desc }, i) => (
              <div key={i} className="py-8 grid md:grid-cols-[1fr_1fr_auto] gap-6 items-center group">
                <div>
                  <div className="font-bold text-lg mb-1" style={{ color: DARK }}>{name}</div>
                  <div className="text-xs font-bold uppercase tracking-widest" style={{ color: SAGE }}>{level} · {duration}</div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: DARK }}>
                  Book Class <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS — large editorial portraits */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: TERRA }}>Teachers</p>
            <h2 className="font-serif italic text-4xl md:text-5xl" style={{ color: DARK }}>Meet your guides.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEACHERS.map(({ name, role, img, quote }, i) => (
              <div key={i}>
                <div className="relative aspect-[3/4] mb-5 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${img}?q=80&w=800&auto=format&fit=crop`}
                    alt={name} fill className="object-cover object-top" referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-base mb-0.5" style={{ color: DARK }}>{name}</h3>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: SAGE }}>{role}</div>
                <p className="text-sm italic leading-relaxed" style={{ color: MUTED }}>"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-24 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: TERRA }}>Membership</p>
            <h2 className="font-serif italic text-4xl" style={{ color: DARK }}>Your practice, your pace.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {MEMBERSHIPS.map(({ name, price, note, features, featured }, i) => (
              <div key={i} className="rounded-2xl p-8" style={{ backgroundColor: featured ? DARK : CREAM, boxShadow: '0 6px 28px rgba(0,0,0,0.10)' }}>
                <h3 className="font-bold text-sm mb-5 uppercase tracking-widest" style={{ color: featured ? 'rgba(255,255,255,0.5)' : MUTED }}>{name}</h3>
                <div className="font-serif italic text-5xl mb-1" style={{ color: featured ? WHITE : DARK }}>{price}</div>
                <div className="text-xs mb-6" style={{ color: featured ? 'rgba(255,255,255,0.4)' : MUTED }}>{note}</div>
                <ul className="space-y-3 mb-8">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: featured ? 'rgba(255,255,255,0.7)' : DARK }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: SAGE }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`${BASE}/contact`} className="block text-center font-bold text-xs uppercase tracking-widest py-3" style={{ backgroundColor: featured ? SAGE : 'rgba(45,42,36,0.08)', color: featured ? WHITE : DARK }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE — full-bleed dark */}
      <section className="py-28 px-6" style={{ backgroundColor: DARK }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px mx-auto mb-10" style={{ backgroundColor: SAGE }} />
          <blockquote className="font-serif italic text-3xl md:text-4xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            "The practice is not about touching your toes. It is about what you learn on the way down."
          </blockquote>
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: SAGE }}>— Clara Whitfield, Founder</div>
          <div className="w-12 h-px mx-auto mt-10" style={{ backgroundColor: SAGE }} />
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TERRA }}>Reviews</p>
            <h2 className="font-serif italic text-3xl" style={{ color: DARK }}>What the community says.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "I walked in as a complete beginner. Within three weeks I understood why people dedicate years to this. The teachers here genuinely care.", a: 'Olivia B.', s: 'Hatha Flow' },
              { t: "The Yin class on Sunday evenings has become non-negotiable for me. It is the only hour in my week where I am completely offline and present.", a: 'David L.', s: 'Yin & Restorative' },
              { t: "Best investment in my health. The unlimited monthly membership pays for itself in one week if you actually use it. I go 4-5 times a week.", a: 'Naomi K.', s: 'Monthly Unlimited' },
            ].map((r, i) => {
              const PASTELS = [
                { bg: '#FCE7F3', border: '#F9A8D4', star: '#EC4899' },
                { bg: '#EDE9FE', border: '#C4B5FD', star: '#7C3AED' },
                { bg: '#FEF3C7', border: '#FCD34D', star: '#D97706' },
              ];
              const pastel = PASTELS[i % 3];
              return (
              <div key={i} className="p-7 rounded-2xl" style={{ backgroundColor: pastel.bg, border: `1.5px solid ${pastel.border}`, boxShadow: `0 8px 32px ${pastel.border}55` }}>
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: pastel.star }} />)}</div>
                <p className="text-sm italic leading-relaxed mb-4" style={{ color: MUTED }}>"{r.t}"</p>
                <div className="font-bold text-xs" style={{ color: DARK }}>— {r.a} <span className="font-normal" style={{ color: pastel.star }}>· {r.s}</span></div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: TERRA }}>Questions</p>
            <h2 className="font-serif italic text-4xl" style={{ color: DARK }}>Answers before you arrive.</h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(45,42,36,0.08)' }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm" style={{ color: DARK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: SAGE }} />
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: SAGE }} className="py-20 px-6 text-center">
        <h2 className="font-serif italic text-4xl text-white mb-4">Begin your practice.</h2>
        <p className="text-white/75 mb-8 max-w-md mx-auto">Your first class is free. No commitment, no pressure. Just show up.</p>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold text-sm px-10 py-4" style={{ color: DARK }}>
          Book Your Free Class <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: DARK }} className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-serif italic text-xl text-white mb-3">Solstice</div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Nashville yoga studio. Open 7 days. All levels. All bodies.</p>
            <div className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SAGE }} />
              <span>314 8th Ave South, Nashville TN 37203</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Studio</div>
            <ul className="space-y-2">
              {['Class Schedule', 'Teachers', 'Membership', 'Retreats', 'Workshops', 'Private Sessions'].map(s => (
                <li key={s}><Link href={`${BASE}/services`} className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Hours</div>
            <div className="text-sm space-y-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <div>Mon – Fri: 6:00am – 9:00pm</div>
              <div>Saturday: 7:00am – 6:00pm</div>
              <div>Sunday: 8:00am – 5:00pm</div>
              <div className="mt-3 font-bold" style={{ color: SAGE }}>(615) 555-0244</div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t pt-6 text-xs" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)' }}>
          © 2025 Solstice Yoga Studio · Privacy Policy
        </div>
      </footer>
    </>
  );
}
