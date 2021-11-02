import React from "react";
import './todo.css'

export default class AddItem extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "",
            done: false,
        }
    }
    getValue = (e) => {
        let task = e.target.value
        this.setState({ text: task })
    }
    addTask = () => {
        let item = {
            task: `${this.state.text}`,
            done: false
        }
        this.props.addItem(item)
    }
    render() {
        return (
            <div className="input-todo">
                <h2>Enter Task</h2>
                <input type="text" onChange={this.getValue} value={this.state.text} />
                <button className="myButton add-btn" onClick={this.addTask}>Add</button>
            </div>)
    }
}
