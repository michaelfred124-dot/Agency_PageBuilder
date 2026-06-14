"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Scale, Phone, ArrowRight, Star, Shield, CheckCircle, ChevronRight } from 'lucide-react';

// Sterling Law Group Block Family
// Navy #1E2D5A · Gold #C49A3C · Cream #FAF8F2 · Slate #4A5568

const SL_NAVY = '#1E2D5A';
const SL_GOLD = '#C49A3C';
const SL_CREAM = '#FAF8F2';
const SL_SLATE = '#4A5568';

export function SLHeader(props: any) {
  const businessName = props.businessName || 'Sterling Law';
  const navLinks: string[] = props.navLinks || ['Practice Areas', 'About Us', 'Results', 'Contact'];
  return (
    <header style={{ backgroundColor: SL_NAVY }} className="py-4 px-6 md:px-16 flex items-center justify-between sticky top-0 z-50 shadow-xl">
      <div className="flex items-center gap-3">
        <div style={{ backgroundColor: SL_GOLD }} className="w-9 h-9 rounded-sm flex items-center justify-center">
          <Scale className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="text-white font-black text-lg tracking-wider uppercase">{businessName}</span>
          <div className="text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: SL_GOLD }}>Attorneys at Law</div>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link: string, i: number) => (
          <a key={i} href="#" className="text-white/75 hover:text-white text-sm font-semibold tracking-wide transition-colors">{link}</a>
        ))}
      </nav>
      <a href="tel:5551234567" style={{ border: `2px solid ${SL_GOLD}`, color: SL_GOLD }} className="hidden lg:inline-flex items-center gap-2 text-sm font-black px-5 py-2 hover:bg-white/10 transition-all">
        <Phone className="w-4 h-4" /> Free Consultation
      </a>
    </header>
  );
}

export function SLHero(props: any) {
  const headline = props.headline || 'TRUSTED.\nEXPERIENCED.\nRESULTS-DRIVEN.';
  const subheading = props.subheading || 'YOUR RIGHTS. OUR PRIORITY.';
  const description = props.description || 'Aggressive legal representation for individuals and businesses.';
  const backgroundImage = props.backgroundImage || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070';
  return (
    <section className="relative min-h-[90vh] flex items-center" style={{ backgroundColor: SL_NAVY }}>
      <div className="absolute inset-0 overflow-hidden">
        <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${SL_NAVY} 45%, transparent 100%)` }} />
      </div>
      <div className="relative z-10 px-6 md:px-16 py-24 max-w-3xl">
        <div className="text-xs font-black tracking-[0.3em] uppercase mb-5 flex items-center gap-2" style={{ color: SL_GOLD }}>
          <div className="w-8 h-[2px]" style={{ backgroundColor: SL_GOLD }} />
          {subheading}
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tight whitespace-pre-line">{headline}</h1>
        <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" style={{ backgroundColor: SL_GOLD }} className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 hover:opacity-90 transition-opacity tracking-wide">
            FREE CONSULTATION <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 border border-white/30 hover:border-white/60 transition-colors">
            OUR RESULTS <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SLStats(props: any) {
  const stats = props.stats || [
    { value: '25+', label: 'Years of Excellence', icon: 'Scale' },
    { value: '2,000+', label: 'Cases Won', icon: 'Users' },
    { value: '$50M+', label: 'Recovered for Clients', icon: 'Shield' },
    { value: '98%', label: 'Client Satisfaction', icon: 'Star' }
  ];
  return (
    <section style={{ backgroundColor: SL_GOLD }} className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
            <div className="text-white/80 text-xs font-semibold tracking-wide uppercase whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SLServices(props: any) {
  const heading = props.heading || 'Our Practice Areas';
  const services = props.services || [];
  return (
    <section style={{ backgroundColor: SL_CREAM }} className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: SL_GOLD }}>What We Do</div>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: SL_NAVY }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.icon] || Scale;
            return (
              <div key={i} className="bg-white p-7 border-t-4 shadow-sm hover:shadow-md transition-shadow" style={{ borderTopColor: SL_GOLD }}>
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-sm" style={{ backgroundColor: SL_NAVY + '15' }}>
                  <Icon className="w-6 h-6" style={{ color: SL_NAVY }} />
                </div>
                {svc.img && <img src={svc.img} alt={svc.title} className="w-full h-32 object-cover mb-4 rounded" />}
                <h3 className="text-base font-black mb-2" style={{ color: SL_NAVY }}>{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SLProcess(props: any) {
  const heading = props.heading || 'How We Work';
  const steps = props.steps || [];
  return (
    <section style={{ backgroundColor: SL_NAVY }} className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: SL_GOLD }}>Our Process</div>
          <h2 className="text-4xl font-black text-white whitespace-pre-line">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: any, i: number) => {
            const Icon = (LucideIcons as any)[step.icon] || CheckCircle;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 border-2" style={{ borderColor: SL_GOLD }}>
                  <Icon className="w-7 h-7" style={{ color: SL_GOLD }} />
                </div>
                <div className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: SL_GOLD }}>Step {i + 1}</div>
                <h3 className="text-base font-black text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SLTestimonials(props: any) {
  const heading = props.heading || 'Client Success Stories';
  const reviews = props.reviews || [];
  return (
    <section style={{ backgroundColor: SL_CREAM }} className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: SL_GOLD }}>Testimonials</div>
          <h2 className="text-4xl font-black" style={{ color: SL_NAVY }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r: any, i: number) => (
            <div key={i} className="bg-white p-8 shadow-sm border-l-4" style={{ borderLeftColor: SL_GOLD }}>
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: SL_GOLD }} />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                {r.img && <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />}
                <div>
                  <div className="font-black text-sm" style={{ color: SL_NAVY }}>{r.name}</div>
                  <div className="text-xs text-gray-400">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SLCTA(props: any) {
  const heading = props.heading || "Don't Navigate the Legal System Alone.\nGet Expert Representation Today.";
  const buttonText = props.buttonText || 'SCHEDULE FREE CONSULTATION';
  return (
    <section style={{ backgroundColor: SL_NAVY }} className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <Shield className="w-12 h-12 mx-auto mb-6" style={{ color: SL_GOLD }} />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight whitespace-pre-line">{heading}</h2>
        <a href="#" style={{ backgroundColor: SL_GOLD }} className="inline-flex items-center gap-2 text-white font-black text-sm px-10 py-5 hover:opacity-90 transition-opacity tracking-widest">
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function SLFooter(props: any) {
  const businessName = props.businessName || 'STERLING LAW';
  return (
    <footer style={{ backgroundColor: '#10192E' }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Scale className="w-4 h-4" style={{ color: SL_GOLD }} />
        <span className="text-white font-black tracking-wider text-sm">{businessName} GROUP</span>
      </div>
      <p className="text-white/40 text-xs">© 2026 {businessName}. All rights reserved. Attorney advertising. Prior results do not guarantee a similar outcome.</p>
    </footer>
  );
}

export const SL_SCHEMAS: Record<string, any> = {
  SLHeader: { description: 'Law firm sticky header with logo and navigation', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }, { name: 'navLinks', label: 'Nav Links', type: 'array', arrayFields: [{ name: 'item', label: 'Link', type: 'text' }] }], defaultProps: { businessName: 'STERLING LAW', navLinks: ['HOME', 'PRACTICE AREAS', 'ABOUT US', 'RESULTS', 'CONTACT'] } },
  SLHero: { description: 'Full-height law firm hero with navy overlay', fields: [{ name: 'headline', label: 'Headline', type: 'textarea' }, { name: 'subheading', label: 'Subheading', type: 'text' }, { name: 'description', label: 'Description', type: 'textarea' }, { name: 'backgroundImage', label: 'Background Image URL', type: 'text' }], defaultProps: { headline: 'TRUSTED.\nEXPERIENCED.\nRESULTS-DRIVEN.', subheading: 'YOUR RIGHTS. OUR PRIORITY.', description: 'Aggressive representation for individuals and businesses.', backgroundImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070' } },
  SLStats: { description: 'Gold stats bar with key metrics', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }, { name: 'icon', label: 'Icon', type: 'text' }] }], defaultProps: { stats: [{ value: '25+', label: 'Years of Excellence', icon: 'Scale' }, { value: '$50M+', label: 'Recovered', icon: 'Shield' }] } },
  SLServices: { description: 'Practice areas grid with icon cards', fields: [{ name: 'heading', label: 'Section Heading', type: 'text' }, { name: 'services', label: 'Practice Areas', type: 'array', arrayFields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'icon', label: 'Icon Name', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { heading: 'Our Practice Areas', services: [] } },
  SLProcess: { description: 'Navy process steps section', fields: [{ name: 'heading', label: 'Section Heading', type: 'textarea' }, { name: 'steps', label: 'Steps', type: 'array', arrayFields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'icon', label: 'Icon', type: 'text' }] }], defaultProps: { heading: 'How We Work', steps: [] } },
  SLTestimonials: { description: 'Gold-accented client testimonials', fields: [{ name: 'heading', label: 'Section Heading', type: 'text' }, { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [{ name: 'name', label: 'Name', type: 'text' }, { name: 'role', label: 'Role', type: 'text' }, { name: 'quote', label: 'Quote', type: 'textarea' }, { name: 'img', label: 'Photo URL', type: 'text' }] }], defaultProps: { heading: 'Client Success Stories', reviews: [] } },
  SLCTA: { description: 'Navy CTA section with gold button', fields: [{ name: 'heading', label: 'Heading', type: 'textarea' }, { name: 'buttonText', label: 'Button Text', type: 'text' }], defaultProps: { heading: "Don't Navigate the Legal System Alone.\nGet Expert Representation Today.", buttonText: 'SCHEDULE FREE CONSULTATION' } },
  SLFooter: { description: 'Law firm footer with disclaimer', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }], defaultProps: { businessName: 'STERLING LAW' } },
};

export const SL_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  SLHeader: (props) => <SLHeader {...props} />,
  SLHero: (props) => <SLHero {...props} />,
  SLStats: (props) => <SLStats {...props} />,
  SLServices: (props) => <SLServices {...props} />,
  SLProcess: (props) => <SLProcess {...props} />,
  SLTestimonials: (props) => <SLTestimonials {...props} />,
  SLCTA: (props) => <SLCTA {...props} />,
  SLFooter: (props) => <SLFooter {...props} />,
};
