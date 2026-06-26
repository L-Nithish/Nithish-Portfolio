"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CircularWordWheel({ words }: { words: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tie the rotation to the scroll depth of this specific component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Rotate a full 360 degrees forward as the user scrolls down
  const rotateX = useTransform(scrollYProgress, [0, 1], [60, -300]);

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full bg-black z-0 my-8">
      <div className="sticky top-[30vh] h-[40vh] w-full flex items-center justify-center overflow-hidden" style={{ perspective: "800px" }}>
        
        {/* Cinematic gradient masks to hide the top/bottom of the wheel and create focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none opacity-50" />
        
        <motion.div 
          style={{ rotateX, transformStyle: "preserve-3d" }}
          className="relative w-full h-[40px] flex items-center justify-center"
        >
          {words.map((word, i) => {
            const angle = (360 / words.length) * i;
            // A smaller translateZ radius creates a subtle, contained ring.
            return (
              <div 
                key={i}
                className="absolute flex items-center justify-center w-full text-xl md:text-3xl font-bold tracking-widest text-neutral-400 uppercase opacity-60"
                style={{
                  transform: `rotateX(${angle}deg) translateZ(150px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                {word}
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
