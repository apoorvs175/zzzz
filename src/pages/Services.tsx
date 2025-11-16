import { motion } from 'framer-motion';
import { 
  BarChart3,
  Zap,
  Calculator,
  Check,
  UserPlus,
  Package,
  CreditCard,
  Play,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Dashboard Tools",
      description: "Smart dashboards that give you real-time visibility into your expenses, sales, and financial activities.",
      features: [
        "Real-time dashboards",
        "Expense tracking",
        "Sales monitoring",
        "Cashflow visualization",
        "Custom report download"
      ],
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      emoji: "🔵"
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Automate your daily business operations with simple, powerful tools.",
      features: [
        "Vendor payment reminders",
        "Customer follow-up automation",
        "Subscription renewal tracking",
        "WhatsApp & Email notifications",
        "Auto scheduling"
      ],
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      emoji: "🟣"
    },
    {
      icon: Calculator,
      title: "Financial Utilities",
      description: "Digital tools designed to simplify accounting and financial tasks.",
      features: [
        "GST invoice generator",
        "EMI calculator & analytics",
        "Bank statement analyzer",
        "Transaction categorization",
        "Ledger creation tools"
      ],
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      emoji: "🟠"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your account in minutes and access your digital dashboard instantly.",
      icon: UserPlus
    },
    {
      step: "02",
      title: "Select a Tool",
      description: "Choose from 15+ business automation & financial tools.",
      icon: Package
    },
    {
      step: "03",
      title: "Instant Activation",
      description: "Complete payment and get immediate tool access—no waiting, no delays.",
      icon: CreditCard
    },
    {
      step: "04",
      title: "Start Using",
      description: "Manage your business operations, automate tasks, and download reports effortlessly.",
      icon: Play
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            OUR SERVICES
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mb-4">
            Digital Tools for Modern Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From financial automation to smart analytics, ZynpayProduct delivers powerful digital tools to help you manage and grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{service.emoji}</span>
                <div className={`p-3 rounded-xl ${service.iconBg} mr-4`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">✔ Key Features:</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-50 via-white to-emerald-50 rounded-3xl p-8 sm:p-12 mb-16 border border-purple-100"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="text-3xl mr-2">🟪</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                HOW IT WORKS
              </h2>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mt-2">
              Simple & Faster Product Process
            </p>
            <p className="text-base sm:text-lg text-gray-500 mt-2">
              Get started with Zynpay in just four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div className={`p-3 rounded-xl bg-emerald-50`}>
                    <step.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              WHY CHOOSE US
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mb-4">
              Built for Modern Digital Businesses
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of business automation with our smart, secure, and easy-to-use digital tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🟩</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Smart Automation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Streamline your daily activities with powerful automation features that help reduce manual work and boost productivity.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🟦</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Secure & Reliable</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Your data is encrypted and protected with industry-standard security protocols, ensuring safe usage across all tools.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🟪</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Fast & Seamless Performance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Enjoy lightning-fast dashboards, quick loading speeds, and real-time analytics with our optimized digital tools.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Explore our 15+ digital tools and transform your business operations today
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
