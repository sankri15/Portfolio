import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/atsphoto.png";

function Contact() {
  const [hovered, setHovered] = useState(null);

  // typing animation text
  const text = "Let's Connect";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index === text.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, deleting]);

  const contacts = [
    {
      title: "Gmail",
      value: "sanjanapal004@gmail.com",
      link: "mailto:sanjanapal004@gmail.com",
      Icon: FaEnvelope,
      bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      color: "from-red-500 to-pink-500",
      usePhoto: false,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/sanjpal",
      link: "https://www.linkedin.com/in/sanjpal",
      Icon: FaLinkedin,
      bg: myPhoto, // ONLY here your photo
      color: "from-sky-500 to-blue-600",
      usePhoto: true,
    },
  ];

  return (
    <section id="contact" className="py-24">

      <div className="max-w-4xl mx-auto px-4">

        {/* Animated Heading */}
        <h2 className="text-5xl font-bold text-center mb-12 font-serif italic text-purple-400">
          {displayText}
          <span className="border-r-2 border-purple-400 ml-1 animate-pulse"></span>
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-6">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-[1.03] transition duration-500"
            >

              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage:
                    hovered === index ? `url(${item.bg})` : "none",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition"></div>

              {/* Content */}
              <div className="relative p-6 flex items-center gap-5 text-white">

                {/* Icon */}
                <div
                  className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}
                >
                  <item.Icon />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.value}</p>
                </div>

                {/* Arrow */}
                <div className="ml-auto text-white/60 group-hover:translate-x-2 transition">
                  →
                </div>

              </div>
            </a>
          ))}

        </div>

        {/* Footer text BELOW cards (centered) */}
        <div className="text-center mt-10 text-slate-400 text-sm">
          © 2026 Sanjana Pal — All Rights Reserved
        </div>

      </div>
    </section>
  );
}

export default Contact;