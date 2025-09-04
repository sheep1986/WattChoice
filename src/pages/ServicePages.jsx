import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Droplet, Wifi, Phone, Building2, FileText, Users, Mail, MapPin, 
  ArrowRight, CheckCircle, Shield, Clock, PoundSterling, Award, TrendingDown,
  AlertCircle, Calculator, HelpCircle, BookOpen, CreditCard, Scale, Briefcase,
  UserCheck, FileSearch, Gauge, Globe, BarChart3
} from 'lucide-react';

// Shared Page Layout Component
function ServicePageLayout({ title, intro, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
          {intro && <p className="text-xl text-gray-700 mb-8 max-w-3xl">{intro}</p>}
        </motion.div>
      </section>
      <div className="container mx-auto max-w-6xl px-4 py-10">{children}</div>
    </div>
  );
}

// Card Component
function Card({ className = "", children }) {
  return <div className={`bg-white rounded-2xl shadow-lg ${className}`}>{children}</div>;
}

// Pass-Through vs Fixed Page
export const PassThroughPage = () => {
  return (
    <ServicePageLayout 
      title="Pass-Through vs Fixed Contracts"
      intro="Understand the pros and cons and when each approach wins for your business"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Pass-Through Contracts</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Direct wholesale market pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Benefit from falling markets</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Full transparency on costs</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Requires active management</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Price volatility risk</span>
            </li>
          </ul>
        </Card>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Fixed Contracts</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Budget certainty</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Protection from price rises</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Simple to manage</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Can't benefit from price falls</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Risk premium included</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
        <p className="mb-6">We'll model cost scenarios and volatility risk so you can choose confidently</p>
        <a 
          href="https://app.watt.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all"
        >
          Get Expert Advice <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </ServicePageLayout>
  );
};

// Suppliers Page
export const SuppliersPage = () => {
  const suppliers = [
    { name: "British Gas", type: "Gas & Electricity", rating: 4.5 },
    { name: "EDF Energy", type: "Gas & Electricity", rating: 4.3 },
    { name: "E.ON", type: "Gas & Electricity", rating: 4.4 },
    { name: "Scottish Power", type: "Gas & Electricity", rating: 4.2 },
    { name: "SSE", type: "Gas & Electricity", rating: 4.5 },
    { name: "Octopus Energy", type: "Electricity", rating: 4.8 },
    { name: "Shell Energy", type: "Gas & Electricity", rating: 4.3 },
    { name: "Total Energies", type: "Gas & Electricity", rating: 4.1 },
    { name: "Crown Gas & Power", type: "Gas & Electricity", rating: 4.4 },
    { name: "Gazprom", type: "Gas", rating: 4.0 },
    { name: "Haven Power", type: "Electricity", rating: 4.3 },
    { name: "Smartest Energy", type: "Electricity", rating: 4.2 }
  ];

  return (
    <ServicePageLayout 
      title="Our Supplier Network"
      intro="We work with 30+ reputable UK suppliers to find you the best deals"
    >
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <Building2 className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">30+ Suppliers</h3>
          <p className="text-gray-700">Access to the UK's leading energy suppliers</p>
        </Card>
        <Card className="p-6">
          <BarChart3 className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Rates</h3>
          <p className="text-gray-700">We negotiate the best prices for your business</p>
        </Card>
        <Card className="p-6">
          <Shield className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Vetted Partners</h3>
          <p className="text-gray-700">All suppliers meet our quality standards</p>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Supplier Partners</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {suppliers.map((supplier, index) => (
          <Card key={index} className="p-4 hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-gray-900">{supplier.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{supplier.type}</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(supplier.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
              ))}
              <span className="text-sm text-gray-600 ml-1">{supplier.rating}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://app.watt.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
        >
          Compare Supplier Rates <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </ServicePageLayout>
  );
};

// How We Get Paid Page
export const HowPaidPage = () => {
  return (
    <ServicePageLayout 
      title="How We Get Paid"
      intro="Complete transparency on our commission structure and fees"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-8">
          <CreditCard className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission-Based Model</h2>
          <p className="text-gray-700 mb-4">
            We receive commission from energy suppliers when we successfully place your business with them. 
            This allows us to provide our comparison and switching service at no direct cost to you.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>No upfront fees to you</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Commission paid by suppliers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Disclosed on request</span>
            </li>
          </ul>
        </Card>

        <Card className="p-8">
          <Scale className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-4">
            We're committed to finding you the best deal regardless of commission rates. 
            Our recommendations are based solely on what's best for your business needs.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Impartial advice</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Best value focus</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Long-term relationships</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Transparency Promise</h3>
        <p className="text-gray-700 mb-4">
          We believe in complete transparency. If you'd like to know the exact commission we'll receive 
          from your chosen supplier, just ask. We'll provide this information before you commit to any contract.
        </p>
        <p className="text-gray-700">
          Our success is measured by your savings and satisfaction, not by commission rates. 
          That's why over 90% of our business comes from referrals and repeat customers.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions about our fees?</h3>
        <p className="text-gray-700 mb-6">We're here to explain everything clearly</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:01618338661" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-lg border border-gray-300">
            <Phone className="w-5 h-5" /> Call 0161 833 8661
          </a>
          <a 
            href="https://app.watt.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </ServicePageLayout>
  );
};

// Letter of Authority (LOA) Page
export const LOAPage = () => {
  return (
    <ServicePageLayout 
      title="Letter of Authority (LOA)"
      intro="Understanding why we need an LOA and how we use it to save you money"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <Card className="p-6">
            <FileText className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">What is an LOA?</h3>
            <p className="text-gray-700">
              A Letter of Authority is a simple document that gives us permission to speak to your 
              current suppliers on your behalf. It allows us to obtain your current rates, usage data, 
              and contract details needed to find you better deals.
            </p>
          </Card>

          <Card className="p-6">
            <Shield className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Is it safe?</h3>
            <p className="text-gray-700">
              Absolutely. An LOA doesn't commit you to anything or give us power to make changes. 
              It simply allows us to gather information. You remain in complete control of any 
              switching decisions.
            </p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What we use it for:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Obtain current rates</h4>
                <p className="text-sm text-gray-600">See exactly what you're paying now</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Check contract end dates</h4>
                <p className="text-sm text-gray-600">Ensure we switch at the right time</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Verify usage patterns</h4>
                <p className="text-sm text-gray-600">Get accurate quotes based on real data</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Identify billing errors</h4>
                <p className="text-sm text-gray-600">Spot overcharging or mistakes</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Important to know:</h3>
            <p className="text-gray-700">
              An LOA does not lock you into any deal or obligation. It's simply a tool that allows us 
              to work on your behalf to find savings. You always have the final say on any switch.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start saving?</h3>
        <a 
          href="https://app.watt.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
        >
          Start Your Switch <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </ServicePageLayout>
  );
};

// Glossary Page
export const GlossaryPage = () => {
  const terms = [
    { term: "MPAN", definition: "Meter Point Administration Number - unique identifier for electricity supply points" },
    { term: "MPRN", definition: "Meter Point Reference Number - unique identifier for gas supply points" },
    { term: "kWh", definition: "Kilowatt hour - unit of energy equal to one kilowatt of power for one hour" },
    { term: "Standing Charge", definition: "Daily fixed cost for energy supply, regardless of usage" },
    { term: "Unit Rate", definition: "Cost per kWh of energy consumed" },
    { term: "REGO", definition: "Renewable Energy Guarantees of Origin - certificates proving renewable energy" },
    { term: "CCL", definition: "Climate Change Levy - environmental tax on energy used by businesses" },
    { term: "HH Metering", definition: "Half-hourly metering - records energy use every 30 minutes" },
    { term: "Pass-Through", definition: "Contract where wholesale energy costs are passed directly to customer" },
    { term: "Fixed Contract", definition: "Energy contract with rates fixed for the duration" },
    { term: "Deemed Rate", definition: "Default expensive rate when not in a contract" },
    { term: "TPI", definition: "Third Party Intermediary - energy broker or consultant" },
    { term: "DNO", definition: "Distribution Network Operator - manages local electricity network" },
    { term: "Load Factor", definition: "Measure of how efficiently you use electricity" },
    { term: "Maximum Demand", definition: "Highest amount of power used at any point" }
  ];

  return (
    <ServicePageLayout 
      title="Energy Terms Glossary"
      intro="Plain English explanations of common energy industry terms"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {terms.map((item, index) => (
          <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.term}</h3>
            <p className="text-gray-700">{item.definition}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Still confused by energy jargon?</h3>
        <p className="mb-6">Our experts explain everything in plain English</p>
        <a href="tel:01618338661" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all">
          <Phone className="w-5 h-5" /> Call 0161 833 8661
        </a>
      </div>
    </ServicePageLayout>
  );
};

// Company Page  
export const CompanyPage = () => {
  return (
    <ServicePageLayout 
      title="About Watt Choice"
      intro="Making business utilities simple, transparent and cost-effective since 2015"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <Card className="p-6">
            <Users className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h3>
            <p className="text-gray-700">
              We're an independent energy consultancy based in Manchester, helping UK businesses 
              save money on their utility bills. Our team of experts has over 50 years combined 
              experience in the energy sector.
            </p>
          </Card>

          <Card className="p-6">
            <Award className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To make utility procurement transparent, efficient and genuinely helpful for UK businesses. 
              We believe every business deserves access to competitive energy prices without the hassle.
            </p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">Independent Advice</h4>
                <p className="text-sm text-gray-600">Not tied to any supplier</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">30+ Suppliers</h4>
                <p className="text-sm text-gray-600">Access to the whole market</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">Expert Support</h4>
                <p className="text-sm text-gray-600">Dedicated account management</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">No Hidden Costs</h4>
                <p className="text-sm text-gray-600">Commission-based model explained upfront</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
          <p className="text-gray-700">Businesses Helped</p>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">£50M+</div>
          <p className="text-gray-700">Total Savings</p>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
          <p className="text-gray-700">Trustpilot Rating</p>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">8 Years</div>
          <p className="text-gray-700">In Business</p>
        </Card>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to join thousands of satisfied customers?</h3>
        <a 
          href="https://app.watt.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
        >
          Get Started Today <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </ServicePageLayout>
  );
};

// Careers Page
export const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  
  const jobs = [
    { 
      id: 1, 
      role: "Energy Consultant", 
      type: "Full-time", 
      location: "Manchester", 
      department: "Sales",
      description: "Help businesses save money on their energy bills while building your career in the growing green energy sector." 
    },
    { 
      id: 2, 
      role: "Business Development Manager", 
      type: "Hybrid", 
      location: "UK Wide", 
      department: "Business Development",
      description: "Drive growth by building relationships with new business clients and partners." 
    },
    { 
      id: 3, 
      role: "Customer Success Manager", 
      type: "Full-time", 
      location: "Manchester", 
      department: "Customer Service",
      description: "Ensure our customers get the most from our services and maintain long-term relationships." 
    },
    { 
      id: 4, 
      role: "Renewals Specialist", 
      type: "Full-time", 
      location: "Manchester", 
      department: "Renewals",
      description: "Manage contract renewals and help existing customers continue saving." 
    }
  ];

  return (
    <ServicePageLayout 
      title="Careers at Watt Choice"
      intro="Join our team and help UK businesses save on their utilities"
    >
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <Briefcase className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Great Culture</h3>
          <p className="text-gray-700">Friendly, supportive team environment with regular social events</p>
        </Card>
        <Card className="p-6">
          <TrendingDown className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Career Growth</h3>
          <p className="text-gray-700">Clear progression paths and ongoing training opportunities</p>
        </Card>
        <Card className="p-6">
          <Award className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Rewards & Benefits</h3>
          <p className="text-gray-700">Competitive salary, uncapped commission, and comprehensive benefits</p>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
      <div className="space-y-4 mb-12">
        {jobs.map(job => (
          <Card 
            key={job.id} 
            className="p-6 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setSelectedJob(job)}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.role}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {job.department}
                  </span>
                </div>
                <p className="mt-3 text-gray-700">{job.description}</p>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see a suitable role?</h3>
        <p className="text-gray-700 mb-6">
          We're always looking for talented people. Send us your CV and we'll keep you in mind for future opportunities.
        </p>
        <a 
          href="mailto:careers@wattchoice.co.uk" 
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5" /> Send Your CV
        </a>
      </div>
    </ServicePageLayout>
  );
};

// Compliance Page
export const CompliancePage = () => {
  return (
    <ServicePageLayout 
      title="Compliance & Regulation"
      intro="Our commitment to regulatory compliance and industry best practices"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-8">
          <Scale className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
          <p className="text-gray-700 mb-4">
            We operate in full compliance with UK energy market regulations and maintain the highest 
            standards of business conduct.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Ofgem TPI Code compliant</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>GDPR compliant</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>FCA principles adherence</span>
            </li>
          </ul>
        </Card>

        <Card className="p-8">
          <Shield className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
          <p className="text-gray-700 mb-4">
            Your data security is our priority. We implement robust measures to protect your 
            business information.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Encrypted data storage</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Regular security audits</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Staff training on data protection</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Memberships</h3>
          <p className="text-gray-700 mb-4">
            We're proud members of key industry bodies that promote best practices and ethical business conduct:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">Energy Brokers Association</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">TPI Code Signatory</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold">Chamber of Commerce</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Complaints Procedure</h3>
          <p className="text-gray-700 mb-4">
            We aim to resolve any issues quickly and fairly. If you have a complaint:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Contact our customer service team first</li>
            <li>We'll acknowledge within 2 working days</li>
            <li>Full investigation within 10 working days</li>
            <li>If unresolved, escalate to our compliance officer</li>
            <li>External ombudsman available as final recourse</li>
          </ol>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a compliance question?</h3>
        <a 
          href="mailto:compliance@wattchoice.co.uk" 
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5" /> Contact Compliance Team
        </a>
      </div>
    </ServicePageLayout>
  );
};

// Contact Page
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your enquiry. We\'ll be in touch within 24 hours.');
  };

  return (
    <ServicePageLayout 
      title="Contact Us"
      intro="Get in touch with our team of energy experts"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <Phone className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-700 mb-2">Monday to Friday, 9am - 5:30pm</p>
            <a href="tel:01618338661" className="text-green-600 font-bold text-lg hover:text-green-700">
              0161 833 8661
            </a>
          </Card>

          <Card className="p-6">
            <Mail className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-700 mb-2">We aim to respond within 24 hours</p>
            <a href="mailto:hello@wattchoice.co.uk" className="text-green-600 font-bold hover:text-green-700">
              hello@wattchoice.co.uk
            </a>
          </Card>

          <Card className="p-6">
            <MapPin className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700">
              St Ann's House<br />
              5th Floor, St Ann's Square<br />
              Manchester<br />
              M2 7LP
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
            <div className="text-gray-700 space-y-1">
              <p><span className="font-semibold">Monday - Friday:</span> 9:00am - 5:30pm</p>
              <p><span className="font-semibold">Saturday:</span> Closed</p>
              <p><span className="font-semibold">Sunday:</span> Closed</p>
            </div>
          </Card>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default ServicePageLayout;