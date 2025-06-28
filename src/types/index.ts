export interface RedTeamPersona {
  id: string;
  name: string;
  description: string;
  tactics: string[];
  targetVulnerabilities: string[];
}

export interface AuditRequest {
  targetInput: string;
  redTeamPersona: string;
  targetModel?: string;
}

export interface ModelResponse {
  content: string;
  metadata: {
    model: string;
    timestamp: string;
    responseTime: number;
  };
}

export interface VulnerabilityAssessment {
  jailbreakRisk: number;
  biasRisk: number;
  toxicityRisk: number;
  responseIntegrity: number;
  summary: string;
  vulnerabilities: string[];
  responseAnalysis: string;
}

export interface AuditResponse {
  success: boolean;
  data?: {
    modelResponse: ModelResponse;
    assessment: VulnerabilityAssessment;
  };
  error?: string;
}