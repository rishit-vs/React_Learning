import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
        )
    }
}

export default HoverCounterTwo