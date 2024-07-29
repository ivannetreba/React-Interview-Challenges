import React, { useReducer } from 'react';

// Task: Predict the output

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Challenge10() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}


// Answer: Each click on the "Increment" button will increment the count by 1, and each click on the "Decrement" button will decrement the count by 1.

// Explanation: The useReducer hook is used to manage the state and dispatch actions. The reducer function handles the state changes based on the action type.
