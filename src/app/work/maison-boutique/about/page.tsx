import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Heart, ShoppingBag, Check } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';

const TEAM = [
  { name: 'Clara Johansson', role: 'Founder & Head Buyer', specialty: 'Curation · Styling · Sustainable Fashion', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', bio: "Clara founded Maison in 2018 after a decade in fashion PR and retail buying. She travels twice a year to source pieces from small-batch designers and sustainable brands that align with her values." },
  { name: 'Simone Park', role: 'Head Stylist', specialty: 'Personal Styling · Wardrobe Consulting', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', bio: "Simone has a gift for finding pieces that feel immediately right on a person. Her styling appointments are consistently booked out weeks in advance, and clients leave feeling like a better version of themselves." },
];

const VALUES = [
  { icon: Leaf, title: 'Sustainably Sourced', desc: 'Over 40% of our inventory comes from certified sustainable, organic, or fair-trade brands. We ask hard questions of every brand we carry.' },
  { icon: Heart, title: 'Community Rooted', desc: 'We are a Nashville business first. We sponsor local events, partner with Nashville-based designers, and give back to causes our community cares about.' },
  { icon: ShoppingBag, title: 'Thoughtfully Curated', desc: 'We do not carry everything. We carry the right things. Every piece is selected because it is truly beautiful, wearable, and worth keeping for years.' },
  { icon: Check, title: 'Styled, Not Sold', desc: 'Our role is not to sell you the most expensive thing on the rack. It is to help you build a wardrobe that reflects who you actually are.' },
];

export default function MaisonAbout() {
  return (
    <>
      <section style={{ backgroundColor: ESPRESSO }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Our Story</div>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-5" style={{ color: SAND }}>Fashion with a Purpose.</h1>
        <p className="max-w-xl mx-auto leading-relaxed text-sm" style={{ color: 'rgba(242,234,217,0.5)' }}>Maison Boutique opened in Nashville in 2018 with a simple vision: a women's boutique where every piece is chosen with intentionality, sustainability, and genuine style.</p>
      </section>

      <section style={{ backgroundColor: SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: MOCHA }}>About Clara</div>
            <h2 className="text-3xl font-serif italic mb-5" style={{ color: ESPRESSO }}>Built from a love of clothing done right.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Clara Johansson spent a decade working in fashion PR and retail buying before asking herself a hard question: was the fashion she was helping sell actually good? The honest answer pushed her toward a different kind of boutique.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Maison was founded on two principles: curation and conscience. Every brand is vetted for quality, ethics, and sustainability. Every piece is selected because Clara would personally wear it.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Six years in, Maison has become one of Nashville's most beloved boutiques — known as much for its community and styling appointments as its beautiful clothing.</p>
            <div className="space-y-2">
              {["New arrivals every Thursday", "Over 40% sustainable brands", "Complimentary styling appointments", "Nashville women's business of the year finalist", "Online shopping with free shipping on $75+"].map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SAGE }} />{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: ESPRESSO }} className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>The Team</div><h2 className="text-4xl font-serif italic mb-2" style={{ color: SAND }}>The Women Behind Maison</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10">
                <div className="relative h-64">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: SAGE }}>{m.specialty}</div>
                  <div className="font-bold mb-1" style={{ color: SAND }}>{m.name}</div>
                  <div className="text-xs mb-3" style={{ color: 'rgba(242,234,217,0.35)' }}>{m.role}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(242,234,217,0.45)' }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SAND }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-serif italic" style={{ color: ESPRESSO }}>What We Believe</h2></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white p-7">
                <Icon className="w-5 h-5 mb-4" style={{ color: SAGE }} strokeWidth={1.5} />
                <h3 className="font-bold text-sm mb-2" style={{ color: ESPRESSO }}>{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: ESPRESSO }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic mb-4" style={{ color: SAND }}>Book a complimentary styling appointment.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: SAGE, color: '#fff' }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
