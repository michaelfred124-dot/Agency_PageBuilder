"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Wrench, Phone, ArrowRight, Star, CheckCircle, Car } from 'lucide-react';

// Ridge Line Auto Service Block Family
// Charcoal #1C1C1C · Red #C0392B · Gray #9CA3AF · White #FAFAFA

const RL_DARK = '#1C1C1C';
const RL_RED = '#C0392B';
const RL_GRAY = '#374151';
const RL_LIGHT = '#F9FAFB';

export function RLHeader(props: any) {
  const businessName = props.businessName || 'RIDGE LINE AUTO';
  const tagline = props.tagline || 'HONEST. FAST. RELIABLE.';
  const phone = props.phone || '(555) 874-0200';
  const ctaText = props.ctaText || 'BOOK ONLINE';
  const navLinks: string[] = props.navLinks || ['HOME', 'SERVICES', 'ABOUT', 'REVIEWS', 'LOCATION'];
  return (
    <header style={{ backgroundColor: RL_DARK }} className="py-4 px-6 md:px-14 flex items-center justify-between sticky top-0 z-50 shadow-2xl">
      <div>
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5" style={{ color: RL_RED }} />
          <span className="text-white font-black text-base tracking-wider">{businessName}</span>
        </div>
        <div className="text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5 text-gray-400">{tagline}</div>
      </div>
      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((link: string, i: number) => (
          <a key={i} href="#" className="text-gray-300 hover:text-white text-xs font-bold tracking-widest transition-colors">{link}</a>
        ))}
      </nav>
      <div className="hidden lg:flex items-center gap-3">
        <a href={`tel:${phone}`} className="text-gray-300 text-sm font-bold flex items-center gap-1.5">
          <Phone className="w-4 h-4 text-red-400" />{phone}
        </a>
        <a href="#" style={{ backgroundColor: RL_RED }} className="text-white text-xs font-black px-4 py-2.5 hover:opacity-90 transition-opacity tracking-widest">{ctaText}</a>
      </div>
    </header>
  );
}

export function RLHero(props: any) {
  const badge = props.badge || 'Rated #1 Auto Repair in the Valley';
  const title = props.title || 'Expert Auto Repair You Can Actually Trust';
  const subtitle = props.subtitle || 'Factory-trained technicians. Transparent pricing. No surprises.';
  const ctaText = props.ctaText || 'BOOK AN APPOINTMENT';
  const secondaryCtaText = props.secondaryCtaText || 'GET AN ESTIMATE';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070';
  return (
    <section className="relative min-h-[85vh] flex items-end pb-16">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)' }} />
      </div>
      <div className="relative z-10 px-6 md:px-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase mb-5 px-3 py-1.5" style={{ backgroundColor: RL_RED, color: 'white' }}>
          <Star className="w-3 h-3 fill-current" /> {badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">{title}</h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" style={{ backgroundColor: RL_RED }} className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 tracking-widest hover:opacity-90 transition-opacity">{ctaText} <ArrowRight className="w-4 h-4" /></a>
          <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 border border-white/30 hover:border-white/60 transition-colors">{secondaryCtaText}</a>
        </div>
      </div>
    </section>
  );
}

export function RLStats(props: any) {
  const stats = props.stats || [
    { value: '15,000+', label: 'Vehicles Serviced', icon: 'Car' },
    { value: '5.0 Stars', label: '300+ Reviews', icon: 'Star' },
    { value: '18+', label: 'Years in Business', icon: 'Calendar' },
    { value: 'Same-Day', label: 'Service Available', icon: 'Zap' }
  ];
  return (
    <section style={{ backgroundColor: RL_GRAY }} className="py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s: any, i: number) => (
          <div key={i} className="text-center py-4 border-r border-gray-500 last:border-0">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
            <div className="text-gray-400 text-xs font-semibold tracking-wide uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RLServices(props: any) {
  const title = props.title || 'Full-Service Auto Care';
  const subtitle = props.subtitle || 'From oil changes to full engine rebuilds — we handle it all.';
  const services = props.services || [];
  return (
    <section style={{ backgroundColor: RL_LIGHT }} className="py-24 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: RL_RED }}>What We Fix</div>
          <h2 className="text-4xl font-black text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-500 max-w-xl">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.icon] || Wrench;
            return (
              <div key={i} className="group bg-white border border-gray-200 hover:border-red-300 transition-all overflow-hidden">
                {svc.img && <div className="h-40 overflow-hidden"><img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4" style={{ color: RL_RED }} />
                    <h3 className="font-black text-sm text-gray-900">{svc.title}</h3>
                  </div>
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

export function RLProcess(props: any) {
  const title = props.title || 'Getting your car fixed has never been easier';
  const steps = props.steps || [];
  return (
    <section style={{ backgroundColor: RL_DARK }} className="py-24 px-6 md:px-14">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: RL_RED }}>How It Works</div>
          <h2 className="text-4xl font-black text-white">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step: any, i: number) => {
            const Icon = (LucideIcons as any)[step.icon] || CheckCircle;
            return (
              <div key={i} className="text-center">
                <div className="relative inline-block mb-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: RL_RED + '20', border: `2px solid ${RL_RED}` }}>
                    <Icon className="w-7 h-7" style={{ color: RL_RED }} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center text-white" style={{ backgroundColor: RL_RED }}>{i + 1}</span>
                </div>
                <h3 className="font-black text-white text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function RLTestimonials(props: any) {
  const title = props.title || 'What Our Customers Say';
  const reviews = props.reviews || [];
  return (
    <section style={{ backgroundColor: RL_LIGHT }} className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: RL_RED }}>Reviews</div>
          <h2 className="text-4xl font-black text-gray-900">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r: any, i: number) => (
            <div key={i} className="bg-white p-8 shadow-sm border-b-4" style={{ borderBottomColor: RL_RED }}>
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                {r.img && <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />}
                <div>
                  <div className="font-black text-sm text-gray-900">{r.name}</div>
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

export function RLCTA(props: any) {
  const title = props.title || "Car Trouble? We've Got You Covered.";
  const subtitle = props.subtitle || 'Book online in 60 seconds or call us now.';
  const buttonText = props.buttonText || 'BOOK YOUR APPOINTMENT';
  return (
    <section style={{ backgroundColor: RL_RED }} className="py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <Car className="w-10 h-10 text-white/60 mx-auto mb-5" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{title}</h2>
        <p className="text-white/80 text-lg mb-8">{subtitle}</p>
        <a href="#" className="inline-flex items-center gap-2 bg-white font-black text-sm px-10 py-5 hover:bg-gray-100 transition-colors tracking-widest" style={{ color: RL_RED }}>{buttonText} <ArrowRight className="w-4 h-4" /></a>
      </div>
    </section>
  );
}

export function RLFooter(props: any) {
  const businessName = props.businessName || 'RIDGE LINE AUTO';
  const tagline = props.tagline || 'HONEST. FAST. RELIABLE.';
  const description = props.description || 'Trusted auto repair serving the community for over 18 years.';
  const phone = props.phone || '(555) 874-0200';
  const email = props.email || 'service@ridgelineauto.com';
  const address = props.address || '2847 Commerce Blvd, Suite A';
  const licensing = props.licensing || 'ASE Certified Technicians';
  return (
    <footer style={{ backgroundColor: '#111' }} className="py-14 px-6 md:px-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2"><Wrench className="w-4 h-4" style={{ color: RL_RED }} /><span className="text-white font-black tracking-wider">{businessName}</span></div>
          <p className="text-gray-500 text-xs leading-relaxed mb-3">{description}</p>
          <div className="text-[9px] font-bold tracking-widest uppercase text-gray-600">{licensing}</div>
        </div>
        <div>
          <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4">Contact</h4>
          <div className="text-gray-400 text-xs space-y-2">
            <div>{phone}</div><div>{email}</div><div>{address}</div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4">Hours</h4>
          <div className="text-gray-400 text-xs space-y-1">
            <div>Mon – Fri: 7am – 6pm</div><div>Saturday: 8am – 4pm</div><div>Sunday: Closed</div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs">{tagline} · © 2026 {businessName}. All rights reserved.</div>
    </footer>
  );
}

export const RL_SCHEMAS: Record<string, any> = {
  RLHeader: { description: 'Auto repair dark sticky header', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }, { name: 'tagline', label: 'Tagline', type: 'text' }, { name: 'phone', label: 'Phone', type: 'text' }, { name: 'ctaText', label: 'CTA Text', type: 'text' }], defaultProps: { businessName: 'RIDGE LINE AUTO', tagline: 'HONEST. FAST. RELIABLE.', phone: '(555) 874-0200', ctaText: 'BOOK ONLINE' } },
  RLHero: { description: 'Auto repair photo hero with red badge', fields: [{ name: 'badge', label: 'Badge Text', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'subtitle', label: 'Subtitle', type: 'textarea' }, { name: 'ctaText', label: 'CTA Text', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { badge: 'Rated #1', title: 'Expert Auto Repair You Can Trust', subtitle: 'Transparent pricing. No surprises.', ctaText: 'BOOK APPOINTMENT', bgImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070' } },
  RLStats: { description: 'Dark gray stats bar', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  RLServices: { description: 'Auto services grid with photos', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'title', label: 'Service Name', type: 'text' }, { name: 'icon', label: 'Icon Name', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { title: 'Full-Service Auto Care', subtitle: '', services: [] } },
  RLProcess: { description: 'Dark process steps section', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'steps', label: 'Steps', type: 'array', arrayFields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'icon', label: 'Icon', type: 'text' }] }], defaultProps: { title: 'How it works', steps: [] } },
  RLTestimonials: { description: 'Customer review cards', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [{ name: 'name', label: 'Name', type: 'text' }, { name: 'role', label: 'Role', type: 'text' }, { name: 'quote', label: 'Quote', type: 'textarea' }] }], defaultProps: { title: 'What Our Customers Say', reviews: [] } },
  RLCTA: { description: 'Red CTA section', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'buttonText', label: 'Button Text', type: 'text' }], defaultProps: { title: "Car Trouble? We've Got You.", subtitle: 'Book online in 60 seconds.', buttonText: 'BOOK YOUR APPOINTMENT' } },
  RLFooter: { description: 'Auto shop footer with contact details', fields: [{ name: 'businessName', label: 'Business Name', type: 'text' }, { name: 'phone', label: 'Phone', type: 'text' }, { name: 'email', label: 'Email', type: 'text' }, { name: 'address', label: 'Address', type: 'text' }], defaultProps: { businessName: 'RIDGE LINE AUTO', phone: '(555) 874-0200', email: 'service@ridgelineauto.com', address: '2847 Commerce Blvd' } },
};

export const RL_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  RLHeader: (props) => <RLHeader {...props} />,
  RLHero: (props) => <RLHero {...props} />,
  RLStats: (props) => <RLStats {...props} />,
  RLServices: (props) => <RLServices {...props} />,
  RLProcess: (props) => <RLProcess {...props} />,
  RLTestimonials: (props) => <RLTestimonials {...props} />,
  RLCTA: (props) => <RLCTA {...props} />,
  RLFooter: (props) => <RLFooter {...props} />,
};
