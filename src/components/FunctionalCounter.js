import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../actions';

const FunctionalCounter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <div>{counter}</div>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          F INCREMENT BY 1
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(decrement())}>
          F DECREMENT BY 1
        </button>
      </div>
      <button type="button" onClick={() => dispatch(reset())}>
        F RESET
      </button>
    </div>
  );
};

export default FunctionalCounter;
