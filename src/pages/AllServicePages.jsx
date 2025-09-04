import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplet, Wifi, Phone, Building2, FileText, Users, Mail, MapPin, ArrowRight, CheckCircle, Shield, Clock, PoundSterling, Award } from 'lucide-react';
import SimpleQuoteForm from '../components/SimpleQuoteForm';
import BusinessQuoteForm from '../components/BusinessQuoteForm';
import { submitToGoogleSheets } from '../utils/googleSheetsSimple';

// Business Water Page
export const BusinessWater = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Business Water</h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Save up to 20% on business water rates. Since deregulation, you can switch suppliers and save thousands.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a 
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 inline-flex"
            >
              Compare Water Rates <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a href="tel:01618338661" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-8 rounded-lg border border-gray-200">
              <Phone className="inline mr-2" /> 0161 833 8661
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-gray-900 font-bold mb-2">Bill Validation</h3>
              <p className="text-gray-600">We check for overcharging and billing errors</p>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-6">
              <Shield className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-gray-900 font-bold mb-2">Leak Detection</h3>
              <p className="text-gray-600">Identify and fix costly water leaks</p>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-6">
              <PoundSterling className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-gray-900 font-bold mb-2">20% Savings</h3>
              <p className="text-gray-600">Average savings on water bills</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="relative py-0">
        <div className="h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=2340&auto=format&fit=crop"
            alt="Water treatment facility"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-white pointer-events-none" />
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Switch Water Supplier?</h2>
          <p className="text-xl text-gray-700 mb-8">Free switching service • No interruption to supply</p>
          <div className="flex justify-center">
            <motion.a 
            href="https://www.app.watt.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center justify-center gap-2 inline-flex"
          >
            Get Free Water Quote <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Business Broadband Page
export const BusinessBroadband = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Wifi className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Business Broadband</h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Ultra-fast business broadband with guaranteed uptime. Leased lines, FTTP, and dedicated support.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button 
              onClick={() => setShowQuoteForm(true)} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Check Availability <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a 
              href="tel:01618338661" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 border border-gray-200"
            >
              <Phone className="w-5 h-5" /> Speak to Expert
            </motion.a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">1Gbps</div>
              <div className="text-sm text-gray-600">Speeds Available</div>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-600">UK Support</div>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">4hr</div>
              <div className="text-sm text-gray-600">Fix Time</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="relative py-0">
        <div className="h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2340&auto=format&fit=crop"
            alt="Network cables and data center"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-white pointer-events-none" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Connectivity Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leased Lines</h3>
              <p className="text-gray-600">Dedicated symmetric connection with guaranteed speeds</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FTTP/FTTC</h3>
              <p className="text-gray-600">Fibre broadband solutions for every business size</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SD-WAN</h3>
              <p className="text-gray-600">Software-defined networking for multi-site businesses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Upgrade Your Business Connectivity</h2>
          <div className="flex justify-center">
            <motion.button 
            onClick={() => setShowQuoteForm(true)} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center justify-center gap-2"
          >
            Get Broadband Quote <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Quote Form Modal - Simpler form for broadband */}
      {showQuoteForm && (
        <SimpleQuoteForm onClose={() => setShowQuoteForm(false)} serviceType="broadband" />
      )}
    </div>
  );
};

// Business Telecoms Page
export const BusinessTelecoms = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-12 h-12 text-green-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Business Telecoms</h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Complete business phone systems. VoIP, SIP trunks, mobile packages, and unified communications.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button 
              onClick={() => setShowQuoteForm(true)} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
            >
              Get Telecoms Quote <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a href="tel:01618338661" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-8 rounded-lg border border-gray-200">
              <Phone className="inline mr-2" /> 0161 833 8661
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {['VoIP Systems', 'SIP Trunks', 'Mobile Plans', 'Call Recording'].map((service) => (
              <div key={service} className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-gray-900 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="relative py-0">
        <div className="h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2340&auto=format&fit=crop"
            alt="Business professional using phone system"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-white pointer-events-none" />
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-green-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Modernise Your Business Communications</h2>
          <p className="text-xl text-gray-700 mb-8">Save up to 50% compared to traditional phone lines</p>
          <div className="flex justify-center">
            <motion.button 
            onClick={() => setShowQuoteForm(true)} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center justify-center gap-2"
          >
            Start Saving Today <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Quote Form Modal - Simpler form for telecoms */}
      {showQuoteForm && (
        <SimpleQuoteForm onClose={() => setShowQuoteForm(false)} serviceType="telecoms" />
      )}
    </div>
  );
};

// Large Business Page
export const LargeBusiness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-12 h-12 text-amber-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Large Business & Corporate</h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Specialist energy management for large businesses. Multi-site portfolios, flexible purchasing, and dedicated account management.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a 
              href="https://www.app.watt.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2 inline-flex"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a href="tel:01618338661" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-8 rounded-lg border border-gray-200">
              <Phone className="inline mr-2" /> Corporate Team
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">1000+</div>
              <div className="text-sm text-gray-600">Sites Managed</div>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">£10M+</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">HH</div>
              <div className="text-sm text-gray-600">Meter Specialist</div>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">24/7</div>
              <div className="text-sm text-gray-600">Account Support</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Corporate Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Purchasing</h3>
              <p className="text-gray-600">Risk management strategies and market timing</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Management</h3>
              <p className="text-gray-600">Consolidated billing and multi-site optimization</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Reporting</h3>
              <p className="text-gray-600">Consumption analytics and carbon reporting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-amber-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise Energy Management</h2>
          <div className="flex justify-center">
            <motion.a 
            href="https://www.app.watt.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg flex items-center justify-center gap-2 inline-flex"
          >
            Book Strategic Review <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit to Google Sheets
    try {
      const dataToSubmit = {
        contactName: formData.name,
        email: formData.email,
        phone: formData.phone,
        additionalNotes: formData.message
      };
      await submitToGoogleSheets(dataToSubmit, 'contact-form');
      console.log('Successfully submitted to Google Sheets');
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
    }
    
    alert('Thank you for your enquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <section className="relative py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Get in touch with our energy experts. We're here to help you save on business utilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-semibold">Call Us</p>
                      <p className="text-gray-600">0161 833 8661</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9am-5:30pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-semibold">Email</p>
                      <p className="text-gray-600">hello@wattutilities.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-semibold">Office</p>
                      <p className="text-gray-600">St Ann's House, 5th Floor</p>
                      <p className="text-gray-600">St Ann's Square</p>
                      <p className="text-gray-600">Manchester, M2 7LP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900" 
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900" 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    required
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900" 
                  />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?" 
                    rows="4" 
                    required
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900"
                  ></textarea>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Company Page
export const CompanyPage = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <section className="relative py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Watt Choice</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Trusted business energy consultants since 2000. We've helped over 900,000 UK businesses save £150 million on their utility bills.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">23+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">900k+</div>
              <p className="text-gray-700">Businesses Helped</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">£150M</div>
              <p className="text-gray-700">Total Savings</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We believe every business deserves access to fair energy prices. Our mission is to level the playing field 
              by giving businesses of all sizes access to wholesale rates previously reserved for large corporations.
            </p>
            <p className="text-gray-700">
              Through our extensive supplier network and expert negotiation, we've consistently delivered savings of 20-45% 
              for our clients, from small shops to large multi-site operations.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join 900,000+ Businesses Saving?</h2>
          <div className="flex justify-center">
            <motion.button 
              onClick={() => setShowQuoteForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-emerald-600 text-gray-900 font-bold py-5 px-10 rounded-lg shadow-lg text-lg inline-flex items-center gap-2"
            >
              Get Started Today <ArrowRight className="w-6 h-6" />
            </motion.button>
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