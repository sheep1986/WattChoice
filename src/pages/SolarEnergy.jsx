import React from 'react';
import { motion } from 'framer-motion';
import { Sun, ArrowRight, CheckCircle, Battery, Zap, Car, PoundSterling, Leaf, Shield, TrendingUp } from 'lucide-react';

const SolarEnergy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sun className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Fully Funded Solar
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Solar panels, battery storage & EV charging with <span className="text-emerald-400 font-bold">no upfront costs</span> and <span className="text-emerald-400 font-bold">no maintenance fees</span>. 
            You only pay for the solar electricity you use at rates lower than grid prices.
          </p>

          {/* Key Benefits Banner */}
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 mb-8 max-w-3xl">
            <p className="text-emerald-300 font-semibold">
              💡 Save £350+ in just 5 minutes • Reduce carbon by 40% • Fixed rates for 20 years
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Get Solar Assessment <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 border border-slate-700"
            >
              Speak to Solar Expert
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">£0</div>
              <div className="text-sm text-gray-400">Upfront Cost</div>
            </motion.div>
            <motion.div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">25%</div>
              <div className="text-sm text-gray-400">Avg Energy Savings</div>
            </motion.div>
            <motion.div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">20yr</div>
              <div className="text-sm text-gray-400">Fixed Rates</div>
            </motion.div>
            <motion.div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">40%</div>
              <div className="text-sm text-gray-400">Carbon Reduction</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How Fully Funded Works */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How Fully Funded Solar Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700"
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-2">We Install Everything</h3>
              <p className="text-gray-400">
                Solar panels, inverters, battery storage, and EV chargers installed at no cost to you. 
                Full design, planning, and installation included.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700"
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-2">You Use Clean Energy</h3>
              <p className="text-gray-400">
                Use solar power during the day, stored energy at night. Reduce grid dependence by up to 70%. 
                Excess energy stored or exported.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700"
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-2">Pay Less Than Grid</h3>
              <p className="text-gray-400">
                Only pay for solar energy used at rates 20-40% below grid prices. Fixed for 20 years with no price increases.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Complete Solar Solution
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: 'Solar Panels', desc: 'Premium tier-1 panels with 25-year warranty' },
              { icon: Battery, title: 'Battery Storage', desc: 'Store excess energy for night use' },
              { icon: Car, title: 'EV Charging', desc: 'Integrated EV charging points' },
              { icon: Shield, title: 'Maintenance', desc: 'Full maintenance & monitoring included' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-all"
              >
                <item.icon className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-900/10 to-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Financial Benefits
              </h2>
              <ul className="space-y-4">
                {[
                  'No capital expenditure required',
                  'Immediate reduction in energy costs',
                  'Protection from energy price increases',
                  'Improved cash flow from day one',
                  'Enhanced property value',
                  'Tax benefits and incentives available'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Example Savings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                  <span className="text-gray-300">Current Grid Rate</span>
                  <span className="text-red-400 font-bold">24.5p/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                  <span className="text-gray-300">Solar Rate (Fixed)</span>
                  <span className="text-emerald-400 font-bold">16.8p/kWh</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Annual Savings</span>
                    <span className="text-2xl font-bold text-emerald-400">£12,450</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Based on 150,000 kWh annual usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Environmental Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <p className="text-gray-400">Carbon Reduction</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">Net Zero</div>
              <p className="text-gray-400">Pathway Support</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">ESG</div>
              <p className="text-gray-400">Compliance Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Is Your Business Eligible?
          </h2>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ideal for businesses with:</h3>
            <ul className="space-y-3">
              {[
                'Annual electricity spend over £10,000',
                'Suitable roof space (min 500m²) or land',
                'Daytime energy usage patterns',
                'Long-term property tenure (10+ years)',
                'Good credit rating'
              ].map((criteria, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">{criteria}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
              <p className="text-emerald-300 text-sm">
                <strong>Quick Assessment:</strong> Our team can assess your eligibility in under 5 minutes with a few simple questions about your energy usage and property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-yellow-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Saving with Solar Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No upfront costs • No maintenance fees • Immediate savings
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center gap-2"
            >
              Get Free Solar Assessment <ArrowRight className="w-6 h-6" />
            </motion.button>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center gap-2"
            >
              Call: 0161 833 8661
            </motion.a>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            Join hundreds of UK businesses already saving with fully funded solar
          </p>
        </div>
      </section>
    </div>
  );
};

export default SolarEnergy;