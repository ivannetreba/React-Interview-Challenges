import React, { useState } from "react"

// What's wrong with this code?

export function MyComponent() {
  const [list, setList] = useState([]);

  const onClick = () => {
    list.push(1);
  }

  return (
    <div>
      <button onClick={onClick}>Increase</button>
    </div>
  );
}