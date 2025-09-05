import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  Users, 
  Award, 
  Shield, 
  TrendingUp, 
  Heart,
  Target,
  Zap,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  PoundSterling,
  Clock,
  Briefcase,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Trophy,
  HandshakeIcon,
  LineChart,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BusinessQuoteForm from '../components/BusinessQuoteForm';

const AboutPage = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Family-First Approach",
      description: "Established in 2000, we bring family values to business energy. Every client receives personal attention and honest advice.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trusted & Transparent",
      description: "Fully regulated, ICO registered, and TPI Code compliant. We're upfront about our commission structure.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Results That Matter",
      description: "Average savings of £350+ per business. We don't just find deals - we find the RIGHT deals for you.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "People-Powered",
      description: "Investors in People certified. Our team is passionate about delivering exceptional service every time.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const achievements = [
    { number: "900K+", label: "Businesses Transformed", icon: Building2, description: "Energy solutions delivered" },
    { number: "£150M+", label: "Client Savings", icon: PoundSterling, description: "Total saved since 2000" },
    { number: "35%", label: "Average Reduction", icon: TrendingUp, description: "On energy costs" },
    { number: "24/7", label: "Always Available", icon: Clock, description: "Support when you need it" }
  ];

  const milestones = [
    { 
      year: "2000", 
      title: "The Beginning",
      description: "Founded in Manchester with a mission to revolutionize business energy procurement",
      icon: Sparkles,
      highlight: true
    },
    { 
      year: "2010", 
      title: "100K Milestone",
      description: "Reached 100,000 businesses served, proving our model works at scale",
      icon: Trophy
    },
    { 
      year: "2015", 
      title: "Industry Recognition",
      description: "Achieved Platinum Broker status with all major UK energy suppliers",
      icon: Award
    },
    { 
      year: "2020", 
      title: "£100M Saved",
      description: "Celebrated helping UK businesses save over £100 million collectively",
      icon: PoundSterling
    },
    { 
      year: "2024", 
      title: "Leading Innovation",
      description: "Pioneering AI-powered energy optimization and sustainability solutions",
      icon: Zap,
      highlight: true
    }
  ];

  const teamStats = [
    { label: "Energy Experts", value: "50+", icon: UserCheck },
    { label: "Years Combined Experience", value: "500+", icon: Clock },
    { label: "Customer Satisfaction", value: "98%", icon: Star },
    { label: "Response Time", value: "<2hrs", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Helmet SEO tags commented out - can be re-enabled when HelmetProvider is configured
      <Helmet>
        <title>About Watt Choice | UK's Leading Business Energy Consultants Since 2000</title>
        <meta name="description" content="Discover Watt Choice - UK's trusted business energy partner since 2000. 900,000+ businesses served, £150M+ saved. Family-run, Investors in People certified." />
        <meta name="keywords" content="watt choice about, business energy consultants UK, energy broker manchester, utility management experts, family-run energy company" />
        <link rel="canonical" href="https://www.wattchoice.co.uk/about" />
      </Helmet>
      */}

      {/* Modern Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Trusted Since 2000
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just energy consultants. We're your strategic partners in reducing costs and maximizing efficiency.
            </p>
          </div>

          {/* Live Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <stat.icon className="w-8 h-8 text-green-600 mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              "To revolutionize how UK businesses manage their energy costs through transparent advice, 
              cutting-edge technology, and unwavering commitment to client success."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img src="https://i.ibb.co/Txrgyp2R/Watt-choice-logo-1.png" alt="Watt Choice" className="h-12" />
              <div className="text-left">
                <p className="text-white font-semibold">Peter Hunter</p>
                <p className="text-gray-400 text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Journey to <span className="text-green-600">Excellence</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-green-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`inline-block ${milestone.highlight ? 'animate-pulse' : ''}`}>
                      <div className={`
                        bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all
                        ${milestone.highlight ? 'ring-2 ring-green-500 ring-offset-2' : ''}
                      `}>
                        <div className="flex items-center gap-3 mb-3">
                          <milestone.icon className="w-6 h-6 text-green-600" />
                          <span className="text-2xl font-bold text-green-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className={`
                    w-6 h-6 rounded-full border-4 border-white
                    ${milestone.highlight 
                      ? 'bg-green-500 ring-4 ring-green-200 animate-ping' 
                      : 'bg-emerald-500'
                    }
                  `}></div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Modern Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Values That <span className="text-green-600">Drive Us</span>
            </h2>
            <p className="text-xl text-gray-600">What makes Watt Choice different</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${value.color} mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Your <span className="text-green-600">Energy Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our award-winning team combines decades of industry expertise with genuine care for your business success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Awards & Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Accreditations & Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                  <Award className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Investors in People</h4>
                <p className="text-gray-600 text-sm">Gold Standard Accredited</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                  <Shield className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">ICO Registered</h4>
                <p className="text-gray-600 text-sm">Full Data Protection Compliance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                  <Trophy className="w-12 h-12 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Industry Awards 2024</h4>
                <p className="text-gray-600 text-sm">Best Energy Consultant UK</p>
              </div>
            </div>
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
              Ready to Transform Your Energy Costs?
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Join 900,000+ businesses already saving with Watt Choice
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                onClick={() => setShowQuoteForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Your Free Analysis <ArrowRight className="w-5 h-5" />
              </motion.button>
              <a href="tel:01618338661" className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Speak to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <BusinessQuoteForm onClose={() => setShowQuoteForm(false)} />
      )}
    </div>
  );
};

export default AboutPage;