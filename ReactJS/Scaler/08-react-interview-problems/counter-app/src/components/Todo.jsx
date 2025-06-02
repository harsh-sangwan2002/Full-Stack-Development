import { Component } from 'react'

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    addTodo = () => {
        if (this.state.newTodo.trim() !== '') {
            this.setState(prevState => ({
                todos: [...prevState.todos, prevState.newTodo],
                newTodo: ''
            }));
        }
    }

    removeTodo = (index) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter((_, i) => i !== index)
        }));
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={(e) => this.setState({ newTodo: e.target.value })}
                    placeholder="Add a new todo"
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => this.removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
