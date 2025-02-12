import React, { Component } from "react"
import Todo from "./components/Todo";

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Todo />
      </div>
    )
  }
}