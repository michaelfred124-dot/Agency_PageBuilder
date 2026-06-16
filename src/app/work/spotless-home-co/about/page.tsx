import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Check, Leaf } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WHITE = '#FFFFFF';
const DARK = '#0F2027';

const VALUES = [
  { icon: Shield, title: 'Fully Insured', desc: 'We carry general liability and workers compensation insurance on all employees. Your home and your belongings are protected on every visit.' },
  { icon: Check, title: 'Background Checked', desc: 'Every cleaner goes through a full background check before their first day. We would not send anyone into your home that we would not trust in our own.' },
  { icon: Sparkles, title: 'Consistency Guaranteed', desc: 'Same team every visit. You will know the people coming into your home — and they will know your preferences, your pets, and your space.' },
  { icon: Leaf, title: 'Eco Options', desc: 'We offer an eco-friendly service using plant-based, non-toxic cleaning solutions. Safe for kids, pets, and people with chemical sensitivities.' },
];

const STATS = [
  { value: '2,800+', label: 'Homes Cleaned' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Guarantee' },
  { value: '7+', label: 'Years Serving Denver' },
];

export default function SpotlessAbout() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: FOREST }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.5em] border"
          style={{ color: TEAL, borderColor: TEAL + '55' }}
        >
          <Sparkles className="w-3 h-3" strokeWidth={2} />
          About Us
        </div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          A Family Business<br />Built on Trust.
        </h1>
        <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: TEAL }} />
        <p
          className="text-white/60 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          Spotless Home Co was founded in Denver in 2017 by partners Maria and David Torres. Today we serve 2,800+ homes across the metro area with the same care and attention we brought to our very first client.
        </p>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: TEAL }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }, i) => (
            <div key={i}>
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >{value}</div>
              <div
                className="text-[10px] uppercase tracking-widest text-white/70"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: SKY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >Our Story</div>
            <h2
              className="text-3xl md:text-4xl mb-6 leading-tight"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >Started with one client.<br />Grew through trust.</h2>
            <p
              className="leading-relaxed mb-4"
              style={{ color: '#374151', fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Maria Torres started cleaning homes part-time in 2017 while finishing nursing school. Her attention to detail and professionalism turned one client into five, then twenty, then a hundred. By 2019, she and her husband David left their other jobs to run Spotless full-time.
            </p>
            <p
              className="leading-relaxed mb-4"
              style={{ color: '#374151', fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Today, Spotless Home Co serves over 2,800 homes across Denver, Aurora, Lakewood, Arvada, Englewood, and Littleton. We have a team of 18 fully trained, background-checked cleaners who take pride in the quality of their work.
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{ color: '#374151', fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Our satisfaction guarantee is simple: if anything is not right, we come back and make it right within 24 hours. No questions asked.
            </p>
            <div className="space-y-3">
              {[
                '2,800+ active clients in the Denver metro',
                '18 trained, background-checked cleaners',
                '4.9 stars across 480+ Google reviews',
                'Fully insured & bonded since 2017',
                '100% satisfaction guarantee on every clean',
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: TEAL }}>
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm" style={{ color: '#374151' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94aca55f7?q=80&w=2074&auto=format&fit=crop"
                alt="Maria and David Torres, founders of Spotless Home Co"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${FOREST}CC, transparent 50%)` }} />
            </div>
            {/* Eco badge overlay */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >Eco Products</div>
                  <div
                    className="text-xs"
                    style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >Non-toxic & safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section style={{ backgroundColor: FOREST }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="text-[10px] uppercase tracking-[0.5em] mb-3"
              style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >Our Commitments</div>
            <h2
              className="text-3xl md:text-4xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >Why Clients Stay With Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-8 border border-white/10 hover:border-teal-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-teal-400/30">
                    <Icon className="w-4 h-4" style={{ color: TEAL }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-white"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >{title}</h3>
                </div>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Section */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Leaf className="w-6 h-6" style={{ color: TEAL }} strokeWidth={1.5} />
              <div
                className="text-[10px] uppercase tracking-[0.5em]"
                style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >Eco-Friendly Options</div>
            </div>
            <h2
              className="text-3xl mb-5"
              style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >Cleaning that&apos;s safe for your family.</h2>
            <p
              className="text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              We offer a full eco-friendly cleaning service using only plant-based, non-toxic, biodegradable products. No harsh chemicals, no heavy synthetic fragrances — just a deeply clean home that is safe for your children, your pets, and anyone with chemical sensitivities.
            </p>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Add eco products to any service for just $15, or book our dedicated Green Clean subscription and save more.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Plant-based formulas', 'Fragrance-free options', 'Microfiber cloths only', 'Safe for kids & pets', 'No harsh chemicals', 'Biodegradable packaging'].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white border border-teal-100 text-sm"
                style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                <Check className="w-4 h-4 mb-2" style={{ color: TEAL }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: TEAL }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >First-time clients save 15%.</h2>
        <p
          className="text-white/75 mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >Use code SPOTLESS15 when booking. Get a free quote in 60 seconds.</p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 bg-white uppercase tracking-widest text-[11px] px-10 py-4 hover:bg-gray-50 transition-colors"
          style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Get Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
