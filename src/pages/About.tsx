import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Star, 
  Shield, 
  Users, 
  Zap,
  Heart,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    {
      emoji: "🟢",
      title: "Security First",
      description: "We prioritize data safety across all our tools to ensure a secure and reliable experience for every user."
    },
    {
      emoji: "🟣",
      title: "Customer Centric",
      description: "Our customers are at the center of everything we build. We focus on creating simple, effective tools that solve real business challenges."
    },
    {
      emoji: "🔵",
      title: "Innovation",
      description: "We continuously create and improve digital tools that help businesses save time, increase productivity, and manage operations better."
    },
    {
      emoji: "🟠",
      title: "Integrity",
      description: "We believe in transparency, honesty, and accountability in all our interactions and services."
    }
  ];

  const achievements = [
    { icon: <Users className="w-8 h-8 text-emerald-600" />, number: "10,000+", label: "Active Users" },
    { icon: <Award className="w-8 h-8 text-purple-600" />, number: "50+", label: "Digital Tools & Utilities" },
    { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, number: "99.9%", label: "Platform Uptime" },
    { icon: <Clock className="w-8 h-8 text-orange-600" />, number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ABOUT OUR COMPANY
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mb-6">
            Pioneering Digital Tool Innovation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Since our inception, ZynpayProduct has focused on building powerful, easy-to-use digital tools that help individuals and businesses streamline operations, automate daily tasks, and improve financial clarity.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
            We create modern software solutions that simplify work — without complexity.
          </p>
        </motion.section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">🟣</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To empower businesses of all sizes with simple, effective, and affordable digital tools.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
              Our mission is to make automation, analytics, and business management accessible to everyone — from freelancers to enterprises.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">🟠</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To become a leading provider of digital business tools by delivering intuitive software that enhances productivity, improves financial transparency, and reduces manual workload for users across industries.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">🟩</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Values</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We are driven by innovation, simplicity, and customer-first thinking.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
              Our goal is to create reliable tools that deliver real value while ensuring a seamless and secure experience for every user.
            </p>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every product we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{value.emoji}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl p-8 sm:p-12 border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">🔵</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Zynpay was founded with a simple vision — to make business management easier for everyone through powerful, accessible digital tools.
              </p>
              <p>
                We recognized that small businesses, freelancers, and teams often need affordable solutions to track finances, automate tasks, manage records, and stay organized.
              </p>
              <p>
                Our journey began with developing lightweight, user-friendly tools designed to simplify everyday business operations. Over time, we expanded into dashboards, automation utilities, financial calculators, and reporting systems.
              </p>
              <p>
                Today, our digital tools support thousands of users across India — helping them boost productivity, stay organized, and manage data effortlessly.
              </p>
              <p className="font-semibold text-gray-800">
                We continue to grow with one goal: to make high-quality digital tools accessible to every business.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Our Achievements */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🟩</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Our Achievements
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Join Our Journey?</h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover how ZynpayProduct can transform your business with our digital tools
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
