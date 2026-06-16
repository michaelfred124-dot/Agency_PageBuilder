import Link from 'next/link';
import { ArrowRight, Scale, Shield, Users, Building, FileText, Check } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';
const DARK = '#0F1A33';
const WHITE = '#FFFFFF';

const PRACTICE_AREAS = [
  {
    icon: Shield,
    title: 'Personal Injury',
    tagline: 'No fees unless we win.',
    desc: 'When negligence causes harm, you deserve aggressive representation. We handle auto accidents, slip and fall, wrongful death, dog bites, and product liability cases across Colorado. Our attorneys have recovered millions for injured clients.',
    items: [
      'Auto & motorcycle accidents',
      'Slip & fall injuries',
      'Wrongful death claims',
      'Product liability',
      'Dog bites & animal attacks',
      'Premises liability',
    ],
    note: 'Contingency fee — you pay nothing unless we recover for you.',
    stats: [
      { value: '$47M+', label: 'Recovered for Clients' },
      { value: '98%', label: 'Success Rate' },
    ],
    featured: true,
  },
  {
    icon: Users,
    title: 'Family Law',
    tagline: 'Protecting what matters most.',
    desc: 'Divorce, child custody, and family matters require both legal expertise and human compassion. We guide you through Colorado family law with clarity and care, always prioritizing what is best for your family.',
    items: [
      'Divorce & legal separation',
      'Child custody & parenting plans',
      'Child & spousal support',
      'Adoption proceedings',
      'Domestic violence protection',
      'Property division',
    ],
    note: 'Free initial consultation. Flexible payment plans available.',
    stats: [
      { value: '800+', label: 'Family Cases' },
      { value: '25+', label: 'Years Experience' },
    ],
    featured: false,
  },
  {
    icon: Scale,
    title: 'Criminal Defense',
    tagline: 'Your rights. Your future. Defended.',
    desc: 'A criminal charge can change your life. Our experienced defense attorneys fight to protect your freedom and your record at every stage of the process — from arraignment through trial and appeal.',
    items: [
      'DUI / DWAI defense',
      'Drug offenses',
      'Assault & violent crimes',
      'Theft & property crimes',
      'Expungements & record sealing',
      'Federal criminal defense',
    ],
    note: 'Available 24/7 for emergency consultations.',
    stats: [
      { value: '400+', label: 'Cases Defended' },
      { value: '24/7', label: 'Emergency Line' },
    ],
    featured: false,
  },
  {
    icon: Building,
    title: 'Business Law',
    tagline: 'Protecting your business interests.',
    desc: 'From formation to dispute resolution, we give Colorado businesses the legal foundation they need to operate with confidence and protect their assets. We are trusted counsel for businesses of all sizes.',
    items: [
      'Business formation (LLC, Corp)',
      'Contract drafting & review',
      'Commercial litigation',
      'Employment disputes',
      'Mergers & acquisitions',
      'Intellectual property',
    ],
    note: 'Fixed-fee packages available for small business clients.',
    stats: [
      { value: '300+', label: 'Business Clients' },
      { value: '$0', label: 'Hidden Fees' },
    ],
    featured: false,
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    tagline: 'Secure your legacy.',
    desc: 'Protect your family and assets with a comprehensive estate plan. We draft wills, trusts, and powers of attorney tailored to your specific situation, ensuring your wishes are honored and your family is protected.',
    items: [
      'Wills & living trusts',
      'Powers of attorney',
      'Healthcare directives',
      'Estate administration',
      'Probate proceedings',
      'Trust litigation',
    ],
    note: 'Estate planning packages starting at $750.',
    stats: [
      { value: '500+', label: 'Estates Planned' },
      { value: '$750', label: 'Starting Price' },
    ],
    featured: false,
  },
  {
    icon: Shield,
    title: 'Real Estate Law',
    tagline: 'Every transaction, protected.',
    desc: 'Whether buying, selling, or facing a real estate dispute, our attorneys ensure your investment is legally sound and your interests are fully protected. We handle residential and commercial matters alike.',
    items: [
      'Purchase & sale agreements',
      'Title disputes',
      'Landlord/tenant disputes',
      'HOA issues',
      'Construction defect claims',
      'Commercial real estate',
    ],
    note: 'Flat fees for residential closings.',
    stats: [
      { value: '600+', label: 'Transactions' },
      { value: 'Flat', label: 'Fee Structure' },
    ],
    featured: false,
  },
];

export default function SterlingServices() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >Practice Areas</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >How We Can Help</h1>
        {/* Classical gold rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20" style={{ backgroundColor: GOLD }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: GOLD }} />
          <div className="h-px w-20" style={{ backgroundColor: GOLD }} />
        </div>
        <p
          className="text-white/60 max-w-2xl mx-auto leading-relaxed text-lg"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Twenty-five years of experience across personal injury, family law, criminal defense, and business law. Free consultations. No fees unless we win on injury cases.
        </p>
      </section>

      {/* Practice Areas */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {PRACTICE_AREAS.map(({ icon: Icon, title, tagline, desc, items, note, stats, featured }, i) => (
            <div
              key={i}
              className="p-10 md:p-12 grid md:grid-cols-[1fr_1.4fr] gap-10"
              style={{
                backgroundColor: featured ? NAVY : WHITE,
                outline: featured ? `none` : `1px solid #E8E4DA`,
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <h2
                    className="text-xl"
                    style={{
                      color: featured ? WHITE : NAVY,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.05em',
                    }}
                  >{title}</h2>
                </div>
                <div
                  className="text-[10px] uppercase tracking-widest mb-5"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                >{tagline}</div>
                <p
                  className="leading-relaxed mb-6"
                  style={{
                    color: featured ? 'rgba(255,255,255,0.65)' : '#4B5563',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                  }}
                >{desc}</p>
                <div
                  className="p-4 border-l-2 text-sm"
                  style={{
                    borderColor: GOLD,
                    backgroundColor: featured ? 'rgba(196,154,60,0.12)' : CREAM,
                    color: featured ? 'rgba(255,255,255,0.75)' : NAVY,
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                  }}
                >{note}</div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {stats.map(({ value, label }, j) => (
                    <div key={j}>
                      <div
                        className="text-2xl mb-0.5"
                        style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                      >{value}</div>
                      <div
                        className="text-[10px] uppercase tracking-widest"
                        style={{
                          color: featured ? 'rgba(255,255,255,0.45)' : '#9CA3AF',
                          fontFamily: 'var(--font-display)',
                        }}
                      >{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div
                  className="text-[10px] uppercase tracking-widest mb-5"
                  style={{
                    color: featured ? 'rgba(255,255,255,0.35)' : '#9CA3AF',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.2em',
                  }}
                >What We Handle</div>
                <div className="grid grid-cols-1 gap-3">
                  {items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: GOLD }}
                        strokeWidth={2}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{
                          color: featured ? 'rgba(255,255,255,0.70)' : '#374151',
                          fontFamily: 'var(--font-body)',
                        }}
                      >{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.3em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >Free Consultation</div>
        <h2
          className="text-4xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >Schedule a Consultation Today</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16" style={{ backgroundColor: GOLD + '60' }} />
          <div className="w-1 h-1 rotate-45" style={{ backgroundColor: GOLD }} />
          <div className="h-px w-16" style={{ backgroundColor: GOLD + '60' }} />
        </div>
        <p
          className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Available evenings and weekends. Direct attorney access from day one. No fees unless we win on personal injury cases.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 text-white uppercase tracking-widest text-[11px] px-12 py-5 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
        >
          Book Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
