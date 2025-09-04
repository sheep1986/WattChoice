import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle, Phone, TrendingUp, Shield, Clock, Users, Building2, PoundSterling, Award, BarChart3 } from 'lucide-react';

const SimpleElectricity = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-12 h-12 text-green-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Business Electricity
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Save up to 45% on your business electricity bills. We compare rates from 30+ trusted UK suppliers 
            to secure the best deals for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Get Free Quote Now <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 border border-gray-200"
            >
              <Phone className="w-5 h-5" /> 0161 833 8661
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-100/50 backdrop-blur border border-gray-200 rounded-lg p-4 text-center"
            >
              <div className="text-3xl font-bold text-green-600">900k+</div>
              <div className="text-sm text-gray-600">Businesses Switched</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100/50 backdrop-blur border border-gray-200 rounded-lg p-4 text-center"
            >
              <div className="text-3xl font-bold text-green-600">£150M</div>
              <div className="text-sm text-gray-600">Total Saved</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-100/50 backdrop-blur border border-gray-200 rounded-lg p-4 text-center"
            >
              <div className="text-3xl font-bold text-green-600">30+</div>
              <div className="text-sm text-gray-600">UK Suppliers</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-100/50 backdrop-blur border border-gray-200 rounded-lg p-4 text-center"
            >
              <div className="text-3xl font-bold text-green-600">5 min</div>
              <div className="text-sm text-gray-600">Quick Quote</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="relative py-0">
        <div className="h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2340&auto=format&fit=crop"
            alt="Electric power lines at sunset"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-white" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why 900,000+ Businesses Choose Watt Choice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200"
            >
              <PoundSterling className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save Up to 45%</h3>
              <p className="text-gray-600">
                Our expert negotiators secure wholesale rates unavailable to the public. 
                Average savings of £8,500 per year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200"
            >
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Independent</h3>
              <p className="text-gray-600">
                We work for you, not suppliers. Completely impartial advice with 
                transparent commission disclosure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200"
            >
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Service</h3>
              <p className="text-gray-600">
                No fees, no charges, ever. We're paid by suppliers only when 
                you successfully switch and save.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Switch in 4 Simple Steps
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Quick Call', desc: '5-minute consultation to understand your needs', icon: Phone },
              { step: 2, title: 'Market Comparison', desc: 'We check 30+ suppliers for best rates', icon: BarChart3 },
              { step: 3, title: 'Negotiation', desc: 'Expert negotiation secures lowest prices', icon: TrendingUp },
              { step: 4, title: 'Seamless Switch', desc: 'We handle all paperwork, zero downtime', icon: CheckCircle }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-100/50 backdrop-blur border border-gray-200 rounded-lg p-6 text-center hover:border-emerald-500/50 transition-all">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-4">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-emerald-500/30 w-6 h-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Flexible Contract Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fixed Rate Contracts</h3>
              <p className="text-gray-600 mb-4">
                Lock in your rates for budget certainty. Ideal for stable consumption patterns.
              </p>
              <ul className="space-y-2">
                {['Price protection from market volatility', 'Easy budgeting and forecasting', '1-5 year terms available'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Contracts</h3>
              <p className="text-gray-600 mb-4">
                Buy energy in blocks to benefit from market movements. Perfect for large users.
              </p>
              <ul className="space-y-2">
                {['Take advantage of price dips', 'Risk management strategies', 'Volume flexibility'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg"
            >
              Compare Contract Options <ArrowRight className="inline ml-2" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            We Work With All Major Suppliers
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Direct relationships with 30+ suppliers means better rates for you
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {['British Gas', 'E.ON', 'EDF Energy', 'Scottish Power', 'SSE', 
              'Opus Energy', 'Total Energies', 'Crown Gas', 'Drax', 'Haven Power',
              'Npower', 'Yu Energy', 'Gazprom', 'SEFE', 'Pozitive'].map((supplier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-100/50 backdrop-blur border border-gray-200 rounded-lg p-4 text-center hover:border-emerald-500/50 transition-all"
              >
                <Building2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">{supplier}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900/20 to-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map((star) => (
                <Award key={star} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-900 mb-6 italic">
              "Watt Choice saved us £47,000 per year on electricity. Their team handled 
              everything professionally and we experienced zero downtime during the switch."
            </blockquote>
            <cite className="text-green-600">
              - John Davies, Operations Director, Manchester Manufacturing Ltd
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Cut Your Electricity Costs?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join 900,000+ businesses already saving with Watt Choice
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center gap-2"
            >
              Get Your Free Quote <ArrowRight className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center gap-2"
            >
              <Phone className="w-6 h-6" /> Call Now: 0161 833 8661
            </motion.a>
          </div>
          
          <p className="mt-6 text-sm text-gray-600">
            No obligation • Free service • 5-minute quote
          </p>
        </div>
      </section>

    </div>
  );
};

export default SimpleElectricity;