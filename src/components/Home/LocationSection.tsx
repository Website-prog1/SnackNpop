import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Clock, Mail } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 w-full flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-block text-snackpop-orange font-semibold mb-2 border-b-2 border-snackpop-orange pb-1">
            Our Location
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Visit Our Store
          </h2>
          <p className="text-gray-700 text-sm">
            We're conveniently located near schools and workplaces, making it easy to grab your favorite V'Pops 
            whenever you need a tasty and nutritious snack or meal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="relative group">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2490227167187!2d120.9792673!3d14.6718193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b45989f3da7d%3A0xdfd96ec2f2115Ca7!2sMaysan%20Rd%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1621845891234!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Snack N'Pop Location"
                className="group-hover:scale-105 transition-transform duration-300"
              ></iframe>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-snackpop-orange to-snackpop-yellow w-32 h-32 rounded-2xl flex items-center justify-center p-4 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
              <div className="text-center text-white">
                <p className="font-bold text-lg">Find Us</p>
                <p className="text-sm">Near schools & offices</p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-snackpop-yellow">
              <h3 className="font-display text-xl font-bold mb-4 text-snackpop-orange">Snack N'Pop</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-snackpop-orange mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">24 Llenado Compound, Maysan Rd., Malinta, Valenzuela City</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-snackpop-orange mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">Hours: 9:00 am to 7:00 pm daily</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-snackpop-orange mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">snacknpop@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-snackpop-orange to-snackpop-yellow hover:from-snackpop-yellow hover:to-snackpop-orange text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://maps.google.com/?q=24+Llenado+Compound,+Maysan+Rd.,+Malinta,+Valenzuela+City", "_blank")}
            >
              Get Directions
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
