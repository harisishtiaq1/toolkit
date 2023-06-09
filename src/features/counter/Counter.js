import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  incrementIfEven,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("5");
  const [newIncrementAmount, setNewIncrementAmount] = useState("3");

  const incrementValue = Number(incrementAmount) || 0;
  const newIncrementValue = Number(newIncrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          disabled
          className={styles.textbox}
          aria-label="Set increment amount"
          value={newIncrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <input
          disabled
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setNewIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(newIncrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(newIncrementValue))}
        >
          Add Async based on Even
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfEven(newIncrementValue))}
        >
          Add If Even
        </button>
      </div>
    </div>
  );
}
