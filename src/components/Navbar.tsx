"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS, COLORS } from '@/constants';

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Link href="/">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-xl"
              style={{ backgroundColor: COLORS.black }}
            >
              MF.
            </div>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link
            href="/dashboard"
            className="px-6 py-3 mr-4 border-[3px] border-black text-[13px] font-black uppercase tracking-wider rounded-xl transition-all hover:-translate-y-1 active:translate-y-0"
            style={{ 
              backgroundColor: COLORS.offWhite,
              boxShadow: `6px 6px 0px ${COLORS.black}`,
            }}
          >
            Client Portal
          </Link>
          {NAV_LINKS.map((link, i) => (
            <MotionLink
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                translateY: -2,
                backgroundColor: link.color,
                boxShadow: `8px 8px 0px ${COLORS.black}`,
              }}
              whileTap={{ 
                scale: 0.95, 
                translateY: 0,
                boxShadow: `0px 0px 0px ${COLORS.black}`,
              }}
              className="px-6 py-3 border-[3px] border-black text-[13px] font-bold uppercase tracking-wider rounded-xl transition-all"
              style={{ 
                backgroundColor: COLORS.offWhite,
                boxShadow: `6px 6px 0px ${COLORS.black}`,
              }}
            >
              <span style={{ color: COLORS.black }}>
                {link.name}
              </span>
            </MotionLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-3 bg-black text-white rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] flex flex-col p-12 lg:hidden overflow-y-auto"
            style={{ backgroundColor: COLORS.offWhite }}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black text-black">MF.</span>
              <button onClick={() => setIsOpen(false)} className="p-2 border-2 border-black rounded-lg text-black bg-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 lg:space-y-4">
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black/40 border-b-8 border-transparent hover:text-black hover:border-black transition-all inline-block w-fit"
              >
                Client Portal
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:opacity-100 transition-opacity"
                  style={{ color: link.color }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

