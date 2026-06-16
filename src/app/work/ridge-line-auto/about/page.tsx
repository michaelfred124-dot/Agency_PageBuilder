import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Shield, Award, Clock } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';
const SILVER = '#8C8C8C';
const CONCRETE = '#F5F5F5';

const TEAM = [
  {
    name: 'Rick Valdez',
    role: 'Owner & Lead Technician',
    certs: 'ASE Master Certified · 24 Years Experience',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: "Rick opened Ridge Line in 2006 after spending years watching customers get overcharged at dealerships. His philosophy is simple: treat every car like it is your own mother's.",
  },
  {
    name: 'Angela Torres',
    role: 'Service Advisor',
    certs: 'ASE Certified · Customer Relations',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Angela translates mechanic-speak into plain English. She handles estimates, scheduling, and makes sure every customer understands exactly what is being done to their vehicle and why.',
  },
  {
    name: 'Marcus Webb',
    role: 'Senior Technician',
    certs: 'ASE Master Certified · Transmission Specialist',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: "Marcus specializes in transmissions and electrical diagnostics. His attention to detail and diagnostic instincts have earned him a cult following among our repeat customers.",
  },
];

const PROMISES = [
  'We never perform work without your written approval first.',
  'We send digital inspection reports to your phone with photos.',
  'All repairs come with a 24-month/24,000-mile warranty.',
  'We keep loaner vehicles on hand for bigger jobs.',
  'We will match any written estimate from a local shop.',
];

const STATS = [
  { value: '2006', label: 'Founded' },
  { value: '14,000+', label: 'Vehicles Serviced' },
  { value: '4.8★', label: 'Google Rating' },
  { value: '18 Yrs', label: 'Denver Trusted' },
];

export default function RidgeLineAbout() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
            style={{ color: RED, fontFamily: 'var(--font-display)' }}
          >
            Our Story
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-5 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Built on Honesty.
            <br />
            Proven by Results.
          </h1>
          <div style={{ width: 60, height: 3, backgroundColor: RED }} className="mb-6" />
          <p
            className="text-white/50 max-w-xl text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Ridge Line Auto opened in 2006 with one goal: give Denver drivers an honest,
            high-quality alternative to overpriced dealerships. 18 years later, we are still
            the same shop — same owner, same values, same promise.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ backgroundColor: RED }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div key={i} className="py-6 px-8 text-center border-r border-white/20 last:border-r-0">
              <div
                className="text-2xl text-white mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                {value}
              </div>
              <div
                className="text-[9px] text-white/70 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Origin Story */}
      <section style={{ backgroundColor: CONCRETE }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop"
              alt="Ridge Line Auto shop interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div
              className="absolute bottom-0 left-0 px-5 py-3"
              style={{ backgroundColor: CHARCOAL }}
            >
              <div
                className="text-[9px] text-white/60 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                4821 W Colfax Ave · Denver, CO
              </div>
            </div>
          </div>
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: RED, fontFamily: 'var(--font-display)' }}
            >
              Our Approach
            </div>
            <h2
              className="text-3xl mb-5"
              style={{
                color: CHARCOAL,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              No Runarounds. Ever.
            </h2>
            <p
              className="text-gray-600 leading-relaxed mb-5 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Rick Valdez started Ridge Line after watching too many friends and family members
              get taken advantage of at other shops. He built this business on a handshake-level
              commitment: you get a straight diagnosis, a fair price, and work that lasts.
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-8 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              18 years later, we have serviced over 14,000 vehicles. Most of our business comes
              from referrals — people who trust us so much they send their parents, siblings, and
              coworkers our way.
            </p>
            <div className="space-y-3">
              {PROMISES.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <Check
                    className="w-3.5 h-3.5 shrink-0 mt-0.5"
                    style={{ color: RED }}
                  />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: RED, fontFamily: 'var(--font-display)' }}
            >
              The Team
            </div>
            <h2
              className="text-4xl text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Your Mechanics
            </h2>
            <div style={{ width: 60, height: 3, backgroundColor: RED }} className="mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderTop: `3px solid ${RED}` }}>
                <div className="relative h-56">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div
                    className="text-[9px] font-black uppercase tracking-widest mb-2"
                    style={{ color: RED, fontFamily: 'var(--font-display)' }}
                  >
                    {m.certs}
                  </div>
                  <div
                    className="text-white mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    className="text-xs mb-4"
                    style={{ color: SILVER, fontFamily: 'var(--font-body)' }}
                  >
                    {m.role}
                  </div>
                  <p
                    className="text-white/50 text-xs leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ backgroundColor: CONCRETE }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: 'ASE Certified',
              body: 'All of our technicians hold current ASE certifications. We invest in ongoing training so your car gets the benefit of up-to-date knowledge and technique.',
            },
            {
              icon: Shield,
              title: 'No Hidden Fees',
              body: 'Your written estimate is your final price. Period. We never add charges after the fact, and we never start work you did not authorize.',
            },
            {
              icon: Clock,
              title: '24/24 Warranty',
              body: 'Every repair comes backed by our 24-month/24,000-mile warranty. If something we fixed fails under normal use, we make it right — no questions asked.',
            },
          ].map(({ icon: Icon, title, body }, i) => (
            <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: CHARCOAL }}>
              <Icon className="w-6 h-6 mb-4" style={{ color: RED }} strokeWidth={1.5} />
              <h3
                className="text-base mb-3"
                style={{
                  color: CHARCOAL,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                {title}
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-16 px-6 text-center">
        <Shield className="w-8 h-8 mx-auto mb-4" style={{ color: SILVER }} strokeWidth={1} />
        <h2
          className="text-2xl text-white mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          ASE Certified. Locally Owned. 18 Years Strong.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ backgroundColor: RED, fontFamily: 'var(--font-display)' }}
        >
          Book Service <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
