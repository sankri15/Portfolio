import { motion } from 'framer-motion';
import { PERSONAL, NAV_LINKS } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-pink-500/20 bg-[#0a050d] pt-16 pb-8 mt-20 relative z-10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(236,72,153,0.5)] border border-pink-400/30">
                SP
              </div>
              <span className="font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Sanjana Pal
              </span>
            </div>
            <p className="text-pink-100/60 text-sm leading-relaxed max-w-sm">
              Building impactful web apps and exploring Machine Learning. Always open to new opportunities and collaborations. Let's build something amazing together!
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-bold text-white mb-6 text-sm tracking-widest uppercase text-pink-300">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button 
                    onClick={() => scrollTo(link.href.slice(1))}
                    className="flex items-center gap-2 text-pink-100/50 hover:text-white text-sm font-semibold transition-all hover:translate-x-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity">&rarr;</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-bold text-white mb-6 text-sm tracking-widest uppercase text-pink-300">Connect</h3>
            <ul className="flex flex-col gap-4 w-full sm:w-auto">
              
              <li>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-48 py-3 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] glass-pill-btn wavy-btn flex justify-center items-center" style={{ '--wavy-color': 'linear-gradient(to top, #4b5563, #9ca3af)' }}>
                  <span className="relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </span>
                </a>
              </li>
              
              <li>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="w-full sm:w-48 py-3 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all text-pink-300 border border-pink-500/50 shadow-[0_0_10px_rgba(236,72,153,0.2)] glass-pill-btn wavy-btn flex justify-center items-center" style={{ '--wavy-color': 'linear-gradient(to top, #1e40af, #ec4899)' }}>
                  <span className="relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                  </span>
                </a>
              </li>

              <li>
                <a href={`mailto:${PERSONAL.email}`} className="w-full sm:w-48 py-3 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all text-pink-300 border border-pink-500/50 shadow-[0_0_10px_rgba(236,72,153,0.2)] glass-pill-btn wavy-btn flex justify-center items-center" style={{ '--wavy-color': 'linear-gradient(to top, #db2777, #f472b6)' }}>
                  <span className="relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Email Me
                  </span>
                </a>
              </li>

            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center overflow-hidden">
          <motion.p 
            animate={{ x: [-30, 30, -30] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="text-pink-300/80 font-bold tracking-[0.2em] text-[11px] text-center uppercase drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]"
          >
            &copy; {currentYear} Sanjana Pal. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}