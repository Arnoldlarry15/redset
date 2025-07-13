import React from 'react';
import { Bot, Clock, BarChart3, Shield, Zap } from 'lucide-react';

export const CoreBenefits: React.FC = () => {
  const benefits = [
    {
      feature: 'Agent-Based Testing',
      whatItDoes: 'Simulates real adversaries, continuously updated',
      whyItMatters: 'Stays ahead of evolving threats',
      icon: <Bot className="h-8 w-8" />,
      color: 'red'
    },
    {
      feature: 'Instant Reporting',
      whatItDoes: 'Clear, visual, actionable insights',
      whyItMatters: 'Saves security teams time',
      icon: <Clock className="h-8 w-8" />,
      color: 'blue'
    },
    {
      feature: 'Benchmarking',
      whatItDoes: 'Compare your AI security posture',
      whyItMatters: 'KPI-ready for internal reporting',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'green'
    },
    {
      feature: 'Compliance Outputs',
      whatItDoes: 'Audit logs, risk reports',
      whyItMatters: 'Legal + regulatory value',
      icon: <Shield className="h-8 w-8" />,
      color: 'purple'
    },
    {
      feature: 'Integration Ready',
      whatItDoes: 'API-driven simplicity',
      whyItMatters: 'Deploy fast, no headaches',
      icon: <Zap className="h-8 w-8" />,
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-100 text-red-600 border-red-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selling the tool itself — not just promises
          </p>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gray-50 px-6 py-4">
              <div className="grid grid-cols-4 gap-6">
                <div className="font-bold text-gray-900">Feature</div>
                <div className="font-bold text-gray-900">What It Does</div>
                <div className="font-bold text-gray-900">Why It Matters</div>
                <div className="font-bold text-gray-900">Impact</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {benefits.map((benefit, index) => (
                <div key={index} className="px-6 py-6 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-4 gap-6 items-center">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg border ${getColorClasses(benefit.color)}`}>
                        {benefit.icon}
                      </div>
                      <span className="font-semibold text-gray-900">{benefit.feature}</span>
                    </div>
                    <div className="text-gray-600">{benefit.whatItDoes}</div>
                    <div className="text-gray-700 font-medium">{benefit.whyItMatters}</div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            benefit.color === 'red' ? 'bg-red-500' :
                            benefit.color === 'blue' ? 'bg-blue-500' :
                            benefit.color === 'green' ? 'bg-green-500' :
                            benefit.color === 'purple' ? 'bg-purple-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${85 + index * 3}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Card View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg border ${getColorClasses(benefit.color)}`}>
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{benefit.feature}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">What It Does</div>
                  <div className="text-gray-700">{benefit.whatItDoes}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Why It Matters</div>
                  <div className="text-gray-900 font-medium">{benefit.whyItMatters}</div>
                </div>
                <div className="pt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        benefit.color === 'red' ? 'bg-red-500' :
                        benefit.color === 'blue' ? 'bg-blue-500' :
                        benefit.color === 'green' ? 'bg-green-500' :
                        benefit.color === 'purple' ? 'bg-purple-500' :
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${85 + index * 3}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};