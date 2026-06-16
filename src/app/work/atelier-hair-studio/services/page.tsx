import Link from 'next/link';
import { ArrowRight, Scissors, Sparkles, Leaf, Star, Check } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';
const WARM_WHITE = '#FAF7F4';
const PLUM = '#3D1F2C';

const MENU = [
  {
    icon: Scissors,
    title: 'Cuts & Styling',
    items: [
      { name: "Women's Cut & Style", price: '$85+' },
      { name: "Men's Cut", price: '$55+' },
      { name: "Children's Cut (under 12)", price: '$40' },
      { name: 'Blowout', price: '$65+' },
      { name: 'Special Occasion Updo', price: '$120+' },
      { name: 'Bang Trim (existing client)', price: '$15' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Color Services',
    items: [
      { name: 'Single Process Color', price: '$100+' },
      { name: 'Full Highlights', price: '$150+' },
      { name: 'Partial Highlights', price: '$110+' },
      { name: 'Balayage / Ombre', price: '$185+' },
      { name: 'Color Correction', price: 'Consultation' },
      { name: 'Gloss / Toner', price: '$65+' },
    ],
  },
  {
    icon: Leaf,
    title: 'Treatments',
    items: [
      { name: 'Keratin Smoothing Treatment', price: '$280+' },
      { name: 'Deep Conditioning Mask', price: '$45' },
      { name: 'Scalp Treatment', price: '$55' },
      { name: 'Bond Builder (Olaplex)', price: '$30 add-on' },
      { name: 'Gloss Treatment', price: '$65+' },
      { name: 'Hydrating Blow Dry', price: '$70+' },
    ],
  },
  {
    icon: Star,
    title: 'Bridal & Special Events',
    items: [
      { name: 'Bridal Hair Trial', price: '$150' },
      { name: 'Wedding Day Styling', price: '$200+' },
      { name: 'Bridesmaid Styling', price: '$90/person' },
      { name: 'Flower Girl Styling', price: '$55' },
      { name: 'Event Updo', price: '$120+' },
      { name: 'On-Location Services', price: 'Inquire' },
    ],
  },
];

const POLICIES = [
  'All services are priced starting from the listed amount. Final pricing depends on hair length, density, and complexity.',
  'Color correction appointments require an in-person consultation prior to booking.',
  'We use only professional-grade, sulfate-free, and cruelty-free products.',
  '24-hour cancellation policy. Late cancellations may incur a 50% service fee.',
  'Complimentary deep conditioning treatment with all first-time color services.',
];

export default function AtelierServices() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: BLUSH }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        {/* decorative line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12"
          style={{ backgroundColor: ROSE, opacity: 0.4 }}
        />
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6 px-5 py-2"
          style={{
            color: ROSE,
            fontFamily: 'var(--font-body)',
            border: `1px solid ${ROSE}`,
            opacity: 0.9,
          }}
        >
          Services &amp; Pricing
        </div>
        <h1
          className="text-5xl md:text-7xl mb-6 leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: CHARCOAL,
          }}
        >
          The Atelier Menu
        </h1>
        <p
          className="max-w-lg mx-auto text-sm leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: PLUM, opacity: 0.7 }}
        >
          Artisan color, precision cuts, and luxury treatments — all performed with professional-grade, sustainable products tailored to your unique hair.
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12"
          style={{ backgroundColor: ROSE, opacity: 0.4 }}
        />
      </section>

      {/* Service Cards */}
      <section style={{ backgroundColor: WARM_WHITE }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Category grid */}
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: BLUSH }}>
            {MENU.map(({ icon: Icon, title, items }, i) => (
              <div key={i} className="bg-white p-10 group">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: BLUSH }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ROSE }} strokeWidth={1.5} />
                  </div>
                  <h2
                    className="text-2xl"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      color: CHARCOAL,
                    }}
                  >
                    {title}
                  </h2>
                </div>

                <div className="space-y-0">
                  {items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-baseline justify-between py-3.5"
                      style={{
                        borderBottom: j < items.length - 1 ? `1px solid ${BLUSH}` : 'none',
                      }}
                    >
                      <span
                        className="text-sm"
                        style={{ fontFamily: 'var(--font-body)', color: CHARCOAL, opacity: 0.75 }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="text-sm font-bold ml-4 shrink-0"
                        style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-6 my-16">
            <div className="flex-1 h-px" style={{ backgroundColor: BLUSH }} />
            <span
              className="text-[10px] uppercase tracking-[0.4em] shrink-0"
              style={{ fontFamily: 'var(--font-body)', color: ROSE }}
            >
              Salon Policies
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: BLUSH }} />
          </div>

          {/* Policies */}
          <div
            className="max-w-3xl mx-auto"
            style={{
              backgroundColor: BLUSH,
              padding: '3rem',
            }}
          >
            <h3
              className="text-3xl mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                color: CHARCOAL,
              }}
            >
              What to Know
            </h3>
            <div className="space-y-4">
              {POLICIES.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-5 h-5 shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: ROSE }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: PLUM, opacity: 0.85 }}
                  >
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: CHARCOAL }}
        className="relative py-20 px-6 text-center overflow-hidden"
      >
        {/* large decorative italic text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]"
          aria-hidden
        >
          <span
            className="text-[12rem] leading-none text-white"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Atelier
          </span>
        </div>
        <div className="relative z-10">
          <div
            className="text-[10px] uppercase tracking-[0.5em] mb-5"
            style={{ fontFamily: 'var(--font-body)', color: ROSE }}
          >
            First Visit
          </div>
          <h2
            className="text-3xl md:text-4xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            New clients receive a complimentary
          </h2>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: ROSE,
            }}
          >
            conditioning treatment.
          </h2>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[11px] px-12 py-5 transition-opacity hover:opacity-80"
            style={{ fontFamily: 'var(--font-body)', backgroundColor: ROSE }}
          >
            Book Your Appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
