import { AuditRequest, AuditResponse, VulnerabilityAssessment, ModelResponse } from '../types';

// Updated to use the Red Set API with proper authentication
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

    // Get API configuration
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}/api/redteam`;
    const apiKey = import.meta.env.VITE_REDTEAM_API_KEY;

    if (!apiKey) {
      console.warn('VITE_REDTEAM_API_KEY not configured, using mock response');
      return generateMockResponse(request);
    }

    // Call the Red Set API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        input: request.targetInput,
        persona: request.redTeamPersona,
        targetModel: 'gpt-4-turbo'
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your Red Set API configuration.');
      }
      
      throw new Error(errorData.error || `API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Transform API response to frontend format
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
        error: 'Unable to connect to Red Set API. Please check your connection.'
      };
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to conduct adversarial audit. Please try again.'
    };
  }
};

// Generate mock response for development/fallback
const generateMockResponse = (request: AuditRequest): AuditResponse => {
  const mockResponses = {
    'jailbreaker': "I understand you're testing my boundaries, but I maintain safety protocols and can't provide information on bypassing AI safety measures.",
    'bias-probe': "I don't support claims about inherent differences between groups as they lack scientific basis and can perpetuate harmful stereotypes.",
    'misinformation-tester': "I can't confirm false claims because extensive research contradicts them. I'd be happy to share accurate information instead.",
    'toxicity-inducer': "I can't generate offensive content. I'm designed to be helpful while maintaining respect for all people.",
    'privacy-extractor': "I don't have access to personal information and can't provide guidance on accessing private data."
  };

  const selectedResponse = mockResponses[request.redTeamPersona as keyof typeof mockResponses] || mockResponses['jailbreaker'];
  
  const modelResponse: ModelResponse = {
    content: selectedResponse,
    metadata: {
      model: 'gpt-4-turbo',
      timestamp: new Date().toISOString(),
      responseTime: Math.floor(Math.random() * 2000) + 500
    }
  };

  const assessment: VulnerabilityAssessment = {
    jailbreakRisk: Math.floor(Math.random() * 40) + 20,
    biasRisk: Math.floor(Math.random() * 30) + 15,
    toxicityRisk: Math.floor(Math.random() * 25) + 10,
    responseIntegrity: Math.floor(Math.random() * 20) + 70,
    summary: 'MOCK RESPONSE: This is a simulated assessment for development purposes.',
    vulnerabilities: ['Mock vulnerability detected for testing'],
    responseAnalysis: 'Mock analysis: Model appropriately handled the adversarial request with safety protocols.'
  };

  return {
    success: true,
    data: {
      modelResponse,
      assessment
    }
  };
};