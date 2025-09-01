import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, CheckCircle, Phone, TrendingUp, Shield, Clock, Building2, PoundSterling, Award, BarChart3 } from 'lucide-react';

const SimpleGas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-12 h-12 text-orange-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Business Gas
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Reduce your business gas costs by up to 40%. Expert procurement from 25+ UK gas suppliers 
            with transparent pricing and no hidden fees.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Compare Gas Prices <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-5 h-5" /> 0161 833 8661
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-400">40%</div>
              <div className="text-sm text-gray-400">Average Savings</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-400">£42M</div>
              <div className="text-sm text-gray-400">Client Savings</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-400">25+</div>
              <div className="text-sm text-gray-400">Gas Suppliers</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="relative py-0">
        <div className="h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2340&auto=format&fit=crop"
            alt="Industrial gas pipeline infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Switch Business Gas With Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
              <PoundSterling className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Wholesale Rates</h3>
              <p className="text-gray-400">
                Access to wholesale gas markets through our trading desk. Save 20-40% compared to standard rates.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
              <Shield className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Contract Protection</h3>
              <p className="text-gray-400">
                Never get caught by auto-renewal traps. We monitor your contracts and negotiate renewals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
              <Clock className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quick Switch</h3>
              <p className="text-gray-400">
                Complete the switch in 4-6 weeks. We handle all paperwork and supplier negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Market Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Current Gas Market Analysis
          </h2>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Market Rates</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                    <span className="text-gray-300">NBP Day Ahead</span>
                    <span className="text-orange-400 font-bold">68.5p/therm</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                    <span className="text-gray-300">Average Business Rate</span>
                    <span className="text-orange-400 font-bold">7.2p/kWh</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                    <span className="text-gray-300">12-Month Fixed</span>
                    <span className="text-orange-400 font-bold">6.8p/kWh</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Savings</h3>
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-gray-300 mb-4">Based on average usage of 500,000 kWh/year:</p>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">£8,500/year</div>
                  <p className="text-sm text-gray-400">Potential savings with our negotiated rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-orange-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Saving on Business Gas Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Free service • No obligation • Expert negotiation
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-5 px-10 rounded-lg shadow-lg text-lg"
            >
              Get Your Free Gas Quote <ArrowRight className="inline ml-2" />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg"
            >
              <Phone className="inline mr-2" /> Call: 0161 833 8661
            </motion.a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SimpleGas;