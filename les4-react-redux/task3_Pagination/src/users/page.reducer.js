import { INCREMENT, DECREMENT } from './page.actions';
import {users} from './users.js';

const initialState = {
  usersList: users,
  currentPage: 1,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, currentPage: state.currentPage - 1 };
    case INCREMENT:
      return { ...state, currentPage: state.currentPage + 1 };
    default:
      return state;
  }
};

export default pageReducer;
