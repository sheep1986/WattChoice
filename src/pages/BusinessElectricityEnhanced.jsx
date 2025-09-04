import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, CheckCircle, TrendingUp, Shield, Leaf, 
  Building2, PoundSterling, Clock, Award, Users, Phone,
  FileText, BarChart3, Target, AlertCircle, ChevronRight,
  Battery, Cpu, Globe, Sparkles, CircleDollarSign,
  ShieldCheck, HeadphonesIcon, Star, TrendingDown,
  FileSearch, Calculator, Settings, PlayCircle
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
        className="absolute top-20 left-10 opacity-20"
      >
        <Zap className="w-24 h-24 text-yellow-500" />
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
        <Battery className="w-32 h-32 text-green-500" />
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
        className="absolute top-1/2 right-1/4"
      >
        <div className="w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-20" />
      </motion.div>
    </div>
  );
}

const BusinessElectricityEnhanced = () => {
  const [activeTab, setActiveTab] = useState('fixed');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Content data
  const content = {
    title: "Business Electricity | Save up to 45% on Energy Bills",
    metaDescription: "Compare business electricity prices from 30+ UK suppliers. Expert switching service, no hidden fees. Save thousands on your energy bills.",
    keywords: "business electricity, commercial electricity, business energy comparison",
    heroTitle: "Business Electricity Solutions",
    heroSubtitle: "Join 10,000+ UK businesses saving millions on their electricity bills with our award-winning switching service",
    mainContent: {
      introduction: "We help UK businesses find the best electricity deals by comparing prices from over 30 trusted suppliers. Our expert team handles the entire switching process for you.",
      benefits: [
        { 
          icon: CircleDollarSign, 
          title: 'Save up to 45%', 
          description: 'Access exclusive business rates',
          color: 'text-green-600',
          bgColor: 'bg-green-50'
        },
        { 
          icon: TrendingUp, 
          title: 'Market Expertise', 
          description: 'Daily monitoring for best deals',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50'
        },
        { 
          icon: FileSearch, 
          title: 'Hassle-Free Switch', 
          description: 'We handle all paperwork',
          color: 'text-purple-600',
          bgColor: 'bg-purple-50'
        },
        { 
          icon: Leaf, 
          title: 'Green Options', 
          description: '100% renewable at great rates',
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-50'
        }
      ],
      process: [
        { 
          step: 1, 
          title: 'Share Details', 
          description: 'Tell us about your business and energy needs',
          icon: FileText
        },
        { 
          step: 2, 
          title: 'Compare Quotes', 
          description: 'We search the market for the best deals',
          icon: BarChart3
        },
        { 
          step: 3, 
          title: 'Choose & Save', 
          description: 'Select your preferred tariff and supplier',
          icon: Target
        },
        { 
          step: 4, 
          title: 'We Handle It', 
          description: 'Sit back while we manage the switch',
          icon: CheckCircle
        }
      ],
      contractTypes: {
        fixed: {
          name: 'Fixed Rate',
          description: 'Lock in your rates for budget certainty',
          benefits: ['Price protection', 'Easy budgeting', 'No surprises'],
          icon: Shield,
          best: 'Best for stability'
        },
        variable: {
          name: 'Variable Rate',
          description: 'Flexible pricing that moves with market',
          benefits: ['Market flexibility', 'No exit fees', 'Monthly changes'],
          icon: TrendingUp,
          best: 'Best for flexibility'
        },
        green: {
          name: 'Green Energy',
          description: '100% renewable electricity sources',
          benefits: ['Carbon neutral', 'REGO certified', 'Eco-friendly'],
          icon: Leaf,
          best: 'Best for sustainability'
        }
      },
      faqs: [
        {
          question: 'How much can I save on business electricity?',
          answer: 'Most businesses save between 20-45% when switching through us. The exact amount depends on your current rates, usage, and contract terms.'
        },
        {
          question: 'Will my electricity supply be interrupted?',
          answer: 'No, there is absolutely no interruption to your supply. The switch happens behind the scenes - you\'ll continue using electricity as normal.'
        },
        {
          question: 'How long does the switching process take?',
          answer: 'The entire process typically takes 4-6 weeks. We handle everything for you, keeping you updated at each stage.'
        },
        {
          question: 'Are there any fees for your service?',
          answer: 'Our comparison and switching service is completely free. We receive a commission from suppliers, which doesn\'t affect your prices.'
        }
      ]
    }
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <motion.section 
        className="relative min-h-[700px] bg-gradient-to-br from-white via-green-50/30 to-blue-50/30 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <FloatingElements />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                              linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by 10,000+ UK Businesses</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Power Your Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                For Less
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {content.heroSubtitle}
            </motion.p>
            
            {/* CTA Buttons with hover effects */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 border border-gray-200"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Speak to Expert
              </motion.a>
            </motion.div>
            
            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: 45, suffix: '%', label: 'Average Savings', icon: TrendingDown },
                { value: 30, suffix: '+', label: 'UK Suppliers', icon: Building2 },
                { value: 58000, prefix: '£', label: 'Record Saving', icon: Award },
                { value: 5, suffix: 'min', label: 'Quick Quote', icon: Clock }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">
                    <AnimatedCounter 
                      value={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                    />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <motion.path 
              d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z"
              initial={{ d: "M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z" }}
              animate={{ 
                d: [
                  "M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z",
                  "M0,80 C480,0 960,120 1440,40 L1440,120 L0,120 Z",
                  "M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.section>

      {/* Interactive Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Watt Choice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our award-winning service
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.mainContent.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className={`${benefit.bgColor} rounded-2xl p-8 h-full border-2 border-transparent hover:border-green-200 transition-all`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 ${benefit.bgColor} rounded-2xl mb-4`}
                  >
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quote to switch in just 4 simple steps
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {content.mainContent.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <motion.div 
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all relative z-10"
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Number */}
                    <motion.div 
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.step}
                    </motion.div>
                    
                    <step.icon className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contract Types Tabs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Contract Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different options to suit your business needs
            </p>
          </motion.div>
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(content.mainContent.contractTypes).map(([key, type]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === key 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <type.icon className="w-5 h-5" />
                {type.name}
              </motion.button>
            ))}
          </div>
          
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {Object.entries(content.mainContent.contractTypes).map(([key, type]) => {
              if (key !== activeTab) return null;
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <type.icon className="w-16 h-16 text-green-600 mb-4" />
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {type.name} Contract
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        {type.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {type.benefits.map((benefit, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="font-semibold text-gray-900">{type.best}</span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="relative h-64 md:h-96"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-20 blur-xl" />
                      <div className="relative h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <type.icon className="w-32 h-32 text-green-600 opacity-20" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours save thousands
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800"
                  alt="Business team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Play Button */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white rounded-full p-6 shadow-2xl">
                    <PlayCircle className="w-12 h-12 text-green-600" />
                  </div>
                </motion.div>
                
                {/* Video Title Overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Manchester Manufacturing Ltd</h3>
                  <p className="text-white/90">Saved £47,000 per year on electricity</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Testimonial Cards */}
                {[
                  {
                    quote: "Watt Choice made switching so easy. They handled everything and saved us 38% on our electricity bills.",
                    author: "James Mitchell",
                    role: "Operations Director",
                    company: "Manchester Manufacturing",
                    savings: "£47,000/year"
                  },
                  {
                    quote: "Professional service from start to finish. We're now on a green energy tariff and saving money!",
                    author: "Sarah Thompson",
                    role: "Finance Director",
                    company: "Tech Solutions UK",
                    savings: "£23,000/year"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-3 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Saved {testimonial.savings}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link 
                to="/case-studies"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mt-6"
              >
                View all success stories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about switching
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {content.mainContent.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <details className="group bg-gray-50 rounded-2xl">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors rounded-2xl">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                              radial-gradient(circle at 80% 50%, white 1px, transparent 1px),
                              radial-gradient(circle at 50% 20%, white 1px, transparent 1px),
                              radial-gradient(circle at 50% 80%, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        <motion.div 
          className="relative container mx-auto max-w-4xl text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Saving?
            </h2>
          </motion.div>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of UK businesses already saving on their electricity bills
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-5 h-5" />
              <span>FCA Regulated</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5" />
              <span>Award Winning Service</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <HeadphonesIcon className="w-5 h-5" />
              <span>Dedicated Support</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white hover:bg-gray-50 text-green-600 font-bold py-4 px-8 rounded-full shadow-xl flex items-center gap-2"
            >
              Get Your Free Quote Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full shadow-xl flex items-center gap-2"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              0161 833 8661
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BusinessElectricityEnhanced;