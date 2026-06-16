'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, Zap } from 'lucide-react';

const BLACK = '#0A0A0A';
const ORANGE = '#F97316';
const GUNMETAL = '#1C1C1E';
const WHITE = '#FFFFFF';

export default function IronEdgeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-screen grid md:grid-cols-[380px_1fr]">
      {/* Left Panel — Dark gym sidebar */}
      <div
        className="relative flex flex-col justify-between p-10 md:p-12 min-h-[50vh] md:min-h-screen"
        style={{ backgroundColor: BLACK }}
      >
        {/* Grid texture background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-14">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ backgroundColor: ORANGE }}
            >
              <Zap className="w-4 h-4 text-black" />
            </div>
            <div>
              <div
                className="text-white font-black uppercase tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.01em' }}
              >
                Iron Edge
              </div>
              <div
                className="text-[8px] font-black uppercase tracking-[0.4em]"
                style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
              >
                Fitness
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: ORANGE }} />
          <h1
            className="text-4xl md:text-5xl text-white uppercase leading-none mb-5"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Start Your 7-Day Free Trial<span style={{ color: ORANGE }}>.</span>
          </h1>
          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: `${WHITE}45`, fontFamily: 'var(--font-body)' }}
          >
            No credit card. No commitment. Just 7 days to experience what Iron Edge is all about. A coach will reach out within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-10">
            {[
              { icon: Phone, label: '(503) 555-0318', sub: '' },
              { icon: Mail, label: 'join@ironedgefitness.com', sub: '' },
              { icon: MapPin, label: '418 NW Davis St', sub: 'Portland, OR 97209' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ border: `1px solid ${ORANGE}40` }}
                >
                  <Icon className="w-4 h-4" style={{ color: ORANGE }} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    className="text-white text-sm font-black"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >
                    {label}
                  </div>
                  {sub && (
                    <div
                      className="text-xs"
                      style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
                    >
                      {sub}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div
            className="text-[9px] font-black uppercase tracking-widest mb-3"
            style={{ color: `${WHITE}30`, fontFamily: 'var(--font-body)' }}
          >
            Hours
          </div>
          <div className="space-y-2">
            {[
              ['Mon – Fri', '5am – 11pm'],
              ['Saturday', '6am – 9pm'],
              ['Sunday', '7am – 8pm'],
            ].map(([d, h], i) => (
              <div key={i} className="flex justify-between text-xs">
                <span style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}>{d}</span>
                <span
                  className="font-black text-white"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trial callout footer */}
        <div className="relative z-10">
          <div className="border-t pt-8" style={{ borderColor: `${ORANGE}25` }}>
            <div
              className="text-[9px] font-black uppercase tracking-widest mb-2"
              style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
            >
              Free 7-Day Trial
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
            >
              Full access. All classes. No credit card. Cancel anytime. We just want to show you what we can do.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel — GUNMETAL form */}
      <div
        className="flex items-center justify-center p-8 md:p-14"
        style={{ backgroundColor: GUNMETAL }}
      >
        <div className="w-full max-w-lg">
          {sent ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: ORANGE }}
              >
                <Check className="w-8 h-8 text-black" />
              </div>
              <h2
                className="text-4xl text-white uppercase mb-4 leading-none"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
              >
                You're In<span style={{ color: ORANGE }}>.</span>
              </h2>
              <div className="w-8 h-0.5 mx-auto mb-5" style={{ backgroundColor: ORANGE }} />
              <p
                className="text-sm mb-8 leading-relaxed"
                style={{ color: `${WHITE}45`, fontFamily: 'var(--font-body)' }}
              >
                A coach will reach out within 24 hours to set up your first visit and intro fitness assessment. Get ready to work.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[10px] font-black uppercase tracking-widest border-b pb-0.5"
                style={{ color: ORANGE, borderColor: ORANGE, fontFamily: 'var(--font-body)' }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-0.5" style={{ backgroundColor: ORANGE }} />
                  <div
                    className="text-[10px] font-black uppercase tracking-[0.5em]"
                    style={{ color: ORANGE, fontFamily: 'var(--font-body)' }}
                  >
                    Claim Your Trial
                  </div>
                </div>
                <h2
                  className="text-4xl md:text-5xl text-white uppercase leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
                >
                  Let's Get to Work<span style={{ color: ORANGE }}>.</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[10px] font-black uppercase tracking-widest block mb-1.5"
                      style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
                    >
                      Name*
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      style={{
                        backgroundColor: BLACK,
                        border: `1px solid ${WHITE}10`,
                        fontFamily: 'var(--font-body)',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                      onBlur={e => (e.currentTarget.style.borderColor = `${WHITE}10`)}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-black uppercase tracking-widest block mb-1.5"
                      style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
                    >
                      Phone*
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      style={{
                        backgroundColor: BLACK,
                        border: `1px solid ${WHITE}10`,
                        fontFamily: 'var(--font-body)',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                      onBlur={e => (e.currentTarget.style.borderColor = `${WHITE}10`)}
                      placeholder="(503) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest block mb-1.5"
                    style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
                  >
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    style={{
                      backgroundColor: BLACK,
                      border: `1px solid ${WHITE}10`,
                      fontFamily: 'var(--font-body)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = `${WHITE}10`)}
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest block mb-1.5"
                    style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
                  >
                    Primary Goal
                  </label>
                  <select
                    value={form.goal}
                    onChange={e => setForm({ ...form, goal: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    style={{
                      backgroundColor: BLACK,
                      border: `1px solid ${WHITE}10`,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <option value="">Select your goal...</option>
                    {[
                      'Lose Weight',
                      'Build Muscle',
                      'Improve Fitness',
                      'Train for Competition',
                      'General Health',
                      'Stress Relief',
                    ].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-[10px] font-black uppercase tracking-widest block mb-1.5"
                    style={{ color: `${WHITE}35`, fontFamily: 'var(--font-body)' }}
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: BLACK,
                      border: `1px solid ${WHITE}10`,
                      fontFamily: 'var(--font-body)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = `${WHITE}10`)}
                    placeholder="Injuries, experience level, preferred schedule..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-black uppercase tracking-widest text-[11px] transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ORANGE, color: BLACK, fontFamily: 'var(--font-body)' }}
                >
                  Claim Free 7-Day Trial
                </button>

                <p
                  className="text-center text-[10px]"
                  style={{ color: `${WHITE}25`, fontFamily: 'var(--font-body)' }}
                >
                  No credit card required. Full facility access. Cancel anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
