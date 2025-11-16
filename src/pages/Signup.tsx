import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Building, 
  ArrowRight, 
  CheckCircle,
  Star,
  Shield
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    businessType: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
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

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const benefits = [
    "Free account setup with no hidden fees",
    "Access to all payment processing tools",
    "24/7 dedicated customer support",
    "Advanced analytics and reporting",
    "Multi-currency transaction support",
    "Enterprise-grade security features"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Join the Future of{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Digital Payments
                  </span>
                </h1>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Create your account today and unlock powerful financial tools that will 
                  transform how your business handles payments and transactions.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-300" />
                  <h4 className="text-xl font-bold">Trusted Platform</h4>
                </div>
                <p className="text-emerald-100 mb-4">
                  NPCI certified and ISO 27001 compliant platform trusted by thousands 
                  of businesses worldwide for secure payment processing.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">Bank-Grade Security</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">99.9% Uptime</span>
                  </div>
                </div>
              </motion.div>
              
              
              
                          </motion.div>



            {/* Right Side - Signup Form */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">PC</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">ZynPay Technology</h2>
                    <p className="text-emerald-600 text-sm">Account Registration</p>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Create Your Account</h3>
                <p className="text-gray-600">Get started with your free account today</p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    currentStep >= 1 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    currentStep >= 2 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-3">
                          First Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First name"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-3">
                          Last Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last name"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-3">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-3">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-3">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-3">
                        Business Type
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                        required
                      >
                        <option value="">Select business type</option>
                        <option value="retail">Retail</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="services">Services</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
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
                          placeholder="Create a secure password"
                          className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
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

                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-3">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 w-5 h-5" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                          className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 mt-1"
                        required
                      />
                      <span className="text-gray-700 text-sm">
                        I agree to the{' '}
                        <Link to="/terms" className="text-emerald-600 hover:text-emerald-700 font-medium">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium">
                          Privacy Policy
                        </Link>
                      </span>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                      >
                        Back
                      </button>
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {isLoading ? (
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>Create Account</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
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
                <span>Sign up with Google</span>
              </button>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;