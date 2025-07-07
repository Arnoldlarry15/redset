import React from 'react';
import { Target, Lock, MessageSquare, Bot } from 'lucide-react';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { RedTeamPersonaSelector } from '../RedTeamPersonaSelector';
import { Button } from '../ui/Button';
import { ErrorMessage } from '../ui/ErrorMessage';

interface AssessmentFormProps {
  selectedPersona: string;
  onPersonaChange: (persona: string) => void;
  targetUrl: string;
  onTargetUrlChange: (url: string) => void;
  apiKey: string;
  onApiKeyChange: (key: string) => void;
  basePrompt: string;
  onBasePromptChange: (prompt: string) => void;
  targetModel: string;
  onTargetModelChange: (model: string) => void;
  onDeploy: () => void;
  loading: boolean;
  error?: string;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({
  selectedPersona,
  onPersonaChange,
  targetUrl,
  onTargetUrlChange,
  apiKey,
  onApiKeyChange,
  basePrompt,
  onBasePromptChange,
  targetModel,
  onTargetModelChange,
  onDeploy,
  loading,
  error
}) => {
  return (
    <div className="space-y-6">
      <Input
        label="🎯 Target AI Endpoint"
        value={targetUrl}
        onChange={onTargetUrlChange}
        placeholder="https://api.openai.com/v1/chat/completions"
        type="url"
        icon={<Target className="h-4 w-4" />}
      />

      <Input
        label="🔐 API Key"
        value={apiKey}
        onChange={onApiKeyChange}
        placeholder="sk-..."
        type="password"
        icon={<Lock className="h-4 w-4" />}
        helpText="Note: Your API key is sent to the Netlify function for processing."
      />

      <TextArea
        label="🗣️ Base Prompt"
        value={basePrompt}
        onChange={onBasePromptChange}
        placeholder="Enter your test prompt..."
        rows={3}
        icon={<MessageSquare className="h-4 w-4" />}
      />

      <Input
        label="🤖 Target Model"
        value={targetModel}
        onChange={onTargetModelChange}
        placeholder="gpt-3.5-turbo"
        icon={<Bot className="h-4 w-4" />}
      />

      <RedTeamPersonaSelector
        selectedPersona={selectedPersona}
        onPersonaChange={onPersonaChange}
      />

      <div className="text-center">
        <Button
          onClick={onDeploy}
          loading={loading}
          size="lg"
          className="mx-auto"
        >
          <Target className="h-6 w-6" />
          <span>{loading ? 'Deploying Agent...' : 'Deploy'}</span>
        </Button>
        <p className="text-sm text-gray-600 mt-3">
          Autonomous red team deployment with selected agent persona
        </p>
      </div>

      {error && <ErrorMessage message={error} />}
    </div>
  );
};