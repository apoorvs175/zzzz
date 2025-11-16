import { motion } from 'framer-motion';
import { FileText, Shield, Globe, Scale } from 'lucide-react';

const TermsConditions = () => {
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
                Terms & Conditions
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
                Review the guidelines that govern your use of ZynpayProduct services
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Agreement</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  These Terms & Conditions govern your use of Zynpay Gateway Private Limited and all digital tools, services, and software utilities offered on this website. The terms "we", "us", and "our" refer to Zynpay Gateway Private Limited, operating from Shop No. 4 A/7/3/2 Tugalpur, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 201310. The terms "you", "your", and "user" refer to any person accessing our website or purchasing our digital services.
                </p>
                <p>
                  By accessing our website or purchasing any digital product from us, you agree to follow these Terms & Conditions. All content, features, and information on this website may be updated or changed without prior notice.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Use of Digital Products</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  All products offered by ZynpayProduct are digital in nature, delivered online via email, WhatsApp, or dashboard access. When you purchase any digital tool or service, you receive a non-transferable, limited license to use the product for personal or business use as applicable.
                </p>
                <p>
                  You are responsible for ensuring that your device, network, and email address are accurate and capable of receiving digital content. We are not responsible for issues caused by incorrect user information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  All content on this website—including design, layout, graphics, text, icons, and software—is owned by or licensed to us. You may not copy, redistribute, modify, or reproduce any material without written permission from ZynpayProduct.
                </p>
                <p>
                  Unauthorized use of our content may lead to legal action.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Third-Party Links</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Our website may include links to third-party websites for additional convenience. These external sites are not controlled by us. We are not responsible for their content, accuracy, or policies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Limitations of Liability</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  ZynpayProduct is not liable for any technical issues, delays, or disruptions beyond our control.
                </p>
                <p>
                  Use of any information, digital product, or tool from our website is entirely at your own risk.
                </p>
                <p>
                  We do not guarantee uninterrupted access to the website, although we strive to maintain high uptime standards.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Refunds, Cancellations & Delivery</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  All refunds and cancellations are governed by our Cancellation & Refund Policy.
                </p>
                <p>
                  Since our products are delivered digitally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Once a product is delivered to your email or dashboard, no refund or cancellation will be accepted.</li>
                  <li>Orders cannot be reversed after digital delivery.</li>
                  <li>If there is a delivery failure due to technical issues, our team will provide assistance to ensure proper access.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">User Responsibilities</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  You agree not to misuse our digital tools, attempt unauthorized access, duplicate our software, or violate any applicable laws through your use of our platform.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Jurisdiction</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Any dispute arising from the use of our website or digital products shall be governed by the laws of India. All disputes will fall under the jurisdiction of courts located in Gautam Buddha Nagar, Uttar Pradesh.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <Shield className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Protection</h3>
              <p className="text-gray-600 text-sm">
                We safeguard proprietary content and user information through stringent security practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage Rights</h3>
              <p className="text-gray-600 text-sm">
                Ensure product and service usage adheres to applicable regulations and intended purposes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <Scale className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Compliance</h3>
              <p className="text-gray-600 text-sm">
                Engage with our services under the jurisdiction of Indian law and regulatory standards.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
