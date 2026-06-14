import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, TrendingUp, Key, MapPin, Check } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';

const SERVICES = [
  {
    icon: Home,
    title: 'Buying a Home',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    desc: "Buying a home in the Portland metro is competitive. Our buyer's agents know every neighborhood, every micro-market, and every negotiation tactic.",
    items: ['Neighborhood tours & market analysis', 'Pre-offer strategic guidance', 'Offer writing & negotiation', 'Inspection coordination', 'Title & closing support', 'Post-close concierge referrals'],
    cta: 'Start Your Home Search',
  },
  {
    icon: TrendingUp,
    title: 'Selling Your Home',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    desc: 'We price strategically, market aggressively, and negotiate skillfully. Our listings consistently sell faster and for more than neighborhood averages.',
    items: ['Free comparative market analysis', 'Professional photography & staging consult', 'Targeted online & social marketing', 'Offer review & negotiation strategy', 'Transaction coordination to close', 'Post-sale tax & moving resources'],
    cta: 'Get Your Home Valued',
  },
  {
    icon: Key,
    title: 'Property Management',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    desc: 'Let us handle your investment property from day one. Tenant placement, rent collection, maintenance, and annual reporting — all managed by our experienced team.',
    items: ['Tenant screening & placement', 'Online rent collection', 'Maintenance coordination', 'Annual property reporting', 'Lease renewals & rent increases', 'Eviction management (if needed)'],
    cta: 'Learn About Property Management',
  },
];

const NEIGHBORHOODS = ['NW Portland', 'Pearl District', 'Lake Oswego', 'Beaverton', 'Hillsboro', 'West Linn', 'Tigard', 'Tualatin'];

export default function MeridianServices() {
  return (
    <>
      <section style={{ backgroundColor: SLATE }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Our Services</div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-5">Full-Service Real Estate</h1>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">Whether you are buying, selling, or investing in Portland real estate, Meridian Properties is your trusted partner from first conversation to final signature.</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {SERVICES.map(({ icon: Icon, title, img, desc, items, cta }, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-0 overflow-hidden ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <div className="relative min-h-[280px]" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                <Image src={img} alt={title} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center p-10 bg-white" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5" style={{ color: FOREST }} strokeWidth={1.5} />
                    <h2 className="font-bold text-lg" style={{ color: SLATE }}>{title}</h2>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                  <div className="space-y-2 mb-6">
                    {items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} />{item}</div>
                    ))}
                  </div>
                  <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: FOREST, borderColor: FOREST }}>{cta} <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: FOREST }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-white/60" />
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60">Areas We Serve</div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {NEIGHBORHOODS.map((n, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-widest border border-white/25 text-white/70 px-4 py-2">{n}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 text-center bg-white">
        <h2 className="text-3xl font-serif mb-4" style={{ color: SLATE }}>Ready to make your move?</h2>
        <p className="text-gray-500 mb-8">Free consultation. No obligation. Just honest real estate advice.</p>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: FOREST }}>Schedule a Consultation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
