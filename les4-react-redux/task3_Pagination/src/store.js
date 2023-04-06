import { createStore, combineReducers } from 'redux';
import pageReducer from './users/page.reducer';


const appReducer = combineReducers({
  pageData: pageReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
