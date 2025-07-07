import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AssessmentForm } from './components/forms/AssessmentForm';
import { AuditResultsDashboard } from './components/AuditResultsDashboard';
import { Footer } from './components/Footer';
import { Card } from './components/ui/Card';
import { useAssessment } from './hooks/useAssessment';
import { useFormState } from './hooks/useFormState';

function App() {
  const {
    selectedPersona,
    setSelectedPersona,
    targetUrl,
    setTargetUrl,
    apiKey,
    setApiKey,
    basePrompt,
    setBasePrompt,
    targetModel,
    setTargetModel
  } = useFormState();

  const {
    modelResponse,
    assessment,
    loading,
    error,
    runAssessment
  } = useAssessment();

  const handleDeploy = () => {
    runAssessment(basePrompt, selectedPersona, targetUrl, apiKey, targetModel);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <Card variant="red">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              Adversarial Audit Control
            </h2>
            
            <AssessmentForm
              selectedPersona={selectedPersona}
              onPersonaChange={setSelectedPersona}
              targetUrl={targetUrl}
              onTargetUrlChange={setTargetUrl}
              apiKey={apiKey}
              onApiKeyChange={setApiKey}
              basePrompt={basePrompt}
              onBasePromptChange={setBasePrompt}
              targetModel={targetModel}
              onTargetModelChange={setTargetModel}
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
          </Card>

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