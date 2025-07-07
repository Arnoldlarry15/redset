import React from 'react';

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'url';
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  helpText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  disabled = false,
  className = '',
  icon,
  helpText
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {icon && <span className="inline-block mr-1">{icon}</span>}
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {helpText && (
        <p className="text-gray-500 text-xs mt-1">{helpText}</p>
      )}
    </div>
  );
};