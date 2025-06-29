import React from 'react';
import logoImage from '../assets/file_000000005d0462309eb434f4f4fd873d copy.png';

export const Header: React.FC = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-red-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src={logoImage}
              alt="Red Set Logo" 
              className="h-10 w-10"
            />
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