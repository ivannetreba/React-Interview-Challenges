import React, { useState } from "react"

// What's wrong with this code?

export function MyComponent() {
  const onClick = () => {
    setList(2);
  }

  const [list, setList] = useState(0);

  return (
    <div>
      <button onClick={onClick}>Increase</button>
    </div>
  );
}