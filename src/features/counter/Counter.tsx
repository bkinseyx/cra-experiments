import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter(): JSX.Element {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={(): void => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={(): void => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e): void => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={(): void => {
            dispatch(incrementByAmount(Number(incrementAmount) || 0));
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={(): void => {
            dispatch(incrementAsync(Number(incrementAmount) || 0));
          }}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
