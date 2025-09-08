import React from 'react';
import { motion } from 'framer-motion';
import ContractTypeCard, { FixedRateCard, VariableRateCard, GreenEnergyCard } from '../components/ContractTypeCard';
import { ArrowRight, Shield, TrendingUp, Leaf } from 'lucide-react';

export default function ContractTypes() {
  const contractOptions = [
    { type: 'fixed', label: 'Fixed Rate', icon: Shield },
    { type: 'variable', label: 'Variable Rate', icon: TrendingUp },
    { type: 'green', label: 'Green Energy', icon: Leaf }
  ];

  const [selectedContract, setSelectedContract] = React.useState('fixed');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Energy Contract Type
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the contract structure that best fits your business needs and budget
          </p>
        </motion.div>

        {/* Contract Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contractOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.type}
                onClick={() => setSelectedContract(option.type)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedContract === option.type
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Contract Card Display */}
        <motion.div
          key={selectedContract}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <ContractTypeCard type={selectedContract} />
        </motion.div>

        {/* All Contract Types Grid */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compare All Contract Options
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Fixed Rate Mini Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-green-100"
            >
              <div className="flex items-center justify-between mb-6">
                <Shield className="h-12 w-12 text-green-600" />
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fixed Rate</h3>
              <p className="text-gray-600 mb-6">
                Lock in your rates for complete budget certainty and protection from market volatility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-700">✓ 1-5 year terms</li>
                <li className="text-sm text-gray-700">✓ No price increases</li>
                <li className="text-sm text-gray-700">✓ Easy budgeting</li>
              </ul>
              <button 
                onClick={() => setSelectedContract('fixed')}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Variable Rate Mini Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-center justify-between mb-6">
                <TrendingUp className="h-12 w-12 text-blue-600" />
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Flexible
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Variable Rate</h3>
              <p className="text-gray-600 mb-6">
                Flexible pricing that moves with the market, ideal for businesses seeking opportunity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-700">✓ Market-linked rates</li>
                <li className="text-sm text-gray-700">✓ No long commitment</li>
                <li className="text-sm text-gray-700">✓ Benefit from price drops</li>
              </ul>
              <button 
                onClick={() => setSelectedContract('variable')}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Green Energy Mini Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100"
            >
              <div className="flex items-center justify-between mb-6">
                <Leaf className="h-12 w-12 text-emerald-600" />
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Sustainable
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Green Energy</h3>
              <p className="text-gray-600 mb-6">
                100% renewable electricity to meet your sustainability goals and reduce carbon footprint.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-700">✓ REGO certified</li>
                <li className="text-sm text-gray-700">✓ Zero carbon</li>
                <li className="text-sm text-gray-700">✓ CSR benefits</li>
              </ul>
              <button 
                onClick={() => setSelectedContract('green')}
                className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Compare Energy Contracts?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Get instant quotes tailored to your business needs
          </p>
          <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3">
              Start Comparison <ArrowRight className="h-5 w-5" />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}