import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Search,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Calendar,
  AlertCircle,
  ChevronRight,
  Download,
  Settings,
  PenTool,
  Send,
  UserCheck,
  BarChart3
} from 'lucide-react';
import { SEOHead } from '../SEO';

const SwitchingProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation',
      duration: '15-30 minutes',
      icon: Phone,
      description: 'Free consultation to understand your needs',
      details: [
        'Discuss current energy situation',
        'Identify pain points and objectives',
        'Explain our process and services',
        'No obligation assessment'
      ],
      whatYouNeed: [
        'Recent energy bill',
        'Current contract end date',
        'Annual consumption (if known)',
        'Business requirements'
      ],
      outcome: 'Clear understanding of potential savings'
    },
    {
      id: 2,
      number: '02',
      title: 'Usage Analysis',
      duration: '24-48 hours',
      icon: BarChart3,
      description: 'Comprehensive analysis of your energy consumption',
      details: [
        'Review 12 months consumption data',
        'Identify usage patterns',
        'Benchmark against industry standards',
        'Calculate accurate annual costs'
      ],
      whatYouNeed: [
        'Letter of Authority signed',
        'Recent bills (if available)',
        'Meter details',
        'Site information'
      ],
      outcome: 'Detailed consumption profile and savings forecast'
    },
    {
      id: 3,
      number: '03',
      title: 'Market Comparison',
      duration: '1-2 days',
      icon: Search,
      description: 'Compare deals from multiple suppliers',
      details: [
        'Access wholesale market prices',
        'Compare 20+ supplier offerings',
        'Negotiate best rates',
        'Include green energy options'
      ],
      whatYouNeed: [
        'Nothing - we handle this',
        'Just await our recommendations'
      ],
      outcome: 'Shortlist of best options with clear comparisons'
    },
    {
      id: 4,
      number: '04',
      title: 'Contract Selection',
      duration: '1 day',
      icon: FileText,
      description: 'Choose the best contract for your needs',
      details: [
        'Present top 3-5 options',
        'Explain pros and cons',
        'Provide recommendation',
        'Answer all questions'
      ],
      whatYouNeed: [
        'Decision maker availability',
        'Budget approval (if required)',
        'Future business plans'
      ],
      outcome: 'Selected optimal contract with full understanding'
    },
    {
      id: 5,
      number: '05',
      title: 'Contract Agreement',
      duration: '1-2 days',
      icon: PenTool,
      description: 'Secure your new energy contract',
      details: [
        'Review full terms and conditions',
        'Clarify any concerns',
        'Complete contract documentation',
        'Confirm start dates'
      ],
      whatYouNeed: [
        'Signatory authorization',
        'Company details verification',
        'Bank details (for Direct Debit)'
      ],
      outcome: 'Signed contract with confirmed rates'
    },
    {
      id: 6,
      number: '06',
      title: 'Switch Management',
      duration: '4-8 weeks',
      icon: Settings,
      description: 'We handle the entire switching process',
      details: [
        'Submit switch request to new supplier',
        'Coordinate with current supplier',
        'Handle objections if any',
        'Ensure smooth transition'
      ],
      whatYouNeed: [
        'Nothing - fully managed by us',
        'We keep you updated throughout'
      ],
      outcome: 'Seamless switch with no interruption'
    },
    {
      id: 7,
      number: '07',
      title: 'Go Live & Support',
      duration: 'Ongoing',
      icon: Zap,
      description: 'Start saving with ongoing support',
      details: [
        'Confirm successful switch',
        'Verify first bill accuracy',
        'Ongoing account management',
        'Annual reviews and renewals'
      ],
      whatYouNeed: [
        'Review first new bill with us',
        'Feedback on service'
      ],
      outcome: 'Lower energy costs with continued support'
    }
  ];

  const timeline = {
    total: '6-8 weeks',
    breakdown: [
      { phase: 'Initial Setup', duration: '1-3 days', color: 'bg-blue-500' },
      { phase: 'Analysis & Comparison', duration: '3-5 days', color: 'bg-indigo-500' },
      { phase: 'Contract Agreement', duration: '2-3 days', color: 'bg-purple-500' },
      { phase: 'Switch Process', duration: '4-8 weeks', color: 'bg-green-500' }
    ]
  };

  const faqs = [
    {
      question: 'Will my power supply be interrupted?',
      answer: 'No, absolutely not. The switch happens behind the scenes. Your physical energy supply remains unchanged - only the billing changes.'
    },
    {
      question: 'What if my current contract hasn\'t ended?',
      answer: 'We can secure future-dated contracts up to 12 months in advance. This locks in rates and ensures seamless transition when your current contract ends.'
    },
    {
      question: 'Are there any fees for switching?',
      answer: 'Our service is free to you. We receive commission from suppliers, which we openly disclose. You get the same rates as going direct, but with our expertise.'
    },
    {
      question: 'Can I switch if I have debt with my current supplier?',
      answer: 'Usually yes, but it depends on the amount. Debts under £500 can often be transferred. We\'ll help you understand your options.'
    },
    {
      question: 'How much can I really save?',
      answer: 'Businesses typically save 15-35% by switching. Those on deemed rates can save 30-50%. Actual savings depend on your current contract and usage.'
    },
    {
      question: 'What is a Letter of Authority (LOA)?',
      answer: 'An LOA allows us to access your energy data and negotiate on your behalf. It doesn\'t commit you to anything and you remain in full control.'
    }
  ];

  const getStepIcon = (step) => {
    const Icon = step.icon;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="Business Energy Switching Process | Step-by-Step Guide"
        description="Complete guide to switching business energy suppliers. Learn the 7-step process, timelines, and what to expect. Switch in 6-8 weeks with zero interruption."
        keywords="energy switching process, business energy switch, how to switch energy supplier, energy switching timeline, LOA letter of authority"
        canonical="https://wattutilities001.netlify.app/switching-process"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10" />
        
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
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Simple 7-Step Process</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Switch <span className="text-blue-400">Energy Suppliers</span> Seamlessly
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our proven process makes switching simple. From initial consultation to ongoing support, 
              we handle everything while you focus on your business.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6-8</div>
                <div className="text-sm text-gray-400">Weeks Total</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-sm text-gray-400">Interruption</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15-35%</div>
                <div className="text-sm text-gray-400">Avg Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
              >
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">900k+</div>
                <div className="text-sm text-gray-400">Switched</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete Timeline Overview
          </h2>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-400">Total Duration</p>
                <p className="text-3xl font-bold text-white">{timeline.total}</p>
              </div>
              <Calendar className="w-12 h-12 text-blue-400" />
            </div>
            
            <div className="space-y-4">
              {timeline.breakdown.map((phase, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{phase.phase}</span>
                    <span className="text-gray-400">{phase.duration}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${25 * (index + 1)}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-3 rounded-full ${phase.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            The 7-Step Switching Process
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.id * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveStep(step.id)}
                  className={`cursor-pointer p-6 rounded-lg border transition-all ${
                    activeStep === step.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20 border-blue-500/50'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeStep === step.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-800 text-gray-400'
                    }`}>
                      {getStepIcon(step)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <span className="text-2xl font-bold text-gray-600">
                          {step.number}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="lg:sticky lg:top-8 h-fit">
              {processSteps.map((step) => (
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 p-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        {getStepIcon(step)}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Step {step.number}</p>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>

                    {/* What Happens */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">WHAT HAPPENS</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What You Need */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">WHAT YOU NEED</h4>
                      <ul className="space-y-2">
                        {step.whatYouNeed.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">OUTCOME</h4>
                      <p className="text-white">{step.outcome}</p>
                    </div>

                    {/* Duration Badge */}
                    <div className="mt-6 flex items-center justify-center">
                      <div className="bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300 font-semibold">{step.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900/20 via-slate-900 to-green-900/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Important Information
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
            >
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">No Supply Interruption</h3>
              <p className="text-gray-400">
                Your energy supply continues uninterrupted throughout the switch. The physical supply never changes - only who bills you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
            >
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Letter of Authority</h3>
              <p className="text-gray-400">
                The LOA simply allows us to get your consumption data and quotes. It doesn't commit you to switching or cost anything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
            >
              <UserCheck className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Full Control</h3>
              <p className="text-gray-400">
                You remain in complete control throughout. We present options, you make decisions. Cancel anytime before signing contracts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900/20 via-slate-900 to-green-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Download className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Free Switching Guide
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our comprehensive guide with checklist and timeline
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
                <div>
                  <h4 className="text-white font-semibold mb-3">Guide Includes:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Step-by-step checklist
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Timeline template
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Document requirements
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Also Contains:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Common pitfalls to avoid
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Negotiation tips
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Savings calculator
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  Download Free Guide
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Send className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Begin your switching journey today with a free consultation
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                >
                  Start Switching Process
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

export default SwitchingProcess;