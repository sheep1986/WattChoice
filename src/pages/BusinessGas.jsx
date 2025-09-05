import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import { 
  Flame, ArrowRight, CheckCircle, TrendingUp, Shield, Building2,
  PoundSterling, Clock, Award, Users, Phone, FileText, BarChart3,
  Target, AlertCircle, Gauge, Factory, ChevronRight, Sparkles,
  CircleDollarSign, ShieldCheck, HeadphonesIcon, Star, TrendingDown,
  FileSearch, Calculator, Settings, PlayCircle, Thermometer,
  Wind, Home, PiggyBank, Leaf, Battery, Zap
} from 'lucide-react';
// import { SEOHead } from '../SEO';
import { serviceContent } from '../content/ServiceContent';

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
        className="absolute top-20 left-10 opacity-20"
      >
        <Flame className="w-24 h-24 text-orange-500" />
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
        className="absolute bottom-20 right-10 opacity-20"
      >
        <Thermometer className="w-32 h-32 text-red-500" />
      </motion.div>
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-96 h-96 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}

const BusinessGasPage = () => {
  const content = serviceContent.gas;
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Market stats for animated counters
  const marketStats = {
    averageSaving: 38,
    businessesHelped: 900000,
    totalSaved: 150000000,
    supplierPartners: 25
  };

  // Service features with gradients
  const serviceFeatures = [
    {
      icon: Target,
      title: "Tailored Gas Solutions",
      description: "Customized procurement strategies for your business size and consumption patterns",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Contract Protection",
      description: "Expert review of terms and conditions to avoid hidden charges and unfair clauses",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time gas market analysis to secure optimal timing for your renewal",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Personal account manager throughout your contract journey",
      gradient: "from-rose-500 to-red-500"
    }
  ];

  // Benefits with icons
  const keyBenefits = [
    {
      icon: PoundSterling,
      title: "Save up to 45%",
      description: "Significant cost reductions through expert negotiation",
      stat: "45%",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Quick Switch",
      description: "Complete the switching process in under 5 minutes",
      stat: "5min",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "24+ years of gas market experience",
      stat: "24yr",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "4.6/5 Trustpilot rating from real businesses",
      stat: "4.6★",
      color: "text-orange-600"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Gas Usage Analysis",
      description: "We analyze your current gas consumption and identify savings opportunities",
      icon: BarChart3,
      duration: "2 mins"
    },
    {
      number: "02",
      title: "Market Comparison",
      description: "Compare prices from 25+ UK gas suppliers instantly",
      icon: FileSearch,
      duration: "Instant"
    },
    {
      number: "03",
      title: "Contract Negotiation",
      description: "Our experts negotiate the best rates and terms for your business",
      icon: Calculator,
      duration: "24 hrs"
    },
    {
      number: "04",
      title: "Seamless Switch",
      description: "We handle the entire switching process with zero downtime",
      icon: Settings,
      duration: "Done!"
    }
  ];

  // Supplier logos
  const suppliers = [
    "British Gas", "Total Energies", "Crown Gas", "SEFE Energy",
    "Gazprom", "Yu Energy", "Pozitive Energy", "Valda Energy"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEOHead commented out - can be re-enabled when configured
      <SEOHead 
        title={content.title}
        description={content.metaDescription}
        keywords={content.keywords}
        canonical="https://www.wattchoice.co.uk/business-gas"
        structuredData={combinedSchema}
      />
      */}

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
        <FloatingElements />
        
        <div className="relative container mx-auto px-4 pt-32 pb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              UK's #1 Business Gas Switching Service
              <Sparkles className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Business Gas Made{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Simple
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save up to 45% on your business gas bills with our expert procurement service. 
              Compare 25+ suppliers in seconds.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Get Instant Gas Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 border border-gray-200"
              >
                <Phone className="w-5 h-5" /> Speak to Expert
              </motion.a>
            </div>
            
            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-orange-100"
              >
                <Flame className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.averageSaving} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Average Saving</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-red-100"
              >
                <Building2 className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={900} suffix="K+" />
                </div>
                <div className="text-sm text-gray-600">Businesses</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-orange-100"
              >
                <PoundSterling className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  £<AnimatedCounter value={150} suffix="M+" />
                </div>
                <div className="text-sm text-gray-600">Total Saved</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-red-100"
              >
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">4.6★</div>
                <div className="text-sm text-gray-600">Trustpilot</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Business Gas
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert gas procurement with transparent pricing and no hidden fees
            </p>
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
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`
                  }}
                />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Gas Costs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of UK businesses that have already reduced their gas bills 
                with our expert procurement service. We handle everything from market analysis 
                to contract negotiation.
              </p>
              
              <div className="space-y-6">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-3 bg-gray-50 rounded-xl ${benefit.color}`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                        <span className={`text-2xl font-bold ${benefit.color}`}>
                          {benefit.stat}
                        </span>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Quick Gas Quote</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                    <label className="text-white/80 text-sm">Monthly Gas Spend</label>
                    <div className="text-2xl font-bold">£2,500 - £10,000</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                    <label className="text-white/80 text-sm">Potential Annual Saving</label>
                    <div className="text-3xl font-bold text-yellow-300">£11,400</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = 'https://app.watt.co.uk'}
                    className="w-full bg-white text-orange-600 font-bold py-4 rounded-xl hover:shadow-lg transition-all"
                  >
                    Get Your Accurate Quote <ArrowRight className="inline ml-2" />
                  </motion.button>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Save 38%
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Switching Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process gets you better gas rates in just 4 steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-red-200 hidden lg:block" />
            
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
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    
                    <div className="mt-6">
                      <step.icon className="w-10 h-10 text-orange-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-semibold">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Access to 25+ Gas Suppliers
            </h2>
            <p className="text-xl text-gray-600">
              We work with all major UK gas suppliers to find you the best rates
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suppliers.map((supplier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center"
              >
                <span className="text-gray-700 font-semibold">{supplier}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Business Gas
            </h2>
          </motion.div>

          <div className="space-y-4">
            {content.mainContent.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Cut Your Gas Costs?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Join 900,000+ businesses already saving with Watt Choice
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Saving Now <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0161 833 8661
              </motion.a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No obligation quote</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>FCA regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.6/5 Trustpilot</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessGasPage;