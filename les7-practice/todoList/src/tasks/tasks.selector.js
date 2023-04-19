import { createSelector } from 'reselect';

export const taskDataSelector = (state) => state.tasksData.tasks;

export const sortedTasksList = createSelector([taskDataSelector], (tasksList) =>
  tasksList.slice().sort((a, b) => a.done - b.done || b.createdAt - a.createdAt)
);
