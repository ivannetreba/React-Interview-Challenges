import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// Task: predict the output

export default function Challenge4() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Effect with count:", count);
  }, [count]);

  useEffect(() => {
    console.log("Effect with text:", text);
  }, [text]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setText("New Text")}>Change Text</button>
    </div>
  );
}


// Answer:

// Initial render: No logs.
// Click "Increment Count":
// Effect with count: 1
// Click "Change Text":
// Effect with text: New Text
// Explanation: Each useEffect hook runs when its dependency changes. The first hook runs when count changes, and the second hook runs when text changes.