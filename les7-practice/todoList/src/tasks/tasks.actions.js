import {
  fetchTasks,
  fetchDeleteTask,
  fetchCreateTask,
  fetchUpdateTask,
} from './tasks.gateway';
import { taskDataSelector } from './tasks.selector';

export const TASKS_LIST_RECIEVED = 'TASKS/TASKS_LIST_RECIEVED';

export const tasksListRecieved = (tasksList) => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: { tasksList },
  };
};

export const getTasksList = () => {
  return function (dispatch) {
    fetchTasks().then((tasksListData) =>
      dispatch(tasksListRecieved(tasksListData))
    );
  };
};

export const deletedTask = (taskId) => {
  return function (dispatch) {
    fetchDeleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const updatedTask = (taskId) => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = taskDataSelector(state);
    const { done, text } = tasksList.find((task) => task.id === taskId);
    const updatedTask = {
      text,
      done: !done,
      createdAt: new Date().toISOString(),
    };
    fetchUpdateTask(updatedTask, taskId).then(() => dispatch(getTasksList()));
  };
};

export const createdTask = (text) => {
  return function (dispatch) {
    const newTask = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    fetchCreateTask(newTask).then(() => dispatch(getTasksList()));
  };
};
