import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User, Phone, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full relative overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Enhanced Header */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">PC</span>
              </div>
              <div>
                <span className="font-bold text-xl"> ZynPay Technology</span>
                <div className="flex items-center space-x-1 mt-1">
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-300 text-sm">Advanced Financial Solutions</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Welcome to ZynPay Platform! 🚀
            </h2>
            <p className="text-blue-100">
              {activeTab === 'login' 
                ? 'Access your secure financial dashboard' 
                : 'Join our innovative financial ecosystem'
              }
            </p>
          </div>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex bg-gradient-to-r from-gray-50 to-gray-100">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-4 px-6 text-center font-bold transition-all duration-300 ${
              activeTab === 'login'
                ? 'text-purple-600 bg-white border-b-3 border-purple-600 shadow-lg'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-4 px-6 text-center font-bold transition-all duration-300 ${
              activeTab === 'register'
                ? 'text-purple-600 bg-white border-b-3 border-purple-600 shadow-lg'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Enhanced Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === 'register' && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-3">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-3">
                {activeTab === 'login' ? 'Mobile Number' : 'Email Address'}
              </label>
              <div className="relative">
                {activeTab === 'login' ? (
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                ) : (
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                )}
                <input
                  type={activeTab === 'login' ? 'tel' : 'email'}
                  name={activeTab === 'login' ? 'phone' : 'email'}
                  value={activeTab === 'login' ? formData.phone : formData.email}
                  onChange={handleInputChange}
                  placeholder={activeTab === 'login' ? 'Mobile Number' : 'Enter your email address'}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 hover:border-emerald-300"
                  required
                />
              </div>
            </div>

            {activeTab === 'register' && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-3">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-3">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter secure password"
                  className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-300"
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

            {activeTab === 'register' && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-3">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 hover:border-pink-300"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              {activeTab === 'login' ? 'Access Platform' : 'Create Account'}
            </button>
          </form>

          {activeTab === 'login' && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                New to our platform?{' '}
                <button
                  onClick={() => setActiveTab('register')}
                  className="text-purple-600 hover:text-purple-700 font-bold transition-colors"
                >
                  CREATE ACCOUNT
                </button>
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors">
                Forgot Your Password?
              </button>
            </div>
          )}

          {activeTab === 'register' && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => setActiveTab('login')}
                  className="text-purple-600 hover:text-purple-700 font-bold transition-colors"
                >
                  SIGN IN
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;