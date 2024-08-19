import { useEffect, useState, useMemo } from "react";

// Will useEffect fire when darkMode is changed? If yes, why and how to prevent it?

export default function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const person = { age, name }

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type="checkbox" value={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
    </div>
  );
}

// Answer: Yes, useEffect will fire when darkMode is changed, because it provokes a re-render and creates a new person object. To prevent it, we can use useMemo.

// Fixed code:

// export default function App() {
//   const [age, setAge] = useState(0);
//   const [name, setName] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   const person = useMemo(() => ({
//     age, name
//   }), [age, name]);

//   useEffect(() => {
//     console.log(person);
//   }, [person]);

//   return (
//     <div>
//       <input value={age} type="number" onChange={(e) => setAge(e.target.value)} />
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="checkbox" value={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
//     </div>
//   );
// }
