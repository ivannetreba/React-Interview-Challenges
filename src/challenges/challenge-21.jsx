import { useState } from "react"

// What will be in the console after we click on the "+" buttons three times?

export function Counter() {
  const [count, setCount] = useState(0)

  function adjustCount(amount) {
    setCount(currentCount => currentCount + amount)
    console.log(count)
  }

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  )
}

// Answer: 0 1 2