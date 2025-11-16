import React from 'react';
import { Handshake } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    { name: "IAF Certified", logo: "🛡️", color: "from-blue-500 to-indigo-500" },
    { name: "ISO 27001", logo: "🔒", color: "from-emerald-500 to-teal-500" },
    { name: "Make in India", logo: "🇮🇳", color: "from-orange-500 to-red-500" },
    { name: "NPCI Approved", logo: "💳", color: "from-purple-500 to-pink-500" },
    { name: "RBS Certified", logo: "🏦", color: "from-cyan-500 to-blue-500" },
    { name: "Security Certified", logo: "📜", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Handshake className="w-8 h-8 text-purple-600" />
            <p className="text-purple-600 font-bold text-lg">TRUSTED PARTNERSHIPS</p>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Collaborating with Industry Leaders
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Our strategic partnerships with leading organizations ensure the highest standards of service and security
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group-hover:border-transparent relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  <p className="text-gray-700 font-bold text-sm group-hover:text-gray-800 transition-colors">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-12">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Trusted by Leading Organizations</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our certifications and partnerships demonstrate our commitment to excellence, security, and regulatory compliance
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;