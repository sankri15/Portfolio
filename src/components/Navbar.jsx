import { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass shadow-2xl shadow-black/40' : ''
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
              SP
            </div>
            <span className="font-bold text-slate-100 text-sm hidden sm:block font-display">
              Sanjana Pal
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <a
              id="hire-me-btn"
              href={`mailto:${PERSONAL.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-semibold text-sm btn-shimmer"
            >
              Hire Me
            </a>
            {/* Mobile burger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl glass"
            >
              <span className={`block w-5 h-0.5 bg-slate-300 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-300 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.06] flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                className={`nav-link px-2 py-1.5 text-base ${active === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-semibold text-sm btn-shimmer mt-1"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
