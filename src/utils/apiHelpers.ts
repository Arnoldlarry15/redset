import { ENDPOINTS, APP_CONFIG } from '../constants';
import type { AssessmentResult } from '../types';

export interface RedTeamRequest {
  prompt: string;
  persona: string;
  targetUrl: string;
  headers: Record<string, string>;
  targetModel: string;
}

export const createRedTeamRequest = (
  basePrompt: string,
  selectedPersona: string,
  targetUrl: string,
  apiKey: string,
  targetModel: string
): RedTeamRequest => ({
  prompt: basePrompt,
  persona: selectedPersona,
  targetUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  targetModel
});

export const executeRedTeamAssessment = async (
  request: RedTeamRequest
): Promise<AssessmentResult> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), APP_CONFIG.API_TIMEOUT);

  try {
    const response = await fetch(ENDPOINTS.RED_AGENT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    throw error;
  }
};