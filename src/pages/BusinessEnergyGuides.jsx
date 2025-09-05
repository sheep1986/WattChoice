import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Zap, 
  Building2,
  ArrowRight,
  CheckCircle,
  Info,
  FileText,
  Calculator,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Download,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../SEO';

const BusinessEnergyGuides = () => {
  const [activeGuide, setActiveGuide] = useState(null);

  const guides = [
    {
      id: 'understanding-bills',
      title: 'Understanding Your Business Energy Bills',
      category: 'Fundamentals',
      readTime: '8 min read',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600',
      description: 'Decode complex energy bills and identify savings opportunities',
      content: {
        sections: [
          {
            title: 'Key Components of Your Bill',
            points: [
              'Unit rates and standing charges explained',
              'Understanding peak and off-peak pricing',
              'Climate Change Levy (CCL) breakdown',
              'VAT rates for different business types',
              'Distribution and transmission costs'
            ]
          },
          {
            title: 'Hidden Charges to Watch',
            points: [
              'Capacity charges for large users',
              'Reactive power charges',
              'Data collection fees',
              'Meter operation charges',
              'Settlement costs'
            ]
          },
          {
            title: 'How to Spot Overcharging',
            points: [
              'Comparing unit rates to market averages',
              'Identifying billing errors',
              'Checking meter readings accuracy',
              'Validating contract rates',
              'Reviewing historical consumption patterns'
            ]
          }
        ],
        savings: 'Average savings: £2,400/year from bill validation',
        actionItems: [
          'Request 12 months of billing history',
          'Compare rates across suppliers',
          'Schedule regular bill audits',
          'Monitor consumption patterns'
        ]
      }
    },
    {
      id: 'market-timing',
      title: 'When to Switch: Market Timing Guide',
      category: 'Strategy',
      readTime: '10 min read',
      icon: Clock,
      color: 'from-emerald-500 to-teal-600',
      description: 'Master the art of timing your energy contract renewals',
      content: {
        sections: [
          {
            title: 'Market Indicators to Monitor',
            points: [
              'Wholesale energy price trends',
              'Seasonal price variations',
              'Geopolitical influences on pricing',
              'Currency exchange impacts',
              'Supply and demand dynamics'
            ]
          },
          {
            title: 'Optimal Renewal Windows',
            points: [
              'Start comparing 6 months before expiry',
              'Secure contracts 3-4 months in advance',
              'Avoid last-minute panic switching',
              'Consider multi-year deals in low markets',
              'Factor in business growth projections'
            ]
          },
          {
            title: 'Risk Management Strategies',
            points: [
              'Fixed vs flexible contract timing',
              'Basket contracts for multiple sites',
              'Blended rate strategies',
              'Forward purchasing options',
              'Price cap mechanisms'
            ]
          }
        ],
        savings: 'Strategic timing can save 15-25% on energy costs',
        actionItems: [
          'Set renewal reminders 6 months early',
          'Monitor wholesale market trends',
          'Develop a procurement strategy',
          'Consider professional market analysis'
        ]
      }
    },
    {
      id: 'consumption-optimization',
      title: 'Optimizing Energy Consumption Patterns',
      category: 'Efficiency',
      readTime: '12 min read',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      description: 'Reduce consumption and shift usage to cheaper periods',
      content: {
        sections: [
          {
            title: 'Load Management Techniques',
            points: [
              'Peak shaving strategies',
              'Load shifting to off-peak hours',
              'Demand response programs',
              'Power factor correction',
              'Equipment scheduling optimization'
            ]
          },
          {
            title: 'Technology Solutions',
            points: [
              'Smart meter benefits and insights',
              'Energy management systems (EMS)',
              'Automated control systems',
              'Real-time monitoring platforms',
              'Predictive analytics tools'
            ]
          },
          {
            title: 'Quick Wins for Any Business',
            points: [
              'LED lighting upgrades (40% savings)',
              'HVAC optimization (20% savings)',
              'Insulation improvements (15% savings)',
              'Variable speed drives (30% on motors)',
              'Behavioral change programs (5-10% savings)'
            ]
          }
        ],
        savings: 'Typical reduction: 20-30% in overall consumption',
        actionItems: [
          'Conduct energy audit',
          'Identify peak usage periods',
          'Implement monitoring systems',
          'Train staff on energy efficiency'
        ]
      }
    },
    {
      id: 'supplier-negotiation',
      title: 'Negotiating with Energy Suppliers',
      category: 'Procurement',
      readTime: '7 min read',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      description: 'Leverage tactics for securing the best energy deals',
      content: {
        sections: [
          {
            title: 'Preparation is Key',
            points: [
              'Gather 3 years of consumption data',
              'Document current contract terms',
              'Research market rates',
              'Identify your negotiation leverage',
              'Set clear cost reduction targets'
            ]
          },
          {
            title: 'Negotiation Strategies',
            points: [
              'Request quotes from multiple suppliers',
              'Use competitive tension effectively',
              'Negotiate beyond just unit rates',
              'Push for transparent pricing',
              'Secure favorable payment terms'
            ]
          },
          {
            title: 'Contract Terms to Negotiate',
            points: [
              'Removal of automatic rollover clauses',
              'Flexible volume tolerances',
              'Transparent pass-through costs',
              'Shorter notice periods',
              'Green energy options at no premium'
            ]
          }
        ],
        savings: 'Expert negotiation saves 10-35% on contracts',
        actionItems: [
          'Benchmark current rates',
          'Prepare negotiation checklist',
          'Set walk-away thresholds',
          'Consider broker assistance'
        ]
      }
    },
    {
      id: 'renewable-transition',
      title: 'Transitioning to Renewable Energy',
      category: 'Sustainability',
      readTime: '9 min read',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      description: 'Navigate the shift to green energy without breaking the budget',
      content: {
        sections: [
          {
            title: 'Renewable Energy Options',
            points: [
              'REGO-backed green tariffs',
              'On-site solar installations',
              'Power Purchase Agreements (PPAs)',
              'Wind energy contracts',
              'Biomass and alternative fuels'
            ]
          },
          {
            title: 'Financial Considerations',
            points: [
              'Green premium vs long-term savings',
              'Government incentives and grants',
              'Tax benefits and allowances',
              'ROI on renewable installations',
              'Financing options available'
            ]
          },
          {
            title: 'Implementation Roadmap',
            points: [
              'Energy audit and baseline setting',
              'Feasibility studies for on-site generation',
              'Phased transition approach',
              'Monitoring and reporting setup',
              'Stakeholder communication strategy'
            ]
          }
        ],
        savings: 'Long-term savings: 15-40% with renewable solutions',
        actionItems: [
          'Calculate carbon footprint',
          'Explore funding options',
          'Request renewable quotes',
          'Plan transition timeline'
        ]
      }
    },
    {
      id: 'multi-site-strategy',
      title: 'Multi-Site Energy Management',
      category: 'Enterprise',
      readTime: '11 min read',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      description: 'Strategies for managing energy across multiple locations',
      content: {
        sections: [
          {
            title: 'Centralized vs Decentralized',
            points: [
              'Benefits of portfolio management',
              'Aggregated buying power advantages',
              'Standardization opportunities',
              'Risk pooling strategies',
              'Centralized billing benefits'
            ]
          },
          {
            title: 'Contract Structures',
            points: [
              'Basket contracts explained',
              'Matrix pricing models',
              'Flexible portfolio agreements',
              'Site addition/removal clauses',
              'Volume tolerance management'
            ]
          },
          {
            title: 'Performance Monitoring',
            points: [
              'Cross-site benchmarking',
              'KPI dashboard creation',
              'Anomaly detection systems',
              'Best practice sharing',
              'Regular performance reviews'
            ]
          }
        ],
        savings: 'Portfolio approach saves 20-35% vs individual contracts',
        actionItems: [
          'Consolidate site information',
          'Align contract end dates',
          'Implement central monitoring',
          'Develop portfolio strategy'
        ]
      }
    }
  ];

  const featuredStats = [
    { value: '£150M', label: 'Total Saved for Clients', icon: TrendingUp },
    { value: '900k+', label: 'Businesses Helped', icon: Building2 },
    { value: '35%', label: 'Average Savings', icon: Calculator },
    { value: '24/7', label: 'Market Monitoring', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Business Energy Guides | Expert Advice & Cost-Saving Strategies"
        description="Comprehensive business energy guides covering bill analysis, market timing, consumption optimization, and renewable transitions. Save up to 35% on energy costs with expert insights."
        keywords="business energy guides, energy cost reduction, utility bill analysis, energy procurement strategy, renewable energy transition, multi-site energy management"
        canonical="https://wattutilities001.netlify.app/business-energy-guides"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
        
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
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
            >
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Expert Energy Guides</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master Your <span className="text-emerald-400">Business Energy</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides to help you understand, optimize, and reduce your business energy costs by up to 35%
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {featuredStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
                >
                  <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div 
                  className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer h-full"
                  onClick={() => setActiveGuide(guide)}
                >
                  {/* Category Badge */}
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-600" />
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-600/20">
                        <guide.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs text-gray-400 bg-slate-800 px-3 py-1 rounded-full">
                        {guide.readTime}
                      </span>
                    </div>

                    <span className="text-sm text-emerald-400 font-semibold">
                      {guide.category}
                    </span>
                    
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-emerald-400 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {guide.description}
                    </p>

                    <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      <span className="font-semibold">Read Guide</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Modal */}
      <AnimatePresence>
        {activeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveGuide(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-green-600" />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-sm text-emerald-400 font-semibold">
                      {activeGuide.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2">
                      {activeGuide.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveGuide(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Guide Content */}
                <div className="space-y-8">
                  {activeGuide.content.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-3 text-gray-300">
                            <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Savings Highlight */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-emerald-400" />
                      <h4 className="text-lg font-semibold text-white">Potential Savings</h4>
                    </div>
                    <p className="text-emerald-400 font-semibold text-xl">
                      {activeGuide.content.savings}
                    </p>
                  </div>

                  {/* Action Items */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Next Steps</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeGuide.content.actionItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-6 text-center">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      Ready to Reduce Your Energy Costs?
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Our experts can help you implement these strategies
                    </p>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg"
                      >
                        Get Expert Help
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-cyan-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Download className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Free Energy Savings Checklist
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our comprehensive 50-point checklist to identify immediate savings opportunities
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Quick wins for immediate savings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Contract negotiation checklist
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Energy efficiency audit guide
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold mb-2">You'll Learn:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Hidden charges to eliminate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Peak usage optimization tips
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Renewable transition planning
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  Download Free Checklist
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Help CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Personalized Energy Advice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our energy experts are ready to analyze your specific situation and create a customized savings plan
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Free Consultation
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

export default BusinessEnergyGuides;