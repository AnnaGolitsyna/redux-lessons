import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './counter.reducer';

const storMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const appReducer = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(storMiddleware))
);

export default store;
