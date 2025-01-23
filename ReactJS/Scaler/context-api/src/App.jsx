import Family from './components/Family'
import FamilyContext from './context/FamilyContext'

function App() {

  return (
    <FamilyContext.Provider>
      <Family />
    </FamilyContext.Provider>
  )
}

export default App
