import Link from 'next/link';
import { ArrowRight, ShowerHead, Scissors, Heart, Zap, Check } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const SERVICES = [
  {
    icon: ShowerHead,
    title: 'Bath & Brush',
    desc: 'Perfect for dogs who need freshening up between full grooms.',
    items: [
      { name: 'Small (under 20 lbs)', price: '$45' },
      { name: 'Medium (20–50 lbs)', price: '$65' },
      { name: 'Large (50–80 lbs)', price: '$85' },
      { name: 'X-Large (80+ lbs)', price: '$105+' },
    ],
    includes: ['Gentle shampoo & rinse', 'Blow dry & brush out', 'Ear cleaning', 'Spritz of cologne/deodorant'],
  },
  {
    icon: Scissors,
    title: 'Full Groom',
    desc: 'A complete grooming experience with breed-appropriate styling.',
    items: [
      { name: 'Small (under 20 lbs)', price: '$70' },
      { name: 'Medium (20–50 lbs)', price: '$95' },
      { name: 'Large (50–80 lbs)', price: '$120' },
      { name: 'X-Large (80+ lbs)', price: '$145+' },
    ],
    includes: ['Everything in Bath & Brush', 'Breed-specific haircut', 'Nail trim & filing', 'Bandana or bow', 'Teeth brushing add-on available'],
  },
  {
    icon: Heart,
    title: 'Spa Add-Ons',
    desc: 'Treat your dog to a little extra luxury.',
    items: [
      { name: 'Paw Balm Treatment', price: '$12' },
      { name: 'Blueberry Facial', price: '$15' },
      { name: 'Teeth Brushing', price: '$10' },
      { name: 'Nail Polish', price: '$10' },
      { name: 'De-Shed Treatment', price: '$20+' },
      { name: 'Aromatherapy Rinse', price: '$12' },
    ],
    includes: ['Can be added to any service', 'Calming essential oil options', 'Natural, non-toxic products only'],
  },
  {
    icon: Zap,
    title: 'Express Services',
    desc: 'Quick services available while you wait.',
    items: [
      { name: 'Nail Trim', price: '$18' },
      { name: 'Nail Grind (Dremel)', price: '$22' },
      { name: 'Ear Cleaning', price: '$15' },
      { name: 'Anal Gland Expression', price: '$18' },
      { name: 'Quick Brush-Out', price: '$20+' },
    ],
    includes: ['No appointment needed for nail trims (call ahead)', 'Anxiety-sensitive handling', 'Takes 15–30 minutes'],
  },
];

const POLICIES = [
  'Pricing is a starting estimate; final cost may vary based on coat condition, matting, or temperament.',
  'All dogs must be current on rabies and DHPP vaccinations (proof required at first visit).',
  'We do not cage dry. All dogs are air dried or hand dried with low-heat dryers.',
  'Anxious or elderly dogs are always welcome — we go at their pace.',
  '24-hour cancellation required. Late cancellations may be charged 50% of service.',
];

export default function PawsAndPamperServices() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 text-teal-400">Services & Pricing</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Grooming Menu</h1>
        <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">Fear-free certified grooming for dogs of all breeds and sizes. All-natural products. No cage drying.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, items, includes }, i) => (
            <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: TEAL }}>
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                <h2 className="font-bold text-base" style={{ color: DARK }}>{title}</h2>
              </div>
              <p className="text-xs text-gray-400 mb-5">{desc}</p>
              <div className="space-y-2 mb-5">
                {items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="font-bold text-xs" style={{ color: TEAL }}>{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-1.5">
                {includes.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-gray-500"><Check className="w-3 h-3 shrink-0" style={{ color: TEAL }} />{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-6 bg-white p-6">
          <h3 className="font-bold text-sm mb-4" style={{ color: DARK }}>Policies & Notes</h3>
          <div className="space-y-3">
            {POLICIES.map((p, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-500"><Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: TEAL }} />{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: TEAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Book your dog's next spa day.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ color: DARK }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
