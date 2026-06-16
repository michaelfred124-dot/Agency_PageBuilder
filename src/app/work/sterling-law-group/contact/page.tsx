'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check, AlertCircle } from 'lucide-react';

const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';
const DARK = '#0F1A33';
const WHITE = '#FFFFFF';

export default function SterlingContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.3em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >Contact</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >Schedule a Free Consultation</h1>
        {/* Classical gold rule */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20" style={{ backgroundColor: GOLD }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: GOLD }} />
          <div className="h-px w-20" style={{ backgroundColor: GOLD }} />
        </div>
        <p
          className="text-white/60 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          No fees unless we win on personal injury cases. Direct attorney access from day one. All consultations are strictly confidential.
        </p>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_340px] gap-10">

          {/* Form or Success */}
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-14 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: GOLD }}>
                <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2
                className="text-2xl mb-3"
                style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              >Thank You</h2>
              <p
                className="text-gray-600 leading-relaxed mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                A member of our team will reach out within one business day to schedule your free consultation.
              </p>
              <p
                className="text-gray-500 text-sm mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                For urgent matters, please call our 24/7 emergency line: <strong style={{ color: NAVY }}>(719) 555-0180</strong>
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] uppercase tracking-widest border-b pb-0.5"
                style={{ color: GOLD, borderColor: GOLD, fontFamily: 'var(--font-display)' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-10 space-y-5">
              <div className="mb-6">
                <h2
                  className="text-xl mb-1"
                  style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                >Tell Us About Your Matter</h2>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >All information shared is strictly confidential.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >Phone Number</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="(719) 555-0100"
                />
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >Case Type *</label>
                <select
                  required
                  value={form.matter}
                  onChange={e => setForm({ ...form, matter: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 bg-white"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <option value="">Select a practice area...</option>
                  {[
                    'Personal Injury',
                    'Family Law',
                    'Criminal Defense',
                    'Business Law',
                    'Estate Planning',
                    'Real Estate Law',
                    'Other / Not Sure',
                  ].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >Brief Description *</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="Please briefly describe your legal situation. All information is kept strictly confidential..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              >
                Request Free Consultation
              </button>

              <p
                className="text-[10px] text-gray-400 text-center"
                style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >
                All consultations are confidential. Attorney-client privilege applies from our first conversation.
              </p>
            </form>
          )}

          {/* Info Panel */}
          <div className="space-y-4">
            {/* Attorney Direct Lines */}
            <div style={{ backgroundColor: DARK }} className="p-6">
              <div
                className="text-[10px] uppercase tracking-widest mb-4"
                style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
              >Our Attorneys</div>
              <div className="space-y-4">
                {[
                  { name: 'James Sterling', title: 'Personal Injury' },
                  { name: 'Maria Lawson', title: 'Family Law' },
                  { name: 'Derek Chun', title: 'Criminal Defense' },
                ].map(({ name, title }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: GOLD + '22', border: `1px solid ${GOLD}44` }}>
                      <span
                        className="text-xs"
                        style={{ color: GOLD, fontFamily: 'var(--font-display)' }}
                      >{name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div
                        className="text-sm text-white"
                        style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                      >{name}</div>
                      <div
                        className="text-[10px]"
                        style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
                      >{title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="p-5 border-l-4" style={{ backgroundColor: GOLD + '15', borderColor: GOLD }}>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
                  >24/7 Emergency Line</div>
                  <div
                    className="text-sm"
                    style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                  >(719) 555-0199</div>
                  <div
                    className="text-xs text-gray-500 mt-0.5"
                    style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
                  >Criminal defense & urgent matters</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6">
              <div
                className="text-[10px] uppercase tracking-widest mb-4 text-gray-400"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
              >Office</div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                    >(719) 555-0180</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >Main office line</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                    >info@sterlinglaw.com</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >24-hour email response</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: NAVY, fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                    >218 North Cascade Ave</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >Colorado Springs, CO 80903<br />Free parking available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4" style={{ color: GOLD }} strokeWidth={1.5} />
                <div
                  className="text-[10px] uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                >Office Hours</div>
              </div>
              <div className="space-y-2">
                {[
                  ['Mon – Fri', '8am – 6pm', false],
                  ['Saturday', '9am – 2pm', false],
                  ['Emergency', '24/7', true],
                ].map(([d, h, em], i) => (
                  <div key={i} className="flex justify-between">
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >{d as string}</span>
                    <span
                      className="text-sm"
                      style={{
                        color: em ? GOLD : NAVY,
                        fontFamily: 'var(--font-display)',
                        fontWeight: em ? 700 : 400,
                      }}
                    >{h as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* No Fee Unless We Win */}
            <div className="p-5 text-center" style={{ backgroundColor: NAVY }}>
              <div
                className="text-[10px] uppercase tracking-widest mb-2"
                style={{ color: GOLD, fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
              >No Fees Unless We Win</div>
              <p
                className="text-white/60 text-xs leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >
                On personal injury cases, we only get paid when you do. Zero financial risk to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
