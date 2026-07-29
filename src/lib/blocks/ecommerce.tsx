import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Check } from 'lucide-react';

export { EC_SCHEMAS } from './ecommerce.schemas';

export const EC_RENDERERS = {
  ProductGrid: ({ title, subtitle, products }: any) => (
    <section className="py-16 @md:py-24 bg-white border-y border-black/10">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-black uppercase tracking-tighter mb-4">{title}</h2>
          <p className="text-lg text-black/50 font-medium">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 gap-8 @md:gap-12">
          {products?.map((product: any, i: number) => (
            <div key={i} className="group flex flex-col">
              <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-6 shadow-sm border border-black/5">
                <Image 
                  src={(product.image) || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                fill />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="flex flex-col flex-1 px-2">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold flex-1">{product.name}</h3>
                  <span className="text-lg font-black">{product.price}</span>
                </div>
                <button className="mt-auto w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-black/80 transition-colors flex items-center justify-center gap-2 rounded-xl pointer-events-none shadow-md">
                  <ShoppingCart className="w-4 h-4" />
                  {product.buttonText || "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  PricingTable: ({ title, subtitle, plans }: any) => (
    <section className="py-16 @md:py-24 bg-[#F8F5F2] border-y border-black/10">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-black uppercase tracking-tighter mb-4">{title}</h2>
          <p className="text-lg text-black/50 font-medium">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 @md:grid-cols-3 gap-8">
          {plans?.map((plan: any, i: number) => {
            const isPopular = plan.isPopular === "true";
            return (
              <div key={i} className={`relative flex flex-col p-8 rounded-3xl ${isPopular ? 'bg-black text-white shadow-2xl scale-100 @lg:scale-105 z-10 border-[4px] border-black my-4 @lg:-my-4' : 'bg-white text-black border-[4px] border-black/10'} transition-transform`}>
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7BA05C] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{plan.name}</h3>
                <div className="text-4xl font-black mb-8">{plan.price}</div>
                
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  {(Array.isArray(plan.features)
                    ? plan.features
                    : typeof plan.features === 'string'
                      ? plan.features.split(',')
                      : []
                  ).map((f: string, j: number) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium">
                      <Check className={`w-5 h-5 shrink-0 ${isPopular ? 'text-white/80' : 'text-black/50'}`} />
                      <span className={isPopular ? 'text-white/80' : 'text-black/70'}>{typeof f === 'string' ? f.trim() : f}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 font-bold uppercase tracking-widest text-xs rounded-xl transition-colors ${isPopular ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} pointer-events-none`}>
                  {plan.buttonText || "Choose Plan"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
};
