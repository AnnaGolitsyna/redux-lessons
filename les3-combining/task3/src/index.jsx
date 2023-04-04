// store.dispatch, subscrible
import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('ru'));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'beer' }));
store.dispatch(addProduct({ id: 3, name: 'pepsy' }));
store.dispatch(removeProduct(2));
store.dispatch(setUser({name: 'Bob'}));
store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(removeUser())