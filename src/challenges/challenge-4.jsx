import React, { useState, useEffect } from "react";

// Task: Find all mistakes in code below

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

  });

  return <div>Seconds: {seconds}</div>;
}


// Answer

// First mistake: The seconds state in the setInterval callback is captured from the initial render, causing it not to update correctly. The interval should use a functional update.

// Second mistake: Without the cleanup function, the interval will not be cleared when the component unmounts. This means the interval will continue to run indefinitely, causing the setSeconds function to be called every second, even if the Timer component is no longer in the DOM. This can lead to memory leaks and potentially unwanted state updates.

// it needs a dependency array in useEffect

// Fixed Code:

/*
import React, { useState, useEffect } from "react";

export default function Challenge4() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}
*/