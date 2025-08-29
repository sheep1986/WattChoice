import React, { useMemo, useState, useEffect, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, NavLink, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { SEOHead, organizationSchema, localBusinessSchema, faqSchema } from "./SEO";
import { serviceContent } from "./content/ServiceContent";
import { companyContent } from "./content/CompanyContent";
import { knowledgeContent } from "./content/KnowledgeContent";

// Import all service pages
import SimpleElectricity from './pages/SimpleElectricity';
import SimpleGas from './pages/SimpleGas';
import SolarEnergy from './pages/SolarEnergy';
import { BusinessWater, BusinessBroadband, BusinessTelecoms, LargeBusiness, ContactPage, CompanyPage } from './pages/AllServicePages';
import GetQuote from './pages/GetQuote';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import TrustpilotReviews from './pages/TrustpilotReviews';
import NotFound from './pages/NotFound';

// Import all icons and components from original App
import {
  CheckCircle,
  ShieldCheck,
  Phone,
  Zap,
  Leaf,
  Building2,
  ArrowRight,
  LineChart as LineChartIcon,
  Star,
  FileSignature,
  Wallet,
  Megaphone,
  Menu,
  ChevronDown,
  Layers,
  Globe2,
  Sun,
  Flame,
  Wifi,
  TrendingUp,
  Users,
  Award,
  Clock,
  Mail,
  MapPin,
  PoundSterling,
  Target,
  Droplet,
  BarChart3,
  FileText,
  BookOpen,
  HelpCircle,
  ChevronRight,
  CheckSquare,
  AlertCircle,
  TrendingDown,
  Shield,
  Search,
  Filter,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Reuse UI components from original
function Card({ className = "", children }) {
  return <div className={`rounded-2xl ${className}`}>{children}</div>;
}
function CardHeader({ className = "", children }) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}
function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold text-white ${className}`}>{children}</h3>;
}
function CardContent({ className = "", children }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
function Button({ variant, className = "", children, ...props }) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition ${className}`} {...props}>
      {children}
    </button>
  );
}
function Input({ className = "", ...props }) {
  return <input className={`w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-200 ${className}`} {...props} />;
}
function Textarea({ className = "", ...props }) {
  return <textarea className={`w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-200 ${className}`} {...props} />;
}

// Helpers
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const trendData = months.map((m,i)=>({ name:m, price: 24 + Math.round(6*Math.sin(i/1.3) + (i>6?3:0) + (Math.random()*1.5)) }));
const cx = (...classes) => classes.filter(Boolean).join(" ");

function ScrollToTop(){
  const { pathname } = useLocation();
  useEffect(()=>{ window.scrollTo({ top:0, behavior:"smooth" }); }, [pathname]);
  return null;
}

// Enhanced Quote Form with validation
function QuoteForm(){
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ 
    company:"", 
    postcode:"", 
    utility:"electricity", 
    spend:"", 
    sites:1, 
    name:"", 
    email:"", 
    phone:"", 
    notes:"",
    currentSupplier: "",
    contractEnd: "",
    consumption: ""
  });

  const progress = useMemo(()=> (step/4)*100, [step]);
  
  async function handleSubmit(e){
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r=>setTimeout(r,900));
    setSubmitting(false);
    setSubmitted(true);
  }

  if(submitted){
    return (
      <Card className="border-0 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 backdrop-blur">
        <CardHeader><CardTitle className="text-2xl">Request received ✅</CardTitle></CardHeader>
        <CardContent className="space-y-4 text-slate-300">
          <p>Thanks, <span className="font-semibold text-white">{data.name}</span>. Our energy experts will analyze your requirements and send tailored quotes to <span className="font-mono text-white">{data.email}</span> within 24 hours.</p>
          <div className="text-sm opacity-80">
            <CheckCircle className="inline h-4 w-4 mr-1 text-emerald-400"/>
            You'll receive multiple supplier options with transparent pricing
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Get a quote form">
      <div className="h-2 w-full rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Business Details</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-2 block text-sm text-slate-300">Company name *</label>
              <Input 
                id="company"
                placeholder="e.g. Acme Manufacturing Ltd" 
                value={data.company} 
                onChange={(e)=>setData({...data, company:e.target.value})} 
                required 
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="postcode" className="mb-2 block text-sm text-slate-300">Business postcode *</label>
              <Input 
                id="postcode"
                placeholder="M2 7LP" 
                value={data.postcode} 
                onChange={(e)=>setData({...data, postcode:e.target.value.toUpperCase()})} 
                required 
                pattern="[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="sites" className="mb-2 block text-sm text-slate-300">Number of sites</label>
              <Input 
                id="sites"
                type="number" 
                min={1} 
                value={data.sites} 
                onChange={(e)=>setData({...data, sites:Number(e.target.value)})} 
              />
            </div>
            <div>
              <label htmlFor="supplier" className="mb-2 block text-sm text-slate-300">Current supplier (optional)</label>
              <Input 
                id="supplier"
                placeholder="e.g. British Gas" 
                value={data.currentSupplier} 
                onChange={(e)=>setData({...data, currentSupplier:e.target.value})} 
              />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Utility Requirements</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="utility" className="mb-2 block text-sm text-slate-300">Service required *</label>
              <select 
                id="utility"
                value={data.utility} 
                onChange={(e)=>setData({...data, utility:e.target.value})} 
                className="w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-200"
                aria-required="true"
              >
                <option value="electricity">Business Electricity</option>
                <option value="gas">Business Gas</option>
                <option value="electricity-gas">Electricity & Gas</option>
                <option value="water">Business Water</option>
                <option value="broadband">Business Broadband</option>
                <option value="telecoms">Business Telecoms</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="spend" className="mb-2 block text-sm text-slate-300">Monthly spend (£) *</label>
              <Input 
                id="spend"
                type="number" 
                min={1} 
                placeholder="1500" 
                value={data.spend} 
                onChange={(e)=>setData({...data, spend:e.target.value})} 
                required 
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="consumption" className="mb-2 block text-sm text-slate-300">Annual consumption (optional)</label>
              <Input 
                id="consumption"
                placeholder="e.g. 50,000 kWh" 
                value={data.consumption} 
                onChange={(e)=>setData({...data, consumption:e.target.value})} 
              />
            </div>
            <div>
              <label htmlFor="contractEnd" className="mb-2 block text-sm text-slate-300">Contract end date (optional)</label>
              <Input 
                id="contractEnd"
                type="date" 
                value={data.contractEnd} 
                onChange={(e)=>setData({...data, contractEnd:e.target.value})} 
              />
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Additional Information</h4>
          <div>
            <label htmlFor="notes" className="mb-2 block text-sm text-slate-300">Special requirements (optional)</label>
            <Textarea 
              id="notes"
              placeholder="e.g. Green energy preference, seasonal usage patterns, multi-site requirements..." 
              value={data.notes} 
              onChange={(e)=>setData({...data, notes:e.target.value})} 
              className="min-h-[120px]" 
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Details</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Your name *</label>
              <Input 
                id="name"
                placeholder="John Smith" 
                value={data.name} 
                onChange={(e)=>setData({...data, name:e.target.value})} 
                required 
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email address *</label>
              <Input 
                id="email"
                type="email" 
                placeholder="john@company.com" 
                value={data.email} 
                onChange={(e)=>setData({...data, email:e.target.value})} 
                required 
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-slate-300">Phone number</label>
              <Input 
                id="phone"
                type="tel" 
                placeholder="0161 123 4567" 
                value={data.phone} 
                onChange={(e)=>setData({...data, phone:e.target.value})} 
              />
            </div>
            <div>
              <label htmlFor="contact-time" className="mb-2 block text-sm text-slate-300">Best time to call</label>
              <select 
                id="contact-time"
                className="w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-200"
              >
                <option>Morning (9am-12pm)</option>
                <option>Afternoon (12pm-5pm)</option>
                <option>Evening (5pm-7pm)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-slate-400">Step {step} of 4</div>
        <div className="flex gap-2">
          {step > 1 && (
            <Button 
              type="button" 
              variant="outline" 
              className="border-slate-700 text-slate-200 hover:bg-slate-800" 
              onClick={()=>setStep(step-1)}
            >
              Back
            </Button>
          )}
          {step < 4 && (
            <Button 
              type="button" 
              className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400" 
              onClick={()=>setStep(step+1)}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {step === 4 && (
            <Button 
              type="submit" 
              className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400" 
              disabled={submitting || !data.name || !data.email}
            >
              {submitting ? "Submitting..." : "Get My Quotes"}
            </Button>
          )}
        </div>
      </div>

      <p className="text-xs text-slate-400">
        <Shield className="inline h-3 w-3 mr-1"/>
        Your data is secure and will only be used to provide quotes. View our <Link className="underline" to="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}

// Section component with SEO-friendly markup
function Section({ id, kicker, title, children, className = "", as: Component = "section" }){
  return (
    <Component id={id} className={cx("relative py-20", className)}>
      <div className="container mx-auto max-w-6xl px-6">
        {kicker && (<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">{kicker}</p>)}
        {title && (<h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">{title}</h2>)}
        {children}
      </div>
    </Component>
  );
}

// Enhanced Navbar with accessibility
function Navbar(){
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Watt Utilities home">
          <img 
            src="https://i.ibb.co/9m5w9tMJ/watt-utilities-white-logo-1-500-x-200-px-500-x-100-px-5.png" 
            alt="Watt Utilities - Business Energy Consultants" 
            className="h-8 w-auto md:h-10" 
            width="500"
            height="100"
          />
        </Link>
        
        <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <div 
            className="relative"
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button 
              onClick={()=>setServicesOpen(!servicesOpen)} 
              onMouseEnter={()=>setServicesOpen(true)}
              className="inline-flex items-center gap-1 hover:text-white"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}/>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{opacity:0, y:8}} 
                  animate={{opacity:1, y:0}} 
                  exit={{opacity:0, y:8}} 
                  className="absolute left-0 mt-2 w-[520px] rounded-xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl"
                  onMouseEnter={()=>setServicesOpen(true)}
                  onMouseLeave={()=>setServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-2 text-slate-200">
                    <NavLink to="/business-electricity" onClick={()=>setServicesOpen(false)} className="rounded-lg p-2 hover:bg-slate-800">
                      <div className="mb-1 flex items-center gap-2 text-white text-sm">
                        <Zap className="h-4 w-4 text-emerald-400"/> Business Electricity
                      </div>
                      <div className="text-xs text-slate-400">Save up to 45% on rates</div>
                    </NavLink>
                    <NavLink to="/business-gas" onClick={()=>setServicesOpen(false)} className="rounded-lg p-2 hover:bg-slate-800">
                      <div className="mb-1 flex items-center gap-2 text-white text-sm">
                        <Leaf className="h-4 w-4 text-emerald-400"/> Business Gas
                      </div>
                      <div className="text-xs text-slate-400">Fixed & flexible contracts</div>
                    </NavLink>
                    <NavLink to="/business-water" onClick={()=>setServicesOpen(false)} className="rounded-lg p-2 hover:bg-slate-800">
                      <div className="mb-1 flex items-center gap-2 text-white text-sm">
                        <Droplet className="h-4 w-4 text-emerald-400"/> Business Water
                      </div>
                      <div className="text-xs text-slate-400">20% average savings</div>
                    </NavLink>
                    <NavLink to="/business-broadband" onClick={()=>setServicesOpen(false)} className="rounded-lg p-2 hover:bg-slate-800">
                      <div className="mb-1 flex items-center gap-2 text-white text-sm">
                        <Globe2 className="h-4 w-4 text-emerald-400"/> Broadband
                      </div>
                      <div className="text-xs text-slate-400">Fibre & leased lines</div>
                    </NavLink>
                    <NavLink to="/business-telecoms" onClick={()=>setServicesOpen(false)} className="rounded-lg p-2 hover:bg-slate-800">
                      <div className="mb-1 flex items-center gap-2 text-white text-sm">
                        <Phone className="h-4 w-4 text-emerald-400"/> Telecoms
                      </div>
                      <div className="text-xs text-slate-400">VOIP & unified comms</div>
                    </NavLink>
                    <NavLink to="/large-business" onClick={()=>setServicesOpen(false)} className="rounded-lg p-2 hover:bg-slate-800">
                      <div className="mb-1 flex items-center gap-2 text-white text-sm">
                        <Layers className="h-4 w-4 text-emerald-400"/> Multi-site
                      </div>
                      <div className="text-xs text-slate-400">Portfolio management</div>
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <NavLink to="/case-studies" className={({isActive})=>cx(isActive?"text-white":"","hover:text-white")}>Case Studies</NavLink>
          <NavLink to="/knowledge" className={({isActive})=>cx(isActive?"text-white":"","hover:text-white")}>Knowledge</NavLink>
          <NavLink to="/loa" className={({isActive})=>cx(isActive?"text-white":"","hover:text-white")}>LOA</NavLink>
          <NavLink to="/company" className={({isActive})=>cx(isActive?"text-white":"","hover:text-white")}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>cx(isActive?"text-white":"","hover:text-white")}>Contact</NavLink>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/get-quote">
            <Button className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 px-4 py-2 text-sm font-medium">
              Get Quotes
            </Button>
          </Link>
          <button 
            className="md:hidden" 
            onClick={()=>setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5 text-slate-200"/>
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} className="md:hidden overflow-hidden">
            <div className="space-y-2 border-t border-slate-800 bg-slate-900 px-6 py-4 text-sm text-slate-200">
              <NavLink to="/business-electricity" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Business Electricity</NavLink>
              <NavLink to="/business-gas" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Business Gas</NavLink>
              <NavLink to="/business-water" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Business Water</NavLink>
              <NavLink to="/business-broadband" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Broadband</NavLink>
              <NavLink to="/business-telecoms" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Telecoms</NavLink>
              <NavLink to="/large-business" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Multi-site</NavLink>
              <NavLink to="/case-studies" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Case Studies</NavLink>
              <NavLink to="/knowledge" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Knowledge</NavLink>
              <NavLink to="/loa" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">LOA</NavLink>
              <NavLink to="/company" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">About Us</NavLink>
              <NavLink to="/contact" onClick={()=>setOpen(false)} className="block py-2 hover:text-emerald-400">Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Enhanced Footer with schema markup
function Footer(){
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950" role="contentinfo">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <img 
            src="https://i.ibb.co/9m5w9tMJ/watt-utilities-white-logo-1-500-x-200-px-500-x-100-px-5.png" 
            alt="Watt Utilities" 
            className="h-16 w-auto" 
            width="150"
            height="60"
          />
          <p className="text-sm text-slate-400">
            Trusted business energy consultants since 2000. 900,000+ businesses saved £150M.
          </p>
          
          <div className="flex gap-4 mt-4">
            <a href="https://twitter.com/wattutilities" aria-label="Twitter" className="text-slate-400 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="https://linkedin.com/company/watt-utilities-uk-ltd" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579724950206" aria-label="Facebook" className="text-slate-400 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/business-electricity" className="hover:text-emerald-400">Electricity</Link></li>
            <li><Link to="/business-gas" className="hover:text-emerald-400">Gas</Link></li>
            <li><Link to="/business-water" className="hover:text-emerald-400">Water</Link></li>
            <li><Link to="/business-broadband" className="hover:text-emerald-400">Broadband</Link></li>
            <li><Link to="/large-business" className="hover:text-emerald-400">Multi-site</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/company" className="hover:text-emerald-400">About Us</Link></li>
            <li><Link to="/case-studies" className="hover:text-emerald-400">Case Studies</Link></li>
            <li><Link to="/careers" className="hover:text-emerald-400">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
            <li><Link to="/complaints" className="hover:text-emerald-400">Complaints</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/terms" className="hover:text-emerald-400">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-emerald-400">Privacy</Link></li>
            <li><Link to="/compliance" className="hover:text-emerald-400">Compliance</Link></li>
            <li><Link to="/tpi-code" className="hover:text-emerald-400">TPI Code</Link></li>
            <li><Link to="/how-we-get-paid" className="hover:text-emerald-400">Commission</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800/60 py-6">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Watt Utilities UK Ltd. All rights reserved.</p>
          <p className="mt-2">
            <Award className="inline h-3 w-3 mr-1"/>
            Investors in People | ICO Registered | TPI Code of Practice | Trustpilot 4.6★
          </p>
        </div>
      </div>
    </footer>
  );
}

// Enhanced Home Page with rich content
function HomePage(){
  return (
    <>
      <SEOHead 
        title="Business Energy Comparison & Switching | Save up to 45%"
        description="UK's trusted business utility consultants. Compare electricity, gas, water rates from 20+ suppliers. 900,000+ businesses saved £150M. Get quotes in 5 minutes."
        keywords="business energy comparison, business electricity, business gas, utility switching, energy broker UK"
        canonical="https://wattutilities001.netlify.app"
        structuredData={organizationSchema}
      />
      
      <main>
        {/* Hero Section */}
        <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
          
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                We help businesses 
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  switch or renew
                </span>
                electricity, gas, water, telecoms & internet
              </h1>
              
              <p className="mb-6 max-w-prose text-lg text-slate-300">
                Save up to £350 in just a 5-minute call. Join 900,000+ UK businesses who've saved £150M with our expert procurement. 
                Simple, hassle-free switching from 30+ trusted suppliers.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link to="/get-quote">
                  <Button className="h-12 rounded-xl bg-emerald-500 px-8 text-base font-semibold text-emerald-950 hover:bg-emerald-400">
                    Get Free Quotes <ArrowRight className="ml-2 h-5 w-5"/>
                  </Button>
                </Link>
                <a href="#services">
                  <Button variant="outline" className="h-12 rounded-xl border-slate-700 bg-slate-900/40 px-8 text-base text-slate-200 hover:bg-slate-800">
                    View Services
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Users, label: "900K+ Businesses", value: "Served" },
                  { icon: PoundSterling, label: "£150M", value: "Saved" },
                  { icon: Star, label: "4.6★", value: "Trustpilot" },
                  { icon: Clock, label: "5 Min", value: "Quote Time" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon className="mx-auto h-6 w-6 text-emerald-400" />
                    <div className="mt-1 text-lg font-bold text-white">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.15}}>
              <Card className="border-0 bg-slate-900/60 shadow-xl ring-1 ring-slate-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <LineChartIcon className="h-5 w-5 text-emerald-400"/> 
                    Live Energy Market Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ReLineChart data={trendData} margin={{ top:10, right:10, left:0, bottom:0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#0f172a" />
                        <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1f2937", color: "#e2e8f0" }} />
                        <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={false} />
                      </ReLineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    <AlertCircle className="inline h-3 w-3 mr-1"/>
                    Market intelligence helps us time your switch for maximum savings
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </header>

        {/* Trust Indicators */}
        <Section 
          kicker="Trusted By Leading UK Businesses" 
          className="border-b border-slate-800 bg-slate-950/50"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              "Manufacturing & Industrial",
              "Hotels & Hospitality",
              "Healthcare & Care Homes",
              "Retail & Distribution"
            ].map((sector, i) => (
              <div key={i} className="text-center">
                <Building2 className="mx-auto h-8 w-8 text-slate-600" />
                <p className="mt-2 text-sm text-slate-400">{sector}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Core Services */}
        <Section 
          id="services" 
          kicker="Complete Utility Management" 
          title="Every Service Your Business Needs"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Business Electricity",
                description: "Save 20-45% with expert procurement from 30+ suppliers",
                link: "/business-electricity",
                features: ["Fixed & flexible contracts", "Green energy options", "Half-hourly metering"]
              },
              {
                icon: Flame,
                title: "Business Gas",
                description: "Strategic purchasing saving up to 45% on gas costs",
                link: "/business-gas",
                features: ["Risk management", "Basket contracts", "Pass-through options"]
              },
              {
                icon: Sun,
                title: "Solar & Renewables",
                description: "Fully funded solar with no upfront costs or maintenance",
                link: "/solar-energy",
                features: ["Battery storage", "EV charging", "20-year fixed rates"],
                highlight: true
              },
              {
                icon: Droplet,
                title: "Business Water",
                description: "Navigate deregulation and save 20% on water bills",
                link: "/business-water",
                features: ["Retailer switching", "Leak detection", "Trade effluent"]
              },
              {
                icon: Wifi,
                title: "Business Broadband",
                description: "Super-fast speeds and seamless connectivity",
                link: "/business-broadband",
                features: ["Leased lines", "FTTP/FTTC", "Guaranteed uptime"]
              },
              {
                icon: Phone,
                title: "Business Telecoms",
                description: "VoIP, fibre broadband and phone systems",
                link: "/business-telecoms",
                features: ["Cloud systems", "Call recording", "Mobile packages"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:16}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: i*0.06}}
              >
                <Card className="group h-full border-0 bg-slate-900/60 ring-1 ring-slate-800 hover:ring-emerald-500/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <service.icon className="h-8 w-8 text-emerald-400" />
                      <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-slate-300">{service.description}</p>
                    <ul className="space-y-1 text-sm">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-slate-400">
                          <CheckSquare className="h-4 w-4 text-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="mt-4 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* How It Works */}
        <Section 
          id="process" 
          kicker="Simple 4-Step Process" 
          title="From Quote to Switch in Weeks"
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Quick Consultation",
                description: "5-minute call to understand your needs and current contracts",
                icon: Phone
              },
              {
                step: "02",
                title: "Market Analysis",
                description: "Compare 100s of tariffs from our 20+ supplier network",
                icon: BarChart3
              },
              {
                step: "03",
                title: "Expert Negotiation",
                description: "We negotiate terms and secure the best available rates",
                icon: Target
              },
              {
                step: "04",
                title: "Seamless Switch",
                description: "We handle everything - zero downtime, complete support",
                icon: CheckCircle
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: i*0.1}}
                className="relative"
              >
                {i < 3 && (
                  <div className="absolute top-12 left-1/2 hidden w-full md:block">
                    <ChevronRight className="h-6 w-6 text-slate-700" />
                  </div>
                )}
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 ring-1 ring-emerald-500/30">
                    <item.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-emerald-400">{item.step}</div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Social Proof */}
        <Section 
          id="testimonials" 
        >
          {/* Centered "What Our Clients Say" text */}
          <div className="text-center mb-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-emerald-400">What Our Clients Say</p>
            {/* Centered Trustpilot logo */}
            <a href="https://www.trustpilot.com/review/watt.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img 
                src="https://i.ibb.co/6JbTMXgr/trust-piolet-logo-white.png" 
                alt="Trustpilot" 
                className="h-10 mx-auto"
              />
            </a>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {companyContent.testimonials.featured.slice(0, 3).map((testimonial, i) => (
              <Card key={i} className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
                <CardHeader>
                  <div>
                    <div className="text-lg font-semibold text-white">{testimonial.company}</div>
                    <div className="text-sm text-slate-400">{testimonial.contact}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* 5 Star Rating */}
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="mb-4 text-slate-300 italic">"{testimonial.quote}"</p>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.services.map((service, j) => (
                      <span key={j} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Trustpilot Stats and Reviews Combined */}
          <div className="mt-12">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <a 
                  href="https://www.trustpilot.com/review/watt.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://i.ibb.co/6JbTMXgr/trust-piolet-logo-white.png" 
                    alt="Trustpilot" 
                    className="h-8"
                  />
                </a>
                <div className="border-l border-slate-700 pl-3">
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className={`w-6 h-6 ${star <= 4 ? 'text-[#00b67a]' : 'text-gray-600'} fill-current`} />
                    ))}
                  </div>
                  <span className="text-sm text-white">Excellent 4.6 out of 5</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm text-slate-400">Based on</span>
                <span className="text-sm text-white font-bold">709 reviews</span>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-white">4.6★</div>
                  <div className="text-xs text-slate-400">TrustScore</div>
                </div>
                <div className="border-x border-slate-700">
                  <div className="text-2xl font-bold text-white">709</div>
                  <div className="text-xs text-slate-400">Total Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">89%</div>
                  <div className="text-xs text-slate-400">5-Star</div>
                </div>
              </div>
              
              {/* View Reviews Button */}
              <div className="text-center mt-6">
                <a 
                  href="https://www.trustpilot.com/review/watt.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-slate-700 bg-slate-800/40 text-slate-200 hover:bg-slate-700">
                    View All Reviews on Trustpilot
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 border-y border-slate-800">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Cut Your Utility Costs?
            </h2>
            <p className="mb-8 text-lg text-slate-300">
              Join 900,000+ businesses saving millions on utilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-quote">
                <Button className="h-12 rounded-xl bg-emerald-500 px-8 text-base font-semibold text-emerald-950 hover:bg-emerald-400">
                  Get Free Quotes Now
                </Button>
              </Link>
              <a href="tel:01618338661">
                <Button variant="outline" className="h-12 rounded-xl border-slate-700 bg-slate-900/40 px-8 text-base text-slate-200 hover:bg-slate-800">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0161 833 8661
                </Button>
              </a>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

// RichLander component for simple pages
function RichLander({ title, intro, children }){
  return (
    <main>
      <header className="border-b border-slate-800 bg-slate-950/60"><div className="mx-auto max-w-6xl px-6 py-12"><h1 className="text-3xl font-bold md:text-4xl">{title}</h1>{intro && <p className="mt-2 max-w-3xl text-slate-300">{intro}</p>}</div></header>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </main>
  );
}

// Careers Page
const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cvFileName: ""
  });
  
  const jobs = [
    { id: 1, role: "Renewals Agent", type: "Full-time", loc: "Manchester", desc: "Join our renewals team to help businesses secure the best utility deals." },
    { id: 2, role: "Business Development Manager", type: "Hybrid", loc: "UK", desc: "Drive growth by building relationships with new business clients." },
    { id: 3, role: "Energy Consultant", type: "Full-time", loc: "London", desc: "Provide expert advice on energy procurement strategies." }
  ];

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, cvFileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll be in touch soon.");
    setSelectedJob(null);
    setFormData({ name: "", email: "", phone: "", position: "", message: "", cvFileName: "" });
  };

  return (
    <RichLander title="Careers" intro="Join a team that values transparency, results and customer care.">
      <div className="space-y-8">
        <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800 overflow-hidden">
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Building2 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Our Team</h3>
                <p className="text-slate-300 max-w-md mx-auto px-6">
                  A diverse team of energy experts, consultants, and customer success specialists working together to deliver exceptional service.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-emerald-400" /> Growth Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Career progression paths and continuous professional development.
            </CardContent>
          </Card>
          <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" /> Great Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Competitive salary, pension, healthcare, and flexible working options.
            </CardContent>
          </Card>
          <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-emerald-400" /> Positive Culture
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Collaborative environment focused on innovation and sustainability.
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Open Positions</h2>
          <div className="grid gap-4">
            {jobs.map((job) => (
              <Card key={job.id} className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xl font-semibold text-white mb-2">{job.role}</div>
                      <div className="text-sm text-slate-400 mb-2">{job.type} • {job.loc}</div>
                      <p className="text-slate-300">{job.desc}</p>
                    </div>
                    <Button 
                      onClick={() => {
                        setSelectedJob(job.role);
                        setFormData({ ...formData, position: job.role });
                        setTimeout(() => {
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card id="application-form" className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl">
              {selectedJob ? `Apply for ${selectedJob}` : "Submit Your Application"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Full Name *</label>
                  <Input
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-900/60 border-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email Address *</label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-900/60 border-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+44 7700 900000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-900/60 border-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Position *</label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-200"
                  >
                    <option value="">Select a position</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.role}>{job.role}</option>
                    ))}
                    <option value="General Application">General Application</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Upload Your CV *</label>
                <div className="relative">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 cursor-pointer hover:bg-slate-800/60 transition"
                  >
                    <span className="text-slate-200">
                      {formData.cvFileName || "Choose file (PDF, DOC, DOCX)"}
                    </span>
                    <FileSignature className="h-4 w-4 text-slate-400" />
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Cover Letter / Additional Information</label>
                <Textarea
                  placeholder="Tell us why you'd be a great fit for this role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] bg-slate-900/60 border-slate-800"
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  * Required fields. We'll process your application in accordance with our privacy policy.
                </p>
                <Button type="submit" className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </RichLander>
  );
};

// Case Studies Page
const CaseStudiesPage = () => (
  <RichLander title="Case Studies" intro="Savings and outcomes we've delivered for UK businesses.">
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { title:"Multi‑site retailer", saving:"£18,240/yr", desc:"Basket deal across 12 sites. Fixed contract secured ahead of market rise." },
        { title:"Food manufacturer", saving:"£11,930/yr", desc:"Flexible contract with cap & collar to smooth volatility risk." },
        { title:"Hotel group", saving:"£7,680/yr", desc:"Green electricity with REGO certificates and simplified billing." }
      ].map((c,i)=> (
        <Card key={i} className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
          <CardHeader><CardTitle>{c.title}</CardTitle></CardHeader>
          <CardContent>
            <div className="mb-2 text-2xl font-bold text-emerald-400">{c.saving}</div>
            <p className="text-slate-300">{c.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </RichLander>
);

// Knowledge Page
const KnowledgePage = () => (
  <RichLander title="Knowledge Hub" intro="Guides, explainers and market updates to help you buy better.">
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { title:"Business Electricity: Fixed vs Flexible (2025)", blurb:"When each contract type wins — and how to decide based on usage & risk.", tag:"Guide" },
        { title:"What is a Letter of Authority?", blurb:"Why brokers need LOAs and what we actually do with them.", tag:"Explainer" },
        { title:"Green Tariffs & REGOs", blurb:"How to go greener without breaking the budget.", tag:"Sustainability" }
      ].map((a,i)=> (
        <Card key={i} className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{a.title}</CardTitle>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">{a.tag}</span>
            </div>
          </CardHeader>
          <CardContent className="text-slate-300">{a.blurb}</CardContent>
        </Card>
      ))}
    </div>
  </RichLander>
);

// Compliance Page
const CompliancePage = () => (
  <RichLander title="Compliance" intro="Our regulatory compliance and industry standards.">
    <div className="space-y-6">
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>Regulatory Compliance</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-slate-300">
          <p>Watt Utilities operates in full compliance with UK energy regulations and industry standards.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Registered with the relevant regulatory bodies</li>
            <li>Adherent to the TPI Code of Practice</li>
            <li>UK GDPR compliant data handling</li>
            <li>FCA conduct standards where applicable</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>Our Standards</CardTitle></CardHeader>
        <CardContent className="text-slate-300">
          <p>We maintain the highest standards of transparency, fairness and professional conduct in all our business dealings.</p>
        </CardContent>
      </Card>
    </div>
  </RichLander>
);

// FAQs Page
const FAQsPage = () => (
  <RichLander title="Frequently Asked Questions" intro="Common questions about switching business utilities and our services.">
    <div className="space-y-6">
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>How long does switching take?</CardTitle></CardHeader>
        <CardContent className="text-slate-300">
          <p>Typically 4-8 weeks for electricity and gas, 2-4 weeks for water. We handle the entire process to ensure zero downtime.</p>
        </CardContent>
      </Card>
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>Are there any fees?</CardTitle></CardHeader>
        <CardContent className="text-slate-300">
          <p>We're typically paid commission by suppliers. Any fees are disclosed upfront before you commit to anything.</p>
        </CardContent>
      </Card>
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>Can I switch mid-contract?</CardTitle></CardHeader>
        <CardContent className="text-slate-300">
          <p>Usually not without exit fees, but we can review your current terms and prepare quotes for when your contract ends.</p>
        </CardContent>
      </Card>
    </div>
  </RichLander>
);

// LOA Page with embedded watt.co.uk form
const LOAPage = () => {
  return (
    <main>
      <header className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-bold md:text-4xl">Letter of Authority (LOA)</h1>
          <p className="mt-2 max-w-3xl text-slate-300">Complete the form below to authorise us to manage your business energy switch</p>
        </div>
      </header>
      
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-8">
          {/* Information Card */}
          <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
            <CardHeader>
              <CardTitle className="text-xl">What is a Letter of Authority?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>A Letter of Authority (LOA) gives us permission to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Contact your current supplier on your behalf</li>
                <li>Obtain your current contract details and usage data</li>
                <li>Negotiate better rates with multiple suppliers</li>
                <li>Handle the switch process from start to finish</li>
              </ul>
              <div className="mt-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4">
                <p className="text-sm"><strong>Important:</strong> An LOA does NOT commit you to switching. You remain in full control and we'll present you with options before making any changes.</p>
              </div>
            </CardContent>
          </Card>

          {/* Embedded Form - Using watt.co.uk page */}
          <Card className="border-0 bg-white ring-1 ring-slate-800">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Complete Your Letter of Authority</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="relative w-full" style={{ height: '100vh', overflow: 'auto' }}>
                <iframe
                  src="https://app.signable.co.uk/widget/url/MzAhAFky4F?company=&amp;name=&amp;address="
                  title="Letter of Authority Form"
                  className="w-full"
                  style={{ 
                    border: '0',
                    width: '100%',
                    height: '100vh'
                  }}
                  frameBorder="0"
                  scrolling="yes"
                />
              </div>
            </CardContent>
          </Card>

          {/* What happens next */}
          <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
            <CardHeader>
              <CardTitle className="text-lg">What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              <ol className="list-decimal space-y-2 pl-5">
                <li>We'll contact your current supplier to get your usage data</li>
                <li>We'll tender your requirements to our panel of suppliers</li>
                <li>We'll present you with the best quotes (usually within 24-48 hours)</li>
                <li>You decide if you want to switch - no obligation</li>
                <li>If you proceed, we handle everything else</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

// Simple footer pages
const TermsPage = () => (<RichLander title="Terms & Conditions"><p className="text-slate-300">Standard website and service terms.</p></RichLander>);
const PrivacyPage = () => (<RichLander title="Privacy Policy"><p className="text-slate-300">Your data is handled in accordance with UK GDPR. We only process what's necessary to obtain and present quotes.</p></RichLander>);
const ComplaintsPage = () => (<RichLander title="Complaints Procedure" intro="We aim to resolve issues quickly and fairly. Here's how it works."><ol className="list-decimal space-y-2 pl-6 text-slate-300"><li>Contact our team with details</li><li>We acknowledge within 2 working days</li><li>Resolution plan and timescales provided</li></ol></RichLander>);
const TPIPage = () => (<RichLander title="TPI Code of Conduct"><p className="text-slate-300">Our commitments as a Third Party Intermediary (TPI) covering transparency, consent and fair treatment.</p></RichLander>);

// Export the enhanced App
export default function WattUtilitiesSEO(){
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
          <Navbar />
          <Suspense fallback={
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
              <div className="text-white text-2xl">Loading...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/business-electricity" element={<SimpleElectricity />} />
              <Route path="/business-gas" element={<SimpleGas />} />
              <Route path="/business-water" element={<BusinessWater />} />
              <Route path="/business-broadband" element={<BusinessBroadband />} />
              <Route path="/business-telecoms" element={<BusinessTelecoms />} />
              <Route path="/solar-energy" element={<SolarEnergy />} />
              <Route path="/large-business" element={<LargeBusiness />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/knowledge" element={<KnowledgePage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<TrustpilotReviews />} />
              <Route path="/reviews" element={<TrustpilotReviews />} />
              <Route path="/trustpilot" element={<TrustpilotReviews />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/complaints" element={<ComplaintsPage />} />
              <Route path="/tpi-code" element={<TPIPage />} />
              <Route path="/loa" element={<LOAPage />} />
              <Route path="/get-a-quote" element={<GetQuote />} />
              <Route path="/get-quote" element={<GetQuote />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/about" element={<CompanyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}