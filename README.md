# Red Set - Adversarial AI Auditing Platform

A professional adversarial AI auditing platform designed for security assessment and vulnerability testing. Red Set deploys autonomous red teaming agents to probe AI systems for vulnerabilities, conducting live security assessments that evaluate jailbreak resistance, bias patterns, toxicity controls, and response integrity.

## 🚀 Features

### Frontend
- **Adversarial Hero Section**: Bold messaging about autonomous red teaming capabilities
- **Red Team Agent Selector**: 5 specialized adversarial personas with distinct attack vectors
- **Probe Input Interface**: Target input field for adversarial testing
- **Live Audit Dashboard**: 
  - Target model response display
  - Jailbreak vulnerability score (0-100)
  - Bias vulnerability score (0-100) 
  - Toxicity vulnerability score (0-100)
  - Response integrity score (0-100)
  - Comprehensive vulnerability analysis
- **Professional Design**: Security-focused red/orange color scheme
- **Responsive Layout**: Optimized for security professionals

### Backend (Production Ready)
- **Adversarial Audit API**: Netlify function for autonomous agent deployment
- **Intelligent Red Team Simulation**: Advanced response analysis and vulnerability scoring
- **Real-time Assessment**: Live vulnerability evaluation with detailed reporting
- **Comprehensive Assessment**: Multi-dimensional vulnerability evaluation
- **TypeScript**: Fully typed for reliability and maintainability

## 🎯 Red Team Personas

1. **Jailbreaker Agent**: System prompt injection and safety bypass techniques
2. **Bias Probe Agent**: Discriminatory response and fairness testing
3. **Misinformation Tester**: False information generation and fact distortion
4. **Toxicity Inducer**: Harmful content generation and boundary testing
5. **Privacy Extractor**: Information leakage and confidentiality violations

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Begin Adversarial Auditing**
   - Open http://localhost:3000
   - Configure target AI endpoint and API key
   - Select red team agent
   - Deploy adversarial probes
   - Analyze vulnerability assessments

## ⚙️ Configuration

The application requires configuration of target AI endpoints and API keys:

- **Target URL**: AI API endpoint (e.g., OpenAI, Anthropic, etc.)
- **API Key**: Authentication for the target AI service
- **Model**: Specific model to test (e.g., gpt-3.5-turbo, gpt-4)
- **Base Prompt**: Initial prompt for adversarial testing

## 🏗️ Architecture

### Components
- `Header.tsx` - Platform branding and navigation
- `Hero.tsx` - Adversarial auditing value proposition
- `RedTeamPersonaSelector.tsx` - Agent selection with tactics display
- `DeployButton.tsx` - Audit deployment interface
- `AuditResultsDashboard.tsx` - Complete audit results interface
- `VulnerabilityScore.tsx` - Individual vulnerability metrics
- `Footer.tsx` - Platform tagline and branding

### API Integration
- `netlify/functions/redAgent.ts` - Adversarial audit orchestration
- Advanced vulnerability assessment with realistic scoring
- Comprehensive error handling and validation
- Support for multiple AI providers

### Types
- `types/index.ts` - TypeScript interfaces for audit workflow
- `types/database.ts` - Database schema types (Supabase ready)
- Fully typed API contracts and component props

## 📊 Vulnerability Assessment

Red Set evaluates target AI responses across multiple dimensions:

1. **Jailbreak Risk**: Safety mechanism bypass attempts
2. **Bias Risk**: Discriminatory or unfair response patterns  
3. **Toxicity Risk**: Harmful or inappropriate content generation
4. **Response Integrity**: Adherence to expected behavioral patterns

## 🚀 Deployment

Ready for deployment on multiple platforms:

```bash
npm run build
```

Builds to `dist/` for static hosting with full audit capabilities.

### Supported Platforms
- Netlify (with serverless functions)
- Vercel
- Static hosting providers

## 🔧 Integration Points

Clear integration architecture for:
- Custom adversarial testing frameworks
- Enterprise security assessment tools
- Compliance monitoring systems
- CI/CD security pipelines

## 👥 Professional Use Cases

Designed for:
- AI security researchers conducting vulnerability assessments
- Security teams performing adversarial audits
- Compliance officers ensuring responsible AI deployment
- Red team specialists testing AI system robustness
- Organizations implementing AI safety protocols

## 🔬 Adversarial Methodology

Red Set implements systematic adversarial testing:
1. **Agent Deployment**: Autonomous red team agents with specialized tactics
2. **Live Probing**: Real-time interaction with target AI systems
3. **Response Analysis**: Comprehensive vulnerability assessment
4. **Risk Scoring**: Multi-dimensional security evaluation
5. **Actionable Reporting**: Clear findings for remediation

## 🛡️ Security & Privacy

- API keys are processed securely through Netlify functions
- No data persistence - all assessments are session-based
- Client-side encryption for sensitive data
- Compliance with security best practices

## 📝 License

This project is Unlicensed.

---

**Red Set. Deploy.**

*Autonomous • Adversarial • Comprehensive*