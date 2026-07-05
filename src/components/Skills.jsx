import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILL_CATEGORIES, PERSONAL } from '../data';
// Add neon border/shadow colors to each category
// Add neon border/shadow colors to each category
const CATEGORY_STYLES = {
  violet:  { border: 'border-pink-500/60', shadow: 'shadow-[0_0_15px_rgba(236,72,153,0.3)]', text: 'text-pink-300', wavy: 'linear-gradient(to top, #c084fc, #ec4899)' },
  pink:    { border: 'border-cyan-500/60', shadow: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]', text: 'text-cyan-300', wavy: 'linear-gradient(to top, #ec4899, #22d3ee)' },
  emerald: { border: 'border-emerald-500/60', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.3)]', text: 'text-emerald-300', wavy: 'linear-gradient(to top, #10b981, #34d399)' },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section id="skills" className="section relative z-10 py-20 overflow-hidden" ref={sectionRef}>
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative w-full mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-pink-300 mb-4 border border-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
            &#129520; Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="section-heading gradient-text" style={{ background: "linear-gradient(135deg, #f472b6, #c084fc, #fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              My Tech Arsenal
            </span>
          </h2>
        </motion.div>
        
        {/* Marquee Rows */}
        <div className="flex flex-col gap-14 w-full mt-10">
          {SKILL_CATEGORIES.map((cat, index) => {
            const c = CATEGORY_STYLES[cat.color] || CATEGORY_STYLES.violet;
            // Alternate directions: left, right, left
            const dirClass = index % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse";
            
            // Repeat the skills array enough times to fill the screen for the marquee
            const repeatedSkills = [...cat.skills, ...cat.skills, ...cat.skills, ...cat.skills, ...cat.skills, ...cat.skills, ...cat.skills];

            return (
              <div key={cat.title} className="w-full flex flex-col items-center">
                
                {/* Category Title properly aligned above */}
                <div className="glass px-6 py-2 mb-6 rounded-full border border-white/10 flex items-center gap-3 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-bold text-white text-sm tracking-widest uppercase">{cat.title}</span>
                </div>

                {/* The Scrolling Marquee Container */}
                <div className="relative flex overflow-hidden w-full py-4 bg-gradient-to-r from-transparent via-[#120815]/30 to-transparent">
                  
                  {/* Left & Right fade out gradients */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-r from-[#0f0712] to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-l from-[#0f0712] to-transparent pointer-events-none"></div>

                  <div className={`${dirClass} flex gap-8 px-4`} style={{ animationDuration: '45s' }}>
                    {repeatedSkills.map((skill, i) => (
                      <div 
                        key={`${skill.name}-${i}`} 
                        className={`inline-flex items-center justify-center px-10 py-4 rounded-full border ${c.border} ${c.shadow} bg-black/40 glass-pill-btn wavy-btn hover:scale-[1.05] transition-transform cursor-default whitespace-nowrap shrink-0`}
                        style={{ '--wavy-color': c.wavy }}
                      >
                        <span className={`relative z-10 font-bold tracking-widest uppercase ${c.text} drop-shadow-[0_0_10px_currentColor] text-sm`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
