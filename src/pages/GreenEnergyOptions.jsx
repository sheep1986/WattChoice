import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf,
  Sun,
  Wind,
  Zap,
  Battery,
  TreePine,
  Globe2,
  TrendingDown,
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Shield,
  DollarSign,
  Calculator,
  ChevronRight,
  Info,
  Building2
} from 'lucide-react';
import { SEOHead } from '../SEO';

const GreenEnergyOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [carbonCalculator, setCarbonCalculator] = useState({
    annualSpend: 50000,
    currentSource: 'mixed'
  });

  const greenOptions = [
    {
      id: 'rego',
      name: 'REGO-Backed Green Tariffs',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      premium: '0-5%',
      carbonReduction: '100%',
      availability: 'Immediate',
      description: 'Renewable Energy Guarantee of Origin certified electricity',
      features: [
        '100% renewable energy sources',
        'Full carbon reporting included',
        'REGO certificates provided',
        'No infrastructure changes needed',
        'Available from most suppliers'
      ],
      benefits: [
        'Immediate carbon neutrality for electricity',
        'Enhance ESG credentials',
        'Meet tender requirements',
        'Marketing and PR value',
        'Simple implementation'
      ],
      considerations: [
        'Small price premium (2-5% typical)',
        'Doesn\'t reduce actual consumption',
        'Quality varies by supplier',
        'Greenwashing concerns'
      ],
      suitableFor: [
        'All business sizes',
        'Quick sustainability wins',
        'CSR reporting requirements',
        'Public sector tenders'
      ],
      realExample: {
        company: 'Manchester Hotel Group',
        result: 'Carbon neutral electricity at 3% premium',
        saving: 'Won £2M council contract due to green credentials'
      }
    },
    {
      id: 'solar',
      name: 'On-Site Solar Generation',
      icon: Sun,
      color: 'from-yellow-500 to-orange-600',
      premium: '-20 to -40%',
      carbonReduction: '30-60%',
      availability: '3-6 months',
      description: 'Install solar panels on your premises for self-generation',
      features: [
        'Generate your own electricity',
        'Reduce grid dependence',
        'Export excess to grid',
        'Battery storage options',
        '25+ year panel lifespan'
      ],
      benefits: [
        'Long-term cost savings (20-40%)',
        'Protection from price rises',
        'Increased property value',
        'Visible sustainability commitment',
        'Government incentives available'
      ],
      considerations: [
        'High upfront cost (£20k-500k+)',
        'Roof suitability required',
        'Planning permission may be needed',
        'Maintenance requirements',
        'Weather dependent generation'
      ],
      suitableFor: [
        'Property owners',
        'Long-term occupancy',
        'High daytime usage',
        'Large roof spaces'
      ],
      realExample: {
        company: 'Birmingham Distribution Center',
        result: '450kW system saving £65,000/year',
        saving: 'ROI achieved in 4.5 years'
      }
    },
    {
      id: 'ppa',
      name: 'Power Purchase Agreements',
      icon: Wind,
      color: 'from-blue-500 to-cyan-600',
      premium: '-10 to -25%',
      carbonReduction: '100%',
      availability: '6-12 months',
      description: 'Direct contracts with renewable generators',
      features: [
        'Buy directly from wind/solar farms',
        'Long-term price certainty',
        'Additionality claims',
        'Sleeved or virtual options',
        'Typically 10-15 year terms'
      ],
      benefits: [
        'Below market rates long-term',
        'Genuine renewable sourcing',
        'Support new renewable projects',
        'Price stability',
        'Strong ESG credentials'
      ],
      considerations: [
        'Long commitment required',
        'Complex contracts',
        'Credit requirements',
        'Minimum volume needed (>5GWh/year)',
        'Limited flexibility'
      ],
      suitableFor: [
        'Large energy users',
        'Stable businesses',
        'Long-term planners',
        'ESG-focused companies'
      ],
      realExample: {
        company: 'National Retail Chain',
        result: '15% below market for 10 years',
        saving: '£2.5M saved over contract term'
      }
    },
    {
      id: 'funded-solar',
      name: 'Fully-Funded Solar',
      icon: Battery,
      color: 'from-purple-500 to-pink-600',
      premium: '-15 to -30%',
      carbonReduction: '30-60%',
      availability: '2-4 months',
      description: 'Zero upfront cost solar with immediate savings',
      features: [
        'No capital investment',
        'Installation fully funded',
        'Maintenance included',
        'Immediate savings',
        'Flexible agreements'
      ],
      benefits: [
        'No upfront costs',
        'Day-one savings',
        'No technical risk',
        'Professional management',
        'Option to purchase later'
      ],
      considerations: [
        'Long-term agreements (10-20 years)',
        'Roof lease required',
        'Less savings than owned systems',
        'Credit checks required'
      ],
      suitableFor: [
        'Cash-conscious businesses',
        'Leased properties (with permission)',
        'Risk-averse organizations',
        'Quick implementation needs'
      ],
      realExample: {
        company: 'Leeds Manufacturing',
        result: 'Zero investment, 20% savings immediately',
        saving: '£35,000/year with no capital'
      }
    },
    {
      id: 'carbon-offset',
      name: 'Carbon Offsetting Programs',
      icon: TreePine,
      color: 'from-teal-500 to-green-600',
      premium: '2-8%',
      carbonReduction: '100% (offset)',
      availability: 'Immediate',
      description: 'Compensate emissions through verified offset projects',
      features: [
        'Verified carbon credits',
        'Global project options',
        'Flexible volumes',
        'Immediate implementation',
        'Full reporting provided'
      ],
      benefits: [
        'Achieve carbon neutrality quickly',
        'Support global projects',
        'Flexible and scalable',
        'Low cost option',
        'Good interim solution'
      ],
      considerations: [
        'Doesn\'t reduce actual emissions',
        'Quality varies significantly',
        'Additionality questions',
        'Not a long-term solution'
      ],
      suitableFor: [
        'Quick carbon neutrality',
        'Small businesses',
        'Interim measures',
        'Event offsetting'
      ],
      realExample: {
        company: 'London Consultancy',
        result: 'Carbon neutral status for £3,000/year',
        saving: 'Won B-Corp certification'
      }
    },
    {
      id: 'biomass',
      name: 'Biomass & Alternative Fuels',
      icon: Globe2,
      color: 'from-orange-500 to-red-600',
      premium: 'Varies',
      carbonReduction: '60-90%',
      availability: '6-12 months',
      description: 'Replace fossil fuels with sustainable alternatives',
      features: [
        'Wood pellet heating systems',
        'Biogas options',
        'Waste-to-energy solutions',
        'RHI payments available',
        'Combined heat and power'
      ],
      benefits: [
        'Significant carbon reduction',
        'Government incentives',
        'Waste reduction potential',
        'Energy independence',
        'Local fuel sources'
      ],
      considerations: [
        'High capital costs',
        'Space requirements',
        'Fuel storage needed',
        'Supply chain considerations',
        'Air quality regulations'
      ],
      suitableFor: [
        'Rural locations',
        'High heat demand',
        'Waste-producing businesses',
        'Agricultural sector'
      ],
      realExample: {
        company: 'Yorkshire Farm Business',
        result: 'Biomass boiler saving £18,000/year',
        saving: 'RHI payments of £25,000/year'
      }
    }
  ];

  const certifications = [
    { name: 'REGO', description: 'Renewable Energy Guarantee of Origin' },
    { name: 'RGGO', description: 'Renewable Gas Guarantee of Origin' },
    { name: 'RECs', description: 'Renewable Energy Certificates' },
    { name: 'GoO', description: 'Guarantee of Origin (EU)' }
  ];

  const calculateCarbonSavings = () => {
    const baselineEmissions = carbonCalculator.annualSpend * 0.0002; // Rough estimate
    const reductionPercent = carbonCalculator.currentSource === 'fossil' ? 100 : 
                           carbonCalculator.currentSource === 'mixed' ? 60 : 20;
    const savings = (baselineEmissions * reductionPercent / 100).toFixed(1);
    const trees = (savings * 50).toFixed(0); // Trees equivalent
    
    return { emissions: baselineEmissions.toFixed(1), savings, trees };
  };

  const results = calculateCarbonSavings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Green Energy Options for Business | Renewable & Sustainable Solutions"
        description="Explore green energy options for your business. From REGO tariffs to solar installations and PPAs. Reduce carbon emissions by up to 100% while saving on energy costs."
        keywords="green energy business, renewable energy options, REGO tariffs, solar panels business, carbon neutral electricity, sustainable energy solutions"
        canonical="https://wattutilities001.netlify.app/green-energy-options"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 40, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 45, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          />
        </div>

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
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Sustainable Energy Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Go Green. <span className="text-green-400">Save Money.</span> Lead Change.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business energy to renewable sources. Reduce carbon emissions by up to 100% 
              while cutting costs with our comprehensive green energy solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Leaf className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Carbon Neutral</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <TrendingDown className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">20-40%</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">£0</div>
                <div className="text-sm text-gray-400">Upfront Solar</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">REGO</div>
                <div className="text-sm text-gray-400">Certified</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Carbon Calculator */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-900/20 via-slate-900 to-emerald-900/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Calculator className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Calculate Your Carbon Savings
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See your potential environmental impact with green energy
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Annual Energy Spend (£)
                  </label>
                  <input
                    type="number"
                    value={carbonCalculator.annualSpend}
                    onChange={(e) => setCarbonCalculator({...carbonCalculator, annualSpend: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Current Energy Source
                  </label>
                  <select
                    value={carbonCalculator.currentSource}
                    onChange={(e) => setCarbonCalculator({...carbonCalculator, currentSource: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                  >
                    <option value="fossil">100% Fossil Fuels</option>
                    <option value="mixed">Mixed Sources</option>
                    <option value="partial">Partial Renewable</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Current Emissions</div>
                  <div className="text-2xl font-bold text-red-400">{results.emissions} tCO₂</div>
                  <div className="text-xs text-gray-500">per year</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Potential Savings</div>
                  <div className="text-2xl font-bold text-green-400">{results.savings} tCO₂</div>
                  <div className="text-xs text-gray-500">per year</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Equivalent to Planting</div>
                  <div className="text-2xl font-bold text-emerald-400">{results.trees}</div>
                  <div className="text-xs text-gray-500">trees</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Green Options Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Green Energy Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedOption(option)}
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className={`h-2 bg-gradient-to-r ${
                    option.id === 'rego' ? 'from-green-500 to-emerald-600' :
                    option.id === 'solar' ? 'from-amber-500 to-yellow-600' :
                    option.id === 'ppa' ? 'from-blue-500 to-cyan-600' :
                    option.id === 'funded-solar' ? 'from-purple-500 to-indigo-600' :
                    option.id === 'carbon-offset' ? 'from-teal-500 to-green-600' :
                    option.id === 'biomass' ? 'from-orange-500 to-red-600' :
                    'from-gray-500 to-gray-600'
                  }`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r bg-opacity-10 ${
                        option.id === 'rego' ? 'from-green-500 to-emerald-600' :
                        option.id === 'solar' ? 'from-amber-500 to-yellow-600' :
                        option.id === 'ppa' ? 'from-blue-500 to-cyan-600' :
                        option.id === 'funded-solar' ? 'from-purple-500 to-indigo-600' :
                        option.id === 'carbon-offset' ? 'from-teal-500 to-green-600' :
                        option.id === 'biomass' ? 'from-orange-500 to-red-600' :
                        'from-gray-500 to-gray-600'
                      }`}>
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Cost Impact</div>
                        <div className="text-lg font-bold text-green-400">{option.premium}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {option.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {option.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Carbon Reduction:</span>
                        <span className="text-green-400 font-semibold">{option.carbonReduction}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Availability:</span>
                        <span className="text-gray-300">{option.availability}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Option Detail Modal */}
      {selectedOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedOption(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-3 bg-gradient-to-r ${
              selectedOption.id === 'rego' ? 'from-green-500 to-emerald-600' :
              selectedOption.id === 'solar' ? 'from-amber-500 to-yellow-600' :
              selectedOption.id === 'ppa' ? 'from-blue-500 to-cyan-600' :
              selectedOption.id === 'funded-solar' ? 'from-purple-500 to-indigo-600' :
              selectedOption.id === 'carbon-offset' ? 'from-teal-500 to-green-600' :
              selectedOption.id === 'biomass' ? 'from-orange-500 to-red-600' :
              'from-gray-500 to-gray-600'
            }`} />
            
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r bg-opacity-20 ${
                    selectedOption.id === 'rego' ? 'from-green-500 to-emerald-600' :
                    selectedOption.id === 'solar' ? 'from-amber-500 to-yellow-600' :
                    selectedOption.id === 'ppa' ? 'from-blue-500 to-cyan-600' :
                    selectedOption.id === 'funded-solar' ? 'from-purple-500 to-indigo-600' :
                    selectedOption.id === 'carbon-offset' ? 'from-teal-500 to-green-600' :
                    selectedOption.id === 'biomass' ? 'from-orange-500 to-red-600' :
                    'from-gray-500 to-gray-600'
                  }`}>
                    <selectedOption.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedOption.name}
                    </h2>
                    <p className="text-gray-400">{selectedOption.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <TrendingDown className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-green-400">{selectedOption.carbonReduction}</div>
                  <div className="text-sm text-gray-400">Carbon Reduction</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                  <DollarSign className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-blue-400">{selectedOption.premium}</div>
                  <div className="text-sm text-gray-400">Cost Impact</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-purple-400">{selectedOption.availability}</div>
                  <div className="text-sm text-gray-400">Implementation</div>
                </div>
              </div>

              {/* Features and Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-400" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedOption.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {selectedOption.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Considerations and Suitability */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-400" />
                    Considerations
                  </h3>
                  <ul className="space-y-2">
                    {selectedOption.considerations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    Ideal For
                  </h3>
                  <ul className="space-y-2">
                    {selectedOption.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Real Example */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-400" />
                  Real Success Story
                </h3>
                <p className="text-lg text-green-400 font-semibold mb-2">
                  {selectedOption.realExample.company}
                </p>
                <p className="text-white mb-2">
                  {selectedOption.realExample.result}
                </p>
                <p className="text-emerald-400 font-bold">
                  {selectedOption.realExample.saving}
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Ready to Go Green?
                </h4>
                <p className="text-gray-300 mb-4">
                  Let us help you implement this solution
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Green Energy Certifications
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 text-center"
              >
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Investment & Returns Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/60 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="p-4 text-left text-gray-400">Solution</th>
                  <th className="p-4 text-center text-gray-400">Upfront Cost</th>
                  <th className="p-4 text-center text-gray-400">Annual Savings</th>
                  <th className="p-4 text-center text-gray-400">Payback</th>
                  <th className="p-4 text-center text-gray-400">10yr ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-800">
                  <td className="p-4 text-white font-semibold">REGO Tariff</td>
                  <td className="p-4 text-center text-gray-300">£0</td>
                  <td className="p-4 text-center text-red-400">-2-5%</td>
                  <td className="p-4 text-center text-gray-300">N/A</td>
                  <td className="p-4 text-center text-gray-300">ESG Value</td>
                </tr>
                <tr className="border-t border-slate-800">
                  <td className="p-4 text-white font-semibold">Owned Solar</td>
                  <td className="p-4 text-center text-red-400">£50-200k</td>
                  <td className="p-4 text-center text-green-400">20-40%</td>
                  <td className="p-4 text-center text-yellow-400">4-7 years</td>
                  <td className="p-4 text-center text-green-400">150-250%</td>
                </tr>
                <tr className="border-t border-slate-800">
                  <td className="p-4 text-white font-semibold">Funded Solar</td>
                  <td className="p-4 text-center text-green-400">£0</td>
                  <td className="p-4 text-center text-green-400">15-30%</td>
                  <td className="p-4 text-center text-green-400">Immediate</td>
                  <td className="p-4 text-center text-green-400">100-200%</td>
                </tr>
                <tr className="border-t border-slate-800">
                  <td className="p-4 text-white font-semibold">PPA</td>
                  <td className="p-4 text-center text-green-400">£0</td>
                  <td className="p-4 text-center text-green-400">10-25%</td>
                  <td className="p-4 text-center text-green-400">Immediate</td>
                  <td className="p-4 text-center text-green-400">80-150%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-green-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe2 className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Green Energy Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses reducing costs and carbon emissions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Green Energy Quote
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

export default GreenEnergyOptions;