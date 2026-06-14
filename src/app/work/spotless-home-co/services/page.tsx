import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Clock, Leaf, Check } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Standard Cleaning',
    subtitle: 'Recurring maintenance service',
    items: [
      { name: '1 Bedroom / 1 Bath', price: '$115' },
      { name: '2 Bedroom / 1–2 Bath', price: '$145' },
      { name: '3 Bedroom / 2 Bath', price: '$175' },
      { name: '4 Bedroom / 2–3 Bath', price: '$205' },
      { name: '5+ Bedroom (custom quote)', price: 'Call us' },
    ],
    includes: ['Kitchen surfaces & sink', 'All bathrooms', 'Dusting & vacuuming', 'Mopping hard floors', 'Trash removal', 'Making beds (linens provided)'],
    note: 'Weekly clients save 15%. Bi-weekly save 10%.',
  },
  {
    icon: Shield,
    title: 'Deep Cleaning',
    subtitle: 'Thorough top-to-bottom service',
    items: [
      { name: '1 Bedroom / 1 Bath', price: '$185' },
      { name: '2 Bedroom / 1–2 Bath', price: '$225' },
      { name: '3 Bedroom / 2 Bath', price: '$275' },
      { name: '4 Bedroom / 2–3 Bath', price: '$325' },
    ],
    includes: ['Everything in Standard Cleaning', 'Inside oven & fridge', 'Baseboards & window sills', 'Light fixtures & ceiling fans', 'Cabinet fronts & door frames', 'Grout scrubbing in bathrooms'],
    note: 'First-time clients receive deep cleaning before switching to standard recurring.',
  },
  {
    icon: Clock,
    title: 'Move-In / Move-Out Cleaning',
    subtitle: 'Landlord-approved checklist',
    items: [
      { name: '1 Bed / 1 Bath', price: '$225' },
      { name: '2 Bed / 1–2 Bath', price: '$280' },
      { name: '3 Bed / 2 Bath', price: '$330' },
      { name: '4+ Bed / 3 Bath', price: '$385+' },
    ],
    includes: ['Inside all appliances', 'Inside all cabinets & drawers', 'Full bathroom sanitization', 'Window tracks cleaned', 'All walls spot-cleaned', 'Garage sweep (if requested)'],
    note: 'Same-week availability for most move-out jobs.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Cleaning',
    subtitle: 'Non-toxic, pet & child safe',
    items: [
      { name: 'Eco add-on to any service', price: '+$15' },
      { name: 'Eco Standard Cleaning', price: 'From $130' },
      { name: 'Eco Deep Cleaning', price: 'From $200' },
    ],
    includes: ['Plant-based cleaning solutions', 'Fragrance-free options available', 'No harsh chemicals', 'Safe for pets, children & allergy sufferers', 'Microfiber cloths only'],
    note: 'Ask about our Green Clean subscription.',
  },
  {
    icon: Sparkles,
    title: 'Airbnb & Short-Term Rental',
    subtitle: 'Fast turnovers between guests',
    items: [
      { name: 'Studio / 1 Bed', price: '$95' },
      { name: '2 Bedroom', price: '$130' },
      { name: '3 Bedroom', price: '$160' },
      { name: 'Add-on: linen change', price: '$20' },
    ],
    includes: ['Guest-ready standards', 'Restocking checklist (you supply)', 'Same-day availability', 'Photo confirmation on request', 'Dedicated account manager'],
    note: 'Volume discounts for hosts with 2+ properties.',
  },
];

export default function SpotlessServices() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-teal-400">Services & Pricing</div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-5">What We Clean</h1>
        <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">Transparent flat-rate pricing. No hidden fees. Satisfaction guaranteed on every job.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {SERVICES.map(({ icon: Icon, title, subtitle, items, includes, note }, i) => (
            <div key={i} className="bg-white p-8 grid md:grid-cols-[1fr_1.2fr] gap-8">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                  <h2 className="font-black text-base" style={{ color: DARK }}>{title}</h2>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{subtitle}</div>
                <div className="space-y-2">
                  {items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="font-black text-xs" style={{ color: TEAL }}>{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-400 border-t pt-3">{note}</div>
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-gray-300 mb-3">What is Included</div>
                <div className="space-y-2">
                  {includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: TEAL }} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: TEAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white mb-4">Get a free instant quote in 60 seconds.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: DARK }}>Get My Free Quote <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
