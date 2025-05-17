import React from 'react';
import { Button } from '@/components/ui/button';
import { FacebookIcon, InstagramIcon } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      <div className="container relative z-10">
        <div className="bg-gradient-to-r from-snackpop-yellow to-snackpop-orange rounded-2xl p-8 md:p-12 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
                Follow Us On Social Media
              </h2>
              <p className="text-white/90 mb-6">
                Stay updated with our latest products, promotions, and events. 
                Join our community and be part of the Snack N'Pop family!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-snackpop-orange hover:bg-opacity-90"
                  onClick={() => window.open("https://www.facebook.com/share/19PCu8MZy2/?mibextid=wwXIfr", "_blank")}
                >
                  <FacebookIcon className="mr-2 h-5 w-5" />
                  Facebook
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-snackpop-orange hover:bg-opacity-90"
                  onClick={() => window.open("https://www.instagram.com/_snacknpop?igsh=MjI3ZXMxNmMzbnpl", "_blank")}
                >
                  <InstagramIcon className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[300px]">
                <div className="absolute top-0 left-0 w-48 h-48 rotate-12 transform translate-y-4">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/chick.jpg`}
                    alt="Chick" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 -rotate-12 transform translate-y-4">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/chicken.jpg`}
                    alt="Chicken" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/crispy_chicken.jpg`}
                    alt="Crispy Chicken" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-snackpop-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-snackpop-yellow/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default CTASection;
