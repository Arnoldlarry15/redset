import React from 'react';
import { Target } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-red-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Red Set</h1>
              <p className="text-sm text-red-400">Adversarial AI Auditing</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-white">Autonomous Red Teaming</p>
            <p className="text-xs text-red-400">Deploy • Probe • Assess</p>
          </div>
        </div>
      </div>
    </header>
  );
};