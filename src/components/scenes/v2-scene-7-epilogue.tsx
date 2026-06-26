"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EpilogueScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Fade in the text block
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-black py-48 md:py-64 flex flex-col items-center justify-center text-center px-6">
      <motion.div style={{ opacity, y }} className="max-w-4xl flex flex-col items-center">
        <span className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-12 block">
          Career Vision
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-12 leading-[1.1]">
          The next era of software won't just be written.<br />
          <span className="text-neutral-500">It will be architected.</span>
        </h2>
        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
          I am looking for my next challenge—a team where engineering is treated as a craft, scale is an expectation, and the product experience is never compromised.
        </p>
      </motion.div>
    </section>
  );
}
