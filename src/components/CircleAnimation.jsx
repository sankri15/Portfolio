import React from 'react';

export default function CircleAnimation() {
  // Generate 21 circles
  const circles = Array.from({ length: 21 }, (_, i) => i);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
      <div className="relative w-full h-[100vh] flex justify-center items-center pointer-events-none z-0 perspective-[1000px]">
        {circles.map((i) => (
          <div
            key={i}
            className="absolute rounded-full border-[3px] border-pink-400 bg-transparent"
            style={{
              '--i': i,
              width: `calc(${i} * 2.5vmin)`,
              height: `calc(${i} * 2.5vmin)`,
              transformStyle: 'preserve-3d',
              transform: 'rotateX(70deg) translateZ(50px)',
              animation: `animate-circle-3d 3s ease-in-out calc(${i} * 0.08s) infinite`,
              boxShadow: '0 0 15px rgba(244,114,182,0.6), inset 0 0 15px rgba(244,114,182,0.6)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
