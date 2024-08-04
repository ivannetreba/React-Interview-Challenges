import { useRef, useEffect, forwardRef } from "react";

// What's wrong with this code?

export function Parent() {
  const elementRef = useRef();

  useEffect(() => {
    console.log(elementRef.current);
    // expected log: <div>Hello, World!</div>
  }, []);

  return <Child ref={elementRef} />;
}

function Child({ ref }) {
  return <div ref={ref}>Hello, World!</div>;
};


// Answer: We can't pass "ref" as a prop.
// We need to use the built-in higher-order function forwardRef(props, ref) to achieve this result.
// To know more, read article: https://dmitripavlutin.com/react-forwardref/

// Fixed code:

// import { useRef, useEffect, forwardRef } from "react";

// export function Parent() {
//   const elementRef = useRef();

//   useEffect(() => {
//     console.log(elementRef.current); 
//     // expected log: <div>Hello, World!</div>
//   }, []);

//   return <Child ref={elementRef} />;
// }

// const Child = forwardRef(function (props, ref) {
//   return <div ref={ref}>Hello, World!</div>;
// });