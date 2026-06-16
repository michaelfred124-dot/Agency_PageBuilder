'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';
const WHITE = '#FFFFFF';

type ClientType = 'buyer' | 'seller';

export default function MeridianContact() {
  const [sent, setSent] = useState(false);
  const [clientType, setClientType] = useState<ClientType>('buyer');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: SLATE }} className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: FOREST }} />
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5"
            style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
          >
            Contact Us
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Let Us Guide<br />Your Next Move
          </h1>
          <p className="text-white/55 max-w-xl leading-relaxed">
            Free consultation. No pressure. Portland real estate expertise since 2011.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-start">

          {/* Form */}
          {sent ? (
            <div
              className="flex flex-col items-center justify-center p-14 text-center"
              style={{ backgroundColor: WHITE }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center mb-6"
                style={{ backgroundColor: FOREST }}
              >
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2
                className="text-3xl mb-3"
                style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Message received!
              </h2>
              <p className="text-gray-500 text-sm mb-8 max-w-sm leading-relaxed">
                One of our senior agents will reach out within one business day to schedule your
                free consultation.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
                style={{ color: FOREST, borderColor: FOREST, fontFamily: 'var(--font-display)' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ backgroundColor: WHITE }} className="p-8 space-y-5">
              <h2
                className="text-xl mb-1"
                style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Schedule a Free Consultation
              </h2>
              <p className="text-gray-400 text-xs mb-2">We respond within one business day.</p>

              {/* Buyer / Seller Toggle */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-0 border border-gray-200">
                  {(['buyer', 'seller'] as ClientType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setClientType(type)}
                      className="py-3 text-[11px] font-bold uppercase tracking-widest transition-colors"
                      style={{
                        backgroundColor: clientType === type ? FOREST : WHITE,
                        color: clientType === type ? WHITE : SLATE,
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {type === 'buyer' ? 'Buyer' : 'Seller'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Name*
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                    placeholder="(503) 555-0000"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Email*
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                  placeholder="you@email.com"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  I am looking to...*
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 bg-white"
                >
                  <option value="">Select a service...</option>
                  {[
                    'Buy a Home',
                    'Sell My Home',
                    'Both — Buy & Sell',
                    'Property Management',
                    'Investment Property',
                    'Relocation to Portland',
                    'Just Exploring',
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Budget / Price Range
                </label>
                <input
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
                  placeholder="e.g. $450k – $600k"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Tell us more
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 resize-none"
                  placeholder="Neighborhood preferences, timeline, or anything else you want us to know..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]"
                style={{ backgroundColor: FOREST, fontFamily: 'var(--font-display)' }}
              >
                Request Free Consultation
              </button>
            </form>
          )}

          {/* Sidebar Info */}
          <div className="space-y-4">
            <div style={{ backgroundColor: SLATE }} className="p-7">
              <div
                className="text-[10px] font-bold uppercase tracking-widest mb-6"
                style={{ color: FOREST, fontFamily: 'var(--font-display)' }}
              >
                Our Office
              </div>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} />
                  <div>
                    <div
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      (503) 555-0262
                    </div>
                    <div className="text-white/40 text-[11px] mt-0.5">Call or text anytime</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} />
                  <div>
                    <div
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      hello@meridianpdx.com
                    </div>
                    <div className="text-white/40 text-[11px] mt-0.5">We reply same business day</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} />
                  <div>
                    <div
                      className="text-white text-sm font-bold leading-relaxed"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      2141 NW Overton St<br />Portland, OR 97210
                    </div>
                    <div className="text-white/40 text-[11px] mt-0.5">NW Portland</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: WHITE }} className="p-7">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4" style={{ color: FOREST }} />
                <div
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Office Hours
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Mon – Fri</span>
                  <span
                    className="font-bold"
                    style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    9am – 6pm
                  </span>
                </div>
                <div
                  className="border-t border-gray-100"
                />
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Sat – Sun</span>
                  <span
                    className="font-bold"
                    style={{ color: SLATE, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                  >
                    By appointment
                  </span>
                </div>
              </div>
              <div
                className="mt-5 pt-5 border-t border-gray-100 text-xs text-gray-400 leading-relaxed"
              >
                Agents are available evenings and weekends by phone for active clients.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
