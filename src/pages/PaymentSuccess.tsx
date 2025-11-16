import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ShoppingBag, Download } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentId, orderId, items } = location.state || {};

  React.useEffect(() => {
    // Redirect if accessed directly without payment data
    if (!paymentId) {
      navigate('/products');
    }
  }, [paymentId, navigate]);

  if (!paymentId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 p-8 sm:p-12">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-16 h-16 text-emerald-600" />
            </motion.div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase. Your order has been confirmed.
            </p>

            {/* Payment Details */}
            <div className="bg-emerald-50 rounded-2xl p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-mono font-semibold text-gray-800">{paymentId}</span>
                </div>
                {orderId && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono font-semibold text-gray-800">{orderId}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Continue Shopping</span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center space-x-2 border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span>Go to Home</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

