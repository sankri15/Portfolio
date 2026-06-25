import { useState } from "react";

function Projects() {
  const projectList = [
    {
      title: "ATS Resume Analyzer",
      description:
        "AI-powered resume analyzer that generates ATS score.\nDetects missing skills and keyword gaps.\nProvides smart improvement suggestions.\nImproves resume compatibility for job applications.",
      live: "https://ats-phi-ruddy.vercel.app",
      github: "https://github.com/sankri15/ATS_Resume_Analyzer.git",
      skills: ["React", "AI", "NLP", "Node.js", "Tailwind"],
      bg: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
      hoverBg:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    },

    {
      title: "Weather Detection Website",
      description:
        "Real-time weather updates using OpenWeatherMap API.\nShows temperature, humidity, wind speed instantly.\nLocation-based dynamic weather detection system.\nResponsive UI built with React for smooth UX.",
      live: "https://weather-app-seven-tau-50.vercel.app",
      github: "https://github.com/sankri15/Weather-App.git",
      skills: ["React", "Node.js", "API", "JavaScript", "CSS"],
      bg: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      hoverBg:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
    },

    {
      title: "Book Recommendation System",
      description:
        "ML-based system for personalized book suggestions.\nUses collaborative and content-based filtering.\nImplements cosine similarity for recommendations.\nProcesses large datasets using Pandas and NumPy.",
      live: "https://booksage-ai-new.vercel.app  ",
      github: "https://github.com/sankri15/BookSage_AI",
      skills: ["Python", "Pandas", "Scikit-learn", "NumPy", "ML"],
      bg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      hoverBg:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-4">
      <div className="max-w-6xl mx-auto px-4">

       <h2
      className="text-center mb-8"
      style={{
        fontFamily: "'Papyrus', cursive",
        fontSize: "4rem",
        fontWeight: "700",
        background:
          "linear-gradient(90deg,#00f5ff,#a855f7,#ff4ecd)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow:
          "0 0 20px rgba(0,245,255,0.4), 0 0 35px rgba(168,85,247,0.3)",
      }}
    >
      My Projects
    </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative group rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.04] transition duration-500"
            >

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage:
                    hovered === index
                      ? `url(${project.hoverBg})`
                      : `url(${project.bg})`,
                  transform: "scale(1.1)",
                }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative p-6 text-white">

                <h3 className="text-3xl font-bold mb-3 italic text-purple-300">
                  {project.title}
                </h3>

                {/* 4-line description */}
                <p className="text-slate-200 mb-4 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-semibold hover:scale-105 transition"
                  >
                    🚀 Live Demo
                  </a>

                  {/* GitHub (NOW SAME STYLE) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-semibold hover:scale-105 transition"
                  >
                    💻 GitHub Repo
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;