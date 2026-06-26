"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const CAPABILITIES = [
  {
    id: "01",
    title: "Backend Systems",
    tech: ["Java", "Spring Boot", "Microservices", "Concurrency", "Multithreading"],
    description: "Designing high-concurrency, multithreaded systems in Java. Structuring resilient microservice patterns built for security, high throughput, and elastic horizontal scaling."
  },
  {
    id: "02",
    title: "API Architecture",
    tech: ["RESTful APIs", "WebSockets (STOMP)", "Spring Security", "JWT Rotations", "API Gateways"],
    description: "Enforcing zero-trust security boundaries with silent, stateless JWT token rotation. Implementing real-time, bi-directional full-duplex communication channels via WebSockets."
  },
  {
    id: "03",
    title: "Data Engineering",
    tech: ["PostgreSQL", "MySQL", "Hibernate ORM", "Spring Data JPA", "Query Optimization"],
    description: "Modeling strict transactional relational database structures. Optimizing query execution plans, indexing strategies, and Hibernate JPA persistence layers for absolute data integrity."
  },
  {
    id: "04",
    title: "Modern Frontends",
    tech: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    description: "Bridging the architectural gap with cinematic, state-driven frontends. Orchestrating client render trees and smooth 60fps animations tied directly to spring physics."
  }
];

export function CapabilitiesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative w-full bg-black py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">
        
        {/* Sticky Editorial Header */}
        <div className="lg:w-1/3">
          <div className="sticky top-40 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none">
                Engineering<br/>Capabilities.
              </h2>
              <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-sm">
                A curated full-stack toolkit built for high throughput, robust security boundaries, and premium, motion-rich user experiences.
              </p>
              <div className="w-12 h-[1px] bg-neutral-800" />
            </motion.div>
          </div>
        </div>

        {/* Editorial Numbered List */}
        <div className="lg:w-2/3 flex flex-col">
          {CAPABILITIES.map((cap, index) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-b border-neutral-800/80 py-12 md:py-16 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 transition-colors duration-500"
            >
              {/* Index & Title column */}
              <div className="md:col-span-5 flex items-start gap-6">
                <span className="font-mono text-base text-neutral-600 group-hover:text-white transition-colors duration-500 select-none pt-1">
                  {cap.id}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-500">
                  {cap.title}
                </h3>
              </div>

              {/* Description & Badges column */}
              <div className="md:col-span-7 flex flex-col gap-6 md:pl-4">
                <p className="text-neutral-400 text-lg font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {cap.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-md border border-neutral-900 bg-neutral-950 text-[10px] font-mono tracking-wider text-neutral-500 group-hover:border-neutral-800 group-hover:text-neutral-300 transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle accent hover indicator line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-500 group-hover:w-full transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
