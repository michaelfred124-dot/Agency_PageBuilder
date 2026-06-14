import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors, Leaf, Heart } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

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
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Our Story</div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-5">Art. Care. Community.</h1>
        <p className="text-white/45 max-w-xl mx-auto leading-relaxed">Atelier Hair Studio opened in Austin in 2016 with a vision for what a salon could be — a space where artistry, sustainability, and genuine care converge.</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>About Maria</div>
            <h2 className="text-3xl font-serif italic mb-5" style={{ color: CHARCOAL }}>From Paris to Austin, with love.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Maria Solis fell in love with hair color as a teenager in Mexico City. She studied at the Jacques Dessange Academy in Paris, worked alongside top colorists in New York, and then came home to Austin to build something of her own.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Atelier was born out of a frustration with salons that treated clients as transactions. She wanted a space where every person who sits in the chair feels truly seen — and leaves feeling like the best version of themselves.</p>
            <p className="text-gray-500 leading-relaxed">Today, Atelier serves Austin's vibrant community with a team of four stylists who each bring their own mastery and perspective to the studio.</p>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>The Team</div><h2 className="text-4xl font-serif italic" style={{ color: CHARCOAL }}>Meet Your Stylists</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="text-center">
                <div className="relative h-72 mb-5 overflow-hidden">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: ROSE }}>{m.specialty}</div>
                <div className="font-bold text-base mb-1" style={{ color: CHARCOAL }}>{m.name}</div>
                <div className="text-xs text-gray-400 mb-3">{m.role}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl font-serif italic" style={{ color: CHARCOAL }}>What We Believe</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <Icon className="w-6 h-6 mx-auto mb-4" style={{ color: ROSE }} strokeWidth={1.5} />
                <h3 className="font-bold text-sm mb-2" style={{ color: CHARCOAL }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">New clients welcome. Book your consultation.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: ROSE }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
