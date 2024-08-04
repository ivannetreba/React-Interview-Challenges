import React, { useEffect, useState } from "react";

// Task: predict the output

export function PredictLog() {
  console.log('1');

  useEffect(() => {
    console.log('2');
  }, []);

  return <Child />;
}

function Child() {
  console.log('3');

  useEffect(() => {
    console.log('4');
  }, []);

  return null;
}





// Answer: 1 3 1 4 2 3




