import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  DollarSign, 
  Shield, 
  Building, 
  Zap,
  ArrowRight,
  Users,
  Clock,
  Award,
  UserCheck,
  Banknote,
  Globe
} from 'lucide-react';

const Services: React.FC = () => {
  const handleLearnMore = (serviceName: string) => {
    // In a real application, this would navigate to a detailed service page
    alert(`Learn more about ${serviceName}. This would navigate to a detailed service page.`);
  };

  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-emerald-600" />,
      title: "Unified Payment Interface",
      description: "Seamless UPI integration connecting multiple banking systems through a single, secure application interface for instant money transfers and real-time transaction processing.",
      features: ["Instant transfers", "Multi-bank support", "Real-time processing", "Mobile-first design"],
      color: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200",
      buttonColor: "text-emerald-600 hover:bg-emerald-600"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-purple-600" />,
      title: "Digital Payment Gateway",
      description: "Comprehensive payment processing solutions enabling secure online transactions with support for multiple payment methods, currencies, and advanced fraud protection.",
      features: ["Multi-currency support", "Fraud protection", "PCI compliance", "API integration"],
      color: "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200",
      buttonColor: "text-purple-600 hover:bg-purple-600"
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: "Bill Payment Services (BBPS)",
      description: "Complete billing platform allowing merchants to offer diverse utility payment services including electricity, water, gas, telecom, and insurance through our advanced portal.",
      features: ["Utility payments", "Insurance bills", "Telecom recharge", "Government payments"],
      color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
      buttonColor: "text-blue-600 hover:bg-blue-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Identity & Documentation",
      description: "Streamlined PAN card and identity verification services powered by UTI Infrastructure Technology, providing efficient document processing and KYC solutions.",
      features: ["PAN card services", "KYC verification", "Document processing", "Identity validation"],
      color: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200",
      buttonColor: "text-orange-600 hover:bg-orange-600"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Aadhaar Enabled Payments (AePS)",
      description: "Advanced biometric payment systems utilizing Aadhaar authentication for secure financial transactions without traditional cards, enabling financial inclusion.",
      features: ["Biometric authentication", "Cash withdrawal", "Balance inquiry", "Mini statements"],
      color: "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200",
      buttonColor: "text-yellow-600 hover:bg-yellow-600"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-pink-600" />,
      title: "Business Financing Solutions",
      description: "Flexible lending and financing solutions designed for retailers and businesses requiring immediate capital to enhance operations and accelerate growth.",
      features: ["Quick approvals", "Flexible terms", "Digital documentation", "Competitive rates"],
      color: "bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200",
      buttonColor: "text-pink-600 hover:bg-pink-600"
    },
    {
      icon: <Banknote className="w-12 h-12 text-indigo-600" />,
      title: "Domestic Money Transfer (DMT)",
      description: "Efficient money transfer services enabling business correspondents to facilitate secure cash-to-account remittances nationwide with real-time processing.",
      features: ["Instant transfers", "Nationwide coverage", "Competitive charges", "Real-time tracking"],
      color: "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200",
      buttonColor: "text-indigo-600 hover:bg-indigo-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: "Insurance & Protection",
      description: "Comprehensive insurance network integration helping customers access various protection plans, life insurance, health coverage, and security options.",
      features: ["Life insurance", "Health coverage", "Vehicle insurance", "Business protection"],
      color: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200",
      buttonColor: "text-teal-600 hover:bg-teal-600"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-violet-600" />,
      title: "Micro ATM Solutions",
      description: "Portable banking solutions for business correspondents delivering essential banking services including cash withdrawal, deposits, and balance inquiries in remote areas.",
      features: ["Cash withdrawal", "Balance inquiry", "Fund transfers", "Mini statements"],
      color: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200",
      buttonColor: "text-violet-600 hover:bg-violet-600"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-emerald-600" />, number: "10,000+", label: "Active Merchants" },
    { icon: <Award className="w-8 h-8 text-purple-600" />, number: "50+", label: "Service Categories" },
    { icon: <Clock className="w-8 h-8 text-blue-600" />, number: "24/7", label: "Technical Support" },
    { icon: <UserCheck className="w-8 h-8 text-orange-600" />, number: "99.9%", label: "Uptime Guarantee" }
  ];

  const handleExploreCategory = (category: string) => {
    alert(`Exploring ${category} category. This would show detailed information about this service category.`);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <p className="text-purple-600 font-bold text-lg">COMPREHENSIVE SOLUTIONS</p>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Complete Service Portfolio</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Discover our extensive range of financial technology solutions designed to empower businesses 
            and individuals with cutting-edge payment processing capabilities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.color} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group`}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => handleLearnMore(service.title)}
                className={`${service.buttonColor} hover:text-white transition-all duration-300 font-semibold flex items-center space-x-2 group-hover:translate-x-2 px-4 py-2 rounded-lg`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Payment Processing</h3>
            </div>
            <p className="text-emerald-100 text-center mb-6">
              Advanced payment processing solutions with real-time transaction monitoring, 
              multi-currency support, and enterprise-grade security features.
            </p>
            <button 
              onClick={() => handleExploreCategory('Payment Processing')}
              className="w-full bg-white text-emerald-600 hover:bg-emerald-50 transition-all duration-300 font-bold py-3 rounded-xl"
            >
              Explore Payment Solutions
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Financial Services</h3>
            </div>
            <p className="text-purple-100 text-center mb-6">
              Comprehensive financial distribution and management systems including 
              lending, insurance, and investment solutions for businesses.
            </p>
            <button 
              onClick={() => handleExploreCategory('Financial Services')}
              className="w-full bg-white text-purple-600 hover:bg-purple-50 transition-all duration-300 font-bold py-3 rounded-xl"
            >
              Discover Financial Tools
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Security & Compliance</h3>
            </div>
            <p className="text-orange-100 text-center mb-6">
              Enterprise-grade security protocols, compliance management, and 
              risk assessment tools ensuring complete data protection.
            </p>
            <button 
              onClick={() => handleExploreCategory('Security & Compliance')}
              className="w-full bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 font-bold py-3 rounded-xl"
            >
              View Security Features
            </button>
          </motion.div>
        </div>

        {/* Enhanced Stats */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Platform Performance</h3>
            <p className="text-gray-300 text-lg">
              Trusted by thousands of businesses worldwide for reliable financial services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;