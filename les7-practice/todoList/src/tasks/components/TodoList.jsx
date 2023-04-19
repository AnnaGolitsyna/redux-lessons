import React from 'react';
import TasksList from './TasksList';
import CreateTask from './CreateTask';

const TodoList = () => {
  return (
    <main className="todo-list">
      <CreateTask />
      <TasksList />
    </main>
  );
};

export default TodoList;
