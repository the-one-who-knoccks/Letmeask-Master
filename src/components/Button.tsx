/* eslint-disable react/button-has-type */
import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1);
  }
  return <button onClick={updateCounter}>Contador {counter}</button>;
}
