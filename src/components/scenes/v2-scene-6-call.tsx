"use client";

import { motion } from "framer-motion";

export function CallScene() {
  return (
    <section className="relative h-screen w-full bg-white flex flex-col items-center justify-center text-black selection:bg-black selection:text-white">
      
      <div className="z-10 text-center max-w-4xl px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-12">
            Let's build.
          </h2>
        </motion.div>

        <motion.a
          href="mailto:agentnithish233@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-black text-white rounded-full font-medium text-2xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            agentnithish233@gmail.com
          </span>
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex gap-8 font-mono text-sm uppercase tracking-widest text-neutral-400"
        >
          <a href="https://github.com/l-nithish" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
        </motion.div>
      </div>

    </section>
  );
}
