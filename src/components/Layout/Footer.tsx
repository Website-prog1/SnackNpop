import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-snackpop-yellow/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-snackpop-yellow rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">S'P</span>
              </div>
              <span className="font-display text-base sm:text-lg font-bold">Snack N'Pop</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-xs">
              We exist to bring people together through enjoyable guilt-free snacks and meals.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-snackpop-orange transition-colors"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-snackpop-orange transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-600 hover:text-snackpop-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base text-gray-600 hover:text-snackpop-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm sm:text-base text-gray-600 hover:text-snackpop-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-sm sm:text-base text-gray-600 hover:text-snackpop-orange transition-colors">
                  Find Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-base text-gray-600 hover:text-snackpop-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-snackpop-orange shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-gray-600">
                  24 Llenado Compound, Maysan Rd., Malinta, Valenzuela City
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-snackpop-orange" />
                <p className="text-sm sm:text-base text-gray-600">snacknpop@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-snackpop-orange" />
                <p className="text-sm sm:text-base text-gray-600">9:00 am to 7:00 pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-200 mb-6 sm:mb-8" />
        
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-600">
            © {new Date().getFullYear()} Snack N'Pop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
