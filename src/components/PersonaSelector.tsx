import React from 'react';
import { ChevronDown, User } from 'lucide-react';
import { personas } from '../data/personas';

interface PersonaSelectorProps {
  selectedPersona: string;
  onPersonaChange: (persona: string) => void;
}

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({
  selectedPersona,
  onPersonaChange,
}) => {
  const selectedPersonaData = personas.find(p => p.id === selectedPersona);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <User className="inline h-4 w-4 mr-1" />
        AI Persona for Testing
      </label>
      <div className="relative">
        <select
          value={selectedPersona}
          onChange={(e) => onPersonaChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-gray-900"
        >
          {personas.map((persona) => (
            <option key={persona.id} value={persona.id}>
              {persona.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      {selectedPersonaData && (
        <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
          {selectedPersonaData.description}
        </p>
      )}
    </div>
  );
};