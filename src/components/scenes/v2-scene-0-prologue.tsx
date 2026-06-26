"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { HyperspeedBackground } from "@/components/backgrounds/HyperspeedBackground";

export function PrologueScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Coordinates for Cursor-Reactive Spotlight (Initial offset off-screen)
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Ultra-smooth spring physics for the spotlight trace
  const springConfig = { stiffness: 120, damping: 22, mass: 0.1 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const spotlightBg = useMotionTemplate`radial-gradient(700px circle at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,0.038), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  // Scroll properties for parallax content fade
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div 
      className="relative w-full bg-black select-none" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── PORTFOLIO HERO SECTION ── */}
      <section 
        className="relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden px-6 md:px-12"
      >
        {/* Layer 1: Hyperspeed Background (Three.js WebGL Canvas) */}
        <HyperspeedBackground />

        {/* Layer 2: Dark overlay — guarantees text contrast over animation */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "rgba(0,0,0,0.65)" }}
        />

        {/* Layer 3: Ambient Spotlight Backdrop (cursor reactive) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: spotlightBg,
          }}
        />

        {/* Content Container — z-10 above all background layers */}
        <motion.div 
          style={{ 
            opacity: contentOpacity, 
            y: contentY,
            willChange: "transform, opacity",
          }}
          className="relative z-10 flex flex-col justify-center items-center text-center max-w-5xl space-y-8"
        >
          {/* Active Version Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-900 bg-neutral-950/80 text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Development // Workspace v2.1</span>
          </motion.div>

          {/* Header Title with Staggered Mount Motion */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl lg:text-[8rem] xl:text-[10rem] font-black tracking-tighter uppercase leading-none text-white"
              style={{
                textShadow: "0 0 30px rgba(0,0,0,0.8), 0 0 100px rgba(0,0,0,0.5)",
              }}
            >
              NITHISH KUMAR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-bold tracking-tight text-neutral-300"
            >
              Java Full-Stack Developer
            </motion.p>
          </div>

          {/* Tagline Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Building scalable backend systems, intelligent software products, and high-performance digital experiences.
          </motion.p>

          {/* Premium Call-to-Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto z-20"
          >
            <MagneticButton href="#case-studies" isPrimary>
              Explore Work
            </MagneticButton>
            
            <MagneticButton href="#contact">
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

function MagneticButton({ 
  children, 
  href, 
  isPrimary = false 
}: { 
  children: React.ReactNode; 
  href: string; 
  isPrimary?: boolean;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Compute distance from button center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Limit maximum pull to 10 pixels for sub-pixel high-end control
    const limit = 0.3; 
    setPosition({ x: x * limit, y: y * limit });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`px-8 py-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center cursor-pointer transition-[background-color,border-color] duration-300 w-full sm:w-auto shadow-lg select-none ${
        isPrimary 
          ? "bg-white text-black hover:bg-neutral-200" 
          : "bg-black border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500"
      }`}
    >
      {children}
    </motion.a>
  );
}
