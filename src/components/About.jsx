import { useState, useEffect } from "react";
import { PERSONAL } from "../data";

export default function About() {
  const [hoverCert, setHoverCert] = useState(null);
  const [hoverCode, setHoverCode] = useState(null);
  const [hoverExp, setHoverExp] = useState(null);

  const aboutText =
  "I am Sanjana Pal, a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning at IET Lucknow. I love crafting beautiful user experiences, building modern web applications with React, and transforming creative ideas into impactful digital solutions. My journey combines technology, design, creativity, and continuous learning.";

const [displayedText, setDisplayedText] = useState("");

useEffect(() => {
  let i = 0;

  const timer = setInterval(() => {
    if (i < aboutText.length) {
      setDisplayedText(aboutText.slice(0, i + 1));
      i++;
    } else {
      clearInterval(timer);
    }
  }, 35);

  return () => clearInterval(timer);
}, []);

  // CERTIFICATIONS
  const certifications = [
    {
      title: "HULT Event Participation (IET)",
      year: "2023",
      bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "SQL Mastery (Udemy)",
      year: "2024",
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Full Stack Web Development (Udemy)",
      year: "2025",
      bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "AI Skills for Business (EY + Microsoft)",
      year: "2026",
      bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "IBM AI + Sustainability Virtual Internship (1M1B)",
      year: "2026",
      bg: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    },
    {
      title: "GenAI Data Analytics (Tata Forage)",
      year: "2026",
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Azure AI Agent Development Badge (Microsoft)",
      year: "2026",
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    },
    {
      title: "Introduction to Generative AI & Agents (Microsoft)",
      year: "2026",
      bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
  ];

  // CODING
  const coding = [
    {
      title: "LeetCode + GeeksforGeeks",
      desc: "400+ DSA Problems Solved",
      bg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      icon: "📘",
    },
    {
      title: "CodeChef",
      desc: "3★ ⭐ Competitive Programmer",
      bg: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      icon: "⭐",
    },
    {
      title: "Codeforces",
      desc: "Pupil 🟢 (1285 Rating)",
      bg: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      icon: "🟢",
    },
    {
      title: "HackerRank Orchestrate 2026",
      desc: "Rank 400 / 1349 (Top 30%)",
      bg: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      icon: "🏆",
    },
    {
      title: "TLE Eliminator",
      desc: "Rank 492",
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      icon: "🔵",
      link: "https://www.tle-eliminators.com/cp-sheet",
    },
    {
      title: "AtCoder",
      desc: "8 kyu (515)",
      bg: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      icon: "🟤",
      link: "https://atcoder.jp/users/code_sword3",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-4 who-title">
         About my Jounery
        </h2>

        <style>
{`
.who-title{
  font-family:'Viner Hand ITC', sans-serif;
  background: linear-gradient(90deg,#00f5ff,#a855f7,#ff4ecd);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  text-shadow:0 0 25px rgba(168,85,247,.35);
  letter-spacing:2px;
}
`}
</style>



{/* EXPERIENCE CARDS */}
<div>
  <h3 className="text-lg font-bold mb-3 text-white">Experience</h3>

  <div className="relative">

    {/* TIMELINE LINE */}
    <div className="absolute left-2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>

    {/* HASHBIT */}
    <div
      onMouseEnter={() => setHoverExp(0)}
      onMouseLeave={() => setHoverExp(null)}
      className="relative glass p-4 rounded-xl mb-5 overflow-hidden border border-violet-500/20 hover:border-violet-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-all duration-500"
    >

      {/* TIMELINE DOT */}
      <div className="absolute left-[-7px] top-7 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(168,85,247,1)] z-20"></div>

      {hoverExp === 0 && (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-30 scale-110 transition-all duration-700" />
      )}

      <div className="relative z-10">
        <p className="text-white font-semibold">
          Full Stack Development Intern
        </p>

        <p className="text-violet-400 text-xs">
          HashBit Innovation
        </p>

        <p className="text-gray-400 text-xs">
          Built responsive web apps using React & Node.js
        </p>

        <p className="text-gray-400 text-xs">
          Worked on API integration & backend logic
        </p>

        <p className="text-gray-400 text-xs">
          Improved UI/UX performance & optimization
        </p>

        <p className="text-gray-400 text-xs">
          Collaborated in agile development environment
        </p>
      </div>
    </div>

    {/* BTECH */}
    <div
      onMouseEnter={() => setHoverExp(1)}
      onMouseLeave={() => setHoverExp(null)}
      className="relative glass p-4 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-500"
    >

      {/* TIMELINE DOT */}
      <div className="absolute left-[-7px] top-7 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] z-20"></div>

      {hoverExp === 1 && (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350')] bg-cover bg-center opacity-30 scale-110 transition-all duration-700" />
      )}

      <div className="relative z-10">
        <p className="text-white font-semibold">
          B.Tech CSE (AI & ML)
        </p>

        <p className="text-violet-400 text-xs">
          IET Lucknow (2023 - 2027)
        </p>

        <p className="text-gray-400 text-xs">
          Studying core CS, AI, ML & Data Structures
        </p>

        <p className="text-gray-400 text-xs">
          Building real-world AI & web projects
        </p>

        <p className="text-gray-400 text-xs">
          Active in competitive programming & hackathons
        </p>

        <p className="text-gray-400 text-xs">
          Focused on full-stack + AI development skills
        </p>
      </div>
    </div>

  </div>
</div>
        {/* ABOUT ME */}
<div className="mt-16 text-center px-6">

  <h2
    className="text-5xl mb-8 font-bold"
    style={{
      fontFamily: "'Dancing Script', cursive",
      background:
        "linear-gradient(90deg,#00f5ff,#a855f7,#ff4ecd)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 30px rgba(168,85,247,0.4)",
    }}
  >
    About Me
  </h2>

  <p
    style={{
      fontFamily: "'Dancing Script', cursive",
      fontSize: "2rem",
      lineHeight: "1.8",
      maxWidth: "1000px",
      margin: "0 auto",
      background:
        "linear-gradient(90deg,#00f5ff,#ffffff,#a855f7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow:
        "0 0 20px rgba(0,245,255,0.4), 0 0 35px rgba(168,85,247,0.3)",
      animation: "floatText 4s ease-in-out infinite",
    }}
  >
    {displayedText}
    <span className="animate-pulse text-cyan-300">|</span>
  </p>

</div>

        {/* CERTIFICATIONS + CODING */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              🏆 Certifications
            </h3>

            {certifications.map((c, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverCert(i)}
                onMouseLeave={() => setHoverCert(null)}
                className="relative glass p-3 rounded-xl mb-3 overflow-hidden"
              >
                {hoverCert === i && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${c.bg})` }}
                  />
                )}
                <div className="relative">
                  <p className="text-white text-sm">{c.title}</p>
                  <p className="text-gray-400 text-xs">{c.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CODING */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              🏅 Coding Skills
            </h3>

            {coding.map((c, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverCode(i)}
                onMouseLeave={() => setHoverCode(null)}
                className="relative glass p-3 rounded-xl mb-3 overflow-hidden"
              >
                {hoverCode === i && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${c.bg})` }}
                  />
                )}

                <div className="relative">
                  <p className="text-white text-sm font-semibold">
                    {c.icon} {c.title}
                  </p>
                  <p className="text-gray-400 text-xs">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
} 