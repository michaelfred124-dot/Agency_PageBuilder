'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShoppingBag } from 'lucide-react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';
const MOCHA = '#5C3D2E';
const CREAM = '#FDF9F3';

export default function MaisonContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', purpose: '', size: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: SAGE }}
          >
            Contact & Booking
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: SAGE }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
          >
            Book a Styling Appointment
          </h1>
          <p
            className="mt-8 text-base max-w-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
          >
            Complimentary 45-minute sessions. Walk in with a challenge, walk out with a wardrobe.
          </p>
        </div>
      </section>

      {/* Main Layout: Boutique Info Left + Form Right */}
      <section style={{ backgroundColor: SAND }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Left: Boutique Info */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-8"
                style={{ fontFamily: 'var(--font-body)', color: MOCHA }}
              >
                Visit Us
              </span>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: ESPRESSO }}
                    >
                      Address
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
                    >
                      512 12th Ave South<br />Nashville, TN 37203<br />
                      <span style={{ color: SAGE }}>The 12 South neighborhood</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: ESPRESSO }}
                    >
                      Phone
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
                    >
                      (615) 555-0284
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: ESPRESSO }}
                    >
                      Email
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
                    >
                      hello@maisonboutique.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: ESPRESSO }}
                    >
                      Hours
                    </div>
                    <div className="space-y-1.5">
                      {[['Mon – Sat', '10am – 7pm'], ['Sunday', '11am – 5pm']].map(([d, h], i) => (
                        <div
                          key={i}
                          className="flex justify-between gap-8 text-sm"
                          style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}70` }}
                        >
                          <span>{d}</span>
                          <span className="font-semibold" style={{ color: ESPRESSO }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Styling note */}
            <div className="p-8" style={{ backgroundColor: CREAM }}>
              <div
                className="text-[9px] font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-body)', color: SAGE }}
              >
                Complimentary Styling
              </div>
              <p
                className="text-base mb-2"
                style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
              >
                Every appointment is free.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}65` }}
              >
                No commitment required. Walk in for a styling session anytime, or book ahead via the form for priority scheduling with Simone.
              </p>
            </div>

            {/* Shipping note */}
            <div
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-body)', color: SAGE }}
            >
              Free shipping on orders $75+
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-8"
              style={{ fontFamily: 'var(--font-body)', color: MOCHA }}
            >
              Send a Message
            </span>

            {sent ? (
              <div className="p-14 text-center" style={{ backgroundColor: CREAM }}>
                <ShoppingBag className="w-14 h-14 mx-auto mb-7" style={{ color: SAGE }} strokeWidth={1.5} />
                <h2
                  className="text-3xl mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
                >
                  Thank you! We'll be in touch.
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-sm mx-auto mb-8"
                  style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}65` }}
                >
                  Simone will reach out within 24 hours to confirm your styling appointment or answer your question.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5 hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', color: SAGE, borderColor: SAGE }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-10 space-y-5" style={{ backgroundColor: CREAM }}>
                <h2
                  className="text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: ESPRESSO }}
                >
                  Get in Touch
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}55` }}
                    >
                      Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        border: `1px solid ${ESPRESSO}18`,
                        backgroundColor: '#fff',
                        color: ESPRESSO,
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}55` }}
                    >
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        border: `1px solid ${ESPRESSO}18`,
                        backgroundColor: '#fff',
                        color: ESPRESSO,
                      }}
                      placeholder="(615) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}55` }}
                  >
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{
                      fontFamily: 'var(--font-body)',
                      border: `1px solid ${ESPRESSO}18`,
                      backgroundColor: '#fff',
                      color: ESPRESSO,
                    }}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}55` }}
                  >
                    How can we help? *
                  </label>
                  <select
                    required
                    value={form.purpose}
                    onChange={e => setForm({ ...form, purpose: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none appearance-none"
                    style={{
                      fontFamily: 'var(--font-body)',
                      border: `1px solid ${ESPRESSO}18`,
                      backgroundColor: '#fff',
                      color: ESPRESSO,
                    }}
                  >
                    <option value="">Select...</option>
                    {[
                      'Book a Styling Appointment',
                      'Shop a Specific Event / Occasion',
                      'Wardrobe Audit',
                      'Gift Styling',
                      'Order / Return Question',
                      'General Inquiry',
                    ].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}55` }}
                  >
                    Typical size (optional)
                  </label>
                  <select
                    value={form.size}
                    onChange={e => setForm({ ...form, size: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none appearance-none"
                    style={{
                      fontFamily: 'var(--font-body)',
                      border: `1px solid ${ESPRESSO}18`,
                      backgroundColor: '#fff',
                      color: ESPRESSO,
                    }}
                  >
                    <option value="">Prefer not to say</option>
                    {['XS (0–2)', 'S (4–6)', 'M (8–10)', 'L (12–14)', 'XL (16–18)', 'XXL (20+)', 'Varies — I will explain'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: `${ESPRESSO}55` }}
                  >
                    Tell us more
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                    style={{
                      fontFamily: 'var(--font-body)',
                      border: `1px solid ${ESPRESSO}18`,
                      backgroundColor: '#fff',
                      color: ESPRESSO,
                    }}
                    placeholder="Occasion, style goals, budget range, or anything else..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', backgroundColor: ESPRESSO }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
