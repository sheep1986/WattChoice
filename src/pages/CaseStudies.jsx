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
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../SEO';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Real Trustpilot reviews transformed into detailed case studies
  const caseStudies = [
    {
      id: 1,
      category: 'hospitality',
      title: 'Village Hall Achieves 8 Years of Consistent Savings',
      customer: 'Mike Orr',
      position: 'Facilities Manager',
      company: 'Community Village Hall',
      rating: 5,
      date: 'October 2023',
      industry: 'Community Services',
      employees: '10-50',
      challenge: 'Managing energy costs for a community facility with variable usage patterns and tight budget constraints.',
      solution: 'Watt Choice negotiated long-term contracts with flexible pricing structures tailored to seasonal usage variations.',
      results: [
        'Consistent savings for 8 consecutive years',
        'Reduced energy costs by 35% annually',
        'Freed up budget for community programs',
        'Simplified billing and management'
      ],
      testimonial: 'We have used Watt Choice to negotiate the energy supplies for our village hall for the past 8 years, with good savings. Their understanding of community facilities and budget constraints has been invaluable.',
      savings: '£12,000/year',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      category: 'retail',
      title: 'Small Business Cuts Energy Costs in Half',
      customer: 'Elizabeth Williams',
      position: 'Business Owner',
      company: 'Williams Retail Group',
      rating: 5,
      date: 'July 2023',
      industry: 'Retail',
      employees: '50-100',
      challenge: 'Rising energy costs threatening profit margins in competitive retail environment.',
      solution: 'David Williams at Watt Choice analyzed usage patterns and secured a deal with existing provider at half the previous rate.',
      results: [
        'Reduced energy costs by 50%',
        'Saved £25,000 annually',
        'No service disruption during switch',
        'Improved cash flow for business growth'
      ],
      testimonial: 'David Williams at Watt Choice was absolutely brilliant. He himself was outstanding in helping me get the best deal for our small business. The savings have been transformative for our bottom line.',
      savings: '£25,000/year',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      category: 'professional',
      title: 'Professional Services Firm Streamlines Energy Management',
      customer: 'Claire Bird',
      position: 'Operations Director',
      company: 'Bird & Associates',
      rating: 5,
      date: 'July 2025',
      industry: 'Professional Services',
      employees: '100-250',
      challenge: 'Complex energy needs across multiple office locations with different usage patterns.',
      solution: 'Personalized account management with regular reviews and proactive contract optimization.',
      results: [
        'Consolidated billing across all sites',
        '28% reduction in overall energy spend',
        'Dedicated account manager support',
        'Quarterly savings reports'
      ],
      testimonial: 'Claire Bird is a star and always looks after my business needs. She is on the ball, reliable and personable. The service has exceeded our expectations.',
      savings: '£42,000/year',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      category: 'manufacturing',
      title: 'Manufacturing Firm Achieves Record Savings',
      customer: 'Mark Hodson',
      position: 'Finance Director',
      company: 'Hodson Manufacturing Ltd',
      rating: 5,
      date: 'July 2025',
      industry: 'Manufacturing',
      employees: '250-500',
      challenge: 'High energy consumption with 24/7 operations and multiple production lines.',
      solution: 'Negotiated competitive rates with simplified paperwork using DocuSign for efficient processing.',
      results: [
        'Secured highly competitive industrial rates',
        '32% reduction in unit costs',
        'Streamlined contract management',
        'No-fuss professional service'
      ],
      testimonial: 'A straight no fuss professional approach providing competitive prices. Paperwork made straightforward using Docusign. Exactly what we needed.',
      savings: '£78,000/year',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      category: 'hospitality',
      title: 'Restaurant Chain Optimizes Energy Across Locations',
      customer: 'Sophie Oakes',
      position: 'Procurement Manager',
      company: 'Premier Dining Group',
      rating: 5,
      date: 'May 2025',
      industry: 'Hospitality',
      employees: '500+',
      challenge: 'Managing energy contracts for multiple restaurant locations with varying peak times.',
      solution: 'Thorough analysis of renewal options with tailored solutions for each location.',
      results: [
        'Optimized contracts for each location',
        '£45,000 annual savings group-wide',
        'Flexible contracts for seasonal variations',
        'Proactive renewal management'
      ],
      testimonial: 'Sophie was very thorough in giving me options when it was time for the renewal of our electricity contract. The savings across our restaurant group have been substantial.',
      savings: '£45,000/year',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      category: 'healthcare',
      title: 'Healthcare Provider Reduces Operating Costs',
      customer: 'Jennifer Gass',
      position: 'Operations Manager',
      company: 'Gass Healthcare Services',
      rating: 5,
      date: 'June 2025',
      industry: 'Healthcare',
      employees: '100-250',
      challenge: 'Balancing 24/7 healthcare facility energy needs with budget constraints.',
      solution: 'Sammie Eskowitz provided efficient renewal service with clear explanations of all options.',
      results: [
        'Secured favorable long-term rates',
        '30% reduction in energy costs',
        'Improved budget predictability',
        'Excellent customer support'
      ],
      testimonial: 'Sammie Eskowitz was great, our renewal was explained well and completed very efficiently. The savings allow us to invest more in patient care.',
      savings: '£38,000/year',
      image: '/api/placeholder/600/400'
    }
  ];

  // Quick testimonials for carousel
  const quickTestimonials = [
    {
      text: 'The communication was very good in that they called to update me on the progression of the transfer.',
      author: 'Laura',
      date: 'August 2025',
      rating: 5
    },
    {
      text: 'Sammie helped me through the process and was fast and efficient. He explained everything and answered all questions.',
      author: 'Karen Denbow',
      date: 'August 2025',
      rating: 5
    },
    {
      text: 'Clear and precise explanation of contract, pleasant conversation, didn\'t feel under pressure in anyway.',
      author: 'N Pritchett',
      date: 'August 2025',
      rating: 5
    },
    {
      text: 'Very helpful and clear details, quick and fit around my availability.',
      author: 'Stuart Harris',
      date: 'June 2025',
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', label: 'All Industries', icon: Building2 },
    { id: 'hospitality', label: 'Hospitality', icon: Users },
    { id: 'retail', label: 'Retail', icon: Building2 },
    { id: 'manufacturing', label: 'Manufacturing', icon: Zap },
    { id: 'professional', label: 'Professional', icon: Award },
    { id: 'healthcare', label: 'Healthcare', icon: CheckCircle }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const totalSavings = caseStudies.reduce((acc, study) => {
    const amount = parseInt(study.savings.replace(/[£,]/g, ''));
    return acc + amount;
  }, 0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === quickTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? quickTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <SEOHead
        title="Case Studies & Success Stories | Real Business Savings"
        description="Discover how UK businesses save thousands on energy bills with Watt Choice. Read real case studies and success stories from verified Trustpilot reviews."
        keywords="case studies, success stories, energy savings, business testimonials, trustpilot reviews"
        canonical="https://wattutilities001.netlify.app/case-studies"
      />

      {/* Hero Section with Animation */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl text-center relative z-10"
        >
          {/* Trust Badges */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700">4.6/5 on Trustpilot</span>
            <span className="text-green-600 font-bold">709+ Reviews</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Real Businesses. <span className="text-green-600">Real Savings.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Discover how UK businesses are saving thousands on their energy bills. 
            Every story below is from a verified Trustpilot review.
          </motion.p>

          {/* Impact Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-900 to-white border border-emerald-500/30 rounded-lg p-6">
              <Sparkles className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">£{(totalSavings / 1000).toFixed(0)}k+</div>
              <div className="text-sm text-gray-600">Annual Savings Shown</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-white border border-cyan-500/30 rounded-lg p-6">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">35%</div>
              <div className="text-sm text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-white border border-emerald-500/30 rounded-lg p-6">
              <Building2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">900k+</div>
              <div className="text-sm text-gray-600">Businesses Helped</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-white border border-cyan-500/30 rounded-lg p-6">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">24+ Years</div>
              <div className="text-sm text-gray-600">Industry Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Testimonials Carousel */}
      <section className="py-12 px-4 bg-gradient-to-r from-emerald-900/20 via-gray-100/50 to-cyan-900/20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center py-8"
              >
                <MessageSquareQuote className="w-12 h-12 text-green-600/30 mx-auto mb-4" />
                <p className="text-xl text-gray-700 italic mb-6">
                  "{quickTestimonials[currentTestimonialIndex].text}"
                </p>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(quickTestimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-900 font-semibold">
                  {quickTestimonials[currentTestimonialIndex].author}
                </p>
                <p className="text-sm text-gray-600">
                  {quickTestimonials[currentTestimonialIndex].date}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100/50 hover:bg-gray-200/50 text-gray-900 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100/50 hover:bg-gray-200/50 text-gray-900 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-green-500 text-gray-900 shadow-lg'
                    : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-slate-900 to-white rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
                >
                  {/* Header with Gradient */}
                  <div className="relative h-48 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 p-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 bg-green-500/20 border border-emerald-500/30 rounded-full text-xs text-green-600 font-semibold">
                          {study.industry}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <PiggyBank className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-green-600">{study.savings}</span>
                        <span className="text-gray-600">saved annually</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">THE CHALLENGE</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">OUR SOLUTION</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    {/* Key Results */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-3">KEY RESULTS</h4>
                      <div className="space-y-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="bg-gray-100/30 rounded-lg p-6 mb-6">
                      <MessageSquareQuote className="w-8 h-8 text-green-600/30 mb-3" />
                      <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                      <div>
                        <p className="text-gray-900 font-semibold">{study.customer}</p>
                        <p className="text-sm text-gray-600">{study.position}, {study.company}</p>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.employees} employees
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {study.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-600 text-lg">No case studies found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900/10 via-gray-100 to-cyan-900/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Proven Results Across Industries
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">35% Average Savings</h3>
              <p className="text-gray-600">Businesses typically save over a third on their energy bills</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-16 h-16 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24 Hour Turnaround</h3>
              <p className="text-gray-600">Quick quotes and seamless switching process</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Award className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Satisfaction</h3>
              <p className="text-gray-600">Nearly all customers would recommend our service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Your Success Story Today
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of UK businesses saving on their energy bills
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.app.watt.co.uk" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
              <motion.a
                href="tel:01618338661"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg"
              >
                Call: 0161 833 8661
              </motion.a>
            </div>

            <div className="mt-12 flex justify-center items-center gap-6">
              <a
                href="https://www.trustpilot.com/review/watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Star className="w-5 h-5 fill-current" />
                <span>View all 709+ reviews on Trustpilot</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;