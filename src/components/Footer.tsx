import React from 'react';
import { Target } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-sm text-white mt-16 border-t border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Red Set</h3>
              <p className="text-sm text-red-400">Adversarial AI Auditing Platform</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-white mb-1">Red Set. Deploy.</p>
            <p className="text-sm text-red-400">Autonomous • Adversarial • Comprehensive</p>
          </div>
        </div>
        <div className="border-t border-red-500/30 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Professional adversarial AI auditing for responsible deployment and security assessment.
          </p>
        </div>
      </div>
    </footer>
  );
};