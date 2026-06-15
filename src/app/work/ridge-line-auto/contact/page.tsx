'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const BG = '#0D0D0D';
const CARD = '#161616';
const RED = '#E5242A';
const BORDER = 'rgba(229,36,42,0.15)';

export default function RidgeLineContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: BG, color: '#fff' }} className="min-h-[80vh] overflow-x-hidden">
      
      {/* Title Header */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#E5242A] font-mono font-black text-xs tracking-[0.25em] uppercase block mb-4">Request Service</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none uppercase">Book Consultation</h1>
        <p className="text-white/50 max-w-xl mx-auto text-sm font-light leading-relaxed">
          Connect directly with our performance tuners or service advisors to schedule dyno slots or general repairs.
        </p>
      </section>

      {/* Form and info grid */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          
          {/* Form container */}
          <div className="rounded-tl-[40px] rounded-br-[40px] overflow-hidden border border-white/5 shadow-xl p-8 md:p-12 text-left" style={{ backgroundColor: CARD }}>
            {sent ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-14 h-14 border border-[#E5242A] text-[#0D0D0D] bg-[#E5242A]/10 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6 text-[#E5242A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide">Appointment Logged</h3>
                <p className="text-white/60 text-xs max-w-sm mx-auto font-light leading-relaxed">
                  Your appointment request has been recorded. Our service advisor will contact you within two business hours to confirm your slot.
                </p>
                <button onClick={() => setSent(false)} className="text-[10px] font-mono font-black uppercase tracking-widest border-b border-[#E5242A] pb-1 hover:text-[#E5242A] transition-colors" style={{ color: RED }}>
                  Request Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-black text-xl text-white uppercase tracking-wide pb-4 border-b border-white/5 mb-4">Request Details</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-2">Full Name*</label>
                    <input 
                      required 
                      value={form.name} 
                      onChange={e => setForm({ ...form, name: e.target.value })} 
                      className="bg-[#0D0D0D] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#E5242A]/60 rounded-md transition-colors" 
                      placeholder="e.g. Johnathan Smith" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-2">Direct Email</label>
                    <input 
                      type="email"
                      value={form.email} 
                      onChange={e => setForm({ ...form, email: e.target.value })} 
                      className="bg-[#0D0D0D] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#E5242A]/60 rounded-md transition-colors" 
                      placeholder="e.g. j.smith@company.com" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-2">Contact Number*</label>
                    <input 
                      required
                      value={form.phone} 
                      onChange={e => setForm({ ...form, phone: e.target.value })} 
                      className="bg-[#0D0D0D] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#E5242A]/60 rounded-md transition-colors" 
                      placeholder="e.g. (615) 555-0100" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-2">Vehicle (Year, Make, Model)*</label>
                    <input 
                      required 
                      value={form.vehicle} 
                      onChange={e => setForm({ ...form, vehicle: e.target.value })} 
                      className="bg-[#0D0D0D] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#E5242A]/60 rounded-md transition-colors" 
                      placeholder="e.g. 2021 Mustang GT500" 
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-2">Service Selection*</label>
                  <select 
                    required 
                    value={form.service} 
                    onChange={e => setForm({ ...form, service: e.target.value })} 
                    className="bg-[#0D0D0D] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#E5242A]/60 rounded-md transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" className="text-gray-500">Select service type...</option>
                    {['Engine Tuning & Dyno', 'Brakes & Upgrades', 'Suspension & Setup', 'Track Wheel Setup', 'Advanced Diagnostics', 'Preventive Maintenance'].map(o => (
                      <option key={o} value={o} className="text-gray-900">{o}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-2">Diagnostic details</label>
                  <textarea 
                    value={form.message} 
                    onChange={e => setForm({ ...form, message: e.target.value })} 
                    rows={4} 
                    className="bg-[#0D0D0D] border border-white/10 px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#E5242A]/60 rounded-md transition-colors resize-none leading-relaxed" 
                    placeholder="Describe any performance goals, mechanical issues, or error codes..." 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4.5 bg-[#E5242A] text-white hover:bg-white hover:text-black transition-all font-mono font-black uppercase tracking-widest text-[10px]"
                >
                  Send Appointment Brief
                </button>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="space-y-6 text-left">
            <div className="border border-white/5 p-8 rounded-tr-3xl rounded-bl-3xl shadow-lg" style={{ backgroundColor: CARD }}>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-6 block">Nashville Shop</span>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                  <div>
                    <div className="font-black text-white text-sm">(615) 555-0174</div>
                    <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">Dyno & Service Desk</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                  <div>
                    <div className="font-black text-white text-sm">service@ridgelineauto.com</div>
                    <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">Inquiries</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                  <div>
                    <div className="font-black text-white text-sm">4820 Nolensville Pike<br />Nashville, TN 37211</div>
                    <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">Workshop Address</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white/5 p-8 rounded-tl-3xl rounded-br-3xl shadow-lg" style={{ backgroundColor: CARD }}>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5242A] font-black mb-6 block">Shop Hours</span>
              <div className="space-y-3.5 text-xs font-light">
                <div className="flex justify-between"><span className="text-white/50">Mon – Fri</span><span className="font-mono font-bold text-white">7:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/50">Saturday</span><span className="font-mono font-bold text-white">8:00 AM – 4:00 PM</span></div>
                <div className="flex justify-between"><span className="text-white/50">Sunday</span><span className="font-mono font-bold text-white/20">Closed</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

