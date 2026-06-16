'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Sun, Check, ArrowRight } from 'lucide-react';

const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const CREAM = '#FDF8F3';
const MIST = '#E8F0E9';

export default function SolsticeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header — CREAM, calm */}
      <section style={{ backgroundColor: CREAM }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Sun
            className="w-8 h-8 mb-5"
            style={{ color: ROSE }}
            strokeWidth={1.5}
          />
          <div
            className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
            style={{ color: SAGE, fontFamily: 'var(--font-display)' }}
          >
            Reserve Your Mat
          </div>
          <h1
            className="text-5xl md:text-6xl mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: DARK,
            }}
          >
            Start Your Practice
          </h1>
          <div style={{ width: 60, height: 2, backgroundColor: SAGE }} className="mb-6" />
          <p
            className="text-gray-500 max-w-lg text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            First month unlimited — just $49 for new students. No experience needed.
            We will help you find the right class and instructor for where you are right now.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: MIST }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-8">

          {/* LEFT: Studio Info Panel */}
          <div>
            <div
              className="p-8 h-full"
              style={{ backgroundColor: SAGE }}
            >
              <div
                className="text-[9px] font-bold uppercase tracking-[0.4em] mb-6"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-display)' }}
              >
                Visit Us
              </div>

              {/* Phone */}
              <a href="tel:+17205550142" className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-lg text-white leading-tight"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                  >
                    (720) 555-0142
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
                  >
                    Call or Text
                  </div>
                </div>
              </a>

              {/* Email */}
              <div className="flex gap-3 mb-5">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-white/70" />
                <div
                  className="text-sm text-white/80"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  hello@solsticeyoga.com
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3 mb-8">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/70" />
                <div>
                  <div
                    className="text-sm text-white mb-0.5"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                  >
                    814 Solstice Lane
                    <br />
                    Denver, CO 80203
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
                  >
                    Street parking available
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="border-t pt-6 mb-8"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-3.5 h-3.5 text-white/60" />
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.4em]"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-display)' }}
                  >
                    Studio Hours
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ['Mon – Fri', '6am – 8pm'],
                    ['Saturday', '7am – 6pm'],
                    ['Sunday', '8am – 5pm'],
                  ].map(([day, hours], i) => (
                    <div key={i} className="flex justify-between">
                      <span
                        style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}
                      >
                        {day}
                      </span>
                      <span
                        className="text-white font-semibold"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule link */}
              <div
                className="border-t pt-6"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <div
                  className="text-[9px] font-bold uppercase tracking-[0.4em] mb-3"
                  style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-display)' }}
                >
                  Intro Offer
                </div>
                <p
                  className="text-white/70 text-xs leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  First month unlimited classes for just $49 — any class, any instructor, any time.
                  Try everything. Find your practice.
                </p>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white underline underline-offset-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  View Full Schedule <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center p-14 text-center h-full"
                style={{ backgroundColor: CREAM }}
              >
                <Sun
                  className="w-12 h-12 mb-5"
                  style={{ color: SAGE }}
                  strokeWidth={1.5}
                />
                <h2
                  className="text-2xl mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: DARK,
                  }}
                >
                  Welcome to Solstice!
                </h2>
                <p
                  className="text-gray-500 text-sm mb-8 max-w-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  We will be in touch within 24 hours to get you set up with your intro month
                  and a first class recommendation that suits your experience level.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
                  style={{ color: SAGE, borderColor: SAGE, fontFamily: 'var(--font-display)' }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5"
                style={{ backgroundColor: CREAM }}
              >
                <div>
                  <h2
                    className="text-xl mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      color: DARK,
                    }}
                  >
                    Get Started
                  </h2>
                  <p
                    className="text-xs text-gray-400"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Tell us a little about yourself and we will find the perfect class for you.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Name*
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                      placeholder="Your name"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                      placeholder="(720) 555-0000"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                    placeholder="you@email.com"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Yoga Experience
                  </label>
                  <select
                    value={form.experience}
                    onChange={e => setForm({ ...form, experience: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select...</option>
                    {[
                      'Complete Beginner',
                      'Some experience (less than 1 year)',
                      'Intermediate (1–3 years)',
                      'Experienced (3+ years)',
                    ].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Membership Interest
                  </label>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select...</option>
                    {[
                      'Intro Month ($49 — unlimited classes)',
                      'Drop-In Class ($22)',
                      'Monthly Unlimited ($119)',
                      '3x/Week Membership ($149)',
                      'Annual Membership ($899)',
                      'Beginners Series ($89 — 4 weeks)',
                      'Private Lesson',
                      'Corporate / Group Session',
                      'General Info',
                    ].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Anything Else?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-400 resize-none bg-white"
                    placeholder="Injuries, schedule preferences, questions for a teacher, or anything else..."
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]"
                  style={{
                    backgroundColor: SAGE,
                    fontFamily: 'var(--font-body)',
                    borderRadius: 100,
                  }}
                >
                  Claim Intro Month
                </button>

                <p
                  className="text-[10px] text-gray-400 text-center leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  We will reach out within 24 hours. No pressure, no commitment.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
