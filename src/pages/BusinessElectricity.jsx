import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, ArrowRight, CheckCircle, TrendingUp, Shield, Leaf, 
  Building2, PoundSterling, Clock, Award, Users, Phone,
  FileText, BarChart3, Target, AlertCircle
} from 'lucide-react';
import { SEOHead, organizationSchema, serviceSchema } from '../SEO';
import { serviceContent } from '../content/ServiceContent';
import BusinessQuoteForm from '../components/BusinessQuoteForm';
// import { BreadcrumbLinks, RelatedServicesWidget, CTALinksSection } from '../components/InternalLinks';

const BusinessElectricityPage = () => {
  const content = serviceContent.electricity;
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Electricity Switching & Procurement",
    "provider": {
      "@type": "Organization",
      "name": "Watt Utilities UK Ltd"
    },
    "description": content.metaDescription,
    "areaServed": "United Kingdom",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Electricity Services",
      "itemListElement": content.contractTypes.types.map(type => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": type.name,
          "description": type.description
        }
      }))
    }
  };

  return (
    <>
      <SEOHead 
        title={content.title}
        description={content.metaDescription}
        keywords={content.keywords}
        canonical="https://www.wattutilities.co.uk/business-electricity"
        structuredData={structuredData}
      />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          {/* <BreadcrumbLinks 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Business Electricity' }
            ]}
            className="mb-8"
          /> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                {content.heroTitle}
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 mb-8">
              {content.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={() => setShowQuoteForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
              >
                Get Free Quote <ArrowRight />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
              >
                <Phone /> Speak to Expert
              </motion.a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">45%</div>
                <div className="text-sm text-gray-300">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">30+</div>
                <div className="text-sm text-gray-300">UK Suppliers</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">£58k</div>
                <div className="text-sm text-gray-300">Record Saving</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">5min</div>
                <div className="text-sm text-gray-300">Quick Quote</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose Watt Utilities for Business Electricity?
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                {content.mainContent.introduction}
              </p>
              <div className="space-y-3">
                {['Direct supplier relationships', 'No hidden fees or charges', 'Dedicated account management', 'Contract renewal reminders'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600" 
                alt="Business electricity meters and infrastructure"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">900k+</div>
                <div className="text-sm">Businesses Switched</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Key Benefits of Our Electricity Service
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.mainContent.benefits.map((benefit, index) => {
              const icons = {
                'pound-sign': PoundSterling,
                'trending-up': TrendingUp,
                'file-check': FileText,
                'leaf': Leaf
              };
              const Icon = icons[benefit.icon] || Zap;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Simple 4-Step Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {content.mainContent.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 hover:shadow-xl transition-all">
                  <div className="absolute -top-4 left-6 bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
                {index < content.mainContent.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-yellow-500">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {content.mainContent.contractTypes.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {content.mainContent.contractTypes.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.mainContent.contractTypes.types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {type.name}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {content.mainContent.suppliers.title}
            </h2>
            <p className="text-lg text-slate-600">
              {content.mainContent.suppliers.description}
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {content.mainContent.suppliers.list.map((supplier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-lg p-4 text-center hover:bg-yellow-50 transition-all"
              >
                <Building2 className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">{supplier}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insight Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Current Electricity Market Insights
              </h2>
              <p className="text-gray-200 mb-6">
                The UK electricity market is experiencing significant changes with the transition to renewable energy. 
                Our experts monitor daily market movements to secure optimal rates for your business.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Average Business Rate</span>
                    <span className="text-yellow-400 font-bold">24.5p/kWh</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Green Energy Adoption</span>
                    <span className="text-green-400 font-bold">42%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '42%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                <BarChart3 className="inline w-6 h-6 mr-2 text-yellow-500" />
                2025 Price Forecast
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" 
                alt="Electricity price trends chart"
                className="rounded-lg mb-4"
              />
              <p className="text-slate-600">
                Our analysis suggests optimal contract timing in Q1 2025 before expected summer price increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {content.mainContent.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-slate-600 ml-9">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-12 text-black">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Success Story: Manchester Manufacturing Ltd
                </h2>
                <p className="mb-6">
                  We helped this large manufacturing company reduce their electricity costs by 38% through strategic 
                  procurement and moving to a flexible purchasing strategy.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-4xl font-bold">£47,000</div>
                    <div className="text-sm">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">38%</div>
                    <div className="text-sm">Cost Reduction</div>
                  </div>
                </div>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all"
                >
                  Read More Case Studies <ArrowRight />
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" 
                  alt="Manufacturing facility"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <RelatedServicesWidget currentPage="/business-electricity" />
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Cut Your Electricity Costs?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands of businesses saving millions on their energy bills
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => setShowQuoteForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Get Your Free Quote <ArrowRight />
            </motion.button>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              <Phone /> 0161 833 8661
            </motion.a>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <BusinessQuoteForm onClose={() => setShowQuoteForm(false)} />
      )}
    </>
  );
};

export default BusinessElectricityPage;