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
    <section id="contact" className="py-20 lg:py-32 bg-[#F7F8FA] px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400">Contact</span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 leading-none">
              Let's Work<br />Together!
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-normal max-w-md">
              If you’re working on an exciting project and need someone with strong animation and production skills, I’d love to connect.
            </p>
            <div className="flex flex-col space-y-2 lg:space-y-4 pt-4 lg:pt-8">
              <div className="text-xs lg:text-sm font-bold uppercase tracking-widest text-zinc-400">Based in</div>
              <div className="text-lg lg:text-xl font-extrabold text-zinc-900 uppercase">Los Angeles, CA</div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 lg:p-12 rounded-3xl border-2 border-zinc-950 bg-white"
            style={{ 
              boxShadow: `4px 4px 0px rgba(9,9,11,1)`,
            }}
          >
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-400 ml-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Tell me who you are"
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl font-normal placeholder:text-zinc-400 focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-400 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Where can I reach you?"
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl font-normal placeholder:text-zinc-400 focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-400 ml-2">Your Message</label>
                <textarea 
                  placeholder="How can I help you?"
                  rows={4}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl font-normal placeholder:text-zinc-400 focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-zinc-950 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-zinc-900 shadow-md shadow-zinc-950/10 hover:translate-y-[-1px] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
