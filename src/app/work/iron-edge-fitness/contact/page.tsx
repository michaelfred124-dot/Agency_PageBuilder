'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

export default function IronEdgeContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section style={{ backgroundColor: BLACK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: ORANGE }}>Contact</div>
        <h1 className="text-4xl font-black text-white uppercase mb-3">Start Your 7-Day Free Trial</h1>
        <p className="text-white/35 max-w-lg mx-auto text-sm">No credit card. No commitment. Just 7 days to experience what Iron Edge is all about.</p>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center p-12 text-center border border-white/8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: ORANGE }}>
                <Check className="w-7 h-7 text-black" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase mb-3">You are in.</h2>
              <p className="text-white/40 text-sm mb-6">A coach will reach out within 24 hours to set up your first visit and intro fitness assessment.</p>
              <button onClick={() => setSent(false)} className="text-[10px] font-black uppercase tracking-widest border-b pb-0.5" style={{ color: ORANGE, borderColor: ORANGE }}>Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-4 border border-white/8">
              <h2 className="font-black text-base text-white uppercase mb-2">Claim Your Free Trial</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">Name*</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" placeholder="Your name" /></div>
                <div><label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">Phone*</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" placeholder="(503) 555-0000" /></div>
              </div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">Email*</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" placeholder="you@email.com" /></div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">Primary Goal</label>
                <select value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option value="">Select your goal...</option>
                  {['Lose Weight', 'Build Muscle', 'Improve Fitness', 'Train for Competition', 'General Health', 'Stress Relief'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">Anything else we should know?</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 resize-none" placeholder="Injuries, experience level, preferred schedule..." /></div>
              <button type="submit" className="w-full py-4 text-white font-black uppercase tracking-widest text-[11px]" style={{ backgroundColor: ORANGE, color: '#000' }}>Claim Free 7-Day Trial</button>
            </form>
          )}

          <div className="space-y-5">
            <div className="p-6 border border-white/8">
              <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-white/25">Find Us</div>
              <div className="space-y-4">
                <div className="flex gap-3"><Phone className="w-4 h-4 shrink-0" style={{ color: ORANGE }} /><div><div className="font-black text-white text-sm">(503) 555-0318</div></div></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 shrink-0" style={{ color: ORANGE }} /><div><div className="font-black text-white text-sm">join@ironedgefitness.com</div></div></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} /><div><div className="font-black text-white text-sm">418 NW Davis St<br />Portland, OR 97209</div></div></div>
              </div>
            </div>
            <div className="p-6 border border-white/8">
              <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-white/25">Hours</div>
              <div className="space-y-2 text-sm">
                {[['Mon – Fri', '5am – 11pm'], ['Saturday', '6am – 9pm'], ['Sunday', '7am – 8pm']].map(([d, h], i) => (
                  <div key={i} className="flex justify-between"><span className="text-white/40">{d}</span><span className="font-black text-white">{h}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
