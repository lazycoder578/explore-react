import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
       const newCount = count + 1;
       setCount(newCount);
    }
    const handleDecrement = ()=>{
       const newCount = count - 1;
       setCount(newCount);
    }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
