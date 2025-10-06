import React from "react";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App;