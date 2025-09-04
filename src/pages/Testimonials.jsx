import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, CheckCircle, TrendingUp } from 'lucide-react';
import { SEOHead, createReviewSchema } from '../SEO';

const Testimonials = () => {
  const testimonials = [
    {
      author: "John Davies",
      position: "Operations Director",
      company: "Manchester Manufacturing Ltd",
      rating: 5,
      date: "2024-01-15",
      text: "Watt Choice saved us £47,000 per year on electricity across our three sites. Their team handled everything professionally and we experienced zero downtime during the switch. Highly recommended!",
      savings: "£47,000/year",
      category: "Manufacturing"
    },
    {
      author: "Sarah Thompson",
      position: "Finance Manager",
      company: "Premier Hotels Group",
      rating: 5,
      date: "2024-01-10",
      text: "After years of overpaying, Watt Choice negotiated a 35% reduction in our gas and electricity costs. The process was seamless and their ongoing support is exceptional.",
      savings: "35% reduction",
      category: "Hospitality"
    },
    {
      author: "Michael Chen",
      position: "CEO",
      company: "TechHub Solutions",
      rating: 5,
      date: "2023-12-20",
      text: "The team at Watt Choice didn't just save us money on energy - they sorted our broadband and telecoms too. One supplier relationship for everything has simplified our operations significantly.",
      savings: "£18,500/year",
      category: "Technology"
    },
    {
      author: "Emma Wilson",
      position: "Facilities Manager",
      company: "Greenfield Care Homes",
      rating: 5,
      date: "2023-12-15",
      text: "Managing energy for 12 care homes was a nightmare until Watt Choice took over. They secured us a basket contract that's saved us over £85,000 annually. Fantastic service!",
      savings: "£85,000/year",
      category: "Healthcare"
    },
    {
      author: "David Roberts",
      position: "Owner",
      company: "Roberts & Sons Distribution",
      rating: 5,
      date: "2023-11-28",
      text: "As a family business, every penny counts. Watt Choice reduced our energy costs by 42% and the savings have allowed us to invest in new equipment and grow the business.",
      savings: "42% reduction",
      category: "Distribution"
    },
    {
      author: "Lisa Anderson",
      position: "Procurement Director",
      company: "National Retail Chain",
      rating: 5,
      date: "2023-11-20",
      text: "We've worked with several energy brokers over the years, but Watt Choice stands out. Their market knowledge and negotiation skills secured us rates we didn't think were possible.",
      savings: "£125,000/year",
      category: "Retail"
    },
    {
      author: "James Mitchell",
      position: "CFO",
      company: "Industrial Solutions UK",
      rating: 5,
      date: "2023-11-10",
      text: "The fully funded solar solution has been a game-changer. No upfront costs, immediate savings, and we've reduced our carbon footprint by 40%. Win-win all around.",
      savings: "40% carbon reduction",
      category: "Industrial"
    },
    {
      author: "Rachel Green",
      position: "Operations Manager",
      company: "Fresh Foods Wholesale",
      rating: 5,
      date: "2023-10-25",
      text: "Watt Choice monitors our contracts and always contacts us before renewal. We never worry about rolling onto expensive out-of-contract rates anymore. Peace of mind is priceless.",
      savings: "£31,000/year",
      category: "Wholesale"
    }
  ];

  const stats = [
    { value: "900k+", label: "Businesses Helped" },
    { value: "£150M", label: "Total Saved" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "98%", label: "Would Recommend" }
  ];

  const reviewSchema = createReviewSchema(testimonials);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <SEOHead
        title="Customer Testimonials & Reviews"
        description="Read what our customers say about Watt Choice. Real reviews from businesses that have saved thousands on their energy bills."
        keywords="customer reviews, testimonials, energy broker reviews, business energy savings"
        canonical="https://wattutilities001.netlify.app/testimonials"
        structuredData={reviewSchema}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Success Stories
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Join 900,000+ businesses saving millions on their utility bills
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 border border-slate-800 rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-white rounded-lg p-8 border border-slate-800 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-green-600/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                {/* Savings Badge */}
                {testimonial.savings && (
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-semibold">Saved: {testimonial.savings}</span>
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-gray-900 font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-green-600">{testimonial.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Businesses Trust Us
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: "Fully Independent", desc: "We work for you, not suppliers" },
              { icon: Building2, title: "All Business Sizes", desc: "From SMEs to large corporations" },
              { icon: TrendingUp, title: "Proven Results", desc: "£150M saved for customers" },
              { icon: Star, title: "5-Star Service", desc: "98% customer satisfaction" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Start saving on your business utilities today
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.app.watt.co.uk" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg"
              >
                Get Your Free Quote
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
        </div>
      </section>
    </div>
  );
};

export default Testimonials;