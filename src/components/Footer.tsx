'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Leaf, ExternalLink } from 'lucide-react';

const seedVarieties = ['G-20', 'G-22', 'G-32', 'G-24', 'No. 37', 'No. 38', 'No. 39', 'Sona', 'Girnar 4', 'Girnar 5'];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a2e12 0%, #0d3d1a 50%, #112e18 100%)' }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='40' rx='15' ry='28' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top divider */}
      <div className="w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #d4a017, #f5c842, #d4a017, transparent)' }} />

      {/* Map Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-2xl overflow-hidden"
            style={{ border: '1.5px solid rgba(212,160,23,0.25)', boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}
          >
            <div className="flex items-center gap-3 px-5 py-3" style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(212,160,23,0.2)' }}>
              <MapPin className="w-4 h-4" style={{ color: '#d4a017' }} />
              <span className="text-sm font-semibold text-white/80" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Opp. Ganesh Weighbridge, Veraval Road, Sondarada, Keshod, Gujarat
              </span>
              <a
                  href="https://maps.google.com/?q=7793+8Q+Sondarda,Gujarat,India"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-all hover:opacity-80"
                style={{ background: 'rgba(212,160,23,0.2)', color: '#f5c842', fontFamily: 'system-ui, sans-serif' }}
              >
                <ExternalLink className="w-3 h-3" /> Open Maps
              </a>
            </div>
              <div className="relative w-full" style={{ paddingBottom: '40%', minHeight: '220px' }}>
                <iframe
                  title="Shubham Agri Seeds Location - Sondarda, Keshod, Gujarat"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475914.1829563522!2d69.64470608906248!3d21.26831830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd5064e1729cd1%3A0xb4fb80d43b91f87e!2sShubham%20Agri%20Seeds!5e0!3m2!1sen!2sin!4v1771437005763!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #d4a017, #f5c842)' }}>
                <Leaf className="w-5 h-5" style={{ color: '#0d3d1a' }} strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Shubham Agri Seeds
                </div>
                <div className="text-xs tracking-widest" style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif' }}>
                  EST. 2006
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5" style={{ fontFamily: 'system-ui, sans-serif' }}>
              18 years of trust in premium groundnut &amp; hybrid seeds. Serving farmers across Saurashtra, Gujarat with quality and dedication.
            </p>
            {/* Social/Contact mini row */}
            <a
              href="mailto:shubhamagriseeds333@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
              style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif' }}
            >
              <Mail className="w-4 h-4" />
              shubhamagriseeds333@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid rgba(212,160,23,0.25)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/65 hover:text-white transition-colors text-left"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Seed Varieties */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid rgba(212,160,23,0.25)' }}>
              Our Seed Varieties
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-2">
              {seedVarieties.map((seed) => (
                <button
                  key={seed}
                  onClick={() => handleNavClick('#products')}
                  className="text-sm text-white/65 hover:text-white transition-colors text-left"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  • {seed}
                </button>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid rgba(212,160,23,0.25)' }}>
              Our Location
            </h4>
            <div className="space-y-3 text-sm text-white/65" style={{ fontFamily: 'system-ui, sans-serif' }}>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#d4a017' }} />
                <span className="leading-relaxed">
                  Opp. Ganesh Weighbridge,<br />
                  Veraval Road, Sondarada,<br />
                  Keshod, Gujarat, India
                </span>
              </div>
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.2)' }}>
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#d4a017' }}>
                  18+ Years of Farmer Trust
                </div>
                <div className="text-xs text-white/50">
                  Trusted seed supplier in the heart of Saurashtra's groundnut belt.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40"
            style={{ fontFamily: 'system-ui, sans-serif' }}>
            <span>© {new Date().getFullYear()} Shubham Agri Seeds. All rights reserved.</span>
            <span>Opp. Ganesh Weighbridge, Veraval Road, Keshod, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
