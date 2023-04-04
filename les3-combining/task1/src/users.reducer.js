import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialValue = {
  usersList: [],
};

const usersReduser = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.userData),
      };

    case DELETE_USER:
      const newList = state.usersList.filter((el) => el.id !== action.userId);
      return {
        ...state,
        usersList: newList,
      };

    case UPDATE_USER: {
      const updatedList = state.usersList.map((user) => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: updatedList,
      };
    }
    default:
      return state;
  }
};

export default usersReduser;
