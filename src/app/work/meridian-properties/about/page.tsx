import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Check, Users } from 'lucide-react';

const BASE = '/work/meridian-properties';
const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';

const TEAM = [
  { name: 'Sarah Chen', role: 'Founder & Principal Broker', specialty: 'Buyer Rep · Luxury Listings', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', bio: "Sarah founded Meridian in 2011 after a decade as a top producer at a national brokerage. Her philosophy: clients make better decisions when they are fully informed and never pressured." },
  { name: 'Tom Reeves', role: 'Senior Agent', specialty: 'NW Portland · Investment Properties', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', bio: "Tom specializes in Northwest Portland and investment property acquisitions. His market knowledge and negotiation skill consistently result in above-asking sales and below-asking purchases." },
  { name: 'Aisha Johnson', role: 'Property Manager', specialty: 'Portfolio Management · Tenant Relations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Aisha manages over 85 residential units in the Portland metro. Landlords trust her to protect their investments; tenants appreciate her responsiveness and professionalism." },
];

const AWARDS = [
  "Portland Business Journal Top Agent 2022 & 2023",
  "Certified Residential Specialist (CRS)",
  "Accredited Buyer's Representative (ABR)",
  "Equal Housing Opportunity advocate",
  "Portland Association of Realtors member",
];

export default function MeridianAbout() {
  return (
    <>
      <section style={{ backgroundColor: SLATE }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>About Us</div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-5">Portland Real Estate with Integrity</h1>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">Meridian Properties has helped Portland families buy, sell, and invest in real estate for over 13 years. We are a small, expert team with big results.</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Our Story</div>
            <h2 className="text-3xl font-serif mb-5" style={{ color: SLATE }}>Boutique service. Real results.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Sarah Chen started Meridian with a frustration: large brokerages shuffled clients between agents, rushed transactions, and prioritized volume over outcomes. She wanted to build something different — a small, elite team where every client gets a senior agent's attention from start to finish.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Thirteen years later, we have closed over 850 transactions totaling more than $290M in Portland metro real estate. We are still a boutique team. We still answer our phones.</p>
            <div className="space-y-2">
              {AWARDS.map((a, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: FOREST }} />{a}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SLATE }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Our Team</div><h2 className="text-4xl font-serif text-white">The People Behind the Results</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/8 border border-white/10">
                <div className="relative h-60">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: FOREST }}>{m.specialty}</div>
                  <div className="font-bold text-white mb-1">{m.name}</div>
                  <div className="text-xs text-white/35 mb-3">{m.role}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: FOREST }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Ready to work together?</h2>
        <p className="text-white/60 mb-8">Free consultation. No obligation. Just honest real estate guidance.</p>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: FOREST }}>Schedule Consultation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
