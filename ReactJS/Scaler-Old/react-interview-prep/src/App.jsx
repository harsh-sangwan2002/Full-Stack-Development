import Counter from "./components/Counter"
import DataComp from "./components/DataComp"
import FuncTodo from "./components/FuncTodo"
import Todo from './components/Todo'
import WithLoading from "./components/WithLoading"

const EnhancedComponent = WithLoading(DataComp);

function App() {

  return (
    <>
      {/* <Counter name="Class Based Component" /> */}
      {/* <Todo /> */}
      {/* <FuncTodo /> */}
      <EnhancedComponent data="Here is some data!" />
    </>
  )
}

export default App
