import React from 'react';
import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Mail, Phone, MapPin, FileText, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      {/* Helmet SEO tags commented out - can be re-enabled when HelmetProvider is configured
      <Helmet>
        <title>Privacy Policy | Watt Choice - Your Data Protection Rights</title>
        <meta name="description" content="Watt Choice Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with UK data protection laws." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, Watt Choice privacy" />
        <link rel="canonical" href="https://www.wattchoice.co.uk/privacy" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Watt Choice privacy policy and data protection information",
            "url": "https://www.wattchoice.co.uk/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "Watt Choice",
              "url": "https://www.wattchoice.co.uk"
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
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-700">
              Your privacy is important to us. This policy explains how we protect your data.
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
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none text-gray-700">
                <p className="mb-4">
                  Watt Choice Ltd ("WATT", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website www.wattchoice.co.uk (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="mb-4">
                  This privacy policy is provided in a layered format so you can click through to the specific areas set out below. Please also use the Glossary to understand the meaning of some of the terms used in this privacy policy.
                </p>
                <p className="mb-4">
                  <strong>Last updated:</strong> January 2025
                </p>
              </div>
            </div>

            {/* Data Controller */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Data Controller Information
              </h2>
              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Company:</strong> Watt Choice Ltd</p>
                  <p><strong>Data Protection Officer:</strong> Peter Hunter</p>
                  <p><strong>Email:</strong> <a href="mailto:Peter@watt.co.uk" className="text-green-600 hover:text-green-700">Peter@watt.co.uk</a></p>
                  <p><strong>Phone:</strong> <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a></p>
                  <p><strong>Address:</strong> St Ann's House, 5th Floor, St Ann's Square, Manchester, M2 7LP</p>
                  <p><strong>ICO Registration Number:</strong> ZA295633</p>
                </div>
              </div>
            </div>

            {/* Data We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-green-600" />
                Personal Data We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                
                <div className="grid gap-4">
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Identity Data</h3>
                    <p className="text-sm">First name, last name, username or similar identifier, title, date of birth and gender.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Data</h3>
                    <p className="text-sm">Billing address, delivery address, email address and telephone numbers.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Financial Data</h3>
                    <p className="text-sm">Bank account and payment card details.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Transaction Data</h3>
                    <p className="text-sm">Details about payments to and from you and other details of products and services you have purchased from us.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Data</h3>
                    <p className="text-sm">Internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Profile Data</h3>
                    <p className="text-sm">Your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Usage Data</h3>
                    <p className="text-sm">Information about how you use our website, products and services.</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Marketing and Communications Data</h3>
                    <p className="text-sm">Your preferences in receiving marketing from us and our third parties and your communication preferences.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-green-600" />
                How We Use Your Personal Data
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Where we need to perform the contract we are about to enter into or have entered into with you.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Where we need to comply with a legal obligation.</span>
                  </li>
                </ul>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <p className="text-sm">
                    <strong>Note:</strong> We do not transfer your personal data outside the United Kingdom.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Data Security
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                </p>
                <p>
                  We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                Data Retention
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                </p>
                <p>
                  To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Your Legal Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
                
                <div className="grid gap-3">
                  {[
                    { title: "Request access", desc: "to your personal data (commonly known as a 'data subject access request')." },
                    { title: "Request correction", desc: "of the personal data that we hold about you." },
                    { title: "Request erasure", desc: "of your personal data." },
                    { title: "Object to processing", desc: "of your personal data where we are relying on a legitimate interest." },
                    { title: "Request restriction", desc: "of processing of your personal data." },
                    { title: "Request transfer", desc: "of your personal data to you or to a third party." },
                    { title: "Withdraw consent", desc: "at any time where we are relying on consent to process your personal data." }
                  ].map((right, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-1">{right.title}</h3>
                      <p className="text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4">
                  If you wish to exercise any of the rights set out above, please contact us at{' '}
                  <a href="mailto:Peter@watt.co.uk" className="text-green-600 hover:text-green-700">Peter@watt.co.uk</a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-green-600" />
                Cookies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. 
                </p>
                <p>
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                </p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Link className="w-6 h-6 text-green-600" />
                Third-Party Links
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                </p>
              </div>
            </div>

            {/* Marketing Communications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-green-600" />
                Marketing Communications
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. You can opt out of receiving marketing communications from us at any time by:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Contacting us at <a href="mailto:Peter@watt.co.uk" className="text-green-600 hover:text-green-700">Peter@watt.co.uk</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Calling us on <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Using the unsubscribe link in any marketing email we send you</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-green-600" />
                How to Complain
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK regulator for data protection matters (<a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">www.ico.org.uk</a>). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">ICO Contact Details:</p>
                  <p className="text-sm">Information Commissioner's Office</p>
                  <p className="text-sm">Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                  <p className="text-sm">Helpline: 0303 123 1113</p>
                  <p className="text-sm">Website: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">www.ico.org.uk</a></p>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to update this privacy policy at any time, and we will provide you with a new privacy policy when we make any substantial updates. We may also notify you in other ways from time to time about the processing of your personal information.
                </p>
                <p>
                  This version was last updated in January 2025 and historic versions can be obtained by contacting us.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-8 border border-emerald-500/30">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contact Our Data Protection Officer</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Call Us</p>
                  <a href="tel:01618338661" className="text-green-600 hover:text-green-700">0161 833 8661</a>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold">Email DPO</p>
                  <a href="mailto:Peter@watt.co.uk" className="text-green-600 hover:text-green-700">Peter@watt.co.uk</a>
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

export default PrivacyPage;