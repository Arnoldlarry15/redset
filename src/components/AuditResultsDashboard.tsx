import React from 'react';
import { AlertTriangle, Users, Zap, Shield, FileText, CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import { VulnerabilityAssessment, ModelResponse } from '../types';
import { VulnerabilityScore } from './VulnerabilityScore';
import { Card } from './ui/Card';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { calculateOverallRisk, hasCriticalVulnerability } from '../utils/riskCalculations';
import { formatResponseTime, formatTimestamp } from '../utils/formatters';

interface AuditResultsDashboardProps {
  modelResponse: ModelResponse | null;
  assessment: VulnerabilityAssessment | null;
  loading: boolean;
}

export const AuditResultsDashboard: React.FC<AuditResultsDashboardProps> = ({ 
  modelResponse, 
  assessment, 
  loading 
}) => {
  if (loading) {
    return (
      <Card variant="red">
        <div className="animate-pulse">
          <div className="h-6 bg-red-100 rounded mb-4 w-1/2"></div>
          <div className="h-32 bg-red-50 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-red-50 rounded"></div>
            ))}
          </div>
          <div className="h-4 bg-red-100 rounded mb-2"></div>
          <div className="h-4 bg-red-100 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-red-100 rounded w-1/2"></div>
        </div>
      </Card>
    );
  }

  if (!modelResponse || !assessment) {
    return (
      <Card variant="transparent" className="text-center">
        <FileText className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Audit Results</h3>
        <p className="text-gray-600">
          Deploy a red team agent above to see live vulnerability assessment results.
        </p>
      </Card>
    );
  }

  const overallVulnerability = calculateOverallRisk(
    assessment.jailbreakRisk,
    assessment.biasRisk,
    assessment.toxicityRisk,
    assessment.responseIntegrity
  );
  const isCritical = hasCriticalVulnerability(overallVulnerability);

  return (
    <div className="space-y-6">
      {/* Model Response */}
      <Card variant="red">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
            <div className="w-1 h-5 bg-red-500 mr-2"></div>
            <MessageSquare className="h-5 w-5" />
            <span>Target Model Response</span>
          </h3>
          <div className="text-sm text-gray-500 bg-red-50 px-3 py-1 rounded-full border border-red-500/30">
            {modelResponse.metadata.model} • {formatResponseTime(modelResponse.metadata.responseTime)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-50 to-gray-50 border border-red-500/30 rounded-md p-4">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
            {modelResponse.content}
          </pre>
        </div>
      </Card>

      {/* Vulnerability Assessment */}
      <Card variant="red">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-3"></div>
            Vulnerability Assessment
          </h3>
          <div className="flex items-center space-x-2">
            {isCritical ? (
              <XCircle className="h-5 w-5 text-red-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            <span className={`text-sm font-medium px-3 py-1 rounded-full border ${isCritical ? 'text-red-600 bg-red-100 border-red-500/30' : 'text-green-600 bg-green-100 border-green-500/30'}`}>
              Overall Vulnerability: {overallVulnerability}/100
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <VulnerabilityScore
            label="Jailbreak Risk"
            score={assessment.jailbreakRisk}
            icon={<Zap className="h-5 w-5" />}
            color={assessment.jailbreakRisk >= 70 ? 'red' : assessment.jailbreakRisk >= 40 ? 'yellow' : 'green'}
          />
          <VulnerabilityScore
            label="Bias Risk"
            score={assessment.biasRisk}
            icon={<Users className="h-5 w-5" />}
            color={assessment.biasRisk >= 70 ? 'red' : assessment.biasRisk >= 40 ? 'yellow' : 'green'}
          />
          <VulnerabilityScore
            label="Toxicity Risk"
            score={assessment.toxicityRisk}
            icon={<AlertTriangle className="h-5 w-5" />}
            color={assessment.toxicityRisk >= 70 ? 'red' : assessment.toxicityRisk >= 40 ? 'yellow' : 'green'}
          />
          <VulnerabilityScore
            label="Response Integrity"
            score={assessment.responseIntegrity}
            icon={<Shield className="h-5 w-5" />}
            color={assessment.responseIntegrity <= 30 ? 'red' : assessment.responseIntegrity <= 60 ? 'yellow' : 'green'}
          />
        </div>

        <div className="border-t border-red-500/20 pt-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            Response Analysis
          </h4>
          <p className="text-gray-700 mb-4 leading-relaxed bg-red-50 p-4 rounded-lg border border-red-500/20">{assessment.responseAnalysis}</p>
          
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            Vulnerability Summary
          </h4>
          <p className="text-gray-700 mb-4 leading-relaxed bg-red-50 p-4 rounded-lg border border-red-500/20">{assessment.summary}</p>
          
          {assessment.vulnerabilities.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Detected Vulnerabilities
              </h5>
              <ul className="space-y-2">
                {assessment.vulnerabilities.map((vulnerability, index) => (
                  <li key={index} className="flex items-start space-x-2 bg-red-50 p-3 rounded-lg border border-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{vulnerability}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};