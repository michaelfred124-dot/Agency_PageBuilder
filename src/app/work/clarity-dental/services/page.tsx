import Link from 'next/link';
import { ArrowRight, Smile, Shield, Sparkles, Check, Zap } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const SKY = '#0284C7';
const ICE = '#F0F9FF';
const WHITE = '#FFFFFF';

const SERVICES = [
  {
    icon: Smile,
    title: 'General & Preventive Dentistry',
    desc: 'The foundation of a healthy smile. Regular care prevents problems before they start.',
    range: '$99 – $350',
    items: [
      { name: 'Comprehensive Exam & X-Rays', price: '$150' },
      { name: 'Routine Cleaning', price: '$110' },
      { name: 'Deep Cleaning (per quadrant)', price: '$250' },
      { name: 'Tooth-Colored Fillings', price: '$180–$300' },
      { name: 'Tooth Extraction (simple)', price: '$180' },
      { name: 'Night Guard / Mouth Guard', price: '$350' },
      { name: 'Emergency Exam & X-Ray', price: '$99' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with natural-looking cosmetic treatments.',
    range: '$150 – $1,800/tooth',
    items: [
      { name: 'Teeth Whitening (in-office)', price: '$450' },
      { name: 'Take-Home Whitening Kit', price: '$250' },
      { name: 'Porcelain Veneers (per tooth)', price: '$1,200–$1,800' },
      { name: 'Dental Bonding (per tooth)', price: '$300–$600' },
      { name: 'Smile Makeover (consult)', price: 'Free' },
      { name: 'Enamel Contouring', price: '$150 per tooth' },
    ],
  },
  {
    icon: Shield,
    title: 'Restorative Dentistry',
    desc: 'Restore function, comfort, and aesthetics with modern restorative solutions.',
    range: 'From $800',
    items: [
      { name: 'Porcelain Crown', price: '$1,200–$1,500' },
      { name: 'Dental Bridge (3-unit)', price: '$3,000–$4,000' },
      { name: 'Full or Partial Dentures', price: 'From $1,500' },
      { name: 'Inlay / Onlay', price: '$800–$1,200' },
      { name: 'Root Canal Therapy', price: '$900–$1,400' },
      { name: 'Cracked Tooth Treatment', price: 'Varies' },
    ],
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement that looks, feels, and functions like a natural tooth.',
    range: 'From $3,500',
    items: [
      { name: 'Single Implant + Crown', price: '$3,500–$4,500' },
      { name: 'Implant Consultation', price: 'Free' },
      { name: 'Bone Grafting (if needed)', price: '$500–$1,500' },
      { name: 'Implant-Supported Bridge', price: 'From $6,000' },
      { name: 'All-on-4 Full Arch', price: 'From $20,000/arch' },
      { name: 'Financing available through CareCredit', price: '0% options' },
    ],
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    desc: 'Straighter teeth for teens and adults with Invisalign and traditional braces.',
    range: 'From $2,500',
    items: [
      { name: 'Invisalign (comprehensive)', price: '$4,500–$6,500' },
      { name: 'Invisalign Lite', price: '$2,500–$3,500' },
      { name: 'Traditional Braces', price: '$4,000–$5,500' },
      { name: 'Retainers (after treatment)', price: '$250–$400' },
      { name: 'Free Orthodontic Consultation', price: 'Free' },
    ],
  },
];

export default function ClarityDentalServices() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: NAVY }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: SKY }} />
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6 px-5 py-2"
          style={{
            fontFamily: 'var(--font-body)',
            color: SKY,
            border: `1px solid ${SKY}`,
            opacity: 0.85,
          }}
        >
          Services &amp; Fees
        </div>
        <h1
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Dental Services
        </h1>
        <p
          className="max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '0.95rem',
          }}
        >
          General, cosmetic, restorative, implants, and orthodontics. Accepting most insurance. CareCredit and in-house financing available.
        </p>
      </section>

      {/* Services Cards */}
      <section style={{ backgroundColor: ICE }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-6">
          {SERVICES.map(({ icon: Icon, title, desc, range, items }, i) => (
            <div key={i} className="bg-white overflow-hidden">
              {/* Card header — NAVY */}
              <div
                className="flex flex-col md:flex-row md:items-center gap-4 px-8 py-7"
                style={{ backgroundColor: NAVY }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(2, 132, 199, 0.2)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: SKY }} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-2xl text-white leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-sm mt-1"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {desc}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: SKY }}
                  >
                    Price Range
                  </div>
                  <div
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {range}
                  </div>
                </div>
              </div>

              {/* Card body — item list */}
              <div className="px-8 py-6">
                <div className="grid md:grid-cols-2 gap-x-12">
                  {items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-3"
                      style={{
                        borderBottom: '1px solid #EFF6FF',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: SKY }} />
                        <span
                          className="text-sm"
                          style={{ fontFamily: 'var(--font-body)', color: '#374151' }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span
                        className="text-sm font-bold ml-4 shrink-0"
                        style={{ fontFamily: 'var(--font-body)', color: SKY }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <div
            className="bg-white p-6 border-l-4"
            style={{ borderLeftColor: SKY }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: '#6B7280' }}
            >
              Prices listed are estimates and may vary based on individual patient needs and insurance coverage. A treatment plan with final pricing is provided after your exam. We accept most PPO insurance plans. Ask about our in-house savings plan for uninsured patients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: SKY }}
        className="py-20 px-6 text-center"
      >
        <h2
          className="text-3xl md:text-4xl text-white mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          New patients welcome. Same-week appointments available.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] px-12 py-5 transition-opacity hover:opacity-90"
          style={{
            fontFamily: 'var(--font-body)',
            backgroundColor: NAVY,
            color: WHITE,
          }}
        >
          Book Your Appointment
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
