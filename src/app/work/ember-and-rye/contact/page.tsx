'use client';
import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Check } from 'lucide-react';

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';
const CHARCOAL = '#2A2018';

export default function EmberAndRyeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    date: '', time: '', party: '',
    occasion: '', requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 md:px-12 text-center" style={{ backgroundColor: DARK }}>
        <p
          className="text-[10px] uppercase tracking-[0.5em] mb-4"
          style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
        >
          Reservations
        </p>
        <h1
          className="text-5xl md:text-6xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          Find us in River North
        </h1>
        <div className="w-16 h-px mx-auto" style={{ backgroundColor: GOLD }} />
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-8">

          {/* Left: Info */}
          <div className="space-y-8">
            <div className="p-8" style={{ backgroundColor: DARK }}>
              <div
                className="text-[9px] font-semibold uppercase tracking-[0.4em] mb-6"
                style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
              >
                Visit Us
              </div>

              <a href="tel:+13125550193" className="flex items-start gap-4 mb-6">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 border"
                  style={{ borderColor: 'rgba(194,65,12,0.4)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: EMBER }} />
                </div>
                <div>
                  <div
                    className="text-lg"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                  >
                    (312) 555-0193
                  </div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>
                    Reservations
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 border"
                  style={{ borderColor: 'rgba(194,65,12,0.4)' }}
                >
                  <MapPin className="w-4 h-4" style={{ color: EMBER }} />
                </div>
                <div>
                  <div className="text-sm font-medium mb-0.5" style={{ color: CREAM, fontFamily: 'var(--font-body)' }}>
                    445 N Clark Street<br />Chicago, IL 60654
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>
                    Valet available Fri–Sat · Street parking available
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 border"
                  style={{ borderColor: 'rgba(194,65,12,0.4)' }}
                >
                  <Mail className="w-4 h-4" style={{ color: EMBER }} />
                </div>
                <div className="text-sm" style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-body)' }}>
                  reservations@emberandrye.com
                </div>
              </div>

              <div
                className="border-t pt-6"
                style={{ borderColor: 'rgba(245,237,216,0.1)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-3.5 h-3.5" style={{ color: GOLD }} />
                  <div
                    className="text-[9px] font-semibold uppercase tracking-[0.4em]"
                    style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
                  >
                    Hours
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ['Tuesday – Thursday', '5pm – 10pm'],
                    ['Friday – Saturday', '5pm – 11pm'],
                    ['Sunday', '5pm – 9pm'],
                    ['Monday', 'Closed'],
                  ].map(([day, hours], i) => (
                    <div key={i} className="flex justify-between">
                      <span style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-body)' }}>{day}</span>
                      <span style={{ color: CREAM, fontFamily: 'var(--font-body)' }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Private Dining */}
            <div className="p-8 border-l-2" style={{ backgroundColor: DARK, borderLeftColor: EMBER }}>
              <div
                className="text-[9px] font-semibold uppercase tracking-[0.4em] mb-3"
                style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
              >
                Private Dining
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}>
                Our private dining room seats up to 22 guests. Corporate dinners, milestone celebrations, and intimate events handled with full hospitality.
              </p>
              <div className="space-y-2">
                {['Custom menu planning with Chef Daniel', 'Dedicated service team', 'Full wine pairing available', 'AV equipment provided'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-body)' }}>
                    <Check className="w-3 h-3 shrink-0" style={{ color: GOLD }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center p-14 text-center h-full min-h-[500px]"
                style={{ backgroundColor: DARK }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 border" style={{ borderColor: GOLD }}>
                  <Check className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <h2
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                >
                  We&rsquo;ll be in touch.
                </h2>
                <p className="text-sm text-center max-w-xs leading-relaxed" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>
                  Your reservation request has been received. We&rsquo;ll confirm by email within 24 hours, or call (312) 555-0193 for immediate assistance.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-[10px] font-semibold uppercase tracking-widest border-b pb-0.5"
                  style={{ color: EMBER, borderColor: EMBER, fontFamily: 'var(--font-body)' }}
                >
                  New Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5"
                style={{ backgroundColor: DARK }}
              >
                <div>
                  <h2
                    className="text-xl mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                  >
                    Reserve a Table
                  </h2>
                  <p className="text-xs" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>
                    Reservations recommended. We accommodate walk-ins based on availability.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Name*</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Phone</label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                      placeholder="(312) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Email*</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                    placeholder="you@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Date*</label>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Time*</label>
                    <select
                      required
                      value={form.time}
                      onChange={e => setForm({ ...form, time: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                    >
                      <option value="">Select</option>
                      {['5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm'].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Guests*</label>
                    <select
                      required
                      value={form.party}
                      onChange={e => setForm({ ...form, party: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                    >
                      <option value="">Size</option>
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11–22 (Private Dining)'].map(p => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Occasion</label>
                  <select
                    value={form.occasion}
                    onChange={e => setForm({ ...form, occasion: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select (optional)</option>
                    {['Anniversary', 'Birthday', 'Business Dinner', 'Date Night', 'Graduation', 'Proposal', 'Other'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: 'var(--font-body)' }}>Special Requests</label>
                  <textarea
                    rows={3}
                    value={form.requests}
                    onChange={e => setForm({ ...form, requests: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                    style={{ backgroundColor: CHARCOAL, color: CREAM, border: '1px solid rgba(245,237,216,0.15)', fontFamily: 'var(--font-body)' }}
                    placeholder="Dietary restrictions, allergies, seating preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-[11px] font-semibold uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
                  style={{ backgroundColor: EMBER, color: CREAM, fontFamily: 'var(--font-body)' }}
                >
                  Request Reservation
                </button>

                <p
                  className="text-[10px] text-center"
                  style={{ color: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
                >
                  We will confirm within 24 hours. For same-day reservations call (312) 555-0193.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
