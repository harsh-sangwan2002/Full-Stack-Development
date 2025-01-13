import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // In dev-strict mode useEffect will be called twice
  <App />,
)
