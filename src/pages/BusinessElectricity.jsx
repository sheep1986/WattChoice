import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, ArrowRight, CheckCircle, TrendingUp, Shield, Leaf, 
  Building2, PoundSterling, Clock, Award, Users, Phone,
  FileText, BarChart3, Target, AlertCircle
} from 'lucide-react';
// import { SEOHead, organizationSchema, serviceSchema } from '../SEO';
// import { serviceContent } from '../content/ServiceContent';
// import { BreadcrumbLinks, RelatedServicesWidget, CTALinksSection } from '../components/InternalLinks';

const BusinessElectricityPage = () => {
  // Define content directly since serviceContent doesn't exist
  const content = {
    title: "Business Electricity | Save up to 45% on Energy Bills",
    metaDescription: "Compare business electricity prices from 30+ UK suppliers. Expert switching service, no hidden fees. Save thousands on your energy bills.",
    keywords: "business electricity, commercial electricity, business energy comparison",
    heroTitle: "Business Electricity",
    heroSubtitle: "Save up to 45% on your business electricity bills with our free comparison service",
    mainContent: {
      introduction: "We help UK businesses find the best electricity deals by comparing prices from over 30 trusted suppliers. Our expert team handles the entire switching process for you.",
      benefits: [
        { icon: 'pound-sign', title: 'Save up to 45%', description: 'Access exclusive business rates not available to the public' },
        { icon: 'trending-up', title: 'Market Expertise', description: 'Our team monitors daily price movements to secure the best deals' },
        { icon: 'file-check', title: 'Hassle-Free Switch', description: 'We handle all paperwork and liaise with suppliers on your behalf' },
        { icon: 'leaf', title: 'Green Options', description: 'Choose from 100% renewable energy tariffs at competitive rates' }
      ],
      process: [
        { step: 1, title: 'Share Details', description: 'Tell us about your business and energy needs' },
        { step: 2, title: 'Compare Quotes', description: 'We search the market for the best deals' },
        { step: 3, title: 'Choose & Save', description: 'Select your preferred tariff and supplier' },
        { step: 4, title: 'We Handle It', description: 'Sit back while we manage the switch' }
      ],
      contractTypes: {
        title: 'Electricity Contract Types',
        description: 'Choose the right contract structure for your business needs',
        types: [
          {
            name: 'Fixed Rate Contracts',
            description: 'Lock in your unit rates for budget certainty',
            benefits: ['Price protection from market volatility', 'Easy budgeting and forecasting', 'No surprise price increases']
          },
          {
            name: 'Variable Rate Contracts',
            description: 'Flexible pricing that moves with the market',
            benefits: ['Benefit from falling prices', 'No early exit fees', 'Month-to-month flexibility']
          },
          {
            name: 'Pass-Through Contracts',
            description: 'Wholesale prices passed directly to you',
            benefits: ['Full price transparency', 'Potential for significant savings', 'Direct market access']
          },
          {
            name: 'Green Energy Contracts',
            description: '100% renewable electricity for your business',
            benefits: ['Reduce carbon footprint', 'Meet sustainability goals', 'Enhance brand reputation']
          }
        ]
      },
      suppliers: {
        title: 'Our Supplier Network',
        description: 'We work with all major UK energy suppliers',
        list: ['British Gas', 'EDF', 'E.ON', 'Scottish Power', 'SSE', 'Octopus', 'Shell Energy', 'Total Energies', 'Crown Gas', 'Gazprom', 'Haven Power', 'Smartest Energy', 'Opus Energy', 'Yu Energy', 'Pozitive Energy']
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
        },
        {
          question: 'Can I switch if I\'m in a contract?',
          answer: 'Yes! We can arrange your switch for when your current contract ends. We\'ll even set reminders so you never miss a renewal deadline.'
        }
      ]
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Electricity Switching & Procurement",
    "provider": {
      "@type": "Organization",
      "name": "Watt Choice UK Ltd"
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

  // FAQ Schema for rich snippets in search results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.mainContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Combine both schemas for SEO
  const combinedSchema = [structuredData, faqSchema];

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.keywords} />
        <link rel="canonical" href="https://www.wattchoice.co.uk/business-electricity" />
      </Helmet>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920')] bg-cover bg-center opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">Business Electricity</span>
            </nav>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                {content.heroTitle}
              </h1>
            </div>
            
            <p className="text-xl text-gray-700 mb-8">
              {content.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="https://www.app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 inline-flex"
              >
                Get Free Quote <ArrowRight />
              </motion.a>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 border border-gray-300"
              >
                <Phone /> Speak to Expert
              </motion.a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white backdrop-blur rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600">45%</div>
                <div className="text-sm text-gray-600">Average Savings</div>
              </div>
              <div className="bg-white backdrop-blur rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600">30+</div>
                <div className="text-sm text-gray-600">UK Suppliers</div>
              </div>
              <div className="bg-white backdrop-blur rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600">£58k</div>
                <div className="text-sm text-gray-600">Record Saving</div>
              </div>
              <div className="bg-white backdrop-blur rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600">5min</div>
                <div className="text-sm text-gray-600">Quick Quote</div>
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
                Why Choose Watt Choice for Business Electricity?
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
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
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
                  <div className="absolute -top-4 left-6 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
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
      <section className="py-16 px-4 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Current Electricity Market Insights
              </h2>
              <p className="text-gray-700 mb-6">
                The UK electricity market is experiencing significant changes with the transition to renewable energy. 
                Our experts monitor daily market movements to secure optimal rates for your business.
              </p>
              <div className="space-y-4">
                <div className="bg-white backdrop-blur rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-semibold">Average Business Rate</span>
                    <span className="text-green-600 font-bold">24.5p/kWh</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="bg-white backdrop-blur rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-semibold">Green Energy Adoption</span>
                    <span className="text-green-400 font-bold">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
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
                  className="inline-flex items-center gap-2 bg-black text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-800 transition-all"
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Other Services You Might Need</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/business-gas" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Gas</h3>
              <p className="text-gray-600">Compare gas prices and save on heating costs</p>
            </Link>
            <Link to="/business-water" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Water</h3>
              <p className="text-gray-600">Switch water suppliers and reduce bills</p>
            </Link>
            <Link to="/business-broadband" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Broadband</h3>
              <p className="text-gray-600">Fast, reliable internet for your business</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Cut Your Electricity Costs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses saving millions on their energy bills
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 inline-flex"
            >
              Get Your Free Quote <ArrowRight />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              <Phone /> 0161 833 8661
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessElectricityPage;