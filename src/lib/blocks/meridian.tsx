"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Home, Star, ArrowRight, MapPin, TrendingUp, CheckCircle } from 'lucide-react';

// Meridian Properties Block Family
// Slate #1E3A5F · Beige #F5EDE0 · Forest #2D6A4F · Cream #FDFAF6

const MP_SLATE = '#1E3A5F';
const MP_BEIGE = '#F5EDE0';
const MP_FOREST = '#2D6A4F';
const MP_CREAM = '#FDFAF6';

export function MPHero(props: any) {
  const title = props.title || 'Find Your Perfect\nHome in the Valley.';
  const subtitle = props.subtitle || 'Local expertise, white-glove service, and an unmatched record of results.';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073';
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(30,58,95,0.92) 0%, rgba(30,58,95,0.65) 55%, rgba(30,58,95,0.2) 100%)' }} />
      </div>
      <div className="relative z-10 px-8 md:px-20 py-24 max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-3 py-1.5 rounded-full" style={{ backgroundColor: MP_BEIGE + '20', color: MP_BEIGE, border: `1px solid ${MP_BEIGE}40` }}>
          <MapPin className="w-3 h-3" /> Local Real Estate Experts
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line" style={{ fontFamily: 'Georgia, serif' }}>{title}</h1>
        <p className="text-white/75 text-lg mb-10 leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" style={{ backgroundColor: MP_FOREST }} className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 hover:opacity-90 transition-opacity rounded-sm">
            View Listings <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-4 border border-white/30 hover:border-white/60 transition-colors rounded-sm">
            Free Valuation
          </a>
        </div>
      </div>
    </section>
  );
}

export function MPStats(props: any) {
  const stats = props.stats || [
    { value: '450+', label: 'Homes Successfully Sold', icon: 'Home' },
    { value: '$120M+', label: 'In Transactions', icon: 'TrendingUp' },
    { value: '14 Days', label: 'Average Days on Market', icon: 'Calendar' },
    { value: '5★', label: 'Zillow & Google Rating', icon: 'Star' }
  ];
  return (
    <section style={{ backgroundColor: MP_SLATE }} className="py-14 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-5xl font-black text-white mb-2">{s.value}</div>
            <div className="text-white/55 text-xs font-semibold tracking-wider whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MPServices(props: any) {
  const services = props.services || [];
  return (
    <section style={{ backgroundColor: MP_CREAM }} className="py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: MP_FOREST }}>How We Help</div>
          <h2 className="text-4xl font-black" style={{ color: MP_SLATE }}>Full-Service Representation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc: any, i: number) => {
            const Icon = (LucideIcons as any)[svc.iconName] || Home;
            return (
              <div key={i} className="bg-white p-7 rounded-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-11 h-11 rounded-sm flex items-center justify-center mb-4" style={{ backgroundColor: MP_FOREST + '15' }}>
                  <Icon className="w-5 h-5" style={{ color: MP_FOREST }} />
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: MP_SLATE }}>{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MPListings(props: any) {
  const title = props.title || 'Featured Listings';
  const projects = props.projects || [];
  return (
    <section style={{ backgroundColor: MP_BEIGE }} className="py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: MP_FOREST }}>Portfolio</div>
            <h2 className="text-4xl font-black" style={{ color: MP_SLATE }}>{title}</h2>
          </div>
          <a href="#" className="text-sm font-bold hidden md:flex items-center gap-1" style={{ color: MP_FOREST }}>View All <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p: any, i: number) => (
            <div key={i} className="group bg-white overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="font-black text-sm mb-1" style={{ color: MP_SLATE }}>{p.title}</div>
                {p.loc && <div className="flex items-center gap-1 text-xs text-gray-400"><MapPin className="w-3 h-3" />{p.loc}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MPTestimonials(props: any) {
  const testimonials = props.testimonials || [];
  return (
    <section style={{ backgroundColor: MP_CREAM }} className="py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: MP_FOREST }}>Client Stories</div>
          <h2 className="text-4xl font-black" style={{ color: MP_SLATE }}>What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-sm border-t-2" style={{ borderTopColor: MP_FOREST }}>
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: '#F59E0B' }} />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="font-black text-sm" style={{ color: MP_SLATE }}>{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MPCta(props: any) {
  const title = props.title || 'Ready to Buy, Sell, or Invest?\nLet\'s talk.';
  const subtitle = props.subtitle || 'Schedule a free 30-minute strategy call today. No obligation, no pressure.';
  return (
    <section style={{ backgroundColor: MP_SLATE }} className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <TrendingUp className="w-10 h-10 mx-auto mb-6" style={{ color: MP_BEIGE }} />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 whitespace-pre-line" style={{ fontFamily: 'Georgia, serif' }}>{title}</h2>
        <p className="text-white/65 mb-10 text-base">{subtitle}</p>
        <a href="#" style={{ backgroundColor: MP_FOREST }} className="inline-flex items-center gap-2 text-white font-bold px-10 py-5 hover:opacity-90 transition-opacity rounded-sm">
          Book Free Strategy Call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function MPFooter(props: any) {
  const text = props.text || '© 2026 Meridian Properties. Licensed Real Estate Brokerage. Equal Housing Opportunity.';
  return (
    <footer style={{ backgroundColor: '#0F2040' }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Home className="w-4 h-4" style={{ color: MP_FOREST }} />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase">Meridian Properties</span>
      </div>
      <p className="text-white/35 text-xs">{text}</p>
    </footer>
  );
}

export const MP_SCHEMAS: Record<string, any> = {
  MPHero: { description: 'Real estate hero with navy overlay', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Find Your Perfect\nHome in the Valley.', subtitle: 'Local expertise, white-glove service.', bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073' } },
  MPStats: { description: 'Slate blue stats bar', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  MPServices: { description: 'Services grid on cream background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  MPListings: { description: 'Featured property listings grid', fields: [{ name: 'title', label: 'Section Title', type: 'text' }, { name: 'projects', label: 'Listings', type: 'array', arrayFields: [{ name: 'title', label: 'Price & Beds', type: 'text' }, { name: 'loc', label: 'Location', type: 'text' }, { name: 'img', label: 'Image URL', type: 'text' }] }], defaultProps: { title: 'Featured Listings', projects: [] } },
  MPTestimonials: { description: 'Green-accented client testimonials', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }] }], defaultProps: { testimonials: [] } },
  MPCta: { description: 'Navy CTA with green button', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }], defaultProps: { title: "Ready to Buy, Sell, or Invest?\nLet's talk.", subtitle: 'Schedule a free strategy call today.' } },
  MPFooter: { description: 'Real estate footer with disclaimer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Meridian Properties. Equal Housing Opportunity.' } },
};

export const MP_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  MPHero: (props) => <MPHero {...props} />,
  MPStats: (props) => <MPStats {...props} />,
  MPServices: (props) => <MPServices {...props} />,
  MPListings: (props) => <MPListings {...props} />,
  MPTestimonials: (props) => <MPTestimonials {...props} />,
  MPCta: (props) => <MPCta {...props} />,
  MPFooter: (props) => <MPFooter {...props} />,
};
