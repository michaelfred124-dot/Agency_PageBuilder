'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Check, ArrowRight } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const BG = '#0A0A0A';
const GOLD = '#C9A84C';
const CARD = '#111111';
const BORDER = 'rgba(201,168,76,0.15)';
const MUTED = 'rgba(255,255,255,0.4)';

export default function SterlingContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', matter: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: BG, color: '#fff' }} className="min-h-[80vh] overflow-x-hidden">
      
      {/* Title Header */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#C9A84C] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Request Consultation</span>
        <h1 className="text-4xl md:text-6xl font-sans font-black text-white mb-6 leading-none">Confidential Strategy Assessment</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm font-light leading-relaxed">
          Connect directly with a senior partner to discuss your commercial litigation, transaction, or estate requirements.
        </p>
      </section>

      {/* Form and info grid */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          
          {/* Form container */}
          <div className="rounded-tl-[40px] rounded-br-[40px] overflow-hidden border border-[#C9A84C]/15 shadow-xl p-8 md:p-12 text-left" style={{ backgroundColor: CARD }}>
            {sent ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-14 h-14 border border-[#C9A84C] text-[#0A0A0A] bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6 text-[#C9A84C]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-sans font-bold text-white uppercase tracking-wide">Submission Logged</h3>
                <p className="text-white/60 text-xs max-w-sm mx-auto font-light leading-relaxed">
                  Your case review request has been recorded. A senior partner will contact you directly within one business day.
                </p>
                <button onClick={() => setSent(false)} className="text-[10px] font-mono font-bold uppercase tracking-widest border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors" style={{ color: GOLD }}>
                  Submit New Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-sans font-black text-xl text-white uppercase tracking-wide pb-4 border-b border-white/5 mb-4">Brief Your Matter</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-2">Full Name*</label>
                    <input 
                      required 
                      value={form.name} 
                      onChange={e => setForm({ ...form, name: e.target.value })} 
                      className="bg-[#0A0A0A] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#C9A84C]/60 rounded-md transition-colors" 
                      placeholder="e.g. Johnathan Vance" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-2">Direct Email*</label>
                    <input 
                      required 
                      type="email" 
                      value={form.email} 
                      onChange={e => setForm({ ...form, email: e.target.value })} 
                      className="bg-[#0A0A0A] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#C9A84C]/60 rounded-md transition-colors" 
                      placeholder="e.g. j.vance@company.com" 
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-2">Contact Number</label>
                  <input 
                    value={form.phone} 
                    onChange={e => setForm({ ...form, phone: e.target.value })} 
                    className="bg-[#0A0A0A] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#C9A84C]/60 rounded-md transition-colors" 
                    placeholder="e.g. (615) 555-0100" 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-2">Legal Matter Classification*</label>
                  <select 
                    required 
                    value={form.matter} 
                    onChange={e => setForm({ ...form, matter: e.target.value })} 
                    className="bg-[#0A0A0A] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#C9A84C]/60 rounded-md transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" className="text-gray-500">Select a practice area...</option>
                    {['Business Litigation', 'Corporate Advisory & Compliance', 'Mergers & Acquisitions', 'Estate Planning & Wealth Trusts', 'Commercial Real Estate Disputes', 'Other'].map(o => (
                      <option key={o} value={o} className="text-gray-900">{o}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-2">Matter Summary*</label>
                  <textarea 
                    required 
                    value={form.message} 
                    onChange={e => setForm({ ...form, message: e.target.value })} 
                    rows={4} 
                    className="bg-[#0A0A0A] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#C9A84C]/60 rounded-md transition-colors resize-none leading-relaxed" 
                    placeholder="Briefly summarize the disputes, assets, or contracts involved..." 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4.5 bg-[#C9A84C] text-[#0A0A0A] hover:bg-white transition-all font-mono font-bold uppercase tracking-widest text-[10px]"
                >
                  Send Strategy Request
                </button>
                <p className="text-[9px] font-mono text-white/30 tracking-wider">
                  All transmissions are secured. Attorney-client privilege applies starting from your brief submission.
                </p>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="space-y-6 text-left">
            <div className="border border-[#C9A84C]/15 p-8 rounded-tr-3xl rounded-bl-3xl shadow-lg" style={{ backgroundColor: CARD }}>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-6 block">Nashville Studio</span>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <div>
                    <div className="font-sans font-bold text-white text-sm">(615) 555-0190</div>
                    <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">Corporate Line</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <div>
                    <div className="font-sans font-bold text-white text-sm">info@sterlinglawco.com</div>
                    <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">Strategy Queries</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <div>
                    <div className="font-sans font-bold text-white text-sm">150 Fourth Ave North, Suite 1500<br />Nashville, TN 37219</div>
                    <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">Office Headquarters</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#C9A84C]/15 p-8 rounded-tl-3xl rounded-br-3xl shadow-lg" style={{ backgroundColor: CARD }}>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-6 block">Availability Hours</span>
              <div className="space-y-3.5 text-xs font-light">
                <div className="flex justify-between"><span className="text-white/50">Mon – Fri</span><span className="font-mono font-bold text-white">8:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/50">Saturday</span><span className="font-mono font-bold text-white">9:00 AM – 1:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/50">Active Cases</span><span className="font-mono font-bold text-[#C9A84C]">24/7 Access</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
