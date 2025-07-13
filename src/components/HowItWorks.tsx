import React from 'react';
import { Link, Bot, Zap, FileText } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Connect Your AI Endpoint',
      description: 'OpenAI, Anthropic, Mistral, Hugging Face — plug & play.',
      icon: <Link className="h-8 w-8" />,
      details: ['API endpoint configuration', 'Secure authentication', 'Multiple provider support']
    },
    {
      number: '2️⃣',
      title: 'Choose Adversarial Agents',
      description: 'Bias detection, jailbreak, toxicity testing, and more.',
      icon: <Bot className="h-8 w-8" />,
      details: ['5 specialized agents', 'Custom attack vectors', 'Targeted vulnerability testing']
    },
    {
      number: '3️⃣',
      title: 'Launch Simulations',
      description: 'Instant feedback. Visualize weaknesses. Score results.',
      icon: <Zap className="h-8 w-8" />,
      details: ['Real-time analysis', 'Live vulnerability scoring', 'Interactive dashboards']
    },
    {
      number: '4️⃣',
      title: 'Review Actionable Reports',
      description: 'Weaknesses identified, severity scored, remediation paths suggested.',
      icon: <FileText className="h-8 w-8" />,
      details: ['Detailed vulnerability reports', 'Risk severity scoring', 'Remediation recommendations']
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Red Set Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive, tangible security testing that delivers immediate results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-red-500 to-red-300 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:shadow-lg z-10">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{step.number}</div>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-500">{step.icon}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-center">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Try It Now - Free
          </button>
        </div>
      </div>
    </section>
  );
};