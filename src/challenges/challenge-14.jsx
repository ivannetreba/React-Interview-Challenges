import React, { useState } from "react"

// What's wrong with this code?

export function MyComponent() {
  const [colour, setColour] = useState('red');
  const [count, setCount] = useState(0);

  const onClick = () => {
    setColour('blue');
  }

  useEffect(() => {
    setCount(count + 1)
  }, [colour, count])

  return (
    <div>
      <button onClick={onClick}>ChangeColour</button>
    </div>
  );
}