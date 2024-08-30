// What's wrong with the following code?

export default function App() {
  return (
    <main>
      <p>
        <div>Test</div>
      </p>
      <ul>
        <button>Click me</button>
      </ul>
      <span>
        <h1>Title</h1>
      </span>
    </main>
  );
}

// Answer:
// 1. We can't use the div element as a child of the p element.
// 2. We can't use the button element as a direct child of the ul element.
// 4. We can't use the h1 element as a child of the span element. The span element is an inline element, while h1 is a block-level element.
