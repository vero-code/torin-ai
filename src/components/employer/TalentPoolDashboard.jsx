// src/components/employer/TalentPoolDashboard.jsx
import React, { useState } from 'react';
import CandidateCard from './CandidateCard';

export default function TalentPoolDashboard() {
  const [filters, setFilters] = useState({
    tech: '',
    minPotential: 7.0,
    skill: '',
  });

  const candidates = [
    { id: '735', challenge: 'Data Processing in JavaScript', tech: 'JavaScript', potential: 9.1, skills: ['Learning Speed', 'Code Quality'], score: 91 },
    { id: '736', challenge: 'Building an API in Python', tech: 'Python', potential: 8.5, skills: ['AI Efficiency', 'Algorithms'], score: 85 },
    { id: '737', challenge: 'Data Processing in JavaScript', tech: 'JavaScript', potential: 7.8, skills: ['Adaptability', 'Code Quality'], score: 78 },
    { id: '738', challenge: 'UI Development in React', tech: 'React', potential: 9.5, skills: ['Learning Speed', 'UI/UX'], score: 95 },
    { id: '739', challenge: 'Building an API in Python', tech: 'Python', potential: 7.2, skills: ['AI Efficiency'], score: 72 },
  ];

  const filteredCandidates = candidates.filter(candidate => {
    return (
      (filters.tech === '' || candidate.tech === filters.tech) &&
      (candidate.potential >= filters.minPotential) &&
      (filters.skill === '' || candidate.skills.includes(filters.skill))
    );
  }).sort((a, b) => b.potential - a.potential);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Talent Pool</h1>

      {/* Filter section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label htmlFor="tech" className="block text-sm font-medium text-gray-700">Technology</label>
          <select
            id="tech"
            name="tech"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={filters.tech}
            onChange={(e) => setFilters({ ...filters, tech: e.target.value })}
          >
            <option value="">All</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="React">React</option>
          </select>
        </div>
        <div>
          <label htmlFor="minPotential" className="block text-sm font-medium text-gray-700">Min. potential: {filters.minPotential.toFixed(1)}</label>
          <input
            type="range"
            id="minPotential"
            name="minPotential"
            min="5"
            max="10"
            step="0.1"
            value={filters.minPotential}
            onChange={(e) => setFilters({ ...filters, minPotential: parseFloat(e.target.value) })}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="skill" className="block text-sm font-medium text-gray-700">Key skill</label>
          <select
            id="skill"
            name="skill"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={filters.skill}
            onChange={(e) => setFilters({ ...filters.skill, skill: e.target.value })}
          >
            <option value="">All</option>
            <option value="Learning Speed">Learning Speed</option>
            <option value="Code Quality">Code Quality</option>
            <option value="AI Efficiency">AI Efficiency</option>
            <option value="Adaptability">Adaptability</option>
            <option value="Algorithms">Algorithms</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map(candidate => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No candidates were found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
}