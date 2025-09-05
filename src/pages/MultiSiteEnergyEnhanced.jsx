import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, BarChart3, Globe, TrendingUp, TrendingDown, Shield, Clock,
  CheckCircle, ArrowRight, Target, FileSearch, Rocket, PoundSterling,
  Award, Star, Sparkles, MessageSquareQuote, ChevronRight, Phone,
  Store, Building, Factory
} from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ value, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value);
          const increment = end / (duration / 10);
          
          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 10);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Floating Elements for Hero
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 opacity-10"
      >
        <Building2 className="w-24 h-24 text-indigo-400" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 opacity-10"
      >
        <Globe className="w-32 h-32 text-purple-400" />
      </motion.div>
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-300 rounded-full blur-3xl opacity-20" />
      </motion.div>
    </div>
  );
}

const MultiSiteEnergyEnhanced = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [selectedFaq, setSelectedFaq] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marketStats = {
    sitesManaged: 10000,
    averageSaving: 35,
    totalSaved: 200000000,
    clientRetention: 96
  };

  const serviceFeatures = [
    {
      icon: Building2,
      title: "Portfolio Management",
      description: "Centralized energy management across all your business locations",
      gradient: "from-indigo-600 to-purple-700"
    },
    {
      icon: BarChart3,
      title: "Volume Aggregation",
      description: "Combine buying power for better rates and terms",
      gradient: "from-blue-600 to-cyan-700"
    },
    {
      icon: Globe,
      title: "Single Contract",
      description: "One contract, one renewal date, simplified administration",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Portfolio approach to minimize market exposure",
      gradient: "from-amber-600 to-orange-700"
    }
  ];

  const solutions = [
    {
      title: "Small Portfolio",
      range: "2-10 Sites",
      description: "Perfect for growing businesses and small chains",
      features: [
        "Basket contracts for all sites",
        "Single renewal date",
        "Volume discounts applied",
        "Simplified billing",
        "Online portal access"
      ],
      savings: "20-25%",
      icon: Store
    },
    {
      title: "Medium Portfolio",
      range: "11-50 Sites",
      description: "Ideal for established chains and franchises",
      features: [
        "Flexible procurement strategies",
        "Site-by-site optimization",
        "Dedicated account manager",
        "Monthly reporting",
        "Bill validation included"
      ],
      savings: "25-35%",
      icon: Building
    },
    {
      title: "Large Portfolio",
      range: "50+ Sites",
      description: "Enterprise-level energy management",
      features: [
        "Bespoke trading strategies",
        "Risk management tools",
        "24/7 account support",
        "Real-time monitoring",
        "Carbon reporting"
      ],
      savings: "35-45%",
      icon: Factory
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Portfolio Analysis",
      description: "We analyze all your sites' energy usage and contracts",
      icon: FileSearch,
      duration: "48 hours"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Create tailored procurement strategy for your portfolio",
      icon: Target,
      duration: "3-5 days"
    },
    {
      number: "03",
      title: "Market Tender",
      description: "Negotiate with suppliers using combined buying power",
      icon: TrendingUp,
      duration: "5-7 days"
    },
    {
      number: "04",
      title: "Implementation",
      description: "Seamless transition with no supply interruption",
      icon: Rocket,
      duration: "4-6 weeks"
    }
  ];

  const caseStudy = {
    company: "National Retail Chain",
    sites: 127,
    previousCost: "£3.2M/year",
    newCost: "£2.1M/year",
    saving: "£1.1M",
    percentage: 34,
    testimonial: "Watt Choice transformed how we manage energy across our estate. The savings have been reinvested into store improvements.",
    author: "Energy Director"
  };

  const faqs = [
    {
      question: 'What is multi-site energy management?',
      answer: 'Multi-site energy management involves procuring and managing energy contracts for businesses with multiple locations. This approach leverages combined buying power to secure better rates and simplifies administration through centralized management.'
    },
    {
      question: 'How much can we save with multi-site contracts?',
      answer: 'Savings typically range from 20-45% depending on the number of sites, total consumption, and current contract terms. Larger portfolios generally achieve higher savings due to increased buying power.'
    },
    {
      question: 'Can sites have different contract end dates?',
      answer: 'Yes, we can align sites with different end dates through co-terminus agreements or flexible procurement strategies. This allows you to consolidate to a single renewal date over time.'
    },
    {
      question: 'What if we add or remove sites?',
      answer: 'Our contracts include provisions for adding new sites or removing closed locations. This flexibility ensures your energy strategy adapts to your business growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <FloatingElements />
        
        <div className="relative container mx-auto px-4 pt-32 pb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Enterprise Energy Management
              <Sparkles className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Multi-Site Energy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Simplified
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Manage energy across all your locations with one strategy. Save 35% with portfolio buying power.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Get Portfolio Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 border border-gray-200"
              >
                <Phone className="w-5 h-5" /> Portfolio Team
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={10} suffix="K+" />
                </div>
                <div className="text-sm text-gray-600">Sites Managed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <TrendingDown className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.averageSaving} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Average Saving</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <PoundSterling className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  £<AnimatedCounter value={200} suffix="M+" />
                </div>
                <div className="text-sm text-gray-600">Total Saved</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={96} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Retention Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tailored Portfolio{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have 2 sites or 200, we have the perfect solution
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative ${index === 1 ? 'lg:-mt-4' : ''}`}
              >
                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full ${
                  index === 1 ? 'border-4 border-indigo-500' : 'border border-gray-200'
                }`}>
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <solution.icon className="w-12 h-12 text-indigo-600" />
                      <div className="text-right">
                        <p className="text-3xl font-bold text-green-600">{solution.savings}</p>
                        <p className="text-sm text-gray-500">savings</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-indigo-600 font-semibold mb-3">{solution.range}</p>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = 'https://app.watt.co.uk'}
                      className={`w-full font-bold py-3 rounded-xl transition-all ${
                        index === 1
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Get Started <ArrowRight className="inline ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Real Results: {caseStudy.company}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span>Portfolio Size</span>
                    <span className="font-bold text-xl">{caseStudy.sites} sites</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span>Previous Cost</span>
                    <span className="font-bold text-xl">{caseStudy.previousCost}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span>New Cost</span>
                    <span className="font-bold text-xl text-green-300">{caseStudy.newCost}</span>
                  </div>
                </div>
                
                <div className="bg-white/20 rounded-xl p-6">
                  <MessageSquareQuote className="w-8 h-8 mb-4" />
                  <p className="text-lg italic mb-4">"{caseStudy.testimonial}"</p>
                  <p className="font-semibold">— {caseStudy.author}</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 text-gray-900">
                  <p className="text-sm text-gray-600 mb-2">Total Annual Saving</p>
                  <p className="text-5xl font-bold text-green-600 mb-4">{caseStudy.saving}</p>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <TrendingDown className="w-5 h-5" />
                    <span className="font-semibold">{caseStudy.percentage}% reduction</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Portfolio Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From analysis to implementation in just 4 steps
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-indigo-400 to-gray-200 hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    
                    <div className="mt-6">
                      <step.icon className="w-10 h-10 text-indigo-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span className="text-indigo-600 font-semibold">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Portfolio Management
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Site Energy FAQs
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      selectedFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {selectedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Portfolio?
            </h2>
            <p className="text-xl text-indigo-50 mb-8">
              Join thousands of multi-site businesses saving millions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Portfolio Analysis <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0161 833 8661
              </motion.a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free portfolio analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Expert advice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MultiSiteEnergyEnhanced;