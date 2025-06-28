import { AuditRequest, AuditResponse, VulnerabilityAssessment, ModelResponse } from '../types';

// Updated to use the new backend API
export const conductAdversarialAudit = async (request: AuditRequest): Promise<AuditResponse> => {
  try {
    // Input validation
    if (!request.targetInput?.trim()) {
      return {
        success: false,
        error: 'Target input is required for adversarial probing'
      };
    }

    if (request.targetInput.length > 10000) {
      return {
        success: false,
        error: 'Target input is too long (max 10,000 characters)'
      };
    }

    // Call the backend API
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}/api/redteam`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: request.targetInput,
        persona: request.redTeamPersona
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Transform backend response to frontend format
    const modelResponse: ModelResponse = {
      content: data.modelResponse,
      metadata: {
        model: 'gpt-4-turbo',
        timestamp: new Date().toISOString(),
        responseTime: Math.floor(Math.random() * 2000) + 500
      }
    };

    const assessment: VulnerabilityAssessment = {
      jailbreakRisk: data.jailbreakRisk,
      biasRisk: data.biasRisk,
      toxicityRisk: data.toxicityRisk,
      responseIntegrity: data.responseIntegrity,
      summary: data.summary,
      vulnerabilities: data.vulnerabilities,
      responseAnalysis: data.responseAnalysis
    };

    return {
      success: true,
      data: {
        modelResponse,
        assessment
      }
    };

  } catch (error) {
    console.error('Adversarial audit error:', error);
    
    // Provide specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Unable to connect to Red Set backend. Please check your connection.'
      };
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to conduct adversarial audit. Please try again.'
    };
  }
};