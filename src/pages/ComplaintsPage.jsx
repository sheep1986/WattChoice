import React from 'react';
import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
import { MessageCircle, Phone, Mail, Clock, Users, AlertCircle, CheckCircle, FileText, ArrowRight, MapPin, Shield } from 'lucide-react';

const ComplaintsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      {/* Helmet SEO tags commented out - can be re-enabled when HelmetProvider is configured
      <Helmet>
        <title>Complaints Procedure | Watt Choice - Customer Service & Resolution</title>
        <meta name="description" content="Watt Choice complaints procedure. Learn how to raise concerns, our resolution process, escalation procedures, and ombudsman contact details." />
        <meta name="keywords" content="complaints procedure, customer service, dispute resolution, ombudsman, escalation process, Watt Choice complaints" />
        <link rel="canonical" href="https://www.wattchoice.co.uk/complaints" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Complaints Procedure",
            "description": "Watt Choice complaints handling procedure and customer service information",
            "url": "https://www.wattchoice.co.uk/complaints",
            "publisher": {
              "@type": "Organization",
              "name": "Watt Choice",
              "url": "https://www.wattchoice.co.uk",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+44-161-833-8661",
                  "contactType": "Customer Service",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "resolutions@watt.co.uk",
                  "contactType": "Complaints"
                }
              ]
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
              <MessageCircle className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Complaints Procedure</h1>
            <p className="text-xl text-gray-700">
              We're committed to resolving your concerns quickly and fairly.
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
                Our Commitment to You
              </h2>
              <div className="prose prose-invert max-w-none text-gray-700">
                <p className="mb-4">
                  At Watt Choice, we strive to provide excellent service to all our customers. However, we recognize that there may be occasions when you're not satisfied with our service. We take all complaints seriously and are committed to resolving them efficiently and fairly.
                </p>
                <p className="mb-4">
                  <strong>What is a complaint?</strong> A complaint is any contact from a customer who is not happy with our service. This can be communicated by phone, email, or letter.
                </p>
                <p className="mb-4">
                  All complaints are treated confidentially and we aim to resolve them as quickly as possible while ensuring a thorough investigation.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-green-600" />
                How to Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    Phone
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <a href="tel:01618338661" className="text-green-600 hover:text-green-700 font-semibold">0161 833 8661</a>
                  </p>
                  <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-green-600" />
                    Email
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <a href="mailto:resolutions@watt.co.uk" className="text-green-600 hover:text-green-700 font-semibold">resolutions@watt.co.uk</a>
                  </p>
                  <p className="text-sm text-gray-600">Dedicated complaints email address</p>
                </div>
              </div>

              <div className="mt-6 bg-white/50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Postal Address
                </h3>
                <div className="text-gray-700">
                  <p className="font-semibold">Watt Choice Customer Services</p>
                  <p>St Ann's House, 5th Floor</p>
                  <p>St Ann's Square</p>
                  <p>Manchester, M2 7LP</p>
                </div>
              </div>
            </div>

            {/* Two-Stage Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Our Two-Stage Complaint Process
              </h2>
              
              {/* Stage One */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-6 border border-emerald-500/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Stage One: Initial Investigation</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Your complaint is assigned to a designated complaints officer</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You'll receive an email receipt within 24 hours</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>A case file is opened and investigation begins immediately</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Full response provided within 28 days if not resolved immediately</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-gray-100/50 rounded-lg p-4 border border-gray-300">
                        <p className="text-sm text-gray-700">
                          <Clock className="w-4 h-4 text-green-600 inline mr-2" />
                          <strong>Timeline:</strong> Most complaints are resolved at this stage within 28 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-gray-500" />
                </div>

                {/* Stage Two */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Stage Two: Independent Escalation</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>If unsatisfied, your complaint is escalated to an independent code manager</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Complex complaints receive a full independent audit</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>We attempt to resolve within an additional 28 days</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Regular updates provided if resolution takes longer</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-gray-100/50 rounded-lg p-4 border border-gray-300">
                        <p className="text-sm text-gray-700">
                          <Shield className="w-4 h-4 text-blue-600 inline mr-2" />
                          <strong>Independence:</strong> Stage Two is handled by managers independent from the original service team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Business Special Provision */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-green-600" />
                Micro Business Protection
              </h2>
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Special Rights for Micro Businesses</h3>
                <p className="text-gray-700 mb-4">
                  If you are a micro business and your complaint remains unresolved after 8 weeks, you have the right to refer your case directly to the Energy Ombudsman.
                </p>
                
                <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Ombudsman Services: Energy</h4>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span>PO Box 966, Warrington WA4 9DF</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400" />
                      <a href="tel:03304401624" className="text-amber-400 hover:text-amber-300">0330 440 1624</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-400" />
                      <a href="mailto:enquiry@ombudsman-services.org" className="text-amber-400 hover:text-amber-300">enquiry@ombudsman-services.org</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Principles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Our Key Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Confidentiality
                  </h3>
                  <p className="text-gray-700 text-sm">
                    All complaints are handled with strict confidentiality. Your personal information and complaint details are protected throughout the process.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Efficiency
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We aim to resolve complaints as quickly as possible while ensuring thorough investigation and fair outcomes for all parties.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We use feedback from complaints to continuously improve our services and prevent similar issues from occurring in the future.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Transparency
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We maintain clear records of all complaints and provide regular updates on the progress of investigations and resolutions.
                  </p>
                </div>
              </div>
            </div>

            {/* What Information to Include */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                What to Include in Your Complaint
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>To help us resolve your complaint quickly, please provide:</p>
                
                <div className="grid gap-3">
                  {[
                    { title: "Your Contact Details", desc: "Full name, phone number, and email address" },
                    { title: "Account Information", desc: "Your customer reference number or account details" },
                    { title: "Complaint Summary", desc: "A clear description of the issue and what went wrong" },
                    { title: "Desired Outcome", desc: "What you would like us to do to resolve the matter" },
                    { title: "Supporting Evidence", desc: "Any relevant documents, emails, or correspondence" },
                    { title: "Previous Contact", desc: "Details of any previous discussions about this issue" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Summary */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                Resolution Timeline
              </h2>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-200">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">24 Hours</div>
                    <p className="text-sm text-gray-600">Email acknowledgment</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">28 Days</div>
                    <p className="text-sm text-gray-600">Stage One resolution</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">28 Days</div>
                    <p className="text-sm text-gray-600">Stage Two resolution</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400 mb-1">8 Weeks</div>
                    <p className="text-sm text-gray-600">Ombudsman referral</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-8 border border-emerald-500/30">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ready to Raise a Complaint?</h2>
              <p className="text-gray-700 text-center mb-6">
                We're here to help resolve your concerns. Contact us using any of the methods below.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Call Our Team</p>
                  <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a>
                  <p className="text-xs text-gray-600 mt-1">Mon-Fri, 9AM-5PM</p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Email Resolutions</p>
                  <a href="mailto:resolutions@watt.co.uk" className="text-green-600 hover:text-green-700">resolutions@watt.co.uk</a>
                  <p className="text-xs text-gray-600 mt-1">Dedicated complaints email</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Write to Us</p>
                  <p className="text-sm text-gray-600">St Ann's House, Manchester</p>
                  <p className="text-xs text-gray-600 mt-1">Full address above</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplaintsPage;