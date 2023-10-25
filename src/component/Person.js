import React from 'react'

function Person({ele}) {
    const {name,age,skill} = ele
  return (
    <div><p >I am {name}. I am {age} years old. I have fluency in {skill}</p></div>
  )
}

export default Person