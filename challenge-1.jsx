import "./styles.css";
import React, { useState } from "react";
import Item from "./Item";

type SomeDTO = { id: number };

export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  return (
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>
      <ul>
        {list.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
      <button onClick={handleReverseClick}>Click me to reverse a list</button>
    </div>
  );
}

// Task: How to fix the code above?

// Explanation: The reverse method mutates the original array, causing unexpected behavior in React's state management. We should create a new reversed array to avoid mutating the state directly.

// Fixed Code:
/*
import "./styles.css";
import React, { useState } from "react";
import Item from "./Item";

type SomeDTO = { id: number };

export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => [...old].reverse());
  };

  return (
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>
      <ul>
        {list.map((item, index) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <button onClick={handleReverseClick}>Click me to reverse a list</button>
    </div>
  );
}
*/