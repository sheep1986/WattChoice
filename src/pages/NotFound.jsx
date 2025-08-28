import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Phone, Zap } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Animation */}
          <div className="relative mb-8">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.05, 0.95, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="inline-block"
            >
              <Zap className="w-24 h-24 text-emerald-400 mx-auto" />
            </motion.div>
          </div>

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">
            4<span className="text-emerald-400">0</span>4
          </h1>
          
          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Looks like this page has switched suppliers! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
            <Link
              to="/"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              to="/business-electricity"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              <Zap className="w-5 h-5" />
              Get Quote
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/business-electricity" className="text-emerald-400 hover:text-emerald-300">
                Business Electricity
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/business-gas" className="text-emerald-400 hover:text-emerald-300">
                Business Gas
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/solar-energy" className="text-emerald-400 hover:text-emerald-300">
                Solar Energy
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/business-water" className="text-emerald-400 hover:text-emerald-300">
                Business Water
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 p-6 bg-slate-900/50 rounded-lg border border-slate-800">
            <p className="text-gray-400 mb-3">Need help finding what you're looking for?</p>
            <a
              href="tel:01618338661"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              0161 833 8661
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;