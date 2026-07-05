import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/atsphoto.png';

const IDCard = () => {
  return (
    <div className="relative w-full max-w-[340px] flex justify-center perspective-[1000px]">
      
      {/* The Lanyard String (Above the card) */}
      <motion.div 
        initial={{ y: -800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-4 h-[250px] bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-0 rounded-t-full"
      ></motion.div>

      {/* The ID Card Body */}
      <motion.div
        initial={{ y: -800, rotateX: 20, rotateZ: -10, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, rotateZ: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, mass: 1.5, delay: 0.2 }}
        className="relative z-10 w-[320px] h-[520px] rounded-3xl p-1 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(236,72,153,0.2)] flex flex-col items-center group"
      >
        {/* Continuous Sway Animation */}
        <motion.div
          animate={{ rotateZ: [-1, 1.5, -1], rotateY: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-full h-full relative flex flex-col items-center pt-8 pb-6 px-6"
        >
          {/* Metal Clip & Punch Hole */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
            {/* Metal Clip */}
            <div className="w-10 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-md border border-gray-400 shadow-md"></div>
            {/* Punch Hole */}
            <div className="w-14 h-4 bg-[#1a0c12] rounded-full mt-2 shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)] border border-white/10"></div>
          </div>

          {/* Header */}
          <div className="w-full flex justify-between items-center mb-6 mt-4">
            <span className="text-pink-300 font-black tracking-widest text-sm uppercase">Developer ID</span>
            <span className="text-white/40 font-mono text-xs tracking-widest">2023-2027</span>
          </div>

          {/* Profile Photo */}
          <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden border-2 border-pink-400/50 shadow-[0_0_20px_rgba(236,72,153,0.3)] mb-6 p-1 bg-white/5">
            <img 
              src={profile} 
              alt="Sanjana Pal" 
              className="w-full h-full object-cover rounded-xl"
              style={{ objectPosition: 'center top' }}
            />
          </div>

          {/* Details */}
          <div className="w-full text-center flex flex-col gap-1 mb-6">
            <h2 className="text-3xl font-black text-white tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Sanjana Pal</h2>
            <p className="text-pink-300 font-semibold text-sm tracking-widest uppercase">AI & Web Developer</p>
            <p className="text-cyan-300 font-mono text-xs mt-1 bg-cyan-900/30 py-1 px-3 rounded-full mx-auto border border-cyan-500/30">Available for Internships</p>
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Email Button */}
          <div className="w-full flex justify-center pb-2 px-6">
            <a 
              href="mailto:sanjanapal004@gmail.com"
              className="w-full py-2.5 rounded-full text-[11px] font-bold text-pink-300 border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)] glass-pill-btn wavy-btn flex justify-center items-center gap-2 transition-transform hover:scale-[1.03]"
              style={{ '--wavy-color': 'linear-gradient(to top, #ec4899, #ec4899)' }}
            >
              <span className="relative z-10 flex items-center gap-2 tracking-widest">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                HIRE ME
              </span>
            </a>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default IDCard;
