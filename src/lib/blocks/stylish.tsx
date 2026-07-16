"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Heart, Star } from 'lucide-react';

export const SS_SCHEMAS = {
  SSHero: {
    description: "Stylish Store Grid Hero",
    fields: [
      { name: 'mainTitle', label: 'Main Title', type: 'text' },
      { name: 'mainSubtitle', label: 'Main Subtitle', type: 'text' },
      { name: 'mainImage', label: 'Main Background Image', type: 'text' },
      { name: 'mainLink', label: 'Main Link', type: 'text' },
      
      { name: 'topTitle', label: 'Top Right Title', type: 'text' },
      { name: 'topImage', label: 'Top Right Image', type: 'text' },
      { name: 'topLink', label: 'Top Right Link', type: 'text' },
      
      { name: 'bottomTitle', label: 'Bottom Right Title', type: 'text' },
      { name: 'bottomImage', label: 'Bottom Right Image', type: 'text' },
      { name: 'bottomLink', label: 'Bottom Right Link', type: 'text' }
    ],
    defaultProps: {
      mainTitle: "Stylish shoes for Women",
      mainSubtitle: "Spring & Summer Collection",
      mainImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=700&auto=format&fit=crop",
      mainLink: "/work/stylish-store/services",
      topTitle: "Sports Wear",
      topImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
      topLink: "/work/stylish-store/services",
      bottomTitle: "Fashion Shoes",
      bottomImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop",
      bottomLink: "/work/stylish-store/services"
    }
  },
  SSPromo: {
    description: "Newsletter Discount Promo",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'discountText', label: 'Background Discount Text', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' }
    ],
    defaultProps: {
      title: "10% OFF Discount Coupons",
      subtitle: "Subscribe to get 10% OFF on all your purchases.",
      discountText: "10%",
      buttonText: "EMAIL ME"
    }
  },
  SSFeatured: {
    description: "Featured Products Carousel/Grid",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'linkText', label: 'Link Text', type: 'text' },
      { name: 'linkUrl', label: 'Link URL', type: 'text' },
      { name: 'products', label: 'Products', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price (number)', type: 'text' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'tag', label: 'Badge Tag', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Handpicked Items",
      title: "Featured Products",
      linkText: "View all",
      linkUrl: "/work/stylish-store/services",
      products: [
        { name: 'Air Dunk Retro Blue', desc: 'Running shoes for men', price: '99', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop', tag: 'Best Seller' },
        { name: 'Air Dunk Pastel Pink', desc: 'Running shoes for men', price: '119', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop', tag: 'New' },
        { name: 'Flyknit Red Racer', desc: 'Running shoes for men', price: '129', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop', tag: 'Trending' },
        { name: 'Air Force Classic White', desc: 'Running shoes for men', price: '89', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Gel-Lyte Modern Trainer', desc: 'Running shoes for men', price: '139', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop', tag: 'Exclusive' }
      ]
    }
  },
  SSDualBanner: {
    description: "Dual Collection Banners",
    fields: [
      { name: 'leftTitle', label: 'Left Card Title', type: 'text' },
      { name: 'leftLink', label: 'Left Card Link', type: 'text' },
      { name: 'leftImage', label: 'Left Card Image', type: 'text' },
      { name: 'rightTitle', label: 'Right Card Title', type: 'text' },
      { name: 'rightLink', label: 'Right Card Link', type: 'text' },
      { name: 'rightImage', label: 'Right Card Image', type: 'text' }
    ],
    defaultProps: {
      leftTitle: "Minimal Collection",
      leftLink: "/work/stylish-store/services",
      leftImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
      rightTitle: "Sneakers",
      rightLink: "/work/stylish-store/services",
      rightImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop"
    }
  },
  SSLatest: {
    description: "Latest Products Grid",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'linkText', label: 'Link Text', type: 'text' },
      { name: 'linkUrl', label: 'Link URL', type: 'text' },
      { name: 'products', label: 'Products', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price (number)', type: 'text' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'tag', label: 'Badge Tag', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Fresh Arrivals",
      title: "Latest Products",
      linkText: "View all",
      linkUrl: "/work/stylish-store/services",
      products: [
        { name: 'Cortez Classic Blue', desc: 'Running shoes for men', price: '80', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Pegasus Trail Zoom', desc: 'Running shoes for men', price: '130', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Metcon Training Pro', desc: 'Running shoes for men', price: '140', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Court Vision Low', desc: 'Running shoes for men', price: '75', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Zoom Fly Vaporfly', desc: 'Running shoes for men', price: '250', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop', tag: '' }
      ]
    }
  }
};

const PromoBlock = ({ title, subtitle, discountText, buttonText }: any) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-6 px-6 @md:px-12 max-w-7xl mx-auto w-full">
      <div className="bg-[#FAF9F5] rounded-3xl p-8 @sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col @md:flex-row justify-between items-center gap-8">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.03] select-none pointer-events-none font-sans font-black text-[120px] uppercase leading-none tracking-wider text-right flex items-center justify-end pr-10">
          {discountText}
        </div>

        <div className="space-y-2 text-center @md:text-left relative z-10">
          <h3 className="text-xl @sm:text-2xl font-sans font-black tracking-tight text-slate-900">
            {title}
          </h3>
          <p className="text-slate-500 text-xs @sm:text-sm font-medium">
            {subtitle}
          </p>
        </div>

        <div className="relative z-10 w-full @md:w-auto max-w-md">
          {subscribed ? (
            <div className="bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm text-center">
              Check your inbox! Coupon code is sent.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 text-xs font-medium bg-white shrink w-full @md:w-[220px]"
                required
              />
              <button 
                type="submit"
                className="bg-slate-950 text-white hover:bg-slate-800 font-sans font-black uppercase text-[10px] tracking-widest px-6 py-3.5 rounded-xl shadow transition-all duration-300 shrink-0"
              >
                {buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export const SS_RENDERERS = {
  SSHero: ({ mainTitle, mainSubtitle, mainImage, mainLink, topTitle, topImage, topLink, bottomTitle, bottomImage, bottomLink }: any) => {
    return (
      <section className="py-8 px-6 @md:px-12 max-w-7xl mx-auto w-full bg-white">
        <div className="grid grid-cols-1 @lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="@lg:col-span-7 bg-[#F3F7FA] rounded-[32px] overflow-hidden p-8 @sm:p-12 relative flex flex-col justify-between min-h-[480px] @sm:min-h-[580px] group border border-slate-100 shadow-sm">
            <div className="relative z-10 max-w-sm space-y-4 text-left">
              <h2 className="text-4xl @sm:text-5xl font-sans font-black tracking-tight text-slate-900 leading-none">
                {mainTitle}
              </h2>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                {mainSubtitle}
              </p>
              <div>
                <Link
                  href={mainLink || '#'}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 w-[80%] h-[80%] @sm:w-[65%] @sm:h-[65%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
              <Image 
                src={mainImage}
                alt={mainTitle}
                fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="@lg:col-span-5 flex flex-col gap-6">
            <div className="bg-slate-950 rounded-[32px] overflow-hidden p-8 @sm:p-10 relative flex flex-col justify-between h-[230px] @sm:h-[278px] group text-white border border-slate-900 shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#1e293b_0%,transparent_60%)] opacity-40 pointer-events-none" />
              <div className="relative z-10 space-y-3 text-left">
                <h3 className="text-3xl font-sans font-black tracking-tight text-white leading-none">
                  {topTitle}
                </h3>
                <div>
                  <Link
                    href={topLink || '#'}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white pb-1 border-b-2 border-white hover:text-sky-400 hover:border-sky-400 transition-colors"
                  >
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-105 pointer-events-none">
                <Image 
                  src={topImage}
                  alt={topTitle}
                  fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-[#FAF9F5] rounded-[32px] overflow-hidden p-8 @sm:p-10 relative flex flex-col justify-between h-[230px] @sm:h-[278px] group border border-slate-100 shadow-sm">
              <div className="relative z-10 space-y-3 text-left">
                <h3 className="text-3xl font-sans font-black tracking-tight text-slate-900 leading-none">
                  {bottomTitle}
                </h3>
                <div>
                  <Link
                    href={bottomLink || '#'}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 w-[60%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
                <Image 
                  src={bottomImage}
                  alt={bottomTitle}
                  fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
  SSPromo: (props: any) => <PromoBlock {...props} />,
  SSFeatured: ({ tagline, title, linkText, linkUrl, products }: any) => (
    <section className="py-20 px-6 @md:px-12 max-w-7xl mx-auto w-full text-left bg-white">
      <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {tagline}
          </h3>
          <h2 className="text-2xl @sm:text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
            {title}
          </h2>
        </div>
        <Link
          href={linkUrl || '#'}
          className="text-[10px] font-black uppercase tracking-widest text-slate-900 pb-0.5 border-b border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
        >
          {linkText}
        </Link>
      </div>

      <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-5 gap-6">
        {products?.map((prod: any, i: number) => (
          <div key={i} className="group relative flex flex-col text-left">
            <div className="aspect-[4/5] bg-[#F9FAFB] rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative mb-4">
              {prod.tag && (
                <span className="absolute top-3 left-3 bg-slate-950 text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
                  {prod.tag}
                </span>
              )}
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Heart className="w-4 h-4" />
              </button>
              <Image 
                src={prod.img}
                alt={prod.name}
                fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 20vw" referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                <button className="bg-white hover:bg-slate-50 text-slate-900 text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xl shadow-md flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
                  Quick Add
                </button>
              </div>
            </div>

            <h4 className="font-sans font-black text-sm text-slate-900 leading-tight truncate group-hover:text-blue-600 transition-colors">
              {prod.name}
            </h4>
            <p className="text-slate-400 text-xs mt-1 font-bold">
              {prod.desc}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-sans font-black text-slate-950 text-sm">
                ${prod.price}
              </span>
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-[10px] text-slate-500 font-black">4.9</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  ),
  SSDualBanner: ({ leftTitle, leftLink, leftImage, rightTitle, rightLink, rightImage }: any) => (
    <section className="py-8 px-6 @md:px-12 max-w-7xl mx-auto w-full bg-white">
      <div className="grid grid-cols-1 @md:grid-cols-2 gap-6">
        
        <div className="bg-[#EBF1FA] rounded-[32px] aspect-[16/10] overflow-hidden p-8 @sm:p-12 relative flex flex-col justify-between group border border-slate-100 shadow-sm">
          <div className="relative z-10 max-w-xs space-y-3 text-left">
            <h3 className="text-3xl @sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight">
              {leftTitle}
            </h3>
            <div>
              <Link
                href={leftLink || '#'}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                Shop Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
            <Image 
              src={leftImage}
              alt={leftTitle}
              fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-[#FAF4EE] rounded-[32px] aspect-[16/10] overflow-hidden p-8 @sm:p-12 relative flex flex-col justify-between group border border-slate-100 shadow-sm">
          <div className="relative z-10 max-w-xs space-y-3 text-left">
            <h3 className="text-3xl @sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight">
              {rightTitle}
            </h3>
            <div>
              <Link
                href={rightLink || '#'}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                Shop Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
            <Image 
              src={rightImage}
              alt={rightTitle}
              fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  ),
  SSLatest: ({ tagline, title, linkText, linkUrl, products }: any) => (
    <section className="py-20 px-6 @md:px-12 max-w-7xl mx-auto w-full text-left bg-white">
      <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {tagline}
          </h3>
          <h2 className="text-2xl @sm:text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
            {title}
          </h2>
        </div>
        <Link
          href={linkUrl || '#'}
          className="text-[10px] font-black uppercase tracking-widest text-slate-900 pb-0.5 border-b border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
        >
          {linkText}
        </Link>
      </div>

      <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-5 gap-6">
        {products?.map((prod: any, i: number) => (
          <div key={i} className="group relative flex flex-col text-left">
            <div className="aspect-[4/5] bg-[#F9FAFB] rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative mb-4">
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Heart className="w-4 h-4" />
              </button>
              <Image 
                src={prod.img}
                alt={prod.name}
                fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 20vw" referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                <button className="bg-white hover:bg-slate-50 text-slate-900 text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xl shadow-md flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
                  Quick Add
                </button>
              </div>
            </div>

            <h4 className="font-sans font-black text-sm text-slate-900 leading-tight truncate group-hover:text-blue-600 transition-colors">
              {prod.name}
            </h4>
            <p className="text-slate-400 text-xs mt-1 font-bold">
              {prod.desc}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-sans font-black text-slate-950 text-sm">
                ${prod.price}
              </span>
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-[10px] text-slate-500 font-black">4.8</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
