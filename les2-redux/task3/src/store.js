// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReduser from './users.reducer';

const store = configureStore({
    reducer: usersReduser.reducer,
})

// const store = createStore(usersReduser);

export default store;
