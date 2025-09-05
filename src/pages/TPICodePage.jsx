import React from 'react';
import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
import { Award, Shield, Users, BookOpen, CheckCircle, Target, Gavel, Phone, Mail, MapPin, FileText, UserCheck, ClipboardCheck, MessageCircle, Star, AlertCircle } from 'lucide-react';

const TPICodePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      {/* Helmet SEO tags commented out - can be re-enabled when HelmetProvider is configured
      <Helmet>
        <title>TPI Code of Conduct | Watt Choice - Third Party Intermediary Standards</title>
        <meta name="description" content="Watt Choice TPI Code of Conduct. Our commitment to ethical standards, customer protection, and regulatory compliance as a Third Party Intermediary." />
        <meta name="keywords" content="TPI code of conduct, third party intermediary, energy standards, regulatory compliance, ethical practices, customer protection" />
        <link rel="canonical" href="https://www.wattchoice.co.uk/tpi-code" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "TPI Code of Conduct",
            "description": "Watt Choice Third Party Intermediary code of conduct and ethical standards",
            "url": "https://www.wattchoice.co.uk/tpi-code",
            "publisher": {
              "@type": "Organization",
              "name": "Watt Choice",
              "url": "https://www.wattchoice.co.uk",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-161-833-8661",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              }
            }
          })}
        </script>
      </Helmet>
      */}

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">TPI Code of Conduct</h1>
            <p className="text-xl text-gray-700">
              Our commitment to ethical standards and customer protection as a Third Party Intermediary.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-100/50 border border-gray-200 rounded-lg p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Purpose and Commitment
              </h2>
              <div className="prose prose-invert max-w-none text-gray-700">
                <p className="mb-4">
                  As a Third Party Intermediary (TPI), Watt Choice is committed to maintaining the highest standards of professional conduct and customer service. This code establishes our principles for responsible business practices when working between micro-business customers and energy suppliers.
                </p>
                <p className="mb-4">
                  Our TPI Code of Conduct ensures transparency in our sales and marketing activities, ethical customer interactions, compliance with regulatory requirements, and protection of customer interests throughout the energy switching process.
                </p>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <p className="text-sm">
                    <strong>Scope:</strong> This code applies to all Watt Choice activities as a Third Party Intermediary in the UK energy market, covering interactions with micro-business customers and energy suppliers.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Principles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-green-600" />
                Core Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Customer Protection</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    We prioritize customer interests and ensure all interactions are conducted with honesty, integrity, and respect for customer rights.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Transparency</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Clear, honest communication about our services, commission structures, and any potential costs or benefits to customers.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Gavel className="w-6 h-6 text-purple-400" />
                    <h3 className="font-semibold text-gray-900">Regulatory Compliance</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Full adherence to all relevant laws, regulations, and industry codes governing energy intermediary services.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-amber-400" />
                    <h3 className="font-semibold text-gray-900">Professional Integrity</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Maintaining high ethical standards in all business practices and customer relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party Management */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Third Party Management
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We maintain strict oversight and accountability for all third-party activities conducted on our behalf:
                </p>
                
                <div className="grid gap-4">
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-green-600" />
                      Responsibility and Accountability
                    </h3>
                    <p className="text-sm">We take full responsibility for all actions taken by third parties working on our behalf, ensuring they meet our standards and comply with this code.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Record Maintenance
                    </h3>
                    <p className="text-sm">Detailed records are maintained of all third-party relationships, activities, and performance metrics.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      Screening Processes
                    </h3>
                    <p className="text-sm">Robust screening procedures ensure all third parties meet our ethical and professional standards before engagement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruitment and Training */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-green-600" />
                Recruitment and Training Standards
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our commitment to excellence begins with rigorous recruitment and comprehensive training programs:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-6 border border-emerald-500/30">
                    <h3 className="font-semibold text-gray-900 mb-3">Recruitment Process</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive background checks for all personnel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Assessment of ethical standards and professional integrity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Verification of relevant qualifications and experience</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="font-semibold text-gray-900 mb-3">Training Requirements</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive product knowledge and market understanding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Regulatory compliance and legal requirements training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Customer protection principles and ethical conduct</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Data handling and privacy protection procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Annual assessments and continuous professional development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Practices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-green-600" />
                Ethical Sales Practices
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our sales approach prioritizes customer needs and maintains the highest ethical standards:
                </p>
                
                <div className="grid gap-4">
                  {[
                    {
                      title: "Clear Identification",
                      desc: "All customer contact includes clear identification of our company, purpose of contact, and services offered.",
                      icon: UserCheck
                    },
                    {
                      title: "No Pressure Tactics",
                      desc: "We prohibit high-pressure sales techniques and respect customer decisions and timelines.",
                      icon: Shield
                    },
                    {
                      title: "Transparent Communication",
                      desc: "Honest, clear communication about services, costs, benefits, and any potential risks or limitations.",
                      icon: Target
                    },
                    {
                      title: "Complete Information",
                      desc: "Customers receive all relevant contract information, terms, and conditions before making decisions.",
                      icon: FileText
                    },
                    {
                      title: "Respect for Preferences",
                      desc: "Customer preferences regarding contact methods, timing, and communication frequency are strictly observed.",
                      icon: Users
                    }
                  ].map((practice, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <practice.icon className="w-5 h-5 text-green-600" />
                        {practice.title}
                      </h3>
                      <p className="text-sm">{practice.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-green-600" />
                Compliance Requirements
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We maintain strict adherence to all applicable regulations and industry standards:
                </p>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Key Compliance Areas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Data Protection</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>GDPR compliance for all data processing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Secure handling of customer information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Regular data protection training</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Marketing Consent</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Explicit consent for marketing communications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Clear opt-out mechanisms provided</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Preference management systems</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Change of Tenancy</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Proper handling of tenancy changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Verification of authority to switch</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Accurate record maintenance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Legal Requirements</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Consumer protection law compliance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Energy industry regulation adherence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Regular legal compliance reviews</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complaint Handling */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-green-600" />
                Complaint Handling Standards
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our complaint handling process ensures fair, efficient resolution of customer concerns:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Process Transparency</h3>
                    <p className="text-sm mb-3">Clear, accessible complaint procedures with defined timelines and escalation paths.</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Published complaint procedure</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Multiple contact channels</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Response Commitment</h3>
                    <p className="text-sm mb-3">24-hour initial response with comprehensive investigation and resolution tracking.</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Rapid acknowledgment</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Regular status updates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Escalation Procedures</h3>
                    <p className="text-sm mb-3">Independent review processes for complex complaints with external ombudsman referral options.</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Internal escalation pathways</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Ombudsman services access</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Record Keeping</h3>
                    <p className="text-sm mb-3">Detailed documentation of all complaints, investigations, and resolutions for continuous improvement.</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive case files</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Performance analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit and Accountability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-6 h-6 text-green-600" />
                Audit and Accountability Framework
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We maintain robust oversight and accountability mechanisms to ensure ongoing compliance:
                </p>
                
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg p-6 border border-amber-500/30">
                  <h3 className="font-semibold text-gray-900 mb-4">Accountability Measures</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ClipboardCheck className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Annual Self-Assessment</p>
                        <p className="text-xs text-gray-700">Comprehensive review of all TPI code compliance areas with detailed reporting.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Independent Audits</p>
                        <p className="text-xs text-gray-700">Subject to supplier and independent third-party audits to verify compliance standards.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Sanctions for Non-Compliance</p>
                        <p className="text-xs text-gray-700">Potential consequences for code breaches including corrective action plans and contract termination.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Commitments */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Our Commitments to Customers
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-6 border border-emerald-500/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Service Standards</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Treat all customers with respect and dignity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Provide clear, understandable information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Prioritize customer needs over company interests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Maintain professional integrity at all times</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Protection Measures</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive data protection safeguards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Transparent complaint resolution process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Regular service quality monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Continuous improvement initiatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-8 border border-emerald-500/30">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Questions About Our TPI Standards?</h2>
              <p className="text-gray-700 text-center mb-6">
                We're committed to transparency and welcome any questions about our TPI Code of Conduct.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Call Us</p>
                  <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a>
                  <p className="text-xs text-gray-600 mt-1">Mon-Fri, 9AM-5PM</p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Email Us</p>
                  <a href="mailto:hello@watt.co.uk" className="text-green-600 hover:text-green-700">hello@watt.co.uk</a>
                  <p className="text-xs text-gray-600 mt-1">General inquiries</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Visit Us</p>
                  <p className="text-sm text-gray-600">St Ann's House, Manchester</p>
                  <p className="text-xs text-gray-600 mt-1">Business hours</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TPICodePage;