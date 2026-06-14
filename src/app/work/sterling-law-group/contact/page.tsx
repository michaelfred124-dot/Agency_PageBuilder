'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';

export default function SterlingContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', matter: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Contact</div>
        <h1 className="text-4xl font-serif text-white mb-3">Schedule a Free Consultation</h1>
        <p className="text-white/50 max-w-lg mx-auto">No fees unless we win on personal injury cases. Direct attorney access from day one.</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: GOLD }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-serif mb-3" style={{ color: NAVY }}>Thank you. We will be in touch shortly.</h2>
              <p className="text-gray-500 text-sm mb-6">A member of our team will reach out within one business day to schedule your free consultation.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: GOLD, borderColor: GOLD }}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2" style={{ color: NAVY }}>Tell Us About Your Matter</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Full Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="Jane Smith" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="jane@email.com" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="(719) 555-0100" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Legal Matter*</label>
                <select required value={form.matter} onChange={e => setForm({ ...form, matter: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 bg-white">
                  <option value="">Select a practice area...</option>
                  {['Personal Injury', 'Family Law', 'Criminal Defense', 'Business Law', 'Estate Planning', 'Real Estate Law', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Brief Description*</label><textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 resize-none" placeholder="Please briefly describe your legal situation..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]" style={{ backgroundColor: GOLD }}>Request Free Consultation</button>
              <p className="text-[10px] text-gray-400">All consultations are confidential. Attorney-client privilege applies from our first conversation.</p>
            </form>
          )}

          <div className="space-y-6">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Contact Information</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} /><div><div className="font-bold text-sm" style={{ color: NAVY }}>(719) 555-0180</div><div className="text-xs text-gray-400">Main office line</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} /><div><div className="font-bold text-sm" style={{ color: NAVY }}>info@sterlinglaw.com</div><div className="text-xs text-gray-400">24-hour email response</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} /><div><div className="font-bold text-sm" style={{ color: NAVY }}>218 North Cascade Ave<br />Colorado Springs, CO 80903</div><div className="text-xs text-gray-400">Free parking available</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Office Hours</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Mon – Fri</span><span className="font-bold" style={{ color: NAVY }}>8am – 6pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Saturday</span><span className="font-bold" style={{ color: NAVY }}>9am – 2pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Emergency</span><span className="font-bold" style={{ color: GOLD }}>24/7</span></div>
              </div>
            </div>
            <div className="p-5 text-center border-l-4" style={{ backgroundColor: NAVY, borderColor: GOLD }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white/60">No Fees Unless We Win</div>
              <p className="text-white/70 text-xs leading-relaxed">On personal injury cases, we only get paid when you do. Zero financial risk to get started.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
