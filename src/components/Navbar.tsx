'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(13, 61, 26, 0.97)'
            : 'linear-gradient(180deg, rgba(13,61,26,0.95) 0%, rgba(13,61,26,0.7) 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
          boxShadow: scrolled ? '0 2px 30px rgba(13, 61, 26, 0.35)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 160, 23, 0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #d4a017, #f5c842)' }}>
                <Leaf className="w-5 h-5" style={{ color: '#0d3d1a' }} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Shubham Agri
                </div>
                <div className="text-xs font-medium tracking-widest leading-tight" style={{ color: '#d4a017' }}>
                  SEEDS
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                  style={{
                    color: activeLink === link.href ? '#d4a017' : 'rgba(255,255,255,0.85)',
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '0.03em',
                  }}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                      style={{ backgroundColor: '#d4a017' }}
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4a017, #f5c842)',
                  color: '#0d3d1a',
                  boxShadow: '0 4px 15px rgba(212,160,23,0.35)',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Get Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ background: mobileOpen ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              style={{ borderTop: '1px solid rgba(212, 160, 23, 0.2)' }}
            >
              <div className="px-4 py-4 space-y-1" style={{ background: 'rgba(13, 61, 26, 0.98)' }}>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: activeLink === link.href ? '#d4a017' : 'rgba(255,255,255,0.85)',
                      background: activeLink === link.href ? 'rgba(212,160,23,0.1)' : 'transparent',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full mt-2 px-4 py-3 rounded-full text-sm font-semibold text-center"
                  style={{
                    background: 'linear-gradient(135deg, #d4a017, #f5c842)',
                    color: '#0d3d1a',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  Get a Free Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
