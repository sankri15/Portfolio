import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../data';

const CATEGORY_COLORS = {
  violet:  { bg: 'from-pink-500/10 to-pink-600/5', border: 'border-pink-500/20', tag: 'bg-pink-500/20 text-pink-300', btn: 'bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-400 hover:to-rose-300' },
  pink:    { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-500/20', tag: 'bg-purple-500/20 text-purple-300', btn: 'bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-400 hover:to-pink-300' },
  emerald: { bg: 'from-rose-500/10 to-rose-600/5', border: 'border-rose-500/20', tag: 'bg-rose-500/20 text-rose-300', btn: 'bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-400 hover:to-orange-300' },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="section relative z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-pink-300 mb-4 border border-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
            &#128640; Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="section-heading gradient-text" style={{ background: "linear-gradient(135deg, #f472b6, #c084fc, #fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Featured Projects
            </span>
          </h2>
          <p className="text-pink-100/60 mt-4 max-w-xl mx-auto text-base">
            A selection of my recent work, showcasing my skills in frontend development, AI integration, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => {
            const c = CATEGORY_COLORS[project.color] || CATEGORY_COLORS.violet;
            return (
              <motion.div 
                variants={itemVariants}
                key={project.id} 
                whileHover={{ y: -8, rotateX: 2, rotateY: -2, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(244,114,182,0.15)" }}
                className={`group glass rounded-2xl p-6 md:p-8 bg-gradient-to-br ${c.bg} border ${c.border} flex flex-col h-full relative overflow-hidden transition-all duration-300`}
                style={{ perspective: 1000 }}
              >
                {/* Moving Background Image */}
                {project.bgImage && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 z-0 transition-opacity duration-500 animate-pan mix-blend-screen"
                      style={{ backgroundImage: `url(${project.bgImage})` }}
                    />
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0712] via-[#0f0712]/50 to-transparent z-0"></div>
                  </>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl border border-white/10 shadow-inner">
                    <span dangerouslySetInnerHTML={{ __html: project.emoji }} />
                  </div>
                  {project.featured && (
                    <span className="text-xs font-semibold text-pink-200 bg-pink-500/30 px-3 py-1 rounded-full border border-pink-400/40 flex items-center gap-1.5 shadow-[0_0_10px_rgba(244,114,182,0.5)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-300 animate-pulse"></span>
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 mb-3 relative z-10">{project.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed mb-4 flex-grow relative z-10 font-medium">
                  {project.description}
                </p>
                
                {/* Details (Optional display on larger screens) */}
                <p className="text-slate-300/90 text-xs leading-relaxed mb-6 hidden sm:block relative z-10 whitespace-pre-line">
                  {project.longDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-2.5 py-1 text-xs font-semibold rounded-full border border-white/10 ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-full font-bold text-[13px] tracking-wide transition-all text-pink-300 border border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.2)] glass-pill-btn wavy-btn flex justify-center items-center"
                      style={{ '--wavy-color': 'linear-gradient(to top, #3b82f6, #ec4899)' }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Live Demo
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-full font-bold text-[13px] tracking-wide transition-all text-cyan-300 border border-cyan-500/60 shadow-[0_0_15px_rgba(34,211,238,0.2)] glass-pill-btn wavy-btn flex justify-center items-center"
                      style={{ '--wavy-color': 'linear-gradient(to top, #10b981, #ec4899)' }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}