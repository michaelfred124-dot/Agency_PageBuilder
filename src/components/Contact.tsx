"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { COLORS } from '@/constants';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Contact</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              Lets Work<br />Together!
            </h2>
            <p className="text-lg lg:text-2xl text-black/60 font-medium max-w-md">
              If you’re working on an exciting project and need someone with strong animation and production skills, I’d love to connect.
            </p>
            <div className="flex flex-col space-y-2 lg:space-y-4 pt-4 lg:pt-8">
              <div className="text-xs lg:text-sm font-bold uppercase tracking-widest text-black/40">Based in</div>
              <div className="text-lg lg:text-xl font-black uppercase">Los Angeles, CA</div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 lg:p-12 rounded-[24px] lg:rounded-[40px] border-[4px] lg:border-[6px] border-black"
            style={{ 
              backgroundColor: COLORS.offWhite,
              boxShadow: `10px 10px 0px ${COLORS.black}`,
            }}
          >
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-black tracking-widest text-black/40 ml-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Tell me who you are"
                  className="w-full p-5 bg-white border-4 border-black rounded-2xl font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-yellow-200 transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-black tracking-widest text-black/40 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Where can I reach you?"
                  className="w-full p-5 bg-white border-4 border-black rounded-2xl font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-black tracking-widest text-black/40 ml-2">Your Message</label>
                <textarea 
                  placeholder="How can I help you?"
                  rows={4}
                  className="w-full p-5 bg-white border-4 border-black rounded-2xl font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full p-5 lg:p-6 bg-black text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.1)] transition-all flex items-center justify-center gap-4"
                style={{ backgroundColor: COLORS.black }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
