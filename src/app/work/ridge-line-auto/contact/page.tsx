'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

export default function RidgeLineContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: RED }}>Contact</div>
        <h1 className="text-4xl font-black text-white uppercase mb-3">Book a Service Appointment</h1>
        <p className="text-white/40 max-w-lg mx-auto text-sm">Same-day service on most repairs. ASE certified. Honest pricing.</p>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center border-t-4" style={{ borderTopColor: RED }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: RED }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-black uppercase mb-3" style={{ color: CHARCOAL }}>Got it. We will call you shortly.</h2>
              <p className="text-gray-500 text-sm mb-6">Our service advisor will confirm your appointment via phone or email within 2 business hours.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-black uppercase tracking-widest border-b pb-0.5" style={{ color: RED, borderColor: RED }}>Book Another Appointment</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4 border-t-4" style={{ borderTopColor: RED }}>
              <h2 className="font-black text-base uppercase mb-2" style={{ color: CHARCOAL }}>Service Request</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="John Smith" /></div>
                <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Phone*</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="(303) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="john@email.com" /></div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Vehicle (Year, Make, Model)*</label><input required value={form.vehicle} onChange={e => setForm({ ...form, vehicle: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400" placeholder="2019 Honda Accord" /></div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Service Needed*</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 bg-white">
                  <option value="">Select service type...</option>
                  {['Oil Change', 'Brakes', 'Engine / Transmission', 'Tires / Alignment', 'Electrical', 'AC / Heat', 'General Inspection', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Additional Details</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 resize-none" placeholder="Describe any symptoms, noises, or warning lights..." /></div>
              <button type="submit" className="w-full py-4 text-white font-black uppercase tracking-widest text-[11px]" style={{ backgroundColor: RED }}>Request Appointment</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6 border-t-4" style={{ borderTopColor: CHARCOAL }}>
              <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">Find Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: RED }} /><div><div className="font-black text-sm">(303) 555-0247</div><div className="text-xs text-gray-400">Call or text</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: RED }} /><div><div className="font-black text-sm">service@ridgelineauto.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} /><div><div className="font-black text-sm">4821 W Colfax Ave<br />Denver, CO 80204</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">Hours</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Mon – Fri</span><span className="font-black">7am – 6pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Saturday</span><span className="font-black">8am – 4pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Sunday</span><span className="text-gray-400">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
