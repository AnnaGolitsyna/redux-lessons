import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UsersList from './users/UsersList.jsx';

// import TransferList from './options/TransferList.jsx';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </>
  );
};

export default App;
