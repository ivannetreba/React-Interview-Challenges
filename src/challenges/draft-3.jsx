import React, { useRef, forwardRef } from 'react';

export function Parent() {
  const inputRef = useRef(null);

  function handleClick() {
    if (inputRef.current) inputRef.current.focus();
  }

  return (
    <>
      <button onClick={handleClick}>Focus Input</button>
      <ForwardedChild ref={inputRef} />
    </>
  );
}

function Child(props, ref) {
  return <input type="text" ref={ref} />;
}

const ForwardedChild = forwardRef(Child);

// Why do we need props in Child params?
// Do I need cleanup function and useEffect?
// Do I need useCallback for memoization?