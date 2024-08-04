import React, { useRef } from 'react';

// What's wrong with this code?

export function FocusWithRef() {
  const myRef = useRef();

  myRef.current.focus();

  return <input ref={myRef} />;
}

// Answer: Have to use useEffect for this type of operations.

// Explanation: 
// If you try to call myRef.current.focus() directly within the component's body (i.e., within the function but outside of useEffect), it will run on every render, potentially before the input element is added to the DOM. This can cause errors or unexpected behavior.

// - myRef.current might be undefined during the initial render because the input element hasn't been added to the DOM yet.

// - Calling myRef.current.focus() directly in the function body doesn't guarantee that the DOM element is available.

// useEffect ensures that the code inside it runs only after the initial render (and on subsequent updates if dependencies change). By using useEffect, you ensure that the DOM elements are available for manipulation, avoiding errors related to undefined references.


// Fixed code:

// import React, { useRef, useEffect } from 'react';

// export function FocusWithRef() {
//   const myRef = useRef();

//   useEffect(() => {
//     myRef.current.focus();
//   }, []);

//   return <input ref={myRef} />;
// }
