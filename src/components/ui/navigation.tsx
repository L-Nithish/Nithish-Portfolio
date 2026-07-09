"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show on second page
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
      setShowTopBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Ultra-Premium Floating Capsule Navbar */}
      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolledPastHero 
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100" 
            : "opacity-0 -translate-y-12 pointer-events-none scale-95"
        }`}
      >
        <div className="flex items-center gap-2 md:gap-4 p-2 bg-[#050505]/70 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          
          {/* Logo */}
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white to-neutral-400 text-black font-black font-sans text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5)] ml-1">
            N
          </a>

          {/* Separator */}
          <div className="w-[1px] h-5 bg-white/10 hidden md:block mx-1"></div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-1 px-1">
            <a href="#manifesto" className="relative group px-4 py-2 rounded-full overflow-hidden outline-none">
              <span className="relative z-10 font-sans text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">About</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </a>
            <a href="#capabilities" className="relative group px-4 py-2 rounded-full overflow-hidden outline-none">
              <span className="relative z-10 font-sans text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">Skills</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </a>
            <a href="#case-studies" className="relative group px-4 py-2 rounded-full overflow-hidden outline-none">
              <span className="relative z-10 font-sans text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">Work</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </a>
          </nav>

          {/* Separator */}
          <div className="w-[1px] h-5 bg-white/10 hidden md:block mx-1"></div>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="group relative overflow-hidden flex items-center justify-center px-6 py-2.5 bg-transparent border border-white/20 hover:border-white/50 rounded-full transition-all duration-300 mr-1"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 font-sans text-sm font-semibold text-white group-hover:text-black transition-colors duration-300">
              Contact
            </span>
          </a>
        </div>
      </div>

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
