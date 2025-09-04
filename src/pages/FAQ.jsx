import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { SEOHead, faqSchema } from '../SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Savings & Costs",
      questions: [
        {
          q: "How much can I save on business energy bills?",
          a: "Businesses typically save between 20-45% on their utility bills. We've helped over 900,000 businesses save a combined £150 million. Your exact savings depend on current rates, contract length, and consumption levels."
        },
        {
          q: "Is there a fee for your services?",
          a: "No, our service is completely free to businesses. We receive commission from energy suppliers when we successfully arrange a new contract. You only pay for your energy usage at the agreed rates."
        },
        {
          q: "Are there any hidden costs?",
          a: "Absolutely not. We believe in complete transparency. All costs are clearly outlined in your contract, and we'll explain every charge before you sign. Our commission comes from suppliers, not from you."
        }
      ]
    },
    {
      category: "Switching Process",
      questions: [
        {
          q: "How long does the switching process take?",
          a: "The initial consultation takes just 5 minutes. The complete switching process typically takes 4-6 weeks, depending on your current contract terms. We handle all paperwork and supplier negotiations for you."
        },
        {
          q: "What happens when my current contract ends?",
          a: "We monitor your contract end dates and contact you 6 months before expiry to secure the best new rates. This prevents you from rolling onto expensive out-of-contract rates."
        },
        {
          q: "Will my supply be interrupted during the switch?",
          a: "No, there's absolutely no interruption to your supply. The switch happens seamlessly behind the scenes. You'll continue receiving uninterrupted service throughout the entire process."
        },
        {
          q: "What information do I need to provide?",
          a: "We'll need a recent utility bill, your current contract end date, and basic business information. That's all we need to start finding you better rates."
        }
      ]
    },
    {
      category: "Services & Coverage",
      questions: [
        {
          q: "Which utilities can Watt Choice help with?",
          a: "We provide comprehensive utility management including business electricity, gas, water, broadband, telecoms, and merchant services. We're your one-stop shop for all business utilities."
        },
        {
          q: "Can you help with multiple business sites?",
          a: "Yes, we specialize in multi-site energy procurement and can manage portfolios of any size. We've successfully managed contracts for businesses with 1 to 1000+ sites."
        },
        {
          q: "Do you work with small businesses?",
          a: "Yes! We work with businesses of all sizes, from sole traders to large corporations. Our expertise helps businesses with any level of energy consumption."
        },
        {
          q: "Do you offer green energy options?",
          a: "Absolutely. We can source 100% renewable energy contracts and help you reduce your carbon footprint. We also offer fully funded solar solutions with no upfront costs."
        }
      ]
    },
    {
      category: "Contracts & Terms",
      questions: [
        {
          q: "What contract lengths are available?",
          a: "We offer flexible contract terms from 1 to 5 years. We'll advise on the best length based on market conditions and your business needs."
        },
        {
          q: "Can I leave my current contract early?",
          a: "It depends on your current contract terms. We'll review your contract and advise if early exit is possible and beneficial. Sometimes paying exit fees can still result in overall savings."
        },
        {
          q: "What is a Letter of Authority (LOA)?",
          a: "An LOA gives us permission to negotiate with suppliers on your behalf. It doesn't commit you to anything - you remain in full control and only switch if you're happy with the new rates."
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <SEOHead
        title="Frequently Asked Questions"
        description="Get answers to common questions about business energy switching, savings, and our services. Learn how Watt Choice can help reduce your utility costs."
        keywords="energy switching FAQ, business utilities questions, energy broker FAQ"
        canonical="https://wattutilities001.netlify.app/faq"
        structuredData={faqSchema}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <HelpCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Everything you need to know about switching business utilities
          </p>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-slate-800">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = `${categoryIndex}-${index}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      className="bg-white/50 border border-slate-800 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100/50 transition-colors"
                      >
                        <span className="text-lg font-medium text-gray-900 pr-4">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-700">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our energy experts are here to help
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200 hover:border-emerald-500/50 transition-all"
            >
              <Phone className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">Call Us</h3>
              <p className="text-green-600">0161 833 8661</p>
            </motion.a>
            
            <motion.a
              href="mailto:info@wattutilities.co.uk"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200 hover:border-emerald-500/50 transition-all"
            >
              <Mail className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">Email Us</h3>
              <p className="text-green-600">info@wattutilities.co.uk</p>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200 hover:border-emerald-500/50 transition-all cursor-pointer"
            >
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold mb-2">Live Chat</h3>
              <p className="text-green-600">Available 9am-6pm</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;