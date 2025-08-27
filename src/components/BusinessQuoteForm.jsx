import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Zap, 
  Phone, 
  Mail, 
  User, 
  Calendar,
  PoundSterling,
  CheckCircle,
  Clock,
  FileText,
  TrendingUp,
  Users,
  MapPin,
  Briefcase
} from 'lucide-react';

const BusinessQuoteForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Business Details
    businessName: '',
    businessType: '',
    businessSize: '',
    tradingYears: '',
    
    // Address
    postcode: '',
    address: '',
    
    // Energy Usage
    currentSupplier: '',
    contractEndDate: '',
    annualSpend: '',
    annualUsage: '',
    meterType: '',
    
    // Additional Requirements
    greenEnergy: false,
    multiSite: false,
    numberOfSites: '',
    
    // Contact Details
    contactName: '',
    position: '',
    email: '',
    phone: '',
    preferredContactTime: '',
    
    // Marketing
    howDidYouHear: '',
    additionalNotes: ''
  });

  const totalSteps = 5;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    setCurrentStep(totalSteps + 1); // Show success message
  };

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Let's Start With Your Business</h2>
              <p className="text-gray-400">Tell us about your company so we can find the best rates</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Your Company Ltd"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select your business type</option>
                  <option value="retail">Retail</option>
                  <option value="office">Office</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Employees *
                  </label>
                  <select
                    name="businessSize"
                    value={formData.businessSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-250">51-250</option>
                    <option value="251-1000">251-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years Trading *
                  </label>
                  <select
                    name="tradingYears"
                    value={formData.tradingYears}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select years</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Postcode *
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="M2 7LP"
                  required
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Current Energy Setup</h2>
              <p className="text-gray-400">Help us understand your current energy situation</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Electricity Supplier
                </label>
                <select
                  name="currentSupplier"
                  value={formData.currentSupplier}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Select supplier</option>
                  <option value="british-gas">British Gas</option>
                  <option value="edf">EDF Energy</option>
                  <option value="eon">E.ON</option>
                  <option value="scottish-power">Scottish Power</option>
                  <option value="sse">SSE</option>
                  <option value="opus">Opus Energy</option>
                  <option value="total">Total Energies</option>
                  <option value="other">Other</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contract End Date
                </label>
                <input
                  type="date"
                  name="contractEndDate"
                  value={formData.contractEndDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank if you're not sure</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meter Type
                </label>
                <select
                  name="meterType"
                  value={formData.meterType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Select meter type</option>
                  <option value="single-rate">Single Rate</option>
                  <option value="day-night">Day/Night</option>
                  <option value="smart">Smart Meter</option>
                  <option value="half-hourly">Half Hourly</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="greenEnergy"
                    checked={formData.greenEnergy}
                    onChange={handleInputChange}
                    className="w-5 h-5 bg-slate-800 border-slate-700 rounded text-emerald-500 focus:ring-emerald-500"
                  />
                  <label className="text-gray-300">
                    I'm interested in green energy options
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="multiSite"
                    checked={formData.multiSite}
                    onChange={handleInputChange}
                    className="w-5 h-5 bg-slate-800 border-slate-700 rounded text-emerald-500 focus:ring-emerald-500"
                  />
                  <label className="text-gray-300">
                    We have multiple sites
                  </label>
                </div>

                {formData.multiSite && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-8"
                  >
                    <input
                      type="number"
                      name="numberOfSites"
                      value={formData.numberOfSites}
                      onChange={handleInputChange}
                      placeholder="Number of sites"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Energy Usage & Spend</h2>
              <p className="text-gray-400">This helps us find the most suitable tariffs for you</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Annual Electricity Spend (Approximate)
                </label>
                <select
                  name="annualSpend"
                  value={formData.annualSpend}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Select spend range</option>
                  <option value="0-5000">Under £5,000</option>
                  <option value="5000-10000">£5,000 - £10,000</option>
                  <option value="10000-25000">£10,000 - £25,000</option>
                  <option value="25000-50000">£25,000 - £50,000</option>
                  <option value="50000-100000">£50,000 - £100,000</option>
                  <option value="100000-250000">£100,000 - £250,000</option>
                  <option value="250000+">Over £250,000</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Annual Usage (kWh) - Optional
                </label>
                <input
                  type="text"
                  name="annualUsage"
                  value={formData.annualUsage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="e.g., 50000"
                />
                <p className="text-xs text-gray-500 mt-1">You can find this on your electricity bill</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Potential Savings Calculator
                </h3>
                {formData.annualSpend && formData.annualSpend !== 'not-sure' && (
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm">
                      Based on your spend range, you could potentially save:
                    </p>
                    <p className="text-2xl font-bold text-emerald-400">
                      Up to £{Math.round(parseInt(formData.annualSpend.split('-')[0]) * 0.45).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      *Based on average savings of 45% for businesses switching with Watt Utilities
                    </p>
                  </div>
                )}
                {(!formData.annualSpend || formData.annualSpend === 'not-sure') && (
                  <p className="text-gray-500 text-sm">
                    Select your annual spend to see potential savings
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
              <p className="text-gray-400">How should our energy expert reach you?</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Operations Manager"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="07123 456789"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Best Time to Call
                </label>
                <select
                  name="preferredContactTime"
                  value={formData.preferredContactTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Any time</option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 7pm)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Please select</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Referral</option>
                  <option value="social">Social Media</option>
                  <option value="email">Email</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Review Your Information</h2>
              <p className="text-gray-400">Please check everything is correct before submitting</p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  Business Details
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">Business:</div>
                  <div className="text-white">{formData.businessName || 'Not provided'}</div>
                  <div className="text-gray-400">Type:</div>
                  <div className="text-white">{formData.businessType || 'Not provided'}</div>
                  <div className="text-gray-400">Postcode:</div>
                  <div className="text-white">{formData.postcode || 'Not provided'}</div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  Energy Information
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">Current Supplier:</div>
                  <div className="text-white">{formData.currentSupplier || 'Not provided'}</div>
                  <div className="text-gray-400">Annual Spend:</div>
                  <div className="text-white">{formData.annualSpend || 'Not provided'}</div>
                  <div className="text-gray-400">Green Energy:</div>
                  <div className="text-white">{formData.greenEnergy ? 'Yes' : 'No'}</div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-400" />
                  Contact Details
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">Name:</div>
                  <div className="text-white">{formData.contactName || 'Not provided'}</div>
                  <div className="text-gray-400">Email:</div>
                  <div className="text-white">{formData.email || 'Not provided'}</div>
                  <div className="text-gray-400">Phone:</div>
                  <div className="text-white">{formData.phone || 'Not provided'}</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 bg-slate-800 border-slate-700 rounded text-emerald-500 focus:ring-emerald-500 mt-1"
                />
                <label className="text-sm text-gray-400">
                  I agree to be contacted by Watt Utilities regarding my energy requirements. 
                  We will not share your information with third parties.
                </label>
              </div>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-6 py-8"
          >
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Thank You!</h2>
            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                Your quote request has been received successfully.
              </p>
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 max-w-md mx-auto">
                <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-2">What Happens Next?</p>
                <p className="text-gray-300 text-sm">
                  One of our expert energy consultants will contact you within the next 2 hours 
                  (during business hours) to discuss your requirements and provide personalized quotes.
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Expected callback time: Within 2 hours</p>
                <p>Direct line: 0161 833 8661</p>
                <p>Email: hello@wattutilities.co.uk</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Close
            </button>
          </motion.div>
        );
    }
  };

  if (currentStep > totalSteps) {
    return renderStep();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-slate-800"
      >
        {/* Header with Progress */}
        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-white">Get Your Free Quote</h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all ${
                    step <= currentStep
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-gray-500'
                  }`}
                >
                  {step < currentStep ? '✓' : step}
                </div>
              ))}
            </div>
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-700 -z-10">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Footer with Navigation */}
        {currentStep <= totalSteps && (
          <div className="bg-slate-800/50 px-6 py-4 border-t border-slate-700">
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  currentStep === 1
                    ? 'bg-slate-700/50 text-gray-500 cursor-not-allowed'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <span className="text-gray-400 text-sm">
                Step {currentStep} of {totalSteps}
              </span>

              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition-all"
                >
                  Submit Quote Request
                  <CheckCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BusinessQuoteForm;