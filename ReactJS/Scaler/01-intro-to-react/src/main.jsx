import { createRoot } from 'react-dom/client'
import App from './App'
import TodoList from './components/TodoList'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <TodoList />
  </div>
)
