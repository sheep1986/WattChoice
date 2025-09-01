import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Flame, ArrowRight, CheckCircle, TrendingUp, Shield, Building2,
  PoundSterling, Clock, Award, Users, Phone, FileText, BarChart3,
  Target, AlertCircle, Gauge, Factory
} from 'lucide-react';
import { SEOHead } from '../SEO';
import { serviceContent } from '../content/ServiceContent';
// import { BreadcrumbLinks, RelatedServicesWidget, CTALinksSection } from '../components/InternalLinks';

const BusinessGasPage = () => {
  const content = serviceContent.gas;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Gas Procurement & Switching",
    "provider": {
      "@type": "Organization",
      "name": "Watt Utilities UK Ltd"
    },
    "description": content.metaDescription,
    "areaServed": "United Kingdom"
  };

  return (
    <>
      <SEOHead 
        title={content.title}
        description={content.metaDescription}
        keywords={content.keywords}
        canonical="https://www.wattutilities.co.uk/business-gas"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-orange-900 via-slate-800 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1920')] bg-cover bg-center opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          {/* <BreadcrumbLinks 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Business Gas' }
            ]}
            className="mb-8"
          /> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-12 h-12 text-orange-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                {content.heroTitle}
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 mb-8">
              {content.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
              >
                Compare Gas Prices <ArrowRight />
              </motion.button>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
              >
                <Phone /> Call for Expert Advice
              </motion.a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-400">40%</div>
                <div className="text-sm text-gray-300">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-400">25+</div>
                <div className="text-sm text-gray-300">Gas Suppliers</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-300">Free Service</div>
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
                Expert Business Gas Procurement Since 2000
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                {content.mainContent.introduction}
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <p className="text-slate-700">
                  <strong>Current Market Alert:</strong> Gas prices have stabilized after winter volatility. 
                  Lock in rates now before expected summer maintenance price increases.
                </p>
              </div>
              <motion.a 
                href="https://www.app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Get Your Gas Quote <ArrowRight />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600" 
                alt="Industrial gas infrastructure"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">£42M</div>
                <div className="text-sm">Saved for Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Why Businesses Choose Us for Gas Procurement
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.mainContent.benefits.map((benefit, index) => {
              const icons = {
                'trending-down': TrendingUp,
                'shield': Shield,
                'users': Users,
                'clock': Clock
              };
              const Icon = icons[benefit.icon] || Flame;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
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

      {/* Gas Market Analysis */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                UK Gas Market Intelligence
              </h2>
              <p className="text-gray-200 mb-6">
                Our team monitors wholesale gas markets daily, tracking NBP prices, storage levels, 
                and global LNG movements to secure optimal rates for your business.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">NBP Day Ahead</span>
                    <span className="text-orange-400 font-bold">68.5p/therm</span>
                  </div>
                  <div className="text-xs text-gray-400">-2.3% from last week</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">UK Storage Level</span>
                    <span className="text-green-400 font-bold">82%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Average Business Rate</span>
                    <span className="text-orange-400 font-bold">7.2p/kWh</span>
                  </div>
                  <div className="text-xs text-gray-400">Fixed 12-month contract</div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                <Gauge className="inline w-6 h-6 mr-2 text-orange-500" />
                Your Gas Usage Analysis
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                alt="Gas consumption analysis dashboard"
                className="rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Annual Consumption:</span>
                  <span className="font-bold">500,000 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Current Rate:</span>
                  <span className="font-bold">8.9p/kWh</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Potential Savings:</span>
                  <span className="font-bold">£8,500/year</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.mainContent.contractTypes.types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-orange-500"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {type.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Specialist Gas Solutions by Industry
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: 'Manufacturing', desc: 'High-volume contracts with flexible purchasing' },
              { icon: Building2, title: 'Hospitality', desc: 'Seasonal adjustments for hotels & restaurants' },
              { icon: Users, title: 'Healthcare', desc: 'Priority service & guaranteed supply contracts' },
              { icon: Shield, title: 'Education', desc: 'Budget-friendly fixed rates for schools' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-orange-100 to-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Your Journey to Lower Gas Costs
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300"></div>
            
            {content.mainContent.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-lg p-6 shadow-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Common Questions About Business Gas Switching
          </h2>
          
          <div className="space-y-6">
            {content.mainContent.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
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

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-900 to-red-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[1,2,3,4,5].map((star) => (
                <Award key={star} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-white mb-6 italic">
              "Watt Utilities saved us £32,000 on our annual gas bill. Their market knowledge 
              and negotiation skills are exceptional. Highly recommended!"
            </blockquote>
            <cite className="text-orange-300">
              - David Thompson, Operations Director, Birmingham Steel Works
            </cite>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <RelatedServicesWidget currentPage="/business-gas" />
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Saving on Business Gas Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get competitive quotes from 25+ suppliers in minutes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 inline-flex"
            >
              Get Free Gas Quote <ArrowRight />
            </motion.a>
            <motion.a
              href="tel:01618338661"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/20 hover:bg-black/30 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 backdrop-blur"
            >
              <Phone /> 0161 833 8661
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessGasPage;