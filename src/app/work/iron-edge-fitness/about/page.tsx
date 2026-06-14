import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Dumbbell, Check, Zap } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

const TEAM = [
  { name: 'Marcus Cole', role: 'Owner & Head Coach', certs: 'CSCS · NSCA · 15 Years Coaching', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop', bio: "Marcus competed in powerlifting for a decade before finding his calling as a coach. He founded Iron Edge in 2014 with a vision: elite-level training for everyday people who are serious about results." },
  { name: 'Tanya Reeves', role: 'Nutrition & Wellness Coach', certs: 'Precision Nutrition · NASM-CPT', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Tanya bridges the gap between training and lifestyle. Her evidence-based approach to nutrition coaching has helped hundreds of Iron Edge members break through plateaus and sustain long-term results." },
  { name: 'Daniel Park', role: 'Group Fitness Director', certs: 'ACE-CPT · HIIT Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', bio: "Daniel brings infectious energy to every class he leads. As Group Fitness Director, he develops the class curriculum, trains new instructors, and personally coaches 12 classes per week." },
];

const VALUES = [
  { title: 'No Judgment, Ever', desc: 'Whether you are 65 and getting off the couch for the first time, or training for your third powerlifting meet — you belong here.' },
  { title: 'Results-Driven', desc: 'We track. We measure. We adjust. Every program is built around your specific goals and what the data says is working.' },
  { title: 'Community First', desc: 'Iron Edge members do not ghost each other. The community accountability effect is real — and it keeps people coming back.' },
  { title: 'Evidence-Based', desc: 'No bro-science. No fad diets. Every training method and nutrition recommendation is grounded in peer-reviewed research.' },
];

export default function IronEdgeAbout() {
  return (
    <>
      <section style={{ backgroundColor: BLACK }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>Our Story</div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-5">Iron Edge Was Built for People Who Are Serious.</h1>
        <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">Founded in 2014 by competitive powerlifter Marcus Cole, Iron Edge is Portland's premier strength and conditioning gym.</p>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>How We Started</div>
            <h2 className="text-3xl font-black text-white uppercase mb-5">From a 600 sq ft garage to 15,000 sq ft.</h2>
            <p className="text-white/45 leading-relaxed mb-4">Marcus started training clients out of his garage in 2013. Within a year he had a waitlist. He leased a 2,000 sq ft space, filled it in six months, and moved to the current 15,000 sq ft facility in 2017.</p>
            <p className="text-white/45 leading-relaxed mb-6">Today, Iron Edge has 2,400+ members, 22 certified coaches, and 30+ classes per week. The waitlist is still a thing — but we always find room for people who are serious about changing their lives.</p>
            <div className="space-y-2">
              {["22 certified coaches on staff", "15,000 sq ft state-of-the-art facility", "Recovery room, sauna & cold plunge", "Free 7-day trial for all new members", "Online coaching available globally"].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/45"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />{p}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: BLACK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>The Coaching Team</div><h2 className="text-4xl font-black text-white uppercase">Your Coaches</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {TEAM.map((m, i) => (
              <div key={i} className="border border-white/8">
                <div className="relative h-56">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: ORANGE }}>{m.certs}</div>
                  <div className="font-black text-white mb-1">{m.name}</div>
                  <div className="text-xs text-white/30 mb-3">{m.role}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-black text-white uppercase">Our Values</h2></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="p-7 border border-white/8">
                <h3 className="font-black text-white text-sm mb-2 uppercase tracking-wide">{v.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: ORANGE }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-black uppercase mb-4">7 days free. No credit card. Just results.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-black text-white font-black uppercase tracking-widest text-[11px] px-10 py-4">Claim Free Trial <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
