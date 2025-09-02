import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Flame, 
  Droplet, 
  Wifi, 
  Phone, 
  Building2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  PoundSterling
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Zap,
      title: "Business Electricity",
      description: "Compare electricity tariffs from 30+ suppliers",
      features: ["Fixed & flexible contracts", "Green energy options", "Half-hourly meter support"],
      savings: "Save up to 45%",
      link: "/business-electricity",
      color: "text-yellow-400"
    },
    {
      icon: Flame,
      title: "Business Gas",
      description: "Secure competitive gas rates for your business",
      features: ["Long-term price security", "Flexible purchasing", "Multi-site discounts"],
      savings: "Save up to 40%",
      link: "/business-gas",
      color: "text-orange-400"
    },
    {
      icon: Droplet,
      title: "Business Water",
      description: "Switch water supplier and reduce costs",
      features: ["Bill validation", "Leak detection", "Consolidated billing"],
      savings: "Save up to 20%",
      link: "/business-water",
      color: "text-blue-400"
    },
    {
      icon: Wifi,
      title: "Business Broadband",
      description: "Ultra-fast connectivity solutions",
      features: ["Leased lines", "FTTP/FTTC", "99.9% uptime SLA"],
      savings: "Better speeds, better prices",
      link: "/business-broadband",
      color: "text-purple-400"
    },
    {
      icon: Phone,
      title: "Business Telecoms",
      description: "Modern phone systems and unified comms",
      features: ["VoIP systems", "SIP trunks", "Mobile packages"],
      savings: "Save up to 50%",
      link: "/business-telecoms",
      color: "text-green-400"
    },
    {
      icon: Building2,
      title: "Large Business",
      description: "Specialist support for corporate clients",
      features: ["Portfolio management", "Flexible purchasing", "Dedicated account team"],
      savings: "Bespoke solutions",
      link: "/large-business",
      color: "text-amber-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Helmet>
        <title>Business Utility Services | Electricity, Gas, Water & More | Watt Utilities</title>
        <meta name="description" content="Complete business utility management services. Compare electricity, gas, water, broadband and telecoms from 30+ suppliers. Save up to 45% with expert procurement." />
        <meta name="keywords" content="business utilities, business energy, commercial electricity, business gas, water supplier switch, business broadband, telecoms, utility management" />
        <link rel="canonical" href="https://www.wattutilities.co.uk/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Business Utility Services | Save up to 45% | Watt Utilities" />
        <meta property="og:description" content="One provider for all your business utilities. Expert procurement across electricity, gas, water, broadband and telecoms. Free service, maximum savings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wattutilities.co.uk/services" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Utility Services | Watt Utilities" />
        <meta name="twitter:description" content="Compare and switch all business utilities in one place. Save up to 45% with expert procurement." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Utility Management Services",
            "provider": {
              "@type": "Organization",
              "name": "Watt Utilities",
              "url": "https://www.wattutilities.co.uk"
            },
            "serviceType": [
              "Business Electricity Supply",
              "Business Gas Supply",
              "Business Water Supply",
              "Business Broadband",
              "Business Telecoms",
              "Corporate Energy Management"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "GBP",
              "price": "0",
              "description": "Free utility comparison and switching service"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete utility management for UK businesses. One provider, all your utilities, maximum savings.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">45%</div>
              <div className="text-sm text-gray-400">Max Savings</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-sm text-gray-400">Suppliers</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5 Min</div>
              <div className="text-sm text-gray-400">Quote Time</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
              <PoundSterling className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">£0</div>
              <div className="text-sm text-gray-400">Our Fee</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="h-full bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500 hover:bg-slate-800/70 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <service.icon className={`w-10 h-10 ${service.color}`} />
                      <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-1 rounded">
                        {service.savings}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Saving?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get competitive quotes from 30+ suppliers in minutes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.app.watt.co.uk" target="_blank" rel="noopener noreferrer">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 transition-colors">
                Get Free Quotes <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            <a href="tel:01618338661" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg border border-slate-700 flex items-center gap-2 transition-colors inline-flex">
              <Phone className="w-5 h-5" />
              Call 0161 833 8661
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;