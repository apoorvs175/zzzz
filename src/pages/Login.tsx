import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };

  const features = [
    "Bank-grade security encryption",
    "24/7 customer support",
    "Real-time transaction monitoring",
    "Multi-factor authentication"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Login Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">PC</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">ZynPay Technology</h1>
                    <p className="text-emerald-600 text-sm">Secure Login Portal</p>
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
                <p className="text-gray-600">Access your secure financial dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 hover:border-emerald-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 text-sm">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Access Dashboard</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>

              <div className="my-6 flex items-center">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="px-4 text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <button
                type="button"
                onClick={async () => {
                  await loginWithGoogle();
                  navigate('/');
                }}
                className="w-full border-2 border-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                <span>Sign in with Google</span>
              </button>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Right Side - Features & Benefits */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  Secure & Reliable Platform
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Experience enterprise-grade security with our advanced financial platform. 
                  Your data and products are protected by the latest encryption technology.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-emerald-300" />
                  <h4 className="text-xl font-bold">Trusted by 10,000+ Businesses</h4>
                </div>
                <p className="text-purple-100">
                  Join the growing community of businesses that rely on our platform 
                  for their payment processing and financial management needs.
                </p>
              </motion.div> */}



            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;