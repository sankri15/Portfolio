function Projects() {
  const projectList = [
    {
      title: "ATS Resume Analyzer",
      description:
        "Smart Resume Scoring & Improvement Tool that analyzes resumes, calculates ATS compatibility scores, detects missing skills, and provides actionable suggestions.",
      live: "https://ats-resume-analyzer-sooty.vercel.app",
      github: "https://github.com/sankri15/ATS_Resume_Analyzer",
      tags: ["React", "Node.js", "AI", "NLP", "Tailwind"],
    },
    {
      title: "DevToolKit",
      description:
        "A developer utility suite for decoding JWT, formatting JSON, and encoding/decoding Base64 data for faster debugging workflows.",
      live: "https://developerstoolkit.vercel.app/",
      github: "https://github.com/DevAniiii/DevToolKit",
      tags: ["React", "JavaScript", "API Tools"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and achievements with modern UI and smooth animations.",
      live: "https://portfolio-phi-blue-99.vercel.app",
      github: "https://github.com/your-github/portfolio",
      tags: ["React", "Tailwind", "UI/UX"],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 gradient-text">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 card-lift glow-border hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-bold mb-3 gradient-text">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
                >
                  🚀 Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold hover:opacity-90 transition"
                >
                  💻 Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;