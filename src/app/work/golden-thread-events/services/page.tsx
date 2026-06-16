import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Calendar, Flower2, Check } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';
const GOLD = '#C9A96E';
const IVORY = '#FAF7F2';

const PACKAGES = [
  {
    icon: Heart,
    name: 'Full Wedding Planning',
    tagline: 'Everything, from engagement to exit.',
    price: 'Starting at $6,500',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    desc: 'Our most comprehensive offering. We walk with you through every decision, vendor, and detail from the moment you say yes to your partner all the way through the last dance of your reception.',
    includes: [
      'Unlimited planning meetings',
      'Vendor research, vetting & booking',
      'Budget creation & management',
      'Full vendor communication & management',
      'Wedding week timeline creation',
      'Ceremony rehearsal direction',
      'Complete day-of coordination',
      'Post-event wrap-up support',
    ],
  },
  {
    icon: Calendar,
    name: 'Partial Planning',
    tagline: 'You handle some, we handle the rest.',
    price: 'Starting at $3,200',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
    desc: 'Perfect if you have already booked some vendors and need a seasoned professional to coordinate the rest of the planning journey — and ensure the day itself unfolds flawlessly.',
    includes: [
      'Up to 12 planning meetings',
      'Vendor booking for remaining needs',
      'Budget review & management',
      'Month-of coordination package included',
      'Vendor final confirmations',
      'Wedding day timeline',
      'Day-of coordination (12 hours)',
    ],
  },
  {
    icon: Calendar,
    name: 'Day-Of Coordination',
    tagline: 'You planned it. We execute it perfectly.',
    price: 'Starting at $1,800',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop',
    desc: 'You have done the work — now let us bring your vision to life on the day itself so you can be fully present, fully joyful, and completely stress-free from morning until midnight.',
    includes: [
      'Initial planning consultation',
      'Vendor confirmation calls (3–4 weeks out)',
      'Wedding day timeline creation',
      'Rehearsal direction',
      '10 hours of day-of coordination',
      'One assistant included',
      'Vendor tip distribution',
    ],
  },
  {
    icon: Flower2,
    name: 'Floral Design',
    tagline: 'Blooms that tell your story.',
    price: 'Starting at $2,500',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    desc: 'Bespoke ceremony and reception florals designed to reflect your style, season, and color story. Sourced from sustainable local and regional growers who share our love of beauty.',
    includes: [
      'Design consultation & vision board',
      'Bridal bouquet & bridesmaids',
      'Boutonnieres & corsages',
      'Ceremony arch or altar florals',
      'Centerpieces & table arrangements',
      'Cocktail hour florals',
      'Setup & breakdown on event day',
    ],
  },
];

export default function GoldenThreadServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center text-center px-6" style={{ backgroundColor: DARK }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
            alt="Wedding florals"
            fill
            className="object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
          >
            Services & Packages
          </div>
          <h1
            className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            How We Work Together
          </h1>
          <div className="w-24 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
          <p
            className="text-white/55 max-w-xl mx-auto leading-relaxed text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Bespoke wedding planning, floral design, and event coordination for couples who believe every detail matters.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section style={{ backgroundColor: IVORY }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {PACKAGES.map(({ icon: Icon, name, tagline, price, img, desc, includes }, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-0 overflow-hidden bg-white shadow-md">
              <div className={`relative min-h-[340px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="text-2xl text-white"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                  >
                    {name}
                  </div>
                </div>
              </div>
              <div className={`p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.4em]"
                    style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                  >
                    {tagline}
                  </div>
                </div>
                <div className="w-8 h-px mb-5" style={{ backgroundColor: GOLD }} />
                <div
                  className="text-2xl font-bold mb-4"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {price}
                </div>
                <p
                  className="text-sm text-gray-500 leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
                <div className="mb-7">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest text-gray-300 mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    What's Included
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                    {includes.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-1.5 text-xs text-gray-500"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: SAGE }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-1 self-start transition-opacity hover:opacity-70"
                  style={{ color: SAGE, borderColor: GOLD, fontFamily: 'var(--font-body)' }}
                >
                  Inquire About This Package <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Divider */}
      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              Your Planning Journey
            </h2>
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From your first inquiry to your last dance — here is how we work together.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
            {[
              { label: 'Month 1', title: 'Discovery Call', desc: 'We hear your vision, share our process, and confirm it feels like the right fit.' },
              { label: 'Month 1–2', title: 'Design & Vendor Phase', desc: 'Venue tours, vendor introductions, and locking in your aesthetic direction.' },
              { label: 'Month 3–10', title: 'Planning & Coordination', desc: 'Ongoing meetings, contract reviews, timeline builds, and keeping everything on track.' },
              { label: 'Final Month', title: 'Confirmation & Rehearsal', desc: 'Final vendor confirmations, timeline distribution, and your rehearsal walk-through.' },
              { label: 'Your Day', title: 'Perfect Execution', desc: 'We are on-site hours before you arrive and stay until the last detail is finished.' },
            ].map((step, i) => (
              <div key={i} className={`relative flex items-start gap-8 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
                  >
                    {step.label}
                  </div>
                  <h3
                    className="text-xl mb-1"
                    style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {step.desc}
                  </p>
                </div>
                <div className="relative z-10 w-4 h-4 rounded-full border-2 mt-1 shrink-0" style={{ backgroundColor: IVORY, borderColor: GOLD }} />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 text-center">
        <Flower2 className="w-8 h-8 mx-auto mb-6" style={{ color: GOLD }} strokeWidth={1} />
        <h2
          className="text-3xl md:text-4xl text-white mb-4 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          We take only 20 weddings per year.
        </h2>
        <p
          className="text-white/45 mb-8 text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Boutique availability means your event receives our full, undivided attention. Inquire early.
        </p>
        <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[11px] px-12 py-4"
          style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
        >
          Begin Your Inquiry <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
