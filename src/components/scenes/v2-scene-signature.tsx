"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SignatureScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stage 1: "Scale is not a feature." (Fades in, then zooms in slightly and fades out)
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const text1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.2]);

  // Stage 2: "It is an architectural necessity." (Snaps in, holds, snaps out)
  const text2Opacity = useTransform(scrollYProgress, [0.26, 0.27, 0.4, 0.42], [0, 1, 1, 0]);
  
  // Stage 3: The word "SYSTEMS" appears
  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.6], [0, 1, 0]);
  const text3Scale = useTransform(scrollYProgress, [0.45, 0.6], [1, 2]);

  // Stage 4: The screen turns pure white, massive black text slams in.
  const bgProgress = useTransform(scrollYProgress, [0.65, 0.7], ["#000000", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0.65, 0.7], ["#ffffff", "#000000"]);
  
  const finalWordOpacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);
  const finalWordY = useTransform(scrollYProgress, [0.7, 0.75], [100, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full">
      <motion.div 
        style={{ backgroundColor: bgProgress, color: textColor }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        
        {/* Stage 1 */}
        <motion.div 
          style={{ opacity: text1Opacity, scale: text1Scale }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-light tracking-tight">
            Scale is not a feature.
          </h2>
        </motion.div>

        {/* Stage 2 */}
        <motion.div 
          style={{ opacity: text2Opacity }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
            It is a fundamental requirement.
          </h2>
        </motion.div>

        {/* Stage 3 */}
        <motion.div 
          style={{ opacity: text3Opacity, scale: text3Scale }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase opacity-20">
            Systems
          </h2>
        </motion.div>

        {/* Stage 4 */}
        <motion.div 
          style={{ opacity: finalWordOpacity, y: finalWordY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="text-5xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-none mb-6">
            ENGINEERED.
          </h2>
          <p className="text-xl md:text-3xl font-medium tracking-tight">
            Not assembled.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
