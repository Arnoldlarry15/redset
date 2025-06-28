import React from 'react';

interface RiskScoreProps {
  label: string;
  score: number;
  icon: React.ReactNode;
  color: 'red' | 'yellow' | 'green';
}

export const RiskScore: React.FC<RiskScoreProps> = ({ label, score, icon, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-100',
          border: 'border-red-200',
          text: 'text-red-800',
          progress: 'bg-red-500',
          icon: 'text-red-600'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-100',
          border: 'border-yellow-200',
          text: 'text-yellow-800',
          progress: 'bg-yellow-500',
          icon: 'text-yellow-600'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          border: 'border-green-200',
          text: 'text-green-800',
          progress: 'bg-green-500',
          icon: 'text-green-600'
        };
    }
  };

  const colors = getColorClasses();
  const getRiskLevel = () => {
    if (score >= 70) return 'HIGH';
    if (score >= 40) return 'MEDIUM';
    return 'LOW';
  };

  return (
    <div className={`p-4 rounded-lg border ${colors.bg} ${colors.border}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={colors.icon}>{icon}</span>
          <span className="font-medium text-gray-900">{label}</span>
        </div>
        <span className={`text-sm font-bold ${colors.text}`}>
          {getRiskLevel()}
        </span>
      </div>
      <div className="mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
          <span className="text-sm text-gray-600">/ 100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${colors.progress}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
};