import React from 'react';
import AddItem from './AddItem';
import ToDoList from './ToDoList';

export default class Todo extends React.Component {
    idInc = 4;
    constructor() {
        super();
        this.state = {
            items: [{
                id: 1,
                task: "Know Controlled and Uncontrolled Components",
                done: false
            }, {
                id: 2,
                task: "Learn React Router",
                done: false
            }, {
                id: 3,
                task: "Link All Components",
                done: false
            }]
        }
    }

    addItem = (item) => {
        this.idInc++;
        item.id = this.idInc;
        this.state.items.push(item)
        this.setState({ items: this.state.items })
    }

    deleteItem = (id) => {
        let index = this.state.items.findIndex((item) => item.id === id);
        this.state.items.splice(index, 1);
        this.setState({ items: this.state.items });
    }


    toggleDone = (id) => {
        let task = this.state.items.find((item) => item.id === id)
        task.done = !task.done
        this.setState({ items: this.state.items });
    }

    render() {
        return (
            <div>
                <ToDoList tasks={this.state.items} deleteItem={this.deleteItem} toggleDone={this.toggleDone} />
                <AddItem addItem={this.addItem} />
            </div>)
    }
}
