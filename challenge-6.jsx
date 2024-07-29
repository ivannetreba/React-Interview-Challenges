import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default function App() {
  return <Greeting />;
}

// Task: How to fix the code above?

// Explanation: The Greeting component requires a name prop but it's not provided in App. This causes a prop types error.

// Fixed Code:
/*
import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default function App() {
  return <Greeting name="World" />;
}
*/

