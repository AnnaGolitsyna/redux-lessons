import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import usersReducer from './users/users.reducer';
import thunk from 'redux-thunk';

const storMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const appReducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(storMiddleware, thunk))
);

export default store;
