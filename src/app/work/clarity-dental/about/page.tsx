import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smile, Shield, Check, Heart } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const SKY = '#0284C7';
const ICE = '#F0F9FF';
const MINT = '#DCFCE7';
const WHITE = '#FFFFFF';

const TEAM = [
  {
    name: 'Dr. Anita Patel, DDS',
    role: 'Lead Dentist & Founder',
    specialty: 'General · Cosmetic · Implants',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
    bio: "Dr. Patel earned her DDS from the University of Colorado and completed advanced training in implantology and cosmetic dentistry. She founded Clarity in 2016 to create a practice where patients actually look forward to their appointments.",
  },
  {
    name: 'Dr. Marcus Kim, DDS',
    role: 'Associate Dentist',
    specialty: 'Orthodontics · Invisalign',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop',
    bio: "Dr. Kim specializes in orthodontics and is a certified Invisalign provider. He has straightened over 800 smiles in the Denver area and is known for his meticulous attention to bite function and aesthetics.",
  },
  {
    name: 'Sarah Lopez, RDH',
    role: 'Lead Hygienist',
    specialty: 'Periodontal Health · Patient Education',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: "Sarah has been with Clarity since day one. Her gentle touch and thorough patient education have made her our most-requested hygienist — and the reason many anxious patients come back year after year.",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: 'Comfort First',
    desc: 'We invest in comfort: massage chairs, noise-canceling headphones, sedation options, and a team trained in anxiety management.',
  },
  {
    icon: Shield,
    title: 'No Surprise Billing',
    desc: 'We provide a written treatment plan with all costs before we begin. You will never receive a bill you were not expecting.',
  },
  {
    icon: Smile,
    title: 'Education, Not Pressure',
    desc: 'We show you what we see and explain your options. We never upsell unnecessary treatments.',
  },
];

export default function ClarityDentalAbout() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: NAVY }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        {/* SKY accent bar at top */}
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
          About Clarity Dental
        </div>
        <h1
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Dentistry That Puts<br />You at Ease
        </h1>
        <p
          className="max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '0.95rem',
          }}
        >
          Founded in 2016 in Denver, Clarity Dental was built around a belief that dental care should be comfortable, transparent, and genuinely patient-centered.
        </p>
      </section>

      {/* Our Story */}
      <section style={{ backgroundColor: ICE }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: SKY }}
            >
              Our Story
            </div>
            <h2
              className="text-4xl mb-7 leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              A practice built on trust.
            </h2>
            <p
              className="leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)', color: '#4B5563', fontSize: '0.95rem' }}
            >
              Dr. Anita Patel grew up hearing from friends and family that they dreaded the dentist. When she opened Clarity, she committed to changing that. The practice was designed from the ground up to be calming, welcoming, and free from the high-pressure tactics common in corporate dental chains.
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)', color: '#4B5563', fontSize: '0.95rem' }}
            >
              Eight years later, Clarity serves over 3,000 active patients in the Denver area. More than 60% of new patients come from word-of-mouth referrals — the clearest sign of trust we can imagine.
            </p>

            <div className="space-y-3">
              {[
                'Accepting new patients',
                'Most PPO insurance plans accepted',
                'CareCredit & in-house financing',
                'Evening & Saturday appointments',
                'Digital X-rays & 3D imaging',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: SKY }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: '#374151' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                alt="Clarity Dental practice interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats overlay */}
            <div
              className="absolute -bottom-6 -left-6 px-7 py-5"
              style={{ backgroundColor: NAVY }}
            >
              <div
                className="text-4xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                3,000+
              </div>
              <div
                className="text-[10px] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: SKY }}
              >
                Active Patients
              </div>
            </div>
            <div
              className="absolute -top-6 -right-6 px-7 py-5"
              style={{ backgroundColor: SKY }}
            >
              <div
                className="text-4xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                8 Yrs
              </div>
              <div
                className="text-[10px] uppercase tracking-widest text-white/75"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Serving Denver
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: SKY }}
            >
              Our Team
            </div>
            <h2
              className="text-5xl text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Meet Your Care Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div key={i} className="group">
                {/* Photo */}
                <div className="relative h-72 mb-0 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* SKY top border accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: SKY }}
                  />
                </div>

                {/* Info */}
                <div
                  className="p-7"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderTop: 'none' }}
                >
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: SKY }}
                  >
                    {m.specialty}
                  </div>
                  <div
                    className="text-lg text-white mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {m.name}
                  </div>
                  <div
                    className="text-xs mb-4"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                  >
                    {m.role}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Commitments */}
      <section style={{ backgroundColor: ICE }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: SKY }}
            >
              Our Promise
            </div>
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Our Commitments to You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-8 relative overflow-hidden group">
                {/* accent corner */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: SKY }}
                />
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ backgroundColor: ICE }}
                >
                  <Icon className="w-6 h-6" style={{ color: SKY }} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: NAVY }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: '#6B7280' }}
                >
                  {desc}
                </p>
              </div>
            ))}
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
          New patients are always welcome here.
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
          Book Appointment
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
