import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Calendar, Flower2, Camera, Check } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';

const PACKAGES = [
  {
    icon: Heart,
    name: 'Full Wedding Planning',
    tagline: 'Everything, from engagement to exit.',
    price: 'Starting at $6,500',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    desc: 'Our most comprehensive offering. We walk with you through every decision, vendor, and detail from the moment you say yes.',
    includes: ['Unlimited planning meetings', 'Vendor research, vetting & booking', 'Budget creation & management', 'Full vendor communication & management', 'Wedding week timeline creation', 'Ceremony rehearsal direction', 'Complete day-of coordination', 'Post-event wrap-up support'],
  },
  {
    icon: Calendar,
    name: 'Partial Planning',
    tagline: 'You handle some, we handle the rest.',
    price: 'Starting at $3,200',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
    desc: 'Perfect if you have already booked some vendors and need a seasoned professional to coordinate the rest of the planning journey.',
    includes: ['Up to 12 planning meetings', 'Vendor booking for remaining needs', 'Budget review & management', 'Month-of coordination package included', 'Vendor final confirmations', 'Wedding day timeline', 'Day-of coordination (12 hours)'],
  },
  {
    icon: Calendar,
    name: 'Day-Of Coordination',
    tagline: 'You planned it. We execute it perfectly.',
    price: 'Starting at $1,800',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop',
    desc: 'You have done the work — now let us bring your vision to life on the day itself so you can be fully present.',
    includes: ['Initial planning consultation', 'Vendor confirmation calls (3–4 weeks out)', 'Wedding day timeline creation', 'Rehearsal direction', '10 hours of day-of coordination', 'One assistant included', 'Vendor tip distribution'],
  },
  {
    icon: Flower2,
    name: 'Floral Design',
    tagline: 'Blooms that tell your story.',
    price: 'Starting at $2,500',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    desc: 'Bespoke ceremony and reception florals designed to reflect your style, season, and color story. Sourced from sustainable local and regional growers.',
    includes: ['Design consultation & vision board', 'Bridal bouquet & bridesmaids', 'Boutonnieres & corsages', 'Ceremony arch or altar florals', 'Centerpieces & table arrangements', 'Cocktail hour florals', 'Setup & breakdown on event day'],
  },
];

export default function GoldenThreadServices() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Services & Packages</div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-5">How We Work Together</h1>
        <p className="text-white/45 max-w-xl mx-auto leading-relaxed">Bespoke wedding planning, floral design, and event coordination for couples who believe every detail matters.</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {PACKAGES.map(({ icon: Icon, name, tagline, price, img, desc, includes }, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-0 overflow-hidden bg-white">
              <div className={`relative min-h-[280px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image src={img} alt={name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className={`p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                  <h2 className="font-bold text-base" style={{ color: DARK }}>{name}</h2>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: SAGE }}>{tagline}</div>
                <div className="font-bold text-sm mb-4" style={{ color: DARK }}>{price}</div>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                <div className="grid grid-cols-2 gap-1.5 mb-6">
                  {includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-1.5 text-xs text-gray-500"><Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: SAGE }} />{item}</div>
                  ))}
                </div>
                <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5 self-start" style={{ color: SAGE, borderColor: SAGE }}>Inquire About This Package <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-16 px-6 text-center">
        <Flower2 className="w-8 h-8 mx-auto mb-5" style={{ color: SAGE }} strokeWidth={1.5} />
        <h2 className="text-3xl font-serif italic text-white mb-4">We take only 20 weddings per year.</h2>
        <p className="text-white/40 mb-8">Boutique availability means your event receives our full, undivided attention. Inquire early.</p>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: SAGE }}>Begin Your Inquiry <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
