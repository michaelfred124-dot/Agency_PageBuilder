'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, Scissors } from 'lucide-react';

const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

export default function AtelierContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', stylist: '', notes: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Book Appointment</div>
        <h1 className="text-4xl font-serif italic text-white mb-3">Schedule Your Visit</h1>
        <p className="text-white/45 max-w-lg mx-auto">New clients receive a complimentary deep conditioning treatment with any color service.</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <Scissors className="w-10 h-10 mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
              <h2 className="text-2xl font-serif italic mb-3" style={{ color: CHARCOAL }}>We have received your request!</h2>
              <p className="text-gray-500 text-sm mb-6">Our team will confirm your appointment within 24 hours. We look forward to seeing you.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: ROSE, borderColor: ROSE }}>Book Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2" style={{ color: CHARCOAL }}>Appointment Request</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="you@email.com" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="(512) 555-0000" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Service*</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                  <option value="">Select a service...</option>
                  {["Women's Cut & Style", 'Balayage', 'Full Color', 'Highlights', 'Keratin Treatment', 'Bridal Hair', 'Blowout', 'Color Correction', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Preferred Stylist</label>
                <select value={form.stylist} onChange={e => setForm({ ...form, stylist: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                  <option value="">No preference</option>
                  {['Maria Solis', 'Priya Sharma', 'Jamie Cole'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Notes (hair history, goals, etc.)</label><textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none" placeholder="Share anything about your hair history or what you are hoping to achieve..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]" style={{ backgroundColor: CHARCOAL }}>Request Appointment</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Find Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: ROSE }} /><div><div className="font-bold text-sm">(512) 555-0093</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: ROSE }} /><div><div className="font-bold text-sm">hello@atelierhair.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ROSE }} /><div><div className="font-bold text-sm">2104 South Lamar Blvd<br />Austin, TX 78704</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Hours</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Tue – Fri</span><span className="font-bold">9am – 7pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Saturday</span><span className="font-bold">9am – 6pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Sun – Mon</span><span className="text-gray-400">Closed</span></div>
              </div>
            </div>
            <div className="p-5 text-center" style={{ backgroundColor: BLUSH }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>New Client Offer</div>
              <p className="text-gray-600 text-xs leading-relaxed">Complimentary deep conditioning treatment with any color service on your first visit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
