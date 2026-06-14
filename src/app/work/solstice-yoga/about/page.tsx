import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Leaf, Heart, Check } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const WARM = '#FDF8F3';

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

export default function SolsticeAbout() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <Sun className="w-8 h-8 mx-auto mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Our Story</div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-5">A Studio Rooted in Belonging.</h1>
        <p className="text-white/40 max-w-xl mx-auto leading-relaxed">Solstice Yoga & Wellness opened in Denver in 2016 with a vision for a yoga studio where every person — of every body, ability, and background — truly feels welcome.</p>
      </section>

      <section style={{ backgroundColor: WARM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>About Elena</div>
            <h2 className="text-3xl font-serif italic mb-5" style={{ color: DARK }}>Finding stillness. Sharing it.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Elena Voss discovered yoga during a period of burnout in her late twenties. What started as a physical practice became a profound tool for self-understanding. By 30, she was teaching. By 35, she was building a studio.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Solstice was designed around one simple idea: yoga should feel like coming home. Not a performance studio, not an Instagram backdrop — a real community where people genuinely support each other on and off the mat.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Today, Solstice has 10 teachers, 30+ weekly classes, and a community of 800+ active students who call this place their second home.</p>
            <div className="space-y-2">
              {["E-RYT 500 certified founder", "10 teachers on staff", "800+ active community members", "30+ classes per week", "Online classes available"].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: SAGE }} />{p}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Our Teachers</div><h2 className="text-4xl font-serif italic text-white">Meet the Team</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEACHERS.map((t, i) => (
              <div key={i} className="border border-white/10">
                <div className="relative h-64">
                  <Image src={t.img} alt={t.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: ROSE }}>{t.training}</div>
                  <div className="font-bold text-white mb-1">{t.name}</div>
                  <div className="text-xs text-white/30 mb-3">{t.role}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: WARM }} className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-serif italic" style={{ color: DARK }}>Our Values</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-7 text-center">
                <Icon className="w-6 h-6 mx-auto mb-4" style={{ color: SAGE }} strokeWidth={1.5} />
                <h3 className="font-bold text-sm mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">First month unlimited. Just $49 for new students.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: SAGE }}>Claim Your Intro Month <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
