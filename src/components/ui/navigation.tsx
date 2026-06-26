"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation only after scrolling past ~50vh
      const threshold = window.innerHeight * 0.5;
      setShowNav(window.scrollY > threshold);

      setShowTopBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Header Nav — appears after scrolling past hero */}
      <AnimatePresence>
        {showNav && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-neutral-900/60 shadow-lg"
          >
            <a
              href="#prologue"
              className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 hover:text-white transition-colors uppercase select-none"
            >
              NK // PORTFOLIO
            </a>

            <nav className="flex items-center gap-6 md:gap-10 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-neutral-400">
              <a href="#manifesto" className="hover:text-white transition-colors duration-300 uppercase">
                // ABOUT
              </a>
              <a href="#capabilities" className="hover:text-white transition-colors duration-300 uppercase">
                // SKILLS
              </a>
              <a href="#case-studies" className="hover:text-white transition-colors duration-300 uppercase">
                // WORK
              </a>
              <a href="#contact" className="hover:text-white transition-colors duration-300 uppercase">
                // CONTACT
              </a>
            </nav>
          </motion.header>
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
            className="fixed bottom-8 right-8 z-40 bg-neutral-950/80 backdrop-blur border border-neutral-800 hover:border-neutral-500 w-11 h-11 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 group cursor-pointer shadow-lg"
            title="Back to Top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14" height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-0.5 transition-transform"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 5 12 5 12" /> {/* Empty placeholder fixes line wrap */}
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
