import Link from 'next/link';
import { ArrowRight, Sun, Wind, Leaf, Heart, Check } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const WARM = '#FDF8F3';

const CLASSES = [
  {
    icon: Sun,
    title: 'Hatha Yoga',
    level: 'All Levels',
    desc: 'The foundation of all yoga. We explore classical postures with emphasis on breath, alignment, and stillness. Perfect for all levels including complete beginners.',
    schedule: ['Mon 8am & 6pm', 'Wed 9am & 7pm', 'Fri 8am', 'Sun 9am'],
  },
  {
    icon: Wind,
    title: 'Vinyasa Flow',
    level: 'Beginner Friendly',
    desc: 'Dynamic sequences linking breath and movement. Classes build heat, strength, and flexibility while maintaining an accessible, welcoming pace.',
    schedule: ['Tue 6am, 12pm & 7pm', 'Thu 7pm', 'Sat 8am & 10am'],
  },
  {
    icon: Leaf,
    title: 'Yin Yoga',
    level: 'All Levels',
    desc: 'Deep, passive stretching targeting connective tissue and fascia. Poses are held 3–5 minutes for a profound physical and nervous system reset.',
    schedule: ['Mon 7:30pm', 'Wed 7:30pm', 'Fri 6:30pm', 'Sun 5pm'],
  },
  {
    icon: Heart,
    title: 'Restorative Yoga',
    level: 'All Levels',
    desc: 'Completely supported poses using bolsters, blankets, and blocks. Deep rest and nervous system healing. Ideal after illness, stress, or injury.',
    schedule: ['Tue 7:30pm', 'Sun 4pm'],
  },
  {
    icon: Sun,
    title: 'Meditation & Breathwork',
    level: 'All Levels',
    desc: 'Guided meditation, pranayama, and seated mindfulness practices. Begin, deepen, or refresh your meditation journey in a supportive group setting.',
    schedule: ['Mon & Wed 7am (20 min)', 'Sat 7am (45 min)', 'Monthly Sound Healing events'],
  },
  {
    icon: Wind,
    title: 'Beginners Series',
    level: 'New Students',
    desc: 'A 4-week introductory series teaching foundational postures, alignment cues, and yoga philosophy. New series starts the first week of every month.',
    schedule: ['Saturdays 11am–12:30pm', '4-week commitment', 'Limited to 12 students'],
  },
];

const PRICING = [
  { name: 'Single Drop-In', price: '$22', note: 'Any class' },
  { name: '5-Class Pack', price: '$95', note: 'No expiration' },
  { name: '10-Class Pack', price: '$175', note: 'No expiration' },
  { name: 'Monthly Unlimited', price: '$99/mo', note: 'Pause anytime' },
  { name: 'Intro Month', price: '$49', note: 'New students only · unlimited classes' },
  { name: 'Annual Membership', price: '$899/yr', note: 'Save $289 vs monthly' },
  { name: 'Student / Senior', price: '$15/drop-in', note: 'Valid ID required' },
  { name: 'Beginners Series', price: '$89 (4 weeks)', note: 'Best way to start' },
];

export default function SolsticeServices() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Schedule & Pricing</div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-5">Classes & Offerings</h1>
        <p className="text-white/40 max-w-xl mx-auto leading-relaxed">30+ classes per week across 6 modalities. Drop-in friendly. All levels welcome.</p>
      </section>

      <section style={{ backgroundColor: WARM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-serif italic" style={{ color: DARK }}>Class Schedule</h2></div>
          <div className="grid md:grid-cols-2 gap-5">
            {CLASSES.map(({ icon: Icon, title, level, desc, schedule }, i) => (
              <div key={i} className="bg-white p-7">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" style={{ color: SAGE }} strokeWidth={1.5} />
                    <h3 className="font-bold text-sm" style={{ color: DARK }}>{title}</h3>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest border px-2 py-1" style={{ color: SAGE, borderColor: SAGE }}>{level}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{desc}</p>
                <div className="border-t pt-3 space-y-1">
                  {schedule.map((s, j) => (
                    <div key={j} className="text-xs text-gray-500 flex items-center gap-2"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: ROSE }} />{s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="text-center mb-6"><h2 className="text-3xl font-serif italic" style={{ color: DARK }}>Pricing</h2></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {PRICING.map(({ name, price, note }, i) => (
                <div key={i} className={`bg-white p-5 text-center ${i === 4 ? 'border-2' : ''}`} style={i === 4 ? { borderColor: ROSE } : {}}>
                  {i === 4 && <div className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>Best for New Students</div>}
                  <div className="font-bold text-sm mb-1" style={{ color: DARK }}>{name}</div>
                  <div className="font-bold text-xl mb-2" style={{ color: SAGE }}>{price}</div>
                  <div className="text-[10px] text-gray-400">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">First month unlimited — just $49 for new students.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: SAGE }}>Claim Intro Offer <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
