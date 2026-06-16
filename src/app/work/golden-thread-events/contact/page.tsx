'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Flower2, Check } from 'lucide-react';

const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const GOLD = '#C9A96E';
const IVORY = '#FAF7F2';

export default function GoldenThreadContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    service: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-screen grid md:grid-cols-[420px_1fr]">
      {/* Left Panel — Dark romantic sidebar */}
      <div
        className="relative flex flex-col justify-between p-10 md:p-14 min-h-[50vh] md:min-h-screen"
        style={{ backgroundColor: DARK }}
      >
        {/* Background texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10">
          {/* Logo mark */}
          <div className="flex items-center gap-3 mb-16">
            <Flower2 className="w-6 h-6" style={{ color: GOLD }} strokeWidth={1} />
            <div>
              <div
                className="text-white text-sm font-bold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.1rem' }}
              >
                Golden Thread
              </div>
              <div
                className="text-[9px] font-bold uppercase tracking-[0.4em]"
                style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
              >
                Events
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl text-white leading-[1.1] mb-5"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Let us talk about your day.
          </h1>
          <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
          <p
            className="text-white/50 text-sm leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Every extraordinary wedding begins with a single conversation. Sophia personally reviews every inquiry and responds within 48 hours.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-10">
            {[
              { icon: Phone, label: '(843) 555-0217' },
              { icon: Mail, label: 'hello@goldenthreadevents.com' },
              { icon: MapPin, label: 'Charleston, SC 29401' },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ border: `1px solid ${GOLD}40` }}
                >
                  <Icon className="w-4 h-4" style={{ color: GOLD }} strokeWidth={1.5} />
                </div>
                <span
                  className="text-white/70 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Destination note */}
          <div
            className="text-xs text-white/30 mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Serving Charleston, Savannah & destinations worldwide.
          </div>
        </div>

        {/* Scarcity footer */}
        <div className="relative z-10">
          <div className="border-t pt-8" style={{ borderColor: `${GOLD}30` }}>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2"
              style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
            >
              Limited Availability
            </div>
            <p
              className="text-white/40 text-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We accept only <span className="text-white font-bold">20 weddings per year</span>. Booking 12–18 months in advance is strongly recommended. If your date is available, we will confirm on your discovery call.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel — IVORY form */}
      <div
        className="flex items-center justify-center p-8 md:p-14"
        style={{ backgroundColor: IVORY }}
      >
        <div className="w-full max-w-lg">
          {sent ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: `${SAGE}20` }}
              >
                <Check className="w-8 h-8" style={{ color: SAGE }} />
              </div>
              <h2
                className="text-3xl mb-3"
                style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                Your inquiry is on its way.
              </h2>
              <div className="w-12 h-px mx-auto my-5" style={{ backgroundColor: GOLD }} />
              <p
                className="text-gray-500 text-sm mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Sophia personally reviews every inquiry and will reach out within 48 hours to schedule a discovery call. We cannot wait to hear your story.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
                style={{ color: SAGE, borderColor: GOLD, fontFamily: 'var(--font-body)' }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.5em] mb-3"
                  style={{ color: SAGE, fontFamily: 'var(--font-body)' }}
                >
                  Begin Your Journey
                </div>
                <h2
                  className="text-3xl"
                  style={{ color: DARK, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  Wedding Inquiry
                </h2>
                <div className="w-10 h-px mt-4" style={{ backgroundColor: GOLD }} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Your Name(s)*
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                      style={{ fontFamily: 'var(--font-body)' }}
                      placeholder="Sarah & Michael"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email Address*
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Phone Number
                  </label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="(843) 555-0000"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Venue (if known)
                    </label>
                    <input
                      value={form.venue}
                      onChange={e => setForm({ ...form, venue: e.target.value })}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                      style={{ fontFamily: 'var(--font-body)' }}
                      placeholder="The William Aiken House"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Estimated Guests
                    </label>
                    <input
                      value={form.guests}
                      onChange={e => setForm({ ...form, guests: e.target.value })}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                      style={{ fontFamily: 'var(--font-body)' }}
                      placeholder="e.g. 80–120"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Service You Are Interested In*
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select a service...</option>
                    {[
                      'Full Wedding Planning',
                      'Partial Planning',
                      'Day-Of Coordination',
                      'Floral Design Only',
                      'Planning + Florals',
                      'Other Event',
                    ].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Tell us about your vision
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Style, colors, feeling, or anything else you want us to know about your dream day..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px] transition-opacity hover:opacity-90"
                  style={{ backgroundColor: DARK, fontFamily: 'var(--font-body)' }}
                >
                  Send Inquiry
                </button>

                <p
                  className="text-center text-[10px] text-gray-400"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  We accept only 20 weddings per year. Inquire early — dates fill quickly.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
