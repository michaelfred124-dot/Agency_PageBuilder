import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scale, Check } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';

const TEAM = [
  { name: 'James Sterling', role: 'Founding Partner', focus: 'Personal Injury & Business Law', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop', bio: "James founded Sterling Law Group in 1999 after a decade at Colorado's largest injury firm. His jury-trial record includes over $40M in verdicts and settlements for Colorado families." },
  { name: 'Maria Lawson', role: 'Senior Partner', focus: 'Family Law', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Maria is recognized by Colorado Super Lawyers every year since 2015. She brings both legal precision and genuine empathy to every family law case she takes on." },
  { name: 'Derek Chun', role: 'Associate Attorney', focus: 'Criminal Defense', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', bio: "A former public defender, Derek brings an aggressive, client-first approach to criminal defense. He is known for his trial preparation and ability to spot constitutional issues." },
];

const VALUES = [
  { title: 'Integrity', desc: 'We tell you what you need to hear, not what you want to hear. Honest counsel is the foundation of effective representation.' },
  { title: 'Tenacity', desc: 'We do not settle for less than you deserve. We prepare every case as if it is going to trial.' },
  { title: 'Access', desc: 'You have our direct cell phone numbers. No paralegals, no gatekeepers — just your attorney.' },
  { title: 'Community', desc: 'Colorado is our home. We sponsor local youth sports and contribute to the Colorado Bar Foundation every year.' },
];

export default function SterlingAbout() {
  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12 text-center">
        <Scale className="w-8 h-8 mx-auto mb-5 text-white/20" strokeWidth={1} />
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Firm</div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-5">25 Years Fighting for Colorado</h1>
        <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">Sterling Law Group was founded in 1999 on a simple conviction: that every Coloradan deserves access to exceptional legal representation, regardless of their financial situation.</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Story</div>
            <h2 className="text-3xl font-serif mb-5" style={{ color: NAVY }}>Built on belief. Proven in court.</h2>
            <p className="text-gray-500 leading-relaxed mb-5">James Sterling spent ten years at a large Denver firm before realizing that big firms too often prioritized quick settlements over client outcomes. In 1999, he opened Sterling Law Group with one rule: fight every case as hard as the client deserves.</p>
            <p className="text-gray-500 leading-relaxed mb-5">Today, our team of attorneys handles hundreds of cases annually across personal injury, family law, criminal defense, business law, and estate planning — all from our Colorado Springs office.</p>
            <div className="space-y-2">
              {["1,200+ cases won", "25+ years combined experience", "$40M+ recovered for clients", "Free initial consultations", "No fees unless we win on injury cases"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />{item}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>The Team</div><h2 className="text-4xl font-serif text-white">Meet Your Attorneys</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10">
                <div className="relative h-64">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>{m.focus}</div>
                  <div className="font-bold text-white mb-1">{m.name}</div>
                  <div className="text-xs text-white/35 mb-4">{m.role}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Our Values</div><h2 className="text-4xl font-serif" style={{ color: NAVY }}>What We Stand For</h2></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white p-8 border-l-4" style={{ borderLeftColor: GOLD }}>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: GOLD }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Talk to an attorney today. The consultation is free.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: NAVY }}>Schedule Consultation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
