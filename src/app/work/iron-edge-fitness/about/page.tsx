import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Dumbbell, Check, Zap } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';
const GUNMETAL = '#1C1C1E';
const STEEL = '#6B7280';
const WHITE = '#FFFFFF';

const TEAM = [
  {
    name: 'Marcus Cole',
    role: 'Owner & Head Coach',
    certs: 'CSCS · NSCA · 15 Years Coaching',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
    bio: "Marcus competed in powerlifting for a decade before finding his calling as a coach. He founded Iron Edge in 2014 with a vision: elite-level training for everyday people who are serious about results. He has coached over 200 athletes to competition podiums.",
  },
  {
    name: 'Tanya Reeves',
    role: 'Nutrition & Wellness Coach',
    certs: 'Precision Nutrition · NASM-CPT',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: "Tanya bridges the gap between training and lifestyle. Her evidence-based approach to nutrition coaching has helped hundreds of Iron Edge members break through plateaus and sustain long-term results. No fads. No gimmicks.",
  },
  {
    name: 'Daniel Park',
    role: 'Group Fitness Director',
    certs: 'ACE-CPT · HIIT Specialist',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: "Daniel brings infectious energy to every class he leads. As Group Fitness Director, he develops the class curriculum, trains new instructors, and personally coaches 12 classes per week. Energy not optional.",
  },
];

const VALUES = [
  { title: 'No Judgment, Ever', desc: 'Whether you are 65 and getting off the couch for the first time, or training for your third powerlifting meet — you belong here.' },
  { title: 'Results-Driven', desc: 'We track. We measure. We adjust. Every program is built around your specific goals and what the data says is working.' },
  { title: 'Community First', desc: 'Iron Edge members do not ghost each other. The community accountability effect is real — and it keeps people coming back.' },
  { title: 'Evidence-Based', desc: 'No bro-science. No fad diets. Every training method and nutrition recommendation is grounded in peer-reviewed research.' },
];

const MILESTONES = [
  { year: '2013', title: 'Garage Beginnings', desc: 'Marcus trains his first 8 clients out of his 600 sq ft garage. Waitlist forms within 6 months.' },
  { year: '2014', title: 'Iron Edge Opens', desc: 'First commercial location — 2,000 sq ft on NW Glisan. Filled to capacity in 90 days.' },
  { year: '2017', title: 'New Home', desc: 'Move to the current 15,000 sq ft facility at 418 NW Davis. Recovery room and cold plunge added.' },
  { year: '2024', title: 'Today', desc: '2,400+ members. 22 coaches. 30+ weekly classes. Still the same mission: serious results for serious people.' },
];

export default function IronEdgeAbout() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6" style={{ backgroundColor: BLACK }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Iron Edge gym floor"
            fill
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* ORANGE eyebrow line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em]"
              style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
            >
              Our Story
            </div>
            <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
          </div>
          <h1
            className="text-6xl md:text-8xl text-white uppercase leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Built for People Who Are Serious<span style={{ color: ORANGE }}>.</span>
          </h1>
          <p
            className="text-white/45 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Founded in 2014 by competitive powerlifter Marcus Cole, Iron Edge is Portland's premier strength and conditioning gym.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
              <div
                className="text-[10px] font-black uppercase tracking-[0.5em]"
                style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
              >
                How We Started
              </div>
            </div>
            <h2
              className="text-4xl md:text-5xl text-white uppercase mb-6 leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              From a 600 sq ft Garage to 15,000 sq ft<span style={{ color: ORANGE }}>.</span>
            </h2>
            <p
              className="leading-relaxed mb-4 text-sm"
              style={{ color: `${WHITE}70`, fontFamily: 'var(--font-body)' }}
            >
              Marcus started training clients out of his garage in 2013. Within a year he had a waitlist. He leased a 2,000 sq ft space, filled it in six months, and moved to the current 15,000 sq ft facility in 2017.
            </p>
            <p
              className="leading-relaxed mb-8 text-sm"
              style={{ color: `${WHITE}70`, fontFamily: 'var(--font-body)' }}
            >
              Today, Iron Edge has 2,400+ members, 22 certified coaches, and 30+ classes per week. The waitlist is still a thing — but we always find room for people who are serious about changing their lives.
            </p>
            <div className="space-y-2.5">
              {[
                '22 certified coaches on staff',
                '15,000 sq ft state-of-the-art facility',
                'Recovery room, sauna & cold plunge',
                'Free 7-day trial for all new members',
                'Online coaching available globally',
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: `${WHITE}55`, fontFamily: 'var(--font-body)' }}
                >
                  <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Iron Edge gym"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0" style={{ boxShadow: `inset 0 0 0 2px ${ORANGE}30` }} />
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section style={{ backgroundColor: BLACK }} className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
              <div
                className="text-[10px] font-black uppercase tracking-[0.5em]"
                style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
              >
                Milestones
              </div>
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
            </div>
            <h2
              className="text-4xl md:text-5xl text-white uppercase leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              10 Years of Progress<span style={{ color: ORANGE }}>.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className="p-6 border-t-2"
                style={{ backgroundColor: GUNMETAL, borderTopColor: ORANGE }}
              >
                <div
                  className="text-3xl font-black mb-3"
                  style={{ color: ORANGE, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >
                  {m.year}
                </div>
                <div
                  className="font-black text-white uppercase text-sm mb-2 tracking-wide"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >
                  {m.title}
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: `${WHITE}40`, fontFamily: 'var(--font-body)' }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: GUNMETAL }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
              <div
                className="text-[10px] font-black uppercase tracking-[0.5em]"
                style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
              >
                The Coaching Team
              </div>
              <div className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
            </div>
            <h2
              className="text-4xl md:text-5xl text-white uppercase leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Your Coaches<span style={{ color: ORANGE }}>.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TEAM.map((m, i) => (
              <div
                key={i}
                className="overflow-hidden group"
                style={{ backgroundColor: BLACK }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 border-b-2" style={{ borderBottomColor: ORANGE }}>
                    <div
                      className="font-black text-white text-lg uppercase leading-tight"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.01em' }}
                    >
                      {m.name}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div
                    className="text-[9px] font-black uppercase tracking-widest mb-1"
                    style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
                  >
                    {m.certs}
                  </div>
                  <div
                    className="text-xs mb-3"
                    style={{ color: `${WHITE}40`, fontFamily: 'var(--font-body)' }}
                  >
                    {m.role}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: `${WHITE}50`, fontFamily: 'var(--font-body)' }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: BLACK }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl text-white uppercase leading-none"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Our Values<span style={{ color: ORANGE }}>.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="p-8 border-l-2"
                style={{ backgroundColor: GUNMETAL, borderLeftColor: ORANGE }}
              >
                <h3
                  className="font-black text-white uppercase mb-3 tracking-wide"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.01em' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: `${WHITE}50`, fontFamily: 'var(--font-body)' }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ORANGE }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl uppercase mb-6 leading-none"
          style={{ color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
        >
          7 days free. No credit card. Just results.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[11px] px-12 py-4"
          style={{ backgroundColor: BLACK, color: WHITE, fontFamily: 'var(--font-body)' }}
        >
          Claim Free Trial <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
