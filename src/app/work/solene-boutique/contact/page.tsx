'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#9B9189] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            We&apos;d Love to Hear From You
          </p>
          <h1
            className="text-5xl md:text-7xl italic text-[#18181B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get in touch
          </h1>
        </div>
      </section>

      {/* Split layout */}
      <section className="py-20 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left: Store info */}
          <div>
            <h2
              className="text-3xl italic text-[#18181B] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Come visit us
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#C9A84C] flex-none mt-0.5" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Address</p>
                  <p className="text-[#18181B] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    2847 NW 23rd Ave<br />Portland, OR 97210
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={20} className="text-[#C9A84C] flex-none mt-0.5" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Hours</p>
                  <p className="text-[#18181B] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    Monday – Saturday: 10am – 7pm<br />Sunday: 11am – 5pm
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={20} className="text-[#C9A84C] flex-none mt-0.5" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Phone</p>
                  <a href="tel:+15033210987" className="text-[#18181B] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    (503) 321-0987
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-[#C9A84C] flex-none mt-0.5" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Email</p>
                  <a href="mailto:hello@solene.shop" className="text-[#18181B] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    hello@solene.shop
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2
              className="text-3xl italic text-[#18181B] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Send a message
            </h2>
            {submitted ? (
              <div className="p-8 bg-[#F8F4EE] text-center">
                <p className="text-2xl italic text-[#18181B] mb-3" style={{ fontFamily: 'var(--font-display)' }}>Thank you!</p>
                <p className="text-sm text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                  We&apos;ll get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase text-[#9B9189] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#9B9189]/30 text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase text-[#9B9189] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#9B9189]/30 text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase text-[#9B9189] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#9B9189]/30 text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors appearance-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option>Order question</option>
                    <option>Product inquiry</option>
                    <option>Wholesale</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase text-[#9B9189] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#9B9189]/30 text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#18181B] text-[#FDFAF6] text-sm tracking-wide hover:bg-[#C9A84C] hover:text-[#18181B] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0">
        <div className="relative h-80 bg-[#F8F4EE] flex items-center justify-center border-y border-[#9B9189]/20">
          <div className="text-center">
            <MapPin size={32} className="text-[#C9A84C] mx-auto mb-3" />
            <p className="text-lg italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
              2847 NW 23rd Ave, Portland OR 97210
            </p>
            <p className="text-sm text-[#9B9189] mt-1" style={{ fontFamily: 'var(--font-body)' }}>
              In the heart of Nob Hill
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#18181B] border-b border-[#18181B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get Directions <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-20 bg-[#18181B]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            For Businesses
          </p>
          <h2
            className="text-3xl md:text-4xl italic text-[#FDFAF6] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Interested in wholesale?
          </h2>
          <p className="text-sm text-[#9B9189] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            We partner with select boutique hotels, spas, and retail stores. Minimum order quantities apply.
          </p>
          <a
            href="mailto:wholesale@solene.shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#18181B] text-sm tracking-wide hover:bg-[#FDFAF6] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Email Our Wholesale Team <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
