import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Award, TrendingUp, Users } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';
const SAND = '#E8E0D0';
const WHITE = '#FFFFFF';

const TEAM = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Principal Broker',
    specialty: 'Buyer Rep · Luxury Listings',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Sarah founded Meridian in 2011 after a decade as a top producer at a national brokerage. Her philosophy: clients make better decisions when they are fully informed and never pressured.',
  },
  {
    name: 'Tom Reeves',
    role: 'Senior Agent',
    specialty: 'NW Portland · Investment Properties',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Tom specializes in Northwest Portland and investment property acquisitions. His market knowledge and negotiation skill consistently result in above-asking sales and below-asking purchases.',
  },
  {
    name: 'Aisha Johnson',
    role: 'Property Manager',
    specialty: 'Portfolio Management · Tenant Relations',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Aisha manages over 85 residential units in the Portland metro. Landlords trust her to protect their investments; tenants appreciate her responsiveness and professionalism.',
  },
];

const AWARDS = [
  'Portland Business Journal Top Agent 2022 & 2023',
  'Certified Residential Specialist (CRS)',
  "Accredited Buyer's Representative (ABR)",
  'Equal Housing Opportunity advocate',
  'Portland Association of Realtors member',
];

const STATS = [
  { value: '13+', label: 'Years in Portland' },
  { value: '850+', label: 'Transactions Closed' },
  { value: '$290M+', label: 'Total Volume' },
  { value: '4.9★', label: '240+ Reviews' },
];

export default function MeridianAbout() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: SLATE }} className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: FOREST }} />
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
          >
            About Meridian Properties
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Portland Real Estate<br />with Integrity
          </h1>
          <p className="text-white/55 max-w-2xl leading-relaxed text-base">
            Meridian Properties has helped Portland families buy, sell, and invest in real estate for over 13 years.
            We are a small, expert team with big results — and we still answer our phones.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: FOREST }} className="py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                {s.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop"
              alt="Meridian Properties office"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: `linear-gradient(to top, ${SLATE}ee, transparent)` }}
            >
              <div
                className="text-white text-sm font-bold"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Est. 2011 · NW Portland
              </div>
            </div>
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
              style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
            >
              Our Story
            </div>
            <h2
              className="text-4xl mb-6"
              style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Boutique service.<br />Real results.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Sarah Chen started Meridian with a frustration: large brokerages shuffled clients between agents,
              rushed transactions, and prioritized volume over outcomes. She wanted to build something different —
              a small, elite team where every client gets a senior agent's attention from start to finish.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Thirteen years later, we have closed over 850 transactions totaling more than $290M in Portland metro
              real estate. We are still a boutique team. We still answer our phones.
            </p>
            <div className="space-y-3">
              {AWARDS.map((a, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section style={{ backgroundColor: SAND }} className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="w-12 h-0.5 mx-auto mb-8"
            style={{ backgroundColor: FOREST }}
          />
          <blockquote
            className="text-2xl md:text-3xl leading-relaxed mb-8"
            style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            "Real estate is the largest financial decision most families will ever make.
            Our job is to make sure they make it with complete information, zero pressure,
            and an expert in their corner."
          </blockquote>
          <div className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>
            — Sarah Chen, Founder
          </div>
          <div
            className="w-12 h-0.5 mx-auto mt-8"
            style={{ backgroundColor: FOREST }}
          />
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: SLATE }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
            >
              Our Team
            </div>
            <h2
              className="text-4xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              The People Behind the Results
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-7">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
                  >
                    {m.specialty}
                  </div>
                  <div
                    className="text-white text-base mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    {m.name}
                  </div>
                  <div className="text-[11px] text-white/35 mb-4 font-medium tracking-wide">{m.role}</div>
                  <p className="text-white/50 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Meridian */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl"
              style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Why Portland Chooses Meridian
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Senior Agent, Every Time',
                desc: 'You will never be handed off to a junior agent or assistant. Every Meridian client works directly with an experienced senior broker from first call to closing.',
              },
              {
                icon: TrendingUp,
                title: 'Data-Driven Strategy',
                desc: 'We price using hyper-local comps and market trend data. Our sellers average 101.4% of list price. Our buyers win competitive offers without overpaying.',
              },
              {
                icon: Award,
                title: 'Trusted for 13 Years',
                desc: 'Over 70% of our business comes from repeat clients and referrals. In a city built on relationships, our reputation is our most valuable asset.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ backgroundColor: WHITE }} className="p-8">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ backgroundColor: FOREST }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-base mb-3"
                  style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Ready to work together?
        </h2>
        <p className="text-white/60 mb-10 max-w-md mx-auto">
          Free consultation. No obligation. Just honest real estate guidance from Portland's most trusted boutique team.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4"
          style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
        >
          Schedule Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
