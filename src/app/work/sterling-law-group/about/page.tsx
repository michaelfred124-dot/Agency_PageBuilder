import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scale, Check } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';
const DARK = '#0F1A33';

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
      {/* HERO — split editorial header */}
      <section className="relative overflow-hidden" style={{ backgroundColor: DARK }}>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(196,154,60,0.4) 40px, rgba(196,154,60,0.4) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(196,154,60,0.4) 40px, rgba(196,154,60,0.4) 41px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-7">
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center border"
                style={{ borderColor: GOLD + '55', backgroundColor: GOLD + '12' }}
              >
                <Scale className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
              </span>
              <span className="w-16 h-px" style={{ backgroundColor: GOLD }} />
            </div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Our Firm
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-7"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              25 Years Fighting<br />for Colorado
            </h1>
            <p
              className="text-lg italic leading-relaxed max-w-2xl"
              style={{ color: 'rgba(250,248,242,0.7)', fontFamily: 'var(--font-body)' }}
            >
              Sterling Law Group was founded in 1999 on a simple conviction: that every Coloradan deserves access to exceptional legal representation, regardless of their financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Our Story
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: NAVY, fontFamily: 'var(--font-display)' }}
            >
              Built on belief.<br />Proven in court.
            </h2>
            <div className="w-16 h-px mb-7" style={{ backgroundColor: GOLD }} />
            <p
              className="leading-relaxed mb-5 text-[15px]"
              style={{ color: '#555', fontFamily: 'var(--font-body)' }}
            >
              James Sterling spent ten years at a large Denver firm before realizing that big firms too often prioritized quick settlements over client outcomes. In 1999, he opened Sterling Law Group with one rule: fight every case as hard as the client deserves.
            </p>
            <p
              className="leading-relaxed mb-8 text-[15px]"
              style={{ color: '#555', fontFamily: 'var(--font-body)' }}
            >
              Today, our team of attorneys handles hundreds of cases annually across personal injury, family law, criminal defense, business law, and estate planning — all from our Colorado Springs office.
            </p>
            <div className="space-y-2.5">
              {["1,200+ cases won", "25+ years combined experience", "$40M+ recovered for clients", "Free initial consultations", "No fees unless we win on injury cases"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: NAVY, fontFamily: 'var(--font-body)' }}
                >
                  <Check className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 z-10" style={{ borderColor: GOLD }} />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 z-10" style={{ borderColor: GOLD }} />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" alt="Sterling Law Group office interior" fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 60%, ${NAVY}55 100%)` }} />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              The Team
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Meet Your Attorneys
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {TEAM.map((m, i) => (
              <div
                key={i}
                className="group relative overflow-hidden"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 50%, ${NAVY}DD 100%)` }} />
                </div>
                <div className="p-7 relative">
                  <span
                    className="absolute top-0 left-7 right-7 h-px"
                    style={{ backgroundColor: 'rgba(196,154,60,0.3)' }}
                  />
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2"
                    style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                  >
                    {m.focus}
                  </div>
                  <div
                    className="font-bold text-xl text-white mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {m.name}
                  </div>
                  <div
                    className="text-xs italic mb-4"
                    style={{ color: 'rgba(250,248,242,0.4)', fontFamily: 'var(--font-body)' }}
                  >
                    {m.role}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(250,248,242,0.6)', fontFamily: 'var(--font-body)' }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
            >
              Our Values
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: NAVY, fontFamily: 'var(--font-display)' }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-white p-9 border-l-2 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(30,45,90,0.1)]"
                style={{ borderLeftColor: GOLD }}
              >
                <div
                  className="text-3xl font-bold mb-4"
                  style={{ color: NAVY + '20', fontFamily: 'var(--font-display)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: NAVY, fontFamily: 'var(--font-display)' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: '#666', fontFamily: 'var(--font-body)' }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 text-center border-t border-white/10">
        <Scale className="w-9 h-9 mx-auto mb-6" style={{ color: GOLD }} strokeWidth={1.5} />
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Talk to an attorney today.
        </h2>
        <p
          className="italic mb-9 max-w-lg mx-auto text-base"
          style={{ color: 'rgba(250,248,242,0.65)', fontFamily: 'var(--font-body)' }}
        >
          The consultation is free. No fees unless we win on personal injury cases.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[11px] px-10 py-4 transition-opacity hover:opacity-90"
          style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
        >
          Schedule Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
