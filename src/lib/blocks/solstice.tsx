"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Sun, ArrowRight, Star, Heart, MapPin, Phone, Mail, Leaf } from 'lucide-react';

// Solstice Yoga & Wellness Block Family
// Dusty Rose #C4869A · Sand #F5EDE0 · Sage #7D9B76 · Warm White #FAFAF8

const SY_ROSE = '#C4869A';
const SY_SAND = '#F5EDE0';
const SY_SAGE = '#7D9B76';
const SY_WARM = '#FAFAF8';
const SY_DARK = '#2C2018';

export function SYHero(props: any) {
  const title = props.title || 'Find Your\nCenter Here.';
  const subtitle = props.subtitle || 'A welcoming, all-levels yoga and wellness studio rooted in community, movement, and mindfulness.';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070';
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(44,32,24,0.88) 0%, rgba(44,32,24,0.55) 55%, rgba(44,32,24,0.15) 100%)' }} />
      </div>
      <div className="relative z-10 px-10 md:px-20 max-w-2xl">
        <div className="flex items-center gap-3 mb-7">
          <Leaf className="w-4 h-4" style={{ color: SY_SAGE }} />
          <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: SY_SAGE }}>All Levels Welcome</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 whitespace-pre-line" style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}>{title}</h1>
        <p className="text-white/70 text-xl mb-10 max-w-sm leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" style={{ backgroundColor: SY_SAGE }} className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            View Schedule <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-white font-medium text-sm px-8 py-4 rounded-full border border-white/30 hover:border-white/55 transition-colors">
            First Week Free
          </a>
        </div>
      </div>
    </section>
  );
}

export function SYEthos(props: any) {
  const features = props.features || [
    { iconName: 'Sun', title: 'All Levels Welcome', desc: 'From first-timers to advanced practitioners, every class is guided with care and modifications.' },
    { iconName: 'Heart', title: 'Community First', desc: "We're more than a studio — we're a community where everyone belongs and feels seen." },
    { iconName: 'Leaf', title: 'Holistic Wellness', desc: 'Beyond yoga — we offer meditation, breathwork, sound healing, and wellness workshops.' },
    { iconName: 'Star', title: 'Expert Instructors', desc: 'Every teacher holds a 200hr+ RYT certification and brings dedicated teaching experience.' }
  ];
  return (
    <section style={{ backgroundColor: SY_SAND }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: SY_SAGE }}>Our Philosophy</div>
          <h2 className="text-4xl font-black" style={{ color: SY_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>Why Solstice</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f: any, i: number) => {
            const Icon = (LucideIcons as any)[f.iconName] || Sun;
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: SY_ROSE + '20' }}>
                  <Icon className="w-6 h-6" style={{ color: SY_ROSE }} />
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: SY_DARK }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SYBook(props: any) {
  const title = props.title || 'Book Your Class Online';
  const subtitle = props.subtitle || 'Reserve your mat in advance for any of our 30+ weekly classes. New student special — first week unlimited for $25.';
  const image = props.image || 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070';
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[55vh]">
      <div className="flex items-center justify-center px-10 py-16" style={{ backgroundColor: SY_SAGE }}>
        <div className="max-w-sm text-center">
          <Sun className="w-8 h-8 mx-auto mb-5 text-white/70" />
          <div className="text-sage-200 text-xs font-semibold tracking-widest uppercase mb-4 text-white/70">Online Booking</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5" style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}>{title}</h2>
          <p className="text-white/80 text-sm mb-8 leading-relaxed">{subtitle}</p>
          <a href="#" className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-stone-50 transition-colors" style={{ color: SY_SAGE }}>
            Reserve Your Mat <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
        <img src={image} alt="" className="w-full h-full object-cover absolute inset-0" />
      </div>
    </section>
  );
}

export function SYTestimonials(props: any) {
  const testimonials = props.testimonials || [];
  return (
    <section style={{ backgroundColor: SY_WARM }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: SY_SAGE }}>Community</div>
          <h2 className="text-4xl font-black" style={{ color: SY_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>What Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-t-2" style={{ borderTopColor: SY_ROSE }}>
              <div className="flex mb-3">{[...Array(parseInt(t.rating) || 5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SY_ROSE }} />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
              <div className="font-bold text-sm" style={{ color: SY_SAGE }}>— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SYFindUs(props: any) {
  const address = props.address || '814 Solstice Lane';
  const cityState = props.cityState || 'Denver, CO 80203';
  const phone = props.phone || '(720) 555-0142';
  const email = props.email || 'hello@solsticeyoga.com';
  const image = props.image || 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070';
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[40vh]">
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        <img src={image} alt="" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent, rgba(245,237,224,0.2))' }} />
      </div>
      <div className="flex items-center px-10 md:px-16 py-14" style={{ backgroundColor: SY_SAND }}>
        <div>
          <div className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: SY_SAGE }}>Visit Us</div>
          <h2 className="text-3xl font-black mb-6 whitespace-pre-line" style={{ color: SY_DARK, fontFamily: 'Georgia, "Playfair Display", serif' }}>Come Find Your Flow</h2>
          <div className="space-y-3 text-gray-600 text-sm">
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 shrink-0" style={{ color: SY_ROSE }} />{address}, {cityState}</div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: SY_ROSE }} />{phone}</div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: SY_ROSE }} />{email}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SYFooter(props: any) {
  const text = props.text || '© 2026 Solstice Yoga & Wellness · Denver, CO · All are welcome here.';
  return (
    <footer style={{ backgroundColor: SY_DARK }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sun className="w-4 h-4" style={{ color: SY_ROSE }} />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase" style={{ fontFamily: 'Georgia, serif' }}>Solstice Yoga</span>
      </div>
      <p className="text-stone-600 text-xs">{text}</p>
    </footer>
  );
}

export const SY_SCHEMAS: Record<string, any> = {
  SYHero: { description: 'Yoga studio earthy full-screen hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Find Your\nCenter Here.', subtitle: 'All-levels yoga and wellness studio rooted in community.', bgImage: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070' } },
  SYEthos: { description: 'Studio value pillars on sand background', fields: [{ name: 'features', label: 'Features', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { features: [] } },
  SYBook: { description: 'Sage green booking split section', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: 'Book Your Class Online', subtitle: 'First week unlimited for $25.', image: '' } },
  SYTestimonials: { description: 'Student testimonials on warm white background', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'rating', label: 'Rating (1-5)', type: 'text' }] }], defaultProps: { testimonials: [] } },
  SYFindUs: { description: 'Studio location split with contact info', fields: [{ name: 'address', label: 'Street Address', type: 'text' }, { name: 'cityState', label: 'City, State', type: 'text' }, { name: 'phone', label: 'Phone', type: 'text' }, { name: 'email', label: 'Email', type: 'text' }, { name: 'image', label: 'Location Photo URL', type: 'text' }], defaultProps: { address: '814 Solstice Lane', cityState: 'Denver, CO 80203', phone: '(720) 555-0142', email: 'hello@solsticeyoga.com', image: '' } },
  SYFooter: { description: 'Warm dark yoga studio footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Solstice Yoga & Wellness · All are welcome here.' } },
};

export const SY_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  SYHero: (props) => <SYHero {...props} />,
  SYEthos: (props) => <SYEthos {...props} />,
  SYBook: (props) => <SYBook {...props} />,
  SYTestimonials: (props) => <SYTestimonials {...props} />,
  SYFindUs: (props) => <SYFindUs {...props} />,
  SYFooter: (props) => <SYFooter {...props} />,
};
