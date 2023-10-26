import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.state
        return (
            <div>
                <h1 onMouseOver={incrementCount}>
                    Hovered {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)