export const FILTER = 'USERS_FILTER';

export const filteredUsersListAction = (filterText) => {
  return {
    type: FILTER,
    payload: {filterText},
  };
};
