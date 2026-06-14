'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, Sun } from 'lucide-react';

const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';
const WARM = '#FDF8F3';

export default function SolsticeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', interest: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <Sun className="w-8 h-8 mx-auto mb-4" style={{ color: ROSE }} strokeWidth={1.5} />
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Reserve Your Mat</div>
        <h1 className="text-4xl font-serif italic text-white mb-3">Start Your Practice</h1>
        <p className="text-white/40 max-w-lg mx-auto">First month unlimited — just $49 for new students. No experience needed.</p>
      </section>

      <section style={{ backgroundColor: WARM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <Sun className="w-12 h-12 mb-5" style={{ color: SAGE }} strokeWidth={1.5} />
              <h2 className="text-2xl font-serif italic mb-3" style={{ color: DARK }}>Welcome to Solstice!</h2>
              <p className="text-gray-500 text-sm mb-6">We will be in touch within 24 hours to get you set up with your intro month and first class recommendation.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: SAGE, borderColor: SAGE }}>Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2 font-serif italic" style={{ color: DARK }}>Get Started</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-300" placeholder="(720) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-300" placeholder="you@email.com" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Yoga Experience</label>
                <select value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-300 bg-white">
                  <option value="">Select...</option>
                  {['Complete Beginner', 'Some experience (less than 1 year)', 'Intermediate (1–3 years)', 'Experienced (3+ years)'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Interested In</label>
                <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-300 bg-white">
                  <option value="">Select...</option>
                  {['Intro Month ($49)', 'Drop-In Class ($22)', 'Monthly Membership', 'Beginners Series', 'Private Lesson', 'Corporate / Group', 'General Info'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Anything else?</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-300 resize-none" placeholder="Injuries, schedule preferences, or questions for a teacher..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px] rounded-full" style={{ backgroundColor: SAGE }}>Claim Intro Month</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Visit Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: SAGE }} /><div><div className="font-bold text-sm">(720) 555-0142</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: SAGE }} /><div><div className="font-bold text-sm">hello@solsticeyoga.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} /><div><div className="font-bold text-sm">814 Solstice Lane<br />Denver, CO 80203</div><div className="text-xs text-gray-400">Street parking available</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Studio Hours</div>
              <div className="space-y-2 text-sm">
                {[['Mon – Fri', '6am – 8pm'], ['Saturday', '7am – 6pm'], ['Sunday', '8am – 5pm']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-gray-600">{d}</span><span className="font-bold">{h}</span></div>
                ))}
              </div>
            </div>
            <div className="p-5 text-center" style={{ backgroundColor: WARM }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>New Student Offer</div>
              <p className="text-gray-600 text-xs">First month unlimited classes for just $49. Try any class, any instructor, any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
