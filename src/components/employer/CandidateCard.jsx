import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateCard({ candidate }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-10 w-10 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4.002 4.002 0 11-8 0 4.002 4.002 0 018 0z" />
            </svg>
          </div>
          <div className="ml-4 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500">Candidate #{candidate.id}</dt>
              <dd className="text-lg font-bold text-gray-900 truncate">{candidate.challenge}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-5 py-3 bg-gray-50">
        <div className="text-sm">
          <span className="font-medium text-gray-700">Potential:</span>{' '}
          <span className="text-indigo-600 font-bold">{candidate.potential.toFixed(1)}/10</span>
        </div>
        <div className="text-sm mt-1">
          <span className="font-medium text-gray-700">Technology:</span>{' '}
          <span className="text-gray-900">{candidate.tech}</span>
        </div>
        <div className="text-sm mt-1">
          <span className="font-medium text-gray-700">Skills:</span>{' '}
          <span className="text-gray-900">{candidate.skills.join(', ')}</span>
        </div>
        <div className="mt-4">
          <Link
            to={`/employer/candidate/${candidate.id}`}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
}