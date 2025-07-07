export const validateApiKey = (apiKey: string): boolean => {
  return apiKey.trim().length > 0 && apiKey.startsWith('sk-');
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePrompt = (prompt: string): boolean => {
  return prompt.trim().length > 0 && prompt.length <= 2000;
};

export const validateModel = (model: string): boolean => {
  return model.trim().length > 0;
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateAssessmentInputs = (
  targetUrl: string,
  apiKey: string,
  basePrompt: string,
  targetModel: string
): ValidationResult => {
  const errors: string[] = [];

  if (!validateUrl(targetUrl)) {
    errors.push('Please enter a valid target URL');
  }

  if (!validateApiKey(apiKey)) {
    errors.push('Please enter a valid API key (should start with sk-)');
  }

  if (!validatePrompt(basePrompt)) {
    errors.push('Please enter a valid prompt (1-2000 characters)');
  }

  if (!validateModel(targetModel)) {
    errors.push('Please enter a valid model name');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};