import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Rishit'
        }
        console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log("LifecycleA Component did mount");
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate ');
    }
    render() {
        console.log("LifecycleA render");
        return (
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>
        )
    }


}

export default LifecycleA