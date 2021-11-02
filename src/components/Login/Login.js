import React, { Component } from 'react'

import './Login.css'

class Login extends Component {
    /*
    To convert into controlled Component by follow two steps
   */
    /*
      ==== number one ======
              create state that control the value
      */
    constructor(props) {
        super(props)


        this.state = {
            username: "",
            password: ""
        }
    }
    /*
          ==== number one ======
                  handle the onChange event
          */
    changeEmailHandler = (e) => { this.setState({ username: e.target.value }) }
    changePasswordHandler = (e) => { this.setState({ password: e.target.value }) }
    submitFormHandler = (e) => {
        alert(`Welcome ${this.state.username}`)
        e.preventDefault()
    }

    render() {
        const { username, password } = this.state
        return (
            <div className="container">
                <form onSubmit={this.submitFormHandler}>
                    <input type="text" value={username} onChange={this.changeEmailHandler} placeholder="Username" />
                    <input type="password" value={password} onChange={this.changePasswordHandler} placeholder="Password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login
