import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

// Task: How to fix the code above?

// Explanation: The seconds state in the setInterval callback is captured from the initial render, causing it not to update correctly. The interval should use a functional update.

// Fixed Code:

/*
import React, { useState, useEffect } from "react";

export default function Timer() {
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