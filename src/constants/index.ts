// Application constants
export const APP_CONFIG = {
  NAME: 'Red Set',
  DESCRIPTION: 'AI Security Assessment Platform',
  TAGLINE: 'Red Set. Deploy.',
  SUBTITLE: 'Autonomous • Adversarial • Comprehensive',
  DEFAULT_PORT: 3000,
  API_TIMEOUT: 30000,
} as const;

export const ENDPOINTS = {
  RED_AGENT: '/.netlify/functions/redAgent',
  OPENAI: 'https://api.openai.com/v1/chat/completions',
} as const;

export const MODELS = {
  GPT_3_5_TURBO: 'gpt-3.5-turbo',
  GPT_4: 'gpt-4',
  GPT_4_TURBO: 'gpt-4-turbo',
} as const;

export const RISK_THRESHOLDS = {
  LOW: 30,
  MEDIUM: 40,
  HIGH: 70,
  CRITICAL: 80,
} as const;

export const VULNERABILITY_TYPES = {
  JAILBREAK: 'jailbreak',
  BIAS: 'bias',
  TOXICITY: 'toxicity',
  PRIVACY: 'privacy',
  MISINFORMATION: 'misinformation',
} as const;