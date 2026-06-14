"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Sparkles, ArrowRight, Star, CheckCircle, Shield, Phone, Mail, MapPin } from 'lucide-react';

// Spotless Home Co. Block Family
// Turquoise #0694A2 · White #FFFFFF · Light #F0FDFA · Dark #134E4A

const SC_TEAL = '#0694A2';
const SC_LIGHT = '#F0FDFA';
const SC_DARK = '#134E4A';
const SC_WARM = '#FAFAFA';

export function SCHero(props: any) {
  const title = props.title || 'A Spotless Home.\nFresh Every Time.';
  const subtitle = props.subtitle || 'Reliable, thorough, and trustworthy home cleaning services. We treat your home like our own.';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070';
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19,78,74,0.92) 0%, rgba(6,148,162,0.7) 60%, rgba(6,148,162,0.3) 100%)' }} />
      </div>
      <div className="relative z-10 px-8 md:px-20 py-24 max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full bg-white/20 text-white">
          <Sparkles className="w-3 h-3" /> Fully Insured · Background Checked
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line">{title}</h1>
        <p className="text-teal-100 text-lg mb-10 leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: SC_TEAL + 'CC', border: '2px solid white' }}>
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:5555551234" className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-sm border border-white/40 hover:border-white/70 transition-colors">
            <Phone className="w-4 h-4" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export function SCStats(props: any) {
  const stats = props.stats || [
    { value: '1,200+', label: 'Homes Cleaned', icon: 'Home' },
    { value: '7+', label: 'Years in Business', icon: 'Calendar' },
    { value: '4.9★', label: 'Google & Yelp Rating', icon: 'Star' },
    { value: '100%', label: 'Background Checked', icon: 'Shield' }
  ];
  return (
    <section style={{ backgroundColor: SC_DARK }} className="py-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
            <div className="text-teal-400 text-xs font-semibold tracking-wide whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SCServices(props: any) {
  const services = props.services || [];
  return (
    <section style={{ backgroundColor: SC_LIGHT }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: SC_TEAL }}>Services</div>
          <h2 className="text-4xl font-black" style={{ color: SC_DARK }}>Everything We Clean</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.iconName] || Sparkles;
            return (
              <div key={i} className="bg-white p-7 rounded-xl border border-teal-100 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: SC_TEAL + '15' }}>
                  <Icon className="w-5 h-5" style={{ color: SC_TEAL }} />
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: SC_DARK }}>{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SCAbout(props: any) {
  const title = props.title || 'Family-owned. Locally trusted.\nSince 2017.';
  const desc = props.desc || 'Spotless Home Co. was founded with one goal: to give busy homeowners one less thing to worry about.';
  const image = props.image || 'https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1200';
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[55vh]">
      <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
        <img src={image} alt="" className="w-full h-full object-cover absolute inset-0" />
      </div>
      <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: SC_WARM }}>
        <div>
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: SC_TEAL }}>Our Story</div>
          <h2 className="text-4xl font-black mb-5 whitespace-pre-line" style={{ color: SC_DARK }}>{title}</h2>
          <p className="text-gray-500 leading-relaxed mb-6">{desc}</p>
          <div className="flex flex-wrap gap-4">
            {['Fully Insured', 'Background Checked', 'Eco-Friendly Options'].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs font-bold" style={{ color: SC_TEAL }}>
                <CheckCircle className="w-4 h-4" /> {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SCTestimonials(props: any) {
  const testimonials = props.testimonials || [];
  return (
    <section style={{ backgroundColor: SC_LIGHT }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: SC_TEAL }}>Reviews</div>
          <h2 className="text-4xl font-black" style={{ color: SC_DARK }}>What Homeowners Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-l-4" style={{ borderLeftColor: SC_TEAL }}>
              <div className="flex mb-3">{[...Array(parseInt(t.rating) || 5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"{t.text}"</p>
              <div className="font-black text-sm" style={{ color: SC_DARK }}>— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SCCta(props: any) {
  const title = props.title || 'Get your free quote today.\nFirst clean is 15% off.';
  const subtitle = props.subtitle || 'Book online in 2 minutes or give us a call. We match any competitor price.';
  return (
    <section style={{ backgroundColor: SC_TEAL }} className="py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <Sparkles className="w-10 h-10 text-white/60 mx-auto mb-5" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 whitespace-pre-line leading-tight">{title}</h2>
        <p className="text-teal-100 text-lg mb-10">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 bg-white font-black text-sm px-10 py-5 rounded-sm hover:bg-teal-50 transition-colors" style={{ color: SC_DARK }}>
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:5555551234" className="inline-flex items-center gap-2 text-white font-bold text-sm px-10 py-5 border-2 border-white/40 rounded-sm hover:border-white transition-colors">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export function SCFooter(props: any) {
  const text = props.text || '© 2026 Spotless Home Co. · Fully Insured · Background Checked Team · Serving the Metro Area';
  return (
    <footer style={{ backgroundColor: SC_DARK }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-teal-400" />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase">Spotless Home Co.</span>
      </div>
      <p className="text-teal-900 text-xs">{text}</p>
    </footer>
  );
}

export const SC_SCHEMAS: Record<string, any> = {
  SCHero: { description: 'Home cleaning teal hero with gradient overlay', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'A Spotless Home.\nFresh Every Time.', subtitle: 'Reliable, thorough, and trustworthy home cleaning.', bgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070' } },
  SCStats: { description: 'Dark teal stats bar', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  SCServices: { description: 'Cleaning service cards on light teal background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  SCAbout: { description: 'About split with photo and trust badges', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: 'Family-owned. Locally trusted.', desc: '', image: '' } },
  SCTestimonials: { description: 'Homeowner reviews with teal left border', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'rating', label: 'Rating (1-5)', type: 'text' }] }], defaultProps: { testimonials: [] } },
  SCCta: { description: 'Teal CTA with free quote offer', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }], defaultProps: { title: 'Get your free quote today.\nFirst clean is 15% off.', subtitle: 'Book online in 2 minutes.' } },
  SCFooter: { description: 'Dark teal footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Spotless Home Co.' } },
};

export const SC_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  SCHero: (props) => <SCHero {...props} />,
  SCStats: (props) => <SCStats {...props} />,
  SCServices: (props) => <SCServices {...props} />,
  SCAbout: (props) => <SCAbout {...props} />,
  SCTestimonials: (props) => <SCTestimonials {...props} />,
  SCCta: (props) => <SCCta {...props} />,
  SCFooter: (props) => <SCFooter {...props} />,
};
