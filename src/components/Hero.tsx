import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    // In a real application, this would open a video modal or navigate to a demo page
    alert('Demo video would open here. This is a placeholder for the actual demo functionality.');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-emerald-100/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-300/30 to-cyan-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-emerald-500" />
              <span className="text-emerald-600 font-semibold">Revolutionary Financial Technology</span>
            </motion.div>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight"
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Financial
              </span>{' '}
              Operations
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-xl mb-8 leading-relaxed"
            >
              ZynPay Technology delivers cutting-edge API solutions that revolutionize 
              digital payment processing, streamline business operations, and enhance 
              customer engagement across all platforms.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
            >
              {[
                'NPCI Certified Platform',
                'Bank-Grade Security',
                '99.9% Uptime Guarantee',
                '24/7 Expert Support'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button 
                onClick={scrollToServices}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl font-semibold"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleWatchDemo}
                className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <Play className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-medium">Watch Platform Demo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Illustration */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Main Device */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 w-80 h-96 relative overflow-hidden">
                  {/* Header */}
                  <div className="flex justify-center mb-8">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">💼</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-center text-gray-800 font-bold text-xl mb-8">FINANCIAL DASHBOARD</h3>
                  
                  {/* Dashboard Elements */}
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1 }}
                      className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-200"
                    >
                      <span className="text-emerald-600 text-sm font-medium">✅ Real-time Processing</span>
                    </motion.div>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 1 }}
                      className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 border border-purple-200"
                    >
                      <span className="text-purple-600 text-sm font-medium">🔐 Advanced Security</span>
                    </motion.div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg"
                    >
                      ACCESS PLATFORM
                    </motion.button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-60"></div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-xl">💎</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;