import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail, 
  Award, 
  Star,
  TrendingUp,
  Shield,
  Globe} from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Aman kr. ",
      role: "Director",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Business_icon.svg",
      bio: "Directing strategic communications and media relations, backed by over 5 years of expertise in financial journalism.",
      expertise: ["Financial Journalism", "Media Relations", "Content Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "aman@zynpay.com"
      }
    },
    {
      name: "Rohit Thakur",
      role: "Director",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Finance_icon.svg",
      bio: "Ensuring regulatory compliance ,legal excellence with 4 years in fintech law and Shaping the company voice and vision through strategic communication and trusted media partnerships.",
      expertise: ["Fintech Law", "Regulatory Compliance", "Risk Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maqbool@zynpay.com"
      }
    },
    {
      name: "Mohit Kumar",
      role: "Support Executive",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Customer_support_icon.svg",
      bio: "Delivering exceptional customer support and ensuring client satisfaction across all our services.",
      expertise: ["Customer Support", "Technical Assistance", "Client Relations"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mohit@zynpay.com"
      }
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "Industry Recognition",
      description: "Multiple awards for innovation in financial technology"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Growth Excellence",
      description: "300% year-over-year growth in client satisfaction"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Security Leadership",
      description: "Zero security incidents with bank-grade protection"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Global Reach",
      description: "Serving clients across 25+ countries worldwide"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="w-8 h-8 text-emerald-400" />
              <p className="text-emerald-400 font-bold text-lg">OUR EXPERT TEAM</p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Our diverse team of professionals brings together decades of experience 
              in finance, technology, and customer service to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Achievements */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Our Achievements</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Together, our team has achieved remarkable milestones in the fintech industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-8 h-8 text-emerald-600" />
              <p className="text-emerald-600 font-bold text-lg">JOIN OUR TEAM</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Ready to Make an Impact?
            </h2>
            <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for innovation and excellence in financial technology.
            </p>
            <div className="flex items-center justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;