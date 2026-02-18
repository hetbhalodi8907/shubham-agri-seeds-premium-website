'use client';

import { useState, useCallback } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import WhyUsSection from '@/components/WhyUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: 'opacity 0.5s ease',
          visibility: splashDone ? 'visible' : 'hidden',
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
