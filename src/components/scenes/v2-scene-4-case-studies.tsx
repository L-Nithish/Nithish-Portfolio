"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { PROJECTS, ARCHIVE } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function CaseStudiesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Animate the details section when the active project changes
  useGSAP(() => {
    if (!detailsRef.current) return;
    
    // Animate out the old content
    gsap.fromTo(
      detailsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out", overwrite: true }
    );
  }, { dependencies: [activeIndex], scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#050505] text-white relative py-32 md:py-48">
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-neutral-500 mb-4">
            System Architecture
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight max-w-3xl">
            A curated index of highly scalable digital ecosystems.
          </p>
        </div>

        {/* 
          ========================================
          SPLIT TYPOGRAPHIC LAYOUT
          ========================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Interactive Project List */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
            {PROJECTS.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={project.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group relative cursor-pointer py-10 md:py-16 border-b border-white/10"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-mono tracking-widest text-neutral-500 mb-4 block">
                      {project.id} &mdash; {project.type}
                    </span>
                    <h3 
                      className={`text-5xl md:text-7xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] transition-all duration-500 ${
                        isActive 
                          ? "text-white" 
                          : "text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.3)] group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_rgba(255,255,255,0.8)]"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Details Panel */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="sticky top-48">
              {/* Massive background number */}
              <div className="absolute -top-32 -left-16 text-[25rem] font-black text-white/5 leading-none select-none z-0 pointer-events-none">
                0{activeIndex + 1}
              </div>
              
              <div ref={detailsRef} className="relative z-10 flex flex-col gap-8 bg-black/40 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl">
                <p className="text-2xl font-medium text-white leading-snug">
                  {PROJECTS[activeIndex].tagline}
                </p>
                
                <p className="text-neutral-400 font-light leading-relaxed">
                  {PROJECTS[activeIndex].context}
                </p>

                <div>
                  <h4 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4">Core Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS[activeIndex].tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-neutral-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 mt-8 pt-8 border-t border-white/10">
                  <Link 
                    href={`/case-studies/${PROJECTS[activeIndex].slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href={PROJECTS[activeIndex].links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Details Panel (Displays inline for small screens) */}
          <div className="lg:hidden mt-8">
            <div className="flex flex-col gap-6 bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-2xl font-bold uppercase tracking-tighter">
                {PROJECTS[activeIndex].title}
              </h4>
              <p className="text-lg text-white font-medium leading-snug">
                {PROJECTS[activeIndex].tagline}
              </p>
              <div className="flex flex-col gap-4 mt-4">
                  <Link 
                    href={`/case-studies/${PROJECTS[activeIndex].slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href={PROJECTS[activeIndex].links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest"
                  >
                    Live Demo
                  </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 
        ========================================
        SYSTEM ARCHIVE
        ========================================
      */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-32 mt-24">
        <div className="flex items-center gap-6 mb-16">
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white">System Archive</h3>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHIVE.map((item) => (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              key={item.id} 
              className="group relative block p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-xl font-medium text-white mb-3 flex items-center justify-between">
                  {item.title}
                  <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h4>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
    </section>
  );
}
