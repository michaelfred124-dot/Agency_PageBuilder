'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, Flower2 } from 'lucide-react';

const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';

export default function GoldenThreadContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', venue: '', service: '', guests: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <Flower2 className="w-8 h-8 mx-auto mb-4" style={{ color: SAGE }} strokeWidth={1.5} />
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Begin Your Journey</div>
        <h1 className="text-4xl font-serif italic text-white mb-3">Let us Talk About Your Day</h1>
        <p className="text-white/40 max-w-lg mx-auto">We take only 20 weddings per year. Inquire early — dates fill quickly.</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <Flower2 className="w-12 h-12 mb-5" style={{ color: SAGE }} strokeWidth={1.5} />
              <h2 className="text-2xl font-serif italic mb-3" style={{ color: DARK }}>Your inquiry is on its way.</h2>
              <p className="text-gray-500 text-sm mb-6">Sophia personally reviews every inquiry and will reach out within 48 hours to schedule a discovery call.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: SAGE, borderColor: SAGE }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2 font-serif italic" style={{ color: DARK }}>Wedding Inquiry</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Your Name(s)*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="Sarah & Michael" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Wedding Date</label><input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="you@email.com" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Venue (if known)</label><input value={form.venue} onChange={e => setForm({ ...form, venue: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="The William Aiken House" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Estimated Guests</label><input value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="e.g. 80–120" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Service You Are Interested In*</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                  <option value="">Select...</option>
                  {['Full Wedding Planning', 'Partial Planning', 'Day-Of Coordination', 'Floral Design Only', 'Planning + Florals', 'Other Event'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Tell us about your vision</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none" placeholder="Style, colors, feeling, or anything else you want us to know about your dream day..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]" style={{ backgroundColor: DARK }}>Send Inquiry</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Reach Sophia</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: SAGE }} /><div><div className="font-bold text-sm">(843) 555-0217</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: SAGE }} /><div><div className="font-bold text-sm">hello@goldenthreadevents.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} /><div><div className="font-bold text-sm">Charleston, SC 29401</div><div className="text-xs text-gray-400">Serving Charleston & destinations</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-400">Availability</div>
              <p className="text-sm text-gray-500 leading-relaxed">We accept only <strong>20 weddings per year</strong>. If your date is available, we will confirm in our discovery call. Booking at least 12 months in advance is recommended.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
