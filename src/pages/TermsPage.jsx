import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, DollarSign, Shield, AlertTriangle, Users, Gavel, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Terms and Conditions | Watt Choice - Service Terms & Legal Information</title>
        <meta name="description" content="Watt Choice Terms and Conditions. Read our service terms, commission structure, liability clauses, and legal information for business utility services." />
        <meta name="keywords" content="terms and conditions, service terms, liability, commission structure, legal information, Watt Choice terms" />
        <link rel="canonical" href="https://www.wattchoice.co.uk/terms" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "description": "Watt Choice terms and conditions for business utility services",
            "url": "https://www.wattchoice.co.uk/terms",
            "publisher": {
              "@type": "Organization",
              "name": "Watt Choice",
              "url": "https://www.wattchoice.co.uk",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-161-833-8661",
                "contactType": "Customer Service"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Scale className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">
              Legal terms and conditions governing our business utility services.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Introduction
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  These Terms and Conditions ("Terms") govern your use of services provided by Watt Choice Ltd (trading as "Watt Choice", operated by Watt Utilities Ltd, "we", "us", or "our"). By using our services, you agree to be bound by these Terms.
                </p>
                <p className="mb-4">
                  Watt Choice provides business utility switching services to help UK businesses compare and switch their gas and electricity suppliers. We earn commission from suppliers when successful switches are made.
                </p>
                <p className="mb-4">
                  <strong>Last updated:</strong> January 2025
                </p>
                <p className="mb-4">
                  <strong>Website:</strong> www.wattchoice.co.uk
                </p>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Company Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Trading Name:</strong> Watt Choice</p>
                  <p><strong>Legal Entity:</strong> Watt Utilities Ltd</p>
                  <p><strong>Registered Address:</strong> St Ann's House, 5th Floor, St Ann's Square, Manchester, M2 7LP</p>
                  <p><strong>Contact Phone:</strong> <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a></p>
                  <p><strong>Contact Email:</strong> <a href="mailto:hello@watt.co.uk" className="text-green-600 hover:text-green-700">hello@watt.co.uk</a></p>
                  <p><strong>Website:</strong> <a href="https://www.wattchoice.co.uk" className="text-green-600 hover:text-green-700">www.wattchoice.co.uk</a></p>
                </div>
              </div>
            </div>

            {/* Service Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Service Overview
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Watt Choice provides a business utility switching service that helps UK businesses:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Compare gas and electricity suppliers and tariffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Switch to more competitive energy contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Receive ongoing support and account management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Access market expertise and industry insights</span>
                  </li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <p className="text-sm">
                    <strong>Important:</strong> Our service is provided free of charge to customers, with potential administration fees disclosed where applicable.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Eligibility Requirements
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>To use our services, you must:</p>
                
                <div className="grid gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Status</h3>
                    <p className="text-sm">Be a legitimate UK-based business with valid business premises and operations.</p>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="font-semibold text-gray-900 mb-2">Age Requirement</h3>
                    <p className="text-sm">Be 18 years or older (for sole traders and individual business owners).</p>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="font-semibold text-gray-900 mb-2">Credit Assessment</h3>
                    <p className="text-sm">Meet basic credit score criteria as determined by energy suppliers.</p>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="font-semibold text-gray-900 mb-2">Information Provision</h3>
                    <p className="text-sm">Provide accurate and complete business and energy usage information.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commission Structure */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                Commission Structure
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Watt Choice operates on a commission-based model. We receive referral fees from energy suppliers when customers enter into contracts. This commission structure is how we maintain our business operations.
                </p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Commission Transparency</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Commission rates vary by supplier and contract type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Payments may be received in full or through installments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Commission details will be disclosed to customers upon request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Our recommendations are based on customer needs, not commission rates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Obligations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Customer Obligations
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>As a customer, you agree to:</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate and truthful information about your business and energy requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Cooperate with energy suppliers during the switching process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maintain confidentiality of account details and login information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Notify us promptly of any changes to your business circumstances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comply with the terms and conditions of any energy contracts entered into</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Liability Limitations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                Liability Limitations
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our services are provided "as is" and we make no comprehensive warranties regarding their fitness for any particular purpose.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Maximum Compensation</h3>
                  <p className="text-sm mb-2">Our maximum liability for direct financial losses is limited to the lesser of:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">a)</span>
                      <span>The amount you would have saved through our service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">b)</span>
                      <span>The commission fee we earned from your supplier</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Exclusions</h3>
                  <p className="text-sm">We exclude liability for:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Indirect, consequential, or punitive damages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Loss of profits, business, or opportunity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Actions or omissions of third-party suppliers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Market conditions beyond our reasonable control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Data Protection
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  In providing our services, we may:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Submit your business details to credit reference agencies for verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Investigate supply details using industry databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Share necessary information with energy suppliers for switching purposes</span>
                  </li>
                </ul>

                <p>
                  For full details on how we handle your personal data, please refer to our{' '}
                  <a href="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</a>.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                Service Termination
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate this agreement at any time. We reserve the right to terminate services immediately if:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>You breach these Terms and Conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>You provide false or misleading information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>You engage in fraudulent or illegal activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>You fail to meet eligibility requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Jurisdiction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-green-600" />
                Legal Jurisdiction
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms and Conditions are governed by English and Welsh law. The English Courts shall have non-exclusive jurisdiction over any disputes arising from or relating to these Terms.
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <h3 className="font-semibold text-white mb-2">Dispute Resolution</h3>
                  <p className="text-sm">
                    We encourage customers to contact us directly to resolve any issues before pursuing formal legal action. 
                    For complaints, please refer to our{' '}
                    <a href="/complaints" className="text-green-600 hover:text-green-700">Complaints Procedure</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Changes to These Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to update these Terms and Conditions at any time. Substantial changes will be communicated to customers via email or website notification. Continued use of our services after changes constitutes acceptance of the updated terms.
                </p>
                <p>
                  This version was last updated in January 2025. Historic versions can be obtained by contacting us.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Questions About These Terms?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Call Us</p>
                  <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Email Us</p>
                  <a href="mailto:hello@watt.co.uk" className="text-green-600 hover:text-green-700">hello@watt.co.uk</a>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Visit Us</p>
                  <p className="text-sm text-gray-600">St Ann's House, Manchester</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;