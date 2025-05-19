import './App.css'

const Heading = ({ title, color }) => {
  return (
    <h1 style={{ color: color }}>{title}</h1>
  )
}

const List = () => {
  return (
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
      <li>Item4</li>
    </ul>
  )
}

const Summary = () => {
  return (
    <h3>Summary of Todo List</h3>
  )
}

const App = () => {
  return (
    <div>
      <Heading title="First heading" color="red" />
      <Heading title="Second heading" color="green" />
      <List />
      <Summary />
    </div>
  )
}

export default App
