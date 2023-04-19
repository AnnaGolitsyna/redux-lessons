import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { sortedTasksList } from '../tasks.selector';
import { getTasksList, deletedTask, updatedTask } from '../tasks.actions';

const TasksList = () => {
  const tasks = useSelector((state) => sortedTasksList(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksList(tasks));
  }, []);

  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChange={() => dispatch(updatedTask(task.id))}
          onDelete={() => dispatch(deletedTask(task.id))}
        />
      ))}
    </ul>
  );
};

export default TasksList;
