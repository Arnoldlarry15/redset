import React from 'react';
import { Target, AlertCircle } from 'lucide-react';

interface DeployButtonProps {
  onDeploy: () => void;
  loading: boolean;
  error?: string;
}

export const DeployButton: React.FC<DeployButtonProps> = ({
  onDeploy,
  loading,
  error,
}) => {
  return (
    <div className="mb-6">
      <div className="text-center">
        <button
          onClick={onDeploy}
          disabled={loading}
          className="px-8 py-4 bg-red-500 text-white rounded-lg font-bold text-lg hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Target className="h-6 w-6" />
          <span>{loading ? 'Deploying Agent...' : 'Deploy'}</span>
        </button>
        <p className="text-sm text-gray-600 mt-3">
          Autonomous red team deployment with selected agent persona
        </p>
      </div>
      {error && (
        <div className="mt-4 flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-500/30">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
};