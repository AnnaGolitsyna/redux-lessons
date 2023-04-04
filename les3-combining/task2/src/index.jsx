import store  from "./counter";
import { increment, decrement } from "./counter";

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());
