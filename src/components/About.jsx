import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL } from "../data";
import CircleAnimation from "./CircleAnimation";

export default function About() {
  const [hoverCert, setHoverCert] = useState(null);
  const [hoverCode, setHoverCode] = useState(null);
  const [hoverExp, setHoverExp] = useState(null);

  const aboutText =
    "I am Sanjana Pal, a passionate Computer Science student specializing in Artificial Intelligence at IET Lucknow. With strong proficiency in Full-Stack Web Development, Data Structures, and GenAI technologies, I love crafting beautiful user experiences, building modern web applications with React, and transforming creative ideas into impactful digital solutions. My journey combines technology, design, creativity, and continuous learning.";

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
    { title: "HULT Event Participation (IET)", year: "2023", bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", url: "#" },
    { title: "SQL Mastery (Udemy)", year: "2020", bg: "https://images.unsplash.com/photo-1518770660439-4636190af475", url: "/SQL_udemy.pdf" },
    { title: "Full Stack Web Development (Udemy)", year: "2026", bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", url: "/udemy_full_stack.pdf" },
    { title: "AI Skills for Business (EY + Microsoft)", year: "2026", bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", url: "/AI_Skills_EY_Microsoft.pdf" },
    { title: "IBM AI + Sustainability Virtual Internship (1M1B)", year: "2026", bg: "https://images.unsplash.com/photo-1531482615713-2afd69097998", url: "/IBM_1M1B.pdf" },
    { title: "GenAI Data Analytics (Tata Forage)", year: "2026", bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", url: "/Forage_certificate.pdf" },
    { title: "Azure AI Agent Development Badge (Microsoft)", year: "2026", bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485", url: "https://learn.microsoft.com/en-gb/users/sanjanapal-6259/achievements/print/zjbaxy72" },
    { title: "Introduction to Generative AI & Agents (Microsoft)", year: "2026", bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995", url: "https://learn.microsoft.com/en-gb/users/sanjanapal-6259/achievements/print/u7rclpr3" },
  ];

  // CODING
  const coding = [
    { title: "LeetCode + GFG", desc: "400+ DSA", url: "https://www.geeksforgeeks.org/profile/anonymous_1729?tab=activity", color: "#10b981", fromColor: "#6ee7b7", toColor: "#059669", icon: "📘" },
    { title: "CodeChef", desc: "3★ ⭐ (1649 Rank)", url: "#", color: "#8b5cf6", fromColor: "#c4b5fd", toColor: "#7c3aed", icon: "⭐" },
    { title: "Codeforces", desc: "Pupil 🟢 (1274 Rank)", url: "https://codeforces.com/profile/anonymous_1616", color: "#ef4444", fromColor: "#fca5a5", toColor: "#dc2626", icon: "🟢" },
    { title: "TLE Eliminator", desc: "Rank 524", url: "https://www.tle-eliminators.com/cp-sheet", color: "#ec4899", fromColor: "#fcd34d", toColor: "#d97706", icon: "🔵" },
    { title: "AtCoder", desc: "8 kyu", url: "https://atcoder.jp/users/code_sword3", color: "#ec4899", fromColor: "#93c5fd", toColor: "#2563eb", icon: "🟤" },
    { title: "HackerRank SQL Basic", desc: "Certificate", url: "/sql_basic_certificate.pdf", color: "#06b6d4", fromColor: "#67e8f9", toColor: "#0891b2", icon: "🏆" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section id="about" className="section relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Great Vibes', cursive",
            background: "linear-gradient(90deg, #f472b6, #c084fc, #fb7185)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 25px rgba(244,114,182,0.8)",
            letterSpacing: "2px",
            fontSize: "4rem",
            paddingRight: "10px"
          }}
        >
          About my Journey
        </motion.h2>

        {/* EXPERIENCE CARDS */}
        <div className="mb-16 relative">
          {/* 3D Circle Animation Background */}
          <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none overflow-visible">
            <div className="w-[800px] h-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
              <CircleAnimation />
            </div>
          </div>
          
          <h3 className="text-lg font-bold mb-6 text-pink-300 tracking-wider uppercase text-center sm:text-left relative z-10">Experience</h3>
          
          <div className="relative">
            {/* TIMELINE LINE */}
            <div className="absolute left-4 sm:left-2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-rose-400 shadow-[0_0_15px_rgba(244,114,182,0.8)]"></div>

            {/* HASHBIT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setHoverExp(0)}
              onMouseLeave={() => setHoverExp(null)}
              className="relative glass p-6 rounded-2xl mb-8 overflow-hidden border border-pink-500/20 hover:border-pink-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(244,114,182,0.45)] transition-all duration-500 ml-8 sm:ml-10"
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-[-29px] sm:left-[-35px] top-8 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(244,114,182,1)] z-20"></div>

              {hoverExp === 0 && (
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-20 scale-110 transition-all duration-700" />
              )}

              <div className="relative z-10">
                <p className="text-white font-bold text-xl mb-1">Full Stack Development Intern</p>
                <p className="text-pink-400 text-sm font-semibold mb-3">CodeAlpha (June 2026 - July 2026)</p>
                <ul className="text-gray-300 text-sm space-y-1.5 list-disc list-inside mt-2">
                  <li>Built responsive web apps including an E-commerce platform (GlowMart) and a Project Management Tool (Trello/Asana clone) using React & Node.js.</li>
                  <li>Worked on complex API integrations, database management, and backend business logic with Express.js.</li>
                  <li>Improved UI/UX performance, reduced load times, and ensured cross-browser compatibility.</li>
                  <li>Collaborated effectively in a fast-paced agile development environment.</li>
                </ul>
              </div>
            </motion.div>

            {/* BTECH */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              onMouseEnter={() => setHoverExp(1)}
              onMouseLeave={() => setHoverExp(null)}
              className="relative glass p-6 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(192,132,252,0.45)] transition-all duration-500 ml-8 sm:ml-10"
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-[-29px] sm:left-[-35px] top-8 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,1)] z-20"></div>

              {hoverExp === 1 && (
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350')] bg-cover bg-center opacity-20 scale-110 transition-all duration-700" />
              )}

              <div className="relative z-10">
                <p className="text-white font-bold text-xl mb-1">B.Tech CSE (AI & ML)</p>
                <p className="text-purple-400 text-sm font-semibold mb-3">IET Lucknow (2023 - 2027)</p>
                <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                  <li>Studying core CS, AI, ML & Data Structures</li>
                  <li>Building real-world AI & web projects</li>
                  <li>Active in competitive programming & hackathons</li>
                  <li>Focused on full-stack + AI development skills</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ABOUT TEXT (TYPING EFFECT) */}
        <div className="mt-32 text-center relative z-10">
          <h2 
            className="text-4xl font-extrabold mb-8"
            style={{
              fontFamily: "'Lucida Handwriting', cursive",
              background: "linear-gradient(90deg, #fbcfe8, #f472b6, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10px rgba(244,114,182,0.4)",
              fontSize: "4.5rem",
              paddingRight: "10px",
              letterSpacing: "2px"
            }}>
            About Me
          </h2>
          <p style={{
            fontFamily: "'Lucida Handwriting', cursive",
            fontSize: "2rem",
            lineHeight: "2.0",
            maxWidth: "1100px",
            margin: "0 auto",
            color: "#fdf2f8",
            textShadow: "0 0 8px rgba(236,72,153,0.5)",
            padding: "20px",
            letterSpacing: "1px"
          }}>
            {displayedText.split(' ').map((word, index) => (
              <span key={index} className="word-hover cursor-default mr-4">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* CERTIFICATIONS + CODING */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">
          {/* CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-pink-300 tracking-wider">🏆 Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target={c.url !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoverCert(i)}
                  onMouseLeave={() => setHoverCert(null)}
                  className="relative glass p-4 rounded-xl overflow-hidden border border-white/5 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
                >
                  {hoverCert === i && (
                    <div className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-300" style={{ backgroundImage: `url(${c.bg})` }} />
                  )}
                  <div className="relative z-10">
                    <p className="text-white font-semibold text-sm mb-1">{c.title}</p>
                    {c.year && (
                      <p className="text-pink-300 text-xs font-medium bg-pink-500/10 inline-block px-2 py-1 rounded-full">{c.year}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CODING */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-purple-300 tracking-wider">🏅 Coding Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coding.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  onClick={(e) => { if (c.url === '#') e.preventDefault(); }}
                  target={c.url !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`wavy-btn glass-pill-btn px-[18px] py-[10px] border transition-all flex flex-col items-start gap-1 ${c.url !== '#' ? 'hover:-translate-y-1' : 'cursor-default'}`}
                  style={{ 
                    borderColor: `${c.color}50`, 
                    boxShadow: `0 0 15px ${c.color}40, inset 0 0 10px ${c.color}20`,
                    '--wavy-color': `linear-gradient(to top, ${c.fromColor}, ${c.toColor})`
                  }}
                >
                  <span className="relative z-10 text-white text-[13px] font-bold flex items-center gap-2">
                    <span className="text-lg">{c.icon}</span> {c.title}
                  </span>
                  <span className="relative z-10 text-gray-200 text-[10px] uppercase font-bold tracking-wider opacity-80">{c.desc}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 