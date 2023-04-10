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
        filterText: state.filterText.concat('', action.payload.filterText),
        usersList: state.usersList.filter((user) =>
          user.name.toLowerCase().includes(state.filterText.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default filteredUsersListReduser;
