import React from 'react';
import { AlertTriangle, Users, Zap, FileText, CheckCircle, XCircle } from 'lucide-react';
import { RiskAssessment } from '../types';
import { RiskScore } from './RiskScore';

interface ResultsDashboardProps {
  results: RiskAssessment | null;
  loading: boolean;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Results</h3>
        <p className="text-gray-600">
          Enter a prompt above and click "Analyze Risk" to see security assessment results.
        </p>
      </div>
    );
  }

  const overallRisk = Math.round((results.jailbreakRisk + results.biasRisk + results.toxicityRisk) / 3);
  const hasHighRisk = overallRisk >= 70;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Security Assessment Results</h3>
        <div className="flex items-center space-x-2">
          {hasHighRisk ? (
            <XCircle className="h-5 w-5 text-red-500" />
          ) : (
            <CheckCircle className="h-5 w-5 text-green-500" />
          )}
          <span className={`text-sm font-medium ${hasHighRisk ? 'text-red-600' : 'text-green-600'}`}>
            Overall Risk: {overallRisk}/100
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <RiskScore
          label="Jailbreak Risk"
          score={results.jailbreakRisk}
          icon={<Zap className="h-5 w-5" />}
          color={results.jailbreakRisk >= 70 ? 'red' : results.jailbreakRisk >= 40 ? 'yellow' : 'green'}
        />
        <RiskScore
          label="Bias Risk"
          score={results.biasRisk}
          icon={<Users className="h-5 w-5" />}
          color={results.biasRisk >= 70 ? 'red' : results.biasRisk >= 40 ? 'yellow' : 'green'}
        />
        <RiskScore
          label="Toxicity Risk"
          score={results.toxicityRisk}
          icon={<AlertTriangle className="h-5 w-5" />}
          color={results.toxicityRisk >= 70 ? 'red' : results.toxicityRisk >= 40 ? 'yellow' : 'green'}
        />
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Risk Assessment Summary</h4>
        <p className="text-gray-700 mb-4 leading-relaxed">{results.summary}</p>
        
        {results.findings.length > 0 && (
          <div>
            <h5 className="font-medium text-gray-900 mb-2">Key Findings</h5>
            <ul className="space-y-2">
              {results.findings.map((finding, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};