import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors, Leaf, Heart } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';
const WARM_WHITE = '#FAF7F4';
const PLUM = '#3D1F2C';

const TEAM = [
  { name: 'Maria Solis', role: 'Owner & Senior Colorist', specialty: 'Balayage · Color Correction · Keratin', img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop', bio: "Maria opened Atelier in 2016 after training in Paris and New York. Her signature style blends technical precision with a deeply personal approach — every color story is as unique as the client wearing it." },
  { name: 'Priya Sharma', role: 'Senior Stylist', specialty: 'Precision Cuts · Textured Hair', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Priya specializes in textured and curly hair, having studied the Ouidad method and Lorraine Massey's Curly Girl philosophy. She believes every curl pattern is a canvas." },
  { name: 'Jamie Cole', role: 'Bridal & Events Specialist', specialty: 'Updo · Bridal · Extensions', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', bio: "Jamie has styled over 200 brides in the Austin area. Her calm, meticulous approach makes wedding-day mornings feel effortless, and her results are consistently stunning." },
];

const VALUES = [
  { icon: Leaf, title: 'Sustainable Products', desc: 'We only carry brands that are sulfate-free, cruelty-free, and sustainably packaged. Beautiful hair should not come at the planet\'s expense.' },
  { icon: Heart, title: 'Client-First', desc: 'Every appointment begins with a thorough consultation. We listen before we touch a single strand.' },
  { icon: Scissors, title: 'Continuing Education', desc: 'Every stylist at Atelier completes at least 40 hours of education annually — new techniques, trends, and treatments.' },
];

export default function AtelierAbout() {
  return (
    <>
      {/* HERO — editorial split: text panel + photo */}
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 md:py-28" style={{ backgroundColor: WARM_WHITE }}>
          <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-8" style={{ color: ROSE }}>Our Story</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl leading-none mb-7"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, color: CHARCOAL, letterSpacing: '-0.02em' }}
          >
            Art. Care.<br />Community.
          </h1>
          <div className="w-12 h-px mb-7" style={{ backgroundColor: ROSE }} />
          <p className="text-sm leading-relaxed max-w-md" style={{ color: CHARCOAL, opacity: 0.55, fontWeight: 300 }}>
            Atelier Hair Studio opened in Austin in 2016 with a vision for what a salon could be — a space where artistry, sustainability, and genuine care converge.
          </p>
        </div>
        <div className="relative overflow-hidden order-first md:order-last" style={{ minHeight: '40vh' }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
            alt="Inside Atelier Hair Studio"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section style={{ backgroundColor: BLUSH }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop" alt="Maria Solis at work" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-5" style={{ color: ROSE }}>About Maria</p>
            <h2 className="text-4xl md:text-5xl leading-none mb-7" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}>
              From Paris to Austin,<br />with love.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: CHARCOAL, opacity: 0.6 }}>
              <p>Maria Solis fell in love with hair color as a teenager in Mexico City. She studied at the Jacques Dessange Academy in Paris, worked alongside top colorists in New York, and then came home to Austin to build something of her own.</p>
              <p>Atelier was born out of a frustration with salons that treated clients as transactions. She wanted a space where every person who sits in the chair feels truly seen — and leaves feeling like the best version of themselves.</p>
              <p>Today, Atelier serves Austin&apos;s vibrant community with a team of four stylists who each bring their own mastery and perspective to the studio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: ROSE }}>The Team</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}>Meet Your Stylists</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div key={i} className="group">
                <div className="relative h-80 mb-6 overflow-hidden">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: ROSE }}>{m.specialty}</div>
                <h3 className="text-2xl mb-1 leading-none" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}>{m.name}</h3>
                <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: CHARCOAL, opacity: 0.4 }}>{m.role}</div>
                <p className="text-sm leading-relaxed" style={{ color: CHARCOAL, opacity: 0.55 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES — dark plum band */}
      <section style={{ backgroundColor: PLUM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: ROSE }}>Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl text-white" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>What We Believe</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="px-8 py-8 lg:py-2 first:pl-0 last:pr-0">
                <Icon className="w-5 h-5 mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
                <h3 className="text-2xl mb-3 leading-none" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'white' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 text-center">
        <Scissors className="w-7 h-7 mx-auto mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
        <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL }}>
          New clients welcome.<br />Book your consultation.
        </h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-[10px] px-10 py-4 transition-transform duration-300 hover:-translate-y-0.5" style={{ backgroundColor: CHARCOAL }}>
          Book Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
