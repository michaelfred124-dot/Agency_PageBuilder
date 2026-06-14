'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const FOREST = '#2D6A4F';
const SLATE = '#2E3A47';
const CREAM = '#F7F5F0';

export default function MeridianContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: SLATE }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: FOREST }}>Contact</div>
        <h1 className="text-4xl font-serif text-white mb-3">Let us Guide Your Next Move</h1>
        <p className="text-white/50 max-w-lg mx-auto">Free consultation. No pressure. Portland real estate expertise since 2011.</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: FOREST }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-serif mb-3" style={{ color: SLATE }}>Message received!</h2>
              <p className="text-gray-500 text-sm mb-6">One of our agents will reach out within one business day to schedule your free consultation.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: FOREST, borderColor: FOREST }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2" style={{ color: SLATE }}>Schedule a Consultation</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="(503) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="you@email.com" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">I am looking to...*</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                  <option value="">Select...</option>
                  {['Buy a Home', 'Sell My Home', 'Both — Buy & Sell', 'Property Management', 'Investment Property', 'Just Exploring'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Budget / Price Range</label><input value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="e.g. $450k – $600k" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Tell us more</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none" placeholder="Neighborhood preferences, timeline, or anything else you want us to know..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]" style={{ backgroundColor: FOREST }}>Request Free Consultation</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Contact Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: FOREST }} /><div><div className="font-bold text-sm">(503) 555-0262</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: FOREST }} /><div><div className="font-bold text-sm">hello@meridianpdx.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: FOREST }} /><div><div className="font-bold text-sm">2141 NW Overton St<br />Portland, OR 97210</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Office Hours</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Mon – Fri</span><span className="font-bold">9am – 6pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Sat – Sun</span><span className="font-bold">By appointment</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
