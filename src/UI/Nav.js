import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export class Nav extends Component {

    render() {
        return (
            <nav>
                <h3>TODO</h3>
                <ul className="nav-links">
                    <Link className="link" to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className="link" to='/Todo'>
                        <li>Todo</li>
                    </Link>
                    <Link className="link" to='/Login'>
                        <li>Login</li>
                    </Link>
                    <Link className="link" to='/Register'>
                        <li>Register</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
