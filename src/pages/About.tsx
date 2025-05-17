import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Leaf, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-400 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/images/popcorn_chicken.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
                Our Story
              </h1>
              <p className="text-orange-50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                Discover how Snack N'Pop is revolutionizing the way we think about snacks, 
                one delicious bite at a time.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Mission & Vision Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Mission Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-block bg-gradient-to-r from-snackpop-orange to-snackpop-yellow p-2 rounded-xl mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-medium text-sm sm:text-base">Our Mission</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">
                    Bringing People Together Through Delicious, Guilt-Free Snacks
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    We exist to bring people together through enjoyable guilt-free snacks and meals. 
                    Our commitment is to provide delicious, nutritious options that make healthy eating 
                    a pleasure, not a compromise.
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-snackpop-orange" />
                    <span className="text-sm sm:text-base text-gray-600">Quality Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-snackpop-orange to-snackpop-yellow p-2 rounded-xl mb-4 sm:mb-6">
                      <span className="text-white font-medium text-sm sm:text-base">Our Vision</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                      Leading the Way in Healthy Snacking
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      We envision a world where healthy snacking is not just a choice, but a delightful 
                      experience. Through innovation and dedication, we're creating a new standard in 
                      the snack industry.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/chicken_bucket.jpg`}
                        alt="Chicken Bucket" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 transform rotate-6">
                      <div className="text-center">
                        <span className="block text-snackpop-orange text-lg sm:text-xl font-bold">Fresh</span>
                        <span className="block text-snackpop-yellow text-xs sm:text-sm">Daily</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-block bg-gradient-to-r from-snackpop-orange to-snackpop-yellow p-2 rounded-xl mb-4 sm:mb-6">
                  <span className="text-white font-medium text-sm sm:text-base">Our Story</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  The Story Behind Snack N'Pop
                </h2>
              </div>

              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-snackpop-yellow/10 to-snackpop-orange/10 rounded-full blur-2xl"></div>

                {/* Story Content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm relative z-10">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Snack N'Pop was born from a simple idea: to create snacks that are both delicious 
                      and nutritious. Our founder, passionate about healthy eating, noticed a gap in the 
                      market for guilt-free snacks that don't compromise on taste.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      The journey began with V'Pops, our signature product that combines the soft texture 
                      of chicken with the nutritional value of vegetables. This innovative creation quickly 
                      gained popularity, showing that healthy eating can be enjoyable.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Today, we continue to serve our community with the same passion and commitment to 
                      quality that we started with. Every day, we work to bring people together through 
                      enjoyable, guilt-free snacks and meals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <div className="inline-block bg-gradient-to-r from-snackpop-orange to-snackpop-yellow p-2 rounded-xl mb-4 sm:mb-6">
                <span className="text-white font-medium text-sm sm:text-base">Our Values</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                These principles guide everything we do at Snack N'Pop
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Community First */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-snackpop-orange" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">
                    Community First
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We believe in building strong relationships with our customers and community, 
                    creating a welcoming space for everyone.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Quality & Innovation */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-snackpop-orange" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">
                    Quality & Innovation
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We're committed to using the finest ingredients and constantly innovating to 
                    bring you the best possible products.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Sustainability */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-snackpop-orange" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-snackpop-orange transition-colors duration-300">
                    Sustainability
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We're dedicated to sustainable practices, from sourcing ingredients to packaging, 
                    ensuring a better future for all.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-snackpop-yellow to-snackpop-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange to-snackpop-yellow"></div>
          <div className="absolute inset-0 bg-[url('/images/chicken_bucket.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
                Join Our Journey
              </h2>
              <p className="text-orange-50 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-md">
                Experience the perfect blend of taste and nutrition with Snack N'Pop. 
                Visit us today and discover why we're becoming the go-to destination for 
                healthy snacking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-white text-snackpop-orange hover:bg-orange-50 transition-all duration-300"
                  >
                    Explore Menu
                  </Button>
                </Link>
                <Link to="/locations">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Find Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
