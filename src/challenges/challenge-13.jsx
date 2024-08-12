import React from 'react'

// What's wrong with this code?

export function MyComponent({ items }) {
  const ListElement = ({ title }) => <li>{title}</li>

  return (
    <div>
      {items.map((item, index) => (<ListElement key={index} title={item} />))}
    </div>
  )
}
