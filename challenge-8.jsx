import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => setCount((prevCount) => prevCount + 1);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;

// Task: Identify and fix the bug in the code above.

// Explanation: The event listener is added correctly, but not removed because the dependency array is empty. The effect runs only once, which is fine here, but it’s good practice to include the cleanup properly.

// Fixed Code:
/*
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => setCount((prevCount) => prevCount + 1);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
*/