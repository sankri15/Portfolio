import React, { useEffect, useState } from "react";
import profile from "../assets/atsphoto.png";

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
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section style={styles.hero}>
      {/* GLOW BACKGROUND */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* BIG SP WATERMARK */}
      <div style={styles.bgText}>SP</div>

      <div style={styles.contentWrapper}>
        {/* LEFT CONTENT */}
        <div style={styles.center}>
          <div style={styles.statusRow}>
            <span style={styles.dot}></span>
            <p style={styles.status}>{text}</p>
          </div>

          <h1 style={styles.name}>
            <span style={styles.cursive}>Sanjana Pal</span>
          </h1>

          <p style={styles.college}>
            Student at <b>Institute of Engineering and Technology, Lucknow</b>{" "}
            (2023–2027)
          </p>

          <div style={styles.about}>
  <div style={styles.mask}>
    <span
      style={{
        ...styles.line,
        animationDelay: "0.1s",
      }}
    >
      Turning imagination into
    </span>
  </div>

  <div style={styles.mask}>
    <span
      style={{
        ...styles.line,
        animationDelay: "0.25s",
      }}
    >
      interactive digital experiences ✨.
    </span>
  </div>

  <div style={styles.mask}>
    <span
      style={{
        ...styles.line,
        animationDelay: "0.4s",
      }}
    >
      Blending technology, design, and creativity
    </span>
  </div>

  <div style={styles.mask}>
    <span
      style={{
        ...styles.line,
        animationDelay: "0.55s",
      }}
    >
      to build modern web applications,
    </span>
  </div>

  <div style={styles.mask}>
    <span
      style={{
        ...styles.line,
        animationDelay: "0.7s",
      }}
    >
      AI-driven solutions, and memorable user journeys.
    </span>
  </div>
</div>

          <button
            style={styles.button}
            onClick={scrollToProjects}
          >
            View Projects
          </button>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div style={styles.imageContainer}>
          <div style={styles.imageGlow}></div>

          <img
            src={profile}
            alt="Sanjana Pal"
            style={styles.profileImage}
          />
        </div>
      </div>

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

          @keyframes floatImage {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          @keyframes revealLine {
  from {
    transform: translateY(120%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
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
    padding: "0 6%",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif",
  },

  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1400px",
    gap: "60px",
    zIndex: 2,
    flexWrap: "wrap",
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
    flex: 1,
    minWidth: "400px",
    textAlign: "left",
  },

  statusRow: {
    display: "flex",
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
    fontFamily: "'Great Vibes', cursive",
    fontSize: "100px",
    fontWeight: "400",
    letterSpacing: "1px",
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
  marginTop: "22px",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
},

mask: {
  overflow: "hidden",
},

line: {
  display: "inline-block",
  color: "#9ca3af",
  fontSize: "16px",
  lineHeight: "1.8",
  transform: "translateY(120%)",
  opacity: 0,
  animation: "revealLine .8s ease forwards",
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
  },

  imageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imageGlow: {
    position: "absolute",
    width: "380px",
    height: "380px",
    background: "linear-gradient(#00f5ff,#7c3aed)",
    borderRadius: "50%",
    filter: "blur(70px)",
    opacity: 0.45,
  },

  profileImage: {
    width: "350px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "4px solid rgba(255,255,255,0.15)",
    boxShadow: "0 0 40px rgba(124,58,237,0.4)",
    position: "relative",
    zIndex: 2,
    animation: "floatImage 5s ease-in-out infinite",
  },
};

export default Hero;        
