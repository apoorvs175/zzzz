import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight, Star, Gift } from 'lucide-react';
import { giftProducts } from '../data/products';
import SafeImage from '../components/SafeImage';
import { resolveProductImage } from '../utils/imageResolver';
import { getPriceRange, formatPriceRange } from '../utils/productUtils';

const Products: React.FC = () => {
  return (
    <div className="bg-slate-50 pt-28 pb-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white px-6 sm:px-10 py-12 sm:py-16 shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Smart Digital Tools & Business Automation Products

            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-white/90 leading-relaxed"
            >
              Boost your business efficiency with Zynpay’s digital tools — track expenses, manage cashflow, automate reminders, generate invoices, and simplify financial operations.
              Every product includes instant online delivery, secure checkout, and lifetime access.
            </motion.p>
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:space-x-8 gap-6 text-white/80 text-sm">
              <div>
                <p className="font-semibold text-white">10,000+</p>
                <p>Digital deliveries every month</p>
              </div>
              <div>
                <p className="font-semibold text-white">15+</p>
                <p>Productivity & fintech tools                </p>
              </div>
              <div>
                <p className="font-semibold text-white">4.9/5</p>
                <p>User satisfaction score</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Popular Digital Tools This Week</h2>
            <p className="text-gray-500">
              Explore top-selling digital products curated for the Zynpay community.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700"
          >
            <span>Need bulk corporate gifting?</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {giftProducts.map((product, index) => {
            const priceRange = getPriceRange(product);
            const priceRangeText = formatPriceRange(product, product.currency === 'INR' ? '₹' : product.currency);
            const localImage = resolveProductImage(product.name, product.brand, product.slug);
            const imageSrc = localImage ?? product.image;

            return (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-emerald-900/5 border border-emerald-100/40 hover:border-emerald-200 transition-all"
              >
                <Link to={`/products/${product.slug}`} className="relative h-48 overflow-hidden block rounded-t-3xl">
                  {imageSrc ? (
                    <>
                      <SafeImage
                        src={imageSrc}
                        alt={`${product.name} logo`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Gift className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {product.savingsLabel}
                  </div>
                </Link>

                <div className="p-6 space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                        {product.brand}
                      </p>
                      <h3 className="mt-1 text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h3>
                    </div>
                    <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-600 text-xs font-medium px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{product.rating.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.shortDescription}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-500 text-xs sm:text-sm">
                        {product.category} • {product.region}
                      </span>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-gray-400 text-xs">Price Range</p>
                      <p className="font-semibold text-gray-900">
                        {priceRangeText}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {product.badges?.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/products/${product.slug}`}
                    className="block w-full text-center rounded-2xl bg-emerald-600 text-white font-semibold py-3 shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
                  >
                    View details
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;

