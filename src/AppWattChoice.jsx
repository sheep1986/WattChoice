import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Import Service Pages
import BusinessElectricityEnhanced from './pages/BusinessElectricityEnhanced';
import BusinessGasPage from './pages/BusinessGas';
import { BusinessWater, BusinessBroadband, BusinessTelecoms, LargeBusiness, ContactPage as ContactPageImport, CompanyPage as CompanyPageImport } from './pages/AllServicePages';
import { PassThroughPage, SuppliersPage, HowPaidPage, LOAPage, GlossaryPage, CompanyPage, CareersPage, CompliancePage, ContactPage } from './pages/ServicePages';
import SupplierCarousel from './components/SupplierCarousel';
import {
  CheckCircle,
  ShieldCheck,
  Phone,
  Zap,
  Droplet,
  Building2,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Wifi,
  PhoneCall,
  Calculator,
  BarChart3,
  Clock,
  Heart,
  ThumbsUp,
  Home,
  Mail,
  MapPin,
  Check,
  Info,
  AlertCircle,
  Sparkles,
  Target,
  Shield,
  Percent,
  ChevronRight,
  Lock,
  HeartHandshake,
  ArrowUpRight,
  PlayCircle,
  Download,
  FileText,
  Lightbulb,
  Rocket,
  Crown,
  Gift,
  Bell,
  Settings,
  HelpCircle,
  MessageSquare,
  Send,
  Eye,
  DollarSign,
  Battery,
  Gauge,
  Briefcase,
  ChevronUp
} from "lucide-react";

// Modern Card Components with clean design
function Card({ className = "", children, hover = false }) {
  return (
    <div className={`bg-white rounded-xl shadow-md ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ className = "", children }) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return <h3 className={`text-xl font-bold text-gray-900 ${className}`}>{children}</h3>;
}

function CardContent({ className = "", children }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

// Modern Button Components
function Button({ variant = "primary", size = "md", className = "", children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl focus:ring-green-500",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500",
    outline: "border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}

// ScrollToTop Component - Ensures page scrolls to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

// Animated Counter Component
function AnimatedCounter({ value, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      // Remove any non-numeric characters except decimal points
      const cleanValue = String(value).replace(/[^0-9.]/g, '');
      const end = parseFloat(cleanValue) || 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);
  
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// Parallax Component
function ParallaxSection({ children, offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

// Floating Action Button
function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const actions = [
    { icon: Phone, label: "Call Us", action: () => window.location.href = "tel:01611234567" },
    { icon: MessageSquare, label: "Live Chat", action: () => console.log("Open chat") },
    { icon: Calculator, label: "Quick Quote", action: () => window.location.href = "/get-quote" },
    { icon: ChevronUp, label: "Back to Top", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
  ];
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Expanded Actions */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div className="absolute bottom-16 right-0 space-y-3">
                {actions.map((action, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={action.action}
                    className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
                  >
                    <action.icon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">{action.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Main FAB */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-2xl"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <HelpCircle className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


// Modern Form Components
function Input({ className = "", ...props }) {
  return (
    <input 
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${className}`} 
      {...props} 
    />
  );
}

function Select({ className = "", children, ...props }) {
  return (
    <select 
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white ${className}`} 
      {...props}
    >
      {children}
    </select>
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea 
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${className}`} 
      {...props} 
    />
  );
}

// Modern Navigation Bar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { icon: Zap, title: "Business Energy", desc: "Compare electricity & gas", link: "/business-energy" },
    { icon: Droplet, title: "Business Water", desc: "Switch & save on water", link: "/business-water" },
    { icon: Wifi, title: "Business Broadband", desc: "Fast, reliable internet", link: "/business-broadband" },
    { icon: PhoneCall, title: "Business Phone", desc: "VoIP & phone systems", link: "/business-phone" },
    { icon: Shield, title: "Business Insurance", desc: "Protect your business", link: "/business-insurance" },
    { icon: Building2, title: "Multi-Site", desc: "Portfolio management", link: "/multi-site" }
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.ibb.co/Txrgyp2R/Watt-choice-logo-1.png" 
              alt="Watt Choice" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Our Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.link}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="p-2 bg-green-100 rounded-lg">
                            <service.icon className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-600">{service.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/how-it-works" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/business-guides" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Business Guides
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              0161 123 4567
            </Button>
            <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                Compare Prices
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-3">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.link}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <service.icon className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-gray-700">{service.title}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-100 pt-3 px-4 space-y-3">
                  <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    <Button size="md" className="w-full">Compare Prices</Button>
                  </a>
                  <Button variant="outline" size="md" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Ultra-Modern Hero Section with Advanced Animations
function HeroSection() {
  const [postcode, setPostcode] = useState("");
  const [currentSupplier, setCurrentSupplier] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  // Rotating supplier logos
  const suppliers = [
    "British Gas", "E.ON", "EDF Energy", "Scottish Power", 
    "SSE", "Octopus Energy", "Bulb", "Shell Energy"
  ];

  // Rotate suppliers
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSupplier(prev => (prev + 1) % suppliers.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  
  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-gray-50/50 via-white to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[75vh] py-4 lg:py-6">
          {/* Left Content - Centered Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-2.5 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold">
                Trusted by 50,000+ UK Businesses
              </span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1]">
              <span className="block text-gray-900">Your Business</span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Deserves Better
                </span>
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 400 12" preserveAspectRatio="none">
                  <motion.path
                    d="M 0 8 Q 100 4, 200 8 T 400 8"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#16a34a" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="block text-gray-900 mt-2">Utility Prices</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join <span className="font-bold text-gray-900">50,000+ UK businesses</span> who've 
              switched and saved with Watt Choice. Compare prices from 
              <span className="font-bold text-gray-900"> 30+ suppliers</span> in 
              <span className="font-bold text-gray-900"> under 60 seconds</span>.
            </p>

            {/* Social Proof Ticker */}
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 mb-8 border border-gray-200 shadow-sm max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Bristol Restaurant just saved £3,420/year
                    </p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-green-600 font-bold text-sm"
                >
                  LIVE
                </motion.div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`h-5 w-5 ${i === 5 ? 'text-gray-300' : 'text-yellow-500'} fill-current`} />
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.8</span>
                <span className="text-gray-600">Trustpilot</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Ofgem Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Instant Prices
                </h2>
                <p className="text-gray-600">
                  Compare quotes from 30+ trusted suppliers
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Postcode
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter postcode (e.g. M1 2AB)"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What services do you need?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Zap, label: 'Electricity', color: 'yellow' },
                      { icon: Zap, label: 'Gas', color: 'blue' },
                      { icon: Droplet, label: 'Water', color: 'cyan' },
                      { icon: Wifi, label: 'Broadband', color: 'purple' }
                    ].map((service, i) => (
                      <label key={i} className="relative cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="p-4 border-2 border-gray-200 rounded-lg peer-checked:border-green-500 peer-checked:bg-green-50 transition-all">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <service.icon className="h-5 w-5 text-gray-600 peer-checked:text-green-600" />
                              <span className="font-medium text-gray-700">{service.label}</span>
                            </div>
                            <div className="opacity-0 peer-checked:opacity-100 transition-opacity">
                              <Check className="h-5 w-5 text-green-600" />
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Spend (Estimate)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                    <input
                      type="text"
                      placeholder="500 - 10,000+"
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  Compare Prices Now
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </a>

              {/* Supplier Logos Ticker */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-3">Comparing prices from:</p>
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    key={currentSupplier}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm font-semibold text-gray-700"
                  >
                    {suppliers[currentSupplier]}
                  </motion.div>
                  <span className="text-gray-400">+29 more</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section - Unique Card Design
function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Business Energy",
      description: "Compare electricity and gas prices from leading UK suppliers",
      savings: "45%",
      savingsText: "Average Savings",
      gradient: "from-yellow-400 to-orange-500",
      bgPattern: "bg-gradient-to-br from-yellow-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-yellow-400 to-orange-400",
      features: ["30+ Suppliers", "5 min switch", "No interruption"]
    },
    {
      icon: Droplet,
      title: "Business Water",
      description: "Switch water suppliers and reduce your water bills",
      savings: "30%",
      savingsText: "Cost Reduction",
      gradient: "from-blue-400 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-400",
      features: ["Deregulated market", "Better service", "Lower prices"]
    },
    {
      icon: Wifi,
      title: "Business Broadband",
      description: "Fast, reliable internet for your business needs",
      savings: "£19",
      savingsText: "From /month",
      gradient: "from-purple-400 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-400",
      features: ["Fibre speeds", "99.9% uptime", "24/7 support"]
    },
    {
      icon: PhoneCall,
      title: "Business Phone",
      description: "VoIP and traditional phone systems",
      savings: "50%",
      savingsText: "Lower Bills",
      gradient: "from-green-400 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-400",
      features: ["Cloud-based", "Free calls", "Mobile apps"]
    },
    {
      icon: Shield,
      title: "Business Insurance",
      description: "Comprehensive coverage for your business",
      savings: "5",
      savingsText: "Min to compare",
      gradient: "from-red-400 to-rose-500",
      bgPattern: "bg-gradient-to-br from-red-50 to-rose-50",
      iconBg: "bg-gradient-to-br from-red-400 to-rose-400",
      features: ["All covers", "Top insurers", "Best prices"]
    },
    {
      icon: Building2,
      title: "Multi-Site Energy",
      description: "Manage multiple business locations efficiently",
      savings: "1",
      savingsText: "Single contract",
      gradient: "from-indigo-400 to-purple-500",
      bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50",
      iconBg: "bg-gradient-to-br from-indigo-400 to-purple-400",
      features: ["Portfolio rates", "Central billing", "Account manager"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Compare All Your Business Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One simple comparison, multiple ways to save. We help businesses across the UK reduce their utility costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-gray-200 flex flex-col h-full">
                {/* Top accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Main Content Area */}
                <div className="flex-grow">
                  {/* Value Display - Clean, no overlaps */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-6xl font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                        {service.savings}
                      </span>
                      {service.savingsText.includes("/") ? (
                        <span className="text-sm text-gray-500 font-medium">{service.savingsText}</span>
                      ) : null}
                    </div>
                    {!service.savingsText.includes("/") && (
                      <p className="text-sm text-gray-500 font-semibold mt-1">{service.savingsText}</p>
                    )}
                  </div>
                  
                  {/* Title with subtle icon */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Icon Badge */}
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-br ${service.gradient} bg-opacity-10 rounded-xl mb-4`}>
                    <service.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  
                  {/* Minimal Feature List */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sleek CTA - Always at bottom */}
                <div className="mt-auto pt-6">
                  <Link to={`/${service.title.toLowerCase().replace(' ', '-')}`}>
                    <button className="w-full relative group/btn overflow-hidden rounded-xl bg-gray-900 px-6 py-3.5 text-white font-semibold transition-all duration-500 hover:bg-gray-800">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Compare Now
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}></div>
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-white font-semibold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-20">
                        Compare Now
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Tell us about your business",
      description: "Quick form with your current usage and requirements",
      icon: Info
    },
    {
      number: "2",
      title: "We compare the market",
      description: "Access quotes from 30+ trusted suppliers instantly",
      icon: Search
    },
    {
      number: "3",
      title: "Choose your best deal",
      description: "Review clear comparisons and select your preferred option",
      icon: Target
    },
    {
      number: "4",
      title: "We handle the switch",
      description: "Sit back while we manage the entire switching process",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Split Layout with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Watt Choice Works
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Switching business utilities has never been easier. Our simple 4-step process saves you time and money.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://i.ibb.co/ksZZDY4t/2.png"
                alt="Business energy comparison process - advisor helping client"
                className="w-full h-[400px] lg:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Quick & Simple Process</h3>
              <p className="text-gray-600">Our streamlined comparison process takes just minutes, not hours.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated advisors guide you through every step of the switching process.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Guaranteed Savings</h3>
              <p className="text-gray-600">We only recommend switches that save you money on your current rates.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-green-200 to-gray-200"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <step.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Start Comparing Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// Trust Section - Completely Redesigned
function TrustSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const benefits = [
    {
      icon: TrendingUp,
      title: "Average Savings",
      value: "£4,250",
      suffix: "/year",
      description: "Typical annual savings for our clients"
    },
    {
      icon: Clock,
      title: "Time to Compare",
      value: "60",
      suffix: "seconds",
      description: "Get instant quotes from 30+ suppliers"
    },
    {
      icon: Users,
      title: "Businesses Served",
      value: "50,000",
      suffix: "+",
      description: "UK businesses trust our service"
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "97",
      suffix: "%",
      description: "Of customers save money switching"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Operations Director",
      company: "TechHub Manchester",
      text: "Switching with Watt Choice was incredibly straightforward. They handled everything and we're now saving £5,400 per year. The team was professional throughout.",
      savings: "£5,400/year saved",
      rating: 5,
      image: "SM"
    },
    {
      name: "James Chen",
      role: "Restaurant Owner",
      company: "Golden Dragon Group",
      text: "As a multi-site business, managing utilities was complex. Watt Choice simplified everything and negotiated fantastic rates. We're saving over £12,000 annually.",
      savings: "£12,000/year saved",
      rating: 5,
      image: "JC"
    },
    {
      name: "Emma Thompson",
      role: "Finance Manager",
      company: "Bristol Retail Solutions",
      text: "The comparison was eye-opening. We had no idea we were overpaying so much. Watt Choice found us a better deal in minutes. Highly recommended!",
      savings: "£3,200/year saved",
      rating: 5,
      image: "ET"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Ofgem Compliant",
      description: "Fully regulated and compliant with industry standards"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Expert advisors guide you through every step"
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description: "Clear comparisons with no hidden charges"
    },
    {
      icon: Zap,
      title: "Seamless Switching",
      description: "We handle the entire process for you"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Your information is protected and never sold"
    },
    {
      icon: HeartHandshake,
      title: "Impartial Advice",
      description: "Independent comparison across all major suppliers"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Why UK Businesses Choose
            </h2>
            <div className="flex items-center justify-center gap-3">
              <img 
                src="https://i.ibb.co/Txrgyp2R/Watt-choice-logo-1.png" 
                alt="Watt Choice" 
                className="h-12 w-auto"
              />
              <span className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Watt Choice
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Join thousands who've already switched and saved with our expert utility comparison service
          </p>
        </motion.div>

        {/* Stats Grid - Ultra Modern with Animated Counters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                  }}
                />
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-4"
                  >
                    <benefit.icon className="h-6 w-6 text-green-700" />
                  </motion.div>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-gray-900">
                      <AnimatedCounter 
                        value={benefit.value} 
                        duration={2000}
                        prefix={String(benefit.value).includes("£") ? "£" : ""}
                      />
                    </span>
                    <span className="text-xl font-bold text-gray-500">{benefit.suffix}</span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                  
                  {/* Progress Bar */}
                  <motion.div 
                    className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(parseInt(benefit.value) / 100 * 100, 100)}%` }}
                      transition={{ delay: 0.5, duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials - Modern Tabbed Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Testimonial Content */}
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-3 text-gray-300 font-medium">5.0 Rating</span>
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                  "{testimonials[activeTab].text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[activeTab].image}
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{testimonials[activeTab].name}</div>
                      <div className="text-gray-400 text-sm">{testimonials[activeTab].role}</div>
                      <div className="text-gray-300 text-sm">{testimonials[activeTab].company}</div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block">
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg px-4 py-2">
                      <div className="text-green-400 font-bold">{testimonials[activeTab].savings}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Testimonial Tabs */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-xl mb-6">Success Stories</h3>
                {testimonials.map((testimonial, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeTab === idx 
                        ? 'bg-white/10 border border-white/20' 
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">{testimonial.company}</div>
                        <div className="text-sm text-gray-400">{testimonial.savings}</div>
                      </div>
                      <ChevronRight className={`h-5 w-5 transition-colors ${
                        activeTab === idx ? 'text-green-400' : 'text-gray-500'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img 
              src="https://i.ibb.co/RGNCyxqQ/3.png"
              alt="Business team analyzing utility savings reports"
              className="w-full h-[400px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Data-Driven Decisions</h4>
                <p className="text-gray-200">Clear comparisons and detailed savings analysis</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img 
              src="https://i.ibb.co/0pXJP3vj/4.png"
              alt="Modern office environment with energy efficient lighting"
              className="w-full h-[400px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Sustainable Solutions</h4>
                <p className="text-gray-200">Green energy options for eco-conscious businesses</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Modern Icon Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Everything you need for smarter utility management
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Saving?
        </h2>
        <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
          Get your free comparison in under 60 seconds. No obligation, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              Compare Prices Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
          <a href="tel:01618338661" className="px-8 py-4 text-lg inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-green-600 hover:bg-gray-100 shadow-lg hover:shadow-xl">
            <Phone className="h-5 w-5 mr-2" />
            Call 0161 833 8661
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>100% impartial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>Expert guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>No obligation quotes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src="https://i.ibb.co/Txrgyp2R/Watt-choice-logo-1.png" 
              alt="Watt Choice" 
              className="h-10 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-400 mb-4">
              Watt Choice is the UK's trusted business utility comparison service. 
              We help businesses save money on energy, water, broadband, and more.
            </p>
            <div className="flex gap-4">
              {/* Social Icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/business-energy" className="text-gray-400 hover:text-white transition">Business Energy</Link></li>
              <li><Link to="/business-water" className="text-gray-400 hover:text-white transition">Business Water</Link></li>
              <li><Link to="/business-broadband" className="text-gray-400 hover:text-white transition">Business Broadband</Link></li>
              <li><Link to="/business-phone" className="text-gray-400 hover:text-white transition">Business Phone</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">0161 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">hello@wattchoice.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-green-500 mt-1" />
                <span className="text-gray-400">Manchester, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Watt Choice. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
              <Link to="/complaints" className="text-gray-400 hover:text-white transition">Complaints</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Mobile Sticky CTA Button
function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 mx-auto flex max-w-xl items-center justify-center px-4 md:hidden">
      <div className="w-full rounded-2xl border border-green-500/30 bg-white shadow-2xl">
        <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:from-green-700 hover:to-emerald-700">
          Compare Prices Now <ArrowRight className="ml-2 h-4 w-4"/>
        </a>
      </div>
    </div>
  );
}

// Quote Form Page
function QuoteFormPage() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="min-h-[80vh] py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Energy Comparison
            </h1>
            <p className="text-xl text-gray-600">
              Takes less than 60 seconds • No obligation • Compare 30+ suppliers
            </p>
          </div>
          <QuoteForm onComplete={() => setShowModal(true)} />
          
          {/* Success Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
                  <p className="text-gray-600 mb-6">
                    Our energy experts will review your requirements and send you a personalised comparison within 24 hours.
                  </p>
                  <Link to="/">
                    <Button size="lg" className="w-full">Back to Home</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 404 Not Found Page
function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-black text-gray-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Back to Home
                <Home className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Page placeholder component - to be replaced with actual pages
function PagePlaceholder({ title, description }) {
  return (
    <div className="min-h-[60vh] py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <a href="https://app.watt.co.uk" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Get Your Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Live Chat Widget Component
function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you save on utilities today?", sender: "agent" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  
  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: inputMessage, 
        sender: "user" 
      }]);
      setInputMessage("");
      
      // Simulate agent response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          text: "Thanks for your message! An advisor will be with you shortly.", 
          sender: "agent" 
        }]);
      }, 1000);
    }
  };
  
  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-2xl hidden lg:flex items-center gap-2"
      >
        <MessageSquare className="h-6 w-6" />
        {!isOpen && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="overflow-hidden whitespace-nowrap pr-2"
          >
            Chat with us
          </motion.span>
        )}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-40 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden hidden lg:block"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Live Support</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={sendMessage}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Scroll Progress Indicator
function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
      style={{ transformOrigin: "0%" }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
}

// Cookie Consent Banner
function CookieConsent() {
  const [showBanner, setShowBanner] = useState(true);
  
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) setShowBanner(false);
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50 p-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-green-600" />
          <p className="text-sm text-gray-700">
            We use cookies to enhance your experience and analyze our traffic. 
            <Link to="/privacy" className="text-green-600 underline ml-1">Learn more</Link>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowBanner(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Accept All
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Main App Component with all enhanced features
export default function WattChoiceApp() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);
  }, []);
  
  // Loading Screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-gray-200 border-t-green-600 rounded-full mx-auto mb-4"
          />
          <img 
            src="https://i.ibb.co/Txrgyp2R/Watt-choice-logo-1.png" 
            alt="Watt Choice" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-gray-600">Preparing your experience...</p>
        </motion.div>
      </div>
    );
  }
  
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />
        
        {/* Routes */}
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={
            <>
              <HeroSection />
              <ServicesSection />
              <SupplierCarousel />
              <HowItWorksSection />
              <TrustSection />
              <CTASection />
            </>
          } />
          
          {/* Service Pages */}
          <Route path="/business-energy" element={<BusinessElectricityEnhanced />} />
          <Route path="/business-electricity" element={<BusinessElectricityEnhanced />} />
          <Route path="/business-gas" element={<BusinessGasPage />} />
          <Route path="/business-water" element={<BusinessWater />} />
          <Route path="/business-broadband" element={<BusinessBroadband />} />
          <Route path="/business-phone" element={<PagePlaceholder title="Business Phone Systems" description="Modern phone solutions for businesses" />} />
          <Route path="/business-telecoms" element={<BusinessTelecoms />} />
          <Route path="/business-insurance" element={<PagePlaceholder title="Business Insurance" description="Comprehensive coverage at competitive rates" />} />
          <Route path="/multi-site-energy" element={<PagePlaceholder title="Multi-Site Energy Management" description="Streamlined energy management for multiple locations" />} />
          <Route path="/large-business" element={<LargeBusiness />} />
          <Route path="/pass-through-fixed" element={<PassThroughPage />} />
          
          {/* Information Pages */}
          <Route path="/how-it-works" element={<PagePlaceholder title="How Watt Choice Works" description="Our simple 4-step process explained" />} />
          <Route path="/about" element={<PagePlaceholder title="About Watt Choice" description="Your trusted business utility partner since 2000" />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/how-we-get-paid" element={<HowPaidPage />} />
          <Route path="/loa" element={<LOAPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/case-studies" element={<PagePlaceholder title="Success Stories" description="See how we've helped businesses save" />} />
          <Route path="/business-guides" element={<PagePlaceholder title="Business Energy Guides" description="Expert guides to help you make informed decisions" />} />
          <Route path="/energy-saving-tips" element={<PagePlaceholder title="Energy Saving Tips" description="Practical ways to reduce your energy consumption" />} />
          <Route path="/contract-types" element={<PagePlaceholder title="Energy Contract Types Explained" description="Understanding different contract options" />} />
          <Route path="/switching-process" element={<PagePlaceholder title="The Switching Process" description="What happens when you switch suppliers" />} />
          <Route path="/green-energy" element={<PagePlaceholder title="Green Energy Options" description="Sustainable energy solutions for your business" />} />
          <Route path="/market-insights" element={<PagePlaceholder title="Energy Market Insights" description="Stay informed about energy market trends" />} />
          <Route path="/bill-validation" element={<PagePlaceholder title="Bill Validation Service" description="Ensure you're being charged correctly" />} />
          
          {/* Quote and Contact */}
          <Route path="/get-quote" element={<QuoteFormPage />} />
          <Route path="/get-a-quote" element={<QuoteFormPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PagePlaceholder title="Privacy Policy" description="How we protect your data" />} />
          <Route path="/terms" element={<PagePlaceholder title="Terms & Conditions" description="Terms of service for Watt Choice" />} />
          <Route path="/complaints" element={<PagePlaceholder title="Complaints Procedure" description="How we handle complaints" />} />
          <Route path="/faqs" element={<PagePlaceholder title="Frequently Asked Questions" description="Answers to common questions" />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
        
        {/* Enhanced Features */}
        <MobileCTA />
        <FloatingActionButton />
        <LiveChatWidget />
        <CookieConsent />
        
        {/* Back to Top Progress Indicator */}
        <ScrollProgressIndicator />
      </div>
    </Router>
  );
}