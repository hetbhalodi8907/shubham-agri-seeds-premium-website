'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Star, Award, Leaf } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #093a46 0%, #0e6578 40%, #158899 70%, #0a4a5c 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large radial glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
          style={{ background: 'radial-gradient(circle, #df7810, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 -translate-x-1/3 translate-y-1/3"
          style={{ background: 'radial-gradient(circle, #f5a028, transparent 70%)' }} />

        {/* Subtle leaf pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='50' rx='20' ry='32' fill='none' stroke='%23ffffff' stroke-width='1.5' opacity='1' transform='rotate(20 50 50)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-16 h-16 opacity-20"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <ellipse cx="30" cy="30" rx="12" ry="22" fill="#df7810" transform="rotate(20 30 30)" />
            <ellipse cx="30" cy="30" rx="12" ry="22" fill="#f5a028" transform="rotate(-20 30 30)" opacity="0.6" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-32 right-16 w-20 h-20 opacity-15"
        >
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <ellipse cx="40" cy="40" rx="15" ry="28" fill="#df7810" transform="rotate(-15 40 40)" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-32 right-24 w-12 h-12 opacity-20"
        >
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
            <circle cx="25" cy="25" r="20" stroke="#df7810" strokeWidth="2" fill="none" />
            <circle cx="25" cy="25" r="10" fill="#df7810" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [12, -12, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-40 left-20 w-14 h-14 opacity-15"
        >
          <Leaf className="w-full h-full text-orange-300" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-orange-400/40"
              style={{ background: 'rgba(223, 120, 16, 0.15)' }}
            >
              <Award className="w-4 h-4" style={{ color: '#df7810' }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: '#f5a028', fontFamily: 'system-ui, sans-serif' }}>
                Trusted Since 2006 · Keshod, Gujarat
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Shaswat
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ fontFamily: 'Georgia, serif', color: '#f5a028' }}
            >
              Agri Seeds
            </motion.h1>

            {/* Orange divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="h-1 rounded-full mb-6"
              style={{ background: 'linear-gradient(90deg, #df7810, #f5a028)', margin: '0 0 24px 0' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-white/80 mb-3 font-light"
              style={{ fontFamily: 'Georgia, serif', lineHeight: 1.7 }}
            >
              Premium Quality Seeds for Your Farm
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl mb-6 font-semibold"
              style={{ color: '#f5a028', fontFamily: 'Georgia, serif', lineHeight: 1.7 }}
            >
              Groundnut &amp; Hybrid Seeds
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/70 text-base mb-10 max-w-lg"
              style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.8 }}
            >
              Premium quality seeds with high germination rate, high oil content, and strong yield performance —
              properly graded, cleaned &amp; quality-tested for maximum farmer profit.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScroll('#products')}
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #df7810, #f5a028)',
                  color: '#093a46',
                  boxShadow: '0 8px 30px rgba(223,120,16,0.4)',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Explore Our Seeds
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: 'white',
                  background: 'rgba(255,255,255,0.08)',
                  fontFamily: 'system-ui, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                }}
              >
                Enquire Now
              </button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '18+', label: 'Years Experience' },
                { value: '10+', label: 'Seed Varieties' },
                { value: '1000s', label: 'Happy Farmers' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold" style={{ color: '#f5a028', fontFamily: 'Georgia, serif' }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/60 tracking-wide uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed opacity-30"
                style={{ borderColor: '#df7810' }}
              />
              {/* Inner glow circle */}
              <div className="absolute inset-4 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(223,120,16,0.2) 0%, rgba(14,101,120,0.1) 60%, transparent 100%)' }} />

              {/* Center emblem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full flex flex-col items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg, rgba(9,58,70,0.8) 0%, rgba(14,101,120,0.6) 100%)', border: '3px solid rgba(223,120,16,0.4)', backdropFilter: 'blur(10px)' }}>

                  {/* Leaf icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-3 animate-float"
                    style={{ background: 'linear-gradient(135deg, #df7810, #f5a028)' }}>
                    <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none">
                      <ellipse cx="30" cy="25" rx="12" ry="20" fill="#093a46" opacity="0.9" transform="rotate(-15 30 25)" />
                      <ellipse cx="30" cy="25" rx="12" ry="20" fill="#0e6578" opacity="0.8" transform="rotate(15 30 25)" />
                      <ellipse cx="30" cy="30" rx="8" ry="14" fill="#093a46" />
                      <circle cx="30" cy="46" r="6" fill="#093a46" />
                      <line x1="30" y1="37" x2="30" y2="42" stroke="#df7810" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="30" cy="30" r="3" fill="#df7810" opacity="0.9" />
                    </svg>
                  </div>

                  <div className="text-center">
                    <p className="text-white font-bold text-xl" style={{ fontFamily: 'Georgia, serif' }}>Premium</p>
                    <p className="font-bold text-xl" style={{ color: '#f5a028', fontFamily: 'Georgia, serif' }}>Seeds</p>
                    <div className="flex items-center gap-1 mt-2 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#f5a028' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting badges */}
              {[
                { label: 'High Yield', angle: 0, delay: 0 },
                { label: 'High Oil', angle: 90, delay: 0.5 },
                { label: 'Strong Germ.', angle: 180, delay: 1 },
                { label: 'Disease Res.', angle: 270, delay: 1.5 },
              ].map((badge) => {
                const rad = (badge.angle * Math.PI) / 180;
                const r = 155;
                const x = 50 + (r / (320 / 100)) * Math.cos(rad - Math.PI / 2);
                const y = 50 + (r / (320 / 100)) * Math.sin(rad - Math.PI / 2);
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + badge.delay, type: 'spring' }}
                    className="absolute px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(9,58,70,0.9)',
                      border: '1px solid rgba(223,120,16,0.5)',
                      color: '#f5a028',
                      fontSize: '10px',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {badge.label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}
