import React from 'react';
import TaskListContextProvider from '../../context/TaskListContext';
import TaskList from '../tasks/TaskList';
import TaskForm from './../Forms/TaskForm'

const Tasks = () => {
  return (
    <div>
      <TaskListContextProvider>
        <TaskForm />
        <TaskList />
      </TaskListContextProvider>
    </div>
  );
};

export default Tasks;