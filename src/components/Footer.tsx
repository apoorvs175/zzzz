import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">ZynpayProduct</h3>
            <p className="text-lg font-medium text-gray-300 mb-3">Smart Digital Tools for Modern Business</p>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              We build simple, powerful digital tools that help businesses automate tasks, manage finances, and operate more efficiently.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Our focus is on secure, easy-to-use online software products for everyday business needs.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Quick Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cancellation-refund" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Service Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Expense & Cashflow Tools
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Automation Tools
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Business Dashboard Tools
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Reporting & Reconciliation Tools
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Invoice & Ledger Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>8882468570</p>
                  <p>9289621094</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <a href="mailto:zynpay007@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  zynpay007@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Shop No. 4, A/7/3/2 Tugalpur,</p>
                  <p>Greater Noida, Gautam Buddha Nagar,</p>
                  <p>Uttar Pradesh, 201310</p>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="mt-6">
              <h5 className="text-base font-semibold mb-4 text-emerald-400">Connect With Us</h5>
              <div className="flex space-x-3">
                {/* Social icons placeholder - add your social links here */}
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">i</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Zynpay Gateway Private Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              We provide digital tools & software utilities for business automation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
