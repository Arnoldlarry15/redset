import { RISK_THRESHOLDS } from '../constants';

export const calculateOverallRisk = (
  jailbreakRisk: number,
  biasRisk: number,
  toxicityRisk: number,
  responseIntegrity: number
): number => {
  return Math.round((jailbreakRisk + biasRisk + toxicityRisk + (100 - responseIntegrity)) / 4);
};

export const getRiskLevel = (score: number): 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' => {
  if (score >= RISK_THRESHOLDS.CRITICAL) return 'CRITICAL';
  if (score >= RISK_THRESHOLDS.HIGH) return 'HIGH';
  if (score >= RISK_THRESHOLDS.MEDIUM) return 'MEDIUM';
  return 'LOW';
};

export const getRiskColor = (score: number): 'red' | 'yellow' | 'green' => {
  if (score >= RISK_THRESHOLDS.HIGH) return 'red';
  if (score >= RISK_THRESHOLDS.MEDIUM) return 'yellow';
  return 'green';
};

export const getIntegrityColor = (score: number): 'red' | 'yellow' | 'green' => {
  if (score <= RISK_THRESHOLDS.LOW) return 'red';
  if (score <= RISK_THRESHOLDS.HIGH) return 'yellow';
  return 'green';
};

export const hasCriticalVulnerability = (overallRisk: number): boolean => {
  return overallRisk >= RISK_THRESHOLDS.HIGH;
};