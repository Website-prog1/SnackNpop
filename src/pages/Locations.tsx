import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ExternalLink, Building2, GraduationCap, Bus } from 'lucide-react';

const Locations = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-400 py-24 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/images/chicken_bucket.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Find Us
              </h1>
              <p className="text-orange-50 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                Visit our store in Valenzuela City to enjoy fresh, delicious V'Pops and other snack options. 
                We're conveniently located near schools and offices to serve you better.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Location Details Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Map Section */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
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
              </div>

              {/* Store Info Section */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-snackpop-yellow">
                  <h2 className="font-display text-2xl font-bold mb-6 text-snackpop-orange">Our Store</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-snackpop-orange w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Address</h3>
                        <p className="text-gray-700">24 Llenado Compound, Maysan Rd., Malinta, Valenzuela City</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-snackpop-orange hover:text-snackpop-yellow transition-colors"
                          onClick={() => window.open("https://maps.google.com/?q=24+Llenado+Compound,+Maysan+Rd.,+Malinta,+Valenzuela+City", "_blank")}
                        >
                          Get Directions
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Clock className="text-snackpop-orange w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Store Hours</h3>
                        <p className="text-gray-700">Monday - Sunday: 9:00 am to 7:00 pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Phone className="text-snackpop-orange w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Contact</h3>
                        <p className="text-gray-700">Email: snacknpop@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 p-8 rounded-3xl backdrop-blur-sm">
                  <h3 className="font-display font-bold text-xl mb-4 text-snackpop-orange">Why We're Here</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We chose this strategic location due to its proximity to schools and workplaces, 
                    making it convenient for our target customers - students and workers looking for quick, 
                    healthy meal options that fit their busy schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Area Highlights Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-gradient-to-r from-snackpop-orange to-snackpop-yellow p-2 rounded-xl mb-6">
                <span className="text-white font-medium">Area Highlights</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Conveniently Located
              </h2>
              <p className="text-gray-600">
                Our store is strategically positioned near key locations in Valenzuela City
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-snackpop-orange" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">Educational Institutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Several schools and universities are within walking distance or a short drive.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-snackpop-orange" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">Office Buildings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nearby business districts make us a perfect lunch spot for working professionals.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Bus className="w-8 h-8 text-snackpop-orange" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">Public Transportation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Easily accessible via jeepneys, buses, and other public transportation options.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-snackpop-yellow/10 to-snackpop-orange/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
