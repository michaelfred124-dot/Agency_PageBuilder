import Link from 'next/link';
import { Star, ArrowRight, Quote } from 'lucide-react';

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';
const CHARCOAL = '#2A2018';

const REVIEWS = [
  { name: 'Marcus R.', location: 'Chicago', rating: 5, occasion: 'Date Night', date: 'May 2026', text: 'The best steak I\'ve had outside of a private dining club. The tomahawk for two was a religious experience — perfectly seared crust, exactly the temperature we asked for, incredible depth of flavor from the aging. Service matched the food in every way.' },
  { name: 'Sarah K.', location: 'Oak Park', rating: 5, occasion: 'Anniversary', date: 'April 2026', text: 'Perfect for our anniversary. Service was impeccable, wine pairings were inspired, and that bone marrow... I still dream about it. Our server remembered we\'d mentioned a wine preference mid-meal and surprised us with a pour before dessert. That\'s five-star hospitality.' },
  { name: 'David L.', location: 'Naperville', rating: 5, occasion: 'Business Dinner', date: 'March 2026', text: 'We\'ve been to every top steakhouse in Chicago. Ember & Rye is in a different category. The A5 Wagyu was flawless. The private dining room handled our group of 14 without a single misstep. Our clients were impressed — and they eat at places like this weekly.' },
  { name: 'Jennifer T.', location: 'Lincoln Park', rating: 5, occasion: 'Birthday', date: 'February 2026', text: 'We surprised my husband here for his 40th birthday and the staff handled everything beautifully — came out with a small dessert, acknowledged the occasion without making it gaudy. The ribeye was the best he\'d ever had, and he grew up in Texas. That means something.' },
  { name: 'Robert M.', location: 'Chicago', rating: 5, occasion: 'Dinner for Two', date: 'January 2026', text: 'I proposed to my now-fiancée here last winter. The staff set up the table with flowers without me even asking — they just noticed the reservation note. Chef sent out an amuse-bouche with a handwritten card. We will be back for every anniversary for the rest of our lives.' },
  { name: 'Lisa C.', location: 'Evanston', rating: 5, occasion: 'Team Dinner', date: 'December 2025', text: 'Our year-end team dinner for 8. The private room, the sommelier who worked through the wine program with us in advance, the flawless pacing — every detail was handled. I\'ve heard from multiple team members that this was the best company dinner they\'ve ever attended.' },
  { name: 'Andrew B.', location: 'River North', rating: 5, occasion: 'Regular', date: 'November 2025', text: 'I live three blocks away and I\'ve been coming monthly since they opened. In six years the quality has not slipped once. The bone marrow is still perfect. Dave at the bar still remembers my Cabernet preference. Ember & Rye is an institution and deserves every accolade.' },
  { name: 'Catherine W.', location: 'Gold Coast', rating: 5, occasion: 'Graduation Dinner', date: 'June 2025', text: 'My daughter\'s medical school graduation dinner. She had asked for the best steakhouse in Chicago and we delivered. The tomahawk tableside presentation had the whole table leaning in — the theater matched the food. Exceptional in every way.' },
];

const PRESS = [
  { outlet: 'James Beard Foundation', quote: 'Best Chef: Great Lakes nominee — a recognition of sustained excellence and singular vision.', year: '2024' },
  { outlet: 'Chicago Magazine', quote: '"Ember & Rye reminds you why steakhouses exist. Chef Voss has stripped the concept to its essentials and made it extraordinary."', year: '2024' },
  { outlet: 'The Chicago Tribune', quote: '"A steakhouse operating at a Michelin level. Four stars, earned without hesitation."', year: '2023' },
  { outlet: 'Eater Chicago', quote: '"The tomahawk for two has officially entered Chicago food mythology. Do not miss it."', year: '2023' },
];

export default function EmberAndRyeReviews() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 md:px-12 text-center" style={{ backgroundColor: DARK }}>
        <div className="flex justify-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: GOLD }} />)}
        </div>
        <h1
          className="text-5xl md:text-6xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          What Our Guests Say
        </h1>
        <div className="w-16 h-px mx-auto mb-5" style={{ backgroundColor: GOLD }} />
        <p className="text-sm" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>
          4.9 Stars · 1,400+ Google Reviews
        </p>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[['4.9★', 'Google Rating'], ['1,400+', 'Reviews'], ['#1', 'Steakhouse in Chicago']].map(([val, label], i) => (
            <div key={i}>
              <div
                className="text-3xl mb-1"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: GOLD }}
              >
                {val}
              </div>
              <div
                className="text-[10px] uppercase tracking-widest"
                style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="p-8" style={{ backgroundColor: CHARCOAL, borderTop: `2px solid ${EMBER}` }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="text-sm font-medium mb-0.5"
                    style={{ color: CREAM, fontFamily: 'var(--font-body)' }}
                  >
                    {r.name}
                  </div>
                  <div className="text-[10px]" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>
                    {r.location} · {r.occasion}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: GOLD }} />)}
                  </div>
                  <div className="text-[10px]" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>{r.date}</div>
                </div>
              </div>
              <Quote className="w-5 h-5 mb-3 opacity-30" style={{ color: EMBER }} />
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(245,237,216,0.85)' }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Press Section */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="text-[10px] uppercase tracking-[0.4em] mb-10 text-center"
            style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
          >
            As Seen In
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PRESS.map((p, i) => (
              <div key={i} className="p-6 border-l" style={{ backgroundColor: DARK, borderLeftColor: EMBER }}>
                <div
                  className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
                >
                  {p.outlet} · {p.year}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(245,237,216,0.7)' }}
                >
                  {p.quote}
                </p>
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
          Be our next happy guest.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
          style={{ backgroundColor: CREAM, color: DARK, fontFamily: 'var(--font-body)' }}
        >
          Reserve a Table <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </>
  );
}
