"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Instagram, Facebook } from 'lucide-react';

// Maison Boutique Block Family
// Sand #F2EAD9 · Espresso #2C1A0E · Sage #7D9B76 · Taupe #B8A898

const MB_SAND = '#F2EAD9';
const MB_ESPRESSO = '#2C1A0E';
const MB_SAGE = '#7D9B76';
const MB_TAUPE = '#B8A898';

export function MBHero(props: any) {
  const headline = props.headline || 'Dressed for\nyour story.';
  const sub = props.sub || 'Curated collections for women who live intentionally. New arrivals every Thursday.';
  const ctaText = props.ctaText || 'Shop New Arrivals';
  const secondaryText = props.secondaryText || 'Explore Lookbook';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2070&q=80';
  const badge = props.badge || 'New Collection · Spring 2025';
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      <Image src={bgImage} alt="Hero" fill className="object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.88) 0%, rgba(44,26,14,0.3) 45%, rgba(44,26,14,0.05) 100%)' }} />
      <div className="relative z-10 px-8 md:px-16 pb-16">
        <div className="inline-block text-xs font-semibold tracking-[0.28em] uppercase mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(242,234,217,0.15)', color: MB_SAND, border: '1px solid rgba(242,234,217,0.25)' }}>
          {badge}
        </div>
        <h1 className="text-5xl md:text-8xl font-light text-white leading-[1.0] tracking-tight mb-5 whitespace-pre-line" style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}>{headline}</h1>
        <p className="text-base text-white/65 mb-8 max-w-md font-light leading-relaxed">{sub}</p>
        <div className="flex flex-wrap gap-4 items-center">
          <button style={{ backgroundColor: MB_SAND, color: MB_ESPRESSO }} className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full transition-all hover:opacity-90 tracking-wide">
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
          <button className="text-white/60 hover:text-white font-light text-sm underline underline-offset-4 transition-colors tracking-wide">
            {secondaryText}
          </button>
        </div>
      </div>
    </section>
  );
}

export function MBAbout(props: any) {
  const eyebrow = props.eyebrow || 'Our Story';
  const headline = props.headline || 'More than a boutique.\nA way of life.';
  const body = props.body || 'Founded in 2018, Maison was built on the belief that getting dressed should feel joyful — not overwhelming. We source only from makers who share our commitment to quality, ethics, and lasting style over passing trends.';
  const ctaText = props.ctaText || 'Meet the Founders';
  const image = props.image || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2070&q=80';
  return (
    <section style={{ backgroundColor: MB_SAND }} className="py-0 px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        <div className="relative aspect-[4/5] md:aspect-auto min-h-[500px] overflow-hidden">
          <Image src={image} alt="About" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <div className="text-xs font-bold tracking-[0.28em] uppercase mb-6" style={{ color: MB_SAGE }}>{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.15] mb-8 whitespace-pre-line" style={{ color: MB_ESPRESSO, fontFamily: 'Georgia, serif' }}>{headline}</h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: MB_TAUPE }}>{body}</p>
          <button className="self-start inline-flex items-center gap-2 text-sm font-semibold tracking-wide pb-1 border-b-2 transition-all hover:gap-3" style={{ color: MB_ESPRESSO, borderColor: MB_ESPRESSO }}>
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function MBCollections(props: any) {
  const eyebrow = props.eyebrow || 'Shop';
  const title = props.title || 'Current Collections';
  const collections = props.collections || [
    { label: 'New Arrivals', sub: '24 pieces', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80' },
    { label: 'Essentials', sub: 'Year-round staples', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80' },
    { label: 'Sale', sub: 'Up to 40% off', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80' },
  ];
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold tracking-[0.28em] uppercase mb-3" style={{ color: MB_SAGE }}>{eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: MB_ESPRESSO, fontFamily: 'Georgia, serif' }}>{title}</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm font-semibold pb-0.5 border-b" style={{ color: MB_ESPRESSO, borderColor: MB_ESPRESSO }}>
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.map((col: any, i: number) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                <Image src={col.image} alt={col.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(44,26,14,0.12)' }} />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button style={{ backgroundColor: MB_SAND, color: MB_ESPRESSO }} className="w-full py-2.5 rounded-xl font-semibold text-sm">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="font-semibold text-base" style={{ color: MB_ESPRESSO }}>{col.label}</div>
              <div className="text-sm mt-0.5" style={{ color: MB_TAUPE }}>{col.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MBQuote(props: any) {
  const quote = props.quote || 'Style is a way of saying who you are without having to speak.';
  const attribution = props.attribution || '— Rachel Zoe';
  return (
    <section style={{ backgroundColor: MB_ESPRESSO }} className="py-24 px-8 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-6xl md:text-8xl font-thin mb-2 leading-none" style={{ color: 'rgba(242,234,217,0.15)', fontFamily: 'Georgia, serif' }}>"</div>
        <blockquote className="text-2xl md:text-4xl font-light text-white leading-[1.4] mb-8" style={{ fontFamily: 'Georgia, serif' }}>{quote}</blockquote>
        <cite className="text-xs font-semibold tracking-[0.25em] uppercase not-italic" style={{ color: MB_TAUPE }}>{attribution}</cite>
      </div>
    </section>
  );
}

export function MBTestimonials(props: any) {
  const eyebrow = props.eyebrow || 'Our Customers';
  const title = props.title || 'They love it here.';
  const reviews = props.reviews || [
    { name: 'Claire B.', rating: 5, text: "I discovered Maison two years ago and haven't shopped anywhere else since. The quality is impeccable and the team actually knows fashion." },
    { name: 'Nadia S.', rating: 5, text: "The curation here is unlike anything I've seen locally. Every piece feels like it was chosen with purpose. My wardrobe has completely transformed." },
    { name: 'Taylor M.', rating: 5, text: 'Ordered online and everything arrived beautifully packaged. Sizing was perfect and the fabric quality is way above the price point.' },
  ];
  return (
    <section style={{ backgroundColor: MB_SAND }} className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[0.28em] uppercase mb-4" style={{ color: MB_SAGE }}>{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-light" style={{ color: MB_ESPRESSO, fontFamily: 'Georgia, serif' }}>{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev: any, i: number) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: Number(rev.rating) || 5 }).map((_: any, si: number) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-current" style={{ color: '#D4A853' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 font-light" style={{ color: MB_ESPRESSO }}>"{rev.text}"</p>
              <div className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: MB_TAUPE }}>{rev.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MBNewsletter(props: any) {
  const headline = props.headline || 'Be the first to know.';
  const sub = props.sub || 'New arrivals, private events, and styling tips — straight to your inbox.';
  const placeholder = props.placeholder || 'Your email address';
  const buttonText = props.buttonText || 'Subscribe';
  const fine = props.fine || 'No spam, ever. Unsubscribe anytime.';
  return (
    <section style={{ backgroundColor: MB_SAGE }} className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>{headline}</h2>
        <p className="text-white/70 mb-10 text-base font-light">{sub}</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none border-0 font-medium placeholder-white/50"
            style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'white' }}
          />
          <button type="submit" style={{ backgroundColor: MB_ESPRESSO, color: MB_SAND }} className="px-8 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-opacity hover:opacity-90">
            {buttonText}
          </button>
        </form>
        <p className="text-white/40 text-xs mt-5">{fine}</p>
      </div>
    </section>
  );
}

export function MBFooter(props: any) {
  const businessName = props.businessName || 'Maison Boutique';
  const tagline = props.tagline || 'Intentional style. Lasting quality.';
  const copyright = props.copyright || '© 2025 Maison Boutique. All rights reserved.';
  const shop: string[] = props.shop || ['New Arrivals', 'Essentials', 'Sale', 'Lookbook'];
  const company: string[] = props.company || ['Our Story', 'Sustainability', 'Press', 'Careers'];
  const support: string[] = props.support || ['Sizing Guide', 'Shipping & Returns', 'FAQ', 'Contact Us'];
  return (
    <footer style={{ backgroundColor: MB_SAND }} className="py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 pb-12" style={{ borderBottom: `1px solid ${MB_TAUPE}66` }}>
          <div className="col-span-2 md:col-span-1">
            <div className="font-light text-2xl mb-2" style={{ color: MB_ESPRESSO, fontFamily: 'Georgia, serif' }}>{businessName}</div>
            <div className="text-xs mb-6" style={{ color: MB_TAUPE }}>{tagline}</div>
            <div className="flex gap-3">
              <a href="#" style={{ backgroundColor: MB_ESPRESSO }} className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-75 transition-opacity">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" style={{ backgroundColor: MB_ESPRESSO }} className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-75 transition-opacity">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          {[{ title: 'Shop', links: shop }, { title: 'Company', links: company }, { title: 'Support', links: support }].map((col, i) => (
            <div key={i}>
              <div className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: MB_ESPRESSO }}>{col.title}</div>
              <div className="space-y-2.5">
                {col.links.map((link: string, li: number) => (
                  <a key={li} href="#" className="block text-sm transition-opacity hover:opacity-70" style={{ color: MB_TAUPE }}>{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-xs" style={{ color: MB_TAUPE }}>{copyright}</div>
      </div>
    </footer>
  );
}

export const MB_SCHEMAS: Record<string, any> = {
  MBHero: {
    description: 'Editorial full-height boutique hero',
    fields: [
      { name: 'headline', label: 'Headline (\\n = line break)', type: 'textarea' },
      { name: 'sub', label: 'Subtitle', type: 'textarea' },
      { name: 'ctaText', label: 'Primary CTA Text', type: 'text' },
      { name: 'secondaryText', label: 'Secondary CTA Text', type: 'text' },
      { name: 'badge', label: 'Badge Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image URL', type: 'text' },
    ],
    defaultProps: {
      headline: 'Dressed for\nyour story.',
      sub: 'Curated collections for women who live intentionally. New arrivals every Thursday.',
      ctaText: 'Shop New Arrivals',
      secondaryText: 'Explore Lookbook',
      badge: 'New Collection · Spring 2025',
      bgImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2070&q=80',
    },
  },
  MBAbout: {
    description: 'Split image / story section',
    fields: [
      { name: 'eyebrow', label: 'Eyebrow Label', type: 'text' },
      { name: 'headline', label: 'Headline (\\n = line break)', type: 'textarea' },
      { name: 'body', label: 'Body Text', type: 'textarea' },
      { name: 'ctaText', label: 'CTA Text', type: 'text' },
      { name: 'image', label: 'Image URL', type: 'text' },
    ],
    defaultProps: {
      eyebrow: 'Our Story',
      headline: 'More than a boutique.\nA way of life.',
      body: 'Founded in 2018, Maison was built on the belief that getting dressed should feel joyful — not overwhelming. We source only from makers who share our commitment to quality, ethics, and lasting style over passing trends.',
      ctaText: 'Meet the Founders',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2070&q=80',
    },
  },
  MBCollections: {
    description: 'Editorial 3-column collection grid',
    fields: [
      { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'collections', label: 'Collections', type: 'array', arrayFields: [
        { name: 'label', label: 'Collection Name', type: 'text' },
        { name: 'sub', label: 'Subtext', type: 'text' },
        { name: 'image', label: 'Image URL', type: 'text' },
      ]},
    ],
    defaultProps: {
      eyebrow: 'Shop',
      title: 'Current Collections',
      collections: [
        { label: 'New Arrivals', sub: '24 pieces', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80' },
        { label: 'Essentials', sub: 'Year-round staples', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80' },
        { label: 'Sale', sub: 'Up to 40% off', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80' },
      ],
    },
  },
  MBQuote: {
    description: 'Full-width espresso pull quote',
    fields: [
      { name: 'quote', label: 'Quote Text', type: 'textarea' },
      { name: 'attribution', label: 'Attribution', type: 'text' },
    ],
    defaultProps: {
      quote: 'Style is a way of saying who you are without having to speak.',
      attribution: '— Rachel Zoe',
    },
  },
  MBTestimonials: {
    description: 'Minimal 3-column customer reviews on sand',
    fields: [
      { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'rating', label: 'Rating (1-5)', type: 'text' },
        { name: 'text', label: 'Review', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      eyebrow: 'Our Customers',
      title: 'They love it here.',
      reviews: [
        { name: 'Claire B.', rating: 5, text: "I discovered Maison two years ago and haven't shopped anywhere else since. The quality is impeccable and the team actually knows fashion." },
        { name: 'Nadia S.', rating: 5, text: "The curation here is unlike anything I've seen locally. Every piece feels like it was chosen with purpose. My wardrobe has completely transformed." },
        { name: 'Taylor M.', rating: 5, text: 'Ordered online and everything arrived beautifully packaged. Sizing was perfect and the fabric quality is way above the price point.' },
      ],
    },
  },
  MBNewsletter: {
    description: 'Sage green email newsletter signup',
    fields: [
      { name: 'headline', label: 'Headline', type: 'text' },
      { name: 'sub', label: 'Subtitle', type: 'textarea' },
      { name: 'placeholder', label: 'Input Placeholder', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'fine', label: 'Fine Print', type: 'text' },
    ],
    defaultProps: {
      headline: 'Be the first to know.',
      sub: 'New arrivals, private events, and styling tips — straight to your inbox.',
      placeholder: 'Your email address',
      buttonText: 'Subscribe',
      fine: 'No spam, ever. Unsubscribe anytime.',
    },
  },
  MBFooter: {
    description: 'Minimal 4-column sand footer',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'copyright', label: 'Copyright', type: 'text' },
    ],
    defaultProps: {
      businessName: 'Maison Boutique',
      tagline: 'Intentional style. Lasting quality.',
      copyright: '© 2025 Maison Boutique. All rights reserved.',
      shop: ['New Arrivals', 'Essentials', 'Sale', 'Lookbook'],
      company: ['Our Story', 'Sustainability', 'Press', 'Careers'],
      support: ['Sizing Guide', 'Shipping & Returns', 'FAQ', 'Contact Us'],
    },
  },
};

export const MB_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  MBHero: (props) => <MBHero {...props} />,
  MBAbout: (props) => <MBAbout {...props} />,
  MBCollections: (props) => <MBCollections {...props} />,
  MBQuote: (props) => <MBQuote {...props} />,
  MBTestimonials: (props) => <MBTestimonials {...props} />,
  MBNewsletter: (props) => <MBNewsletter {...props} />,
  MBFooter: (props) => <MBFooter {...props} />,
};
