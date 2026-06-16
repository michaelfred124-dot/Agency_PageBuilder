import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flower2, Check } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';
const GOLD = '#C9A96E';
const IVORY = '#FAF7F2';

const VALUES = [
  { title: 'Boutique Intentionality', desc: 'We limit ourselves to 20 weddings per year. Not for exclusivity — for quality. Your event deserves our full attention, and we protect that capacity fiercely.' },
  { title: 'Listening First', desc: 'Before we suggest a single flower or venue, we listen. We ask about your story, your values, your fears, your vision. Then we build from there.' },
  { title: 'Sustainable Choices', desc: 'We partner with local, seasonal florists and vendors who share our commitment to environmental responsibility. Beautiful events should not cost the earth.' },
  { title: 'Calm Presence', desc: 'Weddings are emotional. We bring a steady, experienced hand so you can be fully present in every moment — not managing logistics.' },
];

const TEAM = [
  {
    name: 'Sophia Hartwell',
    role: 'Founder & Lead Planner',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    bio: 'Sophia started Golden Thread in 2015 after planning her sister\'s wedding and discovering her true calling. With a background in interior design and an obsessive love of flowers, she brings an unmatched eye for detail and a calm, reassuring presence to every celebration.',
  },
  {
    name: 'Clara Whitmore',
    role: 'Lead Floral Designer',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    bio: 'Clara trained under renowned Charleston floral designer Anne Cates before joining Golden Thread. Her seasonal, garden-inspired arrangements have been featured in Southern Weddings and Brides magazine.',
  },
  {
    name: 'Evelyn Brooks',
    role: 'Day-Of Coordinator',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
    bio: 'Evelyn is the calm center of every wedding day. A hospitality professional with 8 years of event management experience, she ensures every timeline, vendor, and moment unfolds exactly as planned.',
  },
];

export default function GoldenThreadAbout() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6" style={{ backgroundColor: DARK }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"
            alt="Wedding ceremony"
            fill
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <Flower2 className="w-8 h-8 mx-auto mb-6" style={{ color: GOLD }} strokeWidth={1} />
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
          >
            Our Story
          </div>
          <h1
            className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Every Love Story Deserves a Perfect Chapter.
          </h1>
          <div className="w-24 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
          <p
            className="text-white/55 max-w-xl mx-auto leading-relaxed text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Golden Thread Events is a boutique wedding planning and floral design studio in Charleston, SC. Founded in 2015 by Sophia Hartwell.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section style={{ backgroundColor: IVORY }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
              alt="Sophia Hartwell"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: `linear-gradient(to top, ${DARK}cc, transparent)` }}>
              <div
                className="text-white text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: GOLD }}
              >
                Sophia Hartwell · Founder
              </div>
            </div>
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Meet Sophia
            </div>
            <h2
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              A decade of love stories told.
            </h2>
            <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
            <p
              className="text-gray-500 leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Sophia Hartwell started Golden Thread in 2015 after planning her sister's wedding and realizing she had found her calling. She combines a background in interior design with an obsessive love of flowers and a calm, reassuring presence that makes couples feel completely at ease.
            </p>
            <p
              className="text-gray-500 leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Over a decade, Sophia has planned 350+ weddings across Charleston, Savannah, and destination venues around the Southeast. She has been featured in Southern Weddings, The Knot, and Brides magazine.
            </p>
            <p
              className="text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Golden Thread is a team of three — Sophia, her lead floral designer Clara, and day-of coordinator Evelyn. Small by design.
            </p>
            <div className="space-y-3">
              {[
                'Featured in Southern Weddings & The Knot',
                '350+ weddings planned',
                'Destination weddings across the Southeast',
                'Sustainable florals from local growers',
                "Charleston's Choice Award 2022 & 2023",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                  <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop', label: 'The Ceremony' },
            { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', label: 'The Details' },
            { img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop', label: 'The Celebration' },
          ].map(({ img, label }, i) => (
            <div key={i} className="relative overflow-hidden group" style={{ paddingBottom: '130%' }}>
              <Image
                src={img}
                alt={label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.4em]"
                  style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Team */}
      <section style={{ backgroundColor: IVORY }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              The People Behind Your Day
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              Small Team. Infinite Care.
            </h2>
            <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: GOLD }} />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden mb-5" style={{ paddingBottom: '120%' }}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <h3
                  className="text-2xl mb-1"
                  style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {member.name}
                </h3>
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3"
                  style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                >
                  {member.role}
                </div>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ backgroundColor: BLUSH }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Our Philosophy
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              How We Work
            </h2>
            <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: GOLD }} />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white p-9 shadow-sm">
                <div className="w-8 h-px mb-6" style={{ backgroundColor: GOLD }} />
                <h3
                  className="text-xl mb-3"
                  style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {v.desc}
                </p>
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
          We take only 20 weddings per year. Let us make yours one of them.
        </h2>
        <div className="w-16 h-px mx-auto my-6" style={{ backgroundColor: GOLD }} />
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
