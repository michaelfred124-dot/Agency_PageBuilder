import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wrench, Check, Shield } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

const TEAM = [
  { name: 'Rick Valdez', role: 'Owner & Lead Technician', certs: 'ASE Master Certified · 24 Years Experience', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', bio: "Rick opened Ridge Line in 2006 after spending years watching customers get overcharged at dealerships. His philosophy is simple: treat every car like it is your own mother's." },
  { name: 'Angela Torres', role: 'Service Advisor', certs: 'ASE Certified · Customer Relations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', bio: "Angela translates mechanic-speak into plain English. She handles estimates, scheduling, and makes sure every customer understands exactly what is being done to their vehicle and why." },
  { name: 'Marcus Webb', role: 'Senior Technician', certs: 'ASE Master Certified · Transmission Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', bio: "Marcus specializes in transmissions and electrical diagnostics. His attention to detail and diagnostic instincts have earned him a cult following among our repeat customers." },
];

const PROMISES = [
  'We never perform work without your written approval first.',
  'We send digital inspection reports to your phone with photos.',
  'All repairs come with a 24-month/24,000-mile warranty.',
  'We keep loaner vehicles on hand for bigger jobs.',
  'We will match any written estimate from a local shop.',
];

export default function RidgeLineAbout() {
  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Our Story</div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-5">Built on Honesty. Proven by Results.</h1>
        <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">Ridge Line Auto opened in 2006 with one goal: give Denver drivers an honest, high-quality alternative to overpriced dealerships.</p>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Our Approach</div>
            <h2 className="text-3xl font-black uppercase mb-5" style={{ color: CHARCOAL }}>No Runarounds. Ever.</h2>
            <p className="text-gray-500 leading-relaxed mb-5">Rick Valdez started Ridge Line after watching too many friends and family members get taken advantage of at other shops. He built this business on a handshake-level commitment: you get a straight diagnosis, a fair price, and work that lasts.</p>
            <p className="text-gray-500 leading-relaxed mb-6">18 years later, we have serviced over 14,000 vehicles. Most of our business comes from referrals — people who trust us so much they send their parents, siblings, and coworkers our way.</p>
            <div className="space-y-2">
              {PROMISES.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: RED }} />{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>The Team</div><h2 className="text-4xl font-black text-white uppercase">Your Mechanics</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10">
                <div className="relative h-52">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: RED }}>{m.certs}</div>
                  <div className="font-black text-white mb-1">{m.name}</div>
                  <div className="text-xs text-white/30 mb-4">{m.role}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 text-center bg-gray-50">
        <Shield className="w-8 h-8 mx-auto mb-4 text-gray-300" strokeWidth={1} />
        <h2 className="text-2xl font-black uppercase mb-4" style={{ color: CHARCOAL }}>ASE Certified. Locally owned. 18 years strong.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: RED }}>Book Service <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
