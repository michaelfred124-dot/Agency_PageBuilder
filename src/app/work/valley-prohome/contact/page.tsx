'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, AlertTriangle, Clock } from 'lucide-react';

const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';
const WHITE = '#FFFFFF';
const DARK = '#111111';

export default function ValleyProHomeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* 24/7 Emergency Strip */}
      <div
        className="py-3 px-6 text-center flex items-center justify-center gap-3"
        style={{ backgroundColor: GOLD }}
      >
        <AlertTriangle className="w-4 h-4" style={{ color: DARK }} strokeWidth={2} />
        <span
          className="text-sm"
          style={{ color: DARK, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          24/7 Emergency Line:
        </span>
        <a
          href="tel:5553829100"
          className="text-sm underline underline-offset-2"
          style={{ color: DARK, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          (555) 382-9100
        </a>
        <span
          className="text-xs"
          style={{ color: 'rgba(0,0,0,0.55)', fontFamily: 'var(--font-body)' }}
        >
          — Burst pipes, no power, AC out in summer heat
        </span>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: GREEN }} className="py-20 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Contact</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >Request a Free Estimate</h1>
        <div className="w-16 h-1.5 mx-auto mb-6" style={{ backgroundColor: GOLD }} />
        <p
          className="text-white/60 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Same-week scheduling. 24/7 emergency line. Licensed, bonded, and insured. Flat-rate pricing — no surprise charges.
        </p>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_340px] gap-10">

          {/* Form or Success */}
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-14 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: GREEN }}>
                <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2
                className="text-2xl mb-3"
                style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >Request Received!</h2>
              <p
                className="text-gray-500 text-sm mb-2 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We will call to schedule your free estimate within one business day.
              </p>
              <p
                className="text-gray-500 text-sm mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                For emergencies, call directly: <strong style={{ color: GREEN }}>(555) 382-9100</strong>
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] uppercase tracking-widest border-b pb-0.5"
                style={{ color: GREEN, borderColor: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-10 space-y-5">
              <div className="mb-4">
                <h2
                  className="text-xl mb-1"
                  style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >Service Request</h2>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: 'var(--font-body)' }}
                >Free estimates. No obligation. Fast response.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >Phone *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="(602) 555-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="you@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >Service Type *</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select service...</option>
                    {['Plumbing', 'Electrical', 'HVAC / AC', 'Roofing', 'General Repairs', 'Multiple Services', 'Home Inspection'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >Urgency *</label>
                  <select
                    required
                    value={form.urgency}
                    onChange={e => setForm({ ...form, urgency: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select urgency...</option>
                    {[
                      'Emergency — need help today',
                      'Same-day — urgent but not emergency',
                      'This week — flexible scheduling',
                      'Getting estimates — no rush',
                    ].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >Your City</label>
                <input
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="Phoenix, Scottsdale, Mesa, Chandler..."
                />
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >Describe the Issue</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="What is happening? When did it start? Any other details that will help us help you faster..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900, color: DARK }}
              >
                Request Free Estimate
              </button>
            </form>
          )}

          {/* Info Panel */}
          <div className="space-y-4">
            {/* Emergency Highlight */}
            <div style={{ backgroundColor: GREEN }} className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4" style={{ color: GOLD }} strokeWidth={2} />
                <div
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: GOLD, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >24/7 Emergency Line</div>
              </div>
              <a
                href="tel:5553829100"
                className="block text-3xl text-white mb-1 hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >
                (555) 382-9100
              </a>
              <p
                className="text-white/55 text-xs leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Burst pipes, electrical failures, AC out — we respond to emergencies any time, day or night.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6">
              <div
                className="text-[10px] uppercase tracking-widest mb-4 text-gray-400"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >Office</div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                    >(555) 382-9100</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >Main & emergency line</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                    >service@valleyprohome.com</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >Responded within 2 hours</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
                    >Phoenix & East Valley, AZ</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >Scottsdale · Tempe · Mesa · Chandler<br />Gilbert · Glendale</div>
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
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >Hours</div>
              </div>
              <div className="space-y-2">
                {[
                  ['Mon – Fri', '7am – 7pm', false],
                  ['Saturday', '8am – 5pm', false],
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
                        color: em ? GOLD : GREEN,
                        fontFamily: 'var(--font-display)',
                        fontWeight: 900,
                      }}
                    >{h as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust */}
            <div className="bg-white p-6 border-l-4" style={{ borderColor: GREEN }}>
              <div
                className="text-[10px] uppercase tracking-widest mb-3"
                style={{ color: GREEN, fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >Our Promise</div>
              <div className="space-y-2">
                {['Licensed & insured in all trades', 'Flat-rate pricing — no surprises', '2-year workmanship warranty', 'Free estimates on all jobs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" style={{ color: GOLD }} strokeWidth={2.5} />
                    <span
                      className="text-xs text-gray-600"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
