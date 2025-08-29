import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  BarChart3, 
  Globe2, 
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Layers,
  Users,
  Calculator,
  PiggyBank
} from 'lucide-react';
import { SEOHead } from '../SEO';

const MultiSiteEnergy = () => {
  const benefits = [
    {
      icon: PiggyBank,
      title: 'Aggregated Buying Power',
      description: 'Combine all sites for better negotiating position',
      savings: '20-35% vs individual contracts'
    },
    {
      icon: Clock,
      title: 'Single Renewal Date',
      description: 'Align all contracts to one manageable date',
      savings: 'Save 40+ hours annually'
    },
    {
      icon: BarChart3,
      title: 'Centralized Reporting',
      description: 'One dashboard for all site consumption',
      savings: 'Real-time cost visibility'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Portfolio approach reduces exposure',
      savings: 'Consistent pricing across sites'
    }
  ];

  const solutions = [
    {
      title: 'Basket Contracts',
      sites: '5-50 sites',
      description: 'Perfect for chains and franchises',
      features: ['Single contract', 'Volume discounts', 'Flexible additions']
    },
    {
      title: 'Portfolio Management',
      sites: '50+ sites',
      description: 'Enterprise-level energy strategy',
      features: ['Dedicated account team', 'Bespoke pricing', 'Full service']
    },
    {
      title: 'Hybrid Approach',
      sites: 'Mixed requirements',
      description: 'Combine strategies for optimal results',
      features: ['Site-specific optimization', 'Central oversight', 'Maximum flexibility']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Multi-Site Energy Management | Portfolio Energy Solutions"
        description="Manage energy across multiple business sites efficiently. Save 20-35% with aggregated buying power, centralized billing, and portfolio management strategies."
        keywords="multi site energy management, portfolio energy contracts, basket energy deals, business energy multiple locations"
        canonical="https://wattutilities001.netlify.app/multi-site-energy"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
        
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
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Building2 className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-semibold">Multi-Site Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              One Strategy. <span className="text-indigo-400">Multiple Sites.</span> Maximum Savings.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Manage energy across all your locations with portfolio contracts. 
              Save 20-35% through aggregated buying power and centralized management.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Layers className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">20-35%</div>
                <div className="text-sm text-gray-400">Avg Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5-500+</div>
                <div className="text-sm text-gray-400">Sites Managed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-sm text-gray-400">Renewal Date</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">45k+</div>
                <div className="text-sm text-gray-400">Sites Under Management</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Multi-Site Management Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 p-6"
              >
                <benefit.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 mb-3">{benefit.description}</p>
                <p className="text-emerald-400 font-semibold">{benefit.savings}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Tailored Multi-Site Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 p-8"
              >
                <div className="text-indigo-400 font-semibold mb-2">{solution.sites}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Real Success Story</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-3">The Challenge</h4>
                <p className="text-gray-300">
                  National retail chain with 85 stores across the UK, each with individual 
                  energy contracts expiring at different times, resulting in administrative 
                  nightmare and missed savings opportunities.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">The Solution</h4>
                <p className="text-gray-300">
                  Consolidated all sites into a single basket contract with aligned renewal 
                  dates. Negotiated volume discounts and implemented centralized billing.
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400">£185k</div>
                <div className="text-sm text-gray-400">Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">28%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">60hrs</div>
                <div className="text-sm text-gray-400">Admin Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-900/20 via-slate-900 to-purple-900/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Implementation Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Portfolio Analysis', desc: 'Audit all sites and contracts', time: '1-2 weeks' },
              { step: '02', title: 'Strategy Development', desc: 'Design optimal structure', time: '1 week' },
              { step: '03', title: 'Market Negotiation', desc: 'Secure best portfolio rates', time: '2-3 weeks' },
              { step: '04', title: 'Migration & Management', desc: 'Seamless transition', time: '4-8 weeks' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                <p className="text-indigo-400 text-sm">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-indigo-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe2 className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Consolidate Your Energy Management
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us analyze your portfolio and show you the savings potential
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Portfolio Analysis
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

export default MultiSiteEnergy;