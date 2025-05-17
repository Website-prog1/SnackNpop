import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Mail, Send, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

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
                Contact Us
              </h1>
              <p className="text-orange-50 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, 
                feel free to reach out using any of the methods below.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="text-snackpop-orange w-6 h-6" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-snackpop-orange focus:ring-snackpop-orange/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-snackpop-orange focus:ring-snackpop-orange/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What would you like to tell us?"
                        required
                        rows={5}
                        className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-snackpop-orange focus:ring-snackpop-orange/20"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-snackpop-orange to-snackpop-yellow hover:from-snackpop-yellow hover:to-snackpop-orange text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Social Media */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="font-display text-xl font-bold mb-6 text-gray-900">Connect With Us</h3>
                    
                    <div className="space-y-4">
                      <a 
                        href="https://www.facebook.com/share/19PCu8MZy2/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-snackpop-orange/5 hover:to-snackpop-yellow/5 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                          <Facebook className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Facebook</p>
                          <p className="text-sm text-gray-600">Snack N'Pop</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.instagram.com/_snacknpop?igsh=MjI3ZXMxNmMzbnpl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-snackpop-orange/5 hover:to-snackpop-yellow/5 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                          <Instagram className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Instagram</p>
                          <p className="text-sm text-gray-600">_snacknpop</p>
                        </div>
                      </a>
                      
                      <a 
                        href="mailto:snacknpop@gmail.com"
                        className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-snackpop-orange/5 hover:to-snackpop-yellow/5 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-sm text-gray-600">snacknpop@gmail.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Store Information */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="font-display text-xl font-bold mb-6 text-gray-900">Visit Our Store</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <MapPin className="text-snackpop-orange w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Address</p>
                          <p className="text-gray-600">24 Llenado Compound, Maysan Rd., Malinta, Valenzuela City</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <Clock className="text-snackpop-orange w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Store Hours</p>
                          <p className="text-gray-600">Monday - Sunday: 9:00 am to 7:00 pm</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 rounded-xl overflow-hidden aspect-[4/3]">
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
                  </div>
                </div>
                
                {/* Feedback */}
                <div className="bg-gradient-to-br from-snackpop-orange/5 to-snackpop-yellow/5 p-8 rounded-3xl backdrop-blur-sm">
                  <h3 className="font-display font-bold text-xl mb-4 text-snackpop-orange">We Value Your Feedback</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your opinions and suggestions help us improve our products and services to better meet your needs. 
                    We're committed to providing the best experience for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-snackpop-orange/10 to-snackpop-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-snackpop-yellow/10 to-snackpop-orange/10 rounded-full blur-3xl"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
