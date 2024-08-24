import React, {useState, useEffect} from "react";

// How to prevent memory leak in this component?

const PostLayout = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const onScroll = () => setProgress(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ height: 2000 }}>
      <p>Progress: {progress}</p>
      {children}
    </div>
  );
};


// Answer: we need to add a cleanup function to the return statement of useEffect to prevent memory leak.

// Fixed code

// const PostLayout = ({ children }) => {
//   const [progress, setProgress] = useState(0);

//   const onScroll = () => setProgress(window.scrollY);

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <div style={{ height: 2000 }}>
//       <p>Progress: {progress}</p>
//       {children}
//     </div>
//   );
// };