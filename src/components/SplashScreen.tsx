'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 900);
    const t2 = setTimeout(() => setPhase('exit'), 3800);
    const t3 = setTimeout(() => onComplete(), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a2e10 0%, #0d3d1a 40%, #1a5c2a 70%, #2e7d32 100%)' }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated radial glow background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,160,23,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Subtle grain texture */}
          <div className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='40' rx='15' ry='25' fill='none' stroke='%23ffffff' stroke-width='1' transform='rotate(30 40 40)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-40 h-40 opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 0% 0%, #d4a017, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 100% 100%, #d4a017, transparent 70%)' }} />

          {/* Orbiting ring (large) */}
          <motion.div
            className="absolute rounded-full border border-yellow-500/20"
            style={{ width: '70vmin', height: '70vmin' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute rounded-full border border-green-400/10"
            style={{ width: '85vmin', height: '85vmin' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          />

          {/* ─── MAIN CONTENT ─── */}
          <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center w-full">

            {/* ── LOGO – half-page size ── */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.15 }}
            >
              {/* Outer glow ring pulse */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '52vmin',
                  height: '52vmin',
                  border: '2px solid rgba(212,160,23,0.55)',
                }}
                animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0, 0.55] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Second slower ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '58vmin',
                  height: '58vmin',
                  border: '1px solid rgba(212,160,23,0.25)',
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />

              {/* Logo circle */}
              <motion.div
                className="relative rounded-full bg-white flex items-center justify-center overflow-hidden"
                style={{
                  width: '46vmin',
                  height: '46vmin',
                  minWidth: 180,
                  minHeight: 180,
                  maxWidth: 380,
                  maxHeight: 380,
                  boxShadow: '0 0 60px rgba(212,160,23,0.45), 0 0 120px rgba(212,160,23,0.15), 0 20px 60px rgba(0,0,0,0.5)',
                }}
                animate={{ boxShadow: [
                  '0 0 60px rgba(212,160,23,0.45), 0 0 120px rgba(212,160,23,0.15), 0 20px 60px rgba(0,0,0,0.5)',
                  '0 0 80px rgba(212,160,23,0.7), 0 0 160px rgba(212,160,23,0.25), 0 20px 60px rgba(0,0,0,0.5)',
                  '0 0 60px rgba(212,160,23,0.45), 0 0 120px rgba(212,160,23,0.15), 0 20px 60px rgba(0,0,0,0.5)',
                ]}}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/logo.jpg"
                  alt="Shubham Agri Seeds Logo"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-center gap-1"
            >
              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
                style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
              >
                Shubham
              </h1>
              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
                style={{ color: '#d4a017', fontFamily: 'Georgia, serif', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
              >
                Agri Seeds
              </h1>
            </motion.div>

            {/* Tagline — appears in 'text' phase */}
            <AnimatePresence>
              {phase === 'text' && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="h-px rounded-full"
                      style={{ background: 'linear-gradient(to right, transparent, #d4a017)', width: 48 }}
                      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }}
                    />
                    <p className="text-base sm:text-xl text-white/90 font-light tracking-widest uppercase"
                      style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
                      18 Years of Trust
                    </p>
                    <motion.div
                      className="h-px rounded-full"
                      style={{ background: 'linear-gradient(to left, transparent, #d4a017)', width: 48 }}
                      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-sm sm:text-base text-white/60 tracking-wider">
                    Premium Groundnut &amp; Hybrid Seeds · Gujarat, India
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-2 mt-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#d4a017' }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.22 }}
                />
              ))}
            </motion.div>

          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
