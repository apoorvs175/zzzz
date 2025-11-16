


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Shield, Award, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

type NavItem = {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Dashboard tools', path: '/services#dashboard-tools' },
        { name: 'Monitoring tools', path: '/services#monitoring' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Policies',
      path: '/shipping-policy',
      dropdown: [
        { name: 'Shipping Policy', path: '/shipping-policy' },
        { name: 'Cancellation & Refund', path: '/cancellation-refund' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
        { name: 'Privacy Policy', path: '/privacy-policy' }
      ]
    }
  ];

  const isNavItemActive = (item: NavItem) => {
    if (item.dropdown) {
      const dropdownMatch = item.dropdown.some(
        (dropdownItem) => dropdownItem.path === location.pathname
      );
      if (dropdownMatch) {
        return true;
      }
    }

    if (item.path === '/') {
      return location.pathname === '/';
    }

    return (
      location.pathname === item.path ||
      location.pathname.startsWith(`${item.path}/`)
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="Zynpay Gateway Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full animate-pulse"></div>
            </motion.div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold transition-colors text-gray-800 truncate">
                Zynpay Product
              </h1>
              <p className="text-xs text-emerald-500 font-medium hidden sm:block">Advanced Product Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Trust Indicators & Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Trust Badges */}
            <div className="flex items-center space-x-3">
              {/* <div className="flex items-center space-x-1 text-xs">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-gray-600">
                  NPCI Certified
                </span>
              </div> */}
              <div className="flex items-center space-x-1 text-xs">
                <Award className="w-4 h-4 text-purple-500" />
                <span className="text-gray-600">
                  ISO 27001
                </span>
              </div>
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </motion.span>
              )}
            </Link>

            {/* Auth Buttons / Profile */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-800 font-bold">
                    {user.firstName?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-gray-800">{user.firstName}</div>
                    <div className="text-[11px] text-emerald-600">ID #{user.userId5}</div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-gray-600 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-6 py-2 text-emerald-600 border-2 border-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-medium shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors flex-shrink-0"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className="lg:hidden overflow-hidden bg-white rounded-b-2xl shadow-xl"
        >
          <nav 
            className="mobile-nav-scroll py-4 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain space-y-1"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#6ee7b7 #f3f4f6'
            }}
          >
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);

              return (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-8 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === dropdownItem.path
                              ? 'text-emerald-600 bg-emerald-50'
                              : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            
            {/* Sign In / Logout right after Policies */}
            {user ? (
              <>
                <div className="px-6 py-2">
                  <div className="flex items-center justify-between px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-100 mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-sm">
                        {user.firstName?.[0]?.toUpperCase() ?? 'U'}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">{user.firstName}</div>
                        <div className="text-[10px] text-emerald-600">ID #{user.userId5}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="block w-full text-center px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-colors rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  location.pathname === '/login'
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                Sign In
              </Link>
            )}

            {/* Cart Link for Mobile */}
            <div className="px-6 py-2 pb-4">
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 bg-emerald-50 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-gray-800">Cart</span>
                </div>
                {cartItemCount > 0 && (
                  <span className="bg-emerald-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;