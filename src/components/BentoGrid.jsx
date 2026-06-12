import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Activity, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

// Custom inline SVG for Github (resolves Lucide brand omissions)
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom inline SVG for Linkedin (resolves Lucide brand omissions)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function BentoGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const experience = [
    { year: "2024 - Present", role: "Principal Architect", company: "CoreGrid", desc: "Built 120k req/s Go gateway. Reduced P99 latency by 85%." },
    { year: "2021 - 2024", role: "Senior Engineer", company: "NexusFlow", desc: "Scaled payment ledger core. Optimized Postgres index mappings." },
    { year: "2019 - 2021", role: "Systems Developer", company: "DataSync", desc: "Engineered web scraping pipelines. Cut CI/CD times by 50%." }
  ];

  const technologies = [
    { name: "Go / Rust", level: "95%" },
    { name: "Node / TS", level: "90%" },
    { name: "Kubernetes", level: "85%" },
    { name: "PostgreSQL", level: "90%" }
  ];

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white p-1 font-sans hardware-accelerated select-none"
    >
      {/* Global Spotlight Hover Overlay: Luxury Gold-Emerald Blur */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 170, 0.05), rgba(255, 183, 0, 0.03), transparent 85%)`
        }}
      />

      {/* 1. HERO CELL (Large 2x2) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative col-span-1 md:col-span-2 md:row-span-2 p-8 md:p-12 rounded-[2rem] bg-neutral-950/45 border border-white/5 backdrop-blur-3xl flex flex-col justify-between overflow-hidden group hover:border-emerald/20 transition-all duration-500 z-10 min-h-[380px] glow-emerald"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald/8 transition-colors duration-500" />
        
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[9px] tracking-[0.25em] uppercase font-bold text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Active Node // Nithish Core
          </div>
          <Sparkles className="w-5 h-5 text-gold opacity-50 animate-pulse" />
        </div>

        <div className="space-y-6 my-10">
          <h1 className="text-5xl sm:text-7xl font-sans font-extrabold tracking-tight leading-[0.9] uppercase">
            Nithish<br />
            <span className="font-serif-italic font-normal lowercase text-emerald tracking-normal normal-case">Architect</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-medium">
            Crafting high-scale distributed infrastructures, low-latency microservices, and fluid web environments at the intersection of performance & pure aesthetics.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[9px] font-extrabold tracking-[0.2em] uppercase text-slate-500 border-t border-white/5 pt-6">
          <span className="hover:text-white transition-colors duration-300">Go</span> • 
          <span className="hover:text-white transition-colors duration-300">Rust</span> • 
          <span className="hover:text-white transition-colors duration-300">TypeScript</span> • 
          <span className="hover:text-white transition-colors duration-300">Kubernetes</span> • 
          <span className="hover:text-white transition-colors duration-300">Terraform</span>
        </div>
      </motion.div>

      {/* 2. EXPERIENCE TIMELINE CARD (1x2) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="col-span-1 md:row-span-2 p-8 rounded-[2rem] bg-neutral-950/45 border border-white/5 backdrop-blur-3xl flex flex-col justify-between hover:border-emerald/20 transition-all duration-500 z-10 min-h-[380px]"
      >
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase font-bold text-slate-500 mb-8">
            <Cpu className="w-4 h-4 text-gold" />
            Career Ledger
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="cursor-pointer group/item transition-opacity duration-300"
                onClick={() => setActiveTab(idx)}
                style={{ opacity: activeTab === idx ? 1 : 0.4 }}
              >
                <div className="flex justify-between items-center text-[9px] font-bold tracking-wider mb-1">
                  <span className="text-emerald uppercase">{exp.company}</span>
                  <span className="text-slate-500">{exp.year}</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover/item:text-gold transition-colors duration-300 font-sans">{exp.role}</h3>
                {activeTab === idx && (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="text-[11px] text-slate-400 mt-2.5 leading-relaxed font-medium"
                  >
                    {exp.desc}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

        <a 
          href="/experience" 
          className="flex items-center justify-between text-[9px] font-bold tracking-[0.2em] uppercase text-white hover:text-emerald transition-colors duration-300 border-t border-white/5 pt-5 mt-4"
        >
          View Full Stack <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* 3. CORE METRICS CONSOLE (1x1) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="p-6 rounded-[2rem] bg-neutral-950/45 border border-white/5 backdrop-blur-3xl flex flex-col justify-between hover:border-emerald/20 transition-all duration-500 z-10 min-h-[180px]"
      >
        <div className="flex justify-between items-center">
          <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-500">Telemetry</span>
          <Activity className="w-4 h-4 text-emerald animate-pulse" />
        </div>

        <div className="my-4 space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[9px] text-slate-400 font-bold uppercase">Avg Latency</span>
            <span className="text-2xl font-serif-italic text-emerald tracking-tight font-bold">&lt; 8ms</span>
          </div>
          
          <div className="h-6 w-full flex items-end gap-0.5 overflow-hidden">
            {[40, 55, 30, 70, 60, 85, 45, 95, 35, 100, 75, 55, 40, 85].map((val, idx) => (
              <motion.div 
                key={idx} 
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex-grow bg-emerald/20 rounded-t"
              />
            ))}
          </div>
        </div>

        <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-600">
          Uptime Node: 99.98%
        </span>
      </motion.div>

      {/* 4. TECH COMPETENCY WHEEL (1x1) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="p-6 rounded-[2rem] bg-neutral-950/45 border border-white/5 backdrop-blur-3xl flex flex-col justify-between hover:border-emerald/20 transition-all duration-500 z-10 min-h-[180px]"
      >
        <div className="flex justify-between items-center">
          <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-500">Competencies</span>
          <ShieldCheck className="w-4 h-4 text-gold" />
        </div>

        <div className="my-4 space-y-2.5">
          {technologies.map((t, idx) => (
            <div key={idx} className="space-y-1">
              <div class="flex justify-between text-[9px] font-bold text-slate-400 uppercase">
                <span>{t.name}</span>
                <span className="text-white">{t.level}</span>
              </div>
              <div class="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-emerald to-gold h-full rounded-full" style={{ width: t.level }} />
              </div>
            </div>
          ))}
        </div>

        <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-600">
          Metric Score: Optimal
        </span>
      </motion.div>

      {/* 5. PROJECT ARCHIVE LINK CARD (1x1) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="group/proj p-6 rounded-[2rem] bg-neutral-950/45 border border-white/5 backdrop-blur-3xl flex flex-col justify-between hover:border-emerald/20 transition-all duration-500 z-10 relative overflow-hidden min-h-[180px] glow-gold"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover/proj:opacity-100 transition-opacity duration-300" />
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-500">Vault</span>
          <ExternalLink className="w-4 h-4 text-gold group-hover/proj:translate-x-1 group-hover/proj:-translate-y-1 transition-transform duration-300" />
        </div>

        <div className="my-4 relative z-10">
          <h2 className="text-xl font-serif-italic font-normal tracking-wide text-white leading-tight">
            Case studies &<br />
            <span class="text-gold font-sans font-bold text-base tracking-widest uppercase">blueprints</span>
          </h2>
        </div>

        <a 
          href="/projects" 
          className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold relative z-10"
        >
          Open Vault →
        </a>
      </motion.div>

      {/* 6. CONTACT & SOCIALS CARD (1x1) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="p-6 rounded-[2rem] bg-neutral-950/45 border border-white/5 backdrop-blur-3xl flex flex-col justify-between hover:border-emerald/20 transition-all duration-500 z-10 min-h-[180px]"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-500">Handshake</span>

        <div className="grid grid-cols-3 gap-2 my-4">
          <a href="https://github.com" target="_blank" className="p-3 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-emerald/30 hover:bg-emerald/5 hover:text-emerald transition-all duration-300 flex items-center justify-center">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-gold/30 hover:bg-gold/5 hover:text-gold transition-all duration-300 flex items-center justify-center">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="mailto:nithish@system.io" className="p-3 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-emerald/30 hover:bg-emerald/5 hover:text-emerald transition-all duration-300 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-600">
          State: Encryption Active
        </span>
      </motion.div>
    </div>
  );
}
