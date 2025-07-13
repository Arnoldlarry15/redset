import React from 'react';

interface CallToActionSectionProps {
  headline: string;
  subtext?: string;
  primaryButtonText: string;
  primaryButtonIcon?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: 'default' | 'dark' | 'gradient';
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  headline,
  subtext,
  primaryButtonText,
  primaryButtonIcon = '🔴',
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  variant = 'default'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gradient':
        return 'bg-gradient-to-br from-red-900 via-black to-gray-900 text-white';
      default:
        return 'bg-red-50 text-gray-900';
    }
  };

  return (
    <section className={`py-20 ${getVariantClasses()}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {headline}
        </h2>
        
        {subtext && (
          <p className={`text-xl mb-10 leading-relaxed ${
            variant === 'default' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            {subtext}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onPrimaryClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <span className="text-2xl">{primaryButtonIcon}</span>
            <span>{primaryButtonText}</span>
          </button>
          
          {secondaryButtonText && (
            <button
              onClick={onSecondaryClick}
              className={`font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                variant === 'default' 
                  ? 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                  : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              <span>{secondaryButtonText}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};