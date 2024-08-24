// What's wrong with the following code?

// add more mistakes like this
// Next.js show error with hydration.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        <div>Test</div>
      </p>
    </main>
  );
}

// Answer: we can't use the div element as a child of the p element.