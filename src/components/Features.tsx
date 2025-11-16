import React from 'react';
import { 
  Server, 
  Award, 
  Globe, 
  Shield, 
  CreditCard, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Server className="w-6 h-6 text-emerald-600" />,
      title: "High-Performance Infrastructure",
      description: "Enterprise-grade server architecture ensuring maximum uptime and reliability"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Certified & Compliant",
      description: "Officially certified by National Payments Corporation with full regulatory compliance"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Service Hub",
      description: "Unified platform integrating all essential digital financial services"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
      title: "Streamlined Payment Processing",
      description: "Efficient and secure transaction processing for all payment types"
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: "Advanced Security Framework",
      description: "Military-grade encryption and security protocols protecting all transactions"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "International Payment Network",
      description: "Global payment processing capabilities with worldwide reach"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-8 h-8 text-purple-600" />
            <p className="text-purple-600 font-bold text-lg">COMPETITIVE ADVANTAGES</p>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            What Sets Us Apart From Competition
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Discover the unique advantages that make our platform the preferred choice for businesses worldwide
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content - Enhanced Illustration */}
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-emerald-100 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  {/* Dashboard Mockup */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-purple-600 to-emerald-600 rounded-xl p-4 mb-6">
                      <div className="flex space-x-3">
                        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-purple-200 to-emerald-200 rounded-full"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Team Avatars */}
                  <div className="flex justify-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">👨‍💻</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">👩‍💼</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">👨‍🔧</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                  <span className="text-3xl">⚙️</span>
                </div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-ping shadow-xl">
                  <span className="text-xl">💎</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Features */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group hover:border-purple-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-purple-50 group-hover:to-emerald-50 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <CheckCircle className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;