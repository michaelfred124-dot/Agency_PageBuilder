import Link from 'next/link';
import { ArrowRight, Smile, Shield, Sparkles, Check } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const BLUE = '#0284C7';
const LIGHT = '#F0F8FF';

const SERVICES = [
  {
    icon: Smile,
    title: 'General & Preventive Dentistry',
    desc: 'The foundation of a healthy smile. Regular care prevents problems before they start.',
    items: [
      { name: 'Comprehensive Exam & X-Rays', price: '$150' },
      { name: 'Routine Cleaning', price: '$110' },
      { name: 'Deep Cleaning (per quadrant)', price: '$250' },
      { name: 'Tooth-Colored Fillings', price: '$180–$300' },
      { name: 'Tooth Extraction (simple)', price: '$180' },
      { name: 'Night Guard / Mouth Guard', price: '$350' },
      { name: 'Emergency Exam & X-Ray', price: '$99' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with natural-looking cosmetic treatments.',
    items: [
      { name: 'Teeth Whitening (in-office)', price: '$450' },
      { name: 'Take-Home Whitening Kit', price: '$250' },
      { name: 'Porcelain Veneers (per tooth)', price: '$1,200–$1,800' },
      { name: 'Dental Bonding (per tooth)', price: '$300–$600' },
      { name: 'Smile Makeover (consult)', price: 'Free' },
      { name: 'Enamel Contouring', price: '$150 per tooth' },
    ],
  },
  {
    icon: Shield,
    title: 'Restorative Dentistry',
    desc: 'Restore function, comfort, and aesthetics with modern restorative solutions.',
    items: [
      { name: 'Porcelain Crown', price: '$1,200–$1,500' },
      { name: 'Dental Bridge (3-unit)', price: '$3,000–$4,000' },
      { name: 'Full or Partial Dentures', price: 'From $1,500' },
      { name: 'Inlay / Onlay', price: '$800–$1,200' },
      { name: 'Root Canal Therapy', price: '$900–$1,400' },
      { name: 'Cracked Tooth Treatment', price: 'Varies' },
    ],
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement that looks, feels, and functions like a natural tooth.',
    items: [
      { name: 'Single Implant + Crown', price: '$3,500–$4,500' },
      { name: 'Implant Consultation', price: 'Free' },
      { name: 'Bone Grafting (if needed)', price: '$500–$1,500' },
      { name: 'Implant-Supported Bridge', price: 'From $6,000' },
      { name: 'All-on-4 Full Arch', price: 'From $20,000/arch' },
      { name: 'Financing available through CareCredit', price: '0% options' },
    ],
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    desc: 'Straighter teeth for teens and adults with Invisalign and traditional braces.',
    items: [
      { name: 'Invisalign (comprehensive)', price: '$4,500–$6,500' },
      { name: 'Invisalign Lite', price: '$2,500–$3,500' },
      { name: 'Traditional Braces', price: '$4,000–$5,500' },
      { name: 'Retainers (after treatment)', price: '$250–$400' },
      { name: 'Free Orthodontic Consultation', price: 'Free' },
    ],
  },
];

export default function ClarityDentalServices() {
  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Services & Fees</div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-5">Dental Services</h1>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">General, cosmetic, restorative, implants, and orthodontics. Accepting most insurance. CareCredit and in-house financing available.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {SERVICES.map(({ icon: Icon, title, desc, items }, i) => (
            <div key={i} className="bg-white p-8">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5" style={{ color: BLUE }} strokeWidth={1.5} />
                <h2 className="font-bold text-base" style={{ color: NAVY }}>{title}</h2>
              </div>
              <p className="text-sm text-gray-400 mb-5">{desc}</p>
              <div className="space-y-2">
                {items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: BLUE }} />{item.name}</div>
                    <span className="font-bold text-xs" style={{ color: BLUE }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-6 bg-white p-6 border-l-4" style={{ borderLeftColor: BLUE }}>
          <p className="text-sm text-gray-500">Prices listed are estimates and may vary based on individual patient needs and insurance coverage. A treatment plan with final pricing is provided after your exam. We accept most PPO insurance plans. Ask about our in-house savings plan for uninsured patients.</p>
        </div>
      </section>

      <section style={{ backgroundColor: BLUE }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">New patients welcome. Same-week appointments available.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ color: NAVY }}>Book Your Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
