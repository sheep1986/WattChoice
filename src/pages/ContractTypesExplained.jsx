import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText,
  Shield,
  TrendingUp,
  Lock,
  Zap,
  BarChart3,
  Calculator,
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Info,
  Building2,
  Clock,
  DollarSign,
  ChevronRight,
  Target,
  Layers
} from 'lucide-react';
import { SEOHead } from '../SEO';

const ContractTypesExplained = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState([]);

  const contractTypes = [
    {
      id: 'fixed',
      name: 'Fixed Rate Contract',
      icon: Lock,
      color: 'from-blue-500 to-indigo-600',
      bestFor: 'Budget certainty & risk-averse businesses',
      duration: '1-5 years',
      priceVolatility: 'None',
      budgetCertainty: 'Excellent',
      riskLevel: 'Low',
      description: 'Lock in your unit rates for the entire contract duration',
      keyFeatures: [
        'Unit rates fixed for contract duration',
        'Protection from market price increases',
        'Predictable monthly costs',
        'Simple billing structure',
        'No market monitoring required'
      ],
      pros: [
        'Complete budget certainty',
        'Protection from price rises',
        'Simple to understand and manage',
        'No market knowledge required',
        'Easier financial planning'
      ],
      cons: [
        'Cannot benefit from price drops',
        'Often includes risk premium',
        'Early exit penalties apply',
        'May be more expensive long-term',
        'Less flexibility'
      ],
      idealFor: [
        'Small to medium businesses',
        'Tight budget constraints',
        'Risk-averse organizations',
        'Stable consumption patterns',
        'Limited internal resources'
      ],
      realExample: {
        scenario: 'Birmingham restaurant chain',
        savings: 'Avoided 35% price increase in 2022',
        details: 'Fixed at 18p/kWh before market spike to 25p/kWh'
      },
      marketConditions: {
        whenToChoose: [
          'Market prices are low or stable',
          'Expecting future price increases',
          'Need budget certainty for planning',
          'Limited risk appetite'
        ],
        whenToAvoid: [
          'Market prices are historically high',
          'Expecting significant price drops',
          'Business has flexible budgets',
          'Can actively manage energy risk'
        ]
      }
    },
    {
      id: 'variable',
      name: 'Variable/Flexible Contract',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      bestFor: 'Market-savvy businesses seeking opportunities',
      duration: 'Month-to-month or quarterly',
      priceVolatility: 'High',
      budgetCertainty: 'Low',
      riskLevel: 'High',
      description: 'Prices fluctuate with wholesale market rates',
      keyFeatures: [
        'Prices change with market conditions',
        'Can benefit from market drops',
        'Usually no long-term commitment',
        'Requires active monitoring',
        'Monthly or quarterly price reviews'
      ],
      pros: [
        'Benefit from falling markets',
        'No long-term commitment',
        'Potential for significant savings',
        'Maximum flexibility',
        'No risk premiums'
      ],
      cons: [
        'Budget uncertainty',
        'Exposed to price spikes',
        'Requires market monitoring',
        'Complex billing',
        'Difficult financial planning'
      ],
      idealFor: [
        'Large energy users',
        'Businesses with flexible budgets',
        'Energy-intensive industries',
        'Companies with energy expertise',
        'Short-term operations'
      ],
      realExample: {
        scenario: 'Manchester data center',
        savings: 'Saved £45,000 in Q3 2023',
        details: 'Benefited from 30% market drop vs fixed rates'
      },
      marketConditions: {
        whenToChoose: [
          'Market prices are falling',
          'High market volatility expected',
          'Have risk management capability',
          'Flexible budget available'
        ],
        whenToAvoid: [
          'Rising market trend',
          'Need budget certainty',
          'Limited risk tolerance',
          'No market monitoring capability'
        ]
      }
    },
    {
      id: 'pass-through',
      name: 'Pass-Through Contract',
      icon: Layers,
      color: 'from-purple-500 to-pink-600',
      bestFor: 'Large users wanting transparency',
      duration: '1-3 years typical',
      priceVolatility: 'Medium',
      budgetCertainty: 'Medium',
      riskLevel: 'Medium',
      description: 'Wholesale energy costs passed directly with transparent margins',
      keyFeatures: [
        'Transparent cost breakdown',
        'Wholesale prices plus fixed margin',
        'All non-energy costs itemized',
        'Monthly reconciliation',
        'Professional management required'
      ],
      pros: [
        'Complete price transparency',
        'No hidden margins',
        'Benefit from wholesale drops',
        'Fair pricing model',
        'Detailed cost visibility'
      ],
      cons: [
        'Complex billing structure',
        'Requires understanding',
        'Some price volatility',
        'Higher management overhead',
        'Minimum volume requirements'
      ],
      idealFor: [
        'Large energy consumers (>£100k/year)',
        'Multi-site operations',
        'Energy-intensive businesses',
        'Companies with procurement teams',
        'Transparency-focused organizations'
      ],
      realExample: {
        scenario: 'Leeds manufacturing group',
        savings: '18% reduction vs previous fixed',
        details: 'Transparent pricing revealed hidden margins'
      },
      marketConditions: {
        whenToChoose: [
          'Large consumption volumes',
          'Want pricing transparency',
          'Have energy management capability',
          'Stable but flexible budget'
        ],
        whenToAvoid: [
          'Small energy usage',
          'Need simple billing',
          'No internal expertise',
          'Require fixed costs'
        ]
      }
    },
    {
      id: 'deemed',
      name: 'Deemed/Out of Contract',
      icon: AlertCircle,
      color: 'from-red-500 to-orange-600',
      bestFor: 'Nobody - Avoid at all costs!',
      duration: 'Rolling monthly',
      priceVolatility: 'None (but expensive)',
      budgetCertainty: 'Poor',
      riskLevel: 'Very High (cost)',
      description: 'Default expensive rates when contract expires',
      keyFeatures: [
        'Automatic rollover rates',
        'Typically 30-50% more expensive',
        'No negotiated terms',
        'Monthly rolling basis',
        'No price protection'
      ],
      pros: [
        'No commitment required',
        'Can leave anytime',
        'No termination fees'
      ],
      cons: [
        'Extremely expensive rates',
        'No price negotiation',
        'Poor terms and conditions',
        'No account management',
        'Paying maximum prices'
      ],
      idealFor: [
        'Emergency situations only',
        'Very short-term needs',
        'While negotiating new contract'
      ],
      realExample: {
        scenario: 'Bristol retailer oversight',
        savings: 'Lost £8,400 in 3 months',
        details: 'Paid 28p/kWh vs market rate of 19p/kWh'
      },
      marketConditions: {
        whenToChoose: [
          'Never intentionally',
          'Only during transition',
          'Emergency situations'
        ],
        whenToAvoid: [
          'Always avoid',
          'Plan renewals 6 months ahead',
          'Set renewal reminders'
        ]
      }
    },
    {
      id: 'green-fixed',
      name: 'Green/Renewable Fixed',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      bestFor: 'Sustainability-focused businesses',
      duration: '1-5 years',
      priceVolatility: 'None',
      budgetCertainty: 'Excellent',
      riskLevel: 'Low',
      description: 'Fixed rates with 100% renewable energy sources',
      keyFeatures: [
        'REGO-backed renewable energy',
        'Fixed pricing structure',
        'Carbon reporting included',
        'Sustainability credentials',
        'Often similar pricing to standard'
      ],
      pros: [
        'Environmental benefits',
        'CSR compliance',
        'Fixed budget certainty',
        'Marketing advantages',
        'Increasingly competitive pricing'
      ],
      cons: [
        'Slight premium possible',
        'Limited supplier options',
        'Contract restrictions',
        'Greenwashing concerns',
        'Verification complexity'
      ],
      idealFor: [
        'ESG-focused companies',
        'Public sector organizations',
        'Consumer-facing brands',
        'Net-zero committed businesses',
        'Tender requirements'
      ],
      realExample: {
        scenario: 'London hotel group',
        savings: 'Only 2% premium for green',
        details: 'Enhanced brand value worth the cost'
      },
      marketConditions: {
        whenToChoose: [
          'ESG commitments',
          'Stakeholder pressure',
          'Brand positioning',
          'Tender requirements'
        ],
        whenToAvoid: [
          'Extreme cost sensitivity',
          'No sustainability focus',
          'Very small usage'
        ]
      }
    },
    {
      id: 'basket',
      name: 'Basket/Portfolio Contract',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      bestFor: 'Multi-site businesses',
      duration: '2-5 years typical',
      priceVolatility: 'Low-Medium',
      budgetCertainty: 'Good',
      riskLevel: 'Medium',
      description: 'Aggregate multiple sites into one contract',
      keyFeatures: [
        'Combined buying power',
        'Single contract for all sites',
        'Flexible site additions/removals',
        'Consolidated billing option',
        'Volume-based discounts'
      ],
      pros: [
        'Economies of scale',
        'Simplified administration',
        'Better negotiating position',
        'Consistent pricing across sites',
        'Single renewal date'
      ],
      cons: [
        'Less site-specific optimization',
        'Complex initial setup',
        'All sites tied together',
        'Potential cross-liabilities',
        'Minimum volume requirements'
      ],
      idealFor: [
        'Multi-site operations',
        'Franchise businesses',
        'Retail chains',
        'Hotel groups',
        'Growing businesses'
      ],
      realExample: {
        scenario: 'National retail chain (45 sites)',
        savings: '22% through aggregation',
        details: 'Saved £125,000/year vs individual contracts'
      },
      marketConditions: {
        whenToChoose: [
          'Multiple sites (5+)',
          'Similar usage patterns',
          'Central procurement',
          'Expansion plans'
        ],
        whenToAvoid: [
          'Very different site needs',
          'Separate P&L centers',
          'Site closure risks'
        ]
      }
    }
  ];

  const comparisonFactors = [
    { factor: 'Price Certainty', weight: 'Critical for most SMEs' },
    { factor: 'Flexibility', weight: 'Important for growing businesses' },
    { factor: 'Risk Level', weight: 'Key consideration for all' },
    { factor: 'Management Overhead', weight: 'Resource consideration' },
    { factor: 'Potential Savings', weight: 'Opportunity vs certainty' }
  ];

  const handleComparisonToggle = (contractId) => {
    if (selectedForComparison.includes(contractId)) {
      setSelectedForComparison(selectedForComparison.filter(id => id !== contractId));
    } else if (selectedForComparison.length < 3) {
      setSelectedForComparison([...selectedForComparison, contractId]);
    }
  };

  const getRiskColor = (level) => {
    switch(level) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High (cost)': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Energy Contract Types Explained | Fixed vs Variable vs Pass-Through"
        description="Complete guide to business energy contract types. Compare fixed, variable, pass-through, and green contracts. Find the best contract structure for your business needs."
        keywords="energy contract types, fixed vs variable energy, pass through contracts, business energy contracts, green energy tariffs, deemed rates"
        canonical="https://wattutilities001.netlify.app/contract-types-explained"
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
              <FileText className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-semibold">Contract Guide</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Energy <span className="text-indigo-400">Contract Types</span> Explained
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the right contract structure for your business. From fixed rates to flexible options, understand the pros, cons, and costs of each.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Fixed</div>
                <div className="text-sm text-gray-400">Most Popular</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15-25%</div>
                <div className="text-sm text-gray-400">Flex Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">30-50%</div>
                <div className="text-sm text-gray-400">Deemed Premium</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Zap className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2-5%</div>
                <div className="text-sm text-gray-400">Green Premium</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Mode Toggle */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Explore Contract Types</h2>
              <p className="text-gray-400">Click on any contract to learn more, or enable comparison mode</p>
            </div>
            <motion.button
              onClick={() => {
                setComparisonMode(!comparisonMode);
                setSelectedForComparison([]);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                comparisonMode
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {comparisonMode ? 'Exit Comparison' : 'Compare Contracts'}
            </motion.button>
          </div>
          
          {comparisonMode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg"
            >
              <p className="text-indigo-400">
                Select up to 3 contracts to compare. Selected: {selectedForComparison.length}/3
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contract Types Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${comparisonMode ? 'cursor-pointer' : ''}`}
                onClick={() => comparisonMode ? handleComparisonToggle(contract.id) : setSelectedContract(contract)}
              >
                <div className={`bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border transition-all duration-300 h-full ${
                  comparisonMode && selectedForComparison.includes(contract.id)
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                    : 'border-slate-800 hover:border-indigo-500/50'
                }`}>
                  {/* Header Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${
                    contract.id === 'fixed' ? 'from-blue-500 to-indigo-600' :
                    contract.id === 'variable' ? 'from-amber-500 to-orange-600' :
                    contract.id === 'pass-through' ? 'from-purple-500 to-pink-600' :
                    contract.id === 'deemed' ? 'from-red-500 to-rose-600' :
                    contract.id === 'green-fixed' ? 'from-green-500 to-emerald-600' :
                    contract.id === 'basket' ? 'from-cyan-500 to-blue-600' :
                    'from-gray-500 to-gray-600'
                  }`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r bg-opacity-10 ${
                        contract.id === 'fixed' ? 'from-blue-500 to-indigo-600' :
                        contract.id === 'variable' ? 'from-amber-500 to-orange-600' :
                        contract.id === 'pass-through' ? 'from-purple-500 to-pink-600' :
                        contract.id === 'deemed' ? 'from-red-500 to-rose-600' :
                        contract.id === 'green-fixed' ? 'from-green-500 to-emerald-600' :
                        contract.id === 'basket' ? 'from-cyan-500 to-blue-600' :
                        'from-gray-500 to-gray-600'
                      }`}>
                        <contract.icon className="w-8 h-8 text-white" />
                      </div>
                      {comparisonMode && (
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedForComparison.includes(contract.id)
                            ? 'bg-indigo-500 border-indigo-500'
                            : 'border-gray-500'
                        }`}>
                          {selectedForComparison.includes(contract.id) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {contract.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {contract.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Best For:</span>
                        <span className="text-gray-300 text-right flex-1 ml-2">{contract.bestFor}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Risk Level:</span>
                        <span className={`font-semibold ${getRiskColor(contract.riskLevel)}`}>
                          {contract.riskLevel}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="text-gray-300">{contract.duration}</span>
                      </div>
                    </div>

                    {!comparisonMode && (
                      <div className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {comparisonMode && selectedForComparison.length > 1 && (
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Contract Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-900/60 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="p-4 text-left text-gray-400">Feature</th>
                    {selectedForComparison.map(id => {
                      const contract = contractTypes.find(c => c.id === id);
                      return (
                        <th key={id} className="p-4 text-center text-white">
                          {contract.name}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-800">
                    <td className="p-4 text-gray-400">Price Volatility</td>
                    {selectedForComparison.map(id => {
                      const contract = contractTypes.find(c => c.id === id);
                      return (
                        <td key={id} className="p-4 text-center text-gray-300">
                          {contract.priceVolatility}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-t border-slate-800">
                    <td className="p-4 text-gray-400">Budget Certainty</td>
                    {selectedForComparison.map(id => {
                      const contract = contractTypes.find(c => c.id === id);
                      return (
                        <td key={id} className="p-4 text-center text-gray-300">
                          {contract.budgetCertainty}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-t border-slate-800">
                    <td className="p-4 text-gray-400">Risk Level</td>
                    {selectedForComparison.map(id => {
                      const contract = contractTypes.find(c => c.id === id);
                      return (
                        <td key={id} className={`p-4 text-center font-semibold ${getRiskColor(contract.riskLevel)}`}>
                          {contract.riskLevel}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-t border-slate-800">
                    <td className="p-4 text-gray-400">Typical Duration</td>
                    {selectedForComparison.map(id => {
                      const contract = contractTypes.find(c => c.id === id);
                      return (
                        <td key={id} className="p-4 text-center text-gray-300">
                          {contract.duration}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg"
                >
                  Get Personalized Recommendation
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Contract Modal */}
      <AnimatePresence>
        {selectedContract && !comparisonMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedContract(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl max-w-5xl max-h-[90vh] overflow-y-auto border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-3 bg-gradient-to-r ${
                selectedContract.id === 'fixed' ? 'from-blue-500 to-indigo-600' :
                selectedContract.id === 'variable' ? 'from-amber-500 to-orange-600' :
                selectedContract.id === 'pass-through' ? 'from-purple-500 to-pink-600' :
                selectedContract.id === 'deemed' ? 'from-red-500 to-rose-600' :
                selectedContract.id === 'green-fixed' ? 'from-green-500 to-emerald-600' :
                selectedContract.id === 'basket' ? 'from-cyan-500 to-blue-600' :
                'from-gray-500 to-gray-600'
              }`} />
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r bg-opacity-20 ${
                        selectedContract.id === 'fixed' ? 'from-blue-500 to-indigo-600' :
                        selectedContract.id === 'variable' ? 'from-amber-500 to-orange-600' :
                        selectedContract.id === 'pass-through' ? 'from-purple-500 to-pink-600' :
                        selectedContract.id === 'deemed' ? 'from-red-500 to-rose-600' :
                        selectedContract.id === 'green-fixed' ? 'from-green-500 to-emerald-600' :
                        selectedContract.id === 'basket' ? 'from-cyan-500 to-blue-600' :
                        'from-gray-500 to-gray-600'
                      }`}>
                        <selectedContract.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          {selectedContract.name}
                        </h2>
                        <p className="text-gray-400">{selectedContract.bestFor}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedContract(null)}
                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <Clock className="w-6 h-6 text-gray-400 mb-2" />
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-lg font-semibold text-white">{selectedContract.duration}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <BarChart3 className="w-6 h-6 text-gray-400 mb-2" />
                    <div className="text-sm text-gray-400">Price Volatility</div>
                    <div className="text-lg font-semibold text-white">{selectedContract.priceVolatility}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <Shield className="w-6 h-6 text-gray-400 mb-2" />
                    <div className="text-sm text-gray-400">Risk Level</div>
                    <div className={`text-lg font-semibold ${getRiskColor(selectedContract.riskLevel)}`}>
                      {selectedContract.riskLevel}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <Calculator className="w-6 h-6 text-gray-400 mb-2" />
                    <div className="text-sm text-gray-400">Budget Certainty</div>
                    <div className="text-lg font-semibold text-white">{selectedContract.budgetCertainty}</div>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-indigo-400" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedContract.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-400" />
                      Ideal For
                    </h3>
                    <ul className="space-y-2">
                      {selectedContract.idealFor.map((ideal, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{ideal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Advantages
                    </h3>
                    <ul className="space-y-2">
                      {selectedContract.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      Disadvantages
                    </h3>
                    <ul className="space-y-2">
                      {selectedContract.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <XCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Real Example */}
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-400" />
                    Real-World Example
                  </h3>
                  <p className="text-lg text-indigo-400 font-semibold mb-2">
                    {selectedContract.realExample.scenario}
                  </p>
                  <p className="text-emerald-400 font-bold text-xl mb-2">
                    {selectedContract.realExample.savings}
                  </p>
                  <p className="text-gray-300">
                    {selectedContract.realExample.details}
                  </p>
                </div>

                {/* Market Conditions */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      When to Choose
                    </h4>
                    <ul className="space-y-2">
                      {selectedContract.marketConditions.whenToChoose.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      When to Avoid
                    </h4>
                    <ul className="space-y-2">
                      {selectedContract.marketConditions.whenToAvoid.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Need Help Choosing the Right Contract?
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Our experts will analyze your usage and recommend the optimal contract type
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg"
                    >
                      Get Expert Advice
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decision Tree Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-900/20 via-slate-900 to-purple-900/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Target className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Your Perfect Contract Type
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Answer a few questions and get a personalized recommendation
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8">
              <div className="text-left space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-2">What's your annual energy spend?</h4>
                    <p className="text-gray-400 text-sm">Under £50k → Fixed | £50k-200k → Pass-Through | Over £200k → Flexible/Basket</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-2">How important is budget certainty?</h4>
                    <p className="text-gray-400 text-sm">Critical → Fixed | Important → Pass-Through | Flexible → Variable</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-2">Do you have energy management expertise?</h4>
                    <p className="text-gray-400 text-sm">None → Fixed | Some → Pass-Through | Expert → Variable/Flexible</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg"
                >
                  Get Full Assessment
                </motion.button>
              </Link>
            </div>
          </motion.div>
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
            <DollarSign className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Energy Contract?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experts will find the perfect contract structure for your business needs
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Contract Advice
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

export default ContractTypesExplained;