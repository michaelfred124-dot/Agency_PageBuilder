"use client";
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/lauren-wilson-photo';

const SESSION_TYPES = ['Portrait Session', 'Engagement / Couples', 'Wedding', 'Landscape / Commercial', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', type: '', date: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-28 px-6 md:px-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 block mb-5">Get In Touch</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Let's Work Together</h1>
        <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
          I'd love to hear about your vision. Fill out the form below and I'll be in touch within 48 hours.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A]/35 block mb-8">Send a Message</span>

            {sent ? (
              <div className="bg-[#F8F5F2] p-12 text-center">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center mx-auto mb-6 text-xl font-serif">✓</div>
                <h3 className="text-2xl font-serif italic text-[#1A1A1A] mb-3">Message received!</h3>
                <p className="text-[#333333]/55 text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. I'll review your inquiry and respond within 48 hours. Can't wait to hear more!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 block mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="First & Last Name"
                      className="w-full border border-black/10 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-black/20 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 block mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full border border-black/10 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-black/20 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 block mb-2">Session Type</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full border border-black/10 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors appearance-none"
                    >
                      <option value="">Select a type...</option>
                      {SESSION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 block mb-2">Ideal Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full border border-black/10 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 block mb-2">Tell Me About Your Vision *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your session, location ideas, how you heard about me, or anything else you'd like me to know..."
                    className="w-full border border-black/10 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-black/20 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
                >
                  Send My Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A]/35 block mb-8">Contact Info</span>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]/25 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">Location</div>
                    <p className="text-[#333333]/50 text-sm">Denver, Colorado, USA<br />Available for travel worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-[#1A1A1A]/25 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">Phone</div>
                    <p className="text-[#333333]/50 text-sm">(303) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-[#1A1A1A]/25 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">Email</div>
                    <p className="text-[#333333]/50 text-sm">hello@laurenwilsonphoto.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="w-4 h-4 text-[#1A1A1A]/25 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">Instagram</div>
                    <p className="text-[#333333]/50 text-sm">@laurenwilsonphoto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F5F2] p-8">
              <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 mb-3">Response Time</div>
              <p className="text-[#333333]/60 text-sm leading-relaxed mb-5">
                I typically respond within 24–48 hours Monday through Friday. For urgent inquiries, feel free to call or send a DM on Instagram.
              </p>
              <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 mb-3 mt-6">Booking Availability</div>
              <p className="text-[#333333]/60 text-sm leading-relaxed">
                Currently booking portrait sessions for Summer 2026 and weddings through Fall 2026. Spots fill quickly — reach out early to secure your date.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                alt="Colorado"
                fill
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bg-[#1A1A1A] text-white py-14 px-6 text-center">
        <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold mb-2">Not sure what you need?</p>
        <p className="text-white/65 text-sm">
          Browse the{' '}
          <Link href={`${BASE}/services`} className="underline hover:text-white transition-colors">
            services page
          </Link>{' '}
          or{' '}
          <Link href={`${BASE}/portfolio`} className="underline hover:text-white transition-colors">
            view the portfolio
          </Link>{' '}
          first.
        </p>
      </section>
    </>
  );
}
