import React, { useMemo, useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route, NavLink, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudies from './pages/CaseStudies';
import BusinessEnergyGuides from './pages/BusinessEnergyGuides';
import EnergySavingTips from './pages/EnergySavingTips';
import ContractTypesExplained from './pages/ContractTypesExplained';
import SwitchingProcess from './pages/SwitchingProcess';
import GreenEnergyOptions from './pages/GreenEnergyOptions';
import MultiSiteEnergy from './pages/MultiSiteEnergy';
import EnergyMarketInsights from './pages/EnergyMarketInsights';
import BillValidation from './pages/BillValidation';
// Lightweight UI primitives (replace if you have shadcn/ui installed)
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
  // variant is captured so it doesn't leak to DOM; style via className
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
  X,
  ChevronDown,
  Layers,
  Globe2,
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

// ---------- helpers ----------
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const trendData = months.map((m,i)=>({ name:m, price: 24 + Math.round(6*Math.sin(i/1.3) + (i>6?3:0) + (Math.random()*1.5)) }));
const cx = (...classes) => classes.filter(Boolean).join(" ");

function ScrollToTop(){
  const { pathname } = useLocation();
  useEffect(()=>{ window.scrollTo({ top:0, behavior:"smooth" }); }, [pathname]);
  return null;
}

// ---------- Quote Form (multi-step) ----------
function QuoteForm(){
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ company:"", postcode:"", utility:"electricity", spend:"", sites:1, name:"", email:"", phone:"", notes:"" });

  const progress = useMemo(()=> (step/3)*100, [step]);
  const disabledStep1 = !data.company || !data.postcode;
  const disabledStep2 = !data.spend || Number(data.spend)<=0 || Number.isNaN(Number(data.spend));
  const disabledStep3 = !data.name || !data.email.includes("@") || !data.email.includes(".");

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
          <p>Thanks, <span className="font-semibold text-white">{data.name}</span>. Our team will analyse your usage and send tailored quotes to <span className="font-mono text-white">{data.email}</span> shortly.</p>
          <div className="text-sm opacity-80">Tip: Have a recent bill handy — it helps us fast‑track validation and secure rates.</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="h-2 w-full rounded-full bg-slate-800"><div className="h-2 rounded-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} /></div>

      {step===1 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Company name</label>
            <Input placeholder="e.g. Acme Manufacturing Ltd" value={data.company} onChange={(e)=>setData({...data, company:e.target.value})} className="bg-slate-900/60 border-slate-800" required />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Postcode</label>
            <Input placeholder="EC1A 1BB" value={data.postcode} onChange={(e)=>setData({...data, postcode:e.target.value.toUpperCase()})} className="bg-slate-900/60 border-slate-800" required />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Utility</label>
            <select value={data.utility} onChange={(e)=>setData({...data, utility:e.target.value})} className="w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-200">
              <option value="electricity">Business Electricity</option>
              <option value="gas">Business Gas</option>
              <option value="water">Business Water</option>
              <option value="broadband">Business Broadband</option>
              <option value="telecoms">Business Telecoms</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Number of sites</label>
            <Input type="number" min={1} value={data.sites} onChange={(e)=>setData({...data, sites:Number(e.target.value)})} className="bg-slate-900/60 border-slate-800" />
          </div>
        </div>
      )}

      {step===2 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Approx. monthly spend (£)</label>
            <Input type="number" min={1} placeholder="e.g. 1200" value={data.spend} onChange={(e)=>setData({...data, spend:e.target.value})} className="bg-slate-900/60 border-slate-800" required />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Notes (optional)</label>
            <Textarea placeholder="Usage patterns, multi‑site metering, green preferences, etc." value={data.notes} onChange={(e)=>setData({...data, notes:e.target.value})} className="bg-slate-900/60 border-slate-800 min-h-[96px]" />
          </div>
        </div>
      )}

      {step===3 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Your name</label>
            <Input placeholder="e.g. Alex Smith" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} className="bg-slate-900/60 border-slate-800" required />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <Input type="email" placeholder="name@company.com" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} className="bg-slate-900/60 border-slate-800" required />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Phone (optional)</label>
            <Input type="tel" placeholder="+44 161 000 0000" value={data.phone} onChange={(e)=>setData({...data, phone:e.target.value})} className="bg-slate-900/60 border-slate-800" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-slate-400">Step {step} of 3</div>
        <div className="flex gap-2">
          {step>1 && (<Button type="button" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800" onClick={()=>setStep(step-1)}>Back</Button>)}
          {step<3 && (
            <Button type="button" className="bg-emerald-500 text-white hover:bg-emerald-400" onClick={()=>setStep(step+1)} disabled={(step===1 && disabledStep1) || (step===2 && disabledStep2)}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {step===3 && (
            <Button type="submit" className="bg-emerald-500 text-white hover:bg-emerald-400" disabled={submitting || disabledStep3}>{submitting?"Submitting…":"Get my quotes"}</Button>
          )}
        </div>
      </div>

      <p className="text-xs text-slate-400">By submitting, you agree to our <Link className="underline-offset-2 hover:underline" to="/compliance">Terms & Privacy</Link>. No obligation — we compare suppliers and present options.</p>
    </form>
  );
}

function Section({ id, kicker, title, children, className = "" }){
  return (
    <section id={id} className={cx("relative py-20", className)}>
      <div className="container mx-auto max-w-6xl px-6">
        {kicker && (<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">{kicker}</p>)}
        {title && (<h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">{title}</h2>)}
        {children}
      </div>
    </section>
  );
}

// ---------- Layout ----------
const services = [
  {
    to: "/business-electricity",
    title: "Business Electricity",
    sub: "Fixed & flexible",
    Icon: Zap,
  },
  {
    to: "/business-gas",
    title: "Business Gas",
    sub: "Pass-through vs fixed",
    Icon: Leaf,
  },
  {
    to: "/business-water",
    title: "Business Water",
    sub: "Switch & save",
    Icon: Building2,
  },
  {
    to: "/business-broadband",
    title: "Broadband",
    sub: "Fibre & SLAs",
    Icon: Globe2,
  },
  {
    to: "/business-telecoms",
    title: "Telecoms",
    sub: "VoIP & lines",
    Icon: Phone,
  },
  {
    to: "/large-business",
    title: "Multi-site & Large",
    sub: "Basket, flexible",
    Icon: Layers,
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const mobileRef = useRef(null);
  const location = useLocation();

  // close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setBenefitsOpen(false);
  }, [location.pathname]);

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // click outside
  useEffect(() => {
    const handler = (e) => {
      if (
        servicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }
      if (
        benefitsOpen &&
        benefitsRef.current &&
        !benefitsRef.current.contains(e.target)
      ) {
        setBenefitsOpen(false);
      }
      if (
        open &&
        mobileRef.current &&
        !mobileRef.current.contains(e.target)
      ) {
        // allow taps on the burger to re-open
        const el = e.target;
        if (!el.closest("[data-nav-toggle]")) setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [servicesOpen, benefitsOpen, open]);

  // esc to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setBenefitsOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className={cx(
        "sticky top-0 z-50 border-b border-slate-800/60",
        "bg-slate-950/70 backdrop-blur-xl",
        scrolled && "shadow-[0_6px_30px_-10px_rgba(0,0,0,0.6)]"
      )}
      role="navigation"
      aria-label="Primary"
    >
      {/* subtle gradient accent */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 py-2">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <img
            src="https://i.ibb.co/4wZDRmDM/watt-utilities-white-logo-1-500-x-200-px.png"
            alt="Watt Utilities logo"
            className="h-6 w-auto md:h-8"
            draggable={false}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-[13px] text-slate-300 md:flex">
          {/* Services dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              className={cx(
                "inline-flex items-center gap-1 rounded-lg px-2 py-1.5",
                "hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              )}
            >
              <span>Services</span>
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  id="services-menu"
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className={cx(
                    "absolute left-0 mt-2 w-[560px] rounded-2xl border",
                    "border-slate-800/80 bg-slate-900/95 p-3 shadow-2xl"
                  )}
                >
                  <div className="grid grid-cols-2 gap-2 text-slate-200">
                    {services.map(({ to, title, sub, Icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        role="menuitem"
                        data-menu-item="service"
                        className={({ isActive }) =>
                          cx(
                            "group rounded-xl p-3 outline-none transition",
                            "hover:bg-slate-800/70 focus-visible:ring-2 focus-visible:ring-emerald-400/50",
                            isActive && "bg-slate-800/60"
                          )
                        }
                      >
                        <div className="mb-0.5 flex items-center gap-2 text-[13px] text-white">
                          <Icon className="h-4 w-4 text-emerald-400" />
                          <span className="font-medium">{title}</span>
                        </div>
                        <div className="text-[12px] text-slate-400">{sub}</div>
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Business Benefits Dropdown */}
          <div className="relative" ref={benefitsRef}>
            <button
              onClick={() => setBenefitsOpen(!benefitsOpen)}
              className={cx(
                "flex items-center gap-1 rounded-lg px-2 py-1.5 transition",
                "hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50",
                benefitsOpen && "text-white"
              )}
            >
              Business Benefits
              <ChevronDown className={cx("h-3 w-3 transition-transform", benefitsOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {benefitsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-50 mt-2 w-64 origin-top-left"
                >
                  <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-2 shadow-xl backdrop-blur">
                    {[
                      { to: "/business-energy-guides", title: "Energy Guides", sub: "Expert advice & strategies" },
                      { to: "/energy-saving-tips", title: "Saving Tips", sub: "Reduce consumption 20-45%" },
                      { to: "/contract-types", title: "Contract Types", sub: "Fixed vs flexible explained" },
                      { to: "/switching-process", title: "Switching Process", sub: "7-step guide" },
                      { to: "/green-energy", title: "Green Energy", sub: "Renewable options" },
                      { to: "/multi-site-energy", title: "Multi-Site", sub: "Portfolio management" },
                      { to: "/market-insights", title: "Market Insights", sub: "Trends & forecasts" },
                      { to: "/bill-validation", title: "Bill Validation", sub: "Error recovery" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setBenefitsOpen(false)}
                        className="block rounded-lg px-3 py-2 hover:bg-slate-800/70"
                      >
                        <div className="text-sm font-medium text-slate-100">{item.title}</div>
                        <div className="text-xs text-slate-400">{item.sub}</div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simple links */}
          {[
            { to: "/case-studies", label: "Case Studies" },
            { to: "/company", label: "Company" },
            { to: "/compliance", label: "Compliance" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(
                  "rounded-lg px-2 py-1.5 transition hover:text-white",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50",
                  isActive && "text-white underline underline-offset-4"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link to="/get-a-quote" className="hidden md:inline-flex">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-400 px-3 py-1.5 text-xs">Get a quote</Button>
          </Link>
          <button
            data-nav-toggle
            className="md:hidden rounded-lg p-1.5 text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div
              ref={mobileRef}
              className="border-t border-slate-800 bg-slate-900/95 px-4 py-3 text-sm text-slate-200"
            >
              <div className="grid gap-1">
                {/* Services group */}
                <div className="px-1 py-2 text-[11px] uppercase tracking-wide text-slate-400">
                  Services
                </div>
                {services.map(({ to, title }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        "block rounded-lg px-2 py-2",
                        "hover:bg-slate-800/70",
                        isActive && "bg-slate-800/60"
                      )
                    }
                  >
                    {title}
                  </NavLink>
                ))}

                {/* Business Benefits */}
                <div className="px-1 pt-3 text-[11px] uppercase tracking-wide text-slate-400">
                  Business Benefits
                </div>
                {[
                  { to: "/business-energy-guides", label: "Energy Guides" },
                  { to: "/energy-saving-tips", label: "Saving Tips" },
                  { to: "/contract-types", label: "Contract Types" },
                  { to: "/switching-process", label: "Switching Process" },
                  { to: "/green-energy", label: "Green Energy" },
                  { to: "/multi-site-energy", label: "Multi-Site Management" },
                  { to: "/market-insights", label: "Market Insights" },
                  { to: "/bill-validation", label: "Bill Validation" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        "block rounded-lg px-2 py-2",
                        "hover:bg-slate-800/70",
                        isActive && "bg-slate-800/60"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Secondary */}
                <div className="px-1 pt-3 text-[11px] uppercase tracking-wide text-slate-400">
                  Company
                </div>
                {[
                  { to: "/case-studies", label: "Case Studies" },
                  { to: "/company", label: "Company" },
                  { to: "/compliance", label: "Compliance" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        "block rounded-lg px-2 py-2",
                        "hover:bg-slate-800/70",
                        isActive && "bg-slate-800/60"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Primary CTA */}
                <div className="sticky bottom-2 mt-3">
                  <Link to="/get-a-quote" onClick={() => setOpen(false)}>
                    <Button className="w-full justify-center bg-emerald-500 text-white hover:bg-emerald-400 text-sm">
                      Get a quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Footer(){
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="space-y-3"><img src="https://i.ibb.co/4wZDRmDM/watt-utilities-white-logo-1-500-x-200-px.png" alt="Watt Utilities" className="h-10 w-auto" /></div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/company" className="hover:underline">About</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/compliance" className="hover:underline">Compliance</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/business-electricity" className="hover:underline">Business Electricity</Link></li>
            <li><Link to="/business-gas" className="hover:underline">Business Gas</Link></li>
            <li><Link to="/business-water" className="hover:underline">Business Water</Link></li>
            <li><Link to="/large-business" className="hover:underline">Multi‑site & Large Users</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/complaints" className="hover:underline">Complaints Procedure</Link></li>
            <li><Link to="/tpi-code" className="hover:underline">TPI Code of Conduct</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Watt Utilities. All rights reserved.</div>
    </footer>
  );
}

// ---------- Pages ----------
function HomePage(){
  return (
    <main>
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900" style={{ backgroundImage: "radial-gradient(600px 300px at 20% 20%, rgba(16,185,129,0.25), transparent), radial-gradient(400px 200px at 80% 0%, rgba(34,211,238,0.25), transparent)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-300">
              <Zap className="h-4 w-4"/> Compare Electricity • Gas • Water • Broadband
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">Smarter business utility deals — <span className="block bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">fast, transparent, tailored.</span></h1>
            <p className="mb-6 max-w-prose text-lg text-slate-300">Watt Utilities finds and negotiates the right tariffs for your business. Fixed, flexible, or basket contracts — single site or nationwide portfolios.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/get-a-quote"><Button className="h-11 rounded-xl bg-emerald-500 px-6 text-white hover:bg-emerald-400">Get my quotes <ArrowRight className="ml-2 h-4 w-4"/></Button></Link>
              <Link to="/business-electricity"><Button variant="outline" className="h-11 rounded-xl border-slate-700 bg-slate-900/40 px-6 text-slate-200 hover:bg-slate-800">Explore services</Button></Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Commission explained upfront</div>
              <div className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4"/> No obligation quotes</div>
              <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Speak to an expert</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.15}}>
            <Card className="border-0 bg-slate-900/60 shadow-xl ring-1 ring-slate-800">
              <CardHeader><CardTitle className="flex items-center gap-2 text-white"><LineChartIcon className="h-5 w-5 text-emerald-400"/> Live market snapshot</CardTitle></CardHeader>
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
                <p className="mt-3 text-sm text-slate-400">Prices are illustrative. We constantly track market movements to time your switch.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      <Section id="features" kicker="Platform" title="Built for savings, speed and confidence">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Radical transparency", desc: "Clear commission policy, plain‑English contracts, documented process from LOA to go‑live." },
            { icon: LineChartIcon, title: "Market intelligence", desc: "We monitor wholesale trends to help you pick fixed vs flexible at the right time." },
            { icon: Zap, title: "Lightning‑fast quotes", desc: "Multi‑supplier comparisons across electricity, gas, and water in minutes." },
            { icon: Leaf, title: "Green options", desc: "REGO‑backed, carbon reporting, and sustainability guidance for net‑zero roadmaps." },
          ].map((f,i)=> (
            <motion.div key={i} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.06}}>
              <Card className="h-full border-0 bg-slate-900/60 ring-1 ring-slate-800">
                <CardHeader><div className="flex items-center gap-3"><f.icon className="h-5 w-5 text-emerald-400"/><CardTitle>{f.title}</CardTitle></div></CardHeader>
                <CardContent className="text-slate-300">{f.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="sectors" kicker="Who we help" title="From single sites to national portfolios">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Building2, title: "SMEs & Retail", desc: "Simple, no‑nonsense switching with clear savings." },
            { icon: Megaphone, title: "Hospitality", desc: "Multi‑meter sites, day/night tariffs, and seasonality considered." },
            { icon: Leaf, title: "Manufacturing & Multi‑site", desc: "Basket deals, flexible contracts, and risk management." },
          ].map((s,i)=> (
            <Card key={i} className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
              <CardHeader><div className="flex items-center gap-3"><s.icon className="h-5 w-5 text-emerald-400"/><CardTitle>{s.title}</CardTitle></div></CardHeader>
              <CardContent className="text-slate-300">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="quote" kicker="Start here" title="Get your tailored quotes">
        <div className="grid gap-8 md:grid-cols-2">
          <div><QuoteForm/></div>
          <div className="space-y-6">
            <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle className="flex items-center gap-2"><FileSignature className="h-5 w-5 text-emerald-400"/> How it works</CardTitle></CardHeader><CardContent className="space-y-4 text-slate-300"><div className="flex items-start gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">1</span> Share a few details about your business and current usage.</div><div className="flex items-start gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">2</span> We compare leading suppliers and negotiate on your behalf.</div><div className="flex items-start gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">3</span> You choose the right deal. We handle the switch — zero downtime.</div></CardContent></Card>
            <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-400"/> Why businesses choose us</CardTitle></CardHeader><CardContent className="space-y-3 text-slate-300"><div className="flex items-center gap-2"><Star className="h-4 w-4 text-emerald-400"/> Live reviews & case studies</div><div className="flex items-center gap-2"><Star className="h-4 w-4 text-emerald-400"/> Commission explained upfront</div><div className="flex items-center gap-2"><Star className="h-4 w-4 text-emerald-400"/> Green & flexible contract options</div></CardContent></Card>
          </div>
        </div>
      </Section>
    </main>
  );
}

function RichLander({ title, intro, children }){
  return (
    <main>
      <header className="border-b border-slate-800 bg-slate-950/60"><div className="mx-auto max-w-6xl px-6 py-12"><h1 className="text-3xl font-bold md:text-4xl">{title}</h1>{intro && <p className="mt-2 max-w-3xl text-slate-300">{intro}</p>}</div></header>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </main>
  );
}

// Service pages
const ElectricityPage = () => (
  <RichLander title="Business Electricity" intro="Compare fixed, flexible and pass‑through contracts. Smart metering, half‑hourly, CCL and more — explained in plain English.">
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800 md:col-span-2"><CardHeader><CardTitle>Why choose us</CardTitle></CardHeader><CardContent className="space-y-3 text-slate-300"><p>We tender to multiple suppliers and negotiate on timing to secure the best rates for your usage profile.</p><ul className="list-disc space-y-1 pl-5"><li>Fixed vs flexible guidance with risk scenarios</li><li>Half‑hourly and smart meter support</li><li>Green/REGO options without a price shock</li></ul></CardContent></Card>
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle>Get a quote</CardTitle></CardHeader><CardContent><QuoteForm/></CardContent></Card>
    </div>
  </RichLander>
);

const GasPage = () => (
  <RichLander title="Business Gas" intro="Flexible portfolios, pass‑through, and hedging that matches your operational profile.">
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800 md:col-span-2"><CardHeader><CardTitle>How we help</CardTitle></CardHeader><CardContent className="space-y-3 text-slate-300"><p>We analyse your seasonal usage to recommend the right contract structure and term length.</p><p>Options include cap & collar, block purchasing and portfolio baskets for multi‑site clients.</p></CardContent></Card>
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle>Get a quote</CardTitle></CardHeader><CardContent><QuoteForm/></CardContent></Card>
    </div>
  </RichLander>
);

const WaterPage = () => (
  <RichLander title="Business Water" intro="Switch to competitive suppliers, audit leaks and cut wastewater charges."><div className="grid gap-6 md:grid-cols-3"><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800 md:col-span-2"><CardHeader><CardTitle>What we cover</CardTitle></CardHeader><CardContent className="space-y-3 text-slate-300"><ul className="list-disc space-y-1 pl-5"><li>Retailer switching & consolidated billing</li><li>Leak detection & usage reduction</li><li>Trade effluent and wastewater reviews</li></ul></CardContent></Card><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle>Get a quote</CardTitle></CardHeader><CardContent><QuoteForm/></CardContent></Card></div></RichLander>
);

const BroadbandPage = () => (
  <RichLander title="Business Broadband" intro="FTTP, leased lines and backup options with SLA clarity."><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="text-slate-300">We assess speed requirements, contention, and uptime to recommend the right connection type and contract length.</CardContent></Card></RichLander>
);

const TelecomsPage = () => (
  <RichLander title="Business Telecoms" intro="VOIP systems, lines & minutes with call recording and analytics."><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="text-slate-300">Get scalable telephony with per‑seat pricing and portability.</CardContent></Card></RichLander>
);

const LargeBusinessPage = () => (
  <RichLander title="Multi‑site & Large Users" intro="Portfolio strategies, basket purchasing and flexible contracts for enterprises."><div className="grid gap-6 md:grid-cols-3"><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800 md:col-span-2"><CardHeader><CardTitle>Our tailored services</CardTitle></CardHeader><CardContent className="space-y-3 text-slate-300"><p>Risk management, market timing, budgeting and consolidated billing — end‑to‑end support for portfolios.</p></CardContent></Card><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle>Talk to a specialist</CardTitle></CardHeader><CardContent><QuoteForm/></CardContent></Card></div></RichLander>
);

const PassThroughPage = () => (
  <RichLander title="Pass‑Through vs Fixed" intro="Understand the pros and cons and when each approach wins."><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="text-slate-300">We’ll model cost scenarios and volatility risk so you can choose confidently.</CardContent></Card></RichLander>
);

const SuppliersPage = () => (
  <RichLander title="Suppliers" intro="We work with a wide range of reputable UK suppliers across electricity, gas and water."><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{Array.from({length:9}).map((_,i)=> (<Card key={i} className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="py-6 text-center text-slate-300">Supplier {i+1}</CardContent></Card>))}</div></RichLander>
);

const HowPaidPage = () => (
  <RichLander title="How We Get Paid" intro="Commission and/or fees explained in plain English so you know exactly how we’re remunerated."><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="text-slate-300">We disclose supplier commissions and any fees before you sign. No surprises.</CardContent></Card></RichLander>
);

const LOAPage = () => (
  <RichLander title="Letter of Authority (LOA)" intro="Why we need an LOA and what we do with it."><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="text-slate-300">An LOA allows us to speak to your current suppliers to validate usage and obtain quotes. It does not lock you into any deal.</CardContent></Card></RichLander>
);

const ComplaintsPage = () => (
  <RichLander title="Complaints Procedure" intro="We aim to resolve issues quickly and fairly. Here’s how it works."><ol className="list-decimal space-y-2 pl-6 text-slate-300"><li>Contact our team with details</li><li>We acknowledge within 2 working days</li><li>Resolution plan and timescales provided</li></ol></RichLander>
);

const PrivacyPage = () => (
  <RichLander title="Privacy Policy"><p className="text-slate-300">Your data is handled in accordance with UK GDPR. We only process what’s necessary to obtain and present quotes.</p></RichLander>
);

const TermsPage = () => (
  <RichLander title="Terms & Conditions"><p className="text-slate-300">Standard website and service terms. Add your legal text here.</p></RichLander>
);

const TPIPage = () => (
  <RichLander title="TPI Code of Conduct"><p className="text-slate-300">Our commitments as a Third Party Intermediary (TPI) covering transparency, consent and fair treatment.</p></RichLander>
);

const GlossaryPage = () => (
  <RichLander title="Glossary"><ul className="list-disc space-y-1 pl-5 text-slate-300"><li><b>MPAN/MPRN</b> — Meter identifiers for electricity/gas</li><li><b>REGO</b> — Renewable Energy Guarantees of Origin</li><li><b>HH Metering</b> — Half‑hourly electricity metering</li></ul></RichLander>
);

const CompanyPage = () => (
  <RichLander title="About Watt Utilities" intro="Founded to make utility procurement transparent, efficient and genuinely helpful for UK businesses."><div className="grid gap-6 md:grid-cols-3"><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800 md:col-span-2"><CardHeader><CardTitle>Who we are</CardTitle></CardHeader><CardContent className="space-y-3 text-slate-300"><p>Independent consultancy with expert account managers and access to a broad supplier panel.</p></CardContent></Card><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><CardTitle>Talk to us</CardTitle></CardHeader><CardContent><Link to="/contact"><Button className="w-full bg-emerald-500 text-white hover:bg-emerald-400">Contact</Button></Link></CardContent></Card></div></RichLander>
);

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
        {/* Team Photo Section */}
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

        {/* Values Section */}
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

        {/* Open Positions */}
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
                      className="bg-emerald-500 text-white hover:bg-emerald-400 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
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
                <Button type="submit" className="bg-emerald-500 text-white hover:bg-emerald-400">
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

// Force rebuild - Case Studies page with Trustpilot reviews
const CaseStudiesPage = CaseStudies;

const KnowledgePage = () => (
  <RichLander title="Knowledge Hub" intro="Guides, explainers and market updates to help you buy better."><div className="grid gap-6 md:grid-cols-3">{[{ title:"Business Electricity: Fixed vs Flexible (2025)", blurb:"When each contract type wins — and how to decide based on usage & risk.", tag:"Guide" },{ title:"What is a Letter of Authority?", blurb:"Why brokers need LOAs and what we actually do with them.", tag:"Explainer" },{ title:"Green Tariffs & REGOs", blurb:"How to go greener without breaking the budget.", tag:"Sustainability" }].map((a,i)=> (<Card key={i} className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardHeader><div className="flex items-center justify-between"><CardTitle className="text-lg">{a.title}</CardTitle><span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">{a.tag}</span></div></CardHeader><CardContent className="text-slate-300">{a.blurb}</CardContent></Card>))}</div></RichLander>
);

const ContactPage = () => (
  <RichLander title="Contact" intro="Talk to a utilities specialist — we'll get you sorted."><div className="grid gap-8 md:grid-cols-2"><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="space-y-4 pt-6 text-slate-300"><div className="text-2xl font-semibold text-white">+44 161 123 4567</div><div>Mon–Fri, 9:00–17:30 (UK)</div><div className="text-sm text-slate-400">Prefer email? hello@wattutilities.co.uk</div><div className="text-sm text-slate-400">Or leave a message and we'll call you back.</div></CardContent></Card><Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800"><CardContent className="pt-6"><form className="grid gap-4"><div className="grid gap-2 md:grid-cols-2"><Input placeholder="Your name" className="bg-slate-900/60 border-slate-800" /><Input placeholder="Email" type="email" className="bg-slate-900/60 border-slate-800" /></div><Input placeholder="Company" className="bg-slate-900/60 border-slate-800" /><Textarea placeholder="How can we help?" className="min-h-[120px] bg-slate-900/60 border-slate-800" /><div className="flex justify-end"><Button className="bg-emerald-500 text-white hover:bg-emerald-400">Send message</Button></div></form></CardContent></Card></div></RichLander>
);

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
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>What is a Letter of Authority?</CardTitle></CardHeader>
        <CardContent className="text-slate-300">
          <p>An LOA allows us to obtain your usage data and negotiate on your behalf. It doesn't commit you to switching.</p>
        </CardContent>
      </Card>
      <Card className="border-0 bg-slate-900/60 ring-1 ring-slate-800">
        <CardHeader><CardTitle>How many suppliers do you work with?</CardTitle></CardHeader>
        <CardContent className="text-slate-300">
          <p>We work with 30+ energy suppliers to ensure competitive quotes for all business types and sizes.</p>
        </CardContent>
      </Card>
    </div>
  </RichLander>
);

const GetQuotePage = () => (<RichLander title="Get a Quote" intro="Answer a few questions and we'll prepare your tailored options."><QuoteForm/></RichLander>);

const NotFound = () => (<RichLander title="Page not found"><p className="text-slate-300">Sorry, we can’t find that page. Try our <Link to="/" className="text-emerald-300 underline">home page</Link>.</p></RichLander>);

// ---------- App ----------
export default function WattUtilitiesSite(){
  return (
    <Router>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org", "@type":"Organization", name:"Watt Utilities", url:"https://www.wattutilities.co.uk", logo:"https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png" }) }} />
      <ScrollToTop />
      <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/business-electricity" element={<ElectricityPage/>} />
          <Route path="/business-gas" element={<GasPage/>} />
          <Route path="/business-water" element={<WaterPage/>} />
          <Route path="/business-broadband" element={<BroadbandPage/>} />
          <Route path="/business-telecoms" element={<TelecomsPage/>} />
          <Route path="/large-business" element={<LargeBusinessPage/>} />
          <Route path="/pass-through-fixed" element={<PassThroughPage/>} />
          <Route path="/suppliers" element={<SuppliersPage/>} />
          <Route path="/how-we-get-paid" element={<HowPaidPage/>} />
          <Route path="/loa" element={<LOAPage/>} />
          <Route path="/complaints" element={<ComplaintsPage/>} />
          <Route path="/privacy" element={<PrivacyPage/>} />
          <Route path="/terms" element={<TermsPage/>} />
          <Route path="/tpi-code" element={<TPIPage/>} />
          <Route path="/glossary" element={<GlossaryPage/>} />
          <Route path="/company" element={<CompanyPage/>} />
          <Route path="/careers" element={<CareersPage/>} />
          <Route path="/case-studies" element={<CaseStudiesPage/>} />
          <Route path="/business-energy-guides" element={<BusinessEnergyGuides/>} />
          <Route path="/energy-saving-tips" element={<EnergySavingTips/>} />
          <Route path="/contract-types" element={<ContractTypesExplained/>} />
          <Route path="/switching-process" element={<SwitchingProcess/>} />
          <Route path="/green-energy" element={<GreenEnergyOptions/>} />
          <Route path="/multi-site-energy" element={<MultiSiteEnergy/>} />
          <Route path="/market-insights" element={<EnergyMarketInsights/>} />
          <Route path="/bill-validation" element={<BillValidation/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/compliance" element={<CompliancePage/>} />
          <Route path="/faqs" element={<FAQsPage/>} />
          <Route path="/get-a-quote" element={<GetQuotePage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />

        {/* Mobile sticky CTA */}
        <div className="fixed inset-x-0 bottom-3 z-40 mx-auto flex max-w-xl items-center justify-center px-4 md:hidden">
          <div className="w-full rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-2 shadow-2xl backdrop-blur">
            <Link to="/get-a-quote" className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-400">
              Get quotes <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
