import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  CreditCard,
  ShoppingCart,
  Sparkles,
  Star,
  ShieldCheck,
  Clock,
  Gift
} from 'lucide-react';
import { giftProducts, Product, ProductDenomination } from '../data/products';
import SafeImage from '../components/SafeImage';
import { resolveProductImage } from '../utils/imageResolver';
import { useCart } from '../context/CartContext';
import { formatPriceRange } from '../utils/productUtils';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = useMemo<Product | undefined>(
    () => giftProducts.find((item) => item.slug === productId),
    [productId]
  );

  const [selectedDenomination, setSelectedDenomination] = useState<ProductDenomination | undefined>(
    () => product?.denominations[0]
  );
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedDenomination(product.denominations[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product || !selectedDenomination) return;
    
    setIsAddingToCart(true);
    addToCart(product, selectedDenomination);
    
    // Show feedback
    setTimeout(() => {
      setIsAddingToCart(false);
      // Optionally navigate to cart or show a toast notification
    }, 500);
  };

  const handleBuyNow = () => {
    if (!product || !selectedDenomination) return;
    
    navigate('/payment', {
      state: {
        product,
        denomination: selectedDenomination,
      },
    });
  };

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = giftProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 8);

  return (
    <div className="bg-slate-50 pt-28 pb-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to products</span>
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl border border-emerald-100/40"
            >
              <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-3xl">
                {(() => {
                  const localImage = resolveProductImage(product.name, product.brand, product.slug);
                  const imageSrc = localImage ?? product.image;
                  return imageSrc ? (
                  <>
                    <SafeImage
                      src={imageSrc}
                      alt={`${product.name} logo`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </>
                  ) : (
                  <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Gift className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  );
                })()}
                <div className="absolute top-5 left-5 space-y-2">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
                    {product.savingsLabel}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white shadow">
                    Instant delivery
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                      {product.brand} • {product.category}
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
                    <p className="text-gray-500 mt-2">
                      {product.region} • Redeem in {product.currency}
                    </p>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500">Price Range</p>
                      <p className="text-lg font-semibold text-emerald-600">
                        {formatPriceRange(product, product.currency === 'INR' ? '₹' : product.currency)}
                      </p>
                    </div>
                  </div>
                    <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-600 text-sm font-semibold px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{product.rating.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-900">
                        {product.reviews.toLocaleString()}
                      </span>{' '}
                      trusted reviews
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    {product.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-100 rounded-2xl p-6 sm:p-8 space-y-4">
                    <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.25em]">
                      Why Zynpay
                    </h2>
                    <ul className="space-y-3">
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start space-x-3 text-sm text-gray-600">
                          <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-white border border-emerald-100/50 shadow-sm p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Terms & Conditions</h3>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  {product.terms.map((term) => (
                    <li key={term} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white border border-emerald-100/50 shadow-sm p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">How to redeem</h3>
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <ol className="space-y-4 text-sm text-gray-600 list-decimal list-inside">
                  {product.guides.map((guide) => (
                    <li key={guide} className="pl-2">
                      {guide}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-white border border-emerald-100/60 shadow-lg shadow-emerald-900/5 p-6 sm:p-8">
              <div className="space-y-5">
                <h2 className="text-lg font-semibold text-gray-900">Select denomination</h2>
                <div className="space-y-3">
                  {product.denominations.map((denom) => {
                    const isActive = denom.id === selectedDenomination?.id;
                    return (
                      <button
                        key={denom.id}
                        onClick={() => setSelectedDenomination(denom)}
                        className={`w-full text-left rounded-2xl border px-4 py-4 transition-all ${
                          isActive
                            ? 'border-emerald-500 bg-emerald-50 shadow-inner'
                            : 'border-gray-200 bg-white hover:border-emerald-200'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                              <p className="text-base font-semibold text-gray-900">{denom.label}</p>
                              <p className="text-sm text-gray-500">INR {String(denom.label).replace(/[^\d]/g, '')}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="text-xs text-emerald-500 font-semibold">
                              Save {denom.savings}%
                            </p>
                            {denom.bestValue && (
                              <span className="mt-1 inline-flex items-center rounded-full bg-emerald-500 text-xs font-semibold text-white px-2 py-0.5">
                                Best value
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-700">
                    <ShieldCheck className="w-4 h-4" />
                    <p className="text-sm font-semibold">Secure checkout by Zynpay Shield</p>
                  </div>
                  <p className="text-xs text-emerald-700">
                    Encrypted payments, automated fraud checks, and instant delivery right inside
                    your account.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAddingToCart || !selectedDenomination}
                    className="w-full inline-flex items-center justify-center space-x-2 rounded-2xl bg-emerald-600 text-white font-semibold py-3 shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{isAddingToCart ? 'Adding...' : 'Add to cart'}</span>
                  </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={!selectedDenomination}
                    className="w-full inline-flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold py-3 hover:from-sky-600 hover:to-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Buy now</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-dashed border-gray-200 text-sm text-gray-500 space-y-2">
                  <p>Taxes inclusive. Final price confirmed at checkout based on your region.</p>
                  <p>Need help? <Link to="/contact" className="text-emerald-600 font-semibold">Talk to our gift card specialists</Link>.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-emerald-100/60 shadow-sm p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Customers also like</h3>
                <Sparkles className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="space-y-4">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/products/${item.slug}`}
                    className="flex items-center space-x-4 rounded-2xl border border-transparent hover:border-emerald-200 p-3 transition-colors"
                  >
                    {(() => {
                      const localImage = resolveProductImage(item.name, item.brand, item.slug);
                      const imageSrc = localImage ?? item.image;
                      return imageSrc ? (
                      <SafeImage
                        src={imageSrc}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                        loading="lazy"
                      />
                      ) : (
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <Gift className="w-8 h-8 text-white" />
                      </div>
                      );
                    })()}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.category} • {item.region}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-emerald-600 font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{item.rating.toFixed(2)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

