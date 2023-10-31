import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount]  = useState (0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])
  return (
    <div>
        <button onClick={() => setCount ( count + 1)}>clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne