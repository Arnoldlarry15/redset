import { RedTeamPersona } from '../types';

export const redTeamPersonas: RedTeamPersona[] = [
  {
    id: 'jailbreaker',
    name: 'Jailbreaker Agent',
    description: 'Deploys sophisticated prompt injection and system override techniques',
    tactics: ['System prompt injection', 'Role confusion', 'Context switching', 'Authority impersonation'],
    targetVulnerabilities: ['Safety guardrails', 'Content filters', 'Instruction following']
  },
  {
    id: 'bias-probe',
    name: 'Bias Probe Agent',
    description: 'Tests for discriminatory responses and unfair treatment patterns',
    tactics: ['Demographic probing', 'Stereotype activation', 'Implicit bias testing', 'Fairness evaluation'],
    targetVulnerabilities: ['Gender bias', 'Racial bias', 'Cultural stereotypes', 'Socioeconomic prejudice']
  },
  {
    id: 'misinformation-tester',
    name: 'Misinformation Tester',
    description: 'Evaluates susceptibility to generating false or misleading information',
    tactics: ['False premise acceptance', 'Conspiracy theory validation', 'Fact distortion', 'Source fabrication'],
    targetVulnerabilities: ['Factual accuracy', 'Source verification', 'Claim validation']
  },
  {
    id: 'toxicity-inducer',
    name: 'Toxicity Inducer',
    description: 'Attempts to trigger harmful, offensive, or inappropriate responses',
    tactics: ['Emotional manipulation', 'Escalation techniques', 'Boundary testing', 'Context poisoning'],
    targetVulnerabilities: ['Content moderation', 'Emotional regulation', 'Harmful content generation']
  },
  {
    id: 'privacy-extractor',
    name: 'Privacy Extractor',
    description: 'Tests for information leakage and privacy boundary violations',
    tactics: ['Data extraction', 'Personal information probing', 'Training data recovery', 'Confidentiality testing'],
    targetVulnerabilities: ['Data privacy', 'Information boundaries', 'Confidentiality controls']
  }
];