import { motion } from 'framer-motion';
import { FileText, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const ShippingPolicy = () => {
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
                Shipping Policy
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
                Digital delivery information for all ZynpayProduct services
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
            className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg"
          >
            <p>
              All products offered by Zynpay Gateway Private Limited are delivered digitally, and no physical shipping or courier services are involved. Upon successful payment, customers receive instant access to their purchased digital tools through email, WhatsApp (where applicable), or direct dashboard activation.
            </p>
            <p>
              Most products are delivered immediately, while some may take up to 12 hours in rare cases. Customers will receive an order confirmation email containing access details, login credentials, or download links.
            </p>
            <p>
              Since we deal only in digital goods, there are no shipping charges, delivery partners, or physical dispatch timelines.
            </p>
            <p>
              If customers do not receive their digital product within the expected time, they may contact our support team at 8882468570, 9289621094, or zynpay007@gmail.com for immediate assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 flex items-center space-x-4 border border-emerald-100">
              <Phone className="w-10 h-10 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Support Phone</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">8882468570</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">9289621094</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 flex items-center space-x-4 border border-purple-100">
              <Mail className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Support Email</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800 break-all">zynpay007@gmail.com</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 flex items-start space-x-4 border border-blue-100">
              <MapPin className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Office Location</p>
                <p className="text-sm font-semibold text-gray-800">Shop No. 4, A/7/3/2 Tugalpur, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201310</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
