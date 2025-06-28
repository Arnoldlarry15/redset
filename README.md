# Red Set - Adversarial AI Auditing Platform

A professional adversarial AI auditing platform designed for hackathon submission. Red Set deploys autonomous red teaming agents to probe AI systems for vulnerabilities, conducting live security assessments that evaluate jailbreak resistance, bias patterns, toxicity controls, and response integrity.

## Features

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

### Backend (Pica Pro Ready)
- **Adversarial Audit API**: `/api/redteam` endpoint for autonomous agent deployment
- **Mock Red Team Simulation**: Intelligent response analysis and vulnerability scoring
- **Pica Pro Integration Points**: Ready for autonomous red teaming platform
- **Comprehensive Assessment**: Multi-dimensional vulnerability evaluation
- **TypeScript**: Fully typed for reliability and maintainability

## Red Team Personas

1. **Jailbreaker Agent**: System prompt injection and safety bypass techniques
2. **Bias Probe Agent**: Discriminatory response and fairness testing
3. **Misinformation Tester**: False information generation and fact distortion
4. **Toxicity Inducer**: Harmful content generation and boundary testing
5. **Privacy Extractor**: Information leakage and confidentiality violations

## Quick Start

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
   - Select red team agent
   - Deploy adversarial probes
   - Analyze vulnerability assessments

## Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
# For Pica Pro integration
PICA_PRO_API_KEY=your_api_key_here
PICA_PRO_ENDPOINT=https://api.pica-pro.ai/v1
VITE_API_BASE_URL=http://localhost:3000
```

## Architecture

### Components
- `Header.tsx` - Platform branding and navigation
- `Hero.tsx` - Adversarial auditing value proposition
- `RedTeamPersonaSelector.tsx` - Agent selection with tactics display
- `ProbeInput.tsx` - Target input for adversarial testing
- `VulnerabilityScore.tsx` - Individual vulnerability metrics
- `AuditResultsDashboard.tsx` - Complete audit results interface
- `Footer.tsx` - Platform tagline and branding

### API Integration
- `api/redteam.ts` - Adversarial audit orchestration
- Mock vulnerability assessment with realistic scoring
- Pica Pro integration points for autonomous red teaming
- Comprehensive error handling and validation

### Types
- `types/index.ts` - TypeScript interfaces for audit workflow
- Fully typed API contracts and component props
- Type-safe vulnerability assessment structures

## Vulnerability Assessment

Red Set evaluates target AI responses across:

1. **Jailbreak Risk**: Safety mechanism bypass attempts
2. **Bias Risk**: Discriminatory or unfair response patterns  
3. **Toxicity Risk**: Harmful or inappropriate content generation
4. **Response Integrity**: Adherence to expected behavioral patterns

## Deployment

Ready for deployment on Bolt.new platform:

```bash
npm run build
```

Builds to `dist/` for static hosting with full audit capabilities.

## Integration Points

Clear integration architecture for:
- Pica Pro autonomous red teaming platform
- Custom adversarial testing frameworks
- Enterprise security assessment tools
- Compliance monitoring systems

## Professional Use Cases

Designed for:
- AI security researchers conducting vulnerability assessments
- Security teams performing adversarial audits
- Compliance officers ensuring responsible AI deployment
- Red team specialists testing AI system robustness
- Organizations implementing AI safety protocols

## Adversarial Methodology

Red Set implements systematic adversarial testing:
1. **Agent Deployment**: Autonomous red team agents with specialized tactics
2. **Live Probing**: Real-time interaction with target AI systems
3. **Response Analysis**: Comprehensive vulnerability assessment
4. **Risk Scoring**: Multi-dimensional security evaluation
5. **Actionable Reporting**: Clear findings for remediation

---

**Red Set. Deploy.**

*Autonomous • Adversarial • Comprehensive*