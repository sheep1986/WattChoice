import React from 'react';
import { Shield, TrendingUp, Leaf, Check, Star } from 'lucide-react';

export default function ContractTypeCard({ type = 'fixed' }) {
  const contractTypes = {
    fixed: {
      title: 'Fixed Rate Contract',
      subtitle: 'Lock in your rates for budget certainty',
      icon: Shield,
      benefits: ['Price protection', 'Easy budgeting', 'No surprises'],
      bestFor: 'Best for stability',
      bgColor: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      image: 'https://i.ibb.co/8xJVNJP/office-professional.jpg',
      imageAlt: 'Business professional in modern office'
    },
    variable: {
      title: 'Variable Rate Contract',
      subtitle: 'Flexible pricing that moves with market',
      icon: TrendingUp,
      benefits: ['Market flexibility', 'No exit fees', 'Monthly changes'],
      bestFor: 'Best for flexibility',
      bgColor: 'from-blue-50 to-sky-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      image: 'https://i.ibb.co/GVLHRyb/business-meeting.jpg',
      imageAlt: 'Business team analyzing data'
    },
    green: {
      title: 'Green Energy Contract',
      subtitle: '100% renewable electricity sources',
      icon: Leaf,
      benefits: ['Carbon neutral', 'REGO certified', 'Eco-friendly'],
      bestFor: 'Best for sustainability',
      bgColor: 'from-emerald-50 to-green-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      image: 'https://i.ibb.co/7RhYHFZ/sustainable-office.jpg',
      imageAlt: 'Sustainable modern office building'
    }
  };

  const contract = contractTypes[type] || contractTypes.fixed;
  const Icon = contract.icon;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${contract.bgColor} p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border ${contract.borderColor}`}>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-2xl bg-white shadow-md`}>
            <Icon className={`h-8 w-8 ${contract.iconColor}`} />
          </div>
          
          {/* Title and Description */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {contract.title}
            </h3>
            <p className="text-lg text-gray-600">
              {contract.subtitle}
            </p>
          </div>
          
          {/* Benefits */}
          <ul className="space-y-3">
            {contract.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Check className={`h-5 w-5 ${contract.iconColor}`} />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {/* Best For Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">{contract.bestFor}</span>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Placeholder for actual image - using gradient for now */}
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative">
              {/* Image overlay with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className={`inline-flex p-6 rounded-full bg-white/90 shadow-lg`}>
                    <Icon className={`h-16 w-16 ${contract.iconColor} opacity-50`} />
                  </div>
                  <p className="text-gray-500 text-sm font-medium px-4">
                    Professional business environment
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${contract.bgColor} opacity-60`}></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contract.bgColor} opacity-60`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export individual card types for easy use
export function FixedRateCard() {
  return <ContractTypeCard type="fixed" />;
}

export function VariableRateCard() {
  return <ContractTypeCard type="variable" />;
}

export function GreenEnergyCard() {
  return <ContractTypeCard type="green" />;
}