import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';
const CHARCOAL = '#2A2018';

const STARTERS = [
  { name: 'Beef Tartare', desc: 'Hand-cut prime beef, quail egg, cornichon, grilled crostini', price: '$22' },
  { name: 'Bone Marrow Gratin', desc: 'Roasted marrow, herb gremolata, pickled shallots, toast points', price: '$18' },
  { name: 'Oysters on the Half Shell', desc: 'Daily selection, mignonette, cocktail sauce', price: 'Market' },
];

const STEAKS = [
  { name: 'Prime Ribeye 14oz', desc: 'Bone-in, wood-fired, compound butter', price: '$72' },
  { name: 'New York Strip 12oz', desc: 'USDA Prime, classic preparation', price: '$58' },
  { name: 'Filet Mignon 8oz', desc: 'Center-cut tenderloin, bordelaise sauce', price: '$64' },
  { name: 'Tomahawk 32oz', desc: '45-day aged, tableside presentation — for two', price: '$145' },
];

const SIDES = [
  { name: 'Truffle Mac & Cheese', price: '$14' },
  { name: 'Duck Fat Potatoes', price: '$12' },
  { name: 'Creamed Spinach', price: '$11' },
];

const TESTIMONIALS = [
  { text: 'The best steak I\'ve had outside of a private dining club. The tomahawk for two was a religious experience.', name: 'Marcus R.', location: 'Chicago' },
  { text: 'Perfect for our anniversary. Service was impeccable, wine pairings were inspired, and that bone marrow...', name: 'Sarah K.', location: 'Oak Park' },
  { text: 'We\'ve been to every top steakhouse in Chicago. Ember & Rye is in a different category.', name: 'David L.', location: 'Naperville' },
];

export default function EmberAndRyePage() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: DARK }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
            alt="Ember & Rye interior"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(16,10,5,0.78)' }} />
        </div>

        <div className="relative z-10 px-6 py-32">
          <p
            className="text-[10px] font-medium uppercase tracking-[0.5em] mb-6"
            style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Wood-Fired · Dry-Aged · River North, Chicago
          </p>
          <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
          <h1
            className="text-7xl md:text-9xl leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
          >
            Ember & Rye
          </h1>
          <p
            className="text-xl mb-8"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(245,237,216,0.6)' }}
          >
            Where fire meets finesse.
          </p>
          <div className="w-20 h-px mx-auto mb-10" style={{ backgroundColor: GOLD }} />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`${BASE}/contact`}
              className="px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
              style={{ backgroundColor: EMBER, color: CREAM, fontFamily: 'var(--font-body)' }}
            >
              Reserve a Table
            </Link>
            <Link
              href={`${BASE}/menu`}
              className="px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] border transition-colors hover:border-[#F5EDD8]"
              style={{ color: CREAM, borderColor: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
            >
              View the Menu
            </Link>
          </div>
          <p
            className="mt-12 text-xs"
            style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em' }}
          >
            OPEN TUESDAY – SUNDAY · DINNER FROM 5PM
          </p>
        </div>
      </section>

      {/* Social proof strip */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            'James Beard Nominee 2024',
            '1200°F Wood-Fired Grill',
            '28-Day Dry-Aged Prime',
            '#1 Steakhouse in Chicago',
          ].map((stat, i) => (
            <div key={i}>
              <div
                className="text-sm"
                style={{ fontFamily: 'var(--font-body)', color: CREAM, fontWeight: 500, letterSpacing: '0.05em' }}
              >
                {stat}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Preview — Signature Element */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[10px] uppercase tracking-[0.4em] mb-4"
              style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
            >
              Tonight&rsquo;s Kitchen
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              A Selection from Tonight&rsquo;s Menu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Starters */}
            <div>
              <div
                className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-6 pb-4"
                style={{ color: GOLD, fontFamily: 'var(--font-body)', borderBottom: `1px solid ${GOLD}40` }}
              >
                Starters
              </div>
              <div className="space-y-6">
                {STARTERS.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div>
                      <div
                        className="text-lg mb-0.5"
                        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                      >
                        {item.name}
                      </div>
                      <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>{item.desc}</div>
                    </div>
                    <div
                      className="text-sm shrink-0"
                      style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-[10px] font-semibold uppercase tracking-[0.4em] mt-10 mb-6 pb-4"
                style={{ color: GOLD, fontFamily: 'var(--font-body)', borderBottom: `1px solid ${GOLD}40` }}
              >
                Sides
              </div>
              <div className="space-y-3">
                {SIDES.map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span
                      className="text-base"
                      style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                    >
                      {item.name}
                    </span>
                    <span className="text-sm" style={{ color: EMBER, fontFamily: 'var(--font-body)' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steaks */}
            <div>
              <div
                className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-2 pb-4"
                style={{ color: GOLD, fontFamily: 'var(--font-body)', borderBottom: `1px solid ${GOLD}40` }}
              >
                Steaks
              </div>
              <p
                className="text-[10px] italic mb-6"
                style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}
              >
                All cuts dry-aged 28 days on premises
              </p>
              <div className="space-y-6">
                {STEAKS.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div>
                      <div
                        className="text-lg mb-0.5"
                        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                      >
                        {item.name}
                      </div>
                      <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>{item.desc}</div>
                    </div>
                    <div
                      className="text-sm shrink-0"
                      style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6" style={{ borderTop: `1px solid rgba(245,237,216,0.1)` }}>
                <p className="text-xs mb-4" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>
                  Full menu available on request
                </p>
                <Link
                  href={`${BASE}/menu`}
                  className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] border-b pb-0.5"
                  style={{ color: CREAM, borderColor: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
                >
                  View Full Menu <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Grill Feature */}
      <section className="grid md:grid-cols-2 min-h-[500px]">
        <div className="relative min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
            alt="Wood-fired grill"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-16" style={{ backgroundColor: CHARCOAL }}>
          <div
            className="text-[10px] uppercase tracking-[0.4em] mb-5"
            style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
          >
            Our Craft
          </div>
          <h2
            className="text-4xl mb-6"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
          >
            1200°F. That&rsquo;s where<br />flavor lives.
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}
          >
            Our Argentine parilla was custom-built in Buenos Aires and shipped to River North in 2018. Every steak is cooked over real hardwood — no gas, no shortcuts. The temperature, the wood, and the time are the only variables.
          </p>
          <div className="space-y-4">
            {[
              '28-day dry-aging room on premises',
              'James Beard-nominated Executive Chef',
              'Sommelier-curated wine list of 200+ bottles',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: EMBER }} />
                <span className="text-sm" style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-1 mb-12">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />)}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((r, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: CHARCOAL, borderLeft: `2px solid ${EMBER}` }}>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>
                  {r.name} &mdash; {r.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: EMBER }}>
        <h2
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          Your table is waiting.
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'rgba(245,237,216,0.75)', fontFamily: 'var(--font-body)' }}>
          Tuesday through Sunday · Dinner from 5pm
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="px-10 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
            style={{ backgroundColor: CREAM, color: DARK, fontFamily: 'var(--font-body)' }}
          >
            Reserve Online
          </Link>
          <span className="text-sm" style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-body)' }}>
            or call (312) 555-0193
          </span>
        </div>
      </section>
    </>
  );
}
