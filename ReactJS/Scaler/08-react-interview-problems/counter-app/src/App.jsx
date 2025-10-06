import './App.css'
import Counter from './components/Counter'
import Data from './components/Data'
import Todo from './components/Todo'
import WithLoading from './components/WithLoading'

const EnchancedComponent = WithLoading(Data);

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Todo /> */}
      <EnchancedComponent data="This is some data" />
    </>
  )
}

export default App
