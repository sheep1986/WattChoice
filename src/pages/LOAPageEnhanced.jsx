import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Shield, CheckCircle, AlertTriangle, ArrowRight, 
  Lock, Eye, Clock, Users, Award, TrendingUp, Download,
  ChevronDown, ChevronUp, Info, Mail, Phone, Building2
} from 'lucide-react';

const LOAPageEnhanced = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('what');

  const benefits = [
    {
      icon: Eye,
      title: "Full Transparency",
      description: "See exactly what you're paying now and what you could save"
    },
    {
      icon: Shield,
      title: "No Obligation",
      description: "LOA doesn't commit you to switching - you remain in full control"
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Simple 2-minute form gets us working on your savings immediately"
    },
    {
      icon: Lock,
      title: "Secure & Confidential",
      description: "Your data is protected and only used to find you better deals"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Complete LOA Form",
      description: "Quick online form or downloadable PDF",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "2",
      title: "We Gather Data",
      description: "Obtain your current rates and usage patterns",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "3",
      title: "Market Analysis",
      description: "Compare deals from 30+ suppliers",
      icon: Users,
      color: "from-purple-500 to-indigo-500"
    },
    {
      step: "4",
      title: "Present Options",
      description: "Show you savings with no pressure to switch",
      icon: Award,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const whatWeAccess = [
    {
      category: "Account Information",
      items: [
        "Business name and address",
        "Account numbers",
        "Meter serial numbers",
        "Supply numbers (MPAN/MPRN)"
      ]
    },
    {
      category: "Contract Details",
      items: [
        "Current rates and standing charges",
        "Contract end dates",
        "Notice periods",
        "Early termination fees"
      ]
    },
    {
      category: "Usage Data",
      items: [
        "Annual consumption",
        "Peak usage times",
        "Seasonal variations",
        "Historical billing"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is signing an LOA safe?",
      answer: "Yes, completely safe. An LOA is a standard industry document that simply allows us to request information from your suppliers. It doesn't give us permission to change anything or commit you to a switch. You remain in full control at all times."
    },
    {
      question: "What exactly can you do with an LOA?",
      answer: "With an LOA, we can: request your current rates and contract details, obtain accurate usage data, check contract end dates, and gather the information needed to negotiate better deals. We cannot: switch your supplier without your explicit consent, make any changes to your account, or commit you to any contracts."
    },
    {
      question: "How long is an LOA valid?",
      answer: "Our LOAs are typically valid for 12 months, which gives us enough time to monitor the market and find you the best deal when your contract is up for renewal. You can revoke it at any time if you change your mind."
    },
    {
      question: "Do I need separate LOAs for different utilities?",
      answer: "Yes, we need separate LOAs for electricity, gas, and water as they're regulated differently. However, you can complete all of them at once through our simple online process."
    },
    {
      question: "What if I'm in a contract?",
      answer: "That's fine! We'll note your contract end date and start working on securing you a better deal for when your current contract expires. This ensures you switch at the right time without any exit fees."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FileText className="w-4 h-4" />
              Letter of Authority Explained
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Gateway to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Better Energy Deals
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A Letter of Authority (LOA) is a simple, safe document that allows us to find you 
              the best energy deals - with no obligation to switch.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#loa-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('loa-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Complete LOA Now <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-2 border border-gray-200"
              >
                <Download className="w-5 h-5" /> Download PDF Form
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-emerald-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="font-semibold">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">FCA Regulated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why You Need an LOA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without an LOA, we can only provide estimates. With one, we can get you exact quotes 
              and identify real savings opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Tabs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'what', label: 'What We Access', icon: Eye },
              { id: 'how', label: 'How It Works', icon: Clock },
              { id: 'security', label: 'Security & Control', icon: Shield }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'what' && (
              <motion.div
                key="what"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {whatWeAccess.map((category, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-emerald-600" />
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'how' && (
              <motion.div
                key="how"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-4 gap-6"
              >
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                    )}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        index === 2 ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                        'bg-gradient-to-r from-amber-500 to-orange-500'
                      }`}>
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Data is Protected</h3>
                    <ul className="space-y-3">
                      {[
                        "GDPR compliant data handling",
                        "Encrypted storage and transmission",
                        "Never shared without permission",
                        "Regular security audits",
                        "FCA regulated operations"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">You Stay in Control</h3>
                    <ul className="space-y-3">
                      {[
                        "No automatic switching",
                        "Review all options before deciding",
                        "Revoke LOA anytime",
                        "Clear communication throughout",
                        "No hidden fees or charges"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Important Information</h3>
                <p className="text-gray-700 mb-4">
                  A Letter of Authority does NOT:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✗</span>
                    <span className="text-gray-700">Commit you to switching suppliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✗</span>
                    <span className="text-gray-700">Allow us to make changes without your consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✗</span>
                    <span className="text-gray-700">Cost you any money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✗</span>
                    <span className="text-gray-700">Lock you into our services</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  It simply allows us to gather information to help you save money. You remain in 
                  complete control of any switching decisions.
                </p>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
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
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Form Section */}
      <section id="loa-form" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Your Letter of Authority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to authorize us to work on your behalf
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Official LOA Form 2025</h3>
                  <p className="text-emerald-50">Secure form powered by Signable - UK's trusted e-signature platform</p>
                </div>
                <Shield className="w-12 h-12 text-white/80" />
              </div>
            </div>
            
            <div className="p-4 bg-gray-50">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: '100vh', minHeight: '800px' }}>
                <iframe
                  src="https://app.signable.co.uk/widget/url/MzAhAFky4F?company=&amp;name=&amp;address="
                  title="Letter of Authority Form"
                  className="w-full h-full"
                  style={{ 
                    border: '0',
                    width: '100%',
                    height: '100%',
                    minHeight: '800px'
                  }}
                  frameBorder="0"
                  scrolling="yes"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-emerald-50 border-t-4 border-emerald-500 p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Form Security & Privacy</h4>
                  <p className="text-gray-700 text-sm">
                    This form is hosted securely by Signable and meets all UK GDPR requirements. 
                    Your data is encrypted and will only be used to obtain energy quotes on your behalf.
                    You can revoke this authorization at any time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">We Receive Your LOA</h4>
                <p className="text-gray-600 text-sm">Instantly processed and assigned to your dedicated account manager</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Market Analysis</h4>
                <p className="text-gray-600 text-sm">We contact suppliers and negotiate the best rates for your business</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quote Presentation</h4>
                <p className="text-gray-600 text-sm">Receive your personalized quotes within 24-48 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Completing the Form?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Our team is here to assist you with the LOA process
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: 0161 833 8661
              </motion.a>
              <motion.a
                href="mailto:info@wattchoice.co.uk"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Support
              </motion.a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>2-minute process</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LOAPageEnhanced;