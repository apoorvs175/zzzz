import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Phone, Mail } from 'lucide-react';

const CancellationRefund = () => {
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
                Cancellation and Refund Policy
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
                Understanding our refund and cancellation terms for digital products
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
              Zynpay Gateway Private Limited provides only digital tools and software utilities, delivered instantly through email or dashboard access. Since our products are digital and cannot be returned once accessed, all sales are considered final.
            </p>
            <p>
              Cancellation requests are accepted only if the order has not been delivered or activated. Once the digital product, access link, or login credentials have been sent to your registered email or WhatsApp, the order is considered delivered, and no refund or cancellation can be processed.
            </p>
            <p>
              We cannot revoke or deactivate a digital product after delivery; therefore, no refunds will be issued after successful delivery.
            </p>
            <p>
              If the customer enters an incorrect email or mobile number, we are not responsible for non-delivery, and refunds will not be provided.
            </p>
            <p>
              In case of technical issues or failed delivery from our side, customers may contact our support team, and we will ensure the product is delivered correctly.
            </p>
            <p>
              All approved refunds (only in cases where delivery has not happened) will be processed within 3–5 business days.
            </p>
            <p>
              For any assistance, please contact 8882468570, 9289621094, or zynpay007@gmail.com.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-800 mb-3">Important Notice</h3>
                <p className="text-red-700 text-sm sm:text-base leading-relaxed">
                  Once a digital product is delivered to your email or dashboard, it cannot be returned or refunded. Please ensure your contact information is correct before completing your purchase.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 flex items-center space-x-4 border border-emerald-100">
              <Phone className="w-10 h-10 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Customer Support</p>
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
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CancellationRefund;
