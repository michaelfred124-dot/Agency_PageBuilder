"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Scissors, ArrowRight, Star, Heart } from 'lucide-react';

// Atelier Hair Studio Block Family
// Charcoal #1A1A1A · Blush #F2DCE2 · Rose Gold #B8778A · Warm White #FDFAF9

const AH_DARK = '#1A1A1A';
const AH_BLUSH = '#F2DCE2';
const AH_ROSE = '#B8778A';
const AH_WARM = '#FDFAF9';

export function AHHero(props: any) {
  const title = props.title || 'Where Hair Becomes\nHigh Art.';
  const subtitle = props.subtitle || 'Precision cuts, lived-in color, and luxury treatments in an intimate studio setting.';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074';
  return (
    <section className="relative h-screen flex items-end">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,10,14,0.9) 0%, rgba(20,10,14,0.4) 60%, transparent 100%)' }} />
      </div>
      <div className="relative z-10 px-8 md:px-16 pb-20 w-full">
        <div className="max-w-xl">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: AH_ROSE }}>Atelier Hair Studio</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 whitespace-pre-line" style={{ fontFamily: 'Georgia, serif' }}>{title}</h1>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-sm leading-relaxed">{subtitle}</p>
          <a href="#" style={{ backgroundColor: AH_ROSE }} className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-4 hover:opacity-90 transition-opacity tracking-wider">
            Book Your Session <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function AHAbout(props: any) {
  const title = props.title || "Hi, I'm Sofia.\nYour new favorite stylist.";
  const desc = props.desc || 'With over 12 years behind the chair and advanced training in Paris and New York, I specialize in creating tailored looks that enhance your natural beauty.';
  const image = props.image || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1974';
  return (
    <section style={{ backgroundColor: AH_WARM }} className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
          <img src={image} alt="Stylist" className="w-full h-full object-cover absolute inset-0" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-20">
          <div>
            <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: AH_ROSE }}>Meet Your Stylist</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 whitespace-pre-line leading-tight" style={{ color: AH_DARK, fontFamily: 'Georgia, serif' }}>{title}</h2>
            <p className="text-gray-500 leading-relaxed text-base">{desc}</p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-10 h-[2px]" style={{ backgroundColor: AH_ROSE }} />
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: AH_ROSE }}>By Appointment Only</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AHServices(props: any) {
  const services = props.services || [
    { iconName: 'Scissors', title: 'Precision Cuts', desc: 'Custom cuts tailored to your face shape, texture, and lifestyle.' },
    { iconName: 'Sparkles', title: 'Color & Balayage', desc: 'Lived-in color, bold transformations, and perfect blending.' },
    { iconName: 'Star', title: 'Keratin Treatments', desc: 'Smooth, frizz-free hair for up to 3 months.' },
    { iconName: 'Heart', title: 'Bridal Packages', desc: 'Full-day bridal prep for you and your wedding party.' }
  ];
  return (
    <section style={{ backgroundColor: AH_BLUSH }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: AH_ROSE }}>Services</div>
          <h2 className="text-4xl font-black" style={{ color: AH_DARK, fontFamily: 'Georgia, serif' }}>What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rose-200">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.iconName] || Scissors;
            return (
              <div key={i} className="bg-white p-8">
                <Icon className="w-6 h-6 mb-4" style={{ color: AH_ROSE }} />
                <h3 className="font-black text-base mb-2" style={{ color: AH_DARK }}>{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AHPortfolio(props: any) {
  const images = props.images || [
    { url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800', title: 'Balayage' },
    { url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800', title: 'Color' },
    { url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800', title: 'Cuts' },
    { url: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=800', title: 'Styling' }
  ];
  return (
    <section style={{ backgroundColor: AH_WARM }} className="py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-2" style={{ color: AH_ROSE }}>Portfolio</div>
          <h2 className="text-3xl font-black" style={{ color: AH_DARK, fontFamily: 'Georgia, serif' }}>Recent Work</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img: any, i: number) => (
            <div key={i} className="group relative overflow-hidden aspect-[3/4]">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to top, rgba(26,10,20,0.75), transparent)' }}>
                <span className="text-white text-xs font-bold tracking-wider">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AHTestimonials(props: any) {
  const testimonials = props.testimonials || [];
  return (
    <section style={{ backgroundColor: AH_DARK }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: AH_ROSE }}>Client Love</div>
          <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>What Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <div key={i} style={{ backgroundColor: '#2A1A20' }} className="p-8 rounded-sm">
              <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: AH_ROSE }} />)}</div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
              <div className="text-xs font-bold tracking-wide" style={{ color: AH_ROSE }}>— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AHCta(props: any) {
  const title = props.title || 'Ready for your best hair yet?';
  const image = props.image || 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2070';
  return (
    <section className="relative py-32 flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,20,0.75)' }} />
      </div>
      <div className="relative z-10">
        <Heart className="w-8 h-8 mx-auto mb-5" style={{ color: AH_ROSE }} />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>{title}</h2>
        <a href="#" style={{ backgroundColor: AH_ROSE }} className="inline-flex items-center gap-2 text-white font-semibold text-sm px-10 py-4 hover:opacity-90 transition-opacity tracking-widest">
          Request Appointment <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function AHFooter(props: any) {
  const text = props.text || '© 2026 Atelier Hair Studio · All rights reserved · By appointment only';
  return (
    <footer style={{ backgroundColor: AH_DARK }} className="py-10 px-6 text-center border-t border-gray-800">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Scissors className="w-4 h-4" style={{ color: AH_ROSE }} />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase">Atelier Hair Studio</span>
      </div>
      <p className="text-gray-600 text-xs">{text}</p>
    </footer>
  );
}

export const AH_SCHEMAS: Record<string, any> = {
  AHHero: { description: 'Full-screen editorial hair salon hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Where Hair Becomes\nHigh Art.', subtitle: 'Precision cuts, lived-in color, and luxury treatments.', bgImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074' } },
  AHAbout: { description: 'Stylist bio with 50/50 split layout', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: "Hi, I'm Sofia.\nYour new favorite stylist.", desc: '', image: '' } },
  AHServices: { description: 'Service grid on blush background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  AHPortfolio: { description: 'Work portfolio photo grid', fields: [{ name: 'images', label: 'Images', type: 'array', arrayFields: [{ name: 'url', label: 'Image URL', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }] }], defaultProps: { images: [] } },
  AHTestimonials: { description: 'Dark client testimonials', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }] }], defaultProps: { testimonials: [] } },
  AHCta: { description: 'Full-bleed booking CTA', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'image', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Ready for your best hair yet?', image: '' } },
  AHFooter: { description: 'Minimal dark footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Atelier Hair Studio · By appointment only' } },
};

export const AH_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  AHHero: (props) => <AHHero {...props} />,
  AHAbout: (props) => <AHAbout {...props} />,
  AHServices: (props) => <AHServices {...props} />,
  AHPortfolio: (props) => <AHPortfolio {...props} />,
  AHTestimonials: (props) => <AHTestimonials {...props} />,
  AHCta: (props) => <AHCta {...props} />,
  AHFooter: (props) => <AHFooter {...props} />,
};
