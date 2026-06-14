import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Check, Leaf } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const VALUES = [
  { icon: Shield, title: 'Fully Insured', desc: 'We carry general liability and workers compensation insurance on all employees. Your home and your belongings are protected on every visit.' },
  { icon: Check, title: 'Background Checked', desc: 'Every cleaner goes through a full background check before their first day. We would not send anyone into your home that we would not trust in our own.' },
  { icon: Sparkles, title: 'Consistency Guaranteed', desc: 'Same team every visit. You will know the people coming into your home — and they will know your preferences, your pets, and your space.' },
  { icon: Leaf, title: 'Eco Options', desc: 'We offer an eco-friendly service using plant-based, non-toxic cleaning solutions. Safe for kids, pets, and people with chemical sensitivities.' },
];

export default function SpotlessAbout() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-5 text-teal-400" strokeWidth={1.5} />
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-teal-400">About Us</div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-5">A Family Business Built on Trust.</h1>
        <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">Spotless Home Co was founded in Denver in 2017 by partners Maria and David Torres. Today we serve 500+ homes across the metro area.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Our Story</div>
            <h2 className="text-3xl font-black mb-5" style={{ color: DARK }}>Started with one client. Grew through trust.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Maria Torres started cleaning homes part-time in 2017 while finishing nursing school. Her attention to detail and professionalism turned one client into five, then twenty, then a hundred. By 2019, she and her husband David left their other jobs to run Spotless full-time.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Today, Spotless Home Co serves over 500 homes in Denver, Aurora, Lakewood, Arvada, Englewood, and Littleton. We have a team of 18 fully trained, background-checked cleaners who take pride in the quality of their work.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Our satisfaction guarantee is simple: if anything is not right, we come back and make it right within 24 hours. No questions asked.</p>
            <div className="space-y-2">
              {["500+ active clients in the Denver metro", "18 trained, background-checked cleaners", "4.9 stars across 480+ Google reviews", "Fully insured & bonded", "100% satisfaction guarantee"].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: TEAL }} />{p}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1527515637462-cff94aca55f7?q=80&w=2074&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-black text-white">Our Commitments</h2></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-7 border border-white/10">
                <Icon className="w-5 h-5 mb-4 text-teal-400" strokeWidth={1.5} />
                <h3 className="font-black text-white text-sm mb-2">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: TEAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white mb-4">First-time clients save 15%. Get a free quote today.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-black uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: DARK }}>Get Free Quote <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
