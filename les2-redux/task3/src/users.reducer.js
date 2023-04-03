import { ADD_USER, DELETE_USER } from './users.actions';

const initialValue = {
  usersList: [],
};

const usersReduser = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.userData)
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(el => el.id !== action.id)
      };
    default:
      return state;
  }
};

export default usersReduser;