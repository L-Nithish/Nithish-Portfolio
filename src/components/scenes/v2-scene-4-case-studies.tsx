"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS, ARCHIVE } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function CaseStudiesScene() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white font-sans overflow-hidden py-32">
      
      {/* Subtle Grain / Vignette Overlay (no more images) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80 pointer-events-none z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-500 mb-4">
            System Architecture
          </h2>
          <p className="text-xl md:text-3xl font-light text-neutral-300 max-w-2xl leading-relaxed">
            A curated index of highly scalable, full-stack digital ecosystems. Hover to explore.
          </p>
        </div>

        {/* Massive Typographic Showcase List */}
        <div className="flex flex-col border-t border-white/10">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            
            return (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-white/10 py-12 md:py-16 transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  
                  {/* Huge Title */}
                  <div className="flex-1">
                    <span className="text-xs font-mono tracking-widest text-neutral-500 block mb-4">
                      {project.id} &mdash; {project.type}
                    </span>
                    <h3 
                      className={`text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] transition-all duration-500 ${
                        isHovered 
                          ? "text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)]" 
                          : isAnyHovered 
                            ? "text-white/20" 
                            : "text-white"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Dynamic Action Panel (Slides out on hover) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      x: isHovered ? 0 : -20,
                      height: isHovered ? "auto" : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="md:w-[400px] flex flex-col gap-6 overflow-hidden md:ml-auto"
                  >
                    {/* Embedded Thumbnail Preview */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-video object-cover rounded-xl border border-white/10 mt-2"
                    />

                    <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                      {project.tagline}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      {/* Read Case Study (Primary) */}
                      <Link 
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                      >
                        Case Study <ArrowRight className="w-4 h-4" />
                      </Link>

                      {/* Live Demo */}
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-neutral-900 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>

                      {/* GitHub */}
                      <a 
                        href={project.links.source} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:text-neutral-400 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" /> GitHub
                      </a>
                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

        {/* The Archive */}
        <div className="mt-48 pb-24">
           <h3 className="text-2xl font-medium tracking-tight text-white mb-12">System Archive</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {ARCHIVE.map((item) => (
               <a 
                 href={item.link} 
                 target="_blank" 
                 rel="noreferrer" 
                 key={item.id} 
                 className="group block p-8 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
               >
                 <h4 className="text-lg font-medium text-white mb-3 flex items-center justify-between">
                   {item.title}
                   <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                 </h4>
                 <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                   {item.desc}
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {item.tech.map(t => (
                     <span key={t} className="text-[10px] tracking-wider uppercase text-neutral-500 font-mono">
                       {t}
                     </span>
                   ))}
                 </div>
               </a>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
