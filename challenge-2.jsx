import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


// Output (in production, without react strict mood)
// step 1
// step 2
// step 5

// Explanation:

// step 1 is logged when App component renders initially.
// step 2 is logged when the useEffect in App component runs after the initial render.
// step 5 is logged when the useEffect in Child component runs after Child component renders.




