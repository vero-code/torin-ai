// src/components/employer/CandidateProfile.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sandpack } from '@codesandbox/sandpack-react';
import ReactMarkdown from 'react-markdown';
import {Paper} from "@mantine/core";

export default function CandidateProfile() {
  const { candidateId } = useParams();
  const [activeTab, setActiveTab] = useState('solution');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const candidateData = {
    id: candidateId,
    name: 'Candidate Name',
    email: 'email@example.com',
    github: 'https://github.com/candidate',
    challengeTitle: 'Data Processing in JavaScript',
    challengeDescription: `# Challenge: Process User Data\n\nYou are given an array of user objects. Your task is to write a JavaScript function that processes this data.\n\n## Requirements:\n1. **Filter:** Leave only active users (\`isActive: true\`).\n2. **Map:** For each user, create a new object with only three fields: \`name\`, \`email\`, and \`company\`.\n3. **Sort:** Sort the final array of users alphabetically by \`name\`.\n\nThe function must return this new, processed array. This is a classic data manipulation task. Show us your elegant solution!`,
    candidateSolutionCode: `// The final decision of the candidate\nconst users = [...];\n\nfunction processUsers(users) {\n  return users\n    .filter(user => user.isActive)\n    .map(user => ({ name: user.name, email: user.email, company: user.company }))\n    .sort((a, b) => a.name.localeCompare(b.name));\n}\n\nconsole.log(processUsers(users));`,
    thoughtProcessLog: `**[Start]** A candidate asks the question: "What is the best way to start filtering data in JavaScript?"\n\n**[AI Assistant]** "Start with the method \`.filter()\` for array..."\n\n**[Candidate]** "Got it, and for mapping?"\n\n**[AI Assistant]** "Use \`.map()\` to transform objects..."\n\n**[Candidate]** "Great, how do I sort by name?"\n\n**[AI Assistant]** "The \`.sort()\` method and \`localeCompare()\` will do..."\n\n**[End]** The candidate has completed the code.`,
    potential: 9.1,
    skills: ['Learning Speed: 9/10', 'Code Quality: 8/10', 'AI Efficiency: 7/10'],
  };

  if (!candidateData) {
    return <p className="text-center text-gray-500">Candidate not found.</p>;
  }

  const solutionFiles = {
    '/solution.js': candidateData.candidateSolutionCode,
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        Candidate Profile #{candidateData.id}
      </h1>
      <p className="text-xl text-gray-700 mb-6">Challenge: {candidateData.challengeTitle}</p>

      <div className="border-b border-gray-200 pb-5 mb-6 flex justify-between items-center">
        <div>
          <span className="text-sm font-medium text-gray-500">Potential Index:</span>{' '}
          <span className="text-indigo-600 text-2xl font-bold">{candidateData.potential.toFixed(1)}/10</span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-3 relative inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Contact the candidate
        </button>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('solution')}
            className={`${
              activeTab === 'solution'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Solution
          </button>
          <button
            onClick={() => setActiveTab('thoughtProcess')}
            className={`${
              activeTab === 'thoughtProcess'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Train of Thoughts (AI assistant)
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'solution' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">Problem Statement</h3>
              <Paper withBorder p="md" radius="md" className="h-full">
                <ReactMarkdown>{candidateData.challengeDescription}</ReactMarkdown>
              </Paper>
            </div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">Candidate's decision</h3>
              <Sandpack
                template="vanilla"
                files={solutionFiles}
                theme="dark"
                options={{
                  readOnly: true,
                  editorHeight: '400px',
                  showConsole: false,
                  showNavigator: true,
                }}
              />
            </div>
          </div>
        )}

        {activeTab === 'thoughtProcess' && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner h-96 overflow-y-auto">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">History of Interaction with AI Assistant</h3>
            <div className="prose max-w-none">
              <ReactMarkdown>
                {candidateData.thoughtProcessLog}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}