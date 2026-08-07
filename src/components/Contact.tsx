"use client";
import { motion } from 'motion/react';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-28 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[8%] -right-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[28%] left-[7%] w-12 h-12 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[7%] w-10 h-10 text-[#FF7700] opacity-75 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <polygon points="50,10 90,85 10,85" />
        </motion.svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[20%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[18%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Left Column */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm w-fit">
              GET IN TOUCH →
            </span>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950 leading-none">
              Let's Build <br />
              <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Together</span>
            </h2>

            <p className="text-base lg:text-lg text-slate-600 font-medium max-w-md leading-relaxed">
              Have a question or ready to launch your custom high-performance website? Fill out the form or reach out directly.
            </p>

            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5500]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-black tracking-widest text-slate-500">Based in</div>
                  <div className="text-base font-bold text-slate-900">Los Angeles, CA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6528D9]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-black tracking-widest text-slate-500">Direct Email</div>
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
            className="p-8 lg:p-12 rounded-3xl border border-slate-200 bg-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#6528D9] via-[#FF5500] to-[#FF8800]" />

            <form className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-black tracking-wider text-slate-700">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Tell us who you are"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:bg-white focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] focus:outline-none transition-all duration-300 shadow-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-black tracking-wider text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Where can we reach you?"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:bg-white focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] focus:outline-none transition-all duration-300 shadow-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-black tracking-wider text-slate-700">Your Message</label>
                <textarea 
                  placeholder="How can we help build your vision?"
                  rows={4}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:bg-white focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] focus:outline-none transition-all duration-300 resize-none shadow-sm"
                />
              </div>

              <button 
                type="submit"
                className="w-full btn-orange-pill py-4 text-white font-black uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 cursor-pointer shadow-lg"
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
