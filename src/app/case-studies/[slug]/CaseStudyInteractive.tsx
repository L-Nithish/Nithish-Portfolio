"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function CaseStudyInteractive({ project }: { project: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    // Create a 3D flying text effect using ScrollTrigger
    const sections = gsap.utils.toArray(".narrative-section") as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=10000", // Much longer scroll for 5 sections
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    sections.forEach((section, index) => {
      // Initial state: entire section deep in the background
      // Rely solely on Z-translation for perspective, remove 'scale' to prevent excessive zooming
      gsap.set(section, { 
        z: -3000, 
        opacity: 0,
        force3D: true 
      });

      // Animate the entire section as one block
      tl.to(section, {
        z: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      })
      // Hold on screen
      .to(section, {
        z: 200,
        duration: 2,
        ease: "none"
      })
      // Fly past camera
      .to(section, {
        z: 1500,
        opacity: 0,
        duration: 2,
        ease: "power2.in"
      });
    });

  }, { scope: containerRef });

  return (
    <main className="bg-[#020202] text-white font-sans selection:bg-white selection:text-black min-h-screen">
      
      {/* Navigation Bar (Fixed to Top) */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between mix-blend-difference pointer-events-none">
        <Link 
          href="/" 
          className="group pointer-events-auto inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>
        <div className="flex gap-6 pointer-events-auto">
          <a href={project.links.live} target="_blank" rel="noreferrer" className="text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Live Demo</a>
          <a href={project.links.source} target="_blank" rel="noreferrer" className="text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">GitHub</a>
        </div>
      </nav>

      {/* 
        ========================================
        3D NARRATIVE SCROLL CONTAINER
        ========================================
      */}
      <div 
        ref={containerRef} 
        className="h-screen w-full flex items-center justify-center overflow-hidden relative"
        style={{ perspective: "1500px" }}
      >
        {/* Ambient Dark Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,15,15,1)_0%,rgba(0,0,0,1)_100%)] z-0 pointer-events-none" />
        
        <div ref={wrapperRef} className="relative z-10 w-full h-full flex items-center justify-center transform-style-3d will-change-transform">
          
          {/* Section 1: Title & Hero */}
          <div className="narrative-section absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center pointer-events-none will-change-transform">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center px-4">
              <span className="text-sm md:text-base font-mono tracking-[0.5em] text-neutral-400 font-bold uppercase mb-8 drop-shadow-lg">
                {project.type}
              </span>
              <h1 className="w-full text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] text-balance">
                {project.title}
              </h1>
              <p className="w-full text-xl md:text-3xl lg:text-4xl text-neutral-300 font-medium max-w-4xl leading-relaxed drop-shadow-xl">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Section 2: The Context */}
          <div className="narrative-section absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center pointer-events-none will-change-transform">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center px-4">
              <span className="text-sm md:text-base font-mono tracking-[0.5em] text-neutral-500 font-bold uppercase mb-8">
                Chapter 01 &mdash; The Context
              </span>
              <p className="w-full text-3xl md:text-4xl lg:text-5xl text-white font-bold max-w-5xl leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                "{project.context}"
              </p>
            </div>
          </div>

          {/* Section 3: The Problem */}
          <div className="narrative-section absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center pointer-events-none will-change-transform">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center px-4">
              <span className="text-sm md:text-base font-mono tracking-[0.5em] text-red-500 font-bold uppercase mb-8">
                Chapter 02 &mdash; The Problem
              </span>
              <p className="w-full text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 drop-shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Section 4: The Solution & Architecture */}
          <div className="narrative-section absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center pointer-events-none will-change-transform">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center px-4">
              <span className="text-sm md:text-base font-mono tracking-[0.5em] text-emerald-500 font-bold uppercase mb-8">
                Chapter 03 &mdash; The Solution
              </span>
              <p className="w-full text-2xl md:text-4xl lg:text-5xl text-white font-bold max-w-5xl leading-tight mb-12 drop-shadow-2xl">
                {project.solution}
              </p>
              <p className="w-full text-lg md:text-2xl lg:text-3xl text-emerald-400 font-bold max-w-4xl leading-relaxed drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] bg-emerald-950/30 p-8 rounded-3xl border border-emerald-500/20">
                &gt; Architecture: {project.architecture}
              </p>
            </div>
          </div>

          {/* Section 5: The Outcome & Action */}
          <div className="narrative-section absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center pointer-events-none will-change-transform">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center px-4">
              <span className="text-sm md:text-base font-mono tracking-[0.5em] text-blue-500 font-bold uppercase mb-8">
                Chapter 04 &mdash; The Outcome
              </span>
              <h2 className="w-full text-4xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-5xl leading-tight mb-12 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-600 drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
                {project.outcome}
              </h2>
              
              <div className="flex flex-wrap gap-6 mt-8 pointer-events-auto justify-center">
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" /> Live Deployment
                </a>
                <a 
                  href={project.links.source} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-neutral-900/50 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" /> Source Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
