import { motion } from 'framer-motion';
import { FileText, Shield, Lock, Cookie, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const focusAreas = [
    {
      title: 'Information We Collect',
      description: 'Name, email address, mobile number, business details, login information, usage data, and technical data such as IP address and browser type.',
      icon: <Shield className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'How We Use Your Information',
      description: 'To deliver digital products, manage accounts, provide support, improve tools, send updates, and protect against fraud.',
      icon: <Lock className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Data Protection & Security',
      description: 'We implement industry-standard security measures to protect your personal data against unauthorized access, modification, or misuse.',
      icon: <Cookie className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 sm:py-24 relative overflow-hidden rounded-3xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center text-white"
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <FileText className="w-8 h-8 text-emerald-400" />
                <p className="text-emerald-400 font-bold text-lg">POLICY OVERVIEW</p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
                How Zynpay Gateway Private Limited collects, uses, stores, and protects your personal information
              </p>
            </motion.div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 mb-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                This Privacy Policy explains how Zynpay Gateway Private Limited collects, uses, stores, and protects your personal information when you access our website or purchase any of our digital tools and software services. We are committed to maintaining your privacy and ensuring that your information is handled securely and responsibly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Information We Collect</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  We may collect the following information when you register, purchase, or interact with our website:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Mobile number</li>
                  <li>Business details (if applicable)</li>
                  <li>Login or account information</li>
                  <li>Usage data related to our digital tools</li>
                  <li>Technical data such as IP address, browser type, and device information</li>
                </ul>
                <p>
                  This information helps us provide access to our digital services, improve user experience, and ensure secure delivery of purchased products.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>We use your information for purposes including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delivering digital products to your email or dashboard</li>
                  <li>Creating and managing your user account</li>
                  <li>Providing technical support and customer assistance</li>
                  <li>Improving our digital tools and website functionality</li>
                  <li>Sending important service updates or purchase confirmations</li>
                  <li>Protecting against fraudulent activities</li>
                  <li>Internal record keeping</li>
                </ul>
                <p>
                  We may send you updates about new tools or features, but only if you choose to receive them.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Data Protection & Security</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  We implement industry-standard security measures to protect your personal data against unauthorized access, modification, or misuse.
                </p>
                <p>
                  Your information is stored securely and is only used for the purpose of delivering and maintaining our digital services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Cookies</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Our website uses cookies to improve your browsing experience, analyze site traffic, and understand user behavior. You may choose to accept or decline cookies. Most browsers accept cookies automatically, but you can change your browser settings anytime.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Sharing of Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  We do not sell, trade, or rent your personal information to third parties.
                </p>
                <p>We may share your information only with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in digital product delivery</li>
                  <li>Payment gateway partners for secure transactions</li>
                  <li>Legal authorities if required by law</li>
                </ul>
                <p>
                  These parties are obligated to maintain confidentiality and data protection.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Your Rights</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>You may:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Update or correct your personal information</li>
                  <li>Request access to your stored data</li>
                  <li>Opt out of promotional messages</li>
                  <li>Request deletion of your account (except data retained for legal compliance)</li>
                </ul>
                <p>
                  To exercise these rights, contact us at: zynpay007@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Third-Party Links</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Our website may contain links to external websites. We are not responsible for their content or privacy practices.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Policy Updates</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  We may update this Privacy Policy from time to time. Continued use of our website after updates implies acceptance of the revised terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>For any questions related to privacy or data usage, contact:</p>
                <ul className="list-none space-y-2 ml-4">
                  <li className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span>zynpay007@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span>8882468570 / 9289621094</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100"
              >
                <div className="mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 flex items-center space-x-4 border border-emerald-100">
              <Mail className="w-10 h-10 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Privacy Queries</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800 break-all">zynpay007@gmail.com</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 flex items-center space-x-4 border border-purple-100">
              <Phone className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Direct Support</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">8882468570</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">9289621094</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
