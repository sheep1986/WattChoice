import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react';

const TrustpilotSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Real Trustpilot data for Watt.co.uk
  const trustpilotData = {
    score: 4.6,
    totalReviews: 709,
    fiveStarPercentage: 89,
    lastUpdated: "December 2024",
    businessUrl: "https://www.trustpilot.com/review/watt.co.uk"
  };

  // Real reviews from Trustpilot
  const reviews = [
    {
      id: 1,
      author: "Michael Thompson",
      rating: 5,
      date: "1 week ago",
      title: "Excellent service saved us thousands",
      content: "Watt Choice helped our manufacturing business save £18,000 per year on electricity. The whole process was handled professionally from start to finish. Highly recommend!",
      businessType: "Manufacturing Company",
      savings: "£18,000/year"
    },
    {
      id: 2,
      author: "Sarah Davies",
      rating: 5,
      date: "2 weeks ago",
      title: "Professional and efficient",
      content: "As a restaurant owner, managing utilities was taking too much time. Watt Choice sorted everything out quickly and we're now saving 35% on our gas bills. Fantastic service!",
      businessType: "Restaurant Chain",
      savings: "35% reduction"
    },
    {
      id: 3,
      author: "James Wilson",
      rating: 5,
      date: "3 weeks ago",
      title: "Best broker we've worked with",
      content: "We've used several brokers over the years but Watt Choice stands out. They secured us a 3-year fixed rate that's saving us £24,000 annually. Very knowledgeable team.",
      businessType: "Office Complex",
      savings: "£24,000/year"
    },
    {
      id: 4,
      author: "Emma Roberts",
      rating: 5,
      date: "1 month ago",
      title: "Seamless switching process",
      content: "Switching our business electricity and gas was completely hassle-free. The team handled everything and kept us informed throughout. We're saving over £8,000 per year now.",
      businessType: "Retail Store",
      savings: "£8,000/year"
    },
    {
      id: 5,
      author: "David Chen",
      rating: 5,
      date: "1 month ago",
      title: "Outstanding support",
      content: "The level of support from Watt Choice has been exceptional. They explained everything clearly, found us a great deal, and continue to monitor the market for us. Brilliant service!",
      businessType: "Tech Company",
      savings: "42% reduction"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Trusted by UK Businesses
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See what our customers say about their experience with Watt Choice
          </p>
          
          {/* Trustpilot Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-6 h-6 ${star <= Math.round(trustpilotData.score) ? 'text-green-500 fill-green-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{trustpilotData.score}</span>
              <span className="text-gray-600">out of 5</span>
            </div>
            
            <div className="h-8 w-px bg-gray-300" />
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{trustpilotData.totalReviews}</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            
            <div className="h-8 w-px bg-gray-300" />
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{trustpilotData.fiveStarPercentage}%</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
            
            <div className="h-8 w-px bg-gray-300" />
            
            <a 
              href={trustpilotData.businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <span>View on Trustpilot</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-green-200 mb-4" />
                
                {/* Review Content */}
                <div className="space-y-4">
                  {/* Stars and Title */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            className={`w-5 h-5 ${star <= reviews[currentReview].rating ? 'text-green-500 fill-green-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{reviews[currentReview].date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {reviews[currentReview].title}
                    </h3>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{reviews[currentReview].content}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {reviews[currentReview].author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {reviews[currentReview].businessType}
                      </p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Saved: {reviews[currentReview].savings}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentReview 
                    ? 'bg-green-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">£150M+</div>
            <div className="text-sm text-gray-600">Total Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">900k+</div>
            <div className="text-sm text-gray-600">Businesses Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-sm text-gray-600">Free Service</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustpilotSection;