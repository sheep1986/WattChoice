import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  structuredData,
  ogImage,
  ogType = "website",
  article = null 
}) => {
  const baseTitle = "Watt Utilities - Business Energy & Utility Switching Experts";
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  
  const defaultDescription = "Save up to 45% on business energy bills. Expert utility switching for electricity, gas, water, broadband & telecoms. 900,000+ businesses saved £150M. Get quotes in 5 minutes.";
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = "business electricity, business gas, commercial energy, utility switching, energy procurement, business water, business broadband, energy comparison, utility broker, UK energy suppliers";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  
  const ogImageUrl = ogImage || "https://i.ibb.co/9m5w9tMJ/watt-utilities-white-logo-1-500-x-200-px-500-x-100-px-5.png";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Watt Utilities UK Ltd" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://wattutilities001.netlify.app"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Watt Utilities" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png" />
      <meta name="twitter:site" content="@wattutilities" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="Manchester" />
      <meta name="geo.position" content="53.4808;-2.2426" />
      <meta name="ICBM" content="53.4808, -2.2426" />
    </Helmet>
  );
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Watt Utilities UK Ltd",
  "url": "https://www.wattutilities.co.uk",
  "logo": "https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png",
  "description": "Expert business utility switching service saving UK companies up to 45% on energy bills",
  "foundingDate": "2000",
  "areaServed": "United Kingdom",
  "sameAs": [
    "https://twitter.com/wattutilities",
    "https://www.facebook.com/profile.php?id=61580022617531",
    "https://www.linkedin.com/company/watt-utilities-uk-ltd"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-161-833-8661",
    "contactType": "Customer Service",
    "email": "hello@wattutilities.co.uk",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "St Ann's House, 5th Floor, St Ann's Square",
    "addressLocality": "Manchester",
    "postalCode": "M2 7LP",
    "addressCountry": "GB"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "892",
    "reviewCount": "892"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Watt Utilities",
  "image": "https://i.ibb.co/7dywXhNK/watt-utilities-white-logo-1-1.png",
  "priceRange": "Free Consultation",
  "telephone": "+44-161-833-8661",
  "email": "hello@wattutilities.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "St Ann's House, 5th Floor, St Ann's Square",
    "addressLocality": "Manchester",
    "addressRegion": "Greater Manchester",
    "postalCode": "M2 7LP",
    "addressCountry": "GB"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:30"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Utility Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Electricity Switching",
          "description": "Compare and switch business electricity suppliers, save up to 45%"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Gas Procurement",
          "description": "Expert gas contract negotiation and supplier switching"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Water Services",
          "description": "Water supplier switching and cost reduction up to 20%"
        }
      }
    ]
  }
};

// Breadcrumb schema generator
export const createBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Review/Testimonial schema
export const createReviewSchema = (reviews) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Watt Utilities Business Energy Switching Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1247",
      "reviewCount": "892"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.text
    }))
  };
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much can I save on business energy bills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Businesses typically save between 20-45% on their utility bills. We've helped over 900,000 businesses save a combined £150 million. Savings depend on current rates, contract length, and consumption levels."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the switching process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The initial consultation takes just 5 minutes. The complete switching process typically takes 4-6 weeks, depending on your current contract terms. We handle all paperwork and supplier negotiations for you."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a fee for your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our service is completely free to businesses. We receive commission from energy suppliers when we successfully arrange a new contract. You only pay for your energy usage at the agreed rates."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with multiple business sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in multi-site energy procurement and can manage portfolios of any size with basket contracts and flexible purchasing strategies. We've successfully managed contracts for businesses with 1 to 1000+ sites."
      }
    },
    {
      "@type": "Question",
      "name": "Which utilities can Watt Utilities help with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive utility management including business electricity, gas, water, broadband, telecoms, and merchant services. Our experts negotiate with all major UK suppliers to secure the best rates."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when my current contract ends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We monitor your contract end dates and contact you 4-6 months before expiry to secure new rates. This prevents you from rolling onto expensive out-of-contract rates which can be 40-80% higher."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if I'm already in a contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can review your existing contracts and prepare for renewal. If you're paying excessive rates, we may be able to help with mis-selling claims or finding exit strategies. We'll also monitor for your renewal window."
      }
    },
    {
      "@type": "Question",
      "name": "How do you compare energy prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have direct access to wholesale rates from 30+ UK business energy suppliers. Our advanced comparison system analyses thousands of tariffs daily, considering contract length, payment terms, and your specific usage patterns."
      }
    },
    {
      "@type": "Question",
      "name": "What size businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with all business sizes from small shops and offices to large corporations and industrial sites. Whether you spend £1,000 or £1 million on utilities annually, we can help reduce your costs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer green energy options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer 100% renewable energy contracts from certified green suppliers. We can help you reduce your carbon footprint while maintaining competitive rates and supporting your sustainability goals."
      }
    }
  ]
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Business Energy Consultancy",
  "provider": {
    "@type": "Organization",
    "name": "Watt Utilities UK Ltd"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Utility Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Electricity Procurement",
          "description": "Expert electricity contract negotiation saving businesses 20-45% on energy costs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Gas Switching",
          "description": "Commercial gas procurement with access to wholesale rates from 30+ suppliers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Water Deregulation",
          "description": "Water supplier switching and cost reduction services saving up to 20%"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Broadband & Telecoms",
          "description": "Complete business connectivity solutions with guaranteed uptime and support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Energy Management Consultancy",
          "description": "Strategic energy procurement and consumption optimization for large businesses"
        }
      }
    ]
  }
};

export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Watt Utilities Business Energy Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "892",
    "reviewCount": "892"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John Smith"
      },
      "datePublished": "2024-01-15",
      "reviewBody": "Excellent service! Saved our company 35% on electricity costs. The team was professional and handled everything."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "datePublished": "2024-02-01",
      "reviewBody": "Watt Utilities negotiated fantastic rates for our multi-site operation. Highly recommended for any business looking to reduce utility costs."
    }
  ]
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Free Business Energy Consultation",
  "description": "Get expert advice on reducing your business utility costs by up to 45%",
  "startDate": new Date().toISOString(),
  "endDate": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "organizer": {
    "@type": "Organization",
    "name": "Watt Utilities",
    "url": "https://www.wattutilities.co.uk"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.wattutilities.co.uk/get-a-quote",
    "price": "0",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  },
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.wattutilities.co.uk"
  }
};