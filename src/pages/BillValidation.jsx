import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileSearch,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  Calculator,
  Shield,
  Clock,
  ArrowRight,
  DollarSign,
  BarChart3
} from 'lucide-react';
import { SEOHead } from '../SEO';

const BillValidation = () => {
  const commonErrors = [
    { error: 'Incorrect meter readings', frequency: '45%', impact: '£500-2000/year' },
    { error: 'Wrong tariff applied', frequency: '32%', impact: '£1000-5000/year' },
    { error: 'VAT rate errors', frequency: '28%', impact: '£200-1500/year' },
    { error: 'Duplicate charges', frequency: '18%', impact: '£300-3000/year' },
    { error: 'Climate levy mistakes', frequency: '15%', impact: '£400-2000/year' },
    { error: 'Standing charge errors', frequency: '12%', impact: '£100-800/year' }
  ];

  const validationProcess = [
    { step: 'Bill Collection', desc: 'Gather 12-24 months of bills', time: '1 day' },
    { step: 'Data Analysis', desc: 'Line-by-line examination', time: '2-3 days' },
    { step: 'Error Identification', desc: 'Flag all discrepancies', time: '1 day' },
    { step: 'Recovery Action', desc: 'Claim refunds from suppliers', time: '2-4 weeks' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Bill Validation Services | Energy Bill Auditing & Error Recovery"
        description="Professional energy bill validation services. We find and recover billing errors, saving businesses an average of £2,400 per year. Free audit available."
        keywords="bill validation, energy bill audit, billing errors, overcharge recovery, utility bill checking"
        canonical="https://wattutilities001.netlify.app/bill-validation"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6"
            >
              <FileSearch className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">Bill Validation</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Stop <span className="text-red-400">Overpaying</span> on Energy Bills
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              80% of business energy bills contain errors. Our validation service finds and recovers 
              overcharges, saving you thousands annually.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-sm text-gray-400">Bills with Errors</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">£2,400</div>
                <div className="text-sm text-gray-400">Avg Recovery</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6 Years</div>
                <div className="text-sm text-gray-400">Back-claim Period</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Common Billing Errors */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common Billing Errors We Find
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonErrors.map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                  <span className="text-2xl font-bold text-red-400">{error.frequency}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{error.error}</h3>
                <p className="text-emerald-400 font-semibold">Typical impact: {error.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Process */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-900/20 via-slate-900 to-orange-900/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Validation Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {validationProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.step}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                <p className="text-red-400 text-sm">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Comprehensive 27-Point Check
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
            >
              <Calculator className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Rates & Charges</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Unit rate accuracy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Standing charges
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Time-of-use rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Contract compliance
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
            >
              <BarChart3 className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Consumption Data</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Meter reading accuracy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Estimated vs actual
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Peak/off-peak split
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Maximum demand
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
            >
              <FileSearch className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Taxes & Levies</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  VAT rate validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  CCL exemptions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Green levies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  FiT charges
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Recent Recovery Success
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">The Problem</h4>
                <p className="text-gray-300">
                  Leeds manufacturing company had been overcharged on VAT for 4 years. 
                  They were paying 20% instead of the reduced 5% rate they qualified for.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">The Solution</h4>
                <p className="text-gray-300">
                  Our audit identified the error and we successfully claimed £42,000 
                  in refunds plus secured correct rating going forward.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400">£42,000</div>
                <div className="text-sm text-gray-400">Recovered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">£8,400</div>
                <div className="text-sm text-gray-400">Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">3 weeks</div>
                <div className="text-sm text-gray-400">To Resolution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl border border-red-500/30 p-12"
          >
            <FileSearch className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Free Bill Validation Audit
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No upfront costs. We only charge a percentage of what we recover for you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">No win, no fee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">6 years back-claim</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Expert recovery team</span>
              </div>
            </div>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
              >
                Start Free Audit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-red-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Stop Losing Money to Billing Errors
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              80% of businesses are overpaying. Find out if you're one of them.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Free Validation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg"
              >
                Call: 0161 833 8661
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BillValidation;