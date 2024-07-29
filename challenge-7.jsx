import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

// Task: What output is provided by this code?

// Answer: Each click on the button will increment the count by 1.

// Explanation: useCallback memoizes the increment function, but since count is a dependency, the function is recreated each time count changes. This ensures the correct value of count is used.
