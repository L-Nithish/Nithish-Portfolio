"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ManifestoScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white text-black py-48 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-64">
        
        <ManifestoBlock 
          title="The Mindset."
          headline={<>Code is cheap. <br/><span className="text-neutral-400">Architecture is everything.</span></>}
          text="I do not measure success by lines of code written. I measure it by system resilience, query optimization, and the absence of technical debt. A true engineer anticipates scale before the first user ever logs in."
        />

        <ManifestoBlock 
          title="The Architecture."
          headline={<>Zero-trust security. <br/><span className="text-neutral-400">Absolute performance.</span></>}
          text="From mitigating XSS vulnerabilities using strict HTTP-Only stateless JWT rotations, to establishing low-latency WebSocket brokers for real-time AI inference—every architectural decision is a deliberate calculation balancing performance budgets against security requirements."
        />

        <ManifestoBlock 
          title="The Vision."
          headline={<>Bridging the gap between <br/><span className="text-neutral-400">heavy backends and cinematic UI.</span></>}
          text="A flawless Spring Boot microservice is useless if the user interface is sluggish. My career vision is to operate at the exact intersection of hardcore backend engineering and premium, state-driven frontend design. I build digital products that don't just work—they command attention."
        />

      </div>
    </section>
  );
}

function ManifestoBlock({ title, headline, text }: { title: string, headline: React.ReactNode, text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="space-y-12">
      <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">{title}</span>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
        {headline}
      </h2>
      <p className="text-2xl md:text-3xl font-light tracking-tight leading-relaxed text-neutral-800 max-w-3xl">
        {text}
      </p>
    </motion.div>
  );
}
