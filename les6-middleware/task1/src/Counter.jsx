import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

const Counter = () => {
  const counterData = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="counter__value" onClick={() => dispatch(reset())}>{counterData}</span>
      <button className="counter__button" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default Counter;
