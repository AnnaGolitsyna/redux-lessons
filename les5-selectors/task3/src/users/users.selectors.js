import { createSelector } from 'reselect';

const filterTextSelector = (state) => {
  return state.showUsersList.filterText;
};

const usersListSelector = (state) => {
  return state.showUsersList.usersList;
};

export const mainSelector = createSelector(
  [filterTextSelector, usersListSelector],
  (filterText, usersList) => {
    return usersList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
);
