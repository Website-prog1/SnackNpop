import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-snackpop-yellow/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-snackpop-orange/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full aspect-[4/3] max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/popcorn_chicken.jpg`}
                  alt="Popcorn Chicken"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 w-28 h-28 bg-gradient-to-br from-snackpop-yellow to-snackpop-orange rounded-xl shadow-lg flex items-center justify-center p-4 transform rotate-6">
                <div className="text-center text-white">
                  <span className="block text-2xl font-bold mb-1">100%</span>
                  <span className="block text-xs font-medium">Quality</span>
                  <span className="block text-xs font-medium">Ingredients</span>
                </div>
              </div>
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 transform -rotate-6">
                <div className="text-center">
                  <span className="block text-snackpop-orange text-xl font-bold">Fresh</span>
                  <span className="block text-snackpop-yellow text-xs">Daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative">
            <div className="max-w-lg">
              <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-snackpop-orange/10 to-snackpop-yellow/10 rounded-full mb-4">
                <span className="text-snackpop-orange font-semibold text-sm">About Us</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Tasty and Healthy Alternative to{' '}
                <span className="bg-gradient-to-r from-snackpop-orange to-snackpop-yellow bg-clip-text text-transparent">
                  Conventional Snacks
                </span>
              </h2>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                Snack N'Pop is dedicated to providing delicious and nutritious alternatives to conventional snacks. 
                Our signature V'Pops combine the soft texture of chicken with the nutritional value of vegetables.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-snackpop-orange/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-snackpop-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Nutritious Ingredients</h3>
                    <p className="text-gray-600 text-sm">We carefully select quality ingredients that are both delicious and nutritious.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-snackpop-orange/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-snackpop-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Eco-Friendly Packaging</h3>
                    <p className="text-gray-600 text-sm">We're committed to sustainability with environmentally friendly packaging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-snackpop-orange/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-snackpop-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Convenient Meals</h3>
                    <p className="text-gray-600 text-sm">Perfect for busy students and workers who need quick, healthy options.</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-gradient-to-r from-snackpop-orange to-snackpop-yellow hover:from-snackpop-yellow hover:to-snackpop-orange text-white px-6 py-4 text-base shadow-lg hover:shadow-xl transition-all">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
