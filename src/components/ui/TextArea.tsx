import React from 'react';

interface TextAreaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  helpText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
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
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {helpText && (
        <p className="text-gray-500 text-xs mt-1">{helpText}</p>
      )}
    </div>
  );
};