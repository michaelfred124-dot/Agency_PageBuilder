'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const TEAL = '#0694A2';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

export default function SpotlessContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', beds: '', frequency: '', city: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-teal-400">Get a Quote</div>
        <h1 className="text-4xl font-black text-white mb-3">Request Your Free Quote</h1>
        <p className="text-white/40 max-w-lg mx-auto text-sm">Response within 2 hours. First-time clients save 15%. 100% satisfaction guaranteed.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: TEAL }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-black mb-3" style={{ color: DARK }}>Quote request received!</h2>
              <p className="text-gray-500 text-sm mb-6">We will send your personalized quote within 2 hours. First-time clients save 15% off their first clean.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-black uppercase tracking-widest border-b pb-0.5" style={{ color: TEAL, borderColor: TEAL }}>Request Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-black text-base mb-2" style={{ color: DARK }}>Get a Free Quote</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Phone*</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="(720) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="you@email.com" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Service Type*</label>
                  <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 bg-white">
                    <option value="">Select...</option>
                    {['Standard Cleaning', 'Deep Cleaning', 'Move-In/Out', 'Airbnb Turnover', 'One-Time Clean', 'Eco-Friendly Clean'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Bedrooms</label>
                  <select value={form.beds} onChange={e => setForm({ ...form, beds: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 bg-white">
                    <option value="">Select...</option>
                    {['Studio / 1 Bed', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Frequency</label>
                  <select value={form.frequency} onChange={e => setForm({ ...form, frequency: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 bg-white">
                    <option value="">Select...</option>
                    {['Weekly', 'Bi-weekly', 'Monthly', 'One-time'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">City</label><input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="Denver, Aurora, etc." /></div>
              </div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Additional Info</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 resize-none" placeholder="Pets, access instructions, specific areas of concern..." /></div>
              <button type="submit" className="w-full py-4 text-white font-black uppercase tracking-widest text-[11px]" style={{ backgroundColor: TEAL }}>Get My Free Quote</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">Contact</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0 text-teal-400" /><div><div className="font-black text-sm">(720) 555-0391</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0 text-teal-400" /><div><div className="font-black text-sm">book@spotlesshomeco.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-teal-400" /><div><div className="font-black text-sm">Serving Metro Denver, CO</div><div className="text-xs text-gray-400">Denver · Aurora · Lakewood · Arvada · Englewood · Littleton</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">Hours</div>
              <div className="space-y-2 text-sm">
                {[['Mon – Fri', '8am – 6pm'], ['Saturday', '8am – 4pm'], ['Sunday', 'Closed']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-gray-600">{d}</span><span className="font-black">{h}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
