import React from 'react';
import { Check, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$20',
      period: '/mo',
      description: 'Perfect for small teams getting started',
      features: [
        '5 Endpoints',
        '100 Prompts/month',
        'Standard Agents',
        'PDF Reports',
        'Email Support',
        'Basic Analytics'
      ],
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Pro',
      price: '$149',
      period: '/mo',
      description: 'For growing teams with serious security needs',
      features: [
        '20 Endpoints',
        '1000+ Prompts/month',
        'Advanced + Custom Agents',
        'Trend Dashboards',
        'Priority Support',
        'Advanced Analytics',
        'API Access',
        'Custom Integrations'
      ],
      buttonText: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'For organizations requiring maximum security',
      features: [
        'Unlimited Endpoints',
        'Unlimited Prompts',
        'Custom + White-label Agents',
        'Custom Integrations',
        'Compliance SLAs',
        'Dedicated Support',
        'On-premise Deployment',
        'Custom Reporting'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Right Tool, Always Up-to-Date.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pricing reinforces access to a tool, not forced monthly spending.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-red-500 transform scale-105' 
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-red-500 hover:bg-red-600 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-md'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};