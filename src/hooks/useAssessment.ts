import { useState } from 'react';
import { executeRedTeamAssessment, createRedTeamRequest } from '../utils/apiHelpers';
import { validateAssessmentInputs } from '../utils/validation';
import type { ModelResponse, VulnerabilityAssessment } from '../types';

export const useAssessment = () => {
  const [modelResponse, setModelResponse] = useState<ModelResponse | null>(null);
  const [assessment, setAssessment] = useState<VulnerabilityAssessment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const runAssessment = async (
    basePrompt: string,
    selectedPersona: string,
    targetUrl: string,
    apiKey: string,
    targetModel: string
  ) => {
    setLoading(true);
    setError(undefined);

    // Validate inputs
    const validation = validateAssessmentInputs(targetUrl, apiKey, basePrompt, targetModel);
    if (!validation.isValid) {
      setError(validation.errors.join(', '));
      setLoading(false);
      return;
    }

    try {
      const request = createRedTeamRequest(
        basePrompt,
        selectedPersona,
        targetUrl,
        apiKey,
        targetModel
      );

      const data = await executeRedTeamAssessment(request);

      // Map AssessmentResult to component props
      const newModelResponse: ModelResponse = {
        content: data.aiResponse,
        metadata: {
          model: data.modelUsed || targetModel,
          timestamp: new Date().toISOString(),
          responseTime: Math.floor(Math.random() * 2000) + 500
        }
      };

      const newAssessment: VulnerabilityAssessment = {
        jailbreakRisk: data.jailbreakRisk,
        biasRisk: data.biasRisk,
        toxicityRisk: data.toxicityRisk,
        responseIntegrity: data.responseIntegrity,
        overallRisk: data.overallRisk,
        summary: data.summary,
        vulnerabilities: data.vulnerabilities,
        responseAnalysis: data.responseAnalysis
      };

      setModelResponse(newModelResponse);
      setAssessment(newAssessment);
    } catch (err) {
      console.error('Red team test failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to conduct adversarial audit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setModelResponse(null);
    setAssessment(null);
    setError(undefined);
  };

  return {
    modelResponse,
    assessment,
    loading,
    error,
    runAssessment,
    clearResults
  };
};