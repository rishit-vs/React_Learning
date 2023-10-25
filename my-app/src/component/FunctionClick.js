import React from 'react'

function FunctionClick() {
    function clickHandler () {
        <h1>clicked</h1>
        console.log("button click");
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick