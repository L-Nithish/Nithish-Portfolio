"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const HEADLINERS = [
  {
    id: "01",
    title: "QuantumOS",
    type: "AI-Powered Enterprise OS & SaaS",
    tagline: "A spatial SaaS workspace and collaborative execution environment powered by custom natural-language AI agent pipelines.",
    context: "SaaS workspaces are often fragmented, separating project planning, task management, system configuration, and AI chat into disjointed tabs.",
    problem: "Needed a unified, immersive, and high-performance environment that integrates collaborative tasks with dynamic, state-mutating AI agents and a simulated spatial OS.",
    solution: "Architected a dual-architecture environment: a modern SaaS dashboard integrated with an interactive spatial desktop environment. Built a Spring Boot API with a custom natural language processor that mutates the live Neon.tech PostgreSQL database on standard chat prompts.",
    outcome: "Created a unified workspace hosting live taskboards, personalized settings, a secure, dynamic login flow, and a mock desktop OS featuring custom terminal shell and window managers.",
    architecture: "Enterprise-grade Spring Boot backend exposing security APIs and custom AI command endpoints, connected to a highly responsive React/Vite frontend with dynamic local storage cache and spring transactions.",
    features: ["Natural Language DB Mutation Agent", "Personalized Lock Screen & Desktop VFS", "ACID-compliant Live Project/Task Boards"],
    tech: ["Java", "Spring Boot", "React", "Vite", "Neon.tech", "PostgreSQL", "Framer Motion", "Tailwind CSS"],
    links: { live: "https://quantum-os-lyart.vercel.app", source: "https://github.com/L-Nithish/QuantumOS" },
    technicalDecisions: "Pioneered a rule-based AI processing layer directly within backend services to bypass expensive, high-latency LLM polling for routine workspace mutations, driving response times to sub-50ms."
  },
  {
    id: "02",
    title: "Succession AI",
    type: "Real-Time AI Ecosystem",
    tagline: "An event-driven developer sandbox and real-time AI mock interview coaching workspace.",
    context: "Technical interview preparation often lacks real-time, context-aware, and dynamic feedback.",
    problem: "Standard HTTP request-response cycles are too slow for real-time interview coaching, breaking the conversational immersion.",
    solution: "Engineered a low-latency communication layer using WebSockets (STOMP brokers) and integrated the OpenAI Chat Completion API for dynamic resume parsing.",
    outcome: "Created a highly responsive mock interview ecosystem featuring an in-browser coding sandbox and comprehensive recruiter dashboards.",
    architecture: "Event-driven system design leveraging STOMP message brokers to manage bi-directional, full-duplex communication between Next.js and Spring Boot.",
    features: ["In-Browser Syntax Validation Sandbox", "Dynamic OpenAI Question Generation", "Live WebSocket Chat Ecosystem"],
    tech: ["Next.js 14", "Spring Boot", "WebSockets (STOMP)", "OpenAI API", "PostgreSQL"],
    links: { live: "https://succession-ai-s4hp.vercel.app", source: "https://github.com/l-nithish/succession-ai" },
    technicalDecisions: "Traditional HTTP polling is too slow for conversational AI. Implemented STOMP over WebSockets to maintain persistent full-duplex channels, dropping latency down to sub-100ms for coding sandbox execution."
  },
  {
    id: "03",
    title: "DexterStore",
    type: "Digital Marketplace",
    tagline: "A secure, decoupled e-commerce storefront for selling web templates and code assets.",
    context: "Developers require a reliable, premium marketplace to buy and sell sophisticated code templates and UI assets.",
    problem: "Managing transactional integrity, user sessions, and catalog filtering in a tightly coupled monolith leads to scalability bottlenecks.",
    solution: "Structured a deeply decoupled architecture connecting an interactive React frontend with a highly secure, RESTful Spring Boot backend utilizing Hibernate.",
    outcome: "Launched a complete e-commerce solution with guaranteed transactional cart persistence and seamless, secure checkout flows.",
    architecture: "Strict separation of concerns. The React storefront operates entirely independently from the Spring Boot transaction engine, connected via secure API gateways.",
    features: ["Real-time Catalog Filtering", "Transactional Cart Persistence", "Secure Administrative Dashboards"],
    tech: ["React", "Spring Boot", "REST APIs", "Hibernate", "Tailwind CSS"],
    links: { live: "https://dexterstore.netlify.app", source: "https://github.com/l-nithish/dexterstore" },
    technicalDecisions: "Cart state persistence and transactional integrity were paramount. Chose Hibernate for strict ACID compliance on the backend, while leaving the React storefront completely stateless and deeply cacheable."
  },
  {
    id: "04",
    title: "Cricket Evolution",
    type: "Interactive Editorial Portal",
    tagline: "An immersive digital history portal exploring five centuries of cricket laws and milestones.",
    context: "Cricket history, rules, and legendary statistics are highly complex and dry, making it difficult for modern fans to engage with the sport's origins.",
    problem: "Standard data portals and wikis are text-heavy and fail to capture the visual drama and storytelling of five centuries of the sport.",
    solution: "Engineered an interactive Next.js portal featuring a custom multi-view navigation system, animated DRS rulebooks, and visual Hall of Fame legend cards.",
    outcome: "Delivered a cinematic, responsive sports encyclopedia that transforms centuries of history into a premium digital storytelling experience.",
    architecture: "Component-driven view mapping built on Next.js client-side rendering with animated page enter transitions.",
    features: ["Multi-View Slide Drawer Navigation", "DRS Rulebook Interactive Guides", "Hall of Fame Legends Directory"],
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "JavaScript", "Framer Motion"],
    links: { live: "https://cricket-evolution-alpha.vercel.app", source: "https://github.com/l-nithish/cricket-evolution" },
    technicalDecisions: "Utilized Next.js client component state routing to create a single-page app feel with instant view-switching, loading sub-sections dynamically without full-page reloads."
  }
];

const ARCHIVE = [
  {
    id: "05",
    title: "Movie Explorer",
    desc: "A masterclass in lightweight, dependency-free JavaScript execution. Engineered a highly optimized async/await engine to query external OMDb APIs without blocking the main thread.",
    tech: ["Vanilla JS (ES6)", "REST APIs", "CSS3"],
    link: "https://l-nithish.github.io/movie-search-app/"
  }
];

export function CaseStudiesScene() {
  return (
    <section className="w-full bg-black py-32 md:py-48">
      
      {/* Headliner Product Launches */}
      <div className="w-full space-y-[45vh] mb-64">
        {HEADLINERS.map((project) => (
          <ProjectCaseStudy key={project.id} project={project} />
        ))}
      </div>

      {/* The Archive */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 border-t border-neutral-900 pt-32">
        <h3 className="text-3xl font-bold tracking-tighter text-white mb-12">Foundations & Archive</h3>
        <div className="flex flex-col gap-6">
          {ARCHIVE.map((item) => (
            <a href={item.link} target="_blank" rel="noreferrer" key={item.id} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-2xl border border-neutral-800/50 hover:bg-neutral-900/30 transition-colors block cursor-pointer">
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-mono text-xs text-neutral-600">{item.id}</span>
                  <h4 className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors flex items-center gap-2">
                    {item.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-black border border-neutral-800 rounded text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}

function ProjectCaseStudy({ project }: { project: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Physics: compute scroll progress offset bounded to container scroll range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slow parallax vertical translation of the image inside the browser frame container
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div id={`project-${project.id}`} className="flex flex-col w-full relative">
      
      {/* 1. Project Identity / Name & Product Positioning */}
      <div className="flex flex-col justify-center items-center text-center px-6 pt-16 pb-12 select-none">
        <span className="font-mono text-sm text-neutral-600 tracking-[0.25em] mb-4">
          // {project.id}
        </span>
        <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-6">
          {project.title}
        </h3>
        <p className="text-lg md:text-xl font-light text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* 2. Large Immersive Product Visual wrapped in Premium Browser Chrome */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="relative w-full rounded-2xl border border-neutral-900 bg-neutral-950 overflow-hidden shadow-2xl transition-shadow duration-500 ease-out hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] cursor-pointer group"
        >
          {/* macOS Browser Header Chrome */}
          <div className="h-11 border-b border-neutral-900 bg-neutral-950 px-4 flex items-center justify-between select-none">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5 w-1/4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/60 group-hover:bg-[#FF5F57] transition-colors duration-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/60 group-hover:bg-[#FEBC2E] transition-colors duration-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/60 group-hover:bg-[#28C840] transition-colors duration-300" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center justify-center w-1/2">
              <div className="flex items-center justify-center bg-neutral-900/40 border border-neutral-800/30 rounded-lg px-4 py-1 max-w-[280px] w-full text-center">
                <Lock className="w-2.5 h-2.5 text-neutral-600 mr-1.5 shrink-0" />
                <span className="text-[11px] font-mono text-neutral-500 tracking-wide select-all overflow-hidden text-ellipsis whitespace-nowrap">
                  {project.id === "01" ? "workspace.quantumos.dev" :
                   project.id === "02" ? "succession-ai.nithish.dev" :
                   project.id === "03" ? "store.nithish.dev" :
                   "cricket.nithish.dev"}
                </span>
              </div>
            </div>

            {/* Window Utilities Placeholder (Empty for symmetry) */}
            <div className="flex justify-end gap-1.5 w-1/4 opacity-20">
              <div className="w-1 h-1 rounded-full bg-neutral-600" />
              <div className="w-1 h-1 rounded-full bg-neutral-600" />
              <div className="w-1 h-1 rounded-full bg-neutral-600" />
            </div>
          </div>

          {/* Browser Viewport with Parallax Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070708]">
            <motion.img 
              style={{ y }}
              src={
                project.id === "01" ? "/images/quantumos.png" :
                project.id === "02" ? "/images/succession_ai.png" :
                project.id === "03" ? "/images/dexterstore.png" :
                "/images/cricket_evolution.png"
              } 
              alt={`${project.title} Software Interface Mockup`}
              className="absolute -top-[5%] left-0 w-full h-[110%] object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500 will-change-transform"
            />
            
            {/* Gloss and Inner Border Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent border border-white/[0.02] rounded-b-2xl" />
          </div>
        </motion.div>
      </div>

      {/* 3. Action Row (Demo, Code, Tech Badges) */}
      <div className="max-w-5xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-6 py-12 select-none">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <a 
            href={project.links.live} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase bg-white text-black px-6 py-3.5 rounded-xl hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-[transform,background-color,border-color] duration-300 shadow-md cursor-pointer"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          
          <a 
            href={project.links.source} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase bg-neutral-950 border border-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700 hover:scale-[1.02] active:scale-[0.98] px-6 py-3.5 rounded-xl transition-[transform,background-color,border-color] duration-300 cursor-pointer"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1.5 rounded-lg border border-neutral-900 bg-neutral-950 text-[10px] font-mono tracking-wider text-neutral-500 uppercase select-none">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Narrative (Context, Problem, Solution, Outcome/Impact) */}
      <div className="max-w-5xl mx-auto px-6 w-full mt-8 space-y-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <StoryBlock title="Context" text={project.context} />
          <StoryBlock title="The Problem" text={project.problem} />
          <StoryBlock title="The Solution" text={project.solution} />
          <StoryBlock title="The Impact" text={project.outcome} highlight />
        </div>

        {/* 5. Systems Architecture & Pipeline (Secondary supporting evidence) */}
        <div className="border-t border-neutral-900 pt-20 space-y-16">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">System Architecture</h4>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
              {project.architecture}
            </p>
          </div>

          {/* Animated SVG Blueprint */}
          <div className="w-full aspect-[16/9] rounded-[2rem] border border-neutral-900 bg-neutral-950/40 flex items-center justify-center overflow-hidden py-8 px-4 select-none">
            {project.id === "01" && <QuantumOSDiagram />}
            {project.id === "02" && <SuccessionAIDiagram />}
            {project.id === "03" && <DexterStoreDiagram />}
            {project.id === "04" && <CricketEvolutionDiagram />}
          </div>
          
          {/* Decisions & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">Technical Decisions</h4>
              <p className="text-base font-light leading-relaxed text-neutral-400">
                {project.technicalDecisions}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">Key Engineering Features</h4>
              <ul className="space-y-3">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-base font-light text-neutral-300">
                    <div className="w-1 h-1 bg-neutral-600 rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function StoryBlock({ title, text, highlight = false }: { title: string, text: string, highlight?: boolean }) {
  return (
    <div className={`p-8 md:p-10 rounded-2xl ${highlight ? 'border border-neutral-900 bg-neutral-950/20' : ''}`}>
      <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">{title}</h4>
      <p className={`text-xl font-light leading-relaxed tracking-tight ${highlight ? 'text-white font-medium' : 'text-neutral-400'}`}>
        {text}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* ── ANIMATED SVG ARCHITECTURE DIAGRAMS ── */
/* ──────────────────────────────────────────────────────────────────────── */

const DIAGRAM_STYLE = `
  @keyframes strokePulse {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -20; }
  }
  @keyframes glowBreathing {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 0.85; }
  }
  @keyframes componentPulse {
    0%, 100% { border-color: rgba(63, 63, 70, 0.4); box-shadow: 0 0 0px rgba(255,255,255,0); }
    50% { border-color: rgba(255, 255, 255, 0.4); box-shadow: 0 0 10px rgba(255,255,255,0.05); }
  }
  .diag-line-pulse {
    stroke-dasharray: 6, 4;
    animation: strokePulse 1s linear infinite;
  }
  .diag-glow {
    animation: glowBreathing 3s ease-in-out infinite;
  }
  .diag-component {
    animation: componentPulse 4s ease-in-out infinite;
  }
`;

function QuantumOSDiagram() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-4">
      <style>{DIAGRAM_STYLE}</style>
      <div className="w-full text-center mb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500">Spatial SaaS & AI Database Pipeline</span>
      </div>
      <div className="flex-grow w-full relative">
        <svg className="w-full h-full min-h-[220px]" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 160 110 L 250 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 160 110 L 250 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 370 110 L 460 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 370 110 L 460 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 580 110 L 670 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 580 110 L 670 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <rect x="40" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="100" y="95" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">React / Vite</text>
          <text x="100" y="115" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">SaaS & OS UI</text>
          <text x="100" y="138" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">Local Storage</text>
          <rect x="250" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="310" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">Spring Boot</text>
          <text x="310" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">REST Security</text>
          <text x="310" y="138" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">JWT Validator</text>
          <rect x="460" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="diag-component" />
          <text x="520" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">AI Agent Engine</text>
          <text x="520" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">SQL Cmd Parser</text>
          <text x="520" y="138" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">JPA Mutator</text>
          <rect x="670" y="60" width="90" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <path d="M 685 85 C 685 80, 745 80, 745 85 L 745 135 C 745 140, 685 140, 685 135 Z" fill="#18181b" stroke="#52525b" strokeWidth="1.5" className="diag-glow" />
          <path d="M 685 85 C 685 90, 745 90, 745 85" stroke="#52525b" strokeWidth="1.5" />
          <path d="M 685 102 C 685 107, 745 107, 745 102" stroke="#52525b" strokeWidth="1.5" />
          <text x="715" y="148" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">Neon.tech DB</text>
        </svg>
      </div>
    </div>
  );
}

function SuccessionAIDiagram() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-4">
      <style>{DIAGRAM_STYLE}</style>
      <div className="w-full text-center mb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500">Low-Latency WebSockets & AI Pipeline</span>
      </div>
      <div className="flex-grow w-full relative">
        <svg className="w-full h-full min-h-[220px]" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 160 110 Q 300 70 480 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 160 110 Q 300 70 480 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 480 110 Q 300 150 160 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 480 110 Q 300 150 160 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 530 60 L 530 45 L 360 45 L 360 60" stroke="#262626" strokeWidth="1.5" strokeDasharray="4,4" />
          <rect x="40" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="100" y="100" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">Next.js 14</text>
          <text x="100" y="125" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">App Client</text>
          <circle cx="320" cy="110" r="28" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <circle cx="320" cy="110" r="14" fill="#18181b" stroke="#71717a" strokeWidth="1" className="diag-glow" />
          <text x="320" y="113" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">STOMP</text>
          <rect x="480" y="60" width="100" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="530" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">Spring Boot</text>
          <text x="530" y="125" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">WebSocket</text>
          <rect x="310" y="5" width="100" height="40" rx="8" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="diag-glow" />
          <text x="360" y="24" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace">OpenAI API</text>
        </svg>
      </div>
    </div>
  );
}

function DexterStoreDiagram() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-4">
      <style>{DIAGRAM_STYLE}</style>
      <div className="w-full text-center mb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500">Decoupled Transaction Engine</span>
      </div>
      <div className="flex-grow w-full relative">
        <svg className="w-full h-full min-h-[220px]" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 160 110 L 250 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 160 110 L 250 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 370 110 L 460 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 370 110 L 460 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 580 110 L 670 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 580 110 L 670 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <rect x="40" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="100" y="95" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">React UI</text>
          <text x="100" y="115" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">Storefront</text>
          <rect x="250" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="310" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">Spring REST</text>
          <text x="310" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">Controllers</text>
          <rect x="460" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="diag-component" />
          <text x="520" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">Hibernate ORM</text>
          <text x="520" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">JPA Session</text>
          <rect x="670" y="60" width="90" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <circle cx="715" cy="95" r="16" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
          <circle cx="715" cy="115" r="16" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
          <text x="715" y="148" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">MySQL</text>
        </svg>
      </div>
    </div>
  );
}

function CricketEvolutionDiagram() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-4">
      <style>{DIAGRAM_STYLE}</style>
      <div className="w-full text-center mb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500">Component-Driven View Mapping & Render State</span>
      </div>
      <div className="flex-grow w-full relative">
        <svg className="w-full h-full min-h-[220px]" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 160 110 L 250 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 160 110 L 250 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 370 110 L 460 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 370 110 L 460 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <path d="M 580 110 L 670 110" stroke="#262626" strokeWidth="1.5" />
          <path d="M 580 110 L 670 110" stroke="#a3a3a3" strokeWidth="1.5" className="diag-line-pulse" />
          <rect x="40" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="100" y="95" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">Next Nav Link</text>
          <text x="100" y="115" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="medium">User Click</text>
          <text x="100" y="138" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">View Switcher</text>
          <rect x="250" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <text x="310" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">State Controller</text>
          <text x="310" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">activeView State</text>
          <text x="310" y="138" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">Callback Trigger</text>
          <rect x="460" y="60" width="120" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="diag-component" />
          <text x="520" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace">VIEW_MAP Loader</text>
          <text x="520" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">Dynamic Import</text>
          <text x="520" y="138" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">ActiveComponent</text>
          <rect x="670" y="60" width="90" height="100" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <rect x="680" y="75" width="70" height="15" rx="4" fill="#18181b" stroke="#52525b" strokeWidth="1" />
          <rect x="680" y="95" width="70" height="15" rx="4" fill="#18181b" stroke="#52525b" strokeWidth="1" />
          <rect x="680" y="115" width="70" height="15" rx="4" fill="#18181b" stroke="#52525b" strokeWidth="1" />
          <text x="715" y="148" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">Render Subviews</text>
        </svg>
      </div>
    </div>
  );
}
