import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  MapPin,
  Zap,
  Droplet,
  Wifi,
  Phone,
  Shield,
  Calculator,
  Mail,
  User,
  Check,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

// Form Input Components
function FormInput({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      )}
      <input
        className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
        {...props}
      />
    </div>
  );
}

function FormSelect({ icon: Icon, children, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      )}
      <select
        className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white`}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  );
}

// Progress Indicator
function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-green-600">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-green-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

// Main Quote Form Component
export default function QuoteForm({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1 - Business Details
    businessName: '',
    businessType: '',
    postcode: '',
    addressLine1: '',
    numberOfSites: '1',
    
    // Step 2 - Services Required
    services: {
      electricity: false,
      gas: false,
      water: false,
      broadband: false,
      phone: false,
      insurance: false
    },
    currentSupplier: '',
    contractEndDate: '',
    
    // Step 3 - Usage & Spend
    monthlySpend: '',
    annualUsage: '',
    preferredContractLength: '12',
    greenEnergy: false,
    
    // Step 4 - Contact Details
    contactName: '',
    email: '',
    phone: '',
    preferredContactTime: 'anytime',
    additionalNotes: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const updateServices = (service) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.postcode) newErrors.postcode = 'Postcode is required';
        if (!formData.businessType) newErrors.businessType = 'Please select your business type';
        break;
      case 2:
        const hasService = Object.values(formData.services).some(v => v);
        if (!hasService) newErrors.services = 'Please select at least one service';
        break;
      case 3:
        if (!formData.monthlySpend) newErrors.monthlySpend = 'Please enter your monthly spend';
        break;
      case 4:
        if (!formData.contactName) newErrors.contactName = 'Contact name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    
    // Call completion callback if provided
    if (onComplete) {
      onComplete(formData);
    }
  };

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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tell us about your business
              </h2>
              <p className="text-gray-600">
                We'll use this information to find the best deals for your business
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <FormInput
                  icon={Building2}
                  type="text"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.businessName}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <FormSelect
                  value={formData.businessType}
                  onChange={(e) => updateFormData('businessType', e.target.value)}
                >
                  <option value="">Select your business type</option>
                  <option value="retail">Retail</option>
                  <option value="office">Office</option>
                  <option value="restaurant">Restaurant/Hospitality</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="warehouse">Warehouse/Storage</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </FormSelect>
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.businessType}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <FormInput
                    icon={MapPin}
                    type="text"
                    placeholder="e.g. M1 2AB"
                    value={formData.postcode}
                    onChange={(e) => updateFormData('postcode', e.target.value.toUpperCase())}
                  />
                  {errors.postcode && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.postcode}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Sites
                  </label>
                  <FormSelect
                    value={formData.numberOfSites}
                    onChange={(e) => updateFormData('numberOfSites', e.target.value)}
                  >
                    <option value="1">1 Site</option>
                    <option value="2-5">2-5 Sites</option>
                    <option value="6-10">6-10 Sites</option>
                    <option value="11-20">11-20 Sites</option>
                    <option value="20+">20+ Sites</option>
                  </FormSelect>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address Line 1 (Optional)
                </label>
                <FormInput
                  type="text"
                  placeholder="Enter your street address"
                  value={formData.addressLine1}
                  onChange={(e) => updateFormData('addressLine1', e.target.value)}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Which services do you need?
              </h2>
              <p className="text-gray-600">
                Select all the services you'd like to compare
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Services *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { key: 'electricity', label: 'Business Electricity', icon: Zap, color: 'yellow' },
                    { key: 'gas', label: 'Business Gas', icon: Zap, color: 'blue' },
                    { key: 'water', label: 'Business Water', icon: Droplet, color: 'blue' },
                    { key: 'broadband', label: 'Business Broadband', icon: Wifi, color: 'purple' },
                    { key: 'phone', label: 'Business Phone', icon: Phone, color: 'green' },
                    { key: 'insurance', label: 'Business Insurance', icon: Shield, color: 'red' }
                  ].map(service => (
                    <label
                      key={service.key}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.services[service.key]
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services[service.key]}
                        onChange={() => updateServices(service.key)}
                        className="sr-only"
                      />
                      <div className={`p-2 rounded-lg ${
                        formData.services[service.key]
                          ? 'bg-green-100'
                          : 'bg-gray-100'
                      }`}>
                        <service.icon className={`h-5 w-5 ${
                          formData.services[service.key]
                            ? 'text-green-600'
                            : 'text-gray-600'
                        }`} />
                      </div>
                      <span className={`font-medium ${
                        formData.services[service.key]
                          ? 'text-gray-900'
                          : 'text-gray-700'
                      }`}>
                        {service.label}
                      </span>
                      {formData.services[service.key] && (
                        <Check className="h-5 w-5 text-green-600 ml-auto" />
                      )}
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.services}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Supplier (Optional)
                </label>
                <FormInput
                  type="text"
                  placeholder="e.g. British Gas"
                  value={formData.currentSupplier}
                  onChange={(e) => updateFormData('currentSupplier', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contract End Date (Optional)
                </label>
                <FormInput
                  type="date"
                  value={formData.contractEndDate}
                  onChange={(e) => updateFormData('contractEndDate', e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">
                  If you're in contract, we'll prepare quotes for when it ends
                </p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Usage & Preferences
              </h2>
              <p className="text-gray-600">
                Help us understand your usage to find the best deals
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Monthly Spend *
                </label>
                <FormInput
                  icon={Calculator}
                  type="number"
                  placeholder="e.g. 1500"
                  value={formData.monthlySpend}
                  onChange={(e) => updateFormData('monthlySpend', e.target.value)}
                />
                {errors.monthlySpend && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.monthlySpend}
                  </p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Combined spend across all selected services
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Usage (Optional)
                </label>
                <FormInput
                  type="text"
                  placeholder="e.g. 50,000 kWh"
                  value={formData.annualUsage}
                  onChange={(e) => updateFormData('annualUsage', e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">
                  If known, this helps us provide more accurate quotes
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contract Length
                </label>
                <FormSelect
                  value={formData.preferredContractLength}
                  onChange={(e) => updateFormData('preferredContractLength', e.target.value)}
                >
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                  <option value="48">48 Months</option>
                  <option value="60">60 Months</option>
                  <option value="flexible">Flexible</option>
                </FormSelect>
              </div>
              
              <div>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-green-500">
                  <input
                    type="checkbox"
                    checked={formData.greenEnergy}
                    onChange={(e) => updateFormData('greenEnergy', e.target.checked)}
                    className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      I'm interested in green energy options
                    </div>
                    <div className="text-sm text-gray-500">
                      We'll include renewable energy tariffs in your comparison
                    </div>
                  </div>
                </label>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Contact Details
              </h2>
              <p className="text-gray-600">
                We'll send your personalised quotes to these details
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <FormInput
                  icon={User}
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.contactName}
                  onChange={(e) => updateFormData('contactName', e.target.value)}
                />
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.contactName}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <FormInput
                    icon={Mail}
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <FormInput
                    icon={Phone}
                    type="tel"
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Best Time to Contact
                </label>
                <FormSelect
                  value={formData.preferredContactTime}
                  onChange={(e) => updateFormData('preferredContactTime', e.target.value)}
                >
                  <option value="anytime">Anytime</option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 7pm)</option>
                </FormSelect>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  rows="3"
                  placeholder="Any specific requirements or questions?"
                  value={formData.additionalNotes}
                  onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                />
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Your information is secure</p>
                    <p className="text-gray-600">
                      We'll only use your details to provide quotes and won't share them without your permission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
        
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Next Step
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  Submitting...
                </>
              ) : (
                <>
                  Get My Quotes
                  <Check className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}