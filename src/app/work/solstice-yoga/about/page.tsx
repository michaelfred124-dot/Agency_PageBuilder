import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Leaf, Heart, Check } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const CREAM = '#FDF8F3';
const MIST = '#E8F0E9';

const TEACHERS = [
  { name: 'Elena Voss', role: 'Founder & Lead Teacher', training: 'E-RYT 500 · Yin Certified · Mindfulness Coach', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop', bio: "Elena has been practicing yoga for 18 years and teaching for 12. She trained with Judith Lasater and spent two summers studying meditation at a Buddhist retreat in Vermont before opening Solstice in 2016." },
  { name: 'Rahul Mehta', role: 'Vinyasa & Meditation Teacher', training: 'RYT 500 · Breathwork Specialist', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop', bio: "Rahul brings a dynamic, joyful energy to every class. His vinyasa sequences are thoughtfully built to challenge and restore simultaneously. His Sunday morning breathwork sessions have a dedicated following." },
  { name: 'Cora Stevens', role: 'Restorative & Sound Healing', training: 'RYT 200 · Tibetan Bowl Practitioner', img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop', bio: "Cora discovered yoga during recovery from a sports injury and never looked back. She specializes in restorative and therapeutic yoga and offers monthly sound healing ceremonies that sell out within hours." },
];

const VALUES = [
  { icon: Heart, title: 'Radical Inclusivity', desc: 'Yoga is for every body, every age, every ability. We use inclusive language, offer modifications, and celebrate every step of every journey.' },
  { icon: Sun, title: 'Rooted in Tradition', desc: 'We honor the full depth of yoga — not just the physical practice, but the philosophical lineage that gives it meaning.' },
  { icon: Leaf, title: 'Community Over Competition', desc: 'We do not grade poses. We celebrate effort. The goal is the practice, not the performance.' },
];

const STATS = [
  { value: '2016', label: 'Studio Founded' },
  { value: '10', label: 'Teachers on Staff' },
  { value: '800+', label: 'Active Members' },
  { value: '30+', label: 'Classes Weekly' },
];

export default function SolsticeAbout() {
  return (
    <>
      {/* HERO — split editorial header */}
      <section style={{ backgroundColor: CREAM }} className="px-6 md:px-12 pt-20 md:pt-28 pb-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-end">
          <div className="pb-16 md:pb-24">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-6" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>
              Our Story
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold italic leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              A studio rooted<br />in belonging.
            </h1>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
            <p className="text-lg font-light leading-relaxed max-w-md" style={{ color: DARK + 'CC', fontFamily: 'var(--font-body)' }}>
              Solstice Yoga &amp; Wellness opened in Denver in 2016 with a vision for a yoga studio where every person — of every body, ability, and background — truly feels welcome.
            </p>
          </div>
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[480px] rounded-t-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
              alt="The Solstice Yoga studio space in Denver"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ backgroundColor: MIST }} className="py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold italic mb-1" style={{ fontFamily: 'var(--font-display)', color: SAGE }}>
                {s.value}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: DARK + '99', fontFamily: 'var(--font-body)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden order-2 md:order-1">
            <Image src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop" alt="Elena Voss, founder of Solstice Yoga" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>About Elena</div>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-6 leading-[1.05]" style={{ color: DARK, fontFamily: 'var(--font-display)' }}>Finding stillness.<br />Sharing it.</h2>
            <p className="text-base font-light leading-relaxed mb-4" style={{ color: DARK + 'AA', fontFamily: 'var(--font-body)' }}>Elena Voss discovered yoga during a period of burnout in her late twenties. What started as a physical practice became a profound tool for self-understanding. By 30, she was teaching. By 35, she was building a studio.</p>
            <p className="text-base font-light leading-relaxed mb-4" style={{ color: DARK + 'AA', fontFamily: 'var(--font-body)' }}>Solstice was designed around one simple idea: yoga should feel like coming home. Not a performance studio, not an Instagram backdrop — a real community where people genuinely support each other on and off the mat.</p>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: DARK + 'AA', fontFamily: 'var(--font-body)' }}>Today, Solstice has 10 teachers, 30+ weekly classes, and a community of 800+ active students who call this place their second home.</p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {["E-RYT 500 certified founder", "10 teachers on staff", "800+ active community members", "30+ classes per week", "Online classes available"].map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm font-light" style={{ color: DARK + 'CC', fontFamily: 'var(--font-body)' }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: SAGE }} />{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section style={{ backgroundColor: MIST }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>Our Teachers</div>
            <h2 className="text-4xl md:text-5xl font-bold italic" style={{ color: DARK, fontFamily: 'var(--font-display)' }}>Meet the team.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEACHERS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-72">
                  <Image src={t.img} alt={t.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-7">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>{t.training}</div>
                  <div className="font-bold text-lg mb-0.5" style={{ color: DARK, fontFamily: 'var(--font-display)' }}>{t.name}</div>
                  <div className="text-xs font-light mb-4" style={{ color: DARK + '80', fontFamily: 'var(--font-body)' }}>{t.role}</div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: DARK + '99', fontFamily: 'var(--font-body)' }}>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: SAGE, fontFamily: 'var(--font-body)' }}>What We Believe</div>
            <h2 className="text-4xl md:text-5xl font-bold italic" style={{ color: DARK, fontFamily: 'var(--font-display)' }}>Our values.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: MIST }}>
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: DARK, fontFamily: 'var(--font-display)' }}>{title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: DARK + '99', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: SAGE }} className="py-20 px-6 text-center">
        <Sun className="w-8 h-8 mx-auto mb-6 text-white/60" strokeWidth={1.5} />
        <h2 className="text-3xl md:text-4xl font-bold italic text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
          First month unlimited — just $49 for new students.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white text-xs font-semibold uppercase tracking-widest px-10 py-4 rounded-full transition-opacity hover:opacity-90"
          style={{ color: DARK, fontFamily: 'var(--font-body)' }}
        >
          Claim Your Intro Month <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
