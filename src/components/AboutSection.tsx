'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Pure Quality Seeds',
    description: 'Every seed batch is rigorously cleaned, graded, and tested before reaching the farmer.',
    color: '#0e6578',
    bg: '#dff0f7',
  },
  {
    icon: TrendingUp,
    title: 'High Yield Performance',
    description: 'Our groundnut varieties are selected for maximum germination rates and exceptional yield output.',
    color: '#0e6578',
    bg: '#dff0f7',
  },
  {
    icon: Shield,
    title: 'Disease Resistance',
    description: 'Hybrid varieties bred to withstand common groundnut diseases, reducing crop loss significantly.',
    color: '#df7810',
    bg: '#fef3e7',
  },
  {
    icon: Users,
    title: 'Farmer-First Approach',
    description: 'Built on 18 years of direct farmer relationships — guidance, support, and satisfaction guaranteed.',
    color: '#df7810',
    bg: '#fef3e7',
  },
];

const highlights = [
  'Certified premium groundnut & hybrid seeds',
  'Proper grading, cleaning & quality testing',
  'High germination rate assurance',
  'High oil content varieties',
  'Strong yield performance records',
  'Serving 1000s of farmers across Gujarat',
  'Direct sourcing for better pricing',
  '18 years of trusted agricultural expertise',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#f9fafb' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #dff0f7, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #a8d5e5, transparent 70%)' }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border"
            style={{ background: '#dff0f7', borderColor: '#a8d5e5', color: '#0e6578' }}>
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Our Story
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#093a46' }}>
            About <span style={{ color: '#0e6578' }}>Shaswat</span>{' '}
            <span style={{ color: '#df7810' }}>Agri Seeds</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.8 }}>
            Rooted in the fertile soil of Keshod, Gujarat — nurturing farmers with premium seeds for over 18 years.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* 18 years badge */}
            <div className="flex items-start gap-5 mb-8">
              <div className="flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #093a46, #0e6578)', boxShadow: '0 8px 30px rgba(9,58,70,0.25)' }}>
                <span className="text-3xl font-bold" style={{ color: '#df7810', fontFamily: 'Georgia, serif' }}>18</span>
                <span className="text-xs text-white/80 font-medium tracking-wide text-center" style={{ fontFamily: 'system-ui, sans-serif' }}>YEARS<br />TRUST</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: '#093a46' }}>
                  A Legacy Built on Farmer Trust
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Founded with a vision to empower Gujarat's farming community, Shaswat Agri Seeds has been a cornerstone of agricultural progress since 2006.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.9, fontSize: '15px' }}>
              <p>
                Situated at Sondarda, Keshod — the heart of Saurashtra's groundnut belt —
                we have dedicated nearly two decades to providing farmers with the finest quality seeds
                that guarantee exceptional harvests and sustained profitability.
              </p>
              <p>
                Our specialization in <strong style={{ color: '#0e6578' }}>premium groundnut seeds</strong> and
                <strong style={{ color: '#0e6578' }}> hybrid groundnut varieties</strong> has made us a trusted
                name across the region. We understand that the right seed is the foundation of every successful crop season.
              </p>
              <p>
                Every seed we supply undergoes stringent quality checks — proper grading, thorough cleaning,
                and comprehensive germination testing — ensuring that each farmer who invests in our seeds
                experiences maximum return on their investment.
              </p>
              <p>
                Our commitment extends beyond just selling seeds. We provide guidance, after-sale support,
                and build lasting relationships with the farming families who trust us season after season.
              </p>
            </div>

            {/* Highlights list */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0e6578' }} />
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'system-ui, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="space-y-4"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg group cursor-default"
                  style={{ background: 'white', borderColor: '#dff0f7', borderWidth: '1.5px' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0e6578';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(9,58,70,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#dff0f7';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: pillar.bg }}>
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1" style={{ fontFamily: 'Georgia, serif', color: '#093a46' }}>
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quality badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-4 p-5 rounded-2xl text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #093a46, #0e6578)' }}
            >
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='30' rx='12' ry='20' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(223,120,16,0.2)', border: '2px solid rgba(223,120,16,0.4)' }}>
                  <span className="text-xl" style={{ color: '#f5a028' }}>✓</span>
                </div>
                <div>
                  <div className="font-bold text-base" style={{ color: '#f5a028', fontFamily: 'Georgia, serif' }}>
                    Quality Certified
                  </div>
                  <div className="text-white/80 text-sm mt-0.5" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    All seeds tested for germination, purity &amp; vigour before supply to farmers.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
