import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { ProductCarousel } from './components/ProductCarousel';
import { CoreBenefits } from './components/CoreBenefits';
import { CallToActionSection } from './components/CallToActionSection';
import { Pricing } from './components/Pricing';
import { TrustProof } from './components/TrustProof';
import { AssessmentForm } from './components/forms/AssessmentForm';
import { AuditResultsDashboard } from './components/AuditResultsDashboard';
import { Footer } from './components/Footer';
import { Card } from './components/ui/Card';
import { useAssessment } from './hooks/useAssessment';
import { useFormState } from './hooks/useFormState';

function App() {
  const [showDemo, setShowDemo] = useState(false);
  
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

  const handleLaunchDemo = () => {
    setShowDemo(true);
    // Scroll to demo section
    setTimeout(() => {
      document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSeeLiveDemo = () => {
    setShowDemo(true);
    setTimeout(() => {
      document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Problem + Solution Section */}
      <ProblemSolution />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Product Screenshots Carousel */}
      <ProductCarousel />
      
      {/* Core Benefits Section */}
      <CoreBenefits />
      
      {/* CTA: Engage With Product Now */}
      <CallToActionSection
        headline="🔴 Run Your First Red Team Simulation Free"
        subtext="See what vulnerabilities your AI exposes before someone else does."
        primaryButtonText="Launch a Red Team Simulation"
        secondaryButtonText="See Live Demo"
        onPrimaryClick={handleLaunchDemo}
        onSecondaryClick={handleSeeLiveDemo}
        variant="gradient"
      />
      
      {/* Demo Section - Only show when requested */}
      {showDemo && (
        <section id="demo-section" className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Live Red Team Simulation
              </h2>
              <p className="text-xl text-gray-600">
                Experience Red Set's adversarial testing in action
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Control Panel */}
              <Card variant="red">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-1 h-6 bg-red-500 mr-3"></div>
                  Adversarial Audit Control
                </h3>
                
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
          </div>
        </section>
      )}
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Trust & Proof Section */}
      <TrustProof />
      
      {/* Final CTA */}
      <CallToActionSection
        headline="🚨 Your AI's First Defense is Knowing Its Weakness."
        subtext="Red Set delivers the proof — fast, clear, continuous."
        primaryButtonText="Start Red Teaming Today"
        primaryButtonIcon="🔴"
        variant="dark"
        onPrimaryClick={handleLaunchDemo}
      />

      <Footer />
    </div>
  );
}

export default App;