import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          scrolled ? 'glass border-pink-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#170a1c]/80' : ''
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-shadow">
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
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="hire-me-btn"
              href={`mailto:${PERSONAL.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wavy-btn hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 shadow-[0_0_15px_rgba(236,72,153,0.4)]"
              style={{ '--wavy-color': 'linear-gradient(to top, #ec4899, #ef4444)' }}
            >
              <span>Hire Me</span>
            </motion.a>
            {/* Mobile burger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl glass border-pink-500/20"
            >
              <span className={`block w-5 h-[2px] bg-pink-300 transition-all ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-pink-300 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-pink-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden flex flex-col gap-3 border-t border-pink-500/20 pt-4 pb-2"
            >
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
                target="_blank"
                rel="noopener noreferrer"
                className="wavy-btn inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-500 mt-1 shadow-md"
                style={{ '--wavy-color': 'linear-gradient(to top, #ec4899, #ef4444)' }}
              >
                <span>Hire Me</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
