import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 800, damping: 28, mass: 0.2 };
  const s1x = useSpring(cursorX, springConfig);
  const s1y = useSpring(cursorY, springConfig);

  const s2x = useSpring(cursorX, { stiffness: 400, damping: 28, mass: 0.3 });
  const s2y = useSpring(cursorY, { stiffness: 400, damping: 28, mass: 0.3 });

  const s3x = useSpring(cursorX, { stiffness: 200, damping: 28, mass: 0.4 });
  const s3y = useSpring(cursorY, { stiffness: 200, damping: 28, mass: 0.4 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON'].includes(e.target.tagName) || e.target.closest('a, button')) {
        setIsHoveringBtn(true);
      } else {
        setIsHoveringBtn(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-[99999]">
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-pink-400 shadow-[0_0_15px_rgba(236,72,153,1)] backdrop-blur-md animate-pulse"
        style={{
          x: s1x,
          y: s1y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHoveringBtn ? 1.5 : 1,
          backgroundColor: isHoveringBtn ? 'rgba(236,72,153, 0.8)' : 'rgba(236,72,153, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-purple-500/50 shadow-[0_0_10px_#a855f7]"
        style={{
          x: s2x,
          y: s2y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHoveringBtn ? 1.5 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400/50 shadow-[0_0_8px_#22d3ee]"
        style={{
          x: s3x,
          y: s3y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHoveringBtn ? 0 : 1,
        }}
      />
    </div>
  );
}
