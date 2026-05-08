'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Leaf, Star, CheckCircle, TrendingUp, Droplets, Shield, Zap } from 'lucide-react';

const stats = [
  { value: '18+', label: 'Years of Excellence', icon: Award, color: '#df7810' },
  { value: '10+', label: 'Premium Varieties', icon: Leaf, color: '#0e6578' },
  { value: '1000s', label: 'Satisfied Farmers', icon: Users, color: '#df7810' },
  { value: '99%', label: 'Customer Trust Rate', icon: Star, color: '#0e6578' },
];

const whyPoints = [
  {
    icon: CheckCircle,
    title: 'Properly Graded & Cleaned Seeds',
    description: 'Every seed is mechanically cleaned and graded to remove impurities, ensuring only uniform, viable seeds reach your farm.',
  },
  {
    icon: Zap,
    title: 'High Germination Rate Guaranteed',
    description: 'We test every batch for germination percentage before dispatch. Only seeds meeting 90%+ germination rate pass our quality gate.',
  },
  {
    icon: Droplets,
    title: 'Superior Oil Content',
    description: 'Our groundnut varieties are selected for maximum oil yield (48-52%), giving oil millers the highest extraction value per quintal.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Yield Performance',
    description: 'Real-world performance data from hundreds of farms in Saurashtra back every variety we stock — consistent season after season.',
  },
  {
    icon: Shield,
    title: 'Disease & Pest Tolerance',
    description: 'Hybrid and improved varieties with in-built resistance to common groundnut diseases reduce crop losses and dependency on pesticides.',
  },
  {
    icon: Award,
    title: 'Trusted Local Expertise',
    description: 'Our 18-year presence in Keshod means we understand local soil conditions, climate patterns, and market demands better than anyone.',
  },
];

const testimonials = [
  {
    name: 'Rameshbhai Patel',
    location: 'Farmer, Keshod',
    text: 'Shaswat Agri Seeds has been my go-to for the last 10 years. Girnar 4 variety gave me record yield this season. Excellent quality and honest service.',
    stars: 5,
  },
  {
    name: 'Bharatbhai Makwana',
    location: 'Farmer, Veraval',
    text: 'The G-32 seeds from Shaswat gave the best oil content I have seen in 15 years of farming. Highly recommend for any groundnut grower.',
    stars: 5,
  },
  {
    name: 'Jayantibhai Sorathiya',
    location: 'Farmer, Talala',
    text: 'Very professional. Seeds are always fresh with high germination. My No. 37 crop performed exceptionally well. Will continue to buy every year.',
    stars: 5,
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Stats band */}
      <div className="py-16 lg:py-20 relative" style={{ background: 'linear-gradient(135deg, #093a46 0%, #0e6578 50%, #158899 100%)' }}>
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='40' rx='15' ry='28' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Numbers That Speak for Themselves
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: stat.color === '#df7810' ? 'rgba(223,120,16,0.2)' : 'rgba(255,255,255,0.1)' }}>
                    <Icon className="w-7 h-7" style={{ color: stat.color }} />
                  </div>
                  <div className="text-4xl font-bold mb-1" style={{ color: stat.color, fontFamily: 'Georgia, serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div ref={ref} className="py-20 lg:py-28" style={{ background: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border"
              style={{ background: '#dff0f7', borderColor: '#a8d5e5', color: '#0e6578' }}>
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#093a46' }}>
              The <span style={{ color: '#0e6578' }}>Shaswat</span> Difference
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.8 }}>
              18 years of dedication to one mission — putting the best possible seeds in every farmer&apos;s hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white border transition-all duration-300 group cursor-default"
                  style={{ borderColor: '#dff0f7', borderWidth: '1.5px', boxShadow: '0 2px 12px rgba(9,58,70,0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = i % 2 === 0 ? '#0e6578' : '#df7810';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(9,58,70,0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#dff0f7';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(9,58,70,0.05)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: i % 2 === 0 ? '#dff0f7' : '#fef3e7' }}>
                    <Icon className="w-6 h-6" style={{ color: i % 2 === 0 ? '#0e6578' : '#df7810' }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Georgia, serif', color: '#093a46' }}>
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.7 }}>
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #e5f4fa 0%, #dff0f7 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif', color: '#093a46' }}>
              What Our Farmers Say
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: '0 4px 20px rgba(9,58,70,0.08)', border: '1.5px solid #dff0f7' }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-current" style={{ color: '#df7810' }} />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
                  &quot;{t.text}&quot;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid #dff0f7' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0e6578, #158899)', fontSize: '14px' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#093a46', fontFamily: 'system-ui, sans-serif' }}>{t.name}</div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'system-ui, sans-serif' }}>{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
