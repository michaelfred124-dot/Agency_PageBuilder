import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';
const CHARCOAL = '#2A2018';

const TEAM = [
  {
    name: 'Chef Daniel Voss',
    role: 'Executive Chef & Co-Founder',
    bio: 'CIA-trained with 15 years at Michelin-starred restaurants across New York and Chicago. Daniel opened Ember & Rye in 2018 after a formative trip to Argentina where he fell in love with wood-fire cooking.',
    img: 'https://images.unsplash.com/photo-1583394293214-0b8f6d9e6e75?q=80&w=1980&auto=format&fit=crop',
  },
  {
    name: 'Maya Chen',
    role: 'Head Sommelier',
    bio: 'Master Sommelier with an 800-label cellar. Maya curates our wine program with an eye toward Old World pairing traditions and New World adventure. She conducts quarterly wine dinners.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
  },
  {
    name: 'Robert Park',
    role: 'General Manager',
    bio: 'Spent a decade at The Langham and Four Seasons before joining Ember & Rye. Robert is the reason every guest leaves feeling personally looked after — hospitality is his art form.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
  },
];

const PRESS = [
  { outlet: 'James Beard Foundation', note: 'Best Chef: Great Lakes Nominee, 2024' },
  { outlet: 'Chicago Magazine', note: '"Best New Restaurant" — 2019 Restaurant Awards' },
  { outlet: 'Eater Chicago', note: 'Essential Restaurants List — 2020, 2022, 2024' },
  { outlet: 'The Chicago Tribune', note: '"A steakhouse operating at a Michelin level." ★★★★' },
];

export default function EmberAndRyeAbout() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
            alt="Kitchen at Ember & Rye"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,10,5,1) 0%, rgba(16,10,5,0.5) 50%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p
            className="text-[10px] uppercase tracking-[0.4em] mb-4"
            style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
          >
            A love letter to fire.
          </h1>
        </div>
      </section>

      {/* Chef Story */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.4em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
            >
              The Beginning
            </div>
            <h2
              className="text-4xl mb-6"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Built on conviction,<br />cooked with fire.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}>
              Chef Daniel Voss left a senior role at a two-Michelin-starred restaurant on a Tuesday in 2017. By Friday he had signed a lease in River North. By 2018, Ember & Rye was open — and packed every night within a month.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}>
              The concept was simple: cook over real fire. Source the best dry-aged beef in the country. Build a team that believes service is an art form. Everything else followed from those three commitments.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}>
              Today Ember & Rye holds James Beard nominations, a four-star review from the Tribune, and a reservation list that runs two weeks deep on weekends. The grill hasn't cooled since opening night.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
              alt="Chef at work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* The Grill */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
              alt="Wood-fired grill"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.4em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
            >
              The Grill
            </div>
            <h2
              className="text-4xl mb-6"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              The Argentine parilla<br />at the heart of everything.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}>
              Our custom-built Argentine parilla was fabricated in Buenos Aires by third-generation grill makers and shipped to Chicago in 2018. It burns real hardwood — white oak and cherry — and reaches temperatures no gas grill can approach.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}>
              Every prime cut passes through 1200°F heat, which creates a sear that seals the exterior while leaving the interior perfectly pink. The wood imparts a smokiness that can&rsquo;t be replicated. This is not theater — it&rsquo;s the reason the food tastes like this.
            </p>
            <div className="space-y-3">
              {['28-day on-premises dry-aging program', 'USDA Prime and choice Wagyu only', 'Custom hardwood blend for every season'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-1.5 rounded-full shrink-0" style={{ backgroundColor: EMBER }} />
                  <span className="text-sm" style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-body)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="text-[10px] uppercase tracking-[0.4em] mb-4"
              style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
            >
              The People
            </div>
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Who Does the Work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} style={{ backgroundColor: CHARCOAL }}>
                <div className="relative h-64">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div
                    className="text-[9px] font-semibold uppercase tracking-widest mb-1"
                    style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
                  >
                    {m.role}
                  </div>
                  <div
                    className="text-lg mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                  >
                    {m.name}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-body)' }}>
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { pillar: 'Fire', desc: 'Real wood. Real heat. No shortcuts. The grill is the restaurant.' },
            { pillar: 'Patience', desc: '28-day dry aging. Slow prep. No timers on quality.' },
            { pillar: 'Precision', desc: 'CIA-trained technique applied to American steak traditions. Respect the cut.' },
          ].map(({ pillar, desc }, i) => (
            <div key={i} className="text-center py-8 px-6 border-t" style={{ borderTopColor: EMBER }}>
              <h3
                className="text-3xl mb-4"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
              >
                {pillar}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-body)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="flex items-center gap-3 mb-10"
          >
            <Award className="w-5 h-5" style={{ color: GOLD }} />
            <h2
              className="text-2xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Recognition & Press
            </h2>
          </div>
          <div className="space-y-4">
            {PRESS.map((p, i) => (
              <div key={i} className="flex items-start gap-6 py-4 border-b" style={{ borderBottomColor: 'rgba(245,237,216,0.08)' }}>
                <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: GOLD }} />
                <div>
                  <div className="text-sm font-medium" style={{ color: CREAM, fontFamily: 'var(--font-body)' }}>{p.outlet}</div>
                  <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: EMBER }}>
        <h2
          className="text-3xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          Come experience the fire.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
          style={{ backgroundColor: CREAM, color: DARK, fontFamily: 'var(--font-body)' }}
        >
          Reserve Your Table <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </>
  );
}
