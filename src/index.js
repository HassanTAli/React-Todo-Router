// import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from './MainPage'


// create a React component
const App = () => {
    return (
        <React.Fragment>
            <MainPage />
        </React.Fragment>
    )
}

// take a react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

/*
    Routing steps:
        -npm install react-router-dom
*/