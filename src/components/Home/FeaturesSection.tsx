import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: "🍴",
    title: "Tasty & Healthy",
    description: "Delicious poppers that combine the taste you love with the nutrition you need."
  },
  {
    icon: "🌿",
    title: "Eco-Friendly",
    description: "Environmentally conscious packaging that reduces waste and environmental footprint."
  },
  {
    icon: "⏱️",
    title: "Quick & Convenient",
    description: "Perfect for busy schedules - enjoy anywhere, anytime without compromising on quality."
  },
  {
    icon: "🥦",
    title: "Vegetable Rich",
    description: "Hidden vegetables make it easier to meet your daily nutritional goals."
  }
];

const FeaturesSection = () => {
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
            Why Choose Us
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            What Makes Snack N'Pop Special
          </h2>
          <p className="text-gray-700 text-sm">
            We're more than just snacks - we're creating a healthier, more sustainable way to enjoy your favorite treats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[2000px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-snackpop-yellow hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-snackpop-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
