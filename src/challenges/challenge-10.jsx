import { useState, useEffect } from "react";

export function Parent() {
  const [count, setCount] = useState(0);
  console.log('Parent body');

  useEffect(() => {
    console.log('Parent effect');
    return () => console.log('Parent cleanup');
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child count={count} />
    </div>
  );
}

function Child({ count }) {
  console.log('Child body');

  useEffect(() => {
    console.log('Child effect');
    return () => console.log('Child cleanup');
  }, [count]);

  return null;
}
