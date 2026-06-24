"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function StylishStoreContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none">
            Contact Our Advisors
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Have questions about shipping, returns, sizing, or custom orders? Send us a message today.
          </p>
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7 bg-[#FAF9F5] border border-slate-200/50 p-8 sm:p-12 rounded-[32px] shadow-sm text-left">
            <h3 className="font-sans font-black text-2xl text-slate-900 leading-tight mb-8">
              Send us a Message
            </h3>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-2xl shadow-sm text-center">
                Message Sent successfully! We will get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                    <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 text-sm font-medium" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 text-sm font-medium" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 text-sm font-medium" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Topic of Inquiry</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 text-sm font-medium bg-white">
                      <option>Sizing & Fit Advice</option>
                      <option>Order Shipping & Logistics</option>
                      <option>Custom Handcrafted Orders</option>
                      <option>Returns & Exchanges Info</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Additional Message Details</label>
                  <textarea rows={5} placeholder="Describe your inquiry details..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 text-sm font-medium" required></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white hover:bg-slate-800 font-sans font-black uppercase text-xs tracking-widest py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all cursor-pointer"
                >
                  Send Request
                  <Send className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
              Contact Channels
            </h2>
            
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-3xl flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Direct Phone</span>
                  <a href="tel:5125550093" className="font-sans font-black text-lg text-slate-900 hover:underline">(512) 555-0093</a>
                  <span className="text-xs text-slate-500 font-medium block mt-1">Mon-Sat, 9am-6pm. Sizing support.</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-3xl flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Email Inquiry</span>
                  <a href="mailto:hello@stylishstore.com" className="font-sans font-black text-lg text-slate-900 hover:underline">hello@stylishstore.com</a>
                  <span className="text-xs text-slate-500 font-medium block mt-1">We respond to all requests within 24h.</span>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-3xl flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Studio Address</span>
                  <address className="font-sans font-black text-base text-slate-900 not-italic leading-relaxed">
                    2104 South Lamar Blvd<br />Austin, TX 78704
                  </address>
                </div>
              </div>
            </div>

            {/* Static Map Placeholder Grid */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex flex-col justify-center items-center p-6 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
              <div className="relative z-10 space-y-2">
                <MapPin className="w-8 h-8 text-slate-400 mx-auto" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Interactive Map</span>
                <p className="text-xs text-slate-500 font-bold max-w-xs mx-auto leading-relaxed">
                  Stylish Store Flagship Showroom Map. Located in South Lamar, Austin, TX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
