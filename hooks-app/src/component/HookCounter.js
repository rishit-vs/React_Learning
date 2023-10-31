import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
    const [hoverCount, setHoverCount] = useState(0)
  return (
    <div>
        <button onClick={() => {setCount(count + 1)}}>Count {count}</button>
        <h1 onMouseOver={() => {setHoverCount(hoverCount+1)}}>hoverCount {hoverCount}</h1>
    </div>
  )
}

export default HookCounter