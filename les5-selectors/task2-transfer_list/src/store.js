import { createStore, combineReducers } from 'redux';
import optionsReducer from './options/options.reducer';

const appReducer = combineReducers({
  optionsData: optionsReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
