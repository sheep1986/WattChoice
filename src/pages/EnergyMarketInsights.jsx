import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp,
  BarChart3,
  Globe2,
  AlertCircle,
  Calendar,
  FileText,
  ArrowRight,
  CheckCircle,
  Info,
  Target
} from 'lucide-react';
import { SEOHead } from '../SEO';

const EnergyMarketInsights = () => {
  const marketFactors = [
    { factor: 'Global Gas Prices', impact: 'High', trend: 'Volatile', description: 'International supply disruptions affecting UK prices' },
    { factor: 'Renewable Generation', impact: 'Medium', trend: 'Increasing', description: 'Wind and solar reducing dependency on fossil fuels' },
    { factor: 'Network Charges', impact: 'Medium', trend: 'Rising', description: 'Infrastructure investment costs passed to consumers' },
    { factor: 'Government Policy', impact: 'High', trend: 'Evolving', description: 'Net-zero targets driving market transformation' }
  ];

  const predictions = [
    { period: 'Q1 2025', outlook: 'Stable', detail: 'Winter demand balanced by increased renewable capacity' },
    { period: 'Q2 2025', outlook: 'Decreasing', detail: 'Seasonal drop with potential 10-15% reduction' },
    { period: 'Q3 2025', outlook: 'Volatile', detail: 'Market uncertainty around policy changes' },
    { period: 'Q4 2025', outlook: 'Rising', detail: 'Winter preparation likely to drive prices up 5-10%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Energy Market Insights | UK Business Energy Trends & Analysis"
        description="Stay informed with latest UK energy market insights, price trends, and forecasts. Make data-driven decisions for your business energy strategy."
        keywords="energy market insights, UK energy prices, business energy trends, market analysis, energy forecasts"
        canonical="https://wattutilities001.netlify.app/energy-market-insights"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        
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
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Market Intelligence</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Energy Market <span className="text-cyan-400">Insights</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-time market analysis and forecasts to help you make informed energy decisions. 
              Stay ahead of price movements and market trends.
            </p>

            {/* Current Market Snapshot */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <BarChart3 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">18.5p</div>
                <div className="text-sm text-gray-400">Avg kWh Price</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">-12%</div>
                <div className="text-sm text-gray-400">vs Last Year</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Globe2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">45%</div>
                <div className="text-sm text-gray-400">Renewable Mix</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <AlertCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">High</div>
                <div className="text-sm text-gray-400">Volatility</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Market Factors */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Market Drivers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {marketFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{factor.factor}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      factor.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {factor.impact} Impact
                    </span>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-cyan-500/20 text-cyan-400">
                      {factor.trend}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Predictions */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-blue-900/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Market Outlook 2025
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {predictions.map((pred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 text-center"
              >
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{pred.period}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  pred.outlook === 'Stable' ? 'bg-green-500/20 text-green-400' :
                  pred.outlook === 'Decreasing' ? 'bg-emerald-500/20 text-emerald-400' :
                  pred.outlook === 'Volatile' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {pred.outlook}
                </div>
                <p className="text-sm text-gray-400">{pred.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Recommendations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Strategic Recommendations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30 p-6"
            >
              <Target className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Short Term</h3>
              <p className="text-gray-300 mb-4">Consider flexible contracts to benefit from expected Q2 price drops</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Monitor daily pricing
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Prepare for volatility
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/30 p-6"
            >
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Medium Term</h3>
              <p className="text-gray-300 mb-4">Lock in rates before anticipated Q4 increases</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  2-3 year fixed deals
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Green energy options
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg border border-purple-500/30 p-6"
            >
              <Info className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Long Term</h3>
              <p className="text-gray-300 mb-4">Invest in energy independence and efficiency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  On-site generation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Efficiency upgrades
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Alert Signup */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertCircle className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Market Alerts
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Receive timely updates when market conditions favor switching
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
                <div>
                  <h4 className="text-white font-semibold mb-3">You'll Receive:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      Weekly market summaries
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      Price movement alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      Switching opportunity notifications
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Market Coverage:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      Wholesale price tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      Policy change impacts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      Seasonal forecasts
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg"
                >
                  Sign Up for Alerts
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-cyan-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Make Data-Driven Energy Decisions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get personalized market analysis and switching recommendations
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Market Analysis
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

export default EnergyMarketInsights;