import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import AboutSection from '@/components/Home/AboutSection';
import ProductsSection from '@/components/Home/ProductsSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import LocationSection from '@/components/Home/LocationSection';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 z-[100]">
          <Navbar />
        </div>
        <Hero />
      </div>
      <main className="relative z-[1]">
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
