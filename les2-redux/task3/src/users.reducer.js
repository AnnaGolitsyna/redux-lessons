// Var 2
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { usersList: [] },
  reducers: {
    addUser: (state, action) => ({
      ...state,
      usersList: [...state.usersList, action.payload],
    }),
    deleteUser: (state, action) => ({
      ...state,
      usersList: state.usersList.filter((el) => el.id !== action.payload),
    }),
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice;

// Var 1
// import { ADD_USER, DELETE_USER } from './users.actions';

// const initialValue = {
//   usersList: [],
// };

// const usersReduser = (state = initialValue, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return {
//         ...state,
//         usersList: state.usersList.concat(action.userData)
//       };
//     case DELETE_USER:
//       return {
//         ...state,
//         usersList: state.usersList.filter(el => el.id !== action.id)
//       };
//     default:
//       return state;
//   }
// };

// export default usersReduser;
