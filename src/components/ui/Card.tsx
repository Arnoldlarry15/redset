import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'red' | 'transparent';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    red: 'bg-white/95 backdrop-blur-sm border border-red-500/30',
    transparent: 'bg-white/90 backdrop-blur-sm border-2 border-dashed border-red-500/50'
  };

  return (
    <div className={`rounded-lg shadow-xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};