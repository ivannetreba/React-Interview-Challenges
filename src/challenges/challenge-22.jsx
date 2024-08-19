import React, {useCallback, memo} from "react"

// Is the App component optimized? Will ExpensiveComponent re-render every time App re-renders?

export default function App() {
  const onClick = () => {
    // handle click event
  }

  return <ExpensiveComponent onClick={onClick} />
}

const ExpensiveComponent = memo(({ onClick }) => {
  /* ... */
})



// Fixed code:

// export default function App() {
//   const onClick = useCallback(() => {
//     // handle click event
//   }, [])

//   return <MyExpensiveComponent onClick={onClick} />
// }

// const MyExpensiveComponent = memo(({ onClick }) => {
//   /* ... */
// })