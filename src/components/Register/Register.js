import React, { Component } from 'react'

import '../Login/Login.css'

export class Register extends Component {
    /*
    To write an uncontrolled component, instead of writing an event handler for every state update,
     you can use a ref to get form values from the DOM.
    */

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    submitFormHandler = (e) => {
        alert(`Welcome ${this.inputRef.current.value} \nYour E-mail: ${this.emailRef.current.value} \n Register Completed`)
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitFormHandler}>
                    <p style={{ 'color': 'red', 'textAlign': 'center', 'fontSize': '24px', 'marginTop': '24px' }}>There is a focus on username input</p>
                    <input type="text" placeholder="Username" ref={this.inputRef} />
                    <input type="email" placeholder="E-mail" ref={this.emailRef} />
                    <input type="password" placeholder="Password" ref={this.passwordRef} />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register
