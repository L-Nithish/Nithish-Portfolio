"use client";

import { motion } from "framer-motion";

export function ContactScene() {
  return (
    <section className="w-full bg-black py-32 md:py-48 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="grid md:grid-cols-12 gap-16 md:gap-12">
          
          {/* Left Side: Editorial info */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 block mb-6">Let's build</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
                Have a project<br/> in mind?
              </h2>
              <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-sm">
                Have a challenging technical problem or need an engineered solution? Fill out the brief, or reach out directly via email.
              </p>
              
              <a
                href="mailto:agentnithish233@gmail.com"
                className="group inline-flex items-center gap-4 text-neutral-300 hover:text-white transition-colors duration-300"
              >
                <span className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span className="text-lg tracking-tight font-medium">agentnithish233@gmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-6 md:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <form 
                id="premium-contact-form"
                className="space-y-12"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = fd.get('name');
                  const email = fd.get('email');
                  const message = fd.get('message');
                  const subject = encodeURIComponent(`Project Inquiry from ${name}`);
                  const body = encodeURIComponent(`Hi Nithish,\n\nI would like to discuss a project with you.\n\nProject Details:\n${message}\n\nMy Contact Email: ${email}\n\nBest regards,\n${name}`);
                  window.location.href = `mailto:agentnithish233@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="relative group">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 transition-colors group-focus-within:text-white">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl text-white focus:border-white focus:outline-none transition-colors placeholder:text-neutral-700 font-light"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 transition-colors group-focus-within:text-white">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    placeholder="Your Email Address"
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl text-white focus:border-white focus:outline-none transition-colors placeholder:text-neutral-700 font-light"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 transition-colors group-focus-within:text-white">Your Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required
                    placeholder="Tell me about what you want to build..."
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl text-white focus:border-white focus:outline-none transition-colors placeholder:text-neutral-700 resize-none font-light"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 text-sm font-bold tracking-widest uppercase px-10 py-6 rounded-2xl bg-white text-black hover:scale-[1.02] transition-transform duration-300 cursor-pointer mt-4"
                >
                  Submit Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-32 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-neutral-900">
        <span className="text-sm font-mono tracking-widest text-neutral-600 uppercase">
          © 2026 Nithish.
        </span>
        <div className="flex items-center gap-8">
          <a href="https://github.com/l-nithish" target="_blank" rel="noreferrer" className="text-sm font-mono tracking-widest text-neutral-600 hover:text-white uppercase transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-mono tracking-widest text-neutral-600 hover:text-white uppercase transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
