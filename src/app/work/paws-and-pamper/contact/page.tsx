'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const TEAL = '#0D9488';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

export default function PawsAndPamperContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', dog: '', breed: '', service: '', notes: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 text-teal-400">Book Appointment</div>
        <h1 className="text-4xl font-bold text-white mb-3">Schedule Your Dog's Visit</h1>
        <p className="text-white/45 max-w-lg mx-auto">Fear-free certified. Anxious dogs welcome. New clients available this week.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: TEAL }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: DARK }}>Woof! Request received.</h2>
              <p className="text-gray-500 text-sm mb-6">We will reach out within 24 hours to confirm your appointment time. We can not wait to meet your pup!</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: TEAL, borderColor: TEAL }}>Book Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2" style={{ color: DARK }}>Appointment Request</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Your Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone*</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="(206) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="you@email.com" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Dog Name*</label><input required value={form.dog} onChange={e => setForm({ ...form, dog: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="e.g. Biscuit" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Breed</label><input value={form.breed} onChange={e => setForm({ ...form, breed: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300" placeholder="e.g. Golden Retriever" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Service Needed*</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 bg-white">
                  <option value="">Select...</option>
                  {['Bath & Brush', 'Full Groom', 'Nail Trim', 'Express Service', 'De-Shed Treatment', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Special Notes (anxiety, health issues, etc.)</label><textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-300 resize-none" placeholder="Let us know about any anxiety, health conditions, or special needs..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px] rounded-full" style={{ backgroundColor: TEAL }}>Request Appointment</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Find Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: TEAL }} /><div><div className="font-bold text-sm">(206) 555-0174</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: TEAL }} /><div><div className="font-bold text-sm">hello@pawsandpamper.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: TEAL }} /><div><div className="font-bold text-sm">714 Queen Anne Ave N<br />Seattle, WA 98109</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Hours</div>
              <div className="space-y-2 text-sm">
                {[['Tue – Fri', '9am – 6pm'], ['Saturday', '8am – 5pm'], ['Sun – Mon', 'Closed']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-gray-600">{d}</span><span className="font-bold">{h}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
