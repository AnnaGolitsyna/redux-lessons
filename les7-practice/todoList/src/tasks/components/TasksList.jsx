import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import CreateTask from './CreateTask';
import { sortedTasksList } from '../tasks.selector';
import { getTasksList, deletedTask } from '../tasks.actions';
import {
  fetchCreateTask,
  fetchUpdateTask,
  fetchDeleteTask,
  fetchTasks,
} from '../tasks.gateway';

const TasksList = () => {
  // const [tasks, setTasks] = useState([]);

  const tasks = useSelector((state) => sortedTasksList(state));
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchTasksList();
    dispatch(getTasksList(tasks));
  }, []);

  // const fetchTasksList = () => {
  //   fetchTasks().then((tasksList) => setTasks(tasksList));
  // };

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

  // const onDeleteTask = (id) => {
  //   fetchDeleteTask(id).then(() => fetchTasksList());
  // };


  return (
    <main className="todo-list">
      <CreateTask onCreate={onCreateTask} />
      <ul className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onChange={onUpdateTask}
            onDelete={() => dispatch(deletedTask(task.id))}
          />
        ))}
      </ul>
    </main>
  );
};

export default TasksList;
