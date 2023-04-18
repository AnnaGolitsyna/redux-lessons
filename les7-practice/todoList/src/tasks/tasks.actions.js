import { fetchTasks } from './tasks.gateway';

export const TASKS_LIST_RECIEVED = 'TASKS/TASKS_LIST_RECIEVED';

export const tasksListRecieved = (tasksList) => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: { tasksList },
  };
};

export const getTasksList = () => {
    return function(dispatch) {
        fetchTasks().then((tasksListData) =>
          dispatch(tasksListRecieved(tasksListData))
        );
    }
}
