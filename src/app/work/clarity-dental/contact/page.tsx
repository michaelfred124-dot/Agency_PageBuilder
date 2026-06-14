'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const NAVY = '#0C2340';
const BLUE = '#0284C7';
const LIGHT = '#F0F8FF';

export default function ClarityDentalContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', insurance: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Book Appointment</div>
        <h1 className="text-4xl font-serif text-white mb-3">Schedule Your Visit</h1>
        <p className="text-white/50 max-w-lg mx-auto">New patients welcome. Same-week appointments available. Most insurances accepted.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: BLUE }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-serif mb-3" style={{ color: NAVY }}>Appointment Requested!</h2>
              <p className="text-gray-500 text-sm mb-6">Our front desk will call to confirm your appointment within one business day. We look forward to meeting you.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: BLUE, borderColor: BLUE }}>Request Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2" style={{ color: NAVY }}>Request an Appointment</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Full Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone*</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-300" placeholder="(720) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-300" placeholder="you@email.com" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Service Needed*</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-300 bg-white">
                  <option value="">Select...</option>
                  {['New Patient Exam & Cleaning', 'Teeth Whitening', 'Veneers Consultation', 'Dental Implant Consultation', 'Invisalign Consultation', 'Emergency / Tooth Pain', 'Crown or Filling', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Insurance (if applicable)</label><input value={form.insurance} onChange={e => setForm({ ...form, insurance: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-300" placeholder="e.g. Delta Dental PPO, Cigna, or None" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Additional Notes</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-300 resize-none" placeholder="Dental anxiety, special needs, or preferred appointment times..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px] rounded-full" style={{ backgroundColor: BLUE }}>Request Appointment</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Contact Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: BLUE }} /><div><div className="font-bold text-sm">(720) 555-0139</div><div className="text-xs text-gray-400">Mon–Sat</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: BLUE }} /><div><div className="font-bold text-sm">smile@claritydental.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BLUE }} /><div><div className="font-bold text-sm">525 Medical Center Blvd<br />Denver, CO 80220</div><div className="text-xs text-gray-400">Free parking</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Office Hours</div>
              <div className="space-y-2 text-sm">
                {[['Mon – Thu', '7am – 7pm'], ['Friday', '7am – 5pm'], ['Saturday', '8am – 3pm'], ['Sunday', 'Closed']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-gray-600">{d}</span><span className="font-bold">{h}</span></div>
                ))}
              </div>
            </div>
            <div className="p-5 text-center border-l-4" style={{ backgroundColor: LIGHT, borderColor: BLUE }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: BLUE }}>Same-Day Emergency</div>
              <p className="text-gray-500 text-xs">Call us first for tooth pain, broken teeth, or lost crowns. We always make room.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
