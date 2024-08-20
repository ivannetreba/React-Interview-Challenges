// Will JSX inside conditional rendering render?
// unpublished

export default function App() {
  const array = []

  return (
    <div>
      {array.length && (
        <div>
          <span>Array Items:</span> {array.join(", ")}
        </div>
      )}
    </div>
  )
}

// Answer: yes