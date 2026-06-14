import Link from 'next/link';
import { ArrowRight, Dumbbell, Users, Zap, Trophy, Check } from 'lucide-react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    items: [
      { name: '1 Session', price: '$85' },
      { name: '5-Session Pack', price: '$395' },
      { name: '10-Session Pack', price: '$750' },
      { name: 'Monthly (3x/week)', price: '$899/mo' },
      { name: 'Online Coaching', price: '$149/mo' },
    ],
    desc: '1-on-1 sessions with a certified strength & conditioning coach. Custom programming, form coaching, and weekly progress tracking.',
    includes: ['Fitness assessment & goal setting', 'Custom workout program', 'Weekly check-ins', 'Nutrition guidance', 'Access to the full facility'],
  },
  {
    icon: Users,
    title: 'Group Classes',
    items: [
      { name: 'Drop-In Class', price: '$22' },
      { name: '10-Class Pack', price: '$180' },
      { name: 'Monthly Unlimited', price: '$129/mo' },
      { name: 'Class + Full Membership', price: '$159/mo' },
    ],
    desc: '20+ classes per week across HIIT, strength circuits, cardio burn, core, and mobility. All fitness levels welcome.',
    includes: ['HIIT & Strength', 'Cardio Burn', 'Core & Mobility', 'Morning, noon & evening options', 'Waitlist notifications via app'],
  },
  {
    icon: Zap,
    title: 'Nutrition Coaching',
    items: [
      { name: 'Single Consult', price: '$120' },
      { name: 'Monthly Package', price: '$199/mo' },
      { name: 'Add-On to Training', price: '$79/mo' },
    ],
    desc: 'Personalized macro targets, meal planning templates, supplement guidance, and weekly accountability check-ins with a certified nutrition coach.',
    includes: ['Macro & calorie targets', 'Sample meal plans', 'Supplement recommendations', 'Weekly accountability check-in', 'Progress photo review'],
  },
  {
    icon: Trophy,
    title: 'Competition Prep',
    items: [
      { name: 'Powerlifting Prep (12-week)', price: '$699' },
      { name: 'Bodybuilding Prep (16-week)', price: '$899' },
      { name: 'Functional Fitness Prep', price: '$549' },
    ],
    desc: 'Structured periodization programs designed to peak at your competition date. Meet-day coaching available.',
    includes: ['Periodized training blocks', 'Practice meet simulation', 'Weight class strategy', 'Day-of coaching', 'Deload & taper planning'],
  },
];

const MEMBERSHIPS = [
  { name: 'Basic', price: '$49/mo', perks: ['Gym access 5am–11pm', 'Locker room access', 'Fitness assessment'] },
  { name: 'Elite', price: '$89/mo', perks: ['Gym access 24/7', '2 guest passes/month', 'Recovery room & sauna', 'Group classes included'] },
  { name: 'Performance', price: '$159/mo', perks: ['Everything in Elite', 'Unlimited group classes', '1 PT session/month', 'Nutrition check-in monthly', 'Priority booking'] },
];

export default function IronEdgeServices() {
  return (
    <>
      <section style={{ backgroundColor: BLACK }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>Programs & Pricing</div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-5">What We Offer</h1>
        <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">Personal training, group classes, nutrition coaching, and competition prep. Your first 7 days are on us.</p>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto space-y-8">
          {PROGRAMS.map(({ icon: Icon, title, items, desc, includes }, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_1.5fr] gap-0 border border-white/8">
              <div className="p-8 border-r border-white/8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5" style={{ color: ORANGE }} strokeWidth={1.5} />
                  <h2 className="font-black text-base text-white uppercase tracking-wide">{title}</h2>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="space-y-2">
                  {items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-sm text-white/55">{item.name}</span>
                      <span className="font-black text-xs" style={{ color: ORANGE }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-4">Includes</div>
                <div className="space-y-2">
                  {includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/50"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><div className="text-[10px] font-black uppercase tracking-[0.5em] mb-3" style={{ color: ORANGE }}>Memberships</div><h2 className="text-3xl font-black text-white uppercase">Pick Your Plan</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {MEMBERSHIPS.map(({ name, price, perks }, i) => (
              <div key={i} className={`p-8 ${i === 1 ? 'border-2' : 'border border-white/10'}`} style={i === 1 ? { borderColor: ORANGE } : {}}>
                {i === 1 && <div className="text-[9px] font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Most Popular</div>}
                <div className="font-black text-white text-xl mb-1">{name}</div>
                <div className="font-black text-2xl mb-5" style={{ color: ORANGE }}>{price}</div>
                <div className="space-y-2">
                  {perks.map((p, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/45"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />{p}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: ORANGE }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-black uppercase mb-4">First 7 days free. No credit card.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-black text-white font-black uppercase tracking-widest text-[11px] px-10 py-4">Claim Free Trial <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
