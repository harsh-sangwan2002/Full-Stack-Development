import React from 'react'

// Class-Based component
class Counter extends React.Component {
    constructor() {
        console.log("constructor");
        super(); // invoke constructor of parent class
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>Hello World, {this.props.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        )
    }
}

export default Counter;