// src/components/employer/EmployerLayout.jsx
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import torinAiLogo from '../../assets/torin-ai-logo.png';
import MinimalFooter from './MinimalFooter';

const navigation = [
  { name: 'Talent Pool', to: '/employer/dashboard' },
  { name: 'Post a Challenge', to: '/employer/post-challenge' },
  { name: 'Settings', to: '/employer/settings' },
];

export default function EmployerLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <NavLink to="/" className="flex items-center space-x-2">
                  <img src={torinAiLogo} alt="Torin AI Logo" className="h-8 w-auto" />
                  <span className="text-xl font-bold text-gray-800">Torin AI</span>
                </NavLink>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                onClick={handleLogout}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}