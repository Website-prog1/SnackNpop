import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-[1]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/chickenpop.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="container relative z-[2] h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24">
        <div className="flex flex-col justify-center items-center h-full max-w-3xl mx-auto text-center">
          {/* Text Content */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
            Delicious & Healthy
            <span className="block text-snackpop-yellow">Snacks for Everyone</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md">
            Experience our signature V'Pops - a perfect blend of taste and nutrition, 
            made fresh daily with quality ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/products">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-snackpop-orange hover:bg-snackpop-yellow text-white transition-all duration-300"
              >
                Explore Menu
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/locations">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Find Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
