"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Heart, ArrowRight, Star, Flower2 } from 'lucide-react';

// Golden Thread Events Block Family
// Blush #F7E8EC · Champagne #F5E6C8 · Sage #6B8F6B · Gold #C49A3C

const GT_BLUSH = '#F7E8EC';
const GT_CHAMPAGNE = '#F5E6C8';
const GT_SAGE = '#6B8F6B';
const GT_GOLD = '#C49A3C';
const GT_DARK = '#2C1F1F';

export function GTHero(props: any) {
  const title = props.title || 'Your Dream Wedding,\nFlawlessly Executed.';
  const subtitle = props.subtitle || 'Luxury wedding planning and design for couples who want every detail to be absolutely perfect.';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070';
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(44,31,31,0.88) 0%, rgba(44,31,31,0.5) 55%, rgba(44,31,31,0.2) 100%)' }} />
      </div>
      <div className="relative z-10 px-10 md:px-20 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-[1px]" style={{ backgroundColor: GT_GOLD }} />
          <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: GT_GOLD }}>The Golden Thread Events</span>
          <div className="w-6 h-[1px]" style={{ backgroundColor: GT_GOLD }} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line" style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}>{title}</h1>
        <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-md">{subtitle}</p>
        <a href="#" style={{ backgroundColor: GT_SAGE }} className="inline-flex items-center gap-2 text-white font-semibold text-sm px-10 py-4 rounded-sm hover:opacity-90 transition-opacity tracking-wider">
          Begin Your Journey <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function GTAbout(props: any) {
  const title = props.title || "Hi, I'm Claire.\nI turn visions into memories.";
  const desc = props.desc || "I've been planning weddings for 10+ years. My approach blends high-level logistics with creative design — so your day is not only beautiful but runs without a hitch.";
  const image = props.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974';
  return (
    <section style={{ backgroundColor: GT_BLUSH }} className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="flex items-center px-10 md:px-16 py-20">
          <div>
            <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: GT_SAGE }}>Meet Your Planner</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 whitespace-pre-line leading-tight" style={{ color: GT_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>{title}</h2>
            <p className="text-gray-500 leading-relaxed text-base mb-8">{desc}</p>
            <div className="flex items-center gap-3">
              <Heart className="w-4 h-4 fill-current" style={{ color: GT_GOLD }} />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">200+ Weddings Planned</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
          <img src={image} alt="" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(247,232,236,0.3), transparent)' }} />
        </div>
      </div>
    </section>
  );
}

export function GTServices(props: any) {
  const services = props.services || [
    { iconName: 'Star', title: 'Full Planning', desc: 'From first meeting to final farewell — we handle every detail of your entire wedding journey.' },
    { iconName: 'CheckCircle', title: 'Day-Of Coordination', desc: 'You relax, we run everything. Months of prep distilled into flawless execution.' },
    { iconName: 'Flower2', title: 'Design & Styling', desc: 'Moodboards, florals, tablescapes, and décor direction to bring your vision to life.' },
    { iconName: 'Heart', title: 'Elopements', desc: 'Intimate, meaningful ceremonies for couples who want something personal and unforgettable.' }
  ];
  return (
    <section style={{ backgroundColor: GT_CHAMPAGNE }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: GT_SAGE }}>Services</div>
          <h2 className="text-4xl font-black" style={{ color: GT_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>How We Help</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.iconName] || Flower2;
            return (
              <div key={i} className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: GT_SAGE + '20' }}>
                  <Icon className="w-5 h-5" style={{ color: GT_SAGE }} />
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: GT_DARK, fontFamily: 'Georgia, serif' }}>{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GTPortfolio(props: any) {
  const images = props.images || [
    { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800', title: 'Outdoor Ceremony' },
    { url: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800', title: 'Garden Reception' },
    { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800', title: 'Florals & Design' },
    { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800', title: 'Reception Details' }
  ];
  return (
    <section style={{ backgroundColor: GT_BLUSH }} className="py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-2" style={{ color: GT_SAGE }}>Portfolio</div>
          <h2 className="text-3xl font-black" style={{ color: GT_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>Our Work</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img: any, i: number) => (
            <div key={i} className="group relative overflow-hidden aspect-square">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to top, rgba(44,31,31,0.7), transparent)' }}>
                <span className="text-white text-xs font-semibold tracking-wider">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GTTestimonials(props: any) {
  const testimonials = props.testimonials || [];
  return (
    <section style={{ backgroundColor: GT_CHAMPAGNE }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: GT_SAGE }}>Kind Words</div>
          <h2 className="text-4xl font-black" style={{ color: GT_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>Our Couples</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white p-8 shadow-sm text-center">
              <div className="text-5xl font-black mb-3" style={{ color: GT_GOLD + '40', fontFamily: 'Georgia, serif' }}>"</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">{t.text}</p>
              <div className="flex items-center justify-center gap-2 mb-1">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: GT_GOLD }} />)}
              </div>
              <div className="font-bold text-sm" style={{ color: GT_SAGE }}>— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GTCta(props: any) {
  const title = props.title || 'Your perfect day starts with one conversation.';
  const image = props.image || 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070';
  return (
    <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(44,31,31,0.72)' }} />
      </div>
      <div className="relative z-10 max-w-xl px-6">
        <Flower2 className="w-8 h-8 mx-auto mb-5" style={{ color: GT_GOLD }} />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8" style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}>{title}</h2>
        <a href="#" style={{ backgroundColor: GT_SAGE }} className="inline-flex items-center gap-2 text-white font-semibold text-sm px-10 py-4 hover:opacity-90 transition-opacity tracking-wider">
          Schedule a Consultation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function GTFooter(props: any) {
  const text = props.text || '© 2026 The Golden Thread Events · Charleston, SC · Serving the Southeast';
  return (
    <footer style={{ backgroundColor: GT_DARK }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Flower2 className="w-4 h-4" style={{ color: GT_GOLD }} />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase" style={{ fontFamily: 'Georgia, serif' }}>The Golden Thread</span>
      </div>
      <p className="text-gray-600 text-xs">{text}</p>
    </footer>
  );
}

export const GT_SCHEMAS: Record<string, any> = {
  GTHero: { description: 'Wedding planner romantic full-screen hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Your Dream Wedding,\nFlawlessly Executed.', subtitle: 'Luxury wedding planning for couples who want perfection.', bgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070' } },
  GTAbout: { description: 'Planner bio with blush split layout', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: "Hi, I'm Claire.", desc: '', image: '' } },
  GTServices: { description: 'Service cards on champagne background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  GTPortfolio: { description: 'Wedding portfolio photo grid', fields: [{ name: 'images', label: 'Portfolio Images', type: 'array', arrayFields: [{ name: 'url', label: 'Image URL', type: 'text' }, { name: 'title', label: 'Caption', type: 'text' }] }], defaultProps: { images: [] } },
  GTTestimonials: { description: 'Couple testimonials on champagne background', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Quote', type: 'textarea' }, { name: 'author', label: 'Couple Name', type: 'text' }] }], defaultProps: { testimonials: [] } },
  GTCta: { description: 'Romantic full-bleed CTA with dark overlay', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'image', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Your perfect day starts with one conversation.', image: '' } },
  GTFooter: { description: 'Dark wedding planner footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 The Golden Thread Events' } },
};

export const GT_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  GTHero: (props) => <GTHero {...props} />,
  GTAbout: (props) => <GTAbout {...props} />,
  GTServices: (props) => <GTServices {...props} />,
  GTPortfolio: (props) => <GTPortfolio {...props} />,
  GTTestimonials: (props) => <GTTestimonials {...props} />,
  GTCta: (props) => <GTCta {...props} />,
  GTFooter: (props) => <GTFooter {...props} />,
};
