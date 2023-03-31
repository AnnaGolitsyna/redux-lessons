import store, { increment, decrement, reset } from './store';
import './index.scss';

const resultEl = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, val) => acc + val, 0);
  const historyString = state.history
    .map((val) => (val > 0 ? `+${val}` : val))
    .join('');
  resultEl.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
