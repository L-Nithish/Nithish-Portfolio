import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:text-neutral-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="flex gap-4">
          <a href={project.links.live} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-neutral-500 transition-colors">Live Demo</a>
          <a href={project.links.source} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-neutral-500 transition-colors">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-32">
        <span className="text-neutral-400 font-mono text-sm tracking-[0.2em] mb-8 block uppercase">
          {project.type}
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none mb-12">
          {project.title}
        </h1>
        <p className="text-2xl md:text-3xl text-neutral-500 font-light max-w-3xl leading-snug">
          {project.tagline}
        </p>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] relative bg-neutral-100">
        <img 
          src={project.image} 
          alt={`${project.title} interface preview`} 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Deep Dive Content */}
      <article className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Sticky Metadata Sidebar */}
        <aside className="md:col-span-4 lg:col-span-3 space-y-12">
          <div className="sticky top-12">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-4">Core Tech Stack</h4>
              <ul className="space-y-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="text-base font-medium text-neutral-800">{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-4">Domain</h4>
              <p className="text-base font-medium text-neutral-800">{project.domain}</p>
            </div>

            <div className="mt-16 flex flex-col gap-4">
               <a 
                 href={project.links.live} 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
               >
                 <span>Visit Live Site</span>
                 <ExternalLink className="w-4 h-4" />
               </a>
               <a 
                 href={project.links.source} 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-transparent border border-neutral-200 text-neutral-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors"
               >
                 <FaGithub className="w-4 h-4" />
                 <span>View Source Code</span>
               </a>
            </div>
          </div>
        </aside>

        {/* Narrative */}
        <div className="md:col-span-8 lg:col-span-9 space-y-24">
          <section>
            <h2 className="text-3xl font-medium tracking-tight mb-8">The Context</h2>
            <p className="text-xl leading-relaxed text-neutral-600 font-light">
              {project.context}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-medium tracking-tight mb-8">The Problem</h2>
            <p className="text-xl leading-relaxed text-neutral-600 font-light">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-medium tracking-tight mb-8">The Solution</h2>
            <p className="text-xl leading-relaxed text-neutral-600 font-light">
              {project.solution}
            </p>
          </section>

          <section className="bg-neutral-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-medium tracking-tight mb-8">Technical Architecture</h2>
            <p className="text-xl leading-relaxed text-neutral-600 font-light mb-8">
              {project.architecture}
            </p>
            <div>
              <h4 className="text-sm font-medium mb-4">Key Engineering Decisions:</h4>
              <p className="text-lg leading-relaxed text-neutral-600 font-light italic">
                "{project.technicalDecisions}"
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium tracking-tight mb-8">The Outcome</h2>
            <p className="text-xl leading-relaxed text-neutral-900 font-medium">
              {project.outcome}
            </p>
          </section>
        </div>

      </article>

    </main>
  );
}
