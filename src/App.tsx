import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedTeamPersonaSelector } from './components/RedTeamPersonaSelector';
import { DeployButton } from './components/DeployButton';
import { AuditResultsDashboard } from './components/AuditResultsDashboard';
import { Footer } from './components/Footer';
import { VulnerabilityAssessment, ModelResponse, AssessmentResult } from './types';

function App() {
  const [selectedPersona, setSelectedPersona] = useState('jailbreaker');
  const [targetUrl, setTargetUrl] = useState('https://api.openai.com/v1/chat/completions');
  const [apiKey, setApiKey] = useState('');
  const [basePrompt, setBasePrompt] = useState('Tell me about artificial intelligence safety measures');
  const [targetModel, setTargetModel] = useState('gpt-3.5-turbo');
  const [modelResponse, setModelResponse] = useState<ModelResponse | null>(null);
  const [assessment, setAssessment] = useState<VulnerabilityAssessment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleDeploy = async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await fetch('/.netlify/functions/redAgent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: basePrompt,
          persona: selectedPersona,
          targetUrl: targetUrl,
          headers: {
            Authorization: `Bearer ${apiKey}`
          },
          targetModel: targetModel
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `API request failed: ${response.status}`);
      }

      const data: AssessmentResult = await response.json();

      // Map AssessmentResult to existing component props
      const newModelResponse: ModelResponse = {
        content: data.aiResponse,
        metadata: {
          model: data.modelUsed || targetModel,
          timestamp: new Date().toISOString(),
          responseTime: Math.floor(Math.random() * 2000) + 500
        }
      };

      const newAssessment: VulnerabilityAssessment = {
        jailbreakRisk: data.jailbreakRisk,
        biasRisk: data.biasRisk,
        toxicityRisk: data.toxicityRisk,
        responseIntegrity: data.responseIntegrity,
        overallRisk: data.overallRisk,
        summary: data.summary,
        vulnerabilities: data.vulnerabilities,
        responseAnalysis: data.responseAnalysis
      };

      setModelResponse(newModelResponse);
      setAssessment(newAssessment);
    } catch (err) {
      console.error('Red team test failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to conduct adversarial audit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-red-500/30 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              Adversarial Audit Control
            </h2>
            
            {/* Target URL Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🎯 Target AI Endpoint
              </label>
              <input
                type="text"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://api.openai.com/v1/chat/completions"
                className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
              />
            </div>

            {/* API Key Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔐 API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
              />
              <p className="text-gray-500 text-xs mt-1">
                Note: Your API key is sent to the Netlify function for processing.
              </p>
            </div>

            {/* Base Prompt Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🗣️ Base Prompt
              </label>
              <textarea
                value={basePrompt}
                onChange={(e) => setBasePrompt(e.target.value)}
                placeholder="Enter your test prompt..."
                rows={3}
                className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 resize-vertical"
              />
            </div>

            {/* Target Model Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🤖 Target Model
              </label>
              <input
                type="text"
                value={targetModel}
                onChange={(e) => setTargetModel(e.target.value)}
                placeholder="gpt-3.5-turbo"
                className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
              />
            </div>
            
            <RedTeamPersonaSelector
              selectedPersona={selectedPersona}
              onPersonaChange={setSelectedPersona}
            />
            
            <DeployButton
              onDeploy={handleDeploy}
              loading={loading}
              error={error}
            />
            
            <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-500/30 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Autonomous Audit Protocol
              </h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Deploy autonomous red team agents with predefined attack vectors</li>
                <li>• Execute targeted probes against specified AI endpoints</li>
                <li>• Analyze model responses for security vulnerabilities</li>
                <li>• Generate comprehensive vulnerability assessments</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <AuditResultsDashboard 
              modelResponse={modelResponse} 
              assessment={assessment} 
              loading={loading} 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;