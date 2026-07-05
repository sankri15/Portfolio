import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      // Simulate random loading jumps
      const jump = Math.floor(Math.random() * 15) + 1;
      currentProgress += jump;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setStatus("SYSTEM READY");
        setTimeout(() => {
          onComplete();
        }, 1000); // Wait 1 second at 100% before finishing
      } else {
        // Change text based on progress
        if (currentProgress > 30 && currentProgress < 60) {
          setStatus("DOWNLOADING ASSETS...");
        } else if (currentProgress >= 60 && currentProgress < 90) {
          setStatus("ESTABLISHING CONNECTION...");
        } else if (currentProgress >= 90) {
          setStatus("FINALIZING PROTOCOLS...");
        }
      }
      setProgress(currentProgress);
    }, 300); // Tick every 300ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -200, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[999999] bg-[#050105] flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[600px] px-8">
        
        {/* Text Header */}
        <div className="flex justify-between items-end mb-4">
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-pink-400 text-sm tracking-[0.3em] font-bold"
          >
            {status}
          </motion.div>
          <div className="text-cyan-300 text-2xl font-black tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            {progress}%
          </div>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full h-3 bg-gray-900/80 rounded-full overflow-hidden border border-gray-800 shadow-[inset_0_0_10px_rgba(0,0,0,1)] p-0.5">
          {/* Fill */}
          <motion.div 
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.3 }}
          >
            {/* Blinking tip */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 animate-pulse rounded-full blur-[2px]"></div>
          </motion.div>
        </div>
        
        {/* Footer Details */}
        <div className="w-full flex justify-end mt-4 text-[10px] text-gray-500 tracking-[0.2em]">
          <span>SECURE CONNECTION</span>
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;
