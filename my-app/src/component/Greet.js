import React, { Component } from "react"

// function Greet() {
//     return <h1>Hello</h1>
// }

// class Greet extends Component {
//     render() {
//         return <h1> Class Component</h1>
//     }
// }

// const Greet = () => {
//     return (
//         <div className="dummyClass">
//             <h1>hello</h1>
//         </div>
//     )
// }

// const Greet = () => {
//     return React.createElement(
//         'div',
//         { id: 'hello', className: 'dummyClass' },
//         React.createElement('h1', null, 'hello world2'))
// }

const Greet = props => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} </h1>
            {props.children}
        </div>
    )
}
export default React.memo(Greet)