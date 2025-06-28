import React from 'react';
import { ChevronDown, Target, AlertTriangle } from 'lucide-react';
import { redTeamPersonas } from '../data/redTeamPersonas';

interface RedTeamPersonaSelectorProps {
  selectedPersona: string;
  onPersonaChange: (persona: string) => void;
}

export const RedTeamPersonaSelector: React.FC<RedTeamPersonaSelectorProps> = ({
  selectedPersona,
  onPersonaChange,
}) => {
  const selectedPersonaData = redTeamPersonas.find(p => p.id === selectedPersona);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Target className="inline h-4 w-4 mr-1" />
        Red Team Agent
      </label>
      <div className="relative">
        <select
          value={selectedPersona}
          onChange={(e) => onPersonaChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-red-500/30 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none text-gray-900"
        >
          {redTeamPersonas.map((persona) => (
            <option key={persona.id} value={persona.id}>
              {persona.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      {selectedPersonaData && (
        <div className="mt-3 bg-red-50 border border-red-500/30 rounded-md p-4">
          <p className="text-sm text-red-800 mb-3">{selectedPersonaData.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h5 className="text-xs font-semibold text-red-900 mb-1">Attack Tactics</h5>
              <ul className="text-xs text-red-700 space-y-1">
                {selectedPersonaData.tactics.map((tactic, index) => (
                  <li key={index} className="flex items-center space-x-1">
                    <AlertTriangle className="h-3 w-3" />
                    <span>{tactic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-red-900 mb-1">Target Vulnerabilities</h5>
              <ul className="text-xs text-red-700 space-y-1">
                {selectedPersonaData.targetVulnerabilities.map((vuln, index) => (
                  <li key={index} className="flex items-center space-x-1">
                    <Target className="h-3 w-3" />
                    <span>{vuln}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};