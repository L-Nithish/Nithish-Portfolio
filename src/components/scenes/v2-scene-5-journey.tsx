"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MILESTONES = [
  {
    title: "The Theoretical Foundation",
    org: "B.Sc. Information Technology",
    metric: "2022 — 2025",
    desc: "Planted deep theoretical roots in computer science. Mastered Database Management Systems (DBMS), network topologies, and the strict principles of Object-Oriented Programming. This period was not about writing code, but understanding how machines and data fundamentally interact."
  },
  {
    title: "The 500-Hour Crucible",
    org: "Qspiders Intensive Training",
    metric: "Jan 2025",
    desc: "Transitioned from theoretical concepts to enterprise execution. Endured a rigorous 500+ hour full-stack immersion. Mastered Core Java algorithms, Spring Boot dependency injection, and complex relational modeling. This is where I learned to architect logic, not just script it."
  },
  {
    title: "The Microservice Shift",
    org: "Architectural Awakening",
    metric: "Security & Scale",
    desc: "Realized that monoliths break under scale. Transitioned into deeply decoupled architectures. Mastered RESTful API design, implemented stateless JWT security paradigms, and learned to manage low-latency WebSocket connections for real-time data flows."
  },
  {
    title: "The Frontend Realization",
    org: "Bridging the Gap",
    metric: "Next.js & React",
    desc: "A powerful backend is useless if the user experience is sluggish. Shifted focus to mastering the React ecosystem and Next.js App Router. Learned to manipulate the DOM with Framer Motion, treating the browser as a canvas for premium digital experiences."
  }
];

export function JourneyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-black py-32 md:py-64 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        <div className="lg:w-1/3">
          <motion.div style={{ opacity }} className="sticky top-48">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
              The Learning <br/> Journey.
            </h2>
            <p className="text-xl text-neutral-500 font-light leading-relaxed">
              Mastery is not an accident. It is a calculated sequence of paradigm shifts, from raw theory to enterprise execution.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-2/3 space-y-32 mt-12 lg:mt-0 border-l border-neutral-800 pl-8 md:pl-16">
          {MILESTONES.map((item, idx) => (
            <MilestoneItem key={item.title} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function MilestoneItem({ item, index }: { item: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="relative">
      {/* Timeline Node */}
      <div className="absolute -left-[33px] md:-left-[65px] top-2 w-3 h-3 bg-neutral-600 rounded-full ring-8 ring-black" />
      
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">{item.org}</span>
        <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono tracking-wide text-neutral-400 w-fit">
          {item.metric}
        </span>
      </div>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">{item.title}</h3>
      <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
        {item.desc}
      </p>
    </motion.div>
  );
}
