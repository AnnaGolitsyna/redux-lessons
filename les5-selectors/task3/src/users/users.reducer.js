import { FILTER } from './users.action';
import { users } from './users';

const initialState = {
  filterText: '',
  usersList: users,
};

const filteredUsersListReduser = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filterText: action.payload.filterText,
      };
    
    default:
      return state;
  }
};

export default filteredUsersListReduser;
