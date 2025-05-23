import { Component } from 'react'

export class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className='container'>
                <button onClick={this.decrement}>Decrement</button>
                <h1>Count is {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default CounterClass
