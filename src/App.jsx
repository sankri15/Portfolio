import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`bg-[#0f0712] text-slate-200 min-h-screen selection:bg-pink-500/30 relative ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {/* Global Glitter / Starry Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={1} />
          {/* Stars */}
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
          {/* pink/Purple Sparkles */}
          <Sparkles count={400} scale={15} size={2} speed={0.4} color="#f472b6" opacity={0.6} />
          <Sparkles count={400} scale={15} size={3} speed={0.3} color="#c084fc" opacity={0.4} />
          <Sparkles count={400} scale={15} size={1} speed={0.5} color="#ffffff" opacity={0.8} />
        </Canvas>
        
        {/* CSS Shooting Stars */}
        {[...Array(2)].map((_, i) => (
          <div 
            key={`shooting-star-${i}`} 
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100 + 20}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 2 + 3}s` // Random duration between 3-5s
            }}
          />
        ))}
      </div>
      <CustomCursor />
      
      {!isLoading && (
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Workflow />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
// Trigger Vercel Build