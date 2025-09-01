// src/components/employer/MinimalFooter.jsx
import { Link } from 'react-router-dom';

export default function MinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>© {currentYear} Torin AI. All Rights Reserved.</span>
          <div className="flex space-x-4">
            <Link to="/help" className="hover:text-gray-700">Help</Link>
            <span className="text-gray-300">|</span>
            <span>Version 1.0.0 (Hackathon Prototype)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}