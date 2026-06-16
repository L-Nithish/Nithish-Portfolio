import ScrollReveal from './ScrollReveal.jsx';

const projects = [
  {
    num: '01',
    title: 'Cosmic IQ',
    description: 'Enterprise SaaS platform for AI-powered workforce intelligence, skills mapping, and talent analytics.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    href: '/projects/cosmic-iq',
    liveUrl: 'https://cosmic-iq-98j7.vercel.app',
    isRepoOnly: false,
    image: '/images/cosmic-iq.png',
    type: 'Enterprise SaaS',
  },
  {
    num: '02',
    title: 'Succession AI',
    description: 'AI-powered interview prep ecosystem with resume analysis, mock interviews, coding sandbox, and recruiter tools.',
    tags: ['Next.js', 'Spring Boot', 'WebSocket', 'OpenAI'],
    href: '/projects/succession-ai',
    liveUrl: 'https://succession-ai-s4hp.vercel.app',
    isRepoOnly: false,
    image: '/images/interviewace-ai.png',
    type: 'AI Platform',
  },
  {
    num: '03',
    title: 'DexterStore',
    description: 'Full-stack digital marketplace for premium developer assets — resume templates, UI kits, and coding notes.',
    tags: ['JavaScript', 'Spring Boot', 'PostgreSQL'],
    href: '/projects/dexterstore',
    liveUrl: 'https://dexterstore.netlify.app',
    isRepoOnly: false,
    image: '/images/dexterstore.png',
    type: 'E-Commerce',
  },
  {
    num: '04',
    title: 'Movie Explorer',
    description: 'Movie search app integrating with OMDb API to display film details, ratings, and posters in real-time.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    href: '/projects/movie-explorer',
    liveUrl: 'https://l-nithish.github.io/movie-search-app/',
    isRepoOnly: false,
    image: '/images/movie-explorer.png',
    type: 'Web App',
  },
  {
    num: '05',
    title: 'Cricket Evolution',
    description: 'A premium, highly interactive editorial portal dedicated to teaching the rich history, rules, and formats of cricket, featuring 3D parallax scrolling, interactive DRS simulation, and fluid page transitions.',
    tags: ['Next.js', 'React', 'CSS', 'Vanilla JS'],
    href: '/projects/cricket-evolution',
    liveUrl: 'https://cricket-evolution-l-nithish.vercel.app',
    isRepoOnly: false,
    image: '/images/cricket-evolution.png',
    type: 'Interactive Web App',
  },
];

export default function ProjectList({ showAll = false }) {
  const displayProjects = projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {displayProjects.map((project, index) => (
        <ScrollReveal key={project.num} delay={index * 0.1}>
          <div className="group relative bg-cream-dark border border-charcoal/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-terracotta/20 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
            
            {/* Card Image Area with Floating Zoom */}
            <div className="aspect-[16/10] overflow-hidden bg-cream-dark relative border-b border-charcoal/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay type badge */}
              <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-full bg-charcoal text-cream border border-charcoal/20 z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                {project.type}
              </span>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.06em] uppercase text-green-700 bg-green-50/90 backdrop-blur-md border border-green-200 px-3 py-1 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {project.isRepoOnly ? 'Active Codebase' : 'Live Site'}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              
              {/* Title & Index */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[20px] md:text-[24px] font-700 tracking-[-0.02em] text-charcoal group-hover:text-terracotta transition-colors duration-300" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  {project.title}
                </h3>
                <span className="text-[12px] font-semibold text-charcoal-muted tracking-[0.04em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.num}
                </span>
              </div>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] text-charcoal-light leading-[1.7] mb-6 font-light flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-pill bg-cream-dark/30 border-charcoal/5">{tag}</span>
                ))}
              </div>

              {/* Action Buttons with High-Quality Transitions */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.06em] uppercase py-3 rounded-xl transition-all duration-300 bg-terracotta text-white hover:bg-terracotta-light shadow-md shadow-terracotta/10 hover:shadow-terracotta/20 hover:scale-[1.02]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  {project.isRepoOnly ? 'GitHub Code' : 'Live Website'}
                </a>
                <a
                  href={project.href}
                  className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.06em] uppercase py-3 rounded-xl transition-all duration-300 border border-charcoal/15 text-charcoal-light hover:border-charcoal hover:text-charcoal hover:scale-[1.02]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
