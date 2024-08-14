
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


// Answer: We don't need to call the function handleClick in onClick. React will call the function when the button is clicked.