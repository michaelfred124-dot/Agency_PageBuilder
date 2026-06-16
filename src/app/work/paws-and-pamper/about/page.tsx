import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Check, Leaf, Shield, Star } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WARM = '#FEF3C7';
const WHITE = '#FFFFFF';

const TEAM = [
  {
    name: 'Casey Morgan',
    role: 'Owner & Master Groomer',
    certs: 'Fear Free Certified · 12 Years Experience',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: "Casey opened Paws & Pamper in 2018 after years of watching well-intentioned but anxiety-inducing grooming experiences. She built this studio on a single principle: every dog deserves to feel safe. Fear Free certified since 2016, Casey has worked with hundreds of anxious and reactive dogs that other salons turned away.",
  },
  {
    name: 'Jordan Lee',
    role: 'Groomer & Bather',
    certs: 'NDGAA Certified · Anxious Dog Specialist',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: "Jordan has a special gift with anxious and reactive dogs. Clients with dogs that have been turned away from other salons often find that Jordan can win them over in ways no one else has. Jordan's calm, patient approach — and her deep knowledge of canine body language — make every appointment feel manageable for even the most nervous pups.",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: 'Fear-Free First',
    desc: 'Every technique we use is rooted in fear-free handling. We read canine body language constantly and adjust our pace to what each dog needs — not what the schedule demands.',
  },
  {
    icon: Leaf,
    title: 'Natural Products Only',
    desc: 'All shampoos, conditioners, and treatments are all-natural, non-toxic, and free from sulfates, parabens, and artificial fragrances. Safe for sensitive skin and puppies.',
  },
  {
    icon: Shield,
    title: 'One Dog at a Time',
    desc: 'We groom one dog at a time. No distractions, no stress triggers from other dogs — just focused, calm, individualized attention from start to finish.',
  },
  {
    icon: Star,
    title: 'No Cage Drying',
    desc: 'We never use cage dryers. Every dog is hand dried or air dried with low-heat tools. It takes longer, but your dog\'s comfort and safety is always worth the extra time.',
  },
];

const CERTIFICATIONS = [
  'Fear Free Certified grooming studio',
  'No cage drying — air and hand dry only',
  'All-natural, non-toxic products only',
  'One dog at a time policy',
  'Text photo updates during every appointment',
  'NDGAA Certified groomers on staff',
];

export default function PawsAndPamperAbout() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${FOREST} 0%, ${TEAL} 100%)` }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Heart className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Story
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Built on Love<br />for Dogs
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed text-base">
            Paws & Pamper opened in Seattle in 2018 with a simple mission: create a grooming studio where every
            dog is treated with the patience, gentleness, and love they deserve.
          </p>
        </div>
      </section>

      {/* About Casey — Origin Story */}
      <section style={{ backgroundColor: SKY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
              style={{ color: TEAL, fontFamily: 'var(--font-display)' }}
            >
              Why We're Different
            </div>
            <h2
              className="text-4xl mb-6 leading-tight"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              A studio built for the ones who dread the groomer.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Casey Morgan grew up rescuing dogs with anxiety, trauma histories, and behavioral quirks that most
              groomers refused to work with. She got certified in Fear Free handling, studied animal behavior,
              and spent years building techniques that make even the most reactive dog feel safe.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Paws & Pamper was designed from the ground up around the dog experience: natural light, calming
              music, no cage drying, no overcrowding, and a team that goes at the dog's pace — not the
              schedule's. We never rush. We never restrain unnecessarily. We just care.
            </p>
            <div className="space-y-3">
              {CERTIFICATIONS.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 shrink-0" style={{ color: TEAL }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
              alt="Happy dog at Paws & Pamper"
              fill
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Fear-Free badge */}
            <div
              className="absolute top-5 right-5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: WARM, color: FOREST, fontFamily: 'var(--font-display)' }}
            >
              Fear-Free Certified
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: WHITE }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: TEAL, fontFamily: 'var(--font-display)' }}
            >
              Meet the Team
            </div>
            <h2
              className="text-4xl"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Your Dog's Groomers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM.map((m, i) => (
              <div key={i} style={{ backgroundColor: SKY }} className="overflow-hidden rounded-xl">
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
                    style={{ color: TEAL, fontFamily: 'var(--font-display)' }}
                  >
                    {m.certs}
                  </div>
                  <div
                    className="text-lg mb-1"
                    style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    {m.name}
                  </div>
                  <div className="text-xs text-gray-400 mb-4 font-semibold tracking-wide">{m.role}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ backgroundColor: WHITE }} className="p-7 rounded-xl text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: SKY }}
                >
                  <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-sm mb-2"
                  style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  {title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fear-Free Certification Story */}
      <section style={{ backgroundColor: WARM }} className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: TEAL, fontFamily: 'var(--font-display)' }}
          >
            Our Certification
          </div>
          <h2
            className="text-3xl mb-6"
            style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            What does Fear-Free mean?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fear Free is a certification program developed by veterinarians, behaviorists, and trainers to
            reduce fear, anxiety, and stress in pets during veterinary and grooming visits. It's not just a
            badge — it's a complete approach to handling, environment, and care.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At Paws & Pamper, every grooming decision — from how we hold your dog to the music we play in the
            studio — is made with your pup's emotional experience in mind. Because a happy dog makes for a
            better groom and a healthier life.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Your dog deserves a groomer they actually like.
        </h2>
        <p className="text-white/70 mb-10 max-w-md mx-auto">
          Fear-free certified. Natural products. One dog at a time. New clients welcome this week.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full"
          style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
        >
          Book an Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
