import React, { useState, useEffect } from 'react';

// Task: Fix the code

export default function Challenge9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}


// Answer

// Explanation: The effect depends on count, and since setCount triggers a re-render, it causes an infinite loop.

// Fixed Code:
/*
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
*/