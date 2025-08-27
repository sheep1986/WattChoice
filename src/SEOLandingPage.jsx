import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, TrendingUp, Award, Users, Clock, 
  CheckCircle, Star, ArrowRight, Phone, Mail, MapPin 
} from 'lucide-react';

const LazyImage = lazy(() => import('./components/LazyImage'));

export const SEOLandingPage = () => {
  useEffect(() => {
    // Preconnect to critical domains
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'dns-prefetch';
    link2.href = 'https://www.google-analytics.com';
    document.head.appendChild(link2);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Watt Utilities - Business Energy Switching Experts",
    "description": "Save up to 45% on business energy bills with UK's leading utility consultants",
    "url": "https://www.wattutilities.co.uk",
    "mainEntity": {
      "@type": "Organization",
      "name": "Watt Utilities UK Ltd",
      "url": "https://www.wattutilities.co.uk",
      "logo": "https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.wattutilities.co.uk"
      }]
    }
  };

  return (
    <>
      <Helmet>
        <title>Watt Utilities - Save 45% on Business Energy Bills | UK Energy Broker</title>
        <meta name="description" content="Expert business energy consultancy saving UK companies up to 45% on electricity, gas, water & telecoms. 900,000+ businesses saved £150M. Free quote in 5 minutes." />
        <meta name="keywords" content="business energy, business electricity, business gas, commercial energy prices, utility switching, energy broker UK, Manchester energy consultant, save business energy costs, compare business electricity, business water switching" />
        <link rel="canonical" href="https://www.wattutilities.co.uk" />
        
        <meta property="og:title" content="Watt Utilities - Save 45% on Business Energy Bills" />
        <meta property="og:description" content="Free business energy comparison from UK's trusted consultants. Get quotes in 5 minutes." />
        <meta property="og:url" content="https://www.wattutilities.co.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wattutilities" />
        <meta name="twitter:title" content="Save 45% on Business Energy Bills - Watt Utilities" />
        <meta name="twitter:description" content="Expert energy consultancy for UK businesses. Free quotes." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section with Schema Markup */}
        <section className="relative overflow-hidden py-20 px-4" itemScope itemType="https://schema.org/Service">
          <meta itemProp="serviceType" content="Business Energy Consultancy" />
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" itemProp="name">
                Save Up to <span className="text-green-400">45%</span> on Business Energy Bills
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto" itemProp="description">
                Join 900,000+ UK businesses who've saved £150 million with our expert energy procurement. 
                Compare business electricity, gas, water & telecoms from 30+ suppliers.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
                >
                  Get Free Quote <ArrowRight />
                </motion.button>
                <motion.a 
                  href="tel:01618338661"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
                >
                  <Phone /> Call 0161 833 8661
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">900,000+</div>
                  <div className="text-gray-300">Businesses Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">£150M</div>
                  <div className="text-gray-300">Total Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">30+</div>
                  <div className="text-gray-300">UK Suppliers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">4.4★</div>
                  <div className="text-gray-300">892 Reviews</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section with Rich Snippets */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Complete Business Utility Management
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Business Electricity',
                  description: 'Compare commercial electricity prices from all major UK suppliers. Save 20-45% with expert negotiation.',
                  link: '/business-electricity'
                },
                {
                  icon: Shield,
                  title: 'Business Gas',
                  description: 'Wholesale gas rates and flexible contracts. Multi-site management and green gas options available.',
                  link: '/business-gas'
                },
                {
                  icon: TrendingUp,
                  title: 'Business Water',
                  description: 'Switch water suppliers since deregulation. Save up to 20% with bill validation and leak detection.',
                  link: '/business-water'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <service.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4" itemProp="description">
                    {service.description}
                  </p>
                  <a 
                    href={service.link} 
                    className="text-green-400 hover:text-green-300 flex items-center gap-1"
                    itemProp="url"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="py-16 px-4" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "How much can I save on business energy bills?",
                a: "Most businesses save between 20-45% on their energy bills. We've helped companies save as much as £58,000 per year through strategic procurement and timing."
              },
              {
                q: "Is your service really free?",
                a: "Yes, our service is completely free to businesses. We receive commission from energy suppliers, which we transparently disclose. You only pay for your energy at the agreed rates."
              },
              {
                q: "How long does switching take?",
                a: "The initial consultation takes just 5 minutes. The complete switching process typically takes 4-6 weeks, depending on your current contract. We handle all the paperwork."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="mb-6 bg-slate-800/50 rounded-lg p-6"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <h3 className="text-xl font-bold text-white mb-2" itemProp="name">
                  {faq.q}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-300" itemProp="text">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section with Local Business Schema */}
        <section className="py-16 px-4 bg-slate-800/50" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="Watt Utilities UK Ltd" />
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Get Your Free Energy Quote Today
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <a href="tel:01618338661" className="text-gray-300 hover:text-green-400" itemProp="telephone">
                  0161 833 8661
                </a>
              </div>
              <div>
                <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href="mailto:hello@wattutilities.co.uk" className="text-gray-300 hover:text-green-400" itemProp="email">
                  hello@wattutilities.co.uk
                </a>
              </div>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  <span itemProp="streetAddress">St Ann's House, 5th Floor</span><br />
                  <span itemProp="addressLocality">Manchester</span> <span itemProp="postalCode">M2 7LP</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};