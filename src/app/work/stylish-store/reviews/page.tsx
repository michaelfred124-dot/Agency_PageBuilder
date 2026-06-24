import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Quote, ShoppingBag } from 'lucide-react';

const BASE = '/work/stylish-store';

const REVIEWS = [
  {
    name: 'Jessica M.',
    rating: 5,
    source: 'Verified Buyer',
    text: 'Absolutely in love with the Air Dunk Retro Blue! They are incredibly comfortable, and the leather quality is outstanding. I get compliments every time I wear them.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    product: 'Air Dunk Retro Blue'
  },
  {
    name: 'Mark T.',
    rating: 5,
    source: 'Verified Buyer',
    text: 'Purchased the Flyknit Red Racer for daily training sessions. Super lightweight and fits like a glove. Excellent heel support for long runs.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
    product: 'Flyknit Red Racer'
  },
  {
    name: 'Sarah L.',
    rating: 5,
    source: 'Verified Buyer',
    text: 'Simple booking, quick delivery, and premium packaging. The pastel pink sneakers are gorgeous and the cushioning makes me feel like I am walking on air.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    product: 'Air Dunk Pastel Pink'
  },
  {
    name: 'Daniel R.',
    rating: 5,
    source: 'Verified Buyer',
    text: 'I wear the Air Force Classic White to my design studio daily. Sleek, minimal, and matches any editorial fashion layout. Solid construction.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    product: 'Air Force Classic White'
  }
];

const GALLERY = [
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop'
];

export default function StylishStoreReviews() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">
            Verified Customer Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none">
            Stories From Our Community
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Read real stories from our highly satisfied buyers and explore our physical showroom galleries.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Showcase Gallery
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Stylish Shoes in the Wild
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <div 
                key={i} 
                className="relative rounded-3xl overflow-hidden shadow-sm aspect-square border border-slate-100 group bg-slate-50"
              >
                <Image 
                  src={src}
                  alt={`Stylish Store Gallery ${i + 1}`}
                  fill className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw" referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[9px] font-black uppercase tracking-widest bg-slate-950/80 px-4 py-2 rounded-full">
                    Customer Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Cards List */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Testimonials
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              What Our Buyers Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between text-left hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-50">
                      <Image 
                        src={rev.avatar} 
                        alt={rev.name} 
                        fill className="object-cover" 
                        sizes="48px" referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-sans font-black text-sm text-slate-900 leading-none">{rev.name}</h4>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">{rev.source}</span>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-2 -z-0" />
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed relative z-10 pl-4">
                      {rev.text}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100/50">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-black uppercase tracking-wider">Bought: {rev.product}</span>
                  </div>
                  
                  <div className="flex gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Footer CTA */}
      <section className="py-24 px-6 md:px-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight">
            Share Your Stylish Experience
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Join thousands of satisfied active shoe collectors in our Nashville and Seattle communities.
          </p>
          <div className="pt-2">
            <Link 
              href={`${BASE}/contact`}
              className="inline-flex bg-slate-900 text-white hover:bg-slate-800 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-md flex items-center justify-center gap-2 group transition-all mx-auto"
            >
              Write a Review
              <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
