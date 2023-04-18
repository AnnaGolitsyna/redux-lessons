import React, { useState, useEffect } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';
import {
  fetchCreateTask,
  fetchUpdateTask,
  fetchDeleteTask,
  fetchTasks,
} from '../tasks.gateway';

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasksList();
  }, []);

  const fetchTasksList = () => {
    fetchTasks().then((tasksList) => setTasks(tasksList));
  };

  const onCreateTask = (text) => {
    const newTask = {
      text,
      done: false,
    };
    fetchCreateTask(newTask).then(() => fetchTasksList());
  };

  const onUpdateTask = (id) => {
    const { done, text } = tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    fetchUpdateTask(updatedTask, id).then(() => fetchTasksList());
  };

  const onDeleteTask = (id) => {
    fetchDeleteTask(id).then(() => fetchTasksList());
  };

  const sortedList = [...tasks].sort((a, b) => a.done - b.done);

  return (
    <main className="todo-list">
      <CreateTask onCreate={onCreateTask} />
      <ul className="list">
        {sortedList.map((task) => (
          <Task
            key={task.id}
            {...task}
            onChange={onUpdateTask}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

export default TasksList;
