import React, { useState } from 'react'

function Hooks() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
    
    </div>
  )
}

export default Hooks