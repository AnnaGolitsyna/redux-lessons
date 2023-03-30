// VAR 2
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());


// VAR 1

// import { createStore } from 'redux';

// const INCREMENT = 'COUNTER/INCREMENT';
// const DECREMENT = 'COUNTER/DECREMENT';

// export const increment = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// export const decrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// export const store = createStore(counterReducer);

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

// console.log(store.getState());
