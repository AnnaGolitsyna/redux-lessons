import { SHOW_SPINNER, USER_DATA_RECIEVED } from './users.actions';

const initialState = {
  userData: null,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_RECIEVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    case SHOW_SPINNER:
    return {
      ...state,
      isFetching: true,
    }
    default:
      return state;
  }
};

export default usersReducer;
