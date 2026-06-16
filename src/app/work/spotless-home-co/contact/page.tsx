'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, Clock, Tag } from 'lucide-react';

const TEAL = '#0694A2';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WHITE = '#FFFFFF';

export default function SpotlessContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    homeSize: '',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: FOREST }} className="py-24 px-6 md:px-12 text-center">
        <div
          className="text-[10px] uppercase tracking-[0.5em] mb-5"
          style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >Get a Quote</div>
        <h1
          className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >Request Your Free Quote</h1>
        <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: TEAL }} />
        <p
          className="text-white/60 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          Response within 2 hours. First-time clients save 15% with code <span className="font-black text-white">SPOTLESS15</span>. 100% satisfaction guaranteed.
        </p>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_360px] gap-10">

          {/* Form or Success */}
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-14 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: TEAL }}>
                <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2
                className="text-2xl mb-3"
                style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >Quote request received!</h2>
              <p
                className="text-gray-500 text-sm mb-2 leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                We will send your personalized quote within 2 hours.
              </p>
              <p
                className="text-gray-500 text-sm mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                First-time clients save 15% — use code <strong style={{ color: TEAL }}>SPOTLESS15</strong> when booking.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] uppercase tracking-widest border-b pb-0.5"
                style={{ color: TEAL, borderColor: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Request Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 space-y-5">
              <h2
                className="text-xl mb-1"
                style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >Tell Us About Your Home</h2>
              <p
                className="text-sm text-gray-400 mb-4"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >All fields marked * are required.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >Phone *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    placeholder="(720) 555-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  placeholder="you@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >Service Type *</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 bg-white"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    <option value="">Select service...</option>
                    {['Standard Cleaning', 'Deep Cleaning', 'Move-In / Move-Out', 'Airbnb Turnover', 'One-Time Clean', 'Eco-Friendly Clean'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >Home Size *</label>
                  <select
                    required
                    value={form.homeSize}
                    onChange={e => setForm({ ...form, homeSize: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 bg-white"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    <option value="">Select size...</option>
                    {['Studio / 1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >Preferred Date</label>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={e => setForm({ ...form, preferredDate: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                />
              </div>

              <div>
                <label
                  className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >Additional Details</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 resize-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  placeholder="Pets, access instructions, specific areas of concern, promo code SPOTLESS15..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Get My Free Quote
              </button>
            </form>
          )}

          {/* Info Panel */}
          <div className="space-y-4">
            {/* Promo Banner */}
            <div className="p-5" style={{ backgroundColor: TEAL }}>
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-white" strokeWidth={1.5} />
                <div
                  className="text-[10px] uppercase tracking-widest text-white"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >New Client Offer</div>
              </div>
              <div
                className="text-2xl text-white mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >15% Off</div>
              <div
                className="text-white/80 text-sm mb-3"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >Your first clean with code:</div>
              <div
                className="text-center py-2 bg-white text-lg tracking-[0.2em]"
                style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >SPOTLESS15</div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6">
              <div
                className="text-[10px] uppercase tracking-widest mb-4 text-gray-400"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >Contact</div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: TEAL }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >(720) 555-0391</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >Call or text anytime</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: TEAL }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >book@spotlesshomeco.com</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >Reply within 2 hours</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: TEAL }} strokeWidth={1.5} />
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >Serving Metro Denver, CO</div>
                    <div
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >Denver · Aurora · Lakewood · Arvada<br />Englewood · Littleton</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4" style={{ color: TEAL }} strokeWidth={1.5} />
                <div
                  className="text-[10px] uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >Hours</div>
              </div>
              <div className="space-y-2">
                {[['Mon – Fri', '8am – 6pm'], ['Saturday', '8am – 4pm'], ['Sunday', 'Closed']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between">
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >{d}</span>
                    <span
                      className="text-sm"
                      style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white p-6 border-l-4" style={{ borderLeftColor: TEAL }}>
              <div
                className="text-[10px] uppercase tracking-widest mb-2"
                style={{ color: TEAL, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >100% Satisfaction Guarantee</div>
              <p
                className="text-xs text-gray-500 leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                Not happy? We come back within 24 hours and make it right — at no cost to you. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
