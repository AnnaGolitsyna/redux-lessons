import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  const state = store.getState().usersList;
  console.log(state);
});

store.dispatch(addUser({ id: 50, name: 'Alex' }));
store.dispatch(addUser({ id: 53, name: 'Bob' }));
store.dispatch(addUser({ id: 56, name: 'Tom' }));
store.dispatch(deleteUser(50))
