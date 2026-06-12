import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        style={{
          backgroundColor: isScrolled ? 'rgba(250, 247, 243, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(17, 17, 17, 0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="/"
            className="font-heading text-[15px] font-700 tracking-[-0.02em] text-charcoal uppercase"
            style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.08em' }}
          >
            Nithish<span className="text-terracotta">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => {
              const isActive = currentPath === link.href ||
                (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium tracking-[0.04em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: isActive ? '#C45D3E' : '#888888',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#111111'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? '#C45D3E' : '#888888'}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: '#C45D3E' }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="mailto:agentnithish233@gmail.com"
              className="text-[12px] font-medium tracking-[0.06em] uppercase px-5 py-2.5 rounded-full transition-all duration-300"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#111111',
                color: '#FAF7F3',
                border: '1px solid #111111',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#C45D3E';
                e.currentTarget.style.borderColor = '#C45D3E';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#111111';
                e.currentTarget.style.borderColor = '#111111';
              }}
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[1.5px] bg-charcoal transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-charcoal transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-charcoal transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: '#FAF7F3',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'scale(1)' : 'scale(0.97)',
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[32px] font-600 tracking-[-0.02em] text-charcoal transition-colors duration-300"
              style={{
                fontFamily: 'Archivo, sans-serif',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.08}s`,
                color: currentPath === link.href ? '#C45D3E' : '#111111',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:agentnithish233@gmail.com"
            className="text-[13px] font-medium tracking-[0.06em] uppercase px-8 py-3 rounded-full mt-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundColor: '#111111',
              color: '#FAF7F3',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
