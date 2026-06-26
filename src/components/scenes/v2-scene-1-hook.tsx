"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HookScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full bg-black overflow-hidden">
      <motion.div 
        style={{ y, opacity, scale }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black opacity-60 pointer-events-none" />
        
        <div className="z-10 flex flex-col items-center text-center w-full max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <p className="text-neutral-400 font-mono text-sm md:text-base uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-neutral-600" />
              L. Nithish Kumar
              <span className="w-8 h-[1px] bg-neutral-600" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] mix-blend-difference mb-4">
              Java Full-Stack
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-neutral-600 leading-[0.9] mix-blend-difference">
              Developer.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-12 md:mt-16 max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              I architect enterprise-grade systems. From robust Spring Boot microservices to cinematic React ecosystems, I build digital products engineered for <span className="text-white font-medium">scale, security, and absolute performance</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "4rem" }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-[1px] bg-gradient-to-b from-neutral-500 to-transparent mt-12"
          />
        </div>

      </motion.div>
    </section>
  );
}
