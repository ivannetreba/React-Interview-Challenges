import React from "react";

// Is it reasonable to apply 'useMemo' in these two code sneppets? 

/////////****///////// - 1

export function Example1({ businessUid }) {
  const path = React.useMemo(() => `visits/${businessUid}`, [businessUid]);

  return <a href={path}>Open</a>;
}

/////////****///////// - 2

function calculateTotalPrice(arr) {
  return arr.reduce((sum, obj) => {
    return sum + obj.price;
  }, 0);
}

export function Example2() {
  const total = React.useMemo(() => calculateTotalPrice(), []);

  return <h1>Цена: {total}</h1>;
}
