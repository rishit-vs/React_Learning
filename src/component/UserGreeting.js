import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        return this.state.isLoggedin && <div>Welcome</div>                    // this is short circuit approach
        // if (this.state.isLoggedin) {
        //     return <div>Welcome</div>
        // }else {
        //     return <div>Greetings</div >
        // }
    }
}

export default UserGreeting