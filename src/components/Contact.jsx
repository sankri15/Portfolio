import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PERSONAL } from '../data';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section id="contact" className="section relative z-10" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Decorative elements */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-pink-600/20 blur-[100px] rounded-full opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative glass rounded-3xl p-8 sm:p-12 md:p-16 border border-pink-500/30 overflow-hidden shadow-[0_20px_50px_rgba(244,114,182,0.15)]"
        >
          {/* Inner ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-pink-100/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              I'm currently looking for new opportunities, and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${PERSONAL.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 shadow-[0_10px_30px_rgba(244,114,182,0.4)] group transition-all"
            >
              <span className="text-xl">&#9993;</span>
              Say Hello
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>

            <div className="mt-12 flex items-center justify-center gap-6">
              <motion.a 
                whileHover={{ y: -5 }}
                href={PERSONAL.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-pink-200/60 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:border-pink-400/50 group-hover:bg-white/5 transition-all shadow-[0_0_15px_rgba(244,114,182,0.1)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium mono">GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href={PERSONAL.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-pink-200/60 hover:text-[#0a66c2] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:border-pink-400/50 group-hover:bg-[#0a66c2]/10 transition-all shadow-[0_0_15px_rgba(244,114,182,0.1)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium mono">LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}