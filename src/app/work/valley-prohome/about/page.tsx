import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wrench, Shield, Check } from 'lucide-react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';

const TEAM = [
  { name: 'Hector Morales', role: 'Founder & Master Plumber', certs: 'Licensed Master Plumber · 22 Years', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', bio: "Hector spent 12 years as a licensed master plumber before founding Valley ProHome in 2006. His reputation for honesty and quality workmanship built the business almost entirely through word of mouth." },
  { name: 'Sandra Morales', role: 'Operations Director', certs: 'Business Administration · Quality Control', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Sandra manages scheduling, customer service, and quality control for all Valley ProHome projects. Her systems ensure every job meets the standard Hector set from day one." },
  { name: 'Dave Park', role: 'Lead Electrician', certs: 'Licensed Journeyman Electrician · NFPA 70E', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', bio: "Dave joined Valley ProHome in 2012 and has completed over 1,800 electrical projects in the Phoenix metro. He specializes in panel upgrades and EV charger installations." },
];

const VALUES = [
  { icon: Shield, title: 'Licensed & Insured', desc: 'Every trade license is current. General liability and workers compensation insurance covers all projects. You are fully protected.' },
  { icon: Wrench, title: 'Quality Materials Only', desc: 'We use manufacturer-recommended parts and materials on every job. No cheap substitutions that fail in two years.' },
  { icon: Check, title: '2-Year Warranty', desc: 'All workmanship comes with a 2-year warranty. If anything we installed fails, we come back and fix it at no charge.' },
];

export default function ValleyProHomeAbout() {
  return (
    <>
      <section style={{ backgroundColor: GREEN }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>About Valley ProHome</div>
        <h1 className="text-4xl md:text-5xl text-white mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>18 Years. 12,000+ Projects. One Standard.</h1>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">Founded in 2006 by master plumber Hector Morales, Valley ProHome has grown into Phoenix metro's most trusted multi-trade home services contractor.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GREEN }}>Our Story</div>
            <h2 className="text-3xl mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }} style={{ color: GREEN }}>Built on a handshake and a reputation.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Hector Morales started Valley ProHome with a service van, a set of tools, and a commitment to do every job right the first time. His first clients were his neighbors. They told their friends. The friends told theirs.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Today, Valley ProHome has 35 licensed tradespeople covering plumbing, electrical, HVAC, roofing, and general repairs across the entire Phoenix metro area. We still answer every call personally.</p>
            <p className="text-gray-500 leading-relaxed mb-6">In 18 years, we have never missed an emergency call window and have maintained a 4.8-star rating on 600+ Google reviews.</p>
            <div className="space-y-2">
              {["12,000+ projects completed", "4.8 stars · 600+ Google reviews", "35 licensed tradespeople", "24/7 emergency response", "Senior & veteran discounts available"].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />{p}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: GREEN }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>The Team</div><h2 className="text-4xl text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>Who Does the Work</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/15">
                <div className="relative h-56">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>{m.certs}</div>
                  <div className="font-bold text-white mb-1">{m.name}</div>
                  <div className="text-xs text-white/35 mb-3">{m.role}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-bold" style={{ color: GREEN }}>Our Guarantees</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-7 text-center border-t-4" style={{ borderTopColor: GOLD }}>
                <Icon className="w-5 h-5 mx-auto mb-4" style={{ color: GREEN }} strokeWidth={1.5} />
                <h3 className="font-bold text-sm mb-2" style={{ color: GREEN }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: GOLD }} className="py-14 px-6 text-center">
        <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }} style={{ color: '#1A0F00' }}>Free estimate. Same-week scheduling.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: GREEN }}>Request Free Estimate <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
