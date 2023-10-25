import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Willis', 'Wayne']

    const members = [
        {
            id: 1,
            name: 'Bruce',
            age: 23,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Willis',
            age: 25,
            skill: 'Node'
        },
        {
            id: 3,
            name: 'Wayne',
            age: 27,
            skill: 'Java'
        }
    ]

    const personList = members.map(ele =>  <Person key = {ele.id} ele = {ele} />)
    return (
        <div>{personList}</div>
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>
        // <div>
        //     {
        //         names.map(name => <h2>{name}</h2>)
        //     }
        // </div>
    )
}

export default NameList