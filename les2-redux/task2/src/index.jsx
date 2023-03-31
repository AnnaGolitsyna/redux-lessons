import './index.scss';
import { increment, decrement, reset, store } from './store';

const resultEl = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};

incrementBtn.addEventListener('click', onIncrement);

const onDecrement = () => {
  store.dispatch(decrement());
};

decrementBtn.addEventListener('click', onDecrement);

const onReset = () => {
  store.dispatch(reset());
};

resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const curValue = state.history.reduce((acc, val) => acc + val, 0);
  const historyStr = state.history
    .map((val) => (val > 0 ? `+${val}` : val))
    .join('');
  resultEl.textContent = curValue === 0 ? '' : `${historyStr} = ${curValue}`;
});
