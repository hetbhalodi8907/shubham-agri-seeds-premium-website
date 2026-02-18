'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 3000);
    const t3 = setTimeout(() => onComplete(), 3700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d3d1a 0%, #1a5c2a 45%, #2e7d32 75%, #1b5e20 100%)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Background decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #d4a017, transparent)' }} />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #d4a017, transparent)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
              style={{ background: 'radial-gradient(circle, #f5c842, transparent)' }} />
          </div>

          {/* Leaf/grain decoration */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='40' rx='15' ry='25' fill='none' stroke='%23ffffff' stroke-width='1' opacity='1' transform='rotate(30 40 40)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
              {/* Logo Image */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.1 }}
                className="relative"
              >
                <div className="w-36 h-36 rounded-full bg-white shadow-2xl flex items-center justify-center relative overflow-hidden"
                  style={{ boxShadow: '0 0 40px rgba(212,160,23,0.5), 0 0 80px rgba(212,160,23,0.2)' }}>
                  <Image
                    src="/logo.jpg"
                    alt="Shubham Agri Seeds"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
                {/* Gold ring pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-60"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                Shubham
              </h1>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight"
                style={{ color: '#d4a017', fontFamily: 'Georgia, serif', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                Agri Seeds
              </h1>
            </motion.div>

            {/* Animated tagline */}
            <AnimatePresence>
              {phase === 'text' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-0.5 rounded-full mx-auto" style={{ background: '#d4a017' }} />
                  <p className="text-lg sm:text-xl text-white/90 font-light tracking-wider"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    18 Years of Trust in Premium Seeds
                  </p>
                  <div className="w-16 h-0.5 rounded-full mx-auto" style={{ background: '#d4a017' }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-2 mt-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#d4a017' }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
