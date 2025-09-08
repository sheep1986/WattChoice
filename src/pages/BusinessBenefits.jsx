import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Clock,
  Shield,
  Users,
  Award,
  Calculator,
  CheckCircle,
  ArrowRight,
  Phone,
  Zap,
  Building2,
  BarChart3,
  Heart,
  ThumbsUp,
  Target,
  Lightbulb,
  Rocket,
  Crown,
  Gift,
  Settings,
  Eye,
  DollarSign,
  Battery,
  Gauge,
  Briefcase,
  HeartHandshake,
  Lock,
  Globe,
  FileText,
  Search,
  ChevronRight,
  Star,
  Info,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Percent
} from 'lucide-react';

// Hero Section for Business Benefits
function BenefitsHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-2.5 rounded-full mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold">Why 50,000+ Businesses Choose Us</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Business Benefits That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-2">
              Drive Real Results
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From substantial cost savings to dedicated support, discover how Watt Choice transforms 
            the way UK businesses manage their utilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                Start Saving Today
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
            <Link to="/case-studies">
              <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                View Success Stories
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Key Statistics Section
function KeyStats() {
  const stats = [
    { label: "Average Annual Savings", value: "£4,250", icon: DollarSign, color: "green" },
    { label: "Businesses Served", value: "50,000+", icon: Building2, color: "blue" },
    { label: "Total Saved for Clients", value: "£150M+", icon: TrendingUp, color: "purple" },
    { label: "Supplier Partners", value: "30+", icon: Users, color: "orange" }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                stat.color === 'green' ? 'bg-green-100' :
                stat.color === 'blue' ? 'bg-blue-100' :
                stat.color === 'purple' ? 'bg-purple-100' :
                'bg-orange-100'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Core Benefits Section
function CoreBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Save up to 45% on your business energy bills",
      features: [
        "Access to exclusive business rates",
        "Bulk buying power advantages",
        "Negotiate better contract terms",
        "Avoid auto-renewal price increases"
      ],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Time & Resource Efficiency",
      description: "We handle everything so you can focus on your business",
      features: [
        "Complete market comparison in 60 seconds",
        "No need to contact multiple suppliers",
        "Automated contract management",
        "Renewal reminders and support"
      ],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your business from market volatility",
      features: [
        "Fixed price contracts available",
        "Flexible contract options",
        "Market timing advice",
        "Contract review and validation"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Dedicated Account Management",
      description: "Expert support throughout your contract",
      features: [
        "Assigned account manager",
        "Regular contract reviews",
        "Billing query resolution",
        "24/7 emergency support"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Core Benefits for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive advantages that go beyond just price comparison
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient}`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {benefit.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Excellence Section
function ServiceExcellence() {
  const services = [
    {
      icon: Search,
      title: "Comprehensive Market Analysis",
      description: "We analyze the entire UK business energy market to find your perfect match",
      image: "https://i.ibb.co/ksZZDY4t/2.png"
    },
    {
      icon: FileText,
      title: "Contract Negotiation",
      description: "Our experts negotiate terms and prices on your behalf",
      image: "https://i.ibb.co/RGNCyxqQ/3.png"
    },
    {
      icon: Settings,
      title: "Seamless Switching",
      description: "We manage the entire switching process with zero downtime",
      image: "https://i.ibb.co/0pXJP3vj/4.png"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Service Excellence at Every Step
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach ensures you get the best possible outcome
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <service.icon className="h-8 w-8 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industry Expertise Section
function IndustryExpertise() {
  const industries = [
    { name: "Retail & Hospitality", icon: Building2, savings: "35%" },
    { name: "Manufacturing", icon: Settings, savings: "42%" },
    { name: "Healthcare", icon: Heart, savings: "38%" },
    { name: "Education", icon: Award, savings: "40%" },
    { name: "Professional Services", icon: Briefcase, savings: "36%" },
    { name: "Technology", icon: Rocket, savings: "41%" }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">
            Industry-Specific Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored solutions for your sector's unique energy needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-black text-green-400">{industry.savings}</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-300">Average savings achieved</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Additional Benefits Section
function AdditionalBenefits() {
  const benefits = [
    {
      category: "Financial Benefits",
      icon: DollarSign,
      items: [
        "No hidden fees or charges",
        "Transparent pricing models",
        "Budget certainty with fixed rates",
        "Improved cash flow management",
        "Reduced operational costs"
      ]
    },
    {
      category: "Operational Benefits",
      icon: Settings,
      items: [
        "Single point of contact",
        "Consolidated billing options",
        "Automated meter readings",
        "Online account management",
        "Regular performance reports"
      ]
    },
    {
      category: "Strategic Benefits",
      icon: Target,
      items: [
        "Energy efficiency advice",
        "Sustainability guidance",
        "Future market insights",
        "Regulatory compliance support",
        "Growth planning assistance"
      ]
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Additional Business Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive advantages that extend beyond energy procurement
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                  <category.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Thompson",
      role: "CFO",
      company: "Manchester Tech Hub",
      text: "The savings we achieved were impressive, but the ongoing support and market insights have been invaluable for our business planning.",
      savings: "£8,400/year",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Operations Manager",
      company: "Bristol Retail Group",
      text: "Watt Choice simplified our multi-site energy management. One contract, one point of contact, and significant savings across all locations.",
      savings: "£15,200/year",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Owner",
      company: "London Restaurant Chain",
      text: "The team's industry knowledge helped us choose the right contract type for our seasonal business. We're saving money and have peace of mind.",
      savings: "£6,800/year",
      rating: 5
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how UK businesses benefit from our services
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold text-sm">
                  {testimonial.savings}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Watt Choice Section
function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Established in 2000, we've helped thousands of businesses save millions"
    },
    {
      icon: ShieldCheck,
      title: "Fully Accredited",
      description: "Ofgem compliant and following the TPI Code of Practice"
    },
    {
      icon: Users,
      title: "Independent & Impartial",
      description: "We work for you, not the suppliers, ensuring unbiased advice"
    },
    {
      icon: HeartHandshake,
      title: "No Obligation Service",
      description: "Free comparison service with no pressure to switch"
    },
    {
      icon: Globe,
      title: "UK-Wide Coverage",
      description: "Supporting businesses across England, Scotland, Wales & NI"
    },
    {
      icon: Phone,
      title: "Ongoing Support",
      description: "Dedicated support throughout your contract, not just at signup"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why Businesses Choose Watt Choice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The trusted partner for UK business energy management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                  <reason.icon className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function BenefitsCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Start Experiencing These Benefits Today
          </h2>
          <p className="text-xl text-green-50 mb-10">
            Join 50,000+ UK businesses already saving with Watt Choice
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
              <div className="text-3xl font-black text-white mb-2">60</div>
              <div className="text-green-100">Second Quote</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
              <div className="text-3xl font-black text-white mb-2">£0</div>
              <div className="text-green-100">Service Cost</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
              <div className="text-3xl font-black text-white mb-2">45%</div>
              <div className="text-green-100">Potential Savings</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                Get Your Free Comparison
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
            <a href="tel:01618338661">
              <button className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 0161 833 8661
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Business Benefits Page Component
export default function BusinessBenefits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <BenefitsHero />
      <KeyStats />
      <CoreBenefits />
      <ServiceExcellence />
      <IndustryExpertise />
      <AdditionalBenefits />
      <TestimonialsSection />
      <WhyChooseUs />
      <BenefitsCTA />
    </div>
  );
}