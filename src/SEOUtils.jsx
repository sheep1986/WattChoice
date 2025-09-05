import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

export const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};

export const generateMetaTags = (page) => {
  const baseTags = {
    title: "Watt Utilities - Save 45% on Business Energy Bills",
    description: "Expert business energy consultancy saving UK companies up to 45% on utility bills. Free consultation.",
    keywords: "business energy, utility switching, energy broker",
    image: "https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png"
  };

  const pageTags = {
    'business-electricity': {
      title: 'Business Electricity Prices & Switching | Save 45% | Watt Utilities',
      description: 'Compare business electricity prices from 30+ UK suppliers. Expert negotiation saves 20-45% on energy bills. Free switching service, no hidden fees.',
      keywords: 'business electricity, commercial electricity prices, business electricity comparison, electricity switching, UK business energy'
    },
    'business-gas': {
      title: 'Business Gas Prices & Contracts | Reduce Costs 40% | Watt Utilities',
      description: 'Expert business gas procurement with wholesale rates. Compare commercial gas suppliers, flexible contracts, multi-site management. Save up to 40%.',
      keywords: 'business gas, commercial gas prices, business gas comparison, gas procurement, UK gas suppliers'
    },
    'business-water': {
      title: 'Business Water Supplier Switching | Save 20% | Watt Utilities',
      description: 'Switch business water suppliers and save up to 20%. Expert water deregulation advice, bill validation, leak detection. Free switching service.',
      keywords: 'business water, water deregulation, commercial water suppliers, water switching, business water rates'
    },
    'large-business': {
      title: 'Large Business & Corporate Energy Management | Watt Utilities',
      description: 'Specialist energy procurement for large businesses. Flexible purchasing, risk management, multi-site portfolios. Dedicated account management.',
      keywords: 'corporate energy management, large business energy, flexible energy purchasing, half-hourly meters, basket contracts'
    },
    'get-a-quote': {
      title: 'Get Business Energy Quotes in 5 Minutes | Free Service | Watt Utilities',
      description: 'Get instant business energy quotes from 30+ suppliers. Free comparison service, no obligation. Save 20-45% on electricity, gas, water bills.',
      keywords: 'business energy quote, energy comparison, free energy quotes, business utility quotes, compare energy prices'
    },
    'knowledge': {
      title: 'Business Energy Guides & Expert Advice | Watt Utilities Knowledge Hub',
      description: 'Expert guides on business energy procurement, contract negotiation, market insights. Learn how to reduce utility costs and avoid common pitfalls.',
      keywords: 'energy guides, business energy advice, utility procurement tips, energy market insights, contract guidance'
    },
    'company': {
      title: 'About Watt Utilities | UK\'s Trusted Business Energy Consultants Since 2000',
      description: 'Leading UK business energy consultancy since 2000. 900,000+ businesses saved £150M. Expert team, transparent service, Utilities Intermediaries Association member.',
      keywords: 'about Watt Utilities, energy consultancy, business utility broker, Manchester energy broker, UIA member'
    },
    'contact': {
      title: 'Contact Watt Utilities | Call 0161 833 8661 | Manchester Office',
      description: 'Contact our expert energy consultants. Manchester office, nationwide service. Call 0161 833 8661 or email hello@wattutilities.co.uk for free consultation.',
      keywords: 'contact Watt Utilities, Manchester energy broker, business energy contact, utility switching help'
    }
  };

  return pageTags[page] || baseTags;
};

export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll('img.lazy');
    images.forEach(img => imageObserver.observe(img));
  }
};

export const optimizeWebVitals = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    });
  }
};

export const generateJsonLd = (type, data) => {
  const schemas = {
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.description,
      "author": {
        "@type": "Organization",
        "name": "Watt Utilities"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Watt Utilities",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png"
        }
      },
      "datePublished": data.datePublished || new Date().toISOString(),
      "dateModified": data.dateModified || new Date().toISOString(),
      "image": data.image || "https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png"
    },
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": data.name,
      "description": data.description,
      "step": data.steps?.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text
      }))
    },
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "description": data.description,
      "brand": {
        "@type": "Brand",
        "name": "Watt Utilities"
      },
      "offers": {
        "@type": "Offer",
        "url": data.url || "https://www.wattutilities.co.uk",
        "priceCurrency": "GBP",
        "price": data.price || "0",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  return schemas[type] || {};
};

export const seoConfig = {
  defaultTitle: 'Watt Utilities - Save 45% on Business Energy & Utility Bills',
  titleTemplate: '%s | Watt Utilities',
  defaultDescription: 'Expert business energy consultancy saving UK companies up to 45% on electricity, gas, water & telecoms. 900,000+ businesses saved £150M. Free quotes in 5 minutes.',
  siteUrl: 'https://www.wattutilities.co.uk',
  siteName: 'Watt Utilities',
  twitterHandle: '@wattutilities',
  socialLinks: {
    twitter: 'https://twitter.com/wattutilities',
    facebook: 'https://www.facebook.com/profile.php?id=61580022617531',
    linkedin: 'https://www.linkedin.com/company/watt-utilities-uk-ltd'
  }
};

export const generateSitemapEntry = (loc, changefreq = 'weekly', priority = 0.8) => {
  return `  <url>
    <loc>${seoConfig.siteUrl}${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

export const focusKeywords = {
  primary: [
    'business energy',
    'business electricity',
    'business gas',
    'commercial energy',
    'utility switching',
    'energy broker',
    'business utilities',
    'energy procurement',
    'UK energy suppliers',
    'energy comparison'
  ],
  secondary: [
    'save business energy',
    'reduce utility costs',
    'business water',
    'business broadband',
    'Manchester energy broker',
    'multi-site energy',
    'energy management',
    'wholesale energy rates',
    'contract negotiation',
    'utility bill reduction'
  ],
  longTail: [
    'how to switch business energy supplier',
    'compare business electricity prices UK',
    'best business gas rates 2024',
    'business energy broker Manchester',
    'save money on business utilities',
    'multi-site energy procurement UK',
    'business water deregulation switching',
    'commercial energy contract negotiation',
    'reduce business electricity costs',
    'free business energy comparison'
  ]
};

export const localSEOData = {
  businessName: 'Watt Utilities UK Ltd',
  address: {
    street: 'St Ann\'s House, 5th Floor, St Ann\'s Square',
    city: 'Manchester',
    region: 'Greater Manchester',
    postalCode: 'M2 7LP',
    country: 'GB'
  },
  coordinates: {
    latitude: 53.4808,
    longitude: -2.2426
  },
  phone: '+44-161-833-8661',
  email: 'hello@wattutilities.co.uk',
  openingHours: {
    weekdays: '09:00-17:30',
    saturday: 'Closed',
    sunday: 'Closed'
  },
  serviceAreas: [
    'Manchester',
    'Greater Manchester',
    'North West England',
    'United Kingdom'
  ]
};

export const performanceOptimizations = {
  enableLazyLoading: true,
  enableCodeSplitting: true,
  enableCaching: true,
  enableCompression: true,
  enableMinification: true,
  enableImageOptimization: true,
  criticalCSS: true,
  prefetchLinks: true,
  dnsePrefetch: [
    'https://fonts.googleapis.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ]
};