import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
  return (
    <div>
        Count: {count}
        <button onClick={() => {setCount(initialCount)}}>Reset</button>
        <button onClick={() => {setCount(prevCount => prevCount + 6)}}>Increment</button>
        <button onClick={() => {setCount(count+6)}}>Increment 2</button>
    </div>
  )
}

export default HookCounterTwo