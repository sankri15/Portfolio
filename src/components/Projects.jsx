function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 gradient-text">
          Projects
        </h2>

        <div className="glass rounded-2xl p-8 card-lift glow-border">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            ATS Resume Analyzer
          </h3>

          <p className="text-slate-400 leading-relaxed mb-6">
            Smart Resume Scoring & Improvement Tool that analyzes resumes,
            calculates ATS compatibility scores, detects missing skills,
            evaluates resume structure, and provides actionable suggestions
            to improve ATS performance.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://ats-resume-analyzer-sooty.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
            >
              🚀 Live Demo
            </a>

            <a
              href="https://github.com/sankri15/ATS_Resume_Analyzer"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-300 via-sky-300 to-violet-300 text-white font-semibold hover:scale-105 transition"
            >
              💻 GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;