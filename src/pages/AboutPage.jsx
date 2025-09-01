import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BusinessQuoteForm from '../components/BusinessQuoteForm';

const AboutPage = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Family Values",
      description: "Family-run since 2000, we treat every client like family, delivering personalized service with genuine care."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Platinum standard broker with complete transparency. ICO registered and TPI Code compliant."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Average savings of £350+ per business. We don't stop until we've found you the best deal."
    },
    {
      icon: Users,
      title: "People First",
      description: "Investors in People certified. Building a company our employees are proud to work for."
    }
  ];

  const achievements = [
    { number: "900,000+", label: "Businesses Served", icon: Building2 },
    { number: "£150M", label: "Total Savings", icon: PoundSterling },
    { number: "£350+", label: "Average Saving", icon: TrendingUp },
    { number: "5 min", label: "Quote Time", icon: Clock }
  ];

  const timeline = [
    { year: "2000", event: "Founded in Manchester", description: "Started with a simple mission: save businesses money on utilities" },
    { year: "2010", event: "100,000 Businesses Milestone", description: "Reached our first major milestone of helping 100,000 UK businesses" },
    { year: "2015", event: "Platinum Broker Status", description: "Achieved platinum standard with major UK energy suppliers" },
    { year: "2020", event: "£100M Savings Achieved", description: "Celebrated £100 million in total customer savings" },
    { year: "2023", event: "Industry Awards", description: "Won two prestigious industry awards for excellence in energy consulting" },
    { year: "2024", event: "900,000+ Businesses", description: "Approaching 1 million businesses served with £150M+ saved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Helmet>
        <title>About Watt Utilities | Family-Run Energy Consultants Since 2000</title>
        <meta name="description" content="Learn about Watt Utilities - Manchester's trusted business energy consultants since 2000. 900,000+ businesses served, £150M saved. Investors in People certified." />
        <meta name="keywords" content="about watt utilities, business energy consultants manchester, family-run energy broker, utility management company UK" />
        <link rel="canonical" href="https://www.wattutilities.co.uk/company" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Watt Utilities | Your Trusted Energy Partner Since 2000" />
        <meta property="og:description" content="Family-run business energy consultancy helping 900,000+ UK businesses save £150M on utilities. Platinum standard broker." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wattutilities.co.uk/company" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Watt Utilities",
            "url": "https://www.wattutilities.co.uk",
            "logo": "https://www.wattutilities.co.uk/logo.png",
            "foundingDate": "2000",
            "founders": [{
              "@type": "Person",
              "name": "Peter Hunter",
              "jobTitle": "Director"
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "St Ann's House, 5th Floor, St Ann's Square",
              "addressLocality": "Manchester",
              "postalCode": "M2 7LP",
              "addressCountry": "GB"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44-161-833-8661",
              "contactType": "customer service",
              "email": "hello@watt.co.uk"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 50
            },
            "description": "Family-run commercial energy consultancy helping UK businesses save on utilities since 2000",
            "award": "Industry Excellence Awards 2023",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "709",
              "bestRating": "5"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Energy Partner Since 2000
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a family-run Manchester business with a simple mission: to save our customers money 
              while building a company our employees are proud to work for.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
              >
                <achievement.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Director Quote */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-6xl text-emerald-400 leading-none">"</div>
              <div>
                <p className="text-lg text-gray-300 italic mb-4">
                  It's part of everyday human nature to source the best deals. At Watt, we've made it our 
                  business to do this for you - leveraging our market knowledge and buying power to secure 
                  the best utility contracts for businesses across the UK.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    PH
                  </div>
                  <div>
                    <p className="text-white font-semibold">Peter Hunter</p>
                    <p className="text-sm text-gray-400">Director & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-500/30"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-slate-800 border border-slate-700 rounded-lg p-6 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="text-emerald-400 font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700"
              >
                <value.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Accreditations & Awards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Investors in People</h3>
              <p className="text-gray-400">Certified for our commitment to employee development</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">ICO Registered</h3>
              <p className="text-gray-400">Fully compliant with data protection regulations</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <Star className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">TPI Code Compliant</h3>
              <p className="text-gray-400">Adhering to industry best practices</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-8 border border-emerald-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🏆 2023 Industry Excellence Awards Winner
            </h3>
            <p className="text-gray-300">
              Recently awarded two prestigious industry awards for outstanding service and innovation in energy consulting
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why 900,000+ Businesses Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <Zap className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Extensive Market Knowledge</h3>
              <p className="text-gray-400">24+ years navigating the UK energy market with deep supplier relationships</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Virtual Buying Power</h3>
              <p className="text-gray-400">Leverage collective negotiation strength of 900,000+ businesses</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Platinum Standard Service</h3>
              <p className="text-gray-400">Recognized as platinum broker by leading UK energy suppliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Watt Family
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference of working with a family business that truly cares about your success
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              onClick={() => setShowQuoteForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a href="tel:01618338661" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg border border-slate-700 flex items-center gap-2 inline-flex">
              <Phone className="w-5 h-5" />
              Call 0161 833 8661
            </a>
          </div>
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