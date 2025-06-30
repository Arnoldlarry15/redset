// Database-related type definitions
// This file will contain types for database tables and operations

export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface AuditSession {
  id: string;
  user_id: string;
  target_url: string;
  target_model: string;
  persona: string;
  base_prompt: string;
  results: any; // Will be typed more specifically after schema definition
  created_at: string;
}

export interface VulnerabilityReport {
  id: string;
  session_id: string;
  jailbreak_risk: number;
  bias_risk: number;
  toxicity_risk: number;
  response_integrity: number;
  overall_risk: number;
  summary: string;
  vulnerabilities: string[];
  created_at: string;
}