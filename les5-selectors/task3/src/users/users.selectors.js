import { createSelector } from 'reselect';

export const filterTextSelector = (state) => {
  return state.showUsersList.filterText;
};

export const usersListSelector = (state) => {
  return state.showUsersList.usersList;
};

export const filteredUsersListSelectorSelector = createSelector(
  [filterTextSelector, usersListSelector],
  (filterText, usersList) => {
    return usersList.filter((user) =>
      user.name.toLowerCase().includes(filterText)
    );
  }
);
