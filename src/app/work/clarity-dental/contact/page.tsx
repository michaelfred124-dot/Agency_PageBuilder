'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const NAVY = '#0C2340';
const SKY = '#0284C7';
const ICE = '#F0F9FF';
const MINT = '#DCFCE7';
const WHITE = '#FFFFFF';

export default function ClarityDentalContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    insurance: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: NAVY }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: SKY }} />
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6 px-5 py-2"
          style={{
            fontFamily: 'var(--font-body)',
            color: SKY,
            border: `1px solid ${SKY}`,
            opacity: 0.85,
          }}
        >
          Book Appointment
        </div>
        <h1
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Schedule Your Visit
        </h1>
        <p
          className="max-w-lg mx-auto leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '0.95rem',
          }}
        >
          New patients welcome. Same-week appointments available. Most insurances accepted.
        </p>
      </section>

      {/* Split Layout */}
      <section className="min-h-screen">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[380px_1fr]">

          {/* Left Panel — NAVY */}
          <div
            className="px-10 py-16 flex flex-col gap-10"
            style={{ backgroundColor: NAVY }}
          >
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.5em] mb-3"
                style={{ fontFamily: 'var(--font-body)', color: SKY }}
              >
                Clarity Dental
              </div>
              <h2
                className="text-3xl text-white leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                We make it easy<br />to get started.
              </h2>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <a href="tel:7205550139" className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: SKY }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: SKY }}
                  >
                    Phone
                  </div>
                  <div
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    (720) 555-0139
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                  >
                    Mon–Sat
                  </div>
                </div>
              </a>

              <a href="mailto:smile@claritydental.com" className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: SKY }}
                >
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: SKY }}
                  >
                    Email
                  </div>
                  <div
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    smile@claritydental.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: SKY }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: SKY }}
                  >
                    Location
                  </div>
                  <div
                    className="text-white text-sm font-bold leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    525 Medical Center Blvd<br />Denver, CO 80220
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                  >
                    Free parking
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px" style={{ backgroundColor: SKY, opacity: 0.25 }} />

            {/* Hours */}
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.4em] mb-5"
                style={{ fontFamily: 'var(--font-body)', color: SKY }}
              >
                Office Hours
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Mon – Thu', hours: '7am – 7pm' },
                  { day: 'Friday', hours: '7am – 5pm' },
                  { day: 'Saturday', hours: '8am – 3pm' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(({ day, hours }, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
                    >
                      {day}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: hours === 'Closed' ? 'rgba(255,255,255,0.25)' : WHITE,
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px" style={{ backgroundColor: SKY, opacity: 0.25 }} />

            {/* New patient special — MINT highlight */}
            <div style={{ backgroundColor: MINT, padding: '1.5rem' }}>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2"
                style={{ fontFamily: 'var(--font-body)', color: '#166534' }}
              >
                New Patient Special
              </div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: '#166534' }}
              >
                $89
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: '#166534', opacity: 0.8 }}
              >
                Comprehensive exam, full X-rays, and cleaning for new patients. Mention this offer when booking.
              </p>
            </div>

            {/* Same-day emergency callout */}
            <div
              className="px-5 py-4 border-l-4"
              style={{ borderLeftColor: SKY, backgroundColor: 'rgba(2, 132, 199, 0.08)' }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-widest mb-1"
                style={{ fontFamily: 'var(--font-body)', color: SKY }}
              >
                Same-Day Emergency
              </div>
              <p
                className="text-xs"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
              >
                Call us first for tooth pain, broken teeth, or lost crowns. We always make room.
              </p>
            </div>
          </div>

          {/* Right Panel — Form on ICE */}
          <div className="px-10 md:px-16 py-16" style={{ backgroundColor: ICE }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto py-20">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-8"
                  style={{ backgroundColor: SKY }}
                >
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h2
                  className="text-4xl mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: NAVY }}
                >
                  Appointment Requested!
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-body)', color: '#6B7280' }}
                >
                  Our front desk will call to confirm your appointment within one business day. We look forward to meeting you.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5 transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: SKY,
                    borderColor: SKY,
                  }}
                >
                  Request Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl">
                <h2
                  className="text-4xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: NAVY }}
                >
                  Request an Appointment
                </h2>
                <p
                  className="text-sm mb-10"
                  style={{ fontFamily: 'var(--font-body)', color: '#6B7280' }}
                >
                  Fill in the form and our team will confirm your time within one business day.
                </p>

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: SKY }}
                      >
                        Full Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm focus:outline-none"
                        style={{
                          fontFamily: 'var(--font-body)',
                          backgroundColor: WHITE,
                          border: `1px solid #BFDBFE`,
                          color: NAVY,
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: SKY }}
                      >
                        Phone *
                      </label>
                      <input
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm focus:outline-none"
                        style={{
                          fontFamily: 'var(--font-body)',
                          backgroundColor: WHITE,
                          border: `1px solid #BFDBFE`,
                          color: NAVY,
                        }}
                        placeholder="(720) 555-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: SKY }}
                    >
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: WHITE,
                        border: `1px solid #BFDBFE`,
                        color: NAVY,
                      }}
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: SKY }}
                    >
                      Service Needed *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none appearance-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: WHITE,
                        border: `1px solid #BFDBFE`,
                        color: form.service ? NAVY : '#9CA3AF',
                      }}
                    >
                      <option value="">Select...</option>
                      {[
                        'New Patient Exam & Cleaning',
                        'Teeth Whitening',
                        'Veneers Consultation',
                        'Dental Implant Consultation',
                        'Invisalign Consultation',
                        'Emergency / Tooth Pain',
                        'Crown or Filling',
                        'Other',
                      ].map(o => (
                        <option key={o} style={{ color: NAVY }}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: SKY }}
                    >
                      Insurance (if applicable)
                    </label>
                    <input
                      value={form.insurance}
                      onChange={e => setForm({ ...form, insurance: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: WHITE,
                        border: `1px solid #BFDBFE`,
                        color: NAVY,
                      }}
                      placeholder="e.g. Delta Dental PPO, Cigna, or None"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: SKY }}
                    >
                      Additional Notes
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none resize-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: WHITE,
                        border: `1px solid #BFDBFE`,
                        color: NAVY,
                      }}
                      placeholder="Dental anxiety, special needs, or preferred appointment times..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 text-white font-bold uppercase tracking-widest text-[11px] transition-opacity hover:opacity-90"
                    style={{ fontFamily: 'var(--font-body)', backgroundColor: SKY }}
                  >
                    Request Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
