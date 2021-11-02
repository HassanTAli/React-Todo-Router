import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Todo from './components/TODO/TODO'
import Nav from './UI/Nav'

import './components/Login/Login.css'
import './Home.css'

class MainPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="/Todo" component={Todo} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

class Home extends Component {
    render() {
        return (<React.Fragment>
            <div className="container">
                <h1>Home Page</h1>
            </div>
        </React.Fragment>)
    }
}

export default MainPage
