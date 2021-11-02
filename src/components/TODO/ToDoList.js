import React from "react";

export default class ToDoList extends React.Component {
    render() {
        return (<div>
            <center>
                {this.props.tasks.map((item, ind) => {
                    return <div key={item.id} style={{ backgroundColor: item.done ? 'green' : 'white' }} >
                        <h1>{item.task}</h1>
                        <button onClick={() => this.props.deleteItem(item.id)} >Delete</button>
                        <button onClick={() => this.props.toggleDone(item.id)} >Done</button>
                    </div>
                })
                }
            </center>
        </div>

        )
    }
}
