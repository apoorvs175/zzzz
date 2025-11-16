import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefund from './pages/CancellationRefund';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Dashboard removed */}
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Redirect aliases for common URL patterns */}
            <Route path="/terms" element={<Navigate to="/terms-conditions" replace />} />
            <Route path="/policy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/shipping" element={<Navigate to="/shipping-policy" replace />} />
            <Route path="/refund" element={<Navigate to="/cancellation-refund" replace />} />
            <Route path="/cancellation" element={<Navigate to="/cancellation-refund" replace />} />
            <Route path="/location" element={<Navigate to="/contact" replace />} />
            {/* 404 catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;