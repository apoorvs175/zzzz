import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle,
  CheckCircle,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Building className="w-6 h-6 text-emerald-600" />,
      title: "Merchant Legal Entity",
      details: ["ZYNPAY GATEWAY PRIVATE LIMITED"],
      description: "Registered merchant entity for all services"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Registered Address",
      details: [
        "R/o A/7/3/2 GREATER NOIDA Tugalpur",
        "Gautam Buddha Nagar, Greater Noida, Uttar Pradesh, India 201310",
        "Sakipur BO UTTAR PRADESH 201310"
      ],
      description: "Primary registered office location"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Operational Address",
      details: [
        "R/o A/7/3/2 GREATER NOIDA Tugalpur",
        "Gautam Buddha Nagar, Greater Noida, Uttar Pradesh, India 201310",
        "Sakipur BO UTTAR PRADESH 201310"
      ],
      description: "Operational office for daily activities"
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      title: "Support Contact",
      details: ["Telephone: 8882468570", "Telephone: 92896 21094", "Email: zynpay007@gmail.com"],
      description: "Reach our helpdesk for any assistance"
    }
  ];


  const features = [
    "24/7 customer support",
    "Dedicated account manager",
    "Technical documentation",
    "API integration assistance",
    "Compliance guidance",
    "Training and onboarding"
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 pt-20 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-xl mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </motion.div>
    );
  }

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
              <MessageCircle className="w-8 h-8 text-emerald-400" />
              <p className="text-emerald-400 font-bold text-lg">GET IN TOUCH</p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Contact{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Ready to transform your business with our payment solutions? 
              Get in touch with our experts today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-3">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter message subject"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help you succeed. Reach out to us through any of the 
                  channels below and our team will respond promptly.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-500 text-sm mt-2">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Support Features */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Support?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                      <span className="text-emerald-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Visit Our Office</h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Visit us at our Greater Noida office for in-person consultations
              </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                R/o A/7/3/2 GREATER NOIDA Tugalpur, Gautam Buddha Nagar A.g.nioda
              </p>
              <p className="text-gray-600">
                Uttar Pradesh India 201310, Sakipur BO UTTAR PRADESH 201310
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;