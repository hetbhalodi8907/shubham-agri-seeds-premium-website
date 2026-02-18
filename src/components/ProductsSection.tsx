'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, TrendingUp, Zap, Shield, Leaf } from 'lucide-react';

const seedVarieties = [
  {
    id: 'g20',
    name: 'G-20',
    category: 'Traditional',
    tagline: 'The Classic Performer',
    description: 'One of the most widely grown groundnut varieties in Gujarat. Adaptable to diverse soil types with consistent yield performance season after season.',
    benefits: ['High Germination Rate', 'High Oil Content', 'Strong Yield', 'Drought Tolerant'],
    highlight: 'Oil Content: 48-50%',
    color: '#1a5c2a',
    accent: '#e8f5e9',
  },
  {
    id: 'g22',
    name: 'G-22',
    category: 'Traditional',
    tagline: 'Reliable & Robust',
    description: 'Known for excellent pod filling and strong plant establishment. G-22 is a favourite among experienced Saurashtra farmers for its predictable output.',
    benefits: ['High Yield', 'Disease Resistant', 'Good Pod Filling', 'Heat Tolerant'],
    highlight: 'Yield: 20-25 Q/Ha',
    color: '#1a5c2a',
    accent: '#e8f5e9',
  },
  {
    id: 'g32',
    name: 'G-32',
    category: 'Traditional',
    tagline: 'Superior Oil Yield',
    description: 'Prized for its remarkably high oil content, G-32 delivers superior kernel quality and excellent shelling percentage, making it highly profitable.',
    benefits: ['High Oil Content', 'Large Kernels', 'Early Maturity', 'Good Storability'],
    highlight: 'Oil Content: 50-52%',
    color: '#d4a017',
    accent: '#fef9e7',
  },
  {
    id: 'g24',
    name: 'G-24',
    category: 'Traditional',
    tagline: 'The Sturdy Grower',
    description: 'Developed for resistance to common foliar diseases. G-24 ensures crop health even in challenging weather, giving farmers peace of mind.',
    benefits: ['Disease Resistant', 'Strong Stem', 'Uniform Maturity', 'High Yield'],
    highlight: 'Maturity: 105-110 days',
    color: '#1a5c2a',
    accent: '#e8f5e9',
  },
  {
    id: 'no37',
    name: 'No. 37',
    category: 'Popular',
    tagline: 'Mass Favourite',
    description: 'A staple variety for Gujarat farmers. No. 37 offers dependable yields with excellent market acceptance for both oil extraction and direct consumption.',
    benefits: ['High Germination', 'Market Preferred', 'Good Yield', 'Adaptable'],
    highlight: 'Germination: 92%+',
    color: '#d4a017',
    accent: '#fef9e7',
  },
  {
    id: 'no38',
    name: 'No. 38',
    category: 'Popular',
    tagline: 'Balanced Performer',
    description: 'No. 38 is celebrated for achieving an ideal balance of yield quantity and seed quality, consistently delivering results across different soil profiles.',
    benefits: ['Balanced Growth', 'High Oil Content', 'Disease Tolerant', 'Good Root System'],
    highlight: 'Oil Content: 49%',
    color: '#1a5c2a',
    accent: '#e8f5e9',
  },
  {
    id: 'no39',
    name: 'No. 39',
    category: 'Popular',
    tagline: 'High Yield Champion',
    description: 'An upgraded variety offering significantly higher pod yield compared to older varieties. No. 39 is gaining rapid popularity among progressive farmers.',
    benefits: ['Very High Yield', 'Bigger Pods', 'Strong Germination', 'Pest Tolerant'],
    highlight: 'Yield: 25-30 Q/Ha',
    color: '#d4a017',
    accent: '#fef9e7',
  },
  {
    id: 'sona',
    name: 'Sona',
    category: 'Special',
    tagline: 'Golden Harvest',
    description: 'True to its name (meaning "Gold"), Sona variety delivers golden pod quality with exceptional seed fill and outstanding oil recovery per hectare.',
    benefits: ['Premium Quality', 'High Oil Recovery', 'Golden Kernels', 'Market Premium'],
    highlight: 'Market Value: Premium',
    color: '#d4a017',
    accent: '#fef9e7',
  },
  {
    id: 'girnar4',
    name: 'Girnar 4',
    category: 'Hybrid',
    tagline: 'Modern Hybrid Power',
    description: 'A scientifically developed hybrid variety from Gujarat Agricultural University. Girnar 4 combines high yield potential with excellent disease resistance.',
    benefits: ['High Yield Hybrid', 'Disease Resistant', 'University Certified', 'High Oil Content'],
    highlight: 'Yield: 30+ Q/Ha',
    color: '#1a5c2a',
    accent: '#e8f5e9',
  },
  {
    id: 'girnar5',
    name: 'Girnar 5',
    category: 'Hybrid',
    tagline: 'Next-Gen Agriculture',
    description: 'The latest premium hybrid offering from Gujarat Agricultural University. Girnar 5 sets the benchmark for modern groundnut cultivation with superior traits.',
    benefits: ['Superior Performance', 'Very High Yield', 'Best Oil Content', 'Premium Grade'],
    highlight: 'Oil Content: 52%+',
    color: '#d4a017',
    accent: '#fef9e7',
  },
];

const benefitIcons: Record<string, React.ElementType> = {
  'High Yield': TrendingUp,
  'High Oil Content': Droplets,
  'High Germination Rate': Zap,
  'Disease Resistant': Shield,
  'High Germination': Zap,
  'Strong Yield': TrendingUp,
  'Very High Yield': TrendingUp,
  'High Yield Hybrid': TrendingUp,
  'Superior Performance': TrendingUp,
  'University Certified': Shield,
  'Market Preferred': TrendingUp,
  'Premium Quality': Shield,
  'Golden Kernels': Droplets,
  'High Oil Recovery': Droplets,
  'Best Oil Content': Droplets,
  'High Yield Champion': TrendingUp,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Traditional: { bg: '#e8f5e9', text: '#1a5c2a', border: '#c8e6c9' },
  Popular: { bg: '#fff8e1', text: '#b8860b', border: '#ffe082' },
  Special: { bg: '#fce4ec', text: '#c62828', border: '#f48fb1' },
  Hybrid: { bg: '#e3f2fd', text: '#1565c0', border: '#90caf9' },
};

function SeedCard({ seed, index }: { seed: typeof seedVarieties[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const catStyle = categoryColors[seed.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
      className="seed-card rounded-2xl overflow-hidden bg-white flex flex-col"
      style={{ boxShadow: '0 4px 20px rgba(13,61,26,0.08)', border: '1.5px solid #e8f5e9' }}
    >
      {/* Image placeholder */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${seed.color}15 0%, ${seed.color}08 100%)` }}>
        {/* Abstract seed visualization */}
        <div className="relative">
          <div className="w-20 h-28 rounded-[40%_40%_50%_50%] flex items-center justify-center relative"
            style={{ background: `linear-gradient(160deg, ${seed.color}30, ${seed.color}60)`, border: `2px solid ${seed.color}40` }}>
            <div className="w-12 h-16 rounded-[40%_40%_50%_50%]"
              style={{ background: `linear-gradient(160deg, ${seed.color}50, ${seed.color}90)` }} />
          </div>
          <div className="absolute -right-6 top-2 w-14 h-20 rounded-[40%_40%_50%_50%] opacity-60"
            style={{ background: `linear-gradient(160deg, ${seed.color}20, ${seed.color}50)`, border: `1.5px solid ${seed.color}30` }} />
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: catStyle.bg, color: catStyle.text, border: `1px solid ${catStyle.border}`, fontFamily: 'system-ui, sans-serif' }}>
          {seed.category}
        </div>

        {/* Highlight pill */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: seed.color === '#d4a017' ? 'rgba(212,160,23,0.9)' : 'rgba(26,92,42,0.9)', fontFamily: 'system-ui, sans-serif' }}>
          {seed.highlight}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif', color: '#0d3d1a' }}>
              {seed.name}
            </h3>
            <Leaf className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: seed.color }} />
          </div>
          <p className="text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: seed.color, fontFamily: 'system-ui, sans-serif' }}>
            {seed.tagline}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.7 }}>
            {seed.description}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-auto pt-4 border-t" style={{ borderColor: '#e8f5e9' }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#666', fontFamily: 'system-ui, sans-serif' }}>Key Benefits</p>
          <div className="flex flex-wrap gap-1.5">
            {seed.benefits.map((benefit) => {
              const Icon = benefitIcons[benefit] || Leaf;
              return (
                <div
                  key={benefit}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: seed.color === '#d4a017' ? '#fef9e7' : '#e8f5e9',
                    color: seed.color === '#d4a017' ? '#b8860b' : '#1a5c2a',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  <Icon className="w-3 h-3" />
                  {benefit}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="products" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #f1f8e9 100%)' }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -mt-px">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,20 C360,60 1080,0 1440,40 L1440,0 L0,0 Z" fill="#f9fafb" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border"
            style={{ background: '#e8f5e9', borderColor: '#c8e6c9', color: '#1a5c2a' }}>
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Our Seed Varieties
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d3d1a' }}>
            Premium <span style={{ color: '#1a5c2a' }}>Groundnut</span> &amp;{' '}
            <span style={{ color: '#d4a017' }}>Hybrid Seeds</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.8 }}>
            10 carefully selected varieties — each quality-tested for germination rate, oil content, and yield performance to maximize your farm's productivity.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {seedVarieties.map((seed, i) => (
            <SeedCard key={seed.id} seed={seed} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d3d1a 0%, #1a5c2a 50%, #2e7d32 100%)' }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='40' rx='15' ry='28' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Need Help Choosing the Right Variety?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Our experts will guide you based on your soil type, climate, and farming goals — ensuring the best possible harvest for your land.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #d4a017, #f5c842)',
                color: '#0d3d1a',
                boxShadow: '0 8px 25px rgba(212,160,23,0.4)',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Talk to Our Seed Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
