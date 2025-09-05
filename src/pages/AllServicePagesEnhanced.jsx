import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SimpleQuoteForm from '../components/SimpleQuoteForm';
import { 
  Droplet, Wifi, Phone, PhoneCall, Building2, FileText, Users, Mail, MapPin, 
  ArrowRight, CheckCircle, Shield, Clock, PoundSterling, Award,
  Star, TrendingUp, TrendingDown, BarChart3, Target, Sparkles,
  CircleDollarSign, ShieldCheck, HeadphonesIcon, ChevronRight,
  FileSearch, Calculator, Settings, PlayCircle, Thermometer,
  Wind, Home, PiggyBank, Leaf, Battery, Zap, Globe, Radio,
  Waves, Filter, Gauge, Activity, Server, Cloud, Lock,
  AlertCircle, CheckCircle2, Lightbulb, Rocket, Crown,
  Gift, Bell, HelpCircle, Eye, DollarSign, Factory,
  Store, Heart, Building, MessageSquareQuote, MessageSquare, ChevronLeft,
  Calendar, ThumbsUp, ExternalLink, Flame
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

// Floating Elements for Hero sections
function FloatingElements({ color = "blue", icon1: Icon1 = Droplet, icon2: Icon2 = Waves }) {
  const colors = {
    blue: { primary: "text-blue-400", bg: "from-blue-200 to-cyan-300" },
    purple: { primary: "text-purple-400", bg: "from-purple-200 to-pink-300" },
    green: { primary: "text-green-400", bg: "from-green-200 to-emerald-300" },
    amber: { primary: "text-amber-400", bg: "from-amber-200 to-orange-300" }
  };

  const selectedColor = colors[color] || colors.blue;

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
        <Icon1 className={`w-24 h-24 ${selectedColor.primary}`} />
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
        <Icon2 className={`w-32 h-32 ${selectedColor.primary}`} />
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
        <div className={`w-96 h-96 rounded-full blur-3xl opacity-20 ${color === 'blue' ? 'bg-gradient-to-r from-blue-200 to-cyan-300' : color === 'purple' ? 'bg-gradient-to-r from-purple-200 to-pink-300' : color === 'green' ? 'bg-gradient-to-r from-green-200 to-emerald-300' : color === 'amber' ? 'bg-gradient-to-r from-amber-200 to-orange-300' : 'bg-gradient-to-r from-blue-200 to-cyan-300'}`} />
      </motion.div>
    </div>
  );
}

// Enhanced Business Water Page
export const BusinessWater = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marketStats = {
    averageSaving: 20,
    businessesHelped: 50000,
    totalSaved: 25000000,
    supplierPartners: 15
  };

  const serviceFeatures = [
    {
      icon: Filter,
      title: "Water Audit",
      description: "Comprehensive analysis of your water usage and billing to identify savings",
      gradient: "from-blue-600 to-cyan-700"
    },
    {
      icon: Shield,
      title: "Leak Detection",
      description: "Advanced leak detection services to prevent water waste and high bills",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: Calculator,
      title: "Bill Validation",
      description: "Expert review of your water bills to identify and recover overcharges",
      gradient: "from-purple-600 to-indigo-700"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Personal account manager for all your water service needs",
      gradient: "from-amber-600 to-orange-700"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Water Analysis",
      description: "We analyze your current water usage and identify efficiency opportunities",
      icon: BarChart3,
      duration: "2 mins"
    },
    {
      number: "02",
      title: "Market Comparison",
      description: "Compare rates from all UK water retailers",
      icon: FileSearch,
      duration: "Instant"
    },
    {
      number: "03",
      title: "Contract Negotiation",
      description: "We negotiate the best rates and terms for your business",
      icon: Calculator,
      duration: "24 hrs"
    },
    {
      number: "04",
      title: "Seamless Switch",
      description: "We handle the entire switching process with zero disruption",
      icon: Settings,
      duration: "Done!"
    }
  ];

  const waterSuppliers = [
    { name: 'Water Plus', logo: 'https://i.ibb.co/WbBgQ38/Master-Water-Plus-Logo-on-white-strap-SPOT-e1543417320424-1.png' },
    { name: 'Everflow', logo: 'https://i.ibb.co/3YkhDbFN/Everflow-Logo-Magenta-2-1.webp' },
    { name: 'Wave', logo: null },
    { name: 'Castle Water', logo: null },
    { name: 'Clear Business', logo: null },
    { name: 'SES Business', logo: null },
    { name: 'Thames Water', logo: null },
    { name: 'Yorkshire Water', logo: null },
    { name: 'Anglian Water', logo: null },
    { name: 'Severn Trent', logo: null },
    { name: 'South West Water', logo: null },
    { name: 'United Utilities', logo: null }
  ];

  const faqs = [
    {
      question: 'Can I really switch my water supplier?',
      answer: 'Yes! Since April 2017, all businesses in England can choose their water supplier. Scotland has been deregulated since 2008. This means you can shop around for better rates and service.'
    },
    {
      question: 'How much can I save on water bills?',
      answer: 'Most businesses save between 10-20% when switching water suppliers. Some businesses with high water usage or inefficiencies can save even more through water audits and leak detection.'
    },
    {
      question: 'Will my water supply be affected?',
      answer: 'No, your water supply will not be interrupted. The physical water supply and infrastructure remain the same - only your retail supplier changes.'
    },
    {
      question: 'What services do water retailers provide?',
      answer: 'Water retailers handle billing, meter reading, customer service, and can provide additional services like water efficiency audits, leak detection, and bill validation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <FloatingElements color="blue" />
        
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
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              UK's Leading Water Switching Service
              <Sparkles className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Business Water{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Simplified
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save up to 20% on your business water bills. Compare all UK water retailers in seconds.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Get Water Quote <ArrowRight className="w-5 h-5" />
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
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Droplet className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.averageSaving} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Average Saving</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Building2 className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={50} suffix="K+" />
                </div>
                <div className="text-sm text-gray-600">Businesses</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <PoundSterling className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  £<AnimatedCounter value={25} suffix="M+" />
                </div>
                <div className="text-sm text-gray-600">Total Saved</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">4.7★</div>
                <div className="text-sm text-gray-600">Trustpilot</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Water{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Management
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just switching - comprehensive water services for your business
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
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                  <div className="inline-flex p-3 rounded-lg mb-4 bg-gradient-to-r from-emerald-600 to-green-700">
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
              Our streamlined process gets you better water rates in just 4 steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-blue-400 to-gray-200 hidden lg:block" />
            
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
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    
                    <div className="mt-6">
                      <step.icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-semibold">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Water Suppliers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Access to All UK Water Retailers
            </h2>
            <p className="text-xl text-gray-600">
              We work with every water retailer to find you the best rates
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {waterSuppliers.map((supplier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center min-h-[100px] border border-gray-100 hover:border-blue-300"
              >
                {supplier.logo ? (
                  <img
                    src={supplier.logo}
                    alt={supplier.name}
                    className="max-w-full max-h-[50px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-center"><div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-2"><svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" opacity="0.3"/><path d="M14.12 8L12 10.12L9.88 8L8 9.88L10.12 12L8 14.12L9.88 16L12 13.88L14.12 16L16 14.12L13.88 12L16 9.88L14.12 8Z"/></svg></div><span class="text-gray-700 font-semibold text-sm">${supplier.name}</span></div>`;
                    }}
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm3 7h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">{supplier.name}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Business Water
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Reduce Your Water Costs?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Join 50,000+ businesses already saving with Watt Choice
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Saving Now <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
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
                <span>Ofwat compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.7/5 Trustpilot</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Business Broadband Page
export const BusinessBroadband = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('fibre');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marketStats = {
    averageSaving: 35,
    businessesHelped: 75000,
    totalSaved: 45000000,
    upliftSpeed: 10
  };

  const serviceFeatures = [
    {
      icon: Gauge,
      title: "Ultra-Fast Speeds",
      description: "Up to 10Gbps with dedicated bandwidth for your business",
      gradient: "from-purple-600 to-pink-700"
    },
    {
      icon: Shield,
      title: "99.99% Uptime",
      description: "Industry-leading SLA with guaranteed compensation",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: Cloud,
      title: "Cloud Ready",
      description: "Optimized for cloud services and remote working",
      gradient: "from-blue-600 to-cyan-700"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 UK Support",
      description: "Expert technical support whenever you need it",
      gradient: "from-amber-600 to-orange-700"
    }
  ];

  const packages = {
    fibre: {
      name: "Business Fibre",
      speeds: "Up to 1Gbps",
      sla: "99.9% uptime",
      support: "Business hours",
      price: "From £29/month",
      features: ["Unlimited data", "Static IP", "24hr fix time", "No setup fee"]
    },
    leased: {
      name: "Leased Line",
      speeds: "10Mbps - 10Gbps",
      sla: "99.99% uptime",
      support: "24/7 dedicated",
      price: "From £199/month",
      features: ["Symmetric speeds", "4hr fix time", "Multiple static IPs", "Managed router"]
    },
    sdwan: {
      name: "SD-WAN",
      speeds: "Customizable",
      sla: "99.99% uptime",
      support: "24/7 managed",
      price: "Bespoke pricing",
      features: ["Multi-site", "Load balancing", "Automatic failover", "Cloud integration"]
    }
  };

  const faqs = [
    {
      question: "What's the difference between business fibre and leased lines?",
      answer: 'Business fibre offers fast download speeds at lower cost but is contended. Leased lines provide dedicated symmetric speeds with guaranteed performance and faster fix times.'
    },
    {
      question: 'How quickly can broadband be installed?',
      answer: 'Business fibre typically takes 10-15 working days. Leased lines require 45-90 days due to infrastructure requirements. We can provide 4G backup during installation.'
    },
    {
      question: 'Do you offer backup connections?',
      answer: 'Yes, we recommend diverse routing with automatic failover. Options include 4G/5G backup, secondary lines, and SD-WAN solutions for maximum resilience.'
    },
    {
      question: 'Can I keep my existing phone numbers?',
      answer: 'Absolutely! We can port your existing numbers to VoIP services, often reducing your telecoms costs by 50% while adding features.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <FloatingElements color="purple" icon1={Wifi} icon2={Globe} />
        
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
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Ultrafast Business Connectivity
              <Sparkles className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Business Broadband{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Redefined
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Lightning-fast, ultra-reliable business broadband. From fibre to leased lines and SD-WAN.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Check Availability <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 border border-gray-200"
              >
                <Phone className="w-5 h-5" /> Technical Team
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Wifi className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">10Gbps</div>
                <div className="text-sm text-gray-600">Max Speed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Activity className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">99.99%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">4hr</div>
                <div className="text-sm text-gray-600">Fix Time</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">UK Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Connection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From cost-effective fibre to enterprise-grade leased lines
            </p>
            
            {/* Package Selector */}
            <div className="inline-flex bg-gray-100 rounded-full p-1 mb-8">
              {Object.keys(packages).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedPackage === key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {packages[key].name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={selectedPackage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{packages[selectedPackage].name}</h3>
                <p className="text-4xl font-bold">{packages[selectedPackage].price}</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <Globe className="w-8 h-8 text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">Speeds</p>
                    <p className="text-xl font-bold text-gray-900">{packages[selectedPackage].speeds}</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">SLA</p>
                    <p className="text-xl font-bold text-gray-900">{packages[selectedPackage].sla}</p>
                  </div>
                  <div>
                    <HeadphonesIcon className="w-8 h-8 text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">Support</p>
                    <p className="text-xl font-bold text-gray-900">{packages[selectedPackage].support}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {packages[selectedPackage].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'https://app.watt.co.uk'}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  Get This Package <ArrowRight className="inline ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
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
                  <div className="inline-flex p-3 rounded-lg mb-4 bg-gradient-to-r from-emerald-600 to-green-700">
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
              Broadband Questions Answered
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upgrade Your Connection Today
            </h2>
            <p className="text-xl text-purple-50 mb-8">
              Get faster, more reliable broadband for less
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://app.watt.co.uk'}
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Check Availability <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0161 833 8661
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Business Telecoms Page
export const BusinessTelecoms = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marketStats = {
    averageSaving: 50,
    businessesHelped: 120000,
    callsPerMonth: 50000000,
    supportResponse: 30
  };

  const telecomFeatures = [
    {
      title: "VoIP Phone Systems",
      icon: Phone,
      description: "Cloud-based phone systems with advanced features",
      benefits: ["Free internal calls", "Mobile apps", "Call recording", "Auto-attendant"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
    },
    {
      title: "SIP Trunks",
      icon: Radio,
      description: "Connect your existing PBX to modern networks",
      benefits: ["Keep existing numbers", "Disaster recovery", "Flexible channels", "Lower costs"],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800"
    },
    {
      title: "Mobile Plans",
      icon: Wifi,
      description: "Business mobile packages with unlimited data",
      benefits: ["Unlimited data", "EU roaming", "Device leasing", "Pooled minutes"],
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
    },
    {
      title: "Microsoft Teams",
      icon: Users,
      description: "Integrated calling within Microsoft Teams",
      benefits: ["Teams integration", "Video conferencing", "Screen sharing", "Call queues"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirements Analysis",
      description: "We assess your current setup and future needs",
      icon: FileSearch,
      duration: "15 mins"
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Custom telecoms solution tailored to your business",
      icon: Settings,
      duration: "Same day"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Seamless deployment with zero downtime",
      icon: Rocket,
      duration: "5-10 days"
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "24/7 UK-based technical support",
      icon: HeadphonesIcon,
      duration: "Always"
    }
  ];

  const faqs = [
    {
      question: 'Can I keep my existing phone numbers?',
      answer: 'Yes, absolutely! We handle the entire number porting process for you. Your numbers will transfer seamlessly to the new system with no downtime.'
    },
    {
      question: 'How much can I save by switching to VoIP?',
      answer: 'Most businesses save 40-60% on their phone bills by switching to VoIP. You eliminate line rental charges, get free internal calls, and benefit from much lower call rates.'
    },
    {
      question: 'What happens if my internet goes down?',
      answer: 'Our systems include automatic failover to mobile networks. Calls can also be diverted to mobile phones, ensuring you never miss important calls.'
    },
    {
      question: 'Do I need new phone handsets?',
      answer: 'Not necessarily. Many existing phones are compatible with adaptors. We also offer a range of modern IP phones, or you can use softphones on computers and mobiles.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <FloatingElements color="green" icon1={Phone} icon2={MessageSquare} />
        
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
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Next-Generation Business Communications
              <Sparkles className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Business Telecoms{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Evolved
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save 50% on phone bills with VoIP, SIP trunks, and unified communications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQuoteForm(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Get Telecoms Quote <ArrowRight className="w-5 h-5" />
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={marketStats.averageSaving} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={120} suffix="K+" />
                </div>
                <div className="text-sm text-gray-600">Businesses</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <PhoneCall className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={50} suffix="M+" />
                </div>
                <div className="text-sm text-gray-600">Calls/Month</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter value={30} suffix="s" />
                </div>
                <div className="text-sm text-gray-600">Response Time</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Telecoms{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for modern business communications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature Selector */}
            <div className="space-y-4">
              {telecomFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedFeature(index)}
                  className={`cursor-pointer rounded-xl p-6 transition-all ${
                    selectedFeature === index
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl'
                      : 'bg-white hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <feature.icon className={`w-8 h-8 ${
                      selectedFeature === index ? 'text-white' : 'text-green-600'
                    }`} />
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        selectedFeature === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={
                        selectedFeature === index ? 'text-green-50' : 'text-gray-600'
                      }>
                        {feature.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${
                      selectedFeature === index ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Details */}
            <motion.div
              key={selectedFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-64 relative">
                <img
                  src={telecomFeatures[selectedFeature].image}
                  alt={telecomFeatures[selectedFeature].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {telecomFeatures[selectedFeature].title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {telecomFeatures[selectedFeature].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  Get This Solution <ArrowRight className="inline ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Seamless Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle everything from start to finish
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-green-400 to-gray-200 hidden lg:block" />
            
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
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    
                    <div className="mt-6">
                      <step.icon className="w-10 h-10 text-green-600 mb-4" />
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
              Telecoms Questions Answered
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Communications?
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Join 120,000+ businesses already saving with modern telecoms
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQuoteForm(true)}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Saving Now <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0161 833 8661
              </motion.a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Number porting included</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>No downtime</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.8/5 Trustpilot</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <SimpleQuoteForm onClose={() => setShowQuoteForm(false)} serviceType="telecoms" />
      )}
    </div>
  );
};