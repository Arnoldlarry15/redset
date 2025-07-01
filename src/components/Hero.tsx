import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';
import logoImage from '../assets/file_000000005d0462309eb434f4f4fd873d copy.png';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <img 
              src={logoImage}
              alt="Red Set Logo" 
              className="h-20 w-20"
            />
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">Red Set</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-400">
            AI Security Assessment Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Deploy autonomous red teaming agents to probe AI systems for vulnerabilities. 
            Conduct live adversarial audits that test jailbreak resistance, bias patterns, 
            toxicity controls, and response integrity across target models.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-red-500/30">
              <Zap className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Live Probing</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-red-500/30">
              <Target className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Vulnerability Detection</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-red-500/30">
              <Shield className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Response Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};