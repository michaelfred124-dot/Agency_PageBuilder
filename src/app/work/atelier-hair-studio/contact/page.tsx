'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Scissors } from 'lucide-react';

const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';
const WARM_WHITE = '#FAF7F4';
const PLUM = '#3D1F2C';

export default function AtelierContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header */}
      <section
        style={{ backgroundColor: BLUSH }}
        className="relative py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12"
          style={{ backgroundColor: ROSE, opacity: 0.4 }}
        />
        <div
          className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6 px-5 py-2"
          style={{
            fontFamily: 'var(--font-body)',
            color: ROSE,
            border: `1px solid ${ROSE}`,
            opacity: 0.9,
          }}
        >
          Book Appointment
        </div>
        <h1
          className="text-5xl md:text-7xl mb-6 leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: CHARCOAL,
          }}
        >
          Schedule Your Visit
        </h1>
        <p
          className="max-w-md mx-auto text-sm leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: PLUM, opacity: 0.7 }}
        >
          New clients receive a complimentary deep conditioning treatment with any color service.
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12"
          style={{ backgroundColor: ROSE, opacity: 0.4 }}
        />
      </section>

      {/* Split Layout */}
      <section className="min-h-screen" style={{ backgroundColor: WARM_WHITE }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-[420px_1fr]">

          {/* Left Panel — Charcoal info column */}
          <div
            className="px-10 py-16 flex flex-col gap-10"
            style={{ backgroundColor: CHARCOAL }}
          >
            {/* Wordmark */}
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.5em] mb-3"
                style={{ fontFamily: 'var(--font-body)', color: ROSE }}
              >
                Atelier Hair Studio
              </div>
              <h2
                className="text-3xl text-white leading-tight"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                Come find us<br />in South Lamar.
              </h2>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="tel:5125550093"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: ROSE }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                  >
                    Phone
                  </div>
                  <div
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    (512) 555-0093
                  </div>
                </div>
              </a>

              <a
                href="mailto:hello@atelierhair.com"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: ROSE }}
                >
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                  >
                    Email
                  </div>
                  <div
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    hello@atelierhair.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: ROSE }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                  >
                    Location
                  </div>
                  <div
                    className="text-white text-sm font-bold leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    2104 South Lamar Blvd<br />Austin, TX 78704
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: ROSE, opacity: 0.25 }} />

            {/* Hours */}
            <div>
              <div
                className="text-[10px] uppercase tracking-[0.4em] mb-5"
                style={{ fontFamily: 'var(--font-body)', color: ROSE }}
              >
                Salon Hours
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Tue – Fri', hours: '9am – 7pm' },
                  { day: 'Saturday', hours: '9am – 6pm' },
                  { day: 'Sun – Mon', hours: 'Closed' },
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
                        color: hours === 'Closed' ? 'rgba(255,255,255,0.25)' : 'white',
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: ROSE, opacity: 0.25 }} />

            {/* New client offer */}
            <div style={{ backgroundColor: ROSE, padding: '1.5rem' }}>
              <div
                className="text-[10px] uppercase tracking-[0.4em] mb-2 text-white"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                New Client Offer
              </div>
              <p
                className="text-white/90 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Complimentary deep conditioning treatment with any color service on your first visit.
              </p>
            </div>
          </div>

          {/* Right Panel — Form */}
          <div className="px-10 md:px-16 py-16" style={{ backgroundColor: WARM_WHITE }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto py-20">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-8"
                  style={{ backgroundColor: BLUSH }}
                >
                  <Scissors className="w-7 h-7" style={{ color: ROSE }} strokeWidth={1.5} />
                </div>
                <h2
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: CHARCOAL,
                  }}
                >
                  We have received your request!
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-body)', color: PLUM, opacity: 0.65 }}
                >
                  Our team will confirm your appointment within 24 hours. We look forward to seeing you.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5 transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: ROSE,
                    borderColor: ROSE,
                  }}
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl">
                <h2
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: CHARCOAL,
                  }}
                >
                  Appointment Request
                </h2>
                <p
                  className="text-sm mb-10"
                  style={{ fontFamily: 'var(--font-body)', color: PLUM, opacity: 0.55 }}
                >
                  Fill out the form below and we will be in touch within 24 hours to confirm.
                </p>

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                      >
                        Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm focus:outline-none"
                        style={{
                          fontFamily: 'var(--font-body)',
                          backgroundColor: 'white',
                          border: `1px solid ${BLUSH}`,
                          color: CHARCOAL,
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: ROSE }}
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
                          backgroundColor: 'white',
                          border: `1px solid ${BLUSH}`,
                          color: CHARCOAL,
                        }}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                    >
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'white',
                        border: `1px solid ${BLUSH}`,
                        color: CHARCOAL,
                      }}
                      placeholder="(512) 555-0000"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                    >
                      Service *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none appearance-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'white',
                        border: `1px solid ${BLUSH}`,
                        color: form.service ? CHARCOAL : '#9ca3af',
                      }}
                    >
                      <option value="">Select a service...</option>
                      {[
                        "Women's Cut & Style",
                        'Balayage',
                        'Full Color',
                        'Highlights',
                        'Keratin Treatment',
                        'Bridal Hair',
                        'Blowout',
                        'Color Correction',
                        'Other',
                      ].map(o => (
                        <option key={o} style={{ color: CHARCOAL }}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                    >
                      Preferred Stylist
                    </label>
                    <select
                      value={form.stylist}
                      onChange={e => setForm({ ...form, stylist: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none appearance-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'white',
                        border: `1px solid ${BLUSH}`,
                        color: CHARCOAL,
                      }}
                    >
                      <option value="">No preference</option>
                      {['Maria Solis', 'Priya Sharma', 'Jamie Cole'].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: ROSE }}
                    >
                      Notes (hair history, goals, etc.)
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={e => setForm({ ...form, notes: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3.5 text-sm focus:outline-none resize-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'white',
                        border: `1px solid ${BLUSH}`,
                        color: CHARCOAL,
                      }}
                      placeholder="Share anything about your hair history or what you are hoping to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 text-white font-bold uppercase tracking-widest text-[11px] transition-opacity hover:opacity-90"
                    style={{ fontFamily: 'var(--font-body)', backgroundColor: CHARCOAL }}
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
