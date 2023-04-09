import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TransferList from './options/TransferList.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};

export default App;
