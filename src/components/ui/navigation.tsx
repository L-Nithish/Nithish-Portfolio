"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide on the prologue (100vh) AND identity sections (150vh). Show from Manifesto onwards.
      setScrolledPastHero(window.scrollY > window.innerHeight * 2.2);
      setShowTopBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Jitter Exact Replica Navbar - Transferred to Second Section */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 pt-8 pb-4 transition-all duration-700 ease-out ${
          scrolledPastHero 
            ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#0a0a0a]/50 backdrop-blur-md shadow-2xl border-b border-white/5' 
            : 'opacity-0 -translate-y-12 pointer-events-none'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Left: Logo & Badge */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans font-semibold text-white text-3xl tracking-tight outline-none" style={{ letterSpacing: "-0.03em" }}>
              Nithish
            </a>
            <div className="bg-[#1e1e1e] text-[#b3b3b3] text-sm font-medium px-2 py-0.5 rounded shadow-sm select-none">
              Portfolio
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Dark Circle Button (Replicating the 'X' button) */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 rounded-full bg-[#1e1e1e] hover:bg-[#2a2a2a] flex items-center justify-center text-[#b3b3b3] hover:text-white transition-colors outline-none shadow-sm"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Avatar / Profile Ring */}
            <a 
              href="#contact" 
              className="w-11 h-11 rounded-full overflow-hidden border border-[#333] hover:border-[#555] transition-colors bg-[#1e1e1e] flex items-center justify-center shadow-sm relative group"
            >
              {/* Fallback avatar with a subtle ring effect similar to the screenshot */}
              <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/50 transition-all"></div>
              <span className="font-sans font-semibold text-[#b3b3b3] text-sm">NK</span>
            </a>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay (Since the minimalist design has no visible links) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/90 flex flex-col items-center justify-center gap-8"
          >
            <a href="#manifesto" onClick={() => setMenuOpen(false)} className="text-4xl md:text-6xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter">About</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)} className="text-4xl md:text-6xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter">Skills</a>
            <a href="#case-studies" onClick={() => setMenuOpen(false)} className="text-4xl md:text-6xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter">Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-4xl md:text-6xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-40 bg-[#1e1e1e] border border-[#333] hover:border-[#555] w-12 h-12 rounded-full flex items-center justify-center text-[#b3b3b3] hover:text-white transition-all duration-300 group cursor-pointer shadow-xl"
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
