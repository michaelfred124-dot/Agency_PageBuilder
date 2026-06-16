import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';
const CREAM = '#FDF9F3';

const STYLING_SERVICES = [
  {
    title: 'Complimentary Styling',
    price: 'Free',
    duration: '45 minutes',
    desc: 'Walk in with a challenge, walk out with confidence. Our stylists listen deeply and pull pieces that feel immediately like you. No pressure, no purchase required.',
    includes: ['Personal style consultation', 'Curated looks from current inventory', 'Wardrobe gap identification', 'Styling notes to take home'],
    highlight: false,
  },
  {
    title: 'Wardrobe Audit',
    price: '$150',
    duration: '2 hours',
    desc: 'An in-store deep dive into your existing wardrobe. We help you identify what is serving you, what to let go, and how to build a capsule around what remains.',
    includes: ['Full wardrobe review', 'Capsule wardrobe plan', 'Shopping list creation', 'Style profile document', 'Follow-up styling session discount'],
    highlight: true,
  },
  {
    title: 'Closet Edit',
    price: '$225',
    duration: '3 hours',
    desc: 'Our most comprehensive in-store experience. Includes a full wardrobe review plus an extended pull session where we build complete outfits around your lifestyle.',
    includes: ['Everything in Wardrobe Audit', 'Complete outfit building', 'Styling lookbook creation', 'Brand & care recommendations', 'Complimentary follow-up call'],
    highlight: false,
  },
];

const COLLECTIONS = [
  {
    title: 'New Arrivals',
    tagline: 'Every Thursday',
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop',
    desc: 'Our buyers travel twice a year to source new pieces from small-batch designers, sustainable brands, and artisan makers. Shop the latest additions before they sell out.',
    pieces: ['Seasonal dresses & midi skirts', 'Elevated basics & layering pieces', 'Statement outerwear', 'Jewelry & accessories', 'New brand partnerships'],
  },
  {
    title: 'Dresses & Occasion Wear',
    tagline: 'From brunch to black-tie',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop',
    desc: 'Our dress collection is the heart of Maison. Every silhouette is curated for wearability, quality, and that feeling of effortless confidence.',
    pieces: ['Wrap & shirt dresses', 'Midi & maxi silhouettes', 'Occasion & event dresses', 'Resort & vacation styles', 'Size-inclusive selection'],
  },
  {
    title: 'Sustainable Picks',
    tagline: 'Fashion with a conscience',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
    desc: 'Over 40% of our inventory comes from certified sustainable brands. We believe fashion should feel good in every sense of the word.',
    pieces: ['Organic cotton & linen pieces', 'Recycled & upcycled fabrics', 'Fair trade certified brands', 'Low-waste packaging', 'Carbon-offset shipping'],
  },
  {
    title: 'Accessories',
    tagline: 'The finishing touch',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2076&auto=format&fit=crop',
    desc: 'Our curated accessories collection — from everyday earrings to statement handbags — is designed to complement, not compete.',
    pieces: ['Handcrafted jewelry', 'Leather & vegan leather bags', 'Silk & linen scarves', 'Belts & hat collection', 'Sunglasses & eyewear'],
  },
];

export default function MaisonServices() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: SAGE }}
          >
            Shop & Style
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
          >
            The Collections
          </h1>
          <p
            className="mt-8 text-base max-w-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}80` }}
          >
            Curated women's fashion from sustainable and independent designers. New arrivals every Thursday. Free shipping over $75.
          </p>
        </div>
      </section>

      {/* Personal Styling Services — Pricing Cards */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: MOCHA }}
            >
              Personal Styling
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
            >
              Styling Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STYLING_SERVICES.map((svc, i) => (
              <div
                key={i}
                className="relative p-10 flex flex-col"
                style={{
                  backgroundColor: svc.highlight ? ESPRESSO : '#fff',
                  border: svc.highlight ? 'none' : `1px solid ${ESPRESSO}15`,
                }}
              >
                {svc.highlight && (
                  <span
                    className="text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 inline-block mb-6 self-start"
                    style={{ fontFamily: 'var(--font-body)', backgroundColor: SAGE, color: '#fff' }}
                  >
                    Most Popular
                  </span>
                )}
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: svc.highlight ? SAGE : SAGE }}
                >
                  {svc.duration}
                </div>
                <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: svc.highlight ? SAND : ESPRESSO }}
                >
                  {svc.title}
                </h3>
                <div
                  className="text-4xl mb-6"
                  style={{ fontFamily: 'var(--font-display)', color: svc.highlight ? SAND : ESPRESSO }}
                >
                  {svc.price}
                </div>
                <p
                  className="text-sm leading-relaxed mb-8 flex-grow"
                  style={{ fontFamily: 'var(--font-body)', color: svc.highlight ? 'rgba(242,234,217,0.6)' : `${ESPRESSO}70` }}
                >
                  {svc.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {svc.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: svc.highlight ? 'rgba(242,234,217,0.7)' : `${ESPRESSO}75` }}
                    >
                      <Check
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: SAGE }}
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="block text-center py-4 text-[10px] font-bold uppercase tracking-widest hover:opacity-85 transition-opacity"
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: svc.highlight ? SAGE : ESPRESSO,
                    color: '#fff',
                  }}
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>

          {/* Size range note */}
          <div className="mt-8 text-center">
            <p
              className="text-sm"
              style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}60` }}
            >
              We carry sizes XS–3X in most styles. Our stylists are experienced with all body types and celebrate every size.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section style={{ backgroundColor: SAND }} className="py-0">
        {COLLECTIONS.map(({ title, tagline, img, desc, pieces }, i) => (
          <div key={i} className="grid lg:grid-cols-2 min-h-[55vh]">
            <div
              className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{ minHeight: '350px' }}
            >
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div
              className={`flex items-center px-10 md:px-16 py-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              style={{ backgroundColor: i % 2 === 1 ? SAND : CREAM }}
            >
              <div className="max-w-lg">
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: SAGE }}
                >
                  {tagline}
                </div>
                <h2
                  className="text-3xl md:text-4xl mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
                >
                  {title}
                </h2>
                <div className="w-8 h-px mb-6" style={{ backgroundColor: SAGE }} />
                <p
                  className="text-sm leading-relaxed mb-7"
                  style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
                >
                  {desc}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {pieces.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}80` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SAGE }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', color: SAGE, borderColor: SAGE }}
                >
                  Shop This Collection <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Sustainability stats */}
      <section style={{ backgroundColor: ESPRESSO }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-body)', color: SAGE }}
            >
              Our Impact
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', color: SAND }}
            >
              Fashion with a conscience.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '40%+', label: 'Sustainable brands' },
              { stat: '6+', label: 'Years in Nashville' },
              { stat: '100+', label: 'Brands curated' },
              { stat: '2×/yr', label: 'Buying trips' },
            ].map(({ stat, label }, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-5xl mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: SAND }}
                >
                  {stat}
                </div>
                <div
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,234,217,0.45)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
        >
          New arrivals every Thursday. Free shipping on $75+.
        </h2>
        <p
          className="text-sm mb-10"
          style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}60` }}
        >
          Visit us in Nashville or shop online — styling help is always complimentary.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4 hover:opacity-85 transition-opacity"
          style={{ fontFamily: 'var(--font-body)', backgroundColor: ESPRESSO, color: '#fff' }}
        >
          Book a Styling Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
