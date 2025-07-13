import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Users, Activity, FileText, TrendingUp } from 'lucide-react';

export const ProductCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    {
      title: 'Dashboard Overview',
      description: 'Complete security posture at a glance',
      icon: <Monitor className="h-6 w-6" />,
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-900/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400">73</div>
              <div className="text-sm text-red-300">Overall Risk</div>
            </div>
            <div className="bg-yellow-900/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">12</div>
              <div className="text-sm text-yellow-300">Active Tests</div>
            </div>
            <div className="bg-green-900/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-sm text-green-300">Endpoints</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Jailbreak Resistance</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Bias Detection</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Agent Selection Screen',
      description: 'Choose your adversarial testing strategy',
      icon: <Users className="h-6 w-6" />,
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Select Red Team Agents</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-800 border-2 border-red-500 rounded-lg p-3 cursor-pointer">
              <div className="font-semibold text-red-300">🔓 Jailbreaker</div>
              <div className="text-xs text-red-400 mt-1">System bypass specialist</div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 cursor-pointer hover:border-yellow-500">
              <div className="font-semibold text-yellow-300">⚖️ Bias Probe</div>
              <div className="text-xs text-yellow-400 mt-1">Fairness testing agent</div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 cursor-pointer hover:border-purple-500">
              <div className="font-semibold text-purple-300">☠️ Toxicity</div>
              <div className="text-xs text-purple-400 mt-1">Harmful content detector</div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 cursor-pointer hover:border-blue-500">
              <div className="font-semibold text-blue-300">🔒 Privacy</div>
              <div className="text-xs text-blue-400 mt-1">Data leakage tester</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Live Attack Simulation',
      description: 'Real-time vulnerability testing in action',
      icon: <Activity className="h-6 w-6" />,
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Live Simulation</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Running</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-800 rounded p-3">
              <div className="text-sm text-gray-400">Agent: Jailbreaker</div>
              <div className="text-sm text-white mt-1">Testing prompt injection vectors...</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                <div className="bg-red-500 h-1 rounded-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="bg-red-900/30 border border-red-500 rounded p-3">
              <div className="text-sm text-red-400 font-semibold">⚠️ Vulnerability Found</div>
              <div className="text-xs text-red-300 mt-1">System prompt exposure detected</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Report Summary',
      description: 'Actionable insights and remediation guidance',
      icon: <FileText className="h-6 w-6" />,
      mockup: (
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Security Report</h3>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">Download PDF</button>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <div className="font-semibold text-red-700">Critical: Jailbreak Vulnerability</div>
              <div className="text-sm text-gray-600">System prompt can be extracted via injection</div>
              <div className="text-xs text-blue-600 mt-1">→ Implement input sanitization</div>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="font-semibold text-yellow-700">Medium: Bias in Responses</div>
              <div className="text-sm text-gray-600">Gender bias detected in 23% of responses</div>
              <div className="text-xs text-blue-600 mt-1">→ Review training data diversity</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Risk Trend Analysis',
      description: 'Track security improvements over time',
      icon: <TrendingUp className="h-6 w-6" />,
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">30-Day Risk Trends</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Risk Score</span>
                <span className="text-green-400">↓ 15%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-800 rounded p-3">
                <div className="text-2xl font-bold text-green-400">127</div>
                <div className="text-xs text-gray-400">Tests Passed</div>
              </div>
              <div className="bg-gray-800 rounded p-3">
                <div className="text-2xl font-bold text-red-400">23</div>
                <div className="text-xs text-gray-400">Vulnerabilities</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Red Set in Action
          </h2>
          <p className="text-xl text-gray-600">
            Interactive product screenshots showcasing real security testing
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-red-500">{screenshots[currentSlide].icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{screenshots[currentSlide].title}</h3>
                  <p className="text-gray-600">{screenshots[currentSlide].description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="min-h-[300px] flex items-center justify-center">
              {screenshots[currentSlide].mockup}
            </div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};