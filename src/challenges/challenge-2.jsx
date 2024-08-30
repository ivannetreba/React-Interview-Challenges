import React, { useEffect, useState } from "react";

// Task: predict the output

export default function App() {
  const [count, setCount] = useState(1);

  console.log('1');

  useEffect(() => {
    return () => {
      console.log('2');
    };
  }, [count]);

  useEffect(() => {
    setCount((count) => count + 1); 
  }, []);

  return <Child count={count} />;
}

function Child({ count }) {
  useEffect(() => {
    console.log('3');
    return () => {
      console.log('4');
    };
  }, [count]);

  return null;
}





// Answer: 1 3 1 4 2 3




