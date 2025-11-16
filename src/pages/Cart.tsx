import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CreditCard,
  Package
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import SafeImage from '../components/SafeImage';
import { resolveProductImage } from '../utils/imageResolver';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate('/payment', { state: { fromCart: true } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ShoppingCart className="w-16 h-16 text-gray-300" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Continue Shopping</span>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-2">
              <ShoppingCart className="w-8 h-8 text-emerald-600" />
              <span>Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const localImage = resolveProductImage(
                  item.product.name,
                  item.product.brand,
                  item.product.slug
                );
                const imageSrc = localImage ?? item.product.image;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        {imageSrc ? (
                          <SafeImage
                            src={imageSrc}
                            alt={item.product.name}
                            className="w-32 h-32 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                            <Package className="w-12 h-12 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <Link
                            to={`/products/${item.product.slug}`}
                            className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.product.brand} • {item.product.category}
                          </p>
                          <p className="text-lg font-semibold text-emerald-600 mt-2">
                            {item.denomination.label}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-700">Quantity:</span>
                            <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 font-semibold text-gray-800 min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-800">
                              ₹{(item.denomination.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              ₹{item.denomination.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove from cart</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 sticky top-28"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes & Fees</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total</span>
                      <span className="text-emerald-600">₹{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 mb-4"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>

                <Link
                  to="/products"
                  className="block w-full text-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;

