import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, BarChart3, Globe, TrendingUp, Shield, Clock,
  CheckCircle, ArrowRight, Target, FileSearch, Rocket, PoundSterling,
  Award, Star, Sparkles, MessageSquareQuote, ChevronRight, Phone,
  Factory, Zap, Users, HeartHandshake, Calculator, TrendingDown
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
      {prefix}{count.toLocaleString()}{suffix}
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
        <Factory className="w-24 h-24 text-amber-400" />
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
        <Building2 className="w-32 h-32 text-orange-400" />
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
        <div className="w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full blur-3xl opacity-20" />
      </motion.div>
    </div>
  );
}

const LargeBusinessEnhanced = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedFaq, setSelectedFaq] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marketStats = {
    sitesManaged: 50000,
    annualSpend: 500,
    clientRetention: 98,
    averageSaving: 40
  };

  const services = [
    {
      icon: Zap,
      title: "Flexible Energy Procurement",
      description: "Advanced trading strategies tailored to your risk appetite",
      features: [
        "Fixed, flexible, or hybrid contracts",
        "Market timing optimization",
        "Risk management strategies",
        "Real-time market monitoring"
      ],
      gradient: "from-amber-600 to-orange-700"
    },
    {
      icon: BarChart3,
      title: "Half-Hourly Meter Management",
      description: "Complete HH meter services and data analytics",
      features: [
        "P272 compliance support",
        "Consumption pattern analysis",
        "Load factor optimization",
        "Automated reporting"
      ],
      gradient: "from-orange-600 to-red-700"
    },
    {
      icon: Globe,
      title: "Multi-Site Portfolio",
      description: "Centralized management for all your locations",
      features: [
        "Single contract solutions",
        "Consolidated billing",
        "Site-specific optimization",
        "Portfolio aggregation benefits"
      ],
      gradient: "from-amber-600 to-yellow-700"
    },
    {
      icon: Shield,
      title: "Net Zero Strategy",
      description: "Comprehensive carbon management and reporting",
      features: [
        "Carbon footprint assessment",
        "REGO certificates",
        "Sustainability reporting",
        "Green energy options"
      ],
      gradient: "from-green-600 to-emerald-700"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategic Review",
      description: "Complete analysis of your energy portfolio and requirements",
      icon: FileSearch,
      duration: "1-2 weeks"
    },
    {
      number: "02",
      title: "Market Tender",
      description: "Leverage your buying power across all major suppliers",
      icon: Target,
      duration: "2-3 weeks"
    },
    {
      number: "03",
      title: "Contract Negotiation",
      description: "Secure optimal terms, pricing, and flexibility",
      icon: HeartHandshake,
      duration: "1 week"
    },
    {
      number: "04",
      title: "Implementation",
      description: "Seamless transition with dedicated project management",
      icon: Rocket,
      duration: "4-8 weeks"
    }
  ];

  const benefits = [
    {
      title: "Dedicated Account Team",
      description: "Senior energy consultants with decades of market experience",
      icon: Users,
      stat: "24/7"
    },
    {
      title: "Buying Power",
      description: "Access to wholesale rates through volume aggregation",
      icon: TrendingUp,
      stat: "£500M+"
    },
    {
      title: "Cost Reduction",
      description: "Average savings across our large business portfolio",
      icon: TrendingDown,
      stat: "35-45%"
    },
    {
      title: "Market Intelligence",
      description: "Real-time market updates and trading recommendations",
      icon: BarChart3,
      stat: "Live"
    }
  ];

  const caseStudy = {
    company: "National Manufacturing Group",
    industry: "Manufacturing",
    challenge: "Managing 87 sites with varying contract dates and suppliers",
    solution: "Consolidated portfolio approach with flexible purchasing strategy",
    results: {
      saving: "£2.3M",
      percentage: 38,
      sites: 87,
      previousSpend: "£6.1M",
      newSpend: "£3.8M"
    },
    testimonial: "The team at Watt Choice transformed our energy procurement. Their expertise in the wholesale markets helped us achieve savings we didn't think were possible.",
    author: "Group Energy Manager"
  };

  const faqs = [
    {
      question: "What qualifies as a large business for energy procurement?",
      answer: "Typically businesses with annual energy spend over £100,000, multiple sites, or half-hourly metering. However, we tailor our approach to your specific needs regardless of size."
    },
    {
      question: "How do flexible purchasing contracts work?",
      answer: "Flexible contracts allow you to purchase energy in blocks over time, taking advantage of market movements. This can reduce risk and potentially achieve better pricing than fixed contracts."
    },
    {
      question: "What is P272 and how does it affect us?",
      answer: "P272 is an industry change that moved many businesses to half-hourly settlement. We help you understand the impact and optimize your contracts accordingly."
    },
    {
      question: "Can you help with our net zero commitments?",
      answer: "Absolutely. We provide carbon reporting, renewable energy options, and can help develop a comprehensive net zero strategy aligned with your corporate goals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Corporate Energy Solutions
              <Sparkles className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Large Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Energy Experts
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialist energy management for corporations, multi-nationals, and large enterprises. 
              Save 35-45% with our wholesale market expertise.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 border border-gray-200"
              >
                <Phone className="w-5 h-5" /> Corporate Team
              </motion.a>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Factory className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.sitesManaged} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Sites Managed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <PoundSterling className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  £<AnimatedCounter value={marketStats.annualSpend} suffix="M+" />
                </div>
                <div className="text-sm text-gray-600">Annual Spend</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.clientRetention} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <TrendingDown className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.averageSaving} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Average Saving</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Enterprise Energy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy management solutions designed for large organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-emerald-600 to-green-700" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-emerald-600 to-green-700">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Large Businesses Choose Watt Choice
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
              >
                <benefit.icon className="w-12 h-12 text-amber-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Success Story: {caseStudy.company}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-amber-100 text-sm mb-1">Challenge</p>
                    <p className="text-lg">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-amber-100 text-sm mb-1">Solution</p>
                    <p className="text-lg">{caseStudy.solution}</p>
                  </div>
                </div>
                
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <MessageSquareQuote className="w-8 h-8 mb-4 text-amber-200" />
                  <p className="text-lg italic mb-4">"{caseStudy.testimonial}"</p>
                  <p className="font-semibold">— {caseStudy.author}</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 text-gray-900">
                  <p className="text-sm text-gray-600 mb-2">Annual Saving Achieved</p>
                  <p className="text-5xl font-bold text-green-600 mb-4">{caseStudy.results.saving}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-2xl font-bold text-gray-900">{caseStudy.results.percentage}%</p>
                      <p className="text-xs text-gray-600">Cost Reduction</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-2xl font-bold text-gray-900">{caseStudy.results.sites}</p>
                      <p className="text-xs text-gray-600">Sites Optimized</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Previous</span>
                      <span className="font-bold">{caseStudy.results.previousSpend}/year</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">New</span>
                      <span className="font-bold text-green-600">{caseStudy.results.newSpend}/year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Corporate Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology refined over thousands of successful procurements
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-amber-400 to-gray-200 hidden lg:block" />
            
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
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    
                    <div className="mt-6">
                      <step.icon className="w-10 h-10 text-amber-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span className="text-amber-600 font-semibold">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Large Business Energy FAQs
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
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Energy Strategy?
            </h2>
            <p className="text-xl text-amber-50 mb-8">
              Join hundreds of large businesses saving millions on energy
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-white text-amber-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Book Strategic Review <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
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

export default LargeBusinessEnhanced;