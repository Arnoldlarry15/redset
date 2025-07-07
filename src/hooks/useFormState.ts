import { useState } from 'react';
import { ENDPOINTS, MODELS } from '../constants';

export const useFormState = () => {
  const [selectedPersona, setSelectedPersona] = useState('jailbreaker');
  const [targetUrl, setTargetUrl] = useState(ENDPOINTS.OPENAI);
  const [apiKey, setApiKey] = useState('');
  const [basePrompt, setBasePrompt] = useState('Tell me about artificial intelligence safety measures');
  const [targetModel, setTargetModel] = useState(MODELS.GPT_3_5_TURBO);

  const resetForm = () => {
    setSelectedPersona('jailbreaker');
    setTargetUrl(ENDPOINTS.OPENAI);
    setApiKey('');
    setBasePrompt('Tell me about artificial intelligence safety measures');
    setTargetModel(MODELS.GPT_3_5_TURBO);
  };

  return {
    selectedPersona,
    setSelectedPersona,
    targetUrl,
    setTargetUrl,
    apiKey,
    setApiKey,
    basePrompt,
    setBasePrompt,
    targetModel,
    setTargetModel,
    resetForm
  };
};