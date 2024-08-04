import React, { useState } from "react";

// Task: Predict what count will display after click button once?

export function StateUpdating() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 2);
    setCount(count + 3);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}



// Answer: 3