import React from "react";

import './todo.css'
export default class ToDoList extends React.Component {
    render() {
        return (<div>
            <center>
                {this.props.tasks.map((item, ind) => {
                    return (
                        <div key={item.id} className="todo-item" style={{ backgroundColor: item.done ? 'green' : 'rgb(2, 2, 31)' }} >
                            <h1>{item.task}</h1>
                            <button className="myButton red-btn" onClick={() => this.props.deleteItem(item.id)} >Delete</button>
                            <button className="myButton green-btn" onClick={() => this.props.toggleDone(item.id)} >Done</button>
                        </div>)
                })
                }
            </center>
        </div>

        )
    }
}
