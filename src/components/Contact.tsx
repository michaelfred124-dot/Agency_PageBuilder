"use client";
import { motion } from 'motion/react';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F8FAFC] text-slate-900 px-4 lg:px-6 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-sky-200/40 via-teal-200/40 to-emerald-200/40 rounded-full pointer-events-none z-0 border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Left Column */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-700 bg-sky-50 px-4 py-2 rounded-full border border-sky-200 shadow-sm w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-none">
              Let's Build <br />
              <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Together</span>
            </h2>

            <p className="text-base lg:text-lg text-slate-600 font-normal max-w-md leading-relaxed">
              Have a question or ready to launch your custom high-performance website? Fill out the form or reach out directly.
            </p>

            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-widest text-slate-500">Based in</div>
                  <div className="text-base font-bold text-slate-900">Los Angeles, CA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-widest text-slate-500">Direct Email</div>
                  <div className="text-base font-bold text-slate-900">michaelfreddesigns@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Right Form Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-3xl border border-slate-200 bg-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <form className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-600">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Tell us who you are"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-normal placeholder:text-slate-400 focus:bg-white focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all duration-300 shadow-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-600">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Where can we reach you?"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-normal placeholder:text-slate-400 focus:bg-white focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all duration-300 shadow-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-600">Your Message</label>
                <textarea 
                  placeholder="How can we help build your vision?"
                  rows={4}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-normal placeholder:text-slate-400 focus:bg-white focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all duration-300 resize-none shadow-sm"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-slate-950 hover:bg-slate-800 text-white font-extrabold uppercase tracking-widest text-xs rounded-full transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm hover:scale-105"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
