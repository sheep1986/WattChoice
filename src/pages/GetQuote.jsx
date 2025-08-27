import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Building2, 
  Zap, 
  Flame, 
  Droplet, 
  Wifi, 
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Calendar,
  User,
  MapPin,
  FileText,
  PoundSterling
} from 'lucide-react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    currentSupplier: '',
    contractEndDate: '',
    annualSpend: '',
    services: {
      electricity: false,
      gas: false,
      water: false,
      telecoms: false,
      broadband: false
    },
    additionalNotes: '',
    preferredContactMethod: 'email',
    preferredContactTime: 'morning'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.contactName) newErrors.contactName = 'Contact name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.postcode) newErrors.postcode = 'Postcode is required';
    
    const hasServiceSelected = Object.values(formData.services).some(v => v);
    if (!hasServiceSelected) {
      newErrors.services = 'Please select at least one service';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('services.')) {
      const serviceName = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [serviceName]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        currentSupplier: '',
        contractEndDate: '',
        annualSpend: '',
        services: {
          electricity: false,
          gas: false,
          water: false,
          telecoms: false,
          broadband: false
        },
        additionalNotes: '',
        preferredContactMethod: 'email',
        preferredContactTime: 'morning'
      });
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/60 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              <FileText className="h-4 w-4" />
              Get Your Free Business Energy Quote
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Start Saving on Your Business Energy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Complete the form below and our experts will find the best energy deals for your business. 
              No obligation, completely free service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 rounded-lg bg-green-500/10 border border-green-500/30 p-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-semibold text-green-400">Quote request submitted successfully!</p>
                  <p className="text-sm text-slate-300">Our team will contact you within 24 hours.</p>
                </div>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800/60 p-6"
            >
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <Building2 className="h-5 w-5 text-cyan-400" />
                Business Information
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-slate-300">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border ${
                      errors.businessName ? 'border-red-500' : 'border-slate-700'
                    } focus:border-cyan-400 focus:outline-none`}
                    placeholder="Your Company Ltd"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-400">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-slate-300">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border ${
                      errors.contactName ? 'border-red-500' : 'border-slate-700'
                    } focus:border-cyan-400 focus:outline-none`}
                    placeholder="John Smith"
                  />
                  {errors.contactName && (
                    <p className="mt-1 text-sm text-red-400">{errors.contactName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border ${
                      errors.email ? 'border-red-500' : 'border-slate-700'
                    } focus:border-cyan-400 focus:outline-none`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border ${
                      errors.phone ? 'border-red-500' : 'border-slate-700'
                    } focus:border-cyan-400 focus:outline-none`}
                    placeholder="0123 456 7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="mb-2 block text-sm font-medium text-slate-300">
                    Business Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                    placeholder="123 Business Street, City"
                  />
                </div>

                <div>
                  <label htmlFor="postcode" className="mb-2 block text-sm font-medium text-slate-300">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border ${
                      errors.postcode ? 'border-red-500' : 'border-slate-700'
                    } focus:border-cyan-400 focus:outline-none`}
                    placeholder="SW1A 1AA"
                  />
                  {errors.postcode && (
                    <p className="mt-1 text-sm text-red-400">{errors.postcode}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Services Required */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800/60 p-6"
            >
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <Zap className="h-5 w-5 text-cyan-400" />
                Services Required *
              </h2>
              
              {errors.services && (
                <div className="mb-4 flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {errors.services}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 p-4 hover:bg-slate-800/30">
                  <input
                    type="checkbox"
                    name="services.electricity"
                    checked={formData.services.electricity}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-400"
                  />
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span>Electricity</span>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 p-4 hover:bg-slate-800/30">
                  <input
                    type="checkbox"
                    name="services.gas"
                    checked={formData.services.gas}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-400"
                  />
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-orange-400" />
                    <span>Gas</span>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 p-4 hover:bg-slate-800/30">
                  <input
                    type="checkbox"
                    name="services.water"
                    checked={formData.services.water}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-400"
                  />
                  <div className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-blue-400" />
                    <span>Water</span>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 p-4 hover:bg-slate-800/30">
                  <input
                    type="checkbox"
                    name="services.telecoms"
                    checked={formData.services.telecoms}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-400"
                  />
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-400" />
                    <span>Telecoms</span>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 p-4 hover:bg-slate-800/30">
                  <input
                    type="checkbox"
                    name="services.broadband"
                    checked={formData.services.broadband}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-400"
                  />
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-purple-400" />
                    <span>Broadband</span>
                  </div>
                </label>
              </div>
            </motion.div>

            {/* Current Contract Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800/60 p-6"
            >
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <FileText className="h-5 w-5 text-cyan-400" />
                Current Contract Details
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="currentSupplier" className="mb-2 block text-sm font-medium text-slate-300">
                    Current Supplier
                  </label>
                  <input
                    type="text"
                    id="currentSupplier"
                    name="currentSupplier"
                    value={formData.currentSupplier}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                    placeholder="e.g., British Gas"
                  />
                </div>

                <div>
                  <label htmlFor="contractEndDate" className="mb-2 block text-sm font-medium text-slate-300">
                    Contract End Date
                  </label>
                  <input
                    type="date"
                    id="contractEndDate"
                    name="contractEndDate"
                    value={formData.contractEndDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="annualSpend" className="mb-2 block text-sm font-medium text-slate-300">
                    Estimated Annual Energy Spend
                  </label>
                  <select
                    id="annualSpend"
                    name="annualSpend"
                    value={formData.annualSpend}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select range</option>
                    <option value="0-5000">£0 - £5,000</option>
                    <option value="5000-10000">£5,000 - £10,000</option>
                    <option value="10000-25000">£10,000 - £25,000</option>
                    <option value="25000-50000">£25,000 - £50,000</option>
                    <option value="50000-100000">£50,000 - £100,000</option>
                    <option value="100000+">£100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredContactMethod" className="mb-2 block text-sm font-medium text-slate-300">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800/60 p-6"
            >
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <AlertCircle className="h-5 w-5 text-cyan-400" />
                Additional Information
              </h2>
              
              <div>
                <label htmlFor="additionalNotes" className="mb-2 block text-sm font-medium text-slate-300">
                  Additional Notes or Requirements
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  placeholder="Tell us about any specific requirements or questions..."
                />
              </div>

              <div className="mt-4">
                <label htmlFor="preferredContactTime" className="mb-2 block text-sm font-medium text-slate-300">
                  Preferred Contact Time
                </label>
                <select
                  id="preferredContactTime"
                  name="preferredContactTime"
                  value={formData.preferredContactTime}
                  onChange={handleInputChange}
                  className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none md:w-auto"
                >
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 7pm)</option>
                  <option value="anytime">Any time</option>
                </select>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Your Free Quote
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.div>
          </form>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid gap-4 text-center text-sm text-slate-400 sm:grid-cols-3"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>No obligation quote</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Trusted by 900,000+ businesses</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;