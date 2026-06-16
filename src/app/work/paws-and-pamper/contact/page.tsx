'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Check } from 'lucide-react';

const TEAL = '#0D9488';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WARM = '#FEF3C7';
const WHITE = '#FFFFFF';

export default function PawsAndPamperContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dog: '',
    breed: '',
    size: '',
    service: '',
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
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${FOREST} 0%, ${TEAL} 100%)` }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Heart className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Book an Appointment
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Schedule Your<br />Dog's Visit
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Fear-free certified. Anxious dogs welcome. New clients available this week.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-start">

          {/* Form */}
          {sent ? (
            <div
              className="flex flex-col items-center justify-center p-14 text-center rounded-2xl"
              style={{ backgroundColor: WHITE }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: TEAL }}
              >
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2
                className="text-3xl mb-3"
                style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                Woof! Request received.
              </h2>
              <p className="text-gray-500 text-sm mb-8 max-w-sm leading-relaxed">
                We will reach out within 24 hours to confirm your appointment time.
                We can't wait to meet your pup!
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
                style={{ color: TEAL, borderColor: TEAL, fontFamily: 'var(--font-display)' }}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ backgroundColor: WHITE }}
              className="p-8 space-y-5 rounded-2xl"
            >
              <div className="mb-2">
                <h2
                  className="text-xl"
                  style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 800 }}
                >
                  Appointment Request
                </h2>
                <p className="text-gray-400 text-xs mt-1">
                  Tell us about you and your pup — we'll be in touch within 24 hours.
                </p>
              </div>

              {/* Your Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Your Name*
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Phone*
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400"
                    placeholder="(206) 555-0000"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400"
                  placeholder="you@email.com"
                />
              </div>

              {/* Dog's Name + Breed */}
              <div
                className="p-5 rounded-xl space-y-4"
                style={{ backgroundColor: SKY }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: TEAL, fontFamily: 'var(--font-display)' }}
                >
                  About Your Pup
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Dog's Name*
                    </label>
                    <input
                      required
                      value={form.dog}
                      onChange={(e) => setForm({ ...form, dog: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400 bg-white"
                      placeholder="e.g. Biscuit"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Breed
                    </label>
                    <input
                      value={form.breed}
                      onChange={(e) => setForm({ ...form, breed: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400 bg-white"
                      placeholder="e.g. Golden Retriever"
                    />
                  </div>
                </div>

                {/* Size */}
                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Dog's Size*
                  </label>
                  <select
                    required
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400 bg-white"
                  >
                    <option value="">Select size...</option>
                    {[
                      'XS — under 10 lbs',
                      'Small — 10–20 lbs',
                      'Medium — 20–50 lbs',
                      'Large — 50–80 lbs',
                      'XL — 80+ lbs',
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Service Needed*
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400 bg-white"
                >
                  <option value="">Select a service...</option>
                  {[
                    'Bath & Brush',
                    'Full Groom',
                    'Nail Trim',
                    'Nail Grind (Dremel)',
                    'Express Service',
                    'De-Shed Treatment',
                    'Spa Add-Ons',
                    'Not Sure — Help Me Choose',
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Special Notes (anxiety, health issues, preferences)
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-teal-400 resize-none"
                  placeholder="Let us know about any anxiety, health conditions, or special needs — we want to be fully prepared for your pup!"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px] rounded-full"
                style={{ backgroundColor: TEAL, fontFamily: 'var(--font-display)' }}
              >
                Request Appointment
              </button>
            </form>
          )}

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Teal contact panel */}
            <div style={{ backgroundColor: TEAL }} className="p-7 rounded-2xl">
              <div
                className="text-[10px] font-bold uppercase tracking-widest mb-6 text-white/60"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Find Us
              </div>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5 text-white/70" />
                  <div>
                    <div
                      className="text-white font-bold"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      (206) 555-0174
                    </div>
                    <div className="text-white/50 text-[11px] mt-0.5">Call or text us</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5 text-white/70" />
                  <div>
                    <div
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      hello@pawsandpamper.com
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/70" />
                  <div>
                    <div
                      className="text-white font-bold text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
                    >
                      714 Queen Anne Ave N<br />Seattle, WA 98109
                    </div>
                    <div className="text-white/50 text-[11px] mt-0.5">Queen Anne neighborhood</div>
                  </div>
                </div>
              </div>
              <div
                className="mt-6 pt-5 border-t border-white/20 text-white/70 text-xs leading-relaxed"
              >
                We love all breeds! Reactive, anxious, and elderly dogs are always welcome here.
              </div>
            </div>

            {/* Hours */}
            <div style={{ backgroundColor: WHITE }} className="p-7 rounded-2xl">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4" style={{ color: TEAL }} />
                <div
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Hours
                </div>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  ['Tue – Fri', '9am – 6pm'],
                  ['Saturday', '8am – 5pm'],
                  ['Sun – Mon', 'Closed'],
                ].map(([day, hours], i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-500">{day}</span>
                    <span
                      className="font-bold"
                      style={{
                        color: hours === 'Closed' ? '#9CA3AF' : FOREST,
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warm note */}
            <div
              className="p-5 rounded-2xl text-center"
              style={{ backgroundColor: WARM }}
            >
              <Heart className="w-5 h-5 mx-auto mb-2" style={{ color: TEAL }} strokeWidth={1.5} />
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong style={{ color: FOREST }}>First time?</strong> Mention it when you book and we'll
                schedule a little extra time so your dog can get comfortable with us before we start.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
