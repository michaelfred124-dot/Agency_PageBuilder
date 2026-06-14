"use client";
import React from 'react';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import { Phone, CheckCircle, ArrowRight, Clock, Star, Wrench, MapPin, Mail, Wind, Droplets, Flame, Zap, Shield } from 'lucide-react';

// ProHome Services Block Family
// Forest Green #1B4332 · Gold #D4A853 · Cream #F5F0E8 · Dark #0D2419

const PH_GREEN = '#1B4332';
const PH_GOLD = '#D4A853';
const PH_CREAM = '#F5F0E8';
const PH_DARK = '#0D2419';

export function PHHeader(props: any) {
  const businessName = props.businessName || 'ProHome Services';
  const phone = props.phone || '(555) 123-4567';
  const navLinks: string[] = props.navLinks || ['Services', 'About', 'Reviews', 'Contact'];
  return (
    <header style={{ backgroundColor: PH_GREEN }} className="py-3.5 px-6 md:px-14 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center gap-3">
        <div style={{ backgroundColor: PH_GOLD }} className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
          <Wrench className="w-4 h-4" style={{ color: PH_GREEN }} />
        </div>
        <div>
          <div className="font-black text-white text-base leading-none">{businessName}</div>
          <div className="text-[9px] font-bold tracking-[0.18em] uppercase mt-0.5" style={{ color: PH_GOLD }}>Licensed &amp; Insured</div>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link: string, i: number) => (
          <a key={i} href="#" className="text-white/80 hover:text-white text-sm font-semibold transition-colors tracking-wide">{link}</a>
        ))}
      </nav>
      <a href={`tel:${phone}`} style={{ backgroundColor: PH_GOLD, color: PH_GREEN }} className="hidden lg:inline-flex items-center gap-2 text-sm font-black px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90">
        <Phone className="w-4 h-4" strokeWidth={3} /> {phone}
      </a>
    </header>
  );
}

export function PHHero(props: any) {
  const headline = props.headline || 'Fast, Reliable Home Services\nYou Can Trust';
  const sub = props.sub || 'Serving the greater metro area since 2005. Licensed, bonded, and insured professionals ready 24/7.';
  const phone = props.phone || '(555) 123-4567';
  const ctaText = props.ctaText || 'Book a Service Call';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2070&q=80';
  const badges: string[] = props.badges || ['Licensed & Bonded', '5-Star Rated', '24/7 Emergency', 'Free Estimates'];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image src={bgImage} alt="Hero" fill className="object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${PH_GREEN}F7 0%, ${PH_GREEN}CC 50%, ${PH_GREEN}44 100%)` }} />
      <div className="relative z-10 px-8 md:px-16 max-w-2xl py-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {badges.map((badge: string, i: number) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'rgba(212,168,83,0.15)', color: PH_GOLD, border: '1px solid rgba(212,168,83,0.3)' }}>
              <CheckCircle className="w-3 h-3" /> {badge}
            </span>
          ))}
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 whitespace-pre-line">{headline}</h1>
        <p className="text-lg text-white/75 mb-10 leading-relaxed">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={`tel:${phone}`} style={{ backgroundColor: PH_GOLD, color: PH_GREEN }} className="inline-flex items-center justify-center gap-3 font-black text-base px-8 py-4 rounded-xl transition-all hover:scale-105">
            <Phone className="w-5 h-5" strokeWidth={3} /> {phone}
          </a>
          <button className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 rounded-xl border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors">
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function PHStats(props: any) {
  const stats = props.stats || [
    { value: '18+', label: 'Years in Business' },
    { value: '12,400+', label: 'Customers Served' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '< 2hrs', label: 'Avg Response Time' },
  ];
  return (
    <div style={{ backgroundColor: PH_GOLD }} className="py-8 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat: any, i: number) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-black" style={{ color: PH_GREEN }}>{stat.value}</div>
            <div className="text-sm font-semibold mt-1" style={{ color: 'rgba(27,67,50,0.65)' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PHServices(props: any) {
  const title = props.title || 'Our Services';
  const subtitle = props.subtitle || "Full-spectrum home services from the valley's most trusted crew.";
  const services = props.services || [
    { icon: 'Wrench', name: 'Plumbing', desc: 'Leaks, clogs, water heaters, pipe repair, and remodels.' },
    { icon: 'Zap', name: 'Electrical', desc: 'Panel upgrades, outlets, lighting, and EV charger installs.' },
    { icon: 'Wind', name: 'HVAC', desc: 'AC repair, furnace tune-up, duct cleaning, and new systems.' },
    { icon: 'Droplets', name: 'Drain Cleaning', desc: 'Hydro-jetting, camera inspection, and sewer line service.' },
    { icon: 'Flame', name: 'Water Heaters', desc: 'Tank & tankless install, repair, and annual service.' },
    { icon: 'Shield', name: '24/7 Emergency', desc: 'Round-the-clock dispatch for urgent home crises.' },
  ];
  return (
    <section style={{ backgroundColor: PH_CREAM }} className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: PH_GOLD }}>What We Do</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: PH_GREEN }}>{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.icon] || Wrench;
            return (
              <div key={i} className="bg-white rounded-2xl p-7 border-2 hover:shadow-xl transition-all hover:-translate-y-1" style={{ borderColor: '#E8E2D8' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(27,67,50,0.08)' }}>
                  <Icon className="w-6 h-6" style={{ color: PH_GREEN }} />
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: PH_GREEN }}>{svc.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-bold" style={{ color: PH_GOLD }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PHProcess(props: any) {
  const title = props.title || 'How It Works';
  const steps = props.steps || [
    { num: '01', heading: 'Call or Book Online', body: 'Reach us any time via phone, text, or our online booking form. No hold times — we answer fast.' },
    { num: '02', heading: 'We Dispatch a Pro', body: 'A vetted, uniformed technician arrives on-time with all the tools for your service type.' },
    { num: '03', heading: 'Job Done Right', body: "We fix it properly, clean up after ourselves, and follow up to make sure you're satisfied." },
  ];
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: PH_GOLD }}>Simple Process</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: PH_GREEN }}>{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step: any, i: number) => (
            <div key={i}>
              <div className="text-7xl font-black leading-none mb-4" style={{ color: PH_CREAM }}>{step.num}</div>
              <div className="w-10 h-1 mb-4 rounded-full" style={{ backgroundColor: PH_GOLD }} />
              <h3 className="text-xl font-black mb-3" style={{ color: PH_GREEN }}>{step.heading}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PHTestimonials(props: any) {
  const title = props.title || 'What Our Customers Say';
  const reviews = props.reviews || [
    { name: 'Sandra M.', service: 'Plumbing Repair', rating: 5, text: 'Showed up within 90 minutes and had my burst pipe fixed in under an hour. Absolutely saved us during the holidays.' },
    { name: 'Derek H.', service: 'HVAC Tune-Up', rating: 5, text: "The technician was polite, knowledgeable, and didn't try to upsell me on anything I didn't need. Rare to find that." },
    { name: 'Priya K.', service: 'Electrical Panel', rating: 5, text: 'Upgraded my old panel to 200A with zero hiccups. Clean work, passed inspection first try. Will use again.' },
    { name: 'Tom G.', service: 'Water Heater Install', rating: 5, text: 'Same-day install of a new tankless unit. Fast, clean, and they explained everything. Outstanding.' },
  ];
  return (
    <section style={{ backgroundColor: PH_CREAM }} className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: PH_GOLD }}>Reviews</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: PH_GREEN }}>{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev: any, i: number) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: Number(rev.rating) || 5 }).map((_: any, si: number) => (
                  <Star key={si} className="w-4 h-4 fill-current" style={{ color: PH_GOLD }} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{rev.text}"</p>
              <div>
                <div className="font-black text-sm" style={{ color: PH_GREEN }}>{rev.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{rev.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PHCTA(props: any) {
  const headline = props.headline || 'Need a Pro Today?';
  const sub = props.sub || 'We dispatch within the hour. No diagnostic fees. Just honest service from real professionals.';
  const phone = props.phone || '(555) 123-4567';
  const ctaText = props.ctaText || 'Schedule Online';
  return (
    <section style={{ backgroundColor: PH_GREEN }} className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: PH_GOLD }}>Available 24/7</div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">{headline}</h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={`tel:${phone}`} style={{ backgroundColor: PH_GOLD, color: PH_GREEN }} className="inline-flex items-center gap-3 font-black text-xl px-10 py-5 rounded-2xl transition-transform hover:scale-105">
            <Phone className="w-6 h-6" strokeWidth={3} /> {phone}
          </a>
          <button className="text-white/70 hover:text-white font-bold underline underline-offset-4 transition-colors text-sm">{ctaText}</button>
        </div>
      </div>
    </section>
  );
}

export function PHFooter(props: any) {
  const businessName = props.businessName || 'ProHome Services';
  const phone = props.phone || '(555) 123-4567';
  const email = props.email || 'info@prohome.com';
  const address = props.address || '123 Main St, Your City, ST 12345';
  const links: string[] = props.links || ['Services', 'About Us', 'Reviews', 'Contact', 'Emergency Service'];
  const copyright = props.copyright || '© 2025 ProHome Services. All rights reserved.';
  return (
    <footer style={{ backgroundColor: PH_DARK }} className="py-14 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <div className="font-black text-xl mb-1" style={{ color: PH_GOLD }}>{businessName}</div>
            <div className="text-white/40 text-xs uppercase tracking-widest mb-5">Licensed &amp; Insured</div>
            <div className="space-y-2.5 text-sm text-white/65">
              <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 shrink-0" style={{ color: PH_GOLD }} />{phone}</div>
              <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 shrink-0" style={{ color: PH_GOLD }} />{email}</div>
              <div className="flex items-center gap-2.5"><MapPin className="w-4 h-4 shrink-0" style={{ color: PH_GOLD }} />{address}</div>
            </div>
          </div>
          <div>
            <div className="font-black text-xs uppercase tracking-widest mb-5 text-white/35">Navigation</div>
            <div className="space-y-2">
              {links.map((link: string, i: number) => (
                <a key={i} href="#" className="block text-sm text-white/65 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-black text-xs uppercase tracking-widest mb-5 text-white/35">Business Hours</div>
            <div className="space-y-1.5 text-sm text-white/65">
              <div className="flex justify-between"><span>Mon – Fri</span><span className="font-bold text-white">7am – 8pm</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="font-bold text-white">8am – 6pm</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="font-bold text-white">Emergency Only</span></div>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold" style={{ color: PH_GOLD }}>
                <Clock className="w-3.5 h-3.5" /> 24/7 Emergency Dispatch
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-white/25">{copyright}</div>
      </div>
    </footer>
  );
}

export const PH_SCHEMAS: Record<string, any> = {
  PHHeader: {
    description: 'ProHome sticky header with phone CTA',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
    ],
    defaultProps: { businessName: 'ProHome Services', phone: '(555) 123-4567', navLinks: ['Services', 'About', 'Reviews', 'Contact'] },
  },
  PHHero: {
    description: 'Full-bleed hero with phone + book CTAs',
    fields: [
      { name: 'headline', label: 'Headline (\\n = line break)', type: 'textarea' },
      { name: 'sub', label: 'Subtitle', type: 'textarea' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'ctaText', label: 'Book CTA Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image URL', type: 'text' },
    ],
    defaultProps: {
      headline: 'Fast, Reliable Home Services\nYou Can Trust',
      sub: 'Serving the greater metro area since 2005. Licensed, bonded, and insured professionals ready 24/7.',
      phone: '(555) 123-4567',
      ctaText: 'Book a Service Call',
      bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2070&q=80',
    },
  },
  PHStats: {
    description: 'Gold stats bar with 4 key numbers',
    fields: [
      { name: 'stats', label: 'Stats', type: 'array', arrayFields: [
        { name: 'value', label: 'Value', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
      ]},
    ],
    defaultProps: {
      stats: [
        { value: '18+', label: 'Years in Business' },
        { value: '12,400+', label: 'Customers Served' },
        { value: '4.9★', label: 'Average Rating' },
        { value: '< 2hrs', label: 'Avg Response Time' },
      ],
    },
  },
  PHServices: {
    description: 'Service card grid on cream background',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'services', label: 'Services', type: 'array', arrayFields: [
        { name: 'icon', label: 'Icon (Lucide name e.g. Wrench)', type: 'text' },
        { name: 'name', label: 'Service Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      title: 'Our Services',
      subtitle: "Full-spectrum home services from the valley's most trusted crew.",
      services: [
        { icon: 'Wrench', name: 'Plumbing', desc: 'Leaks, clogs, water heaters, pipe repair, and remodels.' },
        { icon: 'Zap', name: 'Electrical', desc: 'Panel upgrades, outlets, lighting, and EV charger installs.' },
        { icon: 'Wind', name: 'HVAC', desc: 'AC repair, furnace tune-up, duct cleaning, and new systems.' },
        { icon: 'Droplets', name: 'Drain Cleaning', desc: 'Hydro-jetting, camera inspection, and sewer line service.' },
        { icon: 'Flame', name: 'Water Heaters', desc: 'Tank & tankless install, repair, and annual service.' },
        { icon: 'Shield', name: '24/7 Emergency', desc: 'Round-the-clock dispatch for urgent home crises.' },
      ],
    },
  },
  PHProcess: {
    description: '3-step process on white background',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'steps', label: 'Steps', type: 'array', arrayFields: [
        { name: 'num', label: 'Step Number (e.g. 01)', type: 'text' },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'body', label: 'Body', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      title: 'How It Works',
      steps: [
        { num: '01', heading: 'Call or Book Online', body: 'Reach us any time via phone, text, or our online booking form. No hold times — we answer fast.' },
        { num: '02', heading: 'We Dispatch a Pro', body: 'A vetted, uniformed technician arrives on-time with all the tools for your service type.' },
        { num: '03', heading: 'Job Done Right', body: "We fix it properly, clean up after ourselves, and follow up to make sure you're satisfied." },
      ],
    },
  },
  PHTestimonials: {
    description: 'Customer reviews 2-column grid',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Customer Name', type: 'text' },
        { name: 'service', label: 'Service Type', type: 'text' },
        { name: 'rating', label: 'Rating (1-5)', type: 'text' },
        { name: 'text', label: 'Review Text', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      title: 'What Our Customers Say',
      reviews: [
        { name: 'Sandra M.', service: 'Plumbing Repair', rating: 5, text: 'Showed up within 90 minutes and had my burst pipe fixed in under an hour. Absolutely saved us during the holidays.' },
        { name: 'Derek H.', service: 'HVAC Tune-Up', rating: 5, text: "The technician was polite, knowledgeable, and didn't try to upsell me on anything I didn't need. Rare to find that." },
        { name: 'Priya K.', service: 'Electrical Panel', rating: 5, text: 'Upgraded my old panel to 200A with zero hiccups. Clean work, passed inspection first try. Will use again.' },
        { name: 'Tom G.', service: 'Water Heater Install', rating: 5, text: 'Same-day install of a new tankless unit. Fast, clean, and they explained everything. Outstanding.' },
      ],
    },
  },
  PHCTA: {
    description: 'Dark green CTA with prominent phone number',
    fields: [
      { name: 'headline', label: 'Headline', type: 'text' },
      { name: 'sub', label: 'Subtext', type: 'textarea' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'ctaText', label: 'Secondary CTA Text', type: 'text' },
    ],
    defaultProps: {
      headline: 'Need a Pro Today?',
      sub: 'We dispatch within the hour. No diagnostic fees. Just honest service from real professionals.',
      phone: '(555) 123-4567',
      ctaText: 'Schedule Online',
    },
  },
  PHFooter: {
    description: 'Dark footer with contact info, links, and hours',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'copyright', label: 'Copyright Text', type: 'text' },
    ],
    defaultProps: {
      businessName: 'ProHome Services',
      phone: '(555) 123-4567',
      email: 'info@prohome.com',
      address: '123 Main St, Your City, ST 12345',
      links: ['Services', 'About Us', 'Reviews', 'Contact', 'Emergency Service'],
      copyright: '© 2025 ProHome Services. All rights reserved.',
    },
  },
};

export const PH_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  PHHeader: (props) => <PHHeader {...props} />,
  PHHero: (props) => <PHHero {...props} />,
  PHStats: (props) => <PHStats {...props} />,
  PHServices: (props) => <PHServices {...props} />,
  PHProcess: (props) => <PHProcess {...props} />,
  PHTestimonials: (props) => <PHTestimonials {...props} />,
  PHCTA: (props) => <PHCTA {...props} />,
  PHFooter: (props) => <PHFooter {...props} />,
};
