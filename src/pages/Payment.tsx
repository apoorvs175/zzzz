import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Lock,
  CheckCircle,
  ArrowLeft,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product, ProductDenomination } from '../data/products';

// Declare Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentItems, setPaymentItems] = useState<Array<{ product: Product; denomination: ProductDenomination; quantity: number }>>([]);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Determine payment items based on navigation source
    if (location.state?.fromCart) {
      // Payment from cart
      setPaymentItems(
        cartItems.map((item) => ({
          product: item.product,
          denomination: item.denomination,
          quantity: item.quantity,
        }))
      );
    } else if (location.state?.product && location.state?.denomination) {
      // Direct buy now
      setPaymentItems([
        {
          product: location.state.product,
          denomination: location.state.denomination,
          quantity: 1,
        },
      ]);
    } else {
      // Fallback: redirect to products if no payment data
      navigate('/products');
    }
  }, [location.state, cartItems, navigate]);

  const calculateTotal = () => {
    return paymentItems.reduce((total, item) => {
      return total + item.denomination.price * item.quantity;
    }, 0);
  };

  const handlePayment = async () => {
    if (!window.Razorpay) {
      setError('Payment gateway is loading. Please wait a moment and try again.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    const totalAmount = calculateTotal();
    // Note: Razorpay expects amount in smallest currency unit
    // For INR: amount in paise (multiply by 100)
    // For this app, products are priced in INR, so we convert to paise
    const amountInSmallestUnit = Math.round(totalAmount * 100);

    // IMPORTANT: In production, you should create an order on your backend server
    // and get the order_id from there. For now, we'll use a mock order_id.
    // Replace this with your actual backend API call.
    // See RAZORPAY_SETUP.md for detailed instructions.
    
    try {
      // TODO: Replace this with your actual backend API endpoint
      // Example: 
      // const response = await fetch('/api/create-order', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ amount: totalAmount, currency: 'INR' })
      // });
      // const { orderId } = await response.json();
      
      const orderId = `order_${Date.now()}`; // Mock order ID - replace with actual backend call

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID from dashboard
        amount: amountInSmallestUnit,
        currency: 'INR', // Using Indian Rupees
                         // Note: Amount is in paise (multiply by 100)
        name: 'ZynPay Technology',
        description: `Payment for ${paymentItems.length} item(s)`,
        order_id: orderId,
        handler: function (response: any) {
          // Handle successful payment
          console.log('Payment successful:', response);
          
          // TODO: Verify payment on your backend
          // Example: await fetch('/api/verify-payment', { 
          //   method: 'POST',
          //   body: JSON.stringify(response)
          // });

          // Clear cart if payment was from cart
          if (location.state?.fromCart) {
            clearCart();
          }

          // Navigate to success page
          navigate('/payment-success', {
            state: {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              items: paymentItems,
            },
          });
        },
        prefill: {
          name: 'Customer Name', // Get from user profile or form
          email: 'customer@example.com', // Get from user profile or form
          contact: '9999999999', // Get from user profile or form
        },
        theme: {
          color: '#10b981', // Emerald color matching your theme
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            setError('Payment was cancelled');
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setIsProcessing(false);
    } catch (err) {
      console.error('Payment error:', err);
      setError('Failed to initialize payment. Please try again.');
      setIsProcessing(false);
    }
  };

  const totalAmount = calculateTotal();
  const totalItems = paymentItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <h1 className="text-4xl font-bold text-gray-800 flex items-center space-x-3">
              <CreditCard className="w-10 h-10 text-emerald-600" />
              <span>Payment</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>
                <div className="space-y-4">
                  {paymentItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{item.product.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.denomination.label} × {item.quantity}
                        </p>
                      </div>
                      <p className="text-lg font-bold text-emerald-600">
                        ₹{(item.denomination.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Secure Payment</h3>
                    <p className="text-sm text-emerald-700">
                      Your payment is processed securely through Razorpay. We do not store your
                      card details. All transactions are encrypted and PCI-DSS compliant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-2">Payment Error</h3>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 sticky top-28">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({totalItems})</span>
                    <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes & Fees</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-2xl font-bold text-gray-800">
                      <span>Total</span>
                      <span className="text-emerald-600">₹{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing || paymentItems.length === 0}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Pay Securely</span>
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Secured by Razorpay</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;

