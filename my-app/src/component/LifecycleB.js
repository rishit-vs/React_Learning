import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Rishit'
        }
        console.log("LifecycleB constructor");
      }

    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log("LifecycleB Component did mount");
    }
    render() {
        console.log("LifecycleB render");
        return <div>LifecycleB</div>
    }


}

export default LifecycleB