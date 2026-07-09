"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show beautifully on the second section onwards (Identity page)
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
      setShowTopBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Jitter-Style Premium Floating Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
          scrolledPastHero 
            ? "opacity-100 translate-y-0 pointer-events-auto bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 shadow-2xl pt-6 pb-4" 
            : "opacity-0 -translate-y-12 pointer-events-none pt-8 pb-4"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Left: Logo (Text Removed as requested, only icon remains) */}
          <a href="#" className="flex items-center group outline-none">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black font-sans text-lg group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              N
            </div>
          </a>

          {/* Center: Premium Pill Navigation */}
          <nav className="hidden md:flex items-center bg-white/[0.03] border border-white/[0.05] rounded-full p-1.5 backdrop-blur-md shadow-inner">
            <a 
              href="#manifesto" 
              className="font-sans text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300 outline-none"
            >
              About
            </a>
            <a 
              href="#capabilities" 
              className="font-sans text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300 outline-none"
            >
              Skills
            </a>
            <a 
              href="#case-studies" 
              className="font-sans text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300 outline-none"
            >
              Work
            </a>
          </nav>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="font-sans text-sm font-bold text-black bg-white hover:bg-neutral-200 px-7 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] outline-none"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-40 bg-neutral-900/80 backdrop-blur border border-white/10 hover:border-white/30 w-12 h-12 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 group cursor-pointer shadow-2xl"
            title="Back to Top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-1 transition-transform duration-300"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 5 12 5 12" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
