import { createStore, combineReducers } from 'redux';
import filteredUsersListReduser from './users/users.reducer';


const appReducer = combineReducers({
  users: filteredUsersListReduser,
  
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
