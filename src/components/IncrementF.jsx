import React from 'react';
import { useState } from 'react';

export default function IncrementF() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);
  return <div>
      <div > <h2> Using functional component</h2>  </div>
    <button onClick={incrementCounter}> Increment </button>
    <div >Count-{counter}</div> 
      <button onClick={decrementCounter}>Decrement </button>
    
  </div>;
}
