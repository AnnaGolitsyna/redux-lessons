import { createSelector } from 'reselect';

export const filterTextSelector = (state) => {
  return state.users.filterText;
};

export const usersListSelector = (state) => {
  return state.users.usersList;
};

export const filteredUsersListSelectorSelector = createSelector(
  [filterTextSelector, usersListSelector],
  (filterText, usersList) => {
    return usersList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
);
