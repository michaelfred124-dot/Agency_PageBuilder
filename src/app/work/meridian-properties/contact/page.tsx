'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Check, Calendar, ArrowRight } from 'lucide-react';

const BASE = '/work/meridian-properties';
const BG = '#FAF8F5';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';

export default function MeridianContact() {
  const [sent, setSent] = useState(false);
  const [clientType, setClientType] = useState<ClientType>('buyer');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: BG, color: SLATE }} className="overflow-x-hidden pb-12">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 text-left">
        <div className="max-w-3xl">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#B8A27A] block mb-4">
            Private Advisory &nbsp;·&nbsp; Consultation
          </span>
          <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight text-[#1F242E] mb-6">
            Let us guide your <br />next Nashville <span className="text-[#B8A27A] italic font-light">chapter.</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            Schedule a private, data-driven consultation. Whether evaluating an estate's valuation or sourcing off-market investments, our principal brokers are here to advise.
          </p>
        </div>
      </section>

      {/* CONTACT BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-6 relative">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-cover bg-center mix-blend-overlay rounded-[48px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600')" }} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          
          {/* Card 1: Form intake (Spans 2 columns) */}
          <div className="lg:col-span-2 p-10 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_25px_60px_-15px_rgba(31,36,46,0.06)] hover:shadow-[0_30px_70px_-10px_rgba(184,162,122,0.12)] hover:border-[#B8A27A]/35 transition-all duration-500 text-left min-h-[500px]">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#B8A27A]/15 border border-[#B8A27A]/30">
                  <Check className="w-8 h-8 text-[#B8A27A]" />
                </div>
                <h2 className="text-2xl font-serif text-[#1F242E] mb-3">Consultation Request Received</h2>
                <p className="text-gray-500 text-xs max-w-sm mb-8 leading-relaxed font-light">
                  Catherine Harlow or a designated luxury advisor will contact you within one business day to coordinate schedules.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest text-white transition-all shadow-sm hover:opacity-90"
                  style={{ backgroundColor: GOLD }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-[#1F242E] mb-1">Schedule Advisory Session</h2>
                  <p className="text-[10px] font-mono text-[#B8A27A] uppercase tracking-widest font-black">
                    Required fields marked with *
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/45 backdrop-blur-md border border-white/80 focus:border-[#B8A27A] focus:ring-1 focus:ring-[#B8A27A] rounded-xl outline-none px-4 py-3.5 text-xs text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">Phone</label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/45 backdrop-blur-md border border-white/80 focus:border-[#B8A27A] focus:ring-1 focus:ring-[#B8A27A] rounded-xl outline-none px-4 py-3.5 text-xs text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                      placeholder="(615) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/45 backdrop-blur-md border border-white/80 focus:border-[#B8A27A] focus:ring-1 focus:ring-[#B8A27A] rounded-xl outline-none px-4 py-3.5 text-xs text-gray-800 placeholder-gray-400 transition-all"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">I am looking to... *</label>
                    <select
                      required
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/45 backdrop-blur-md border border-white/80 focus:border-[#B8A27A] focus:ring-1 focus:ring-[#B8A27A] rounded-xl outline-none px-4 py-3.5 text-xs text-gray-650 transition-all appearance-none"
                    >
                      <option value="">Select service...</option>
                      {['Buy a Home', 'Sell My Home', 'Both — Buy & Sell', 'Investment Portfolio Advisory', 'Commercial Syndicates', 'General Consultation'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">Budget Range</label>
                    <input
                      value={form.budget}
                      onChange={e => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-white/45 backdrop-blur-md border border-white/80 focus:border-[#B8A27A] focus:ring-1 focus:ring-[#B8A27A] rounded-xl outline-none px-4 py-3.5 text-xs text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                      placeholder="e.g. $1M – $3M+"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">Additional Notes / Neighborhood Preferences</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/45 backdrop-blur-md border border-white/80 focus:border-[#B8A27A] focus:ring-1 focus:ring-[#B8A27A] rounded-xl outline-none px-4 py-3.5 text-xs text-gray-800 placeholder-gray-400 transition-all resize-none"
                    placeholder="Timeline, specific properties, or area considerations..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-mono font-black uppercase tracking-widest text-white transition-all shadow-md hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ backgroundColor: GOLD }}
                >
                  Request Consultation <Calendar className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar (Spans 1 column) */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Card 2: Contact Details */}
            <div className="p-8 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 hover:shadow-[0_25px_55px_-10px_rgba(184,162,122,0.08)] transition-all duration-500 text-left">
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block mb-6">Brokerage Office</span>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#B8A27A]/10 flex items-center justify-center shrink-0 border border-[#B8A27A]/20">
                    <MapPin className="w-4 h-4 text-[#B8A27A]" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-gray-400 uppercase tracking-wider font-bold mb-0.5">Address</div>
                    <div className="font-bold text-xs text-[#1F242E] leading-relaxed">
                      3210 West End Ave, Suite 500<br />Nashville, TN 37203
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#B8A27A]/10 flex items-center justify-center shrink-0 border border-[#B8A27A]/20">
                    <Phone className="w-4 h-4 text-[#B8A27A]" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-gray-400 uppercase tracking-wider font-bold mb-0.5">Direct Advisory Line</div>
                    <a href="tel:6155550265" className="font-bold text-xs text-[#1F242E] hover:text-[#B8A27A] transition-colors">
                      (615) 555-0265
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#B8A27A]/10 flex items-center justify-center shrink-0 border border-[#B8A27A]/20">
                    <Mail className="w-4 h-4 text-[#B8A27A]" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-gray-400 uppercase tracking-wider font-bold mb-0.5">Email Enquiry</div>
                    <a href="mailto:hello@meridianproperties.com" className="font-bold text-xs text-[#1F242E] hover:text-[#B8A27A] transition-colors">
                      hello@meridianproperties.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Office Hours */}
            <div className="p-8 border border-white/80 bg-white/55 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] transition-all duration-500 text-left">
              <span className="text-[9px] font-mono text-[#B8A27A] uppercase tracking-widest font-black block mb-4">Availability</span>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-400 font-light">Monday – Friday</span>
                  <span className="font-bold text-[#1F242E] font-mono">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-light">Saturday – Sunday</span>
                  <span className="font-bold text-[#B8A27A] font-mono">By Appointment</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
