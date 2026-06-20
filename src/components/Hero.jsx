
import React, { useEffect, useState } from "react";

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

  return (
    <section style={styles.hero}>

      {/* GLOW BACKGROUND */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* BIG SP WATERMARK */}
      <div style={styles.bgText}>SP</div>

      {/* CENTER CONTENT */}
      <div style={styles.center}>

        {/* LIVE STATUS */}
        <div style={styles.statusRow}>
          <span style={styles.dot}></span>
          <p style={styles.status}>{text}</p>
        </div>

        {/* NAME */}
        <h1 style={styles.name}>
          <span style={styles.cursive}>Sanjana Pal</span>
        </h1>

        {/* COLLEGE */}
        <p style={styles.college}>
          Student at <b>Institute of Engineering and Technology, Lucknow</b> (2023–2027)
        </p>

        {/* ABOUT */}
        <p style={styles.about}>
          Passionate Frontend Developer crafting clean, modern and interactive
          web experiences using React, UI design principles and creativity.
        </p>

        {/* BUTTON */}
        <button style={styles.button}>View Projects</button>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes glow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
            100% { opacity: 0.4; transform: scale(1); }
          }

          @keyframes floatText {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-6px) scale(1.02); }
            100% { transform: translateY(0px) scale(1); }
          }
        `}
      </style>

    </section>
  );
};

const styles = {

  hero: {
    height: "100vh",
    width: "100%",
    background: "#050816",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 6%",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif",
  },

  glow1: {
    position: "absolute",
    width: "320px",
    height: "320px",
    background: "#7c3aed",
    filter: "blur(140px)",
    opacity: 0.4,
    top: "-80px",
    left: "-80px",
    animation: "glow 6s infinite ease-in-out",
  },

  glow2: {
    position: "absolute",
    width: "320px",
    height: "320px",
    background: "#00f5ff",
    filter: "blur(140px)",
    opacity: 0.3,
    bottom: "-80px",
    right: "-80px",
    animation: "glow 7s infinite ease-in-out",
  },

  bgText: {
    position: "absolute",
    fontSize: "260px",
    fontWeight: "900",
    color: "rgba(255,255,255,0.03)",
    letterSpacing: "25px",
    left: "50%",
    transform: "translateX(-50%)",
    userSelect: "none",
  },

  center: {
    zIndex: 2,
    maxWidth: "850px",
  },

  statusRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  dot: {
    width: "10px",
    height: "10px",
    background: "red",
    borderRadius: "50%",
    boxShadow: "0 0 12px red",
  },

  status: {
    fontSize: "20px",
    color: "#aaa",
    minHeight: "25px",
  },

  name: {
    marginTop: "20px",
  },

  cursive: {
    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
    fontSize: "90px",
    fontWeight: "700",
    letterSpacing: "2px",
    background: "linear-gradient(90deg,#00f5ff,#7c3aed,#ff4ecd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(124,58,237,0.3)",
    animation: "floatText 4s ease-in-out infinite",
    display: "inline-block",
  },

  college: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#bbb",
  },

  about: {
    marginTop: "18px",
    fontSize: "15px",
    color: "#888",
    lineHeight: "1.7",
  },

  button: {
    marginTop: "28px",
    padding: "14px 30px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#00f5ff,#7c3aed)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};

export default Hero;