import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Check, Leaf } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const TEAM = [
  { name: 'Casey Morgan', role: 'Owner & Master Groomer', certs: 'Fear Free Certified · 12 Years Experience', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', bio: "Casey opened Paws & Pamper in 2018 after years of watching well-intentioned but anxiety-inducing grooming experiences. She built this studio on a single principle: every dog deserves to feel safe." },
  { name: 'Jordan Lee', role: 'Groomer & Bather', certs: 'NDGAA Certified · Anxious Dog Specialist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', bio: "Jordan has a special gift with anxious and reactive dogs. Clients with dogs that have been turned away from other salons often find that Jordan can win them over in ways no one else has." },
];

const VALUES = [
  { icon: Heart, title: 'Fear-Free First', desc: 'Every technique we use is rooted in fear-free handling. We read canine body language constantly and adjust our pace accordingly.' },
  { icon: Leaf, title: 'Natural Products Only', desc: 'All shampoos, conditioners, and treatments are all-natural, non-toxic, and free from sulfates, parabens, and artificial fragrances.' },
  { icon: Check, title: 'One Dog at a Time', desc: 'We groom one dog at a time. No distractions, no stress triggers from other dogs — just focused, calm attention.' },
];

export default function PawsAndPamperAbout() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <Heart className="w-8 h-8 mx-auto mb-5 text-teal-400" strokeWidth={1.5} />
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 text-teal-400">Our Story</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Built on Love for Dogs</h1>
        <p className="text-white/45 max-w-xl mx-auto leading-relaxed">Paws & Pamper opened in Seattle in 2018 with a simple mission: create a grooming studio where every dog is treated with the patience, gentleness, and love they deserve.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>About Casey</div>
            <h2 className="text-3xl font-bold mb-5" style={{ color: DARK }}>A studio built for the ones who dread the groomer.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Casey Morgan grew up rescuing dogs with anxiety, trauma histories, and behavioral quirks that most groomers refused to work with. She got certified in Fear Free handling, studied animal behavior, and spent years building techniques that make even the most reactive dog feel safe.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Paws & Pamper was designed from the ground up around the dog experience: natural light, calming music, no cage drying, no overcrowding, and a team that goes at the dog's pace — not the schedule's.</p>
            <div className="space-y-2">
              {["Fear Free Certified grooming studio", "No cage drying — air and hand dry only", "All-natural, non-toxic products only", "One dog at a time policy", "Text photo updates during every appointment"].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: TEAL }} />{p}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover object-center" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 text-teal-400">Meet the Team</div><h2 className="text-4xl font-bold text-white">Your Dog's Groomers</h2></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10">
                <div className="relative h-60">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1 text-teal-400">{m.certs}</div>
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
          <div className="text-center mb-10"><h2 className="text-3xl font-bold" style={{ color: DARK }}>What We Stand For</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <Icon className="w-6 h-6 mx-auto mb-4" style={{ color: TEAL }} strokeWidth={1.5} />
                <h3 className="font-bold text-sm mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: TEAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Your dog deserves a groomer they actually like.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ color: DARK }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
