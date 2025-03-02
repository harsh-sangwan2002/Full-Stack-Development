import { createRoot } from 'react-dom/client'
import TodoList from './components/TodoList'

createRoot(document.getElementById('root')).render(
  <div>
    <TodoList />
  </div>
)
