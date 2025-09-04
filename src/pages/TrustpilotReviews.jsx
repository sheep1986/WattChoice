import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, TrendingUp, Users, Award } from 'lucide-react';
import TrustpilotWidget from '../components/TrustpilotWidget';
import { SEOHead } from '../SEO';

const TrustpilotReviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <SEOHead
        title="Customer Reviews on Trustpilot"
        description="Read real customer reviews on Trustpilot. Watt Choice has a 4.6 star rating from over 700 verified business reviews."
        keywords="trustpilot reviews, customer testimonials, watt utilities reviews"
        canonical="https://wattutilities001.netlify.app/reviews"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl text-center"
        >
          {/* Trustpilot Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star 
                key={star} 
                className={`w-10 h-10 ${star <= 4 ? 'text-green-500 fill-current' : 'text-gray-600 fill-current'}`} 
              />
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rated 4.6/5 on Trustpilot
          </h1>
          
          <p className="text-xl text-gray-700 mb-2">
            Based on <span className="text-green-600 font-bold">709 reviews</span> from verified businesses
          </p>

          <p className="text-sm text-gray-600 mb-8">
            89% of our customers rate us 5 stars
          </p>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/60 border border-slate-800 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">709</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 border border-slate-800 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">4.6</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/60 border border-slate-800 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/60 border border-slate-800 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">Excellent</div>
              <div className="text-sm text-gray-600">TrustScore</div>
            </motion.div>
          </div>

          {/* Mini Widget */}
          <div className="max-w-md mx-auto mb-8">
            <TrustpilotWidget type="mini" />
          </div>
        </motion.div>
      </section>

      {/* Carousel Reviews Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Latest Customer Reviews
          </h2>
          
          {/* Trustpilot Carousel Widget */}
          <div className="bg-white/60 border border-slate-800 rounded-lg p-8">
            <TrustpilotWidget type="carousel" />
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          
          {/* Trustpilot Grid Widget */}
          <div className="bg-white/60 border border-slate-800 rounded-lg p-8">
            <TrustpilotWidget type="grid" />
          </div>

          {/* View All on Trustpilot */}
          <div className="text-center mt-8">
            <a
              href="https://www.trustpilot.com/review/watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View All Reviews on Trustpilot
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Businesses Trust Us
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">Verified Reviews</h3>
              <p className="text-sm text-gray-600">All reviews are from real customers verified by Trustpilot</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">Consistent Excellence</h3>
              <p className="text-sm text-gray-600">Maintaining 4.6+ rating across 700+ reviews</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">900k+ Served</h3>
              <p className="text-sm text-gray-600">Trusted by businesses across the UK</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">Industry Leaders</h3>
              <p className="text-sm text-gray-600">Award-winning service since 2000</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Happy Customers
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            See why 89% of our customers give us 5 stars
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg"
            >
              Get Your Free Quote
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg"
            >
              Call: 0161 833 8661
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustpilotReviews;