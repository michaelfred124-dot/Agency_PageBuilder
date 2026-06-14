'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const GREEN = '#1B4332';
const GOLD = '#D4A853';
const LIGHT = '#F5F5F0';

export default function ValleyProHomeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', urgency: '', city: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: GREEN }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Contact</div>
        <h1 className="text-4xl font-bold text-white mb-3">Request a Free Estimate</h1>
        <p className="text-white/50 max-w-lg mx-auto">Same-week scheduling. 24/7 emergency line. Licensed, bonded, insured.</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white p-12 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: GREEN }}>
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: GREEN }}>Request received!</h2>
              <p className="text-gray-500 text-sm mb-6">We will call to schedule your free estimate within one business day. For emergencies, please call directly: (555) 382-9100.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: GREEN, borderColor: GREEN }}>Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
              <h2 className="font-bold text-base mb-2" style={{ color: GREEN }}>Service Request</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phone*</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="(602) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="you@email.com" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Service Needed*</label>
                  <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                    <option value="">Select...</option>
                    {['Plumbing', 'Electrical', 'HVAC / AC', 'Roofing', 'General Repairs', 'Multiple Services', 'Home Inspection'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Urgency</label>
                  <select value={form.urgency} onChange={e => setForm({ ...form, urgency: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 bg-white">
                    <option value="">Select...</option>
                    {['Emergency — today', 'Urgent — this week', 'Scheduled — flexible', 'Getting estimates'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Your City</label><input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300" placeholder="Phoenix, Scottsdale, Mesa, etc." /></div>
              <div><label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Describe the Issue</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-300 resize-none" placeholder="What is happening? When did it start? Any other details..." /></div>
              <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-widest text-[11px]" style={{ backgroundColor: GREEN }}>Request Free Estimate</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Contact</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} /><div><div className="font-bold text-sm">(555) 382-9100</div><div className="text-xs text-gray-400">24/7 emergency line</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: GOLD }} /><div><div className="font-bold text-sm">service@valleyprohome.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} /><div><div className="font-bold text-sm">Phoenix & East Valley, AZ</div><div className="text-xs text-gray-400">Scottsdale · Tempe · Mesa · Chandler</div></div></div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Business Hours</div>
              <div className="space-y-2 text-sm">
                {[['Mon – Fri', '7am – 7pm'], ['Saturday', '8am – 5pm'], ['Emergency', '24/7']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-gray-600">{d}</span><span className="font-bold" style={{ color: i === 2 ? GOLD : 'inherit' }}>{h}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
