import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            currTask: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.currTask],
            currTask: ""
        })
    }

    handleDelete = (idx) => {
        let newTasks = this.state.tasks.filter((task, index) => index !== idx);
        this.setState({
            tasks: [...newTasks]
        })
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add Task</button>
                <ul>
                    {this.state.tasks.map((task, idx) => (
                        <div key={idx}>
                            <li>{task}</li>
                            <button onClick={() => this.handleDelete(idx)}>Delete Task</button>
                        </div>
                    ))}
                </ul>
            </>
        )
    }
}
