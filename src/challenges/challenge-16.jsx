import React, { useState } from "react"

// What's wrong with this code?

export function MyComponent() {
  const [list, setList] = useState(initialList);

  return (
    <div>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}