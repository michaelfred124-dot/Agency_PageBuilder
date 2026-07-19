"use client";
import React, { useState } from "react";
import { 
  PBHeader, PBHero, PBTrustStrip, PBServicesGrid, PBBlueBanner, 
  PBWhyChooseUs, PBNoPower, PBGoToElectrician, PBReviews, PBFooter,
  PB_YELLOW, PB_BLUE
} from "../../lib/blocks/precisebuilding";
import { Send, FileText, MapPin, Mail } from "lucide-react";

export default function PreciseBuildingTemplate() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "careers" | "contact">("home");

  const navigateTo = (page: "home" | "services" | "careers" | "contact") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (currentPage) {
      case "services":
        return (
          <>
            <PBServicesGrid onNavigate={navigateTo} />
            <PBWhyChooseUs onNavigate={navigateTo} />
            <PBNoPower onNavigate={navigateTo} />
          </>
        );
      case "careers":
        return (
          <section className="py-20 px-6 bg-slate-50 text-left rounded-none">
            <div className="max-w-3xl mx-auto bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-650 mb-3 block">JOIN OUR TEAM</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display mb-6 uppercase">
                We're Hiring Local Electricians
              </h2>
              <p className="text-slate-500 font-semibold text-xs leading-relaxed mb-8">
                Are you a certified master electrician or residential wireman looking for steady work, excellent hourly rates, health coverage, and a friendly local team? Precise Building Services is looking for top talent in the Washington DC metro area.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert("Application Submitted Successfully!"); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Phone Number</label>
                    <input required type="tel" placeholder="202.827.2214" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Experience Level</label>
                    <select required className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800">
                      <option value="">Select Level</option>
                      <option value="apprentice">Apprentice (1-3 yrs)</option>
                      <option value="journeyman">Journeyman (4+ yrs)</option>
                      <option value="master">Master Electrician</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Why do you want to join our crew?</label>
                  <textarea rows={3} placeholder="Tell us about your electrical background..." className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800 resize-none" />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white border-2 border-black font-black text-xs uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
                  style={{ backgroundColor: PB_YELLOW, color: "#000" }}
                >
                  <FileText className="w-4 h-4" />
                  <span>SUBMIT APPLICATION</span>
                </button>
              </form>
            </div>
          </section>
        );
      case "contact":
        return (
          <section className="py-20 px-6 bg-slate-50 text-left rounded-none">
            <div className="max-w-6xl mx-auto bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none flex flex-col md:flex-row items-stretch">
              
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r-2 border-black">
                <span className="text-[10px] font-black tracking-widest text-indigo-650 mb-3 block">GET ESTIMATE</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display mb-6 uppercase">
                  Let's Power Your Project
                </h2>
                <p className="text-slate-500 font-semibold text-xs leading-relaxed max-w-sm mb-8">
                  Have a residential wiring request or a commercial code compliance upgrade? Send us your info and our local Washington DC estimator will follow up with you today.
                </p>
                <div className="space-y-4 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>7558 Baltimore Ave Suite 220 College Park, MD 20740</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span>services@precisebuildingservices.com</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <form onSubmit={(e) => { e.preventDefault(); alert("Estimate Request Submitted Successfully!"); }} className="space-y-5">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Your Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-display">Message / Project Details</label>
                    <textarea required rows={3} placeholder="Describe what electrical services you need..." className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 transition-all text-slate-800 resize-none" />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white border-2 border-black font-black text-xs uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
                    style={{ backgroundColor: PB_YELLOW, color: "#000" }}
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              </div>

            </div>
          </section>
        );
      case "home":
      default:
        return (
          <>
            <PBHero onNavigate={navigateTo} />
            <PBTrustStrip />
            <PBServicesGrid onNavigate={navigateTo} />
            <PBBlueBanner onNavigate={navigateTo} />
            <PBWhyChooseUs onNavigate={navigateTo} />
            <PBNoPower onNavigate={navigateTo} />
            <PBGoToElectrician onNavigate={navigateTo} />
            <PBReviews />
          </>
        );
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 rounded-none">
      <PBHeader onNavigate={navigateTo} />
      {renderContent()}
      <PBFooter onNavigate={navigateTo} />
    </div>
  );
}
