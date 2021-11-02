import React from "react";

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
        return <div>
            Task :<input type="text" onChange={this.getValue} value={this.state.text} />
            <button onClick={this.addTask}>Add</button>
        </div>
    }
}
