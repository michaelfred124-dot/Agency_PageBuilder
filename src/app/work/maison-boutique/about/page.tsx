import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Heart, ShoppingBag, Check } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';
const CREAM = '#FDF9F3';

const TEAM = [
  {
    name: 'Clara Johansson',
    role: 'Founder & Head Buyer',
    specialty: 'Curation · Styling · Sustainable Fashion',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: "Clara founded Maison in 2018 after a decade in fashion PR and retail buying. She travels twice a year to source pieces from small-batch designers and sustainable brands that align with her values.",
  },
  {
    name: 'Simone Park',
    role: 'Head Stylist',
    specialty: 'Personal Styling · Wardrobe Consulting',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: "Simone has a gift for finding pieces that feel immediately right on a person. Her styling appointments are consistently booked out weeks in advance, and clients leave feeling like a better version of themselves.",
  },
];

const VALUES = [
  { icon: Leaf, title: 'Sustainably Sourced', desc: 'Over 40% of our inventory comes from certified sustainable, organic, or fair-trade brands. We ask hard questions of every brand we carry.' },
  { icon: Heart, title: 'Community Rooted', desc: 'We are a Nashville business first. We sponsor local events, partner with Nashville-based designers, and give back to causes our community cares about.' },
  { icon: ShoppingBag, title: 'Thoughtfully Curated', desc: 'We do not carry everything. We carry the right things. Every piece is selected because it is truly beautiful, wearable, and worth keeping for years.' },
  { icon: Check, title: 'Styled, Not Sold', desc: 'Our role is not to sell you the most expensive thing on the rack. It is to help you build a wardrobe that reflects who you actually are.' },
];

export default function MaisonAbout() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: SAGE }}
          >
            Our Story
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
          >
            Fashion with a Purpose.
          </h1>
          <p
            className="mt-8 text-base max-w-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}99` }}
          >
            Maison Boutique opened in Nashville in 2018 with a simple vision: a women's boutique where every piece is chosen with intentionality, sustainability, and genuine style.
          </p>
        </div>
      </section>

      {/* Clara's Story - Two Column */}
      <section style={{ backgroundColor: SAND }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              alt="Inside Maison Boutique"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: MOCHA }}
            >
              The Founder
            </div>
            <h2
              className="text-4xl md:text-5xl mb-8"
              style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
            >
              Built from a love of clothing done right.
            </h2>
            <p
              className="leading-relaxed mb-5 text-base"
              style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}80` }}
            >
              Clara Johansson spent a decade working in fashion PR and retail buying before asking herself a hard question: was the fashion she was helping sell actually good? The honest answer pushed her toward a different kind of boutique.
            </p>
            <p
              className="leading-relaxed mb-5 text-base"
              style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}80` }}
            >
              Maison was founded on two principles: curation and conscience. Every brand is vetted for quality, ethics, and sustainability. Every piece is selected because Clara would personally wear it.
            </p>
            <p
              className="leading-relaxed mb-10 text-base"
              style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}80` }}
            >
              Six years in, Maison has become one of Nashville's most beloved boutiques — known as much for its community and styling appointments as its beautiful clothing.
            </p>
            <div className="space-y-3">
              {[
                "New arrivals every Thursday",
                "Over 40% sustainable brands",
                "Complimentary styling appointments",
                "Nashville women's business of the year finalist",
                "Online shopping with free shipping on $75+",
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}90` }}
                >
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: SAGE }}
            >
              The Team
            </div>
            <h2
              className="text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-display)', color: SAND }}
            >
              The Women Behind Maison
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TEAM.map((m, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: SAGE }}
                  >
                    {m.specialty}
                  </div>
                  <div
                    className="text-xl mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: SAND }}
                  >
                    {m.name}
                  </div>
                  <div
                    className="text-xs mb-5"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,234,217,0.4)' }}
                  >
                    {m.role}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,234,217,0.55)' }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: SAGE }}
            >
              What We Stand For
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
            >
              What We Believe
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-9" style={{ backgroundColor: SAND }}>
                <Icon className="w-6 h-6 mb-6" style={{ color: SAGE }} strokeWidth={1.5} />
                <h3
                  className="font-bold text-sm mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)', color: ESPRESSO }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-20 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-display)', color: SAND }}
        >
          Book a complimentary styling appointment.
        </h2>
        <p
          className="text-sm mb-10"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,234,217,0.5)' }}
        >
          Walk in with a challenge. Walk out with a wardrobe.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4 hover:opacity-85 transition-opacity"
          style={{ fontFamily: 'var(--font-body)', backgroundColor: SAGE, color: '#fff' }}
        >
          Book Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
