import React from 'react';
import TaskManager from '../components/TaskManager';

/**
 * Tasks page component
 * @returns {JSX.Element} - Tasks page
 */
const Tasks = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <TaskManager />
    </div>
  );
};

export default Tasks; 