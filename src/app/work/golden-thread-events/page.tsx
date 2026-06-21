import Image from 'next/image';
import Link from 'next/link';
import { Check, Star, ChevronDown, MapPin, Phone, Instagram, Mail } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const BG = '#080608';
const GOLD = '#D4AF70';
const CREAM = '#F5F0E0';
const CARD = '#100E0C';
const MUTED = 'rgba(245,240,224,0.45)';

const PACKAGES = [
  {
    name: 'Garden Wedding',
    from: '$4,500',
    includes: [
      'Dedicated lead planner',
      'Vendor curation & contracts',
      'Full day-of coordination',
      'Floral design consultation',
      'Guest experience management',
    ],
  },
  {
    name: 'Grand Gala',
    from: '$12,000',
    includes: [
      'Two dedicated planners',
      'Complete design & styling direction',
      'All vendor negotiations handled',
      'Day-of production team',
      'Post-event debrief & recap',
    ],
  },
  {
    name: 'Corporate Event',
    from: '$3,200',
    includes: [
      'Concept & theme development',
      'Venue sourcing & negotiation',
      'Catering & AV coordination',
      'Guest RSVP management',
      'On-site logistics direction',
    ],
  },
  {
    name: 'Intimate Celebration',
    from: '$1,800',
    includes: [
      'Single dedicated planner',
      'Up to 40 guests',
      'Vendor recommendations',
      'Timeline & run-of-show',
      'Day-of coordination (8 hrs)',
    ],
  },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop',
];

const TIMELINE = [
  { phase: '12 Months Out', title: 'Vision & Budget', desc: 'We sit down, define your vision, establish your budget, and begin securing the right venue and vendors before they book up.' },
  { phase: '9 Months Out', title: 'Venue & Vendors', desc: 'Venue contract signed, photography, catering, entertainment, and florals confirmed. Your full vendor team is locked in.' },
  { phase: '6 Months Out', title: 'Design & Details', desc: 'Aesthetic direction, floor plans, stationery design, menu tasting, and every detail refined until it feels exactly right.' },
  { phase: '3 Months Out', title: 'Final Selections', desc: 'Final guest list, seating arrangements, ceremony order, and every vendor receives a detailed production brief.' },
  { phase: '1 Month Out', title: 'Confirmation Calls', desc: 'We personally confirm every vendor, review timelines, and conduct a final walkthrough of your venue.' },
  { phase: 'Your Day', title: 'Your Moment', desc: 'You arrive. We handle everything. The result of 12 months of meticulous planning comes together perfectly.' },
];

const TESTIMONIALS = [
  {
    quote: "Hiring Golden Thread was the single best decision we made for our wedding. Sophia anticipated every detail before we even thought to ask. Absolutely perfect.",
    name: 'Isabella & Ryan M.',
    event: 'Rose Garden Wedding, 2024',
  },
  {
    quote: "From our first meeting I knew Sophia understood our vision. She brought ideas we never would have thought of and kept us completely at ease through everything.",
    name: 'Chloe T.',
    event: 'Grand Gala, Nashville 2024',
  },
  {
    quote: "The floral arrangements were breathtaking. Our ceremony arch made every guest gasp. The entire experience was seamless and utterly unforgettable.",
    name: 'Natalie & James W.',
    event: 'Intimate Celebration, 2023',
  },
];

const FAQS = [
  { q: 'How many events do you take per year?', a: 'We take no more than 25 events per year. This is entirely intentional. We are a boutique studio, not a volume operation. Every event receives our complete focus, energy, and creativity.' },
  { q: 'How far in advance should we reach out?', a: 'For full planning, we recommend reaching out 12 to 18 months before your date. Partial planning 8 to 12 months. Day-of coordination can sometimes be booked 4 to 6 months out, depending on availability.' },
  { q: 'Do you travel for destination events?', a: 'Yes. We have planned events in Asheville, New Orleans, Nashville, and several Caribbean destinations. Travel fees apply outside the Nashville metro area. We love destination work and bring the same level of care wherever we go.' },
  { q: 'Can we bring our own vendors?', a: 'Absolutely. We have a curated preferred vendor list we trust completely. We can also work with vendors you have already secured. We ask to review contracts and conduct an intro meeting to ensure alignment.' },
  { q: 'What is your design philosophy?', a: 'We believe in intentional, layered design. Details that feel personal, not trendy. We do not replicate events. Your design is built from scratch based on your story, your tastes, and what feels authentic to you.' },
  { q: 'What if something goes wrong on the day?', a: 'This is our specialty. We carry a comprehensive emergency kit and keep backup vendor contacts on standby. In 14 years of events, we have never had an issue that our clients even knew about. We handle everything.' },
  { q: 'How does pricing work?', a: 'All packages are custom quoted based on guest count, venue, complexity, and required services. The listed prices are starting minimums. We provide a transparent itemized proposal after your complimentary inquiry call.' },
];

export default function GoldenThreadEventsPage() {
  return (
    <div style={{ backgroundColor: BG, color: CREAM }}>

      {/* STICKY NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-14 py-4"
        style={{ backgroundColor: BG, borderBottom: '1px solid rgba(212,175,112,0.2)' }}
      >
        <div>
          <span className="font-serif italic text-lg" style={{ color: GOLD }}>Golden Thread</span>
          <span className="text-xs tracking-[0.35em] ml-2" style={{ color: CREAM }}>&nbsp;EVENTS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {['Weddings', 'Corporate', 'Social', 'Portfolio'].map((item) => (
            <Link key={item} href={`${BASE}/${item.toLowerCase()}`} className="transition-opacity hover:opacity-80" style={{ color: MUTED }}>
              {item}
            </Link>
          ))}
        </div>
        <Link
          href={`${BASE}/contact`}
          className="text-xs font-bold px-5 py-2.5 border transition-colors hover:opacity-80"
          style={{ borderColor: GOLD, color: GOLD, boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
        >
          Begin Planning
        </Link>
      </nav>

      {/* HERO — full-bleed editorial */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury event"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,6,8,0.9) 0%, rgba(8,6,8,0.5) 50%, rgba(8,6,8,0.2) 100%)' }}
          />
        </div>
        <div className="relative z-10 flex items-end pb-20 px-12 w-full">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.4em] mb-8"
              style={{ color: GOLD }}
            >
              Nashville's Premier Event Designers
            </p>
            <h1
              className="text-7xl md:text-8xl font-serif italic leading-none mb-8"
              style={{ color: CREAM }}
            >
              Every event,<br />a masterpiece.
            </h1>
            <div className="mb-8" style={{ width: '80px', height: '1px', backgroundColor: GOLD }} />
            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: MUTED }}>
              From intimate gatherings to grand galas, we craft experiences that live on in memory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`${BASE}/contact`}
                className="px-8 py-4 font-bold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: GOLD, color: '#0A0A0A', boxShadow: '0 6px 28px rgba(212,175,112,0.30)' }}
              >
                Begin Planning
              </Link>
              <Link
                href={`${BASE}/portfolio`}
                className="px-8 py-4 font-bold text-sm border transition-opacity hover:opacity-80"
                style={{ borderColor: CREAM, color: CREAM }}
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-14" style={{ backgroundColor: CARD }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '380+', label: 'Events Designed' },
            { num: '14', label: 'Years of Excellence' },
            { num: '$2M+', label: 'Budgets Managed' },
            { num: '4.9★', label: 'Average Rating' },
          ].map(({ num, label }) => (
            <div key={label} style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
              <div className="text-5xl font-serif mb-2" style={{ color: GOLD }}>{num}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: MUTED }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT PACKAGES */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>Our Services</p>
            <h2 className="text-5xl font-serif italic" style={{ color: CREAM }}>Planning packages.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map(({ name, from, includes }) => (
              <div
                key={name}
                className="p-8 flex flex-col"
                style={{
                  backgroundColor: CARD,
                  border: '1px solid rgba(212,175,112,0.15)',
                  borderTop: `2px solid ${GOLD}`,
                  boxShadow: '0 6px 28px rgba(0,0,0,0.35)',
                }}
              >
                <h3 className="font-serif text-xl mb-2" style={{ color: CREAM }}>{name}</h3>
                <p className="text-base font-bold mb-6" style={{ color: GOLD }}>From {from}</p>
                <ul className="space-y-2.5 flex-1">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: MUTED }}>
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="mt-8 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{ color: GOLD }}
                >
                  Inquire &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>Portfolio</p>
            <h2 className="text-5xl font-serif italic" style={{ color: CREAM }}>Our work speaks.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-sm md:col-span-1" style={{ aspectRatio: '3/4' }}>
              <Image
                src={GALLERY[0]}
                alt="Event portfolio"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm md:col-span-1" style={{ aspectRatio: '3/4' }}>
              <Image
                src={GALLERY[1]}
                alt="Event portfolio"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm md:col-span-1" style={{ aspectRatio: '1/1' }}>
              <Image
                src={GALLERY[2]}
                alt="Event portfolio"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/portfolio`}
              className="text-xs font-bold uppercase tracking-[0.3em] border-b pb-1 transition-opacity hover:opacity-80"
              style={{ color: GOLD, borderColor: GOLD }}
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* PLANNING TIMELINE — vertical */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>The Process</p>
            <h2 className="text-5xl font-serif italic" style={{ color: CREAM }}>The Golden Thread process.</h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0"
              style={{ width: '2px', backgroundColor: GOLD, marginLeft: '-1px' }}
            />
            <div className="space-y-12 pl-16">
              {TIMELINE.map(({ phase, title, desc }) => (
                <div key={phase} className="relative">
                  <div
                    className="absolute -left-10 w-4 h-4 rounded-full border-2 top-1"
                    style={{ backgroundColor: GOLD, borderColor: GOLD }}
                  />
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: MUTED }}>{phase}</p>
                  <h3 className="font-serif text-xl mb-2" style={{ color: CREAM }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>Client Stories</p>
            <h2 className="text-5xl font-serif italic" style={{ color: CREAM }}>Moments we treasure.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, event }) => (
              <div
                key={name}
                className="p-8 text-center"
                style={{ border: '1px solid rgba(212,175,112,0.15)', backgroundColor: BG, boxShadow: '0 16px 48px rgba(0,0,0,0.45)' }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="font-serif italic text-base leading-relaxed mb-6" style={{ color: CREAM }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="font-bold text-sm" style={{ color: CREAM }}>{name}</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>Common Questions</p>
            <h2 className="text-5xl font-serif italic" style={{ color: CREAM }}>Questions from clients.</h2>
          </div>
          <div style={{ borderTop: '1px solid rgba(212,175,112,0.15)' }}>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group"
                style={{ borderBottom: '1px solid rgba(212,175,112,0.15)' }}
              >
                <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none">
                  <span className="font-bold text-sm leading-snug" style={{ color: CREAM }}>{q}</span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    style={{ color: GOLD }}
                  />
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: GOLD }}>
        <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: 'rgba(8,6,8,0.5)' }}>
          Begin Your Journey
        </p>
        <h2
          className="text-5xl md:text-6xl font-serif italic mb-6"
          style={{ color: '#080608' }}
        >
          Your perfect event awaits.
        </h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'rgba(8,6,8,0.65)' }}>
          We take a limited number of events each year. Reach out early to secure your date.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-block px-10 py-4 font-bold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#080608', color: CREAM }}
        >
          Start Planning Today
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-12" style={{ backgroundColor: BG, borderTop: `1px solid ${GOLD}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="font-serif italic text-xl block mb-2" style={{ color: GOLD }}>Golden Thread</span>
            <span className="text-xs tracking-[0.3em] block mb-4" style={{ color: CREAM }}>EVENTS</span>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Nashville's most trusted luxury event planning and design studio.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-5" style={{ color: GOLD }}>Event Types</p>
            <ul className="space-y-2">
              {['Weddings', 'Corporate Events', 'Social Galas', 'Intimate Celebrations', 'Floral Design'].map((s) => (
                <li key={s}>
                  <Link href={`${BASE}/services`} className="text-sm hover:opacity-100 transition-opacity" style={{ color: MUTED }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-5" style={{ color: GOLD }}>Contact</p>
            <div className="space-y-3 text-sm" style={{ color: MUTED }}>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                <span>512 Church St, Nashville TN 37219</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                <a href="tel:6155550197" className="hover:opacity-80">(615) 555-0197</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                <a href="mailto:hello@goldenthreadevents.com" className="hover:opacity-80">hello@goldenthreadevents.com</a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-5" style={{ color: GOLD }}>Follow</p>
            <div className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
              <Instagram className="w-4 h-4" style={{ color: GOLD }} />
              <span>@goldenthreadevents</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8" style={{ borderTop: '1px solid rgba(212,175,112,0.1)' }}>
          <p className="text-xs text-center" style={{ color: 'rgba(245,240,224,0.2)' }}>
            &copy; 2025 Golden Thread Events. Nashville, Tennessee. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
