import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flower2, Heart, Check } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';

const VALUES = [
  { title: 'Boutique Intentionality', desc: 'We limit ourselves to 20 weddings per year. Not for exclusivity — for quality. Your event deserves our full attention, and we protect that capacity fiercely.' },
  { title: 'Listening First', desc: 'Before we suggest a single flower or venue, we listen. We ask about your story, your values, your fears, your vision. Then we build from there.' },
  { title: 'Sustainable Choices', desc: 'We partner with local, seasonal florists and vendors who share our commitment to environmental responsibility. Beautiful events should not cost the earth.' },
  { title: 'Calm Presence', desc: 'Weddings are emotional. We bring a steady, experienced hand so you can be fully present in every moment — not managing logistics.' },
];

export default function GoldenThreadAbout() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12 text-center">
        <Flower2 className="w-8 h-8 mx-auto mb-5" style={{ color: SAGE }} strokeWidth={1.5} />
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Our Story</div>
        <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-5">Every Love Story Deserves a Perfect Chapter.</h1>
        <p className="text-white/40 max-w-xl mx-auto leading-relaxed">Golden Thread Events is a boutique wedding planning and floral design studio in Charleston, SC. Founded in 2015 by Sophia Hartwell.</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Meet Sophia</div>
            <h2 className="text-3xl font-serif italic mb-5" style={{ color: DARK }}>A decade of love stories told.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Sophia Hartwell started Golden Thread in 2015 after planning her sister's wedding and realizing she had found her calling. She combines a background in interior design with an obsessive love of flowers and a calm, reassuring presence that makes couples feel completely at ease.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Over a decade, Sophia has planned 350+ weddings across Charleston, Savannah, and destination venues around the Southeast. She has been featured in Southern Weddings, The Knot, and Brides magazine.</p>
            <p className="text-gray-500 leading-relaxed mb-6">Golden Thread is a team of three — Sophia, her lead floral designer Clara, and day-of coordinator Evelyn. Small by design.</p>
            <div className="space-y-2">
              {["Featured in Southern Weddings & The Knot", "350+ weddings planned", "Destination weddings across the Southeast", "Sustainable florals from local growers", "Charleston's Choice Award 2022 & 2023"].map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SAGE }} />{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop', label: 'The Ceremony' },
            { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', label: 'The Details' },
            { img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop', label: 'The Celebration' },
          ].map(({ img, label }, i) => (
            <div key={i} className="relative overflow-hidden" style={{ paddingBottom: '130%' }}>
              <Image src={img} alt={label} fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl font-serif italic" style={{ color: DARK }}>How We Work</h2></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white p-7">
                <h3 className="font-bold text-sm mb-2" style={{ color: SAGE }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">We take only 20 weddings per year. Let us make yours one of them.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: SAGE }}>Begin Your Inquiry <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
