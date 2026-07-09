"use client";

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface Logo {
  id: string;
  name: string;
  icon: string;
}

const LOGOS: Logo[] = [
  { id: 'java', name: 'Java', icon: '/logos/java.svg' },
  { id: 'react', name: 'React', icon: '/logos/react_dark.svg' },
  { id: 'gemini', name: 'Gemini', icon: '/logos/gemini.svg' },
  { id: 'claude', name: 'Claude AI', icon: '/logos/claude-ai-icon.svg' },
  { id: 'vscode', name: 'VS Code', icon: '/logos/vscode.svg' },
  { id: 'docker', name: 'Docker', icon: '/logos/docker.svg' },
  { id: 'github', name: 'GitHub', icon: '/logos/github_dark.svg' },
  { id: 'postgresql', name: 'PostgreSQL', icon: '/logos/postgresql.svg' },
  { id: 'mysql', name: 'MySQL', icon: '/logos/mysql-icon-dark.svg' },
  { id: 'n8n', name: 'n8n', icon: '/logos/n8n.svg' },
  { id: 'javascript', name: 'JavaScript', icon: '/logos/javascript.svg' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: '/logos/tailwindcss.svg' },
  { id: 'figma', name: 'Figma', icon: '/logos/figma.svg' },
  { id: 'framer', name: 'Framer', icon: '/logos/framer.svg' },
  { id: 'intellij', name: 'IntelliJ IDEA', icon: '/logos/intellijidea.svg' },
  { id: 'nextjs', name: 'Next.js', icon: '/logos/nextjs_icon_dark.svg' },
  { id: 'vercel', name: 'Vercel', icon: '/logos/vercel_dark.svg' },
  { id: 'html5', name: 'HTML5', icon: '/logos/html5.svg' },
  { id: 'css3', name: 'CSS3', icon: '/logos/css_old.svg' },
  { id: 'antigravity', name: 'Antigravity', icon: '/logos/antigravity.svg' },
];

const LogoBand: React.FC = () => {
  const bandRef = useRef<HTMLDivElement>(null);
  const logoElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef({ value: 0 });

  const getResponsiveRadius = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1440) return 560;
    if (w >= 1280) return 500;
    if (w >= 1024) return 420;
    if (w >= 768) return 350;
    return 280;
  }, []);

  const getLogoSize = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1280) return 150;
    if (w >= 1024) return 124;
    if (w >= 768) return 100;
    return 76;
  }, []);

  useEffect(() => {
    const count = LOGOS.length;
    const angleStep = (2 * Math.PI) / count;

    const update = () => {
      const radius = getResponsiveRadius();
      const logoSize = getLogoSize();

      logoElsRef.current.forEach((el, i) => {
        if (!el) return;

        const theta = angleRef.current.value + i * angleStep;

        const x = radius * Math.sin(theta);
        const z = radius * Math.cos(theta);

        const depthNorm = (z + radius) / (2 * radius);
        const scale = 0.5 + depthNorm * 0.6;
        const opacity = 0.15 + depthNorm * 0.85; // Increased contrast for depth instead of blur
        const rotateY = (x / radius) * 35;
        const zIndex = Math.round(depthNorm * 20);
        
        // Base size is 150, calculate the scale factor based on the responsive logoSize
        const scaleAmount = (logoSize * scale) / 150;

        // Use scale() instead of mutating width/height to prevent massive layout recalculations (fixes lag)
        el.style.transform = `translate3d(${x}px, 0px, 0px) scale(${scaleAmount}) rotateY(${rotateY}deg)`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${zIndex}`;
        el.style.filter = `saturate(1.4) brightness(1.15)`;
      });
    };

    const tween = gsap.to(angleRef.current, {
      value: `+=${Math.PI * 2}`,
      duration: 55,
      ease: 'none',
      repeat: -1,
      onUpdate: update,
    });

    // Optimize: Pause the heavy 3D animation when not in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tween.play();
        } else {
          tween.pause();
        }
      });
    });

    if (bandRef.current) {
      observer.observe(bandRef.current);
    }

    update();
    const handleResize = () => update();
    window.addEventListener('resize', handleResize);

    return () => {
      tween.kill();
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [getResponsiveRadius, getLogoSize]);

  return (
    <div
      ref={bandRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0"
      style={{
        marginTop: '10vh',
        perspective: '1000px',
      }}
      aria-hidden="true"
    >
      {LOGOS.map((logo, i) => (
        <div
          key={logo.id}
          ref={(el) => {
            logoElsRef.current[i] = el;
          }}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none"
          style={{
            width: 150,
            height: 150,
            opacity: 0,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Standard img tag avoids Next.js Image caching/flickering on heavy 3D transforms */}
          <img
            src={logo.icon}
            alt={logo.name}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export function PrologueScene() {
  return (
    <section 
      className="relative w-full bg-black select-none z-10" 
      aria-label="Hero introduction"
      style={{
        // Force the entire hero section into a dedicated GPU composite layer
        // This prevents the expensive 3D GSAP calculations from causing repaint lag during scroll
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      {/* 1. HERO VISUALS (100vh) */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Portrait */}
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <img
            src="/portrait.png"
            alt="Nithish — AI-Powered Java Full Stack Developer"
            className="w-full h-full object-contain"
            style={{
              transform: 'scale(1.15) translateZ(0)',
              transformOrigin: 'center 22%',
              willChange: 'transform'
            }}
            draggable={false}
          />
        </div>

        {/* Rotating Logo Band */}
        <div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{
            maskImage:
              'linear-gradient(to right, white 0%, white 20%, transparent 36%, transparent 64%, white 80%, white 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, white 0%, white 20%, transparent 36%, transparent 64%, white 80%, white 100%)',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <LogoBand />
        </div>
      </div>
    </section>
  );
}
