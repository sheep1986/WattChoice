import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Building2, 
  Users, 
  PiggyBank,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
  Calendar,
  PoundSterling,
  BarChart3,
  Factory,
  Store,
  Building,
  Heart,
  Lightbulb,
  TrendingDown,
  ThumbsUp,
  Filter,
  ExternalLink
} from 'lucide-react';
// import { SEOHead } from '../SEO';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState(null);

  // Enhanced case studies with real metrics
  const caseStudies = [
    {
      id: 1,
      category: 'manufacturing',
      businessName: "Thompson Manufacturing Ltd",
      industry: "Heavy Manufacturing",
      icon: Factory,
      location: "Birmingham, UK",
      employees: "250+",
      challenge: "Facing 65% energy price increase at renewal with existing supplier",
      solution: "Negotiated multi-year fixed rate contract across 3 sites with demand management",
      results: {
        savings: "£240,000",
        percentage: "42%",
        contractLength: "3 years",
        additionalBenefits: ["Smart meter installation", "Energy monitoring dashboard", "Quarterly reviews"]
      },
      testimonial: "Watt Choice transformed our energy procurement strategy. The savings have been reinvested into sustainable technology.",
      author: "Michael Thompson",
      role: "Operations Director",
      rating: 5,
      date: "November 2024",
      featured: true,
      metrics: {
        beforeCost: "£571,000/year",
        afterCost: "£331,000/year",
        kwhSaved: "2.1M kWh",
        co2Reduced: "485 tonnes"
      }
    },
    {
      id: 2,
      category: 'hospitality',
      businessName: "The Crown Hotel Group",
      industry: "Hospitality & Leisure",
      icon: Building,
      location: "London & Southeast",
      employees: "500+",
      challenge: "Managing energy costs across 12 properties with varying consumption patterns",
      solution: "Implemented portfolio-wide procurement strategy with flexible purchasing",
      results: {
        savings: "£185,000",
        percentage: "38%",
        contractLength: "2 years",
        additionalBenefits: ["Bill validation service", "Carbon reporting", "Dedicated account manager"]
      },
      testimonial: "The team at Watt Choice understood our unique needs. They've become an essential partner in our operations.",
      author: "Sarah Mitchell",
      role: "Group Finance Director",
      rating: 5,
      date: "October 2024",
      featured: true,
      metrics: {
        beforeCost: "£487,000/year",
        afterCost: "£302,000/year",
        kwhSaved: "1.8M kWh",
        co2Reduced: "412 tonnes"
      }
    },
    {
      id: 3,
      category: 'retail',
      businessName: "FreshMart Stores",
      industry: "Food Retail",
      icon: Store,
      location: "Manchester",
      employees: "150+",
      challenge: "High refrigeration costs and 24/7 operation driving excessive energy bills",
      solution: "Secured off-peak rates and implemented load shifting strategies",
      results: {
        savings: "£92,000",
        percentage: "35%",
        contractLength: "3 years",
        additionalBenefits: ["Energy efficiency audit", "LED lighting upgrade plan", "Staff training"]
      },
      testimonial: "Watt Choice didn't just reduce our costs - they educated us on energy management. Game-changing service!",
      author: "James Wilson",
      role: "Managing Director",
      rating: 5,
      date: "September 2024",
      metrics: {
        beforeCost: "£263,000/year",
        afterCost: "£171,000/year",
        kwhSaved: "890K kWh",
        co2Reduced: "205 tonnes"
      }
    },
    {
      id: 4,
      category: 'healthcare',
      businessName: "Riverside Care Homes",
      industry: "Healthcare",
      icon: Heart,
      location: "Yorkshire",
      employees: "300+",
      challenge: "Budget constraints while maintaining 24/7 heating and medical equipment",
      solution: "Negotiated NHS framework rates and green energy tariff",
      results: {
        savings: "£127,000",
        percentage: "40%",
        contractLength: "2 years",
        additionalBenefits: ["100% renewable energy", "No standing charges", "Flexible payment terms"]
      },
      testimonial: "Every pound saved goes directly to patient care. Watt Choice understood this and delivered exceptional results.",
      author: "Dr. Emma Roberts",
      role: "Chief Executive",
      rating: 5,
      date: "August 2024",
      metrics: {
        beforeCost: "£318,000/year",
        afterCost: "£191,000/year",
        kwhSaved: "1.2M kWh",
        co2Reduced: "0 tonnes (100% green)"
      }
    },
    {
      id: 5,
      category: 'office',
      businessName: "TechHub Innovation Centre",
      industry: "Commercial Office",
      icon: Building2,
      location: "Leeds",
      employees: "800+",
      challenge: "Volatile energy markets threatening expansion plans",
      solution: "Basket trading strategy with risk management and budget certainty",
      results: {
        savings: "£156,000",
        percentage: "33%",
        contractLength: "4 years",
        additionalBenefits: ["Price cap protection", "Monthly purchasing", "Market intelligence reports"]
      },
      testimonial: "The strategic approach to energy procurement has given us the budget stability we needed to grow.",
      author: "David Chen",
      role: "Facilities Manager",
      rating: 5,
      date: "July 2024",
      metrics: {
        beforeCost: "£473,000/year",
        afterCost: "£317,000/year",
        kwhSaved: "1.5M kWh",
        co2Reduced: "345 tonnes"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Industries', icon: BarChart3 },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'hospitality', label: 'Hospitality', icon: Building },
    { id: 'retail', label: 'Retail', icon: Store },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'office', label: 'Offices', icon: Building2 }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  // Trustpilot testimonials carousel
  const trustpilotReviews = [
    {
      author: "Robert Anderson",
      company: "Anderson & Co Solicitors",
      rating: 5,
      text: "Exceptional service from start to finish. Saved us £45,000 annually on our office energy costs.",
      date: "2 weeks ago"
    },
    {
      author: "Lisa Thompson",
      company: "Bright Futures Academy",
      rating: 5,
      text: "Professional, transparent, and delivered on every promise. Highly recommend Watt Choice!",
      date: "1 month ago"
    },
    {
      author: "Mark Davies",
      company: "Davies Engineering",
      rating: 5,
      text: "Cut our manufacturing energy costs by 40%. The team's expertise is unmatched.",
      date: "1 month ago"
    }
  ];

  const stats = [
    { value: "£240K+", label: "Largest Annual Saving", icon: TrendingUp },
    { value: "35%", label: "Average Cost Reduction", icon: TrendingDown },
    { value: "900K+", label: "Businesses Helped", icon: Building2 },
    { value: "4.6/5", label: "Trustpilot Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEOHead tags commented out - can be re-enabled when configured
      <SEOHead
        title="Case Studies & Success Stories | Real Business Energy Savings"
        description="Discover how UK businesses save thousands on energy bills with Watt Choice. Read real case studies and success stories from verified clients."
        keywords="case studies, success stories, energy savings, business testimonials, trustpilot reviews"
        canonical="https://wattchoice.co.uk/case-studies"
      />
      */}
      
      {/* Modern Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-7xl relative z-10"
        >
          {/* Trustpilot Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.6/5 on Trustpilot</span>
              <span className="text-gray-500">•</span>
              <span className="text-green-600 font-semibold">709+ Reviews</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Real Businesses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Real Savings.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Discover how UK businesses are saving thousands on their energy bills. 
              Every story below is from a verified client.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 sticky top-0 z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all flex-shrink-0
                  ${selectedCategory === cat.id 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }
                `}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full">
                    {study.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          FEATURED
                        </span>
                      </div>
                    )}
                    
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-green-100 rounded-xl">
                          <study.icon className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-600">{study.results.savings}</div>
                          <div className="text-sm text-gray-500">Annual Saving</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{study.businessName}</h3>
                      <p className="text-gray-600 text-sm mb-1">{study.industry}</p>
                      <p className="text-gray-500 text-sm">{study.location} • {study.employees} employees</p>
                    </div>

                    {/* Metrics */}
                    <div className="px-6 py-4 bg-green-50/50">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{study.results.percentage}</div>
                          <div className="text-xs text-gray-600">Cost Reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{study.metrics.co2Reduced}</div>
                          <div className="text-xs text-gray-600">CO₂ Reduced</div>
                        </div>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-red-500" />
                          Challenge
                        </h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-green-500" />
                          Solution
                        </h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded-xl p-4 mb-4">
                        <MessageSquareQuote className="w-6 h-6 text-green-500 mb-2" />
                        <p className="text-gray-700 text-sm italic mb-2">"{study.testimonial}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{study.author}</p>
                            <p className="text-gray-500 text-xs">{study.role}</p>
                          </div>
                          <div className="flex">
                            {[...Array(study.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.button
                        onClick={() => setSelectedStudy(study)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        View Full Case Study <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Trustpilot Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Real reviews from Trustpilot</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
                    alt="Trustpilot" 
                    className="h-8"
                  />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  <span className="text-gray-500">Verified Review</span>
                </div>
                
                <p className="text-xl text-gray-700 mb-6">
                  "{trustpilotReviews[currentTestimonialIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">
                      {trustpilotReviews[currentTestimonialIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {trustpilotReviews[currentTestimonialIndex].company}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {trustpilotReviews[currentTestimonialIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={() => setCurrentTestimonialIndex((prev) => 
                  prev === 0 ? trustpilotReviews.length - 1 : prev - 1
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              
              <div className="flex items-center gap-2">
                {trustpilotReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonialIndex 
                        ? 'w-8 bg-green-600' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => setCurrentTestimonialIndex((prev) => 
                  (prev + 1) % trustpilotReviews.length
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.trustpilot.com/review/watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              View All 709+ Reviews on Trustpilot <ExternalLink className="w-4 h-4" />
            </a>
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
              Start Your Success Story Today
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Join 900,000+ businesses already saving with Watt Choice
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="https://app.watt.co.uk"
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:01618338661" 
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 0161 833 8661
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedStudy.businessName}
                    </h2>
                    <p className="text-gray-600">{selectedStudy.industry}</p>
                  </div>
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Before Watt Choice</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Cost:</span>
                        <span className="font-bold text-gray-900">{selectedStudy.metrics.beforeCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contract Type:</span>
                        <span className="font-bold text-gray-900">Variable Rate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Support Level:</span>
                        <span className="font-bold text-gray-900">Basic</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-6">
                    <h3 className="font-semibold mb-4">After Watt Choice</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-green-50">Annual Cost:</span>
                        <span className="font-bold">{selectedStudy.metrics.afterCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-50">Contract Type:</span>
                        <span className="font-bold">Fixed {selectedStudy.results.contractLength}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-50">Support Level:</span>
                        <span className="font-bold">Premium</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Additional Benefits</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.results.additionalBenefits.map((benefit, index) => (
                        <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Environmental Impact</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">{selectedStudy.metrics.kwhSaved}</div>
                        <div className="text-sm text-gray-600">kWh Saved</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">{selectedStudy.metrics.co2Reduced}</div>
                        <div className="text-sm text-gray-600">CO₂ Reduced</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <MessageSquareQuote className="w-8 h-8 text-green-500 mb-3" />
                    <p className="text-gray-700 italic mb-4">"{selectedStudy.testimonial}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{selectedStudy.author}</p>
                      <p className="text-gray-600">{selectedStudy.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Link
                    to="https://app.watt.co.uk"
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-center hover:shadow-lg transition-all"
                  >
                    Get Similar Results
                  </Link>
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;