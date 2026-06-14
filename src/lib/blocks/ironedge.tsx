"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Dumbbell, ArrowRight, Star, Zap, CheckCircle, ChevronRight } from 'lucide-react';

// Iron Edge Fitness Block Family
// Black #0A0A0A · Orange #F97316 · Dark Gray #1A1A1A · White #FFFFFF

const IE_BLACK = '#0A0A0A';
const IE_ORANGE = '#F97316';
const IE_DARK = '#141414';
const IE_GRAY = '#1E1E1E';

export function IEHeader(props: any) {
  const businessName = props.businessName || 'IRON EDGE';
  const navLinks: string[] = props.navLinks || ['HOME', 'PROGRAMS', 'ABOUT', 'RESULTS', 'PRICING'];
  return (
    <header style={{ backgroundColor: IE_BLACK }} className="py-4 px-6 md:px-14 flex items-center justify-between sticky top-0 z-50 border-b border-gray-800">
      <div className="flex items-center gap-2.5">
        <div style={{ backgroundColor: IE_ORANGE }} className="w-8 h-8 flex items-center justify-center">
          <Dumbbell className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-black text-lg tracking-[0.15em] uppercase">{businessName}</span>
      </div>
      <nav className="hidden lg:flex items-center gap-7">
        {navLinks.map((link: string, i: number) => (
          <a key={i} href="#" className="text-gray-400 hover:text-white text-xs font-black tracking-widest transition-colors">{link}</a>
        ))}
      </nav>
      <a href="#" style={{ backgroundColor: IE_ORANGE }} className="hidden lg:inline-flex items-center gap-1.5 text-white text-xs font-black px-5 py-2.5 hover:opacity-90 transition-opacity tracking-widest">
        START NOW <ChevronRight className="w-3 h-3" />
      </a>
    </header>
  );
}

export function IEHero(props: any) {
  const headline = props.headline || 'STRONGER.\nLEANER.\nCONFIDENT.';
  const subheading = props.subheading || 'REAL COACHING. REAL RESULTS.';
  const description = props.description || 'Iron Edge is private 1-on-1 personal training built around your specific goals, schedule, and fitness level.';
  const backgroundImage = props.backgroundImage || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070';
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(10,10,10,0.97) 35%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.3) 100%)' }} />
        <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: IE_ORANGE }} />
      </div>
      <div className="relative z-10 px-8 md:px-20 py-24 max-w-3xl">
        <div className="text-xs font-black tracking-[0.4em] uppercase mb-6 flex items-center gap-3" style={{ color: IE_ORANGE }}>
          <Zap className="w-4 h-4 fill-current" /> {subheading}
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 whitespace-pre-line" style={{ letterSpacing: '-0.02em' }}>{headline}</h1>
        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" style={{ backgroundColor: IE_ORANGE }} className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 hover:opacity-90 transition-opacity tracking-widest">
            FREE STRATEGY CALL <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 border border-gray-700 hover:border-gray-500 transition-colors">
            SEE RESULTS
          </a>
        </div>
      </div>
    </section>
  );
}

export function IEStats(props: any) {
  const stats = props.stats || [
    { value: '300+', label: 'Clients Transformed', icon: 'Users' },
    { value: '8+', label: 'Years of Coaching', icon: 'Calendar' },
    { value: '94%', label: 'Goal Achievement Rate', icon: 'TrendingUp' },
    { value: 'NSCA', label: 'Certified Specialist', icon: 'Shield' }
  ];
  return (
    <section style={{ backgroundColor: IE_GRAY }} className="py-12 border-y border-gray-800">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: IE_ORANGE }}>{s.value}</div>
            <div className="text-gray-500 text-xs font-semibold tracking-wider whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IEServices(props: any) {
  const heading = props.heading || 'Training Programs Built Around You';
  const services = props.services || [];
  return (
    <section style={{ backgroundColor: IE_DARK }} className="py-24 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-black tracking-[0.4em] uppercase mb-3" style={{ color: IE_ORANGE }}>Programs</div>
          <h2 className="text-4xl md:text-5xl font-black text-white">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.icon] || Dumbbell;
            return (
              <div key={i} className="group border border-gray-800 hover:border-orange-500 transition-all overflow-hidden" style={{ backgroundColor: IE_GRAY }}>
                {svc.img && <div className="h-40 overflow-hidden relative"><img src={svc.img} alt={svc.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" /><div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }} /></div>}
                <div className="p-5">
                  <Icon className="w-5 h-5 mb-2" style={{ color: IE_ORANGE }} />
                  <h3 className="font-black text-sm text-white mb-1.5">{svc.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IEProcess(props: any) {
  const heading = props.heading || 'Your Transformation Starts Here.';
  const steps = props.steps || [];
  return (
    <section style={{ backgroundColor: IE_BLACK }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-black tracking-[0.4em] uppercase mb-3" style={{ color: IE_ORANGE }}>The Process</div>
          <h2 className="text-4xl font-black text-white">{heading}</h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step: any, i: number) => {
            const Icon = (LucideIcons as any)[step.icon] || CheckCircle;
            return (
              <div key={i} className="text-center relative">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border-2" style={{ borderColor: IE_ORANGE }}>
                  <Icon className="w-6 h-6" style={{ color: IE_ORANGE }} />
                </div>
                <div className="text-xs font-black tracking-widest mb-2" style={{ color: IE_ORANGE }}>0{i + 1}</div>
                <h3 className="font-black text-sm text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IETestimonials(props: any) {
  const heading = props.heading || 'Client Transformations';
  const reviews = props.reviews || [];
  return (
    <section style={{ backgroundColor: IE_GRAY }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-black tracking-[0.4em] uppercase mb-3" style={{ color: IE_ORANGE }}>Results</div>
          <h2 className="text-4xl font-black text-white">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r: any, i: number) => (
            <div key={i} className="p-8 border border-gray-800 hover:border-orange-800 transition-colors" style={{ backgroundColor: IE_DARK }}>
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: IE_ORANGE }} />)}</div>
              <p className="text-gray-400 text-sm leading-relaxed italic mb-5">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                {r.img && <img src={r.img} alt={r.name} className="w-9 h-9 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />}
                <div>
                  <div className="font-black text-white text-xs">{r.name}</div>
                  <div className="text-xs" style={{ color: IE_ORANGE }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IEPricing(props: any) {
  const heading = props.heading || 'Simple, Transparent Pricing.';
  const plans = props.plans || [];
  return (
    <section style={{ backgroundColor: IE_BLACK }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.4em] uppercase mb-3" style={{ color: IE_ORANGE }}>Pricing</div>
          <h2 className="text-4xl font-black text-white">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan: any, i: number) => {
            const Icon = (LucideIcons as any)[plan.icon] || Dumbbell;
            return (
              <div key={i} className={`p-8 border transition-all ${plan.isPopular ? 'border-orange-500' : 'border-gray-800'}`} style={{ backgroundColor: plan.isPopular ? IE_GRAY : IE_DARK }}>
                {plan.isPopular && <div className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: IE_ORANGE }}>Most Popular</div>}
                <Icon className="w-6 h-6 mb-3" style={{ color: IE_ORANGE }} />
                <h3 className="font-black text-white text-lg mb-1">{plan.title}</h3>
                <div className="text-3xl font-black mb-6" style={{ color: IE_ORANGE }}>${plan.price}<span className="text-gray-600 text-base font-medium">/mo</span></div>
                <ul className="space-y-3">
                  {(plan.features || []).map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: IE_ORANGE }} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-8 flex items-center justify-center gap-2 py-3 text-xs font-black tracking-widest transition-all ${plan.isPopular ? 'text-white' : 'text-orange-400 border border-orange-800 hover:border-orange-500'}`} style={plan.isPopular ? { backgroundColor: IE_ORANGE } : {}}>
                  GET STARTED <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IECTA(props: any) {
  const heading = props.heading || 'Your Best Body Is Closer Than You Think.\nStart Today.';
  const buttonText = props.buttonText || 'BOOK FREE STRATEGY CALL';
  return (
    <section style={{ backgroundColor: IE_ORANGE }} className="py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <Dumbbell className="w-10 h-10 text-white/60 mx-auto mb-5" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 whitespace-pre-line" style={{ letterSpacing: '-0.02em' }}>{heading}</h2>
        <a href="#" className="inline-flex items-center gap-2 bg-black text-white font-black text-sm px-10 py-5 hover:bg-gray-900 transition-colors tracking-widest">
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function IEFooter(props: any) {
  const businessName = props.businessName || 'IRON EDGE';
  return (
    <footer style={{ backgroundColor: '#050505' }} className="py-10 px-6 text-center border-t border-gray-900">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Dumbbell className="w-4 h-4" style={{ color: IE_ORANGE }} />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase">{businessName} Fitness</span>
      </div>
      <p className="text-gray-700 text-xs">© 2026 {businessName}. All rights reserved. Results may vary.</p>
    </footer>
  );
}

export const IE_SCHEMAS: Record<string, any> = {
  IEHeader: { description: 'Fitness gym black sticky header', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }, { name: 'navLinks', label: 'Nav Links', type: 'array', arrayFields: [{ name: 'item', label: 'Link', type: 'text' }] }], defaultProps: { businessName: 'IRON EDGE', navLinks: ['HOME', 'PROGRAMS', 'ABOUT', 'RESULTS', 'PRICING'] } },
  IEHero: { description: 'High-contrast fitness hero with orange accent', fields: [{ name: 'headline', label: 'Headline', type: 'textarea' }, { name: 'subheading', label: 'Badge Text', type: 'text' }, { name: 'description', label: 'Description', type: 'textarea' }, { name: 'backgroundImage', label: 'Background Image URL', type: 'text' }], defaultProps: { headline: 'STRONGER.\nLEANER.\nCONFIDENT.', subheading: 'REAL COACHING. REAL RESULTS.', description: '', backgroundImage: '' } },
  IEStats: { description: 'Orange stats bar on dark background', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  IEServices: { description: 'Training programs dark grid', fields: [{ name: 'heading', label: 'Section Heading', type: 'text' }, { name: 'services', label: 'Programs', type: 'array', arrayFields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'icon', label: 'Icon', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { heading: 'Training Programs Built Around You', services: [] } },
  IEProcess: { description: 'Dark numbered process steps', fields: [{ name: 'heading', label: 'Heading', type: 'text' }, { name: 'steps', label: 'Steps', type: 'array', arrayFields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'icon', label: 'Icon', type: 'text' }] }], defaultProps: { heading: 'Your Transformation Starts Here.', steps: [] } },
  IETestimonials: { description: 'Client transformation stories', fields: [{ name: 'heading', label: 'Heading', type: 'text' }, { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [{ name: 'name', label: 'Name', type: 'text' }, { name: 'role', label: 'Role', type: 'text' }, { name: 'quote', label: 'Quote', type: 'textarea' }] }], defaultProps: { heading: 'Client Transformations', reviews: [] } },
  IEPricing: { description: 'Dark pricing cards with orange accents', fields: [{ name: 'heading', label: 'Heading', type: 'text' }, { name: 'plans', label: 'Plans', type: 'array', arrayFields: [{ name: 'title', label: 'Plan Name', type: 'text' }, { name: 'price', label: 'Price (number)', type: 'text' }, { name: 'icon', label: 'Icon', type: 'text' }, { name: 'isPopular', label: 'Most Popular?', type: 'text' }, { name: 'features', label: 'Features', type: 'text' }] }], defaultProps: { heading: 'Simple, Transparent Pricing.', plans: [] } },
  IECTA: { description: 'Orange CTA section', fields: [{ name: 'heading', label: 'Heading', type: 'textarea' }, { name: 'buttonText', label: 'Button Text', type: 'text' }], defaultProps: { heading: "Your Best Body Is Closer Than You Think.\nStart Today.", buttonText: 'BOOK FREE STRATEGY CALL' } },
  IEFooter: { description: 'Minimal dark footer', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }], defaultProps: { businessName: 'IRON EDGE' } },
};

export const IE_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  IEHeader: (props) => <IEHeader {...props} />,
  IEHero: (props) => <IEHero {...props} />,
  IEStats: (props) => <IEStats {...props} />,
  IEServices: (props) => <IEServices {...props} />,
  IEProcess: (props) => <IEProcess {...props} />,
  IETestimonials: (props) => <IETestimonials {...props} />,
  IEPricing: (props) => <IEPricing {...props} />,
  IECTA: (props) => <IECTA {...props} />,
  IEFooter: (props) => <IEFooter {...props} />,
};
