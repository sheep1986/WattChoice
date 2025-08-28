import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const TrustpilotWidget = ({ type = 'carousel' }) => {
  useEffect(() => {
    // Load Trustpilot widget script
    const script = document.createElement('script');
    script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Refresh widgets when script loads
    script.onload = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement();
      }
    };

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Different widget types
  const widgets = {
    // Mini widget - just shows stars and count
    mini: {
      templateId: '5419b6a8b0d04a076446a9ad',
      height: '24px',
      width: '100%'
    },
    // Carousel - rotating reviews
    carousel: {
      templateId: '54ad5defc6454f065c28af8b',
      height: '240px',
      width: '100%'
    },
    // Grid - shows multiple reviews
    grid: {
      templateId: '54bc116bf92f5c1c08786f7e',
      height: '400px',
      width: '100%'
    },
    // Micro review count
    micro: {
      templateId: '5419b732fbfb950b10de65e5',
      height: '20px',
      width: '100%'
    }
  };

  const selectedWidget = widgets[type] || widgets.carousel;

  return (
    <div className="trustpilot-container">
      {/* Trustpilot Widget */}
      <div 
        className="trustpilot-widget" 
        data-locale="en-GB"
        data-template-id={selectedWidget.templateId}
        data-businessunit-id="5767c7130000ff000591625e" // Watt.co.uk business ID
        data-style-height={selectedWidget.height}
        data-style-width={selectedWidget.width}
        data-theme="dark"
        data-stars="4,5" // Only show 4 and 5 star reviews
        data-review-languages="en"
      >
        <a 
          href="https://www.trustpilot.com/review/watt.co.uk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300"
        >
          Trustpilot
        </a>
      </div>

      {/* Fallback while loading */}
      <noscript>
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center">
          <div className="flex justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => (
              <Star 
                key={i} 
                className={`w-6 h-6 ${i <= 4 ? 'text-green-500 fill-current' : 'text-gray-600'}`} 
              />
            ))}
          </div>
          <p className="text-white font-semibold">4.6 out of 5</p>
          <p className="text-sm text-gray-400">Based on 709 reviews on</p>
          <a 
            href="https://www.trustpilot.com/review/watt.co.uk"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-emerald-400 hover:text-emerald-300"
          >
            Trustpilot
          </a>
        </div>
      </noscript>
    </div>
  );
};

export default TrustpilotWidget;