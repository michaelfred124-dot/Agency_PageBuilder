'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check, ArrowRight } from 'lucide-react';

const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';
const SILVER = '#8C8C8C';
const CONCRETE = '#F5F5F5';

export default function RidgeLineContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-4"
            style={{ color: RED, fontFamily: 'var(--font-display)' }}
          >
            Contact
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-5 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Book a Service
            <br />
            Appointment
          </h1>
          <div style={{ width: 60, height: 3, backgroundColor: RED }} className="mb-6" />
          <p
            className="text-white/50 max-w-lg text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Same-day service on most repairs. ASE certified. Honest pricing with no hidden fees.
          </p>
        </div>
      </section>

      {/* Main Content: Sidebar Info + Form */}
      <section style={{ backgroundColor: CONCRETE }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-8">

          {/* LEFT: Shop Info Panel */}
          <div className="space-y-0">
            <div
              className="p-8"
              style={{ backgroundColor: CHARCOAL }}
            >
              <div
                className="text-[9px] font-black uppercase tracking-[0.4em] mb-6"
                style={{ color: RED, fontFamily: 'var(--font-display)' }}
              >
                Find Us
              </div>

              {/* Phone — prominent */}
              <a
                href="tel:+13035550247"
                className="flex items-center gap-3 mb-6 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: RED }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-lg text-white leading-tight"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                    }}
                  >
                    (303) 555-0247
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: SILVER, fontFamily: 'var(--font-body)' }}
                  >
                    Call or Text
                  </div>
                </div>
              </a>

              {/* Call Now CTA */}
              <a
                href="tel:+13035550247"
                className="flex items-center justify-center gap-2 w-full py-3 mb-7 font-black uppercase tracking-widest text-[11px] text-white"
                style={{ backgroundColor: RED, fontFamily: 'var(--font-display)' }}
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Address */}
              <div className="flex gap-3 mb-5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                <div>
                  <div
                    className="text-white text-sm mb-0.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}
                  >
                    4821 W Colfax Ave
                    <br />
                    Denver, CO 80204
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: SILVER, fontFamily: 'var(--font-body)' }}
                  >
                    Easy parking — drive-in service bay
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 mb-8">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                <div
                  className="text-sm"
                  style={{ color: SILVER, fontFamily: 'var(--font-body)' }}
                >
                  service@ridgelineauto.com
                </div>
              </div>

              {/* Hours */}
              <div
                className="border-t pt-6"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-3.5 h-3.5" style={{ color: RED }} />
                  <div
                    className="text-[9px] font-black uppercase tracking-[0.4em]"
                    style={{ color: SILVER, fontFamily: 'var(--font-display)' }}
                  >
                    Shop Hours
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ['Mon – Fri', '7am – 6pm'],
                    ['Saturday', '8am – 4pm'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours], i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span
                        style={{ color: SILVER, fontFamily: 'var(--font-body)' }}
                      >
                        {day}
                      </span>
                      <span
                        className={hours === 'Closed' ? '' : 'text-white'}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: hours === 'Closed' ? 400 : 700,
                          color: hours === 'Closed' ? SILVER : '#FFFFFF',
                          fontSize: '0.8rem',
                        }}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty note */}
              <div
                className="mt-6 border-t pt-5 text-[11px] text-white/40 leading-relaxed"
                style={{ borderColor: 'rgba(255,255,255,0.1)', fontFamily: 'var(--font-body)' }}
              >
                All repairs backed by our 24-month / 24,000-mile warranty. No surprises. No hidden fees.
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center p-14 text-center h-full"
                style={{ backgroundColor: CHARCOAL, borderTop: `4px solid ${RED}` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: RED }}
                >
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h2
                  className="text-2xl text-white mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  Got it. We Will Call You Shortly.
                </h2>
                <p
                  className="text-white/50 text-sm mb-8 max-w-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Our service advisor will confirm your appointment via phone or email within 2 business hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[10px] font-black uppercase tracking-widest border-b pb-0.5"
                  style={{ color: RED, borderColor: RED, fontFamily: 'var(--font-display)' }}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 space-y-5"
                style={{ borderTop: `4px solid ${RED}` }}
              >
                <div>
                  <h2
                    className="text-base mb-1"
                    style={{
                      color: CHARCOAL,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Service Request
                  </h2>
                  <p
                    className="text-xs text-gray-400"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Fill out below and we will confirm your appointment within 2 hours.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Name*
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
                      placeholder="John Smith"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Phone*
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
                      placeholder="(303) 555-0000"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
                    placeholder="john@email.com"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Vehicle (Year, Make, Model)*
                  </label>
                  <input
                    required
                    value={form.vehicle}
                    onChange={e => setForm({ ...form, vehicle: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
                    placeholder="2019 Honda Accord"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Service Needed*
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-500 bg-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select service type...</option>
                    {[
                      'Oil Change / Fluids',
                      'Brakes',
                      'Engine / Transmission',
                      'Tires / Alignment',
                      'Electrical / Diagnostics',
                      'AC / Heat',
                      'Preventive Maintenance',
                      'Pre-Purchase Inspection',
                      'General Inspection',
                      'Other',
                    ].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Additional Details
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-500 resize-none"
                    placeholder="Describe any symptoms, warning lights, noises, or anything we should know..."
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white font-black uppercase tracking-widest text-[11px]"
                  style={{ backgroundColor: RED, fontFamily: 'var(--font-display)' }}
                >
                  Request Appointment
                </button>

                <p
                  className="text-[10px] text-gray-400 text-center"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  No repair will begin without your written approval. We will call to confirm.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
