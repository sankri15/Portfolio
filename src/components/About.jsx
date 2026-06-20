import { PERSONAL, TIMELINE, CERTIFICATIONS } from '../data';

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-violet-300 mb-4 border border-violet-500/20">
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <SectionLabel>&#128100; About Me</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100">
            <span className="section-heading gradient-text">Who I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Bio */}
          <div className="space-y-6">
            {/* Avatar card */}
            <div className="glass rounded-2xl p-6 flex items-center gap-5 card-lift glow-border">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white text-2xl font-black flex-shrink-0 shadow-xl shadow-violet-500/30">
                SP
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{PERSONAL.name}</h3>
                <p className="text-violet-400 text-sm font-medium">{PERSONAL.role}</p>
                <p className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                  <span>&#128205;</span> {PERSONAL.location}
                </p>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="text-slate-400 hover:text-violet-300 text-xs transition-colors mono block mt-0.5"
                >
                  {PERSONAL.email}
                </a>
              </div>
            </div>

            {/* Bio paragraphs */}
            {PERSONAL.about.map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base">
                {para}
              </p>
            ))}

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: '3+', label: 'Projects Built' },
                { value: '4+', label: 'Certifications' },
                { value: '2+', label: 'Internships' },
              ].map(stat => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center card-lift glow-border">
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline + Certifications */}
          <div className="space-y-8">

            {/* Timeline */}
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-5 flex items-center gap-2">
                <span className="text-violet-400">&#128336;</span> Experience &amp; Education
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent" />

                <div className="space-y-6">
                  {TIMELINE.map((item, i) => (
                    <div key={i} className="relative pl-12">
                      {/* Dot */}
                      <div className={`absolute left-0 top-1 w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${
                        item.type === 'work'
                          ? 'bg-violet-500/20 text-violet-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.type === 'work' ? '💼' : '🎓'}
                      </div>

                      <div className="glass rounded-xl p-4 card-lift glow-border">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-slate-200 text-sm">{item.title}</h4>
                          <span className="text-xs text-slate-500 flex-shrink-0 mono">{item.year}</span>
                        </div>
                        <p className="text-violet-400 text-xs font-medium mb-2">{item.org}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="text-emerald-400">&#127942;</span> Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="glass rounded-xl px-4 py-3 flex items-center justify-between card-lift glow-border">
                    <div>
                      <p className="text-slate-200 text-sm font-medium">{cert.title}</p>
                      <p className="text-slate-500 text-xs">{cert.issuer}</p>
                    </div>
                    <span className="text-xs mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20 flex-shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
