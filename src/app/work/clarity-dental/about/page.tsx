import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smile, Shield, Check, Heart } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const BLUE = '#0284C7';
const LIGHT = '#F0F8FF';

const TEAM = [
  { name: 'Dr. Anita Patel, DDS', role: 'Lead Dentist & Founder', specialty: 'General · Cosmetic · Implants', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop', bio: "Dr. Patel earned her DDS from the University of Colorado and completed advanced training in implantology and cosmetic dentistry. She founded Clarity in 2016 to create a practice where patients actually look forward to their appointments." },
  { name: 'Dr. Marcus Kim, DDS', role: 'Associate Dentist', specialty: 'Orthodontics · Invisalign', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop', bio: "Dr. Kim specializes in orthodontics and is a certified Invisalign provider. He has straightened over 800 smiles in the Denver area and is known for his meticulous attention to bite function and aesthetics." },
  { name: 'Sarah Lopez, RDH', role: 'Lead Hygienist', specialty: 'Periodontal Health · Patient Education', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Sarah has been with Clarity since day one. Her gentle touch and thorough patient education have made her our most-requested hygienist — and the reason many anxious patients come back year after year." },
];

const VALUES = [
  { icon: Heart, title: 'Comfort First', desc: 'We invest in comfort: massage chairs, noise-canceling headphones, sedation options, and a team trained in anxiety management.' },
  { icon: Shield, title: 'No Surprise Billing', desc: 'We provide a written treatment plan with all costs before we begin. You will never receive a bill you were not expecting.' },
  { icon: Smile, title: 'Education, Not Pressure', desc: 'We show you what we see and explain your options. We never upsell unnecessary treatments.' },
];

export default function ClarityDentalAbout() {
  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>About Clarity Dental</div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-5">Dentistry That Puts You at Ease</h1>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">Founded in 2016 in Denver, Clarity Dental was built around a belief that dental care should be comfortable, transparent, and genuinely patient-centered.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Our Story</div>
            <h2 className="text-3xl font-serif mb-5" style={{ color: NAVY }}>A practice built on trust.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Dr. Anita Patel grew up hearing from friends and family that they dreaded the dentist. When she opened Clarity, she committed to changing that. The practice was designed from the ground up to be calming, welcoming, and free from the high-pressure tactics common in corporate dental chains.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Eight years later, Clarity serves over 3,000 active patients in the Denver area. More than 60% of new patients come from word-of-mouth referrals — the clearest sign of trust we can imagine.</p>
            <div className="space-y-2">
              {["Accepting new patients", "Most PPO insurance plans accepted", "CareCredit & in-house financing", "Evening & Saturday appointments", "Digital X-rays & 3D imaging"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: BLUE }} />{item}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Our Team</div><h2 className="text-4xl font-serif text-white">Meet Your Care Team</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10">
                <div className="relative h-60">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: BLUE }}>{m.specialty}</div>
                  <div className="font-bold text-white mb-1">{m.name}</div>
                  <div className="text-xs text-white/35 mb-3">{m.role}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-serif" style={{ color: NAVY }}>Our Commitments</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <Icon className="w-6 h-6 mx-auto mb-4" style={{ color: BLUE }} strokeWidth={1.5} />
                <h3 className="font-bold text-sm mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: BLUE }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">New patients are always welcome here.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ color: NAVY }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
