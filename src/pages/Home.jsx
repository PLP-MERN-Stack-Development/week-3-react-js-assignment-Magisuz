import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page component
 * @returns {JSX.Element} - Home page
 */
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A modern task management application built with React and Tailwind CSS
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card title="Task Management" className="text-center">
          <div className="text-gray-600 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <p>Create, manage, and organize your tasks efficiently with our intuitive interface.</p>
          </div>
        </Card>

        <Card title="API Integration" className="text-center">
          <div className="text-gray-600 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <p>Fetch and display data from external APIs with built-in search and pagination.</p>
          </div>
        </Card>

        <Card title="Dark Mode" className="text-center">
          <div className="text-gray-600 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <p>Switch between light and dark themes for a comfortable viewing experience.</p>
          </div>
        </Card>
      </div>

      {/* Stats Section */}
      <Card title="Application Statistics" className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">API Posts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-400">Tasks Possible</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400">Theme Modes</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home; 