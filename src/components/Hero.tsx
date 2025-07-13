import React from 'react';
import { Target, Play } from 'lucide-react';
import logoImage from '../assets/file_000000005d0462309eb434f4f4fd873d copy.png';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src={logoImage}
                alt="Red Set Logo" 
                className="h-16 w-16"
              />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Red Set</h1>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Attack Your AI. <br />
              <span className="text-red-400">Before Someone Else Does.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Red Set deploys adversarial AI agents against your models to expose vulnerabilities — 
              jailbreaks, bias, injections — delivering clear, actionable reports. <span className="text-red-400 font-semibold">Fast.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="text-2xl">🔴</span>
                <span>Launch a Red Team Simulation</span>
              </button>
              <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>See Live Demo</span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 shadow-2xl">
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">Red Set Dashboard</span>
                </div>
                
                {/* Endpoint Targets */}
                <div className="mb-4">
                  <h4 className="text-red-400 text-sm font-semibold mb-2">🎯 Endpoint Targets</h4>
                  <div className="space-y-1">
                    <div className="bg-gray-800 rounded px-3 py-1 text-xs text-gray-300">api.openai.com/v1/chat/completions</div>
                    <div className="bg-gray-800 rounded px-3 py-1 text-xs text-gray-300">api.anthropic.com/v1/messages</div>
                  </div>
                </div>
                
                {/* Agent Profiles */}
                <div className="mb-4">
                  <h4 className="text-red-400 text-sm font-semibold mb-2">🤖 Agent Profiles</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-red-900/50 rounded px-2 py-1 text-xs text-red-300">Jailbreaker</div>
                    <div className="bg-yellow-900/50 rounded px-2 py-1 text-xs text-yellow-300">Bias Probe</div>
                    <div className="bg-purple-900/50 rounded px-2 py-1 text-xs text-purple-300">Toxicity</div>
                    <div className="bg-blue-900/50 rounded px-2 py-1 text-xs text-blue-300">Privacy</div>
                  </div>
                </div>
                
                {/* Risk Scores */}
                <div>
                  <h4 className="text-red-400 text-sm font-semibold mb-2">📊 Risk Scores</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Jailbreak Risk</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-xs text-red-400 font-bold">75</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Bias Risk</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-xs text-yellow-400 font-bold">45</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Overall Risk</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                        <span className="text-xs text-red-400 font-bold">68</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};