import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-500/30 ${className}`}>
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <span className="text-sm">{message}</span>
    </div>
  );
};