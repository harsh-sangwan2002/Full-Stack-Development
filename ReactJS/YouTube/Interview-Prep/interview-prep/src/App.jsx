import Button from "./components/Button"
import Form from "./components/Form"
import Form2 from "./components/Form2"
import Prototypes from "./components/Prototypes"

function App() {

  return (
    <>
      <Form />
      <Form2 />
      <Prototypes val={true} />
      <Button dark />
      <Button />
    </>
  )
}

export default App
