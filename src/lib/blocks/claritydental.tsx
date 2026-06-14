"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Star, ArrowRight, Shield, CheckCircle, Smile } from 'lucide-react';

// Clarity Dental Studio Block Family
// Sky Blue #0284C7 · White #FFFFFF · Mint #D1FAE5 · Light #F0F9FF

const CD_BLUE = '#0284C7';
const CD_LIGHT = '#F0F9FF';
const CD_MINT = '#ECFDF5';
const CD_DARK = '#0C4A6E';

export function CDHeader(props: any) {
  const businessName = props.businessName || 'CLARITY DENTAL';
  const navLinks: string[] = props.navLinks || ['HOME', 'SERVICES', 'ABOUT US', 'PATIENT INFO', 'BOOK NOW'];
  return (
    <header className="bg-white py-4 px-6 md:px-14 flex items-center justify-between sticky top-0 z-50 shadow-sm border-b border-sky-100">
      <div className="flex items-center gap-3">
        <div style={{ backgroundColor: CD_BLUE }} className="w-9 h-9 rounded-full flex items-center justify-center">
          <Smile className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="font-black text-base tracking-wider" style={{ color: CD_DARK }}>{businessName}</span>
          <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-sky-400 mt-0.5">Studio</div>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-7">
        {navLinks.map((link: string, i: number) => (
          <a key={i} href="#" className="text-gray-500 hover:text-sky-600 text-xs font-bold tracking-wider transition-colors">{link}</a>
        ))}
      </nav>
      <a href="#" style={{ backgroundColor: CD_BLUE }} className="hidden lg:inline-flex items-center gap-2 text-white text-xs font-black px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
        Book Appointment
      </a>
    </header>
  );
}

export function CDHero(props: any) {
  const headline = props.headline || 'YOUR SMILE.\nOUR PASSION.\nPERFECTED.';
  const subheading = props.subheading || 'GENTLE CARE. STUNNING RESULTS.';
  const description = props.description || 'Clarity Dental Studio provides modern, anxiety-free dental care for the whole family.';
  const backgroundImage = props.backgroundImage || 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070';
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: CD_DARK }}>
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,74,110,0.95) 30%, rgba(2,132,199,0.5) 100%)' }} />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: CD_BLUE }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#BAE6FD' }} />
      </div>
      <div className="relative z-10 px-8 md:px-20 py-24 max-w-3xl">
        <div className="text-xs font-black tracking-[0.4em] uppercase mb-5 text-sky-300">{subheading}</div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 whitespace-pre-line" style={{ letterSpacing: '-0.02em' }}>{headline}</h1>
        <p className="text-sky-100 text-lg mb-10 max-w-lg leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" style={{ backgroundColor: CD_BLUE }} className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Request Appointment <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-sky-200 font-semibold text-sm px-8 py-4 border border-sky-700 rounded-full hover:border-sky-400 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export function CDStats(props: any) {
  const stats = props.stats || [
    { value: '5,000+', label: 'Happy Patients Served', icon: 'Users' },
    { value: '15+', label: 'Years of Expert Care', icon: 'Calendar' },
    { value: '4.9★', label: 'Google Rating', icon: 'Star' },
    { value: 'Same-Day', label: 'Emergency Appointments', icon: 'Zap' }
  ];
  return (
    <section style={{ backgroundColor: CD_LIGHT }} className="py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-5xl font-black mb-2" style={{ color: CD_BLUE }}>{s.value}</div>
            <div className="text-sky-700 text-xs font-semibold tracking-wide whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CDServices(props: any) {
  const heading = props.heading || 'Comprehensive Dental Services';
  const services = props.services || [];
  return (
    <section className="bg-white py-24 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: CD_BLUE }}>What We Offer</div>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: CD_DARK }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.icon] || Smile;
            return (
              <div key={i} className="group rounded-2xl p-7 border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all" style={{ backgroundColor: CD_LIGHT }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: CD_BLUE + '18' }}>
                  <Icon className="w-6 h-6" style={{ color: CD_BLUE }} />
                </div>
                {svc.img && <img src={svc.img} alt={svc.title} className="w-full h-28 object-cover rounded-lg mb-4" />}
                <h3 className="font-black text-sm mb-2" style={{ color: CD_DARK }}>{svc.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CDTestimonials(props: any) {
  const heading = props.heading || 'Real Patients. Real Smiles.';
  const reviews = props.reviews || [];
  return (
    <section style={{ backgroundColor: CD_MINT }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: CD_BLUE }}>Testimonials</div>
          <h2 className="text-4xl font-black" style={{ color: CD_DARK }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r: any, i: number) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                {r.img && <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />}
                <div>
                  <div className="font-black text-sm" style={{ color: CD_DARK }}>{r.name}</div>
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

export function CDPricing(props: any) {
  const heading = props.heading || 'Membership Plans for Uninsured Patients';
  const plans = props.plans || [];
  return (
    <section className="bg-white py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: CD_BLUE }}>Membership</div>
          <h2 className="text-4xl font-black" style={{ color: CD_DARK }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan: any, i: number) => {
            const Icon = (LucideIcons as any)[plan.icon] || Shield;
            return (
              <div key={i} className={`rounded-2xl p-8 border-2 transition-all ${plan.isPopular ? 'border-sky-500 shadow-lg shadow-sky-100' : 'border-gray-100'}`}>
                {plan.isPopular && <div className="text-xs font-black tracking-widest uppercase mb-4 text-white px-3 py-1 rounded-full inline-block" style={{ backgroundColor: CD_BLUE }}>Most Popular</div>}
                <Icon className="w-6 h-6 mb-3" style={{ color: CD_BLUE }} />
                <h3 className="font-black text-lg mb-1" style={{ color: CD_DARK }}>{plan.title}</h3>
                <div className="text-3xl font-black mb-6" style={{ color: CD_BLUE }}>${plan.price}</div>
                <ul className="space-y-3">
                  {(plan.features || []).map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: CD_BLUE }} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 flex items-center justify-center py-3 text-xs font-black tracking-widest rounded-full border-2 transition-all hover:opacity-80" style={{ borderColor: CD_BLUE, color: plan.isPopular ? 'white' : CD_BLUE, backgroundColor: plan.isPopular ? CD_BLUE : 'transparent' }}>
                  GET STARTED
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CDCTA(props: any) {
  const heading = props.heading || 'Ready for a Smile You Love?\nBook Your Visit Today.';
  const buttonText = props.buttonText || 'REQUEST AN APPOINTMENT';
  return (
    <section style={{ backgroundColor: CD_BLUE }} className="py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <Smile className="w-12 h-12 text-white/60 mx-auto mb-5" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 whitespace-pre-line leading-tight">{heading}</h2>
        <a href="#" className="inline-flex items-center gap-2 bg-white font-black text-sm px-10 py-5 rounded-full hover:bg-sky-50 transition-colors" style={{ color: CD_BLUE }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function CDFooter(props: any) {
  const businessName = props.businessName || 'CLARITY DENTAL';
  return (
    <footer style={{ backgroundColor: CD_DARK }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Smile className="w-4 h-4 text-sky-400" />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase">{businessName} Studio</span>
      </div>
      <p className="text-sky-900 text-xs">© 2026 {businessName}. All rights reserved. Accepting new patients.</p>
    </footer>
  );
}

export const CD_SCHEMAS: Record<string, any> = {
  CDHeader: { description: 'Dental clinic white header with rounded CTA', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }, { name: 'navLinks', label: 'Nav Links', type: 'array', arrayFields: [{ name: 'item', label: 'Link', type: 'text' }] }], defaultProps: { businessName: 'CLARITY DENTAL', navLinks: ['HOME', 'SERVICES', 'ABOUT US', 'PATIENT INFO', 'BOOK NOW'] } },
  CDHero: { description: 'Dental hero with sky blue gradient', fields: [{ name: 'headline', label: 'Headline', type: 'textarea' }, { name: 'subheading', label: 'Badge Text', type: 'text' }, { name: 'description', label: 'Description', type: 'textarea' }, { name: 'backgroundImage', label: 'Background Image URL', type: 'text' }], defaultProps: { headline: 'YOUR SMILE.\nOUR PASSION.\nPERFECTED.', subheading: 'GENTLE CARE. STUNNING RESULTS.', description: '', backgroundImage: '' } },
  CDStats: { description: 'Light blue stats bar', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  CDServices: { description: 'Dental service cards on light background', fields: [{ name: 'heading', label: 'Section Heading', type: 'text' }, { name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'icon', label: 'Icon', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { heading: 'Comprehensive Dental Services', services: [] } },
  CDTestimonials: { description: 'Patient testimonials on mint background', fields: [{ name: 'heading', label: 'Heading', type: 'text' }, { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [{ name: 'name', label: 'Name', type: 'text' }, { name: 'role', label: 'Role', type: 'text' }, { name: 'quote', label: 'Quote', type: 'textarea' }] }], defaultProps: { heading: 'Real Patients. Real Smiles.', reviews: [] } },
  CDPricing: { description: 'Membership plan pricing cards', fields: [{ name: 'heading', label: 'Heading', type: 'text' }, { name: 'plans', label: 'Plans', type: 'array', arrayFields: [{ name: 'title', label: 'Plan Name', type: 'text' }, { name: 'price', label: 'Price', type: 'text' }, { name: 'icon', label: 'Icon', type: 'text' }, { name: 'isPopular', label: 'Most Popular?', type: 'text' }] }], defaultProps: { heading: 'Membership Plans', plans: [] } },
  CDCTA: { description: 'Sky blue CTA section', fields: [{ name: 'heading', label: 'Heading', type: 'textarea' }, { name: 'buttonText', label: 'Button Text', type: 'text' }], defaultProps: { heading: "Ready for a Smile You Love?\nBook Your Visit Today.", buttonText: 'REQUEST AN APPOINTMENT' } },
  CDFooter: { description: 'Dental footer with dark blue background', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }], defaultProps: { businessName: 'CLARITY DENTAL' } },
};

export const CD_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  CDHeader: (props) => <CDHeader {...props} />,
  CDHero: (props) => <CDHero {...props} />,
  CDStats: (props) => <CDStats {...props} />,
  CDServices: (props) => <CDServices {...props} />,
  CDTestimonials: (props) => <CDTestimonials {...props} />,
  CDPricing: (props) => <CDPricing {...props} />,
  CDCTA: (props) => <CDCTA {...props} />,
  CDFooter: (props) => <CDFooter {...props} />,
};
