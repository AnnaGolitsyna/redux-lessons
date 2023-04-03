import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';
import store from './store';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addUser({ id: 50, name: 'Alex' }));
store.dispatch(addUser({ id: 53, name: 'Bob' }));
store.dispatch(addUser({ id: 56, name: 'Tom' }));
store.dispatch(deleteUser(50));
store.dispatch(addUser({ id: 66, name: 'Sam' }));
store.dispatch(updateUser({ id: 66, name: 'Samanta' }));
store.dispatch(deleteUser(53));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
