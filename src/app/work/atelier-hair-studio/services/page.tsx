import Link from 'next/link';
import { ArrowRight, Scissors, Sparkles, Leaf, Star, Check } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

const MENU = [
  {
    icon: Scissors,
    title: 'Cuts & Styling',
    items: [
      { name: "Women's Cut & Style", price: "$85+" },
      { name: "Men's Cut", price: "$55+" },
      { name: "Children's Cut (under 12)", price: "$40" },
      { name: "Blowout", price: "$65+" },
      { name: "Special Occasion Updo", price: "$120+" },
      { name: "Bang Trim (existing client)", price: "$15" },
    ],
  },
  {
    icon: Sparkles,
    title: 'Color Services',
    items: [
      { name: 'Single Process Color', price: '$100+' },
      { name: 'Full Highlights', price: '$150+' },
      { name: 'Partial Highlights', price: '$110+' },
      { name: 'Balayage / Ombre', price: '$185+' },
      { name: 'Color Correction', price: 'Consultation' },
      { name: 'Gloss / Toner', price: '$65+' },
    ],
  },
  {
    icon: Leaf,
    title: 'Treatments',
    items: [
      { name: 'Keratin Smoothing Treatment', price: '$280+' },
      { name: 'Deep Conditioning Mask', price: '$45' },
      { name: 'Scalp Treatment', price: '$55' },
      { name: 'Bond Builder (Olaplex)', price: '$30 add-on' },
      { name: 'Gloss Treatment', price: '$65+' },
      { name: 'Hydrating Blow Dry', price: '$70+' },
    ],
  },
  {
    icon: Star,
    title: 'Bridal & Special Events',
    items: [
      { name: 'Bridal Hair Trial', price: '$150' },
      { name: 'Wedding Day Styling', price: '$200+' },
      { name: 'Bridesmaid Styling', price: '$90/person' },
      { name: 'Flower Girl Styling', price: '$55' },
      { name: 'Event Updo', price: '$120+' },
      { name: 'On-Location Services', price: 'Inquire' },
    ],
  },
];

const POLICIES = [
  'All services are priced starting from the listed amount. Final pricing depends on hair length, density, and complexity.',
  'Color correction appointments require an in-person consultation prior to booking.',
  'We use only professional-grade, sulfate-free, and cruelty-free products.',
  '24-hour cancellation policy. Late cancellations may incur a 50% service fee.',
  'Complimentary deep conditioning treatment with all first-time color services.',
];

export default function AtelierServices() {
  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Services & Pricing</div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-5">The Atelier Menu</h1>
        <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">Artisan color, precision cuts, and luxury treatments. All services use premium, sustainable products.</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {MENU.map(({ icon: Icon, title, items }, i) => (
            <div key={i} className="bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-5 h-5" style={{ color: ROSE }} strokeWidth={1.5} />
                <h2 className="font-bold text-base" style={{ color: CHARCOAL }}>{title}</h2>
              </div>
              <div className="space-y-3">
                {items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="font-bold text-xs" style={{ color: ROSE }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 bg-white p-8">
          <h3 className="font-bold text-sm mb-4" style={{ color: CHARCOAL }}>Salon Policies</h3>
          <div className="space-y-3">
            {POLICIES.map((p, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-500"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ROSE }} />{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">New clients receive a complimentary conditioning treatment.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: ROSE }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
