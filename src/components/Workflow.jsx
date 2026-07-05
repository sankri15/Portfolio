import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '../data';

const workflowSteps = [
  { id: 1, label: 'IDEA', icon: '💡', color: 'text-yellow-400', border: 'border-yellow-500/30' },
  { id: 2, label: 'PLAN', icon: '📋', color: 'text-orange-400', border: 'border-orange-500/30' },
  { id: 3, label: 'AI HELP', icon: '🧠', color: 'text-purple-400', border: 'border-purple-500/30' },
  { id: 4, label: '.CODE', icon: '</>', color: 'text-cyan-400', border: 'border-cyan-500/30' },
  { id: 5, label: 'REVIEW', icon: '🔍', color: 'text-pink-400', border: 'border-pink-500/30' },
  { id: 6, label: 'TEST', icon: '🧪', color: 'text-rose-400', border: 'border-rose-500/30' },
  { id: 7, label: 'LEARN', icon: '📖', color: 'text-slate-300', border: 'border-slate-500/30' },
];

export default function Workflow() {
  const [activeIcon, setActiveIcon] = React.useState(null);

  return (
    <section id="workflow" className="section relative z-10 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Area */}
        <div className="relative mb-12">
          <div className="flex flex-col">
            <span className="text-xs tracking-[5px] text-pink-500/60 uppercase mb-2">
              Skills - Workflow - Identity
            </span>
            <h2 className="text-6xl sm:text-7xl font-bold text-white relative z-10">
              Reach O<span className="opacity-80">u</span>t
            </h2>
          </div>
          
          {/* Glowing Orbs around heading */}
          <motion.div 
            animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 left-4 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/50 blur-[2px]"
          />
          <motion.div 
            animate={{ y: [0, 10, 0], x: [0, -5, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-8 left-48 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/30"
          />
        </div>

        {/* Glass Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12 border border-pink-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Inner Glows */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500/10 blur-[100px] pointer-events-none"></div>

          {/* WORKFLOW ROW */}
          <div className="mb-16 relative">
            <h3 className="text-xs font-bold tracking-[4px] text-slate-400 uppercase mb-8">Workflow</h3>
            
            <div className="relative flex justify-between items-center w-full">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-slate-500/20 z-0"></div>

              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 relative z-10"
                >
                  <motion.div 
                    onClick={() => setActiveIcon(step.id)}
                    whileHover={{ y: -5, boxShadow: "0 0 20px rgba(244,114,182,0.3)" }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ y: { duration: 3, repeat: Infinity, delay: index * 0.2 } }}
                    className={`w-16 h-16 rounded-2xl bg-[#110815] border ${step.border} flex items-center justify-center text-2xl shadow-lg cursor-pointer transition-colors hover:bg-[#1a0c20] relative overflow-hidden`}
                  >
                    {/* Wavy Fill Animation */}
                    {activeIcon === step.id && (
                      <div 
                        className="absolute left-[-50%] w-[200%] h-[200%] bg-gradient-to-t from-pink-500 via-purple-500 to-cyan-500 z-0 opacity-80" 
                        style={{ 
                          borderRadius: '40%',
                          animation: 'spin-wave 3s linear infinite, fill-wave 1s forwards' 
                        }}
                      ></div>
                    )}
                    <span className={`relative z-10 ${activeIcon === step.id ? 'text-white' : step.color}`}>{step.icon}</span>
                  </motion.div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeIcon === step.id ? 'text-pink-400' : 'text-slate-400'}`}>{step.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/10 to-transparent mb-12"></div>

          {/* HIT ME UP ROW */}
          <div>
            <h3 className="text-xs font-bold tracking-[4px] text-slate-400 uppercase mb-8">Hit Me Up</h3>
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Mail */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${PERSONAL.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wavy-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a0c12] border border-rose-500/30 text-rose-400 font-semibold text-sm shadow-[0_0_15px_rgba(225,29,72,0.1)] hover:bg-[#2a131c] transition-colors"
                style={{ '--wavy-color': 'linear-gradient(to top, #e11d48, #f43f5e)' }}
              >
                <span>✉️</span> <span>Mail</span>
              </motion.a>

              {/* GitHub */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="wavy-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] border border-slate-500/30 text-slate-200 font-semibold text-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:bg-[#222] transition-colors"
                style={{ '--wavy-color': 'linear-gradient(to top, #64748b, #cbd5e1)' }}
              >
                <span>🐙</span> <span>GitHub</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="wavy-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a1929] border border-pink-500/30 text-pink-400 font-semibold text-sm shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:bg-[#0f2942] transition-colors"
                style={{ '--wavy-color': 'linear-gradient(to top, #0284c7, #38bdf8)' }}
              >
                <span>💼</span> <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
