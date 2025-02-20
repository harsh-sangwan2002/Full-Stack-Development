import Family from './components/Family'
import FamilyContext from './context/FamilyContext'

function App() {

  const familyInfo = {
    familyName: "The Griffin's family",
    onlyForParent: () => {
      return "Info for parents only"
    },
    onlyForGrandChildren: () => {
      return "Info for grand children only"
    }
  }

  return (
    <FamilyContext.Provider value={familyInfo}>
      <Family />
    </FamilyContext.Provider>
  )
}

export default App
