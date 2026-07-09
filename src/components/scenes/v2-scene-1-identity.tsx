"use client";

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Globe, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Custom Magnetic Button for unique social links
function MagneticIcon({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    
    gsap.to(ref.current, { x, y, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-colors"
    >
      {children}
    </a>
  );
}

export function IdentityScene() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // 1. Ultra-Smooth Text Reveal (Removed blur which causes lag on huge elements)
    // Scrub increased to 2.5 for a heavy, premium, buttery-smooth lag effect.
    gsap.fromTo(textRef.current,
      { 
        scale: 4, 
        opacity: 0, 
        y: 200,
        rotateX: 15
      },
      {
        scale: 1, 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "top 10%",
          scrub: 2.5,
        }
      }
    );

    // 2. Details Fade
    gsap.fromTo(detailsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: "top 10%",
          scrub: 2,
        }
      }
    );

    // 3. Marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 30, // slower, more elegant
      repeat: -1
    });

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full h-[150vh] bg-[#050505] text-white overflow-hidden flex flex-col justify-start"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
         
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-90 z-0 pointer-events-none" />

         {/* 
           Redesigned Typography: 
           Massive, heavy, and highly stylized. Mixing solid black and outlined italics for a unique editorial look.
         */}
         <h1 
           ref={textRef} 
           className="text-[12vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] text-center z-10 whitespace-nowrap transform-gpu"
           style={{ perspective: 1000 }}
         >
           <span className="block text-white opacity-95">
             L. Nithish
           </span>
           <span className="block italic text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)] mt-[-2vw] ml-[5vw]">
             Kumar
           </span>
         </h1>
         
         {/* Details Grid */}
         <div 
           ref={detailsRef}
           className="absolute bottom-4 md:bottom-8 w-full px-6 flex flex-col items-center justify-center z-20"
         >
           <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
             <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
               <span className="text-white/50 tracking-[0.4em] text-[8px] md:text-[10px] uppercase font-mono font-bold">Designation</span>
             </div>
             
             <div className="relative group cursor-default mt-1">
               <span className="text-xl md:text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] block">
                 <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-600 block mb-1 hover:scale-105 transition-transform duration-500">
                   AI-Powered Java
                 </span>
                 <span className="text-white/90 block hover:scale-105 transition-transform duration-500" style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
                   Full Stack Developer
                 </span>
               </span>
               <div className="absolute -inset-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none rounded-full" />
             </div>
           </div>
         </div>

         {/* Unique Social Links (Magnetic Floating Sidebar) */}
         <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
            <MagneticIcon href="https://github.com/L-Nithish">
              <FaGithub className="w-5 h-5" />
            </MagneticIcon>
            <MagneticIcon href="https://www.linkedin.com/in/lnithishkumar/">
              <FaLinkedin className="w-5 h-5" />
            </MagneticIcon>
            <MagneticIcon href="#">
              <User className="w-5 h-5" />
            </MagneticIcon>
         </div>

         {/* Endless Background Marquee */}
         <div className="absolute top-1/4 w-[200vw] overflow-hidden opacity-[0.03] z-0 pointer-events-none mix-blend-overlay">
           <div ref={marqueeRef} className="flex whitespace-nowrap text-[15vw] font-black uppercase tracking-tighter leading-none italic">
             <span>L. NITHISH KUMAR &mdash; </span>
             <span>L. NITHISH KUMAR &mdash; </span>
             <span>L. NITHISH KUMAR &mdash; </span>
           </div>
         </div>

      </div>
    </section>
  )
}
