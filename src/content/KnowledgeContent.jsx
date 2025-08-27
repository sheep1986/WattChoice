export const knowledgeContent = {
  guides: [
    {
      id: "fixed-vs-flexible",
      title: "Fixed vs Flexible Energy Contracts: Complete Guide 2024",
      category: "Procurement Strategy",
      readTime: "12 min",
      metaDescription: "Comprehensive guide to choosing between fixed and flexible energy contracts. Understand risk, rewards, and which suits your business.",
      content: {
        introduction: "Choosing between fixed and flexible energy contracts is one of the most important decisions for business energy procurement. This guide explains the differences, benefits, risks, and helps you determine the best approach for your business.",
        
        sections: [
          {
            title: "Fixed Rate Contracts Explained",
            content: "Fixed rate contracts lock in your unit rates for the entire contract duration, typically 1-5 years. You pay the same price per kWh regardless of market movements.",
            pros: [
              "Complete budget certainty",
              "Protection from price rises",
              "Simple billing and forecasting",
              "No market monitoring required"
            ],
            cons: [
              "Cannot benefit from price drops",
              "Often includes risk premium",
              "Early termination penalties",
              "Less flexibility for usage changes"
            ],
            bestFor: "SMEs with stable consumption, risk-averse businesses, those wanting billing simplicity"
          },
          {
            title: "Flexible Contracts Explained",
            content: "Flexible contracts allow you to purchase energy in blocks throughout your contract term, taking advantage of market movements.",
            pros: [
              "Capture market lows",
              "Spread purchasing risk",
              "Align with cash flow",
              "Volume flexibility"
            ],
            cons: [
              "Requires active management",
              "Exposure to price rises",
              "Complex billing",
              "Need market expertise"
            ],
            bestFor: "Large users, businesses with market knowledge, those with variable consumption"
          },
          {
            title: "Market Timing Strategies",
            content: "Understanding when to lock in rates or stay flexible requires market intelligence:",
            factors: [
              "Seasonal patterns - summer typically lower than winter",
              "Global events impacting wholesale prices",
              "Renewable generation levels",
              "Currency fluctuations",
              "Storage levels and capacity"
            ]
          }
        ]
      }
    },
    {
      id: "mpan-mprn-explained",
      title: "MPAN and MPRN Numbers: Everything You Need to Know",
      category: "Technical Guides",
      readTime: "8 min",
      metaDescription: "Complete guide to MPAN (electricity) and MPRN (gas) numbers. How to find them, what they mean, and why they're important for switching.",
      content: {
        introduction: "MPAN and MPRN numbers are unique identifiers for your electricity and gas supplies. Understanding these is essential for switching suppliers and managing your utilities.",
        
        sections: [
          {
            title: "What is an MPAN?",
            content: "MPAN (Meter Point Administration Number) is a 21-digit number identifying your electricity supply point. Also called 'Supply Number' or 'S-Number'.",
            structure: [
              "Profile Class (2 digits) - Shows your meter type",
              "MTC (3 digits) - Meter Time Switch Code",
              "Core MPAN (13 digits) - Unique identifier",
              "Check Digit (1 digit) - Validation"
            ],
            where: "Found on electricity bills, usually in a box labeled 'Supply Number' or 'MPAN'"
          },
          {
            title: "What is an MPRN?",
            content: "MPRN (Meter Point Reference Number) is a 10-digit number identifying your gas supply point. Also called 'M-Number'.",
            where: "Found on gas bills, often near meter readings or supply details",
            important: "One MPRN per gas meter - multi-meter sites have multiple MPRNs"
          },
          {
            title: "Why These Numbers Matter",
            content: "Critical for several business processes:",
            uses: [
              "Switching suppliers - identifies exact supply",
              "Resolving billing disputes",
              "Connecting new supplies",
              "Managing multi-site portfolios",
              "Emergency supply issues"
            ]
          }
        ]
      }
    },
    {
      id: "water-deregulation",
      title: "Business Water Deregulation: Complete Switching Guide",
      category: "Water Services",
      readTime: "10 min",
      metaDescription: "Everything about business water deregulation in England and Wales. How to switch retailers, save money, and improve service.",
      content: {
        introduction: "Since April 2017, businesses in England and Wales can choose their water retailer. This guide explains how deregulation works and how to benefit.",
        
        sections: [
          {
            title: "How Deregulation Works",
            content: "Water deregulation separated wholesale (pipes and treatment) from retail (billing and customer service). You can now choose your retailer while the wholesaler remains the same.",
            benefits: [
              "Competitive pricing",
              "Better customer service",
              "Consolidated multi-site billing",
              "Water efficiency support",
              "Tailored contracts"
            ]
          },
          {
            title: "Eligibility Criteria",
            england: "All business customers can switch",
            wales: "Businesses using 50+ megalitres annually",
            scotland: "Deregulated since 2008 - all businesses eligible"
          },
          {
            title: "Switching Process",
            steps: [
              "Check current contract terms",
              "Compare retailer prices and services",
              "Choose new retailer and agree terms",
              "New retailer handles switch",
              "Supply continues uninterrupted",
              "Start receiving bills from new retailer"
            ],
            timeline: "Typically 2-4 weeks from application to switch"
          }
        ]
      }
    },
    {
      id: "carbon-reporting",
      title: "Business Carbon Reporting & Net Zero Strategy",
      category: "Sustainability",
      readTime: "15 min",
      metaDescription: "Guide to carbon reporting, SECR compliance, and achieving net zero. Understand requirements, calculations, and reduction strategies.",
      content: {
        introduction: "Carbon reporting is increasingly important for UK businesses, with regulatory requirements and stakeholder expectations driving the need for comprehensive emissions management.",
        
        sections: [
          {
            title: "SECR Requirements",
            content: "Streamlined Energy and Carbon Reporting affects large companies and LLPs:",
            criteria: [
              "250+ employees, OR",
              "£36m+ turnover AND £18m+ balance sheet",
              "Must report energy use and emissions",
              "Include in annual reports"
            ],
            required: [
              "UK energy use in kWh",
              "Associated GHG emissions",
              "Intensity ratio",
              "Energy efficiency actions",
              "Previous year comparison"
            ]
          },
          {
            title: "Calculating Emissions",
            scopes: [
              "Scope 1: Direct emissions (gas, fleet)",
              "Scope 2: Electricity emissions",
              "Scope 3: Supply chain (optional but important)"
            ],
            factors: "Use DEFRA conversion factors updated annually"
          },
          {
            title: "Net Zero Strategies",
            steps: [
              "Baseline measurement",
              "Set science-based targets",
              "Reduce energy consumption",
              "Switch to renewable energy",
              "Offset remaining emissions",
              "Regular reporting and verification"
            ]
          }
        ]
      }
    },
    {
      id: "energy-saving-tips",
      title: "50 Energy Saving Tips for UK Businesses",
      category: "Energy Efficiency",
      readTime: "20 min",
      metaDescription: "Comprehensive list of energy saving measures for businesses. Quick wins and long-term strategies to reduce consumption and costs.",
      content: {
        introduction: "Reducing energy consumption is the fastest way to cut costs. These proven strategies can reduce your energy use by 10-40%.",
        
        categories: [
          {
            title: "Quick Wins (No Cost)",
            tips: [
              "Adjust heating down 1°C (saves 8%)",
              "Switch off equipment when not in use",
              "Use natural light where possible",
              "Close doors to retain heat/cooling",
              "Clean light fixtures (improves output 30%)",
              "Defrost freezers regularly",
              "Check for dripping taps",
              "Educate staff on energy saving"
            ]
          },
          {
            title: "Low Cost Measures",
            tips: [
              "Install LED lighting (70% saving)",
              "Fit timer switches",
              "Add thermostatic radiator valves",
              "Install motion sensors for lights",
              "Draught-proof doors and windows",
              "Insulate hot water pipes",
              "Service boilers annually",
              "Install smart meters"
            ]
          },
          {
            title: "Investment Measures",
            tips: [
              "Upgrade to efficient boilers",
              "Install solar panels",
              "Add building insulation",
              "Replace old equipment",
              "Install voltage optimization",
              "Add building management system",
              "Heat pump installation",
              "Power factor correction"
            ]
          }
        ]
      }
    },
    {
      id: "avoiding-rollover",
      title: "How to Avoid Expensive Energy Contract Rollovers",
      category: "Contract Management",
      readTime: "8 min",
      metaDescription: "Avoid costly automatic energy contract renewals. Understanding rollover terms, notice periods, and how to terminate properly.",
      content: {
        introduction: "Energy contract rollovers can cost businesses thousands in unnecessary charges. This guide explains how to avoid them and manage contract renewals effectively.",
        
        sections: [
          {
            title: "Understanding Rollover Contracts",
            content: "If you don't give notice to terminate, most contracts automatically renew on 'rollover' or 'out of contract' rates.",
            problems: [
              "Rates typically 50-80% higher",
              "Often monthly rolling terms",
              "Difficult to escape quickly",
              "No protection from price rises"
            ]
          },
          {
            title: "Notice Period Requirements",
            content: "Most contracts require 30-120 days notice before end date:",
            typical: [
              "Small business: 30-60 days",
              "Medium business: 60-90 days",
              "Large/complex: 90-120 days",
              "Check your specific terms"
            ],
            tip: "Set reminders 6 months before contract end to start renewal process"
          },
          {
            title: "Termination Process",
            steps: [
              "Check contract end date and notice period",
              "Send written termination notice (keep proof)",
              "Start comparing new deals immediately",
              "Ensure new contract starts when old ends",
              "Confirm termination is processed",
              "Get final bill from old supplier"
            ]
          }
        ]
      }
    }
  ],
  
  faqs: [
    {
      category: "Switching Process",
      questions: [
        {
          q: "How long does switching energy supplier take?",
          a: "Typically 4-6 weeks from signing new contract to supply starting. We handle the entire process."
        },
        {
          q: "Will my supply be interrupted when switching?",
          a: "No. The switch is administrative only - your physical supply continues uninterrupted."
        },
        {
          q: "Can I switch if I'm in contract?",
          a: "You can secure a new contract to start when current one ends. We help time this perfectly."
        }
      ]
    },
    {
      category: "Costs and Savings",
      questions: [
        {
          q: "How much does your service cost?",
          a: "Nothing. We're paid commission by suppliers which we transparently disclose."
        },
        {
          q: "How much can businesses typically save?",
          a: "20-45% is common, depending on current rates and market timing. Average saving is 28%."
        },
        {
          q: "Are there any hidden charges?",
          a: "No. We disclose all costs upfront. Only charge is £150 if you cancel after contracts are signed."
        }
      ]
    },
    {
      category: "Contract Terms",
      questions: [
        {
          q: "What contract lengths are available?",
          a: "Typically 1, 2, 3, or 5 years. We advise based on market conditions and your needs."
        },
        {
          q: "Can I leave a fixed contract early?",
          a: "Usually involves early termination fees. We help avoid these through proper planning."
        },
        {
          q: "What happens at contract end?",
          a: "We contact you 6 months before to arrange renewal or switching, avoiding expensive rollovers."
        }
      ]
    },
    {
      category: "Green Energy",
      questions: [
        {
          q: "Can I get 100% renewable electricity?",
          a: "Yes, we offer REGO-backed renewable electricity from multiple suppliers."
        },
        {
          q: "Does green energy cost more?",
          a: "Premium is now minimal - often just 5-10% more, sometimes price-matched."
        },
        {
          q: "What about carbon neutral gas?",
          a: "Available through carbon offset schemes. We can arrange this with several suppliers."
        }
      ]
    }
  ],
  
  glossary: [
    { term: "AQ", definition: "Annual Quantity - yearly gas consumption estimate" },
    { term: "CCL", definition: "Climate Change Levy - environmental tax on business energy" },
    { term: "CRC", definition: "Carbon Reduction Commitment - emissions trading scheme (now closed)" },
    { term: "DUoS", definition: "Distribution Use of System - charges for local electricity network" },
    { term: "EAC", definition: "Estimated Annual Consumption - predicted yearly usage" },
    { term: "ESOS", definition: "Energy Savings Opportunity Scheme - mandatory energy audits" },
    { term: "Feed-in Tariff", definition: "Payment for generating renewable electricity (closed to new applicants)" },
    { term: "HH Metering", definition: "Half-Hourly Metering - 30-minute consumption readings" },
    { term: "kVA", definition: "Kilovolt-ampere - measure of electrical power capacity" },
    { term: "Load Factor", definition: "Ratio of average load to peak load" },
    { term: "MPAN", definition: "Meter Point Administration Number - electricity supply identifier" },
    { term: "MPRN", definition: "Meter Point Reference Number - gas supply identifier" },
    { term: "NHH", definition: "Non-Half-Hourly - standard business metering" },
    { term: "Pass-Through", definition: "Contract where non-commodity costs are passed directly" },
    { term: "PPA", definition: "Power Purchase Agreement - long-term renewable energy contract" },
    { term: "REGO", definition: "Renewable Energy Guarantees of Origin - green electricity certification" },
    { term: "SECR", definition: "Streamlined Energy and Carbon Reporting - mandatory emissions reporting" },
    { term: "SPID", definition: "Supply Point ID - water supply identifier" },
    { term: "TNUoS", definition: "Transmission Network Use of System - national grid charges" },
    { term: "TPI", definition: "Third Party Intermediary - energy broker or consultant" }
  ]
};