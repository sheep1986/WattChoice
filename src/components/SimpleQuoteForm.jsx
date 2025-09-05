import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToGoogleSheets } from '../utils/googleSheetsSimple';
import { X, Phone, Mail, Building2, MapPin, User, CheckCircle, Droplet, Wifi } from 'lucide-react';

const SimpleQuoteForm = ({ onClose, serviceType = 'water' }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    postcode: '',
    currentProvider: '',
    monthlySpend: '',
    contractEndDate: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Submit to Google Sheets using GET method
    try {
      await submitToGoogleSheets(formData, `simple-${serviceType}-quote`);
      console.log('Successfully submitted to Google Sheets');
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      // Don't block the user experience if Google Sheets fails
    }
    
    // Simulate submission delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Close form after 3 seconds
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const getServiceDetails = () => {
    switch(serviceType) {
      case 'water':
        return {
          title: 'Business Water Quote',
          icon: <Droplet className="w-8 h-8 text-blue-400" />,
          color: 'blue',
          providers: ['Thames Water', 'Anglian Water', 'United Utilities', 'Severn Trent', 'Yorkshire Water', 'South West Water', 'Other']
        };
      case 'telecoms':
        return {
          title: 'Business Telecoms Quote',
          icon: <Phone className="w-8 h-8 text-green-400" />,
          color: 'green',
          providers: ['BT Business', 'Virgin Media', 'TalkTalk Business', 'Gamma', '8x8', 'RingCentral', 'Other']
        };
      case 'broadband':
        return {
          title: 'Business Broadband Quote',
          icon: <Wifi className="w-8 h-8 text-purple-400" />,
          color: 'purple',
          providers: ['BT Business', 'Virgin Media', 'TalkTalk Business', 'Zen Internet', 'Hyperoptic', 'Other']
        };
      default:
        return {
          title: 'Get Quote',
          icon: <Building2 className="w-8 h-8 text-emerald-400" />,
          color: 'emerald',
          providers: []
        };
    }
  };

  const serviceDetails = getServiceDetails();
  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-500/10 border-blue-500/30',
    green: 'from-green-500/20 to-green-500/10 border-green-500/30',
    purple: 'from-purple-500/20 to-purple-500/10 border-purple-500/30',
    emerald: 'from-emerald-500/20 to-emerald-500/10 border-emerald-500/30'
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quote Request Received!</h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{formData.contactName}</span>. Our team will contact you within 24 hours with competitive quotes tailored to your business needs.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${
          serviceDetails.color === 'green' ? 'from-green-500 to-emerald-600' :
          serviceDetails.color === 'blue' ? 'from-blue-500 to-cyan-600' :
          serviceDetails.color === 'purple' ? 'from-purple-500 to-indigo-600' :
          'from-emerald-500 to-green-600'
        } p-6 rounded-t-2xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                {serviceDetails.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{serviceDetails.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-white/90 mt-2">
            Complete this quick form for competitive quotes from multiple providers
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              Business Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  placeholder="Your Company Ltd"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postcode *
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  placeholder="M1 2AB"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-600" />
              Contact Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  placeholder="07123 456789"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          {/* Current Service Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Current Service Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Provider
                </label>
                <select
                  name="currentProvider"
                  value={formData.currentProvider}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                >
                  <option value="">Select provider...</option>
                  {serviceDetails.providers.map(provider => (
                    <option key={provider} value={provider}>{provider}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Spend (£)
                </label>
                <input
                  type="number"
                  name="monthlySpend"
                  value={formData.monthlySpend}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  placeholder="500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contract End Date
              </label>
              <input
                type="date"
                name="contractEndDate"
                value={formData.contractEndDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all resize-none"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Get Quotes
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200 border border-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SimpleQuoteForm;