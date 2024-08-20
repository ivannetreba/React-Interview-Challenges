import React, {useState, useEffect} from "react";

// How to make this component better?

const PostLayout = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    setProgress(window.scrollY);
  };
  
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



// Fixed code

// const PostLayout = ({ children }) => {
//   const [progress, setProgress] = React.useState(0);
//   const onScroll = () => {
//     setProgress(window.scrollY);
//   };
//   React.useEffect(() => {
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