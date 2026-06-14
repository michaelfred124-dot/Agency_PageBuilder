"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Heart, Star, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

// Paws & Pamper Pet Spa Block Family
// Teal #0D9488 · Cream #FEF3E8 · Coral #F87171 · Warm White #FFFBF8

const PP_TEAL = '#0D9488';
const PP_CREAM = '#FEF3E8';
const PP_CORAL = '#F87171';
const PP_WARM = '#FFFBF8';

export function PPHero(props: any) {
  const title = props.title || 'Your Dog Deserves\nThe Very Best.';
  const subtitle = props.subtitle || 'Professional grooming in a calm, cage-free spa environment.';
  const bgImage = props.bgImage || 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070';
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,148,136,0.93) 0%, rgba(13,148,136,0.5) 50%, transparent 80%)' }} />
      </div>
      <div className="relative z-10 px-8 md:px-16 pb-20 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full bg-white/20 text-white">
            <Heart className="w-3 h-3 fill-current text-pink-300" /> Cage-Free · Fear-Free Certified
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-5 whitespace-pre-line">{title}</h1>
          <p className="text-teal-100 text-lg mb-8 leading-relaxed">{subtitle}</p>
          <a href="#" style={{ backgroundColor: PP_CORAL }} className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Book Your Pup <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PPEthos(props: any) {
  const features = props.features || [
    { iconName: 'Heart', title: 'Cage-Free Studio', desc: 'Your pup roams freely between appointments in our calm, open-space studio.' },
    { iconName: 'Leaf', title: 'Natural Products', desc: 'We use only natural, non-toxic, hypoallergenic shampoos and conditioners.' },
    { iconName: 'Shield', title: 'Fear Free Certified', desc: 'Every groomer is certified in low-stress, fear-free handling techniques.' },
    { iconName: 'Star', title: 'One Dog at a Time', desc: "No rushed appointments. Your dog gets our full attention for their whole visit." }
  ];
  return (
    <section style={{ backgroundColor: PP_WARM }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: PP_TEAL }}>Why We're Different</div>
          <h2 className="text-4xl font-black text-gray-800">The Paws & Pamper Promise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f: any, i: number) => {
            const Icon = (LucideIcons as any)[f.iconName] || Heart;
            return (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: PP_TEAL + '18' }}>
                  <Icon className="w-6 h-6" style={{ color: PP_TEAL }} />
                </div>
                <h3 className="font-black text-base mb-2 text-gray-800">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PPBook(props: any) {
  const title = props.title || "Book Your Pup's Appointment";
  const subtitle = props.subtitle || 'Online booking is quick and easy. Spots fill up fast — reserve in seconds.';
  const image = props.image || 'https://images.unsplash.com/photo-1534361960057-19f4434a4aeb?q=80&w=2070';
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[55vh]">
      <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
        <img src={image} alt="" className="w-full h-full object-cover absolute inset-0" />
      </div>
      <div className="flex items-center justify-center px-10 py-16" style={{ backgroundColor: PP_TEAL }}>
        <div className="max-w-sm text-center">
          <div className="text-teal-200 text-xs font-bold tracking-widest uppercase mb-4">Booking</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">{title}</h2>
          <p className="text-teal-100 text-base mb-8 leading-relaxed">{subtitle}</p>
          <a href="#" style={{ backgroundColor: PP_CORAL }} className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Reserve a Spot <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PPTestimonials(props: any) {
  const testimonials = props.testimonials || [];
  return (
    <section style={{ backgroundColor: PP_CREAM }} className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: PP_TEAL }}>Happy Clients</div>
          <h2 className="text-4xl font-black text-gray-800">Tails Are Always Wagging</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white p-7 rounded-2xl shadow-sm">
              <div className="flex mb-3">{[...Array(parseInt(t.rating) || 5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: PP_CORAL }} />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"{t.text}"</p>
              <div className="font-black text-sm text-gray-800">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PPFindUs(props: any) {
  const address = props.address || '531 Barkley Ave';
  const cityState = props.cityState || 'Austin, TX 78704';
  const phone = props.phone || '(512) 555-0183';
  const email = props.email || 'hello@pawsandpamper.com';
  const image = props.image || 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069';
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[45vh]">
      <div className="flex items-center px-10 md:px-16 py-14" style={{ backgroundColor: PP_WARM }}>
        <div>
          <div className="text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ color: PP_TEAL }}>Find Us</div>
          <h2 className="text-3xl font-black text-gray-800 mb-6">Come Visit the Spa</h2>
          <div className="space-y-3 text-gray-600 text-sm">
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 shrink-0" style={{ color: PP_TEAL }} />{address}, {cityState}</div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: PP_TEAL }} />{phone}</div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: PP_TEAL }} />{email}</div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        <img src={image} alt="Location" className="w-full h-full object-cover absolute inset-0" />
      </div>
    </section>
  );
}

export function PPFooter(props: any) {
  const text = props.text || '© 2026 Paws & Pamper Pet Spa · Austin, TX · Cage-Free · Fear Free Certified';
  return (
    <footer style={{ backgroundColor: PP_TEAL }} className="py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Heart className="w-4 h-4 text-pink-200 fill-current" />
        <span className="text-white font-black tracking-[0.2em] text-xs uppercase">Paws & Pamper</span>
      </div>
      <p className="text-teal-200 text-xs">{text}</p>
    </footer>
  );
}

export const PP_SCHEMAS: Record<string, any> = {
  PPHero: { description: 'Pet spa teal-to-gradient hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Your Dog Deserves\nThe Very Best.', subtitle: 'Cage-free grooming in a calm spa environment.', bgImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070' } },
  PPEthos: { description: 'Pet spa value pillars with icons', fields: [{ name: 'features', label: 'Features', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { features: [] } },
  PPBook: { description: 'Teal booking split section', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: "Book Your Pup's Appointment", subtitle: 'Spots fill up fast.', image: '' } },
  PPTestimonials: { description: 'Cream background pet owner reviews', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'rating', label: 'Rating (1-5)', type: 'text' }] }], defaultProps: { testimonials: [] } },
  PPFindUs: { description: 'Location split with contact info', fields: [{ name: 'address', label: 'Address', type: 'text' }, { name: 'cityState', label: 'City, State', type: 'text' }, { name: 'phone', label: 'Phone', type: 'text' }, { name: 'email', label: 'Email', type: 'text' }, { name: 'image', label: 'Location Photo URL', type: 'text' }], defaultProps: { address: '531 Barkley Ave', cityState: 'Austin, TX', phone: '(512) 555-0183', email: 'hello@pawsandpamper.com', image: '' } },
  PPFooter: { description: 'Teal footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Paws & Pamper Pet Spa' } },
};

export const PP_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  PPHero: (props) => <PPHero {...props} />,
  PPEthos: (props) => <PPEthos {...props} />,
  PPBook: (props) => <PPBook {...props} />,
  PPTestimonials: (props) => <PPTestimonials {...props} />,
  PPFindUs: (props) => <PPFindUs {...props} />,
  PPFooter: (props) => <PPFooter {...props} />,
};
