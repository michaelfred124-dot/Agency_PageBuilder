'use client';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/lauren-wilson-photo';

const DARK = '#1A1A1A';
const WARM_SAND = '#F0EBE3';
const FOREST = '#3D5A4C';
const OFF_WHITE = '#FDFBF9';

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
      {/* Page Header */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
          >
            Get In Touch
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: FOREST }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
          >
            Let's Work Together
          </h1>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ backgroundColor: WARM_SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Left: Contact Info + Booking Note */}
          <div className="lg:col-span-2 space-y-10 order-2 lg:order-1">
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-8"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
              >
                Contact Info
              </span>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: `${DARK}40` }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: DARK }}
                    >
                      Location
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
                    >
                      Denver, Colorado, USA<br />Available for travel worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: `${DARK}40` }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: DARK }}
                    >
                      Phone
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
                    >
                      (303) 555-1234
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: `${DARK}40` }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: DARK }}
                    >
                      Email
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
                    >
                      hello@laurenwilsonphoto.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="w-4 h-4 shrink-0 mt-0.5" style={{ color: `${DARK}40` }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: DARK }}
                    >
                      Instagram
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
                    >
                      @laurenwilsonphoto
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking notice */}
            <div className="p-8" style={{ backgroundColor: OFF_WHITE }}>
              <div
                className="text-[9px] font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-body)', color: FOREST }}
              >
                Currently Booking
              </div>
              <p
                className="text-base font-semibold mb-4 leading-snug"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
              >
                2026–2027 Portrait & Wedding Sessions
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}65` }}
              >
                Spots fill quickly — reach out early to secure your date. I respond within 24–48 hours Monday through Friday.
              </p>
            </div>

            {/* Landscape photo */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                alt="Colorado"
                fill
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-8"
              style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
            >
              Send an Inquiry
            </span>

            {sent ? (
              <div className="p-14 text-center" style={{ backgroundColor: OFF_WHITE }}>
                <div
                  className="w-14 h-14 flex items-center justify-center mx-auto mb-7 text-2xl"
                  style={{ backgroundColor: FOREST, color: '#fff' }}
                >
                  ✓
                </div>
                <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
                >
                  Message received!
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm mx-auto"
                  style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
                >
                  Thank you for reaching out. I'll review your inquiry and respond within 48 hours. Can't wait to hear more!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-[9px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="First & Last Name"
                      className="w-full px-4 py-4 text-sm focus:outline-none transition-colors"
                      style={{
                        fontFamily: 'var(--font-body)',
                        border: `1px solid ${DARK}18`,
                        backgroundColor: OFF_WHITE,
                        color: DARK,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[9px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-4 py-4 text-sm focus:outline-none transition-colors"
                      style={{
                        fontFamily: 'var(--font-body)',
                        border: `1px solid ${DARK}18`,
                        backgroundColor: OFF_WHITE,
                        color: DARK,
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-[9px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
                    >
                      Session Type
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-sm focus:outline-none appearance-none transition-colors"
                      style={{
                        fontFamily: 'var(--font-body)',
                        border: `1px solid ${DARK}18`,
                        backgroundColor: OFF_WHITE,
                        color: DARK,
                      }}
                    >
                      <option value="">Select a type...</option>
                      {SESSION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-[9px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-sm focus:outline-none transition-colors"
                      style={{
                        fontFamily: 'var(--font-body)',
                        border: `1px solid ${DARK}18`,
                        backgroundColor: OFF_WHITE,
                        color: DARK,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-[9px] font-bold uppercase tracking-widest block mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
                  >
                    Tell Me About Your Vision *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your session, location ideas, how you heard about me, or anything else you'd like me to know..."
                    className="w-full px-4 py-4 text-sm focus:outline-none resize-none transition-colors"
                    style={{
                      fontFamily: 'var(--font-body)',
                      border: `1px solid ${DARK}18`,
                      backgroundColor: OFF_WHITE,
                      color: DARK,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', backgroundColor: FOREST, color: '#fff' }}
                >
                  Send My Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <p
          className="text-[11px] uppercase tracking-widest font-bold mb-2"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
        >
          Not sure what you need?
        </p>
        <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)' }}>
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
