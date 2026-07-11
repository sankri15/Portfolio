import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/atsphoto.png";
import IDCard from "./IDCard";
import { PERSONAL } from "../data";

const Hero = () => {
  const texts = [
    "Open for Internship & Freelancing",
    "Building Modern Web Experiences",
    "React Developer • UI/UX Enthusiast"
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = deleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setIndex((p) => (p + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-screen bg-[#0f0712] flex items-center justify-center overflow-hidden px-[6%] font-['Poppins',_sans-serif]">

      {/* GLOW BACKGROUNDS */}
      <div className="absolute w-[320px] h-[320px] bg-pink-500 blur-[140px] opacity-30 -top-[80px] -left-[80px] z-0"></div>
      <div className="absolute w-[320px] h-[320px] bg-purple-500 blur-[140px] opacity-25 -bottom-[80px] -right-[80px] z-0"></div>

      {/* BIG SP WATERMARK */}
      <div className="absolute text-[260px] font-black text-white/5 tracking-[25px] left-1/2 -translate-x-1/2 select-none z-0">
        SP
      </div>

      <div className="flex items-center justify-between w-full max-w-[1400px] gap-[60px] z-10 flex-wrap">
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 min-w-[400px] text-left"
        >
          <div className="flex items-center gap-[10px]">
            <span className="w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_12px_#ec4899] animate-pulse"></span>
            <p className="text-[20px] text-[#ccc] min-h-[25px]">{text}</p>
          </div>

          <h1 className="mt-[20px]">
            <span className="font-['Great_Vibes',_cursive] text-[100px] font-normal tracking-[1px] bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(244,114,182,0.3)] inline-block animate-float pr-6">
              Sanjana Pal
            </span>
          </h1>

          <p className="mt-[10px] text-[16px] text-[#bbb]">
            Student at <b>Institute of Engineering and Technology, Lucknow</b> (2023–2027)
          </p>

          <div className="mt-[22px] max-w-[700px] font-mono text-sm sm:text-[15px] glass p-5 rounded-none border border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.5)] overflow-hidden relative">
            <div className="flex items-center gap-2 mb-4 border-b border-pink-400/50 pb-3">
              <div className="w-3 h-3 bg-rose-500 shadow-[0_0_10px_#f43f5e]"></div>
              <div className="w-3 h-3 bg-yellow-400 shadow-[0_0_10px_#facc15]"></div>
              <div className="w-3 h-3 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
              <span className="font-bold text-xs ml-2 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-400 animate-pulse drop-shadow-[0_0_3px_rgba(244,114,182,0.4)]">~ /PORTFOLIO/MISSION.SH</span>
            </div>
            <div 
              className="leading-[2] font-semibold"
              style={{ 
                background: "linear-gradient(90deg, #ffffff, #fbcfe8, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 6px rgba(236,72,153,0.2)" 
              }}
            >
              {[
                "Turning imagination into interactive digital experiences.",
                "Blending technology, design, and creativity to build modern web applications, AI-driven solutions, and memorable user journeys."
              ].map((line, lineIndex, arr) => (
                <div key={lineIndex} className="mb-3">
                  <span className="text-cyan-300 mr-3 inline-block">❯</span>
                  {line.split(" ").map((word, wordIndex) => {
                    const prevWordsCount = lineIndex === 0 ? 0 : arr[0].split(" ").length;
                    const globalIndex = prevWordsCount + wordIndex;
                    return (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.2, textShadow: "0 0 8px rgba(236,72,153,0.8)", zIndex: 10, position: "relative" }}
                        transition={{ delay: 0.5 + globalIndex * 0.08, duration: 0.2 }}
                        className="inline-block cursor-default mr-1"
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                  {lineIndex === arr.length - 1 && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                      className="inline-block w-3 h-5 bg-pink-400 ml-2 translate-y-1 shadow-[0_0_5px_rgba(236,72,153,0.5)]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="wavy-btn glass-pill-btn mt-[28px] px-[30px] py-[14px] border border-pink-500/60 text-pink-300 font-bold tracking-wide text-[16px] cursor-pointer shadow-[0_0_25px_rgba(236,72,153,0.6)] flex items-center gap-2 inline-flex"
            onClick={scrollToProjects}
            style={{ '--wavy-color': 'linear-gradient(to top, #ec4899, #ec4899)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              View Projects
            </span>
          </motion.button>

          {/* Optional Secondary Button */}
          <motion.a
            href="/RESUME_Sanjana_Pal.pdf"
            download="RESUME_Sanjana_Pal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="wavy-btn glass-pill-btn mt-[28px] ml-[15px] px-[30px] py-[14px] border border-pink-500/60 text-pink-300 font-bold tracking-wide text-[16px] cursor-pointer shadow-[0_0_25px_rgba(236,72,153,0.6)] flex items-center gap-2 inline-flex"
            style={{ '--wavy-color': 'linear-gradient(to top, #10b981, #ec4899)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Resume
            </span>
          </motion.a>

        </motion.div>

        {/* RIGHT PROFILE ID CARD */}
        <div className="relative flex justify-center items-center w-full max-w-[500px] mt-10 md:mt-0">
          <IDCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
        