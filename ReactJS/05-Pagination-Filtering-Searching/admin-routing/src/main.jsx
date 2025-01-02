import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*********
 * 1. Static UI
 * 2. Logic to get the products -> Fakestore API
 * 3. Searching, Sorting & Filtering -> MUI Icons(React)
 * 4. Pagination
 * 5. Categorization (Filter) 
 * 
 * Products: 'https://fakestoreapi.com/products'
 * Categories: 'https://fakestoreapi.com/products/categories'
 * *******/

createRoot(document.getElementById('root')).render(
    <App />
)
