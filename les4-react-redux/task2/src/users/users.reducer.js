import { ADD_USER, DELETE_USER } from './users.actions';

const initialValue = {
  usersList: [],
};

const usersReducer = (state = initialValue, action) => {

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.userData], // state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER: {
      return {
        ...state,
        usersList: [...state.usersList.filter(user => user.id !== action.payload.userId)],
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
