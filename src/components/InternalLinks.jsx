import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Droplet, Wifi, Phone, Building2, BookOpen, Users } from 'lucide-react';

export const InternalLinkStrategy = {
  // Primary service pages - highest priority for internal linking
  primaryPages: [
    { path: '/business-electricity', text: 'Business Electricity', keyword: 'business electricity' },
    { path: '/business-gas', text: 'Business Gas', keyword: 'business gas' },
    { path: '/business-water', text: 'Business Water', keyword: 'business water' },
    { path: '/get-a-quote', text: 'Get a Quote', keyword: 'free energy quote' },
    { path: '/large-business', text: 'Large Business', keyword: 'corporate energy' }
  ],
  
  // Secondary pages for supporting content
  secondaryPages: [
    { path: '/business-broadband', text: 'Business Broadband', keyword: 'business broadband' },
    { path: '/business-telecoms', text: 'Business Telecoms', keyword: 'business phone' },
    { path: '/knowledge', text: 'Energy Guides', keyword: 'energy advice' },
    { path: '/case-studies', text: 'Case Studies', keyword: 'success stories' },
    { path: '/company', text: 'About Us', keyword: 'energy consultants' }
  ],
  
  // Footer/utility pages
  utilityPages: [
    { path: '/contact', text: 'Contact Us', keyword: 'contact' },
    { path: '/suppliers', text: 'Our Suppliers', keyword: 'energy suppliers' },
    { path: '/how-we-get-paid', text: 'How We Get Paid', keyword: 'commission' },
    { path: '/glossary', text: 'Energy Glossary', keyword: 'energy terms' },
    { path: '/faqs', text: 'FAQs', keyword: 'questions' }
  ]
};

export const RelatedServicesWidget = ({ currentPage, className = '' }) => {
  const services = [
    { icon: Zap, title: 'Business Electricity', path: '/business-electricity', desc: 'Save up to 45% on electricity' },
    { icon: Shield, title: 'Business Gas', path: '/business-gas', desc: 'Wholesale gas rates' },
    { icon: Droplet, title: 'Business Water', path: '/business-water', desc: 'Switch & save 20%' },
    { icon: Wifi, title: 'Business Broadband', path: '/business-broadband', desc: 'Fast, reliable connectivity' },
    { icon: Phone, title: 'Business Telecoms', path: '/business-telecoms', desc: 'Complete phone solutions' },
    { icon: Building2, title: 'Large Business', path: '/large-business', desc: 'Corporate energy management' }
  ];
  
  const relatedServices = services.filter(s => s.path !== currentPage);
  
  return (
    <div className={`related-services ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-6">Other Services We Offer</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedServices.slice(0, 3).map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all group"
          >
            <service.icon className="w-8 h-8 text-green-400 mb-2" />
            <h4 className="font-semibold text-white mb-1">{service.title}</h4>
            <p className="text-sm text-gray-400 mb-2">{service.desc}</p>
            <span className="text-green-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const CTALinksSection = ({ primaryCTA = 'quote', className = '' }) => {
  const ctas = {
    quote: {
      title: 'Get Your Free Quote',
      subtitle: 'Compare prices from 30+ suppliers in 5 minutes',
      path: '/get-a-quote',
      buttonText: 'Get Free Quote'
    },
    contact: {
      title: 'Speak to an Expert',
      subtitle: 'Call us on 0161 833 8661 for immediate assistance',
      path: '/contact',
      buttonText: 'Contact Us'
    },
    calculator: {
      title: 'Calculate Your Savings',
      subtitle: 'See how much you could save on energy bills',
      path: '/savings-calculator',
      buttonText: 'Calculate Savings'
    }
  };
  
  const cta = ctas[primaryCTA] || ctas.quote;
  
  return (
    <div className={`cta-links-section bg-green-900/30 rounded-lg p-8 ${className}`}>
      <h3 className="text-3xl font-bold text-white mb-2">{cta.title}</h3>
      <p className="text-gray-300 mb-6">{cta.subtitle}</p>
      <Link
        to={cta.path}
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
      >
        {cta.buttonText} <ArrowRight />
      </Link>
    </div>
  );
};

export const BreadcrumbLinks = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb-links ${className}`}>
      <ol 
        className="flex items-center space-x-2 text-sm"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
        >
          <Link 
            to="/" 
            className="text-gray-400 hover:text-green-400"
            itemProp="item"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-gray-500">/</li>
            <li 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="text-gray-400 hover:text-green-400"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span className="text-white" itemProp="name">{item.name}</span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export const KnowledgeHubLinks = ({ currentArticle, className = '' }) => {
  const articles = [
    { 
      path: '/knowledge/switching-guide', 
      title: 'Complete Guide to Switching Business Energy',
      category: 'Guides'
    },
    { 
      path: '/knowledge/contract-types', 
      title: 'Understanding Energy Contract Types',
      category: 'Education'
    },
    { 
      path: '/knowledge/market-insights', 
      title: 'UK Energy Market Insights 2025',
      category: 'Market Analysis'
    },
    { 
      path: '/knowledge/green-energy', 
      title: 'Green Energy Options for Business',
      category: 'Sustainability'
    },
    { 
      path: '/knowledge/avoiding-rollover', 
      title: 'How to Avoid Expensive Rollover Contracts',
      category: 'Tips'
    }
  ];
  
  const relatedArticles = articles.filter(a => a.path !== currentArticle);
  
  return (
    <div className={`knowledge-hub-links ${className}`}>
      <h3 className="text-xl font-bold text-white mb-4">
        <BookOpen className="inline w-5 h-5 mr-2 text-green-400" />
        Related Guides
      </h3>
      <ul className="space-y-3">
        {relatedArticles.slice(0, 4).map((article, index) => (
          <li key={index}>
            <Link
              to={article.path}
              className="block hover:bg-slate-800/30 rounded p-2 transition-all"
            >
              <span className="text-xs text-green-400 uppercase tracking-wide">
                {article.category}
              </span>
              <h4 className="text-white hover:text-green-400 transition-colors">
                {article.title}
              </h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FooterLinkStructure = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Services Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/business-electricity" className="hover:text-green-400">Business Electricity</Link></li>
              <li><Link to="/business-gas" className="hover:text-green-400">Business Gas</Link></li>
              <li><Link to="/business-water" className="hover:text-green-400">Business Water</Link></li>
              <li><Link to="/business-broadband" className="hover:text-green-400">Business Broadband</Link></li>
              <li><Link to="/large-business" className="hover:text-green-400">Large Business</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-green-400">Case Studies</Link></li>
              <li><Link to="/careers" className="hover:text-green-400">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
              <li><Link to="/suppliers" className="hover:text-green-400">Our Suppliers</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/knowledge" className="hover:text-green-400">Knowledge Hub</Link></li>
              <li><Link to="/glossary" className="hover:text-green-400">Energy Glossary</Link></li>
              <li><Link to="/faqs" className="hover:text-green-400">FAQs</Link></li>
              <li><Link to="/pass-through-fixed" className="hover:text-green-400">Contract Types</Link></li>
              <li><Link to="/how-we-get-paid" className="hover:text-green-400">How We Get Paid</Link></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-green-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-400">Terms of Service</Link></li>
              <li><Link to="/complaints" className="hover:text-green-400">Complaints</Link></li>
              <li><Link to="/compliance" className="hover:text-green-400">Compliance</Link></li>
              <li><Link to="/tpi-code" className="hover:text-green-400">TPI Code</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="mb-4">
            © 2025 Watt Utilities UK Ltd. Company Registration: 03912588. 
            Registered Office: St Ann's House, Manchester, M2 7LP
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://twitter.com/wattutilities" className="hover:text-green-400" rel="noopener noreferrer" target="_blank">Twitter</a>
            <a href="https://www.facebook.com/wattutilitiesuk" className="hover:text-green-400" rel="noopener noreferrer" target="_blank">Facebook</a>
            <a href="https://www.linkedin.com/company/watt-utilities-uk-ltd" className="hover:text-green-400" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};