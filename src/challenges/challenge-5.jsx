import React, { useState } from "react";

// Task: Fix 2 mistakes in the code below to see user input in the alert.

export default function Challenge5() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


// Answer:

// Mistake 1: There is no two-way binding between the state value and the input field. Add value={value} to the input element.

// Mistake 2: The code e.target references the element where the event occurred. To retrieve the value, use e.target.value.


// Fixed code
/*
import React, { useState, useRef } from "react";

export default function Challenge5() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
*/
