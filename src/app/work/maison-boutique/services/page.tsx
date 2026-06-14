import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Sparkles, Leaf, Heart } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';

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

const STYLING = [
  { title: 'Complimentary Styling', price: 'Free', desc: '45-minute personal styling appointment. Walk in with a challenge, walk out with confidence. Book via our contact page.' },
  { title: 'Wardrobe Audit', price: '$150', desc: 'Two-hour in-store session reviewing your wardrobe with one of our stylists, building a capsule around what you have and what you need.' },
  { title: 'Outfit Subscription Box', price: 'From $75/mo', desc: 'Monthly curated selection of 3–5 pieces chosen by your stylist. Keep what you love, return the rest.' },
  { title: 'Gift Styling', price: 'Free', desc: 'Not sure what to buy? Our team selects the perfect gift with a handwritten note and gift wrapping included.' },
];

export default function MaisonServices() {
  return (
    <>
      <section style={{ backgroundColor: ESPRESSO }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Shop & Style</div>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-5" style={{ color: SAND }}>The Collections</h1>
        <p className="max-w-xl mx-auto leading-relaxed text-sm" style={{ color: 'rgba(242,234,217,0.5)' }}>Curated women's fashion from sustainable and independent designers. New arrivals every Thursday. Free shipping over $75.</p>
      </section>

      <section style={{ backgroundColor: SAND }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {COLLECTIONS.map(({ title, tagline, img, desc, pieces }, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-0 overflow-hidden ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <div className="relative min-h-[280px]" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                <Image src={img} alt={title} fill className="object-cover object-top" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-white p-10 flex flex-col justify-center" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: SAGE }}>{tagline}</div>
                <h2 className="font-bold text-lg mb-3" style={{ color: ESPRESSO }}>{title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-5">
                  {pieces.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SAGE }} />{p}
                    </li>
                  ))}
                </ul>
                <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest self-start border-b pb-0.5" style={{ color: SAGE, borderColor: SAGE }}>Shop This Collection <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: MOCHA }}>Personal Styling</div><h2 className="text-3xl font-serif italic" style={{ color: ESPRESSO }}>Services We Offer</h2></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {STYLING.map(({ title, price, desc }, i) => (
              <div key={i} className="p-7" style={{ backgroundColor: SAND }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-sm" style={{ color: ESPRESSO }}>{title}</h3>
                  <span className="font-bold text-xs" style={{ color: SAGE }}>{price}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: ESPRESSO }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic mb-4" style={{ color: SAND }}>New arrivals every Thursday. Free shipping on $75+.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: SAGE, color: '#fff' }}>Book a Styling Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}
