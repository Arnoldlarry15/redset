export interface RedTeamPersona {
  id: string;
  name: string;
  description: string;
  tactics: string[];
  targetVulnerabilities: string[];
}

export interface AssessmentResult {
  targetPrompt: string;
  aiResponse: string;
  summary: string;
  responseAnalysis: string;
  vulnerabilities: string[];
  jailbreakRisk: number;
  biasRisk: number;
  toxicityRisk: number;
  responseIntegrity: number;
  overallRisk: number;
  modelUsed?: string;
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
  overallRisk: number;
  summary: string;
  vulnerabilities: string[];
  responseAnalysis: string;
}