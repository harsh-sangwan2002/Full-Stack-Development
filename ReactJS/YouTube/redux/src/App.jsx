import Bat from "./components/Bat"
import { Provider } from "react-redux"
import store from "./redux/store"
import Ball from "./components/Ball"

function App() {

  return (
    <Provider store={store}>
      <Bat />
      <Ball />
    </Provider>
  )
}

export default App
