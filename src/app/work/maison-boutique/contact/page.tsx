'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, ShoppingBag } from 'lucide-react';

const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';

export default function MaisonContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', purpose: '', size: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: ESPRESSO }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Contact & Booking</div>
        <h1 className="text-4xl font-serif italic mb-3" style={{ color: SAND }}>Book a Styling Appointment</h1>
        <p className="max-w-lg mx-auto text-sm" style={{ color: 'rgba(242,234,217,0.45)' }}>Complimentary 45-minute sessions. Walk in with a challenge, walk out with a wardrobe.</p>
      </section>

      <section style={{ backgroundColor: SAND }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <ShoppingBag className="w-12 h-12 mb-5" style={{ color: SAGE }} strokeWidth={1.5} />
              <h2 className="text-2xl font-serif italic mb-3" style={{ color: ESPRESSO }}>Thank you! We will be in touch.</h2>
              <p className="text-gray-500 text-sm mb-6">Simone will reach out within 24 hours to confirm your styling appointment or answer your question.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: SAGE, borderColor: SAGE }}>Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2 font-serif italic" style={{ color: ESPRESSO }}>Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="(615) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="you@email.com" /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">How can we help?*</label>
                <select required value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                  <option value="">Select...</option>
                  {['Book a Styling Appointment', 'Shop a Specific Event / Occasion', 'Wardrobe Audit', 'Gift Styling', 'Order / Return Question', 'General Inquiry'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Typical size (optional)</label>
                <select value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                  <option value="">Prefer not to say</option>
                  {['XS (0–2)', 'S (4–6)', 'M (8–10)', 'L (12–14)', 'XL (16–18)', 'XXL (20+)', 'Varies — I will explain'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Tell us more</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none" placeholder="Occasion, style goals, budget range, or anything else..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]" style={{ backgroundColor: ESPRESSO }}>Send Message</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Visit Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: SAGE }} /><div><div className="font-bold text-sm">(615) 555-0284</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: SAGE }} /><div><div className="font-bold text-sm">hello@maisonboutique.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} /><div><div className="font-bold text-sm">512 12th Ave South<br />Nashville, TN 37203</div><div className="text-xs text-gray-400">The 12 South neighborhood</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Store Hours</div>
              <div className="space-y-2 text-sm">
                {[['Mon – Sat', '10am – 7pm'], ['Sunday', '11am – 5pm']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-gray-600">{d}</span><span className="font-bold">{h}</span></div>
                ))}
              </div>
              <div className="mt-3 text-xs font-bold" style={{ color: SAGE }}>Free shipping on orders $75+</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
