import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full py-3 sm:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="group">
          <div className="relative">
            <span className={`font-display text-xl sm:text-2xl font-bold transition-all duration-300 ${
              !isScrolled 
                ? 'text-white drop-shadow-md' 
                : 'text-snackpop-orange'
            } group-hover:text-snackpop-yellow`}>
              Snack
            </span>
            <span className={`font-display text-xl sm:text-2xl font-bold transition-all duration-300 ${
              !isScrolled 
                ? 'text-snackpop-yellow drop-shadow-md' 
                : 'text-snackpop-yellow'
            } group-hover:text-snackpop-orange`}>
              {' '}N'Pop
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-snackpop-orange to-snackpop-yellow transition-all duration-300 group-hover:w-full"></div>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link 
            to="/" 
            className={`text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
              !isScrolled 
                ? 'text-white hover:text-snackpop-yellow drop-shadow-md' 
                : 'text-gray-800 hover:text-snackpop-orange'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
              !isScrolled 
                ? 'text-white hover:text-snackpop-yellow drop-shadow-md' 
                : 'text-gray-800 hover:text-snackpop-orange'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/products" 
            className={`text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
              !isScrolled 
                ? 'text-white hover:text-snackpop-yellow drop-shadow-md' 
                : 'text-gray-800 hover:text-snackpop-orange'
            }`}
          >
            Products
          </Link>
          <Link 
            to="/locations" 
            className={`text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
              !isScrolled 
                ? 'text-white hover:text-snackpop-yellow drop-shadow-md' 
                : 'text-gray-800 hover:text-snackpop-orange'
            }`}
          >
            Find Us
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
              !isScrolled 
                ? 'text-white hover:text-snackpop-yellow drop-shadow-md' 
                : 'text-gray-800 hover:text-snackpop-orange'
            }`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`hover:bg-white/10 ${!isScrolled ? 'text-white' : 'text-snackpop-orange'}`}
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 sm:gap-5 mt-8 sm:mt-10">
                <Link to="/" className="text-base sm:text-lg font-medium hover:text-snackpop-orange transition-colors flex items-center gap-2">
                  Home
                </Link>
                <Link to="/about" className="text-base sm:text-lg font-medium hover:text-snackpop-orange transition-colors flex items-center gap-2">
                  About Us
                </Link>
                <Link to="/products" className="text-base sm:text-lg font-medium hover:text-snackpop-orange transition-colors flex items-center gap-2">
                  Products
                </Link>
                <Link to="/locations" className="text-base sm:text-lg font-medium hover:text-snackpop-orange transition-colors flex items-center gap-2">
                  Find Us
                </Link>
                <Link to="/contact" className="text-base sm:text-lg font-medium hover:text-snackpop-orange transition-colors flex items-center gap-2">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
