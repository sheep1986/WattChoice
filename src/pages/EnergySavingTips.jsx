import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb,
  PiggyBank,
  TrendingDown,
  Thermometer,
  Zap,
  Settings,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Award,
  Calculator,
  Leaf,
  Building2,
  ChevronRight,
  Info,
  Target
} from 'lucide-react';
import { SEOHead } from '../SEO';

const EnergySavingTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTip, setExpandedTip] = useState(null);

  const categories = [
    { id: 'all', label: 'All Tips', icon: Lightbulb },
    { id: 'quick-wins', label: 'Quick Wins', icon: Zap },
    { id: 'lighting', label: 'Lighting', icon: Lightbulb },
    { id: 'hvac', label: 'Heating & Cooling', icon: Thermometer },
    { id: 'equipment', label: 'Equipment', icon: Settings },
    { id: 'behavioral', label: 'Behavioral', icon: Users }
  ];

  const savingTips = [
    {
      id: 1,
      category: 'quick-wins',
      title: 'Switch to LED Lighting',
      savings: '40-60%',
      payback: '6-12 months',
      difficulty: 'Easy',
      impact: 'High',
      description: 'Replace traditional bulbs with LED alternatives for immediate savings',
      details: {
        implementation: [
          'Audit all lighting fixtures in your premises',
          'Prioritize high-usage areas for replacement',
          'Choose appropriate color temperature (3000K-4000K for offices)',
          'Consider smart LED systems for additional control'
        ],
        benefits: [
          'Reduces lighting energy consumption by up to 60%',
          'LEDs last 25x longer than incandescent bulbs',
          'Lower heat emission reduces cooling costs',
          'Improved light quality enhances productivity'
        ],
        realExample: 'Manchester retail store saved £4,200/year by switching 200 bulbs to LED',
        estimatedCost: '£20-50 per fixture',
        roi: '150-200% in first year'
      }
    },
    {
      id: 2,
      category: 'hvac',
      title: 'Optimize HVAC Scheduling',
      savings: '20-30%',
      payback: 'Immediate',
      difficulty: 'Easy',
      impact: 'High',
      description: 'Program heating and cooling to match occupancy patterns',
      details: {
        implementation: [
          'Install programmable thermostats if not present',
          'Set temperatures: 19°C heating, 24°C cooling',
          'Program setbacks for nights and weekends',
          'Zone control for different areas'
        ],
        benefits: [
          'Reduces unnecessary heating/cooling',
          'Extends equipment lifespan',
          'Improves comfort during occupied hours',
          'Easy to adjust for seasonal changes'
        ],
        realExample: 'Birmingham office saved £8,500/year with smart HVAC scheduling',
        estimatedCost: '£200-500 for smart thermostats',
        roi: '300-500% in first year'
      }
    },
    {
      id: 3,
      category: 'equipment',
      title: 'Install Variable Speed Drives',
      savings: '30-50%',
      payback: '12-24 months',
      difficulty: 'Moderate',
      impact: 'High',
      description: 'Add VSDs to motors for pumps, fans, and compressors',
      details: {
        implementation: [
          'Identify motors running at constant speed',
          'Prioritize larger motors (>5kW) first',
          'Professional installation required',
          'Configure for optimal efficiency curves'
        ],
        benefits: [
          'Reduces motor energy consumption significantly',
          'Soft start reduces mechanical stress',
          'Precise control improves process quality',
          'Reduces maintenance requirements'
        ],
        realExample: 'Manufacturing plant saved £15,000/year on ventilation fans',
        estimatedCost: '£500-2000 per drive',
        roi: '50-100% annually'
      }
    },
    {
      id: 4,
      category: 'behavioral',
      title: 'Implement Energy Champions Program',
      savings: '5-15%',
      payback: 'Immediate',
      difficulty: 'Easy',
      impact: 'Medium',
      description: 'Engage staff in energy-saving behaviors and monitoring',
      details: {
        implementation: [
          'Appoint energy champions in each department',
          'Provide basic energy awareness training',
          'Set up suggestion schemes with rewards',
          'Share monthly energy performance data'
        ],
        benefits: [
          'Zero capital investment required',
          'Builds energy-conscious culture',
          'Identifies wastage quickly',
          'Improves employee engagement'
        ],
        realExample: 'Leeds hotel chain reduced consumption by 12% through staff engagement',
        estimatedCost: '£0-500 for training materials',
        roi: 'Immediate positive return'
      }
    },
    {
      id: 5,
      category: 'lighting',
      title: 'Install Motion Sensors',
      savings: '20-30%',
      payback: '12-18 months',
      difficulty: 'Easy',
      impact: 'Medium',
      description: 'Automate lighting in low-occupancy areas',
      details: {
        implementation: [
          'Target corridors, storage rooms, toilets',
          'Choose appropriate sensor types (PIR/microwave)',
          'Adjust sensitivity and time delays',
          'Combine with daylight harvesting where possible'
        ],
        benefits: [
          'Eliminates lights left on accidentally',
          'Extends bulb life through reduced usage',
          'Improves security with automatic activation',
          'No behavioral change required'
        ],
        realExample: 'Glasgow warehouse saved £2,800/year with motion sensors',
        estimatedCost: '£30-100 per sensor',
        roi: '75-150% in first year'
      }
    },
    {
      id: 6,
      category: 'hvac',
      title: 'Regular HVAC Maintenance',
      savings: '10-20%',
      payback: 'Immediate',
      difficulty: 'Easy',
      impact: 'Medium',
      description: 'Keep heating and cooling systems running efficiently',
      details: {
        implementation: [
          'Change filters monthly during peak seasons',
          'Annual professional servicing',
          'Clean coils and fins regularly',
          'Check and seal ductwork leaks'
        ],
        benefits: [
          'Maintains peak efficiency',
          'Prevents costly breakdowns',
          'Improves air quality',
          'Extends equipment life by 30-50%'
        ],
        realExample: 'Cardiff office complex saved £3,500/year through proper maintenance',
        estimatedCost: '£500-1500 annual service contracts',
        roi: '200-400% through prevented failures'
      }
    },
    {
      id: 7,
      category: 'quick-wins',
      title: 'Power Factor Correction',
      savings: '5-15%',
      payback: '18-24 months',
      difficulty: 'Moderate',
      impact: 'Medium',
      description: 'Reduce reactive power charges on your electricity bill',
      details: {
        implementation: [
          'Analyze electricity bills for power factor penalties',
          'Install capacitor banks near large motors',
          'Monitor power factor continuously',
          'Maintain target of 0.95 or higher'
        ],
        benefits: [
          'Eliminates reactive power charges',
          'Reduces distribution losses',
          'Increases electrical system capacity',
          'Improves voltage stability'
        ],
        realExample: 'Bristol factory eliminated £6,000/year in reactive power charges',
        estimatedCost: '£2000-10000 depending on size',
        roi: '40-60% annually'
      }
    },
    {
      id: 8,
      category: 'equipment',
      title: 'Compressed Air Optimization',
      savings: '20-35%',
      payback: '6-12 months',
      difficulty: 'Moderate',
      impact: 'High',
      description: 'Fix leaks and optimize compressed air systems',
      details: {
        implementation: [
          'Conduct leak detection survey',
          'Fix all identified leaks immediately',
          'Reduce system pressure to minimum required',
          'Install automatic shut-off valves'
        ],
        benefits: [
          'Typical systems have 20-30% leakage',
          'Reduces compressor runtime',
          'Improves system reliability',
          'Reduces maintenance costs'
        ],
        realExample: 'Edinburgh manufacturer saved £12,000/year fixing air leaks',
        estimatedCost: '£500-2000 for leak survey and repairs',
        roi: '300-600% in first year'
      }
    },
    {
      id: 9,
      category: 'behavioral',
      title: 'Switch Off Campaign',
      savings: '5-10%',
      payback: 'Immediate',
      difficulty: 'Easy',
      impact: 'Medium',
      description: 'Eliminate standby power and equipment left running',
      details: {
        implementation: [
          'Place reminder stickers on equipment',
          'Designate last-person responsibilities',
          'Use timer plugs for non-critical equipment',
          'Regular walk-through audits'
        ],
        benefits: [
          'No capital investment needed',
          'Reduces overnight base load',
          'Decreases equipment wear',
          'Fire risk reduction'
        ],
        realExample: 'London offices saved £4,000/year through switch-off discipline',
        estimatedCost: '£0-100 for stickers and timers',
        roi: 'Immediate positive return'
      }
    },
    {
      id: 10,
      category: 'lighting',
      title: 'Daylight Harvesting',
      savings: '15-25%',
      payback: '24-36 months',
      difficulty: 'Moderate',
      impact: 'Medium',
      description: 'Use natural light to reduce artificial lighting needs',
      details: {
        implementation: [
          'Install photosensors near windows',
          'Use dimmable LED fixtures',
          'Clean windows and skylights regularly',
          'Rearrange workspace to maximize daylight'
        ],
        benefits: [
          'Reduces lighting energy automatically',
          'Improves occupant wellbeing',
          'Creates dynamic, pleasant environment',
          'Reduces cooling load from lights'
        ],
        realExample: 'Newcastle office tower saved £7,500/year with daylight controls',
        estimatedCost: '£100-300 per sensor zone',
        roi: '35-50% annually'
      }
    },
    {
      id: 11,
      category: 'hvac',
      title: 'Install Door Closers',
      savings: '5-10%',
      payback: '6-12 months',
      difficulty: 'Easy',
      impact: 'Low',
      description: 'Prevent conditioned air escaping through open doors',
      details: {
        implementation: [
          'Install automatic door closers on external doors',
          'Add door closers to temperature-controlled areas',
          'Consider air curtains for high-traffic entrances',
          'Ensure proper door seals'
        ],
        benefits: [
          'Maintains indoor temperature',
          'Reduces HVAC runtime',
          'Improves comfort near entrances',
          'Reduces dust and insect entry'
        ],
        realExample: 'Liverpool retail store saved £1,800/year with door management',
        estimatedCost: '£50-200 per door closer',
        roi: '100-200% in first year'
      }
    },
    {
      id: 12,
      category: 'equipment',
      title: 'Upgrade to Efficient Motors',
      savings: '10-20%',
      payback: '24-48 months',
      difficulty: 'Moderate',
      impact: 'Medium',
      description: 'Replace old motors with high-efficiency models',
      details: {
        implementation: [
          'Prioritize motors running >4000 hours/year',
          'Choose IE3 or IE4 efficiency class',
          'Right-size motors for actual load',
          'Plan replacement during scheduled maintenance'
        ],
        benefits: [
          'Lower running costs immediately',
          'Reduced heat generation',
          'Quieter operation',
          'Longer bearing life'
        ],
        realExample: 'Aberdeen facility saved £5,000/year upgrading 10 motors',
        estimatedCost: '£500-5000 per motor',
        roi: '25-35% annually'
      }
    }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? savingTips 
    : savingTips.filter(tip => tip.category === selectedCategory);

  const totalPotentialSavings = savingTips.reduce((acc, tip) => {
    const maxSaving = parseInt(tip.savings.split('-')[1] || tip.savings);
    return acc + maxSaving;
  }, 0);

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'High': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Low': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Moderate': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Energy Saving Tips for Business | Reduce Costs by up to 45%"
        description="Practical energy saving tips for UK businesses. From quick wins to long-term strategies, discover how to reduce energy consumption by 20-45% with proven methods and real examples."
        keywords="energy saving tips, business energy efficiency, reduce energy costs, LED lighting savings, HVAC optimization, energy management strategies"
        canonical="https://wattutilities001.netlify.app/energy-saving-tips"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 35, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
            >
              <PiggyBank className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Save up to 45% on Energy Costs</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Proven <span className="text-emerald-400">Energy Saving Tips</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Actionable strategies to reduce your business energy consumption, with real savings data and implementation guides
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <TrendingDown className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">20-45%</div>
                <div className="text-sm text-gray-400">Typical Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6-24mo</div>
                <div className="text-sm text-gray-400">Avg Payback</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{savingTips.length}</div>
                <div className="text-sm text-gray-400">Proven Tips</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">£150M</div>
                <div className="text-sm text-gray-400">Client Savings</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer h-full"
                  onClick={() => setExpandedTip(tip)}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10">
                          <Lightbulb className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border ${getImpactColor(tip.impact)}`}>
                            {tip.impact} Impact
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-400">{tip.savings}</div>
                        <div className="text-xs text-gray-400">savings</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {tip.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {tip.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-400">{tip.payback}</span>
                        </span>
                        <span className={`font-semibold ${getDifficultyColor(tip.difficulty)}`}>
                          {tip.difficulty}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Tip Modal */}
      <AnimatePresence>
        {expandedTip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedTip(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getImpactColor(expandedTip.impact)}`}>
                        {expandedTip.impact} Impact
                      </span>
                      <span className={`font-semibold ${getDifficultyColor(expandedTip.difficulty)}`}>
                        {expandedTip.difficulty} Implementation
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      {expandedTip.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setExpandedTip(null)}
                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                    <PiggyBank className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-400">{expandedTip.savings}</div>
                    <div className="text-sm text-gray-400">Potential Savings</div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 text-center">
                    <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-cyan-400">{expandedTip.payback}</div>
                    <div className="text-sm text-gray-400">Payback Period</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                    <Calculator className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-400">{expandedTip.details.roi}</div>
                    <div className="text-sm text-gray-400">Return on Investment</div>
                  </div>
                </div>

                {/* Implementation Steps */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-emerald-400" />
                    Implementation Steps
                  </h3>
                  <div className="space-y-3">
                    {expandedTip.details.implementation.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Key Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {expandedTip.details.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                        <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Example */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    Real-World Success
                  </h4>
                  <p className="text-emerald-400 font-semibold">
                    {expandedTip.details.realExample}
                  </p>
                </div>

                {/* Cost & ROI */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Estimated Investment</h4>
                    <p className="text-xl font-bold text-white">{expandedTip.details.estimatedCost}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Expected ROI</h4>
                    <p className="text-xl font-bold text-emerald-400">{expandedTip.details.roi}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Ready to Implement This Solution?
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Our experts can help you implement this and other energy-saving strategies
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-cyan-900/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Calculator className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Calculate Your Savings Potential
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Based on implementing our top 5 quick-win strategies
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Average Annual Energy Spend</h4>
                  <p className="text-2xl font-bold text-white">£50,000</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Potential Savings (25-35%)</h4>
                  <p className="text-2xl font-bold text-emerald-400">£12,500 - £17,500</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Implementation Cost</h4>
                  <p className="text-2xl font-bold text-cyan-400">£5,000 - £8,000</p>
                </div>
              </div>
              
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-2">First Year Net Savings</h4>
                <p className="text-3xl font-bold text-emerald-400">£7,500 - £12,500</p>
                <p className="text-sm text-gray-400 mt-2">ROI: 150-250% in Year 1</p>
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg"
                >
                  Get Personalized Savings Report
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Leaf className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Saving Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts create a customized energy-saving plan for your business
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Get Free Energy Audit
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

export default EnergySavingTips;