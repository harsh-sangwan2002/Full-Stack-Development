import TodoList from "./components/TodoList"
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
      <TodoList title="Your Todo" />
      {/* <TodoList title="Your Todo" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7",]} /> */}
    </div>
  )
}

export default App
