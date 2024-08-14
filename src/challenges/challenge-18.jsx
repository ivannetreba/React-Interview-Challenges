
// What's wrong with this code?

export function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick()}>
      Click me
    </button>
  );
}


