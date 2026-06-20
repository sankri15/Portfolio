import { useEffect, useRef, useState } from 'react';
import { SKILL_CATEGORIES } from '../data';

const CATEGORY_COLORS = {
  violet:  { bg: 'from-violet-500/10 to-violet-600/5', border: 'border-violet-500/20', dot: 'bg-violet-400', bar: 'from-violet-500 to-violet-400', label: 'text-violet-400' },
  blue:    { bg: 'from-blue-500/10 to-blue-600/5',     border: 'border-blue-500/20',   dot: 'bg-blue-400',   bar: 'from-blue-500 to-blue-400',   label: 'text-blue-400' },
  emerald: { bg: 'from-emerald-500/10 to-emerald-600/5',border: 'border-emerald-500/20',dot: 'bg-emerald-400',bar: 'from-emerald-500 to-emerald-400',label: 'text-emerald-400' },
};

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium group-hover:text-slate-100 transition-colors">{name}</span>
        <span className={`text-xs mono font-semibold ${CATEGORY_COLORS[color].label}`}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill bg-gradient-to-r ${CATEGORY_COLORS[color].bar}`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 w-96 h-96 rounded-full bg-violet-600/6 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-violet-300 mb-4 border border-violet-500/20">
            &#129520; Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="section-heading gradient-text">What I Work With</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base">
            A curated set of technologies I use to build fast, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const c = CATEGORY_COLORS[cat.color];
            return (
              <div
                key={cat.title}
                className={`glass rounded-2xl p-6 bg-gradient-to-br ${c.bg} border ${c.border} card-lift glow-border`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl border border-white/10">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-slate-200 text-base`}>{cat.title}</h3>
                    <span className={`text-xs ${c.label}`}>{cat.skills.length} skills</span>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.skills.map(skill => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      animate={animate}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tech pills */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 text-sm mb-5">Also comfortable with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['TypeScript','MongoDB','Power BI','LeetCode','Linux','Figma','Postman','Firebase'].map(tech => (
              <span key={tech} className="px-3 py-1.5 text-xs font-medium text-slate-400 glass rounded-full border border-white/[0.06] hover:text-slate-200 hover:border-violet-500/30 transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
