import React, { Component } from 'react'

export class Todo extends Component {

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            todos: [],
            currTodo: ''
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            currTodo: value
        })
    }

    addTodo = () => {
        let newTodo = this.state.currTodo;
        let todos = [...this.state.todos, newTodo];
        this.setState({
            todos: todos,
            currTodo: ''
        })
    }

    componentDidMount() {
        console.log("componentDidMount -> Fetching initial data");
        setTimeout(() => {
            this.setState({
                todos: ['learn React', 'learn Angular', 'learn Vue']
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.todos !== this.state.todos) {
            console.log("componentDidUpdate");
            console.log("updated todos list: ", this.state.todos);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: cleaning up resources.");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>I am Class Based Todo</h1>
                <input type="text" value={this.state.currTodo} onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map((todo, idx) => {
                            return <li key={idx}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todo
